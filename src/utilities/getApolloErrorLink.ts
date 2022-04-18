import { ApolloError, FetchResult, Observable as ZenObservable } from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';
import { AuthService } from '@src/app/services/auth.service';
import HttpStatus from 'http-status-codes';
import { BehaviorSubject, Observable, Subject, take } from 'rxjs';
import { GenericError } from './errors';
import { SnackbarService } from '../app/services/snackbar.service';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * The logic below makes sure that multiple requests (operations) that
 * return 401 error should wait until the tokens are refreshed
 * and, on success, they will be repeated.
 * If the refresh is unsuccessful, the operations will not be repeated.
 */
export function getApolloErrorLink(authService: AuthService, snackbarService: SnackbarService) {
    // Flag for starting a tokens refresh process
    const isStartedRefreshSubject = new BehaviorSubject<boolean>(false);
    const isStartedRefresh$ = isStartedRefreshSubject.asObservable();
    const operations: ZenObservable<FetchResult>[] = [];
    const operationsSubject = new Subject<ZenObservable<FetchResult>>();
    const operations$ = operationsSubject.asObservable();

    function logOut() {
        operations.length = 0;
        authService.logOut();
    }

    function handleFetchTokens() {
        authService
            .refreshTokens()
            .pipe(take(1))
            .subscribe({
                next: (res) => {
                    if (res) {
                        authService.logIn(res);
                    } else {
                        logOut();
                    }
                },
                error: (error: unknown) => {
                    if (error instanceof ApolloError && error.graphQLErrors) {
                        for (const err of error.graphQLErrors) {
                            if (err.extensions['exception']) {
                                const exception = err.extensions['exception'] as GenericError;
                                if (exception.status === HttpStatus.FORBIDDEN) {
                                    logOut();
                                }
                            }
                        }
                    }
                },
                complete: () => {
                    // Stopping the flag for tokens refresh process
                    isStartedRefreshSubject.next(false);
                }
            });
    }

    isStartedRefresh$.subscribe({
        next: (isStartedRefresh) => {
            if (isStartedRefresh) {
                handleFetchTokens();
            } else {
                operations.forEach((o) => operationsSubject.next(o));
                operations.length = 0;
            }
        }
    });

    const rxToZen = <T>(rxObservable: Observable<T>): ZenObservable<T> =>
        new ZenObservable((observer) => rxObservable.subscribe(observer));

    const zenOperations = rxToZen<ZenObservable<FetchResult>>(operations$.pipe(take(1)));

    return onError((res) => {
        if (res.graphQLErrors) {
            for (const error of res.graphQLErrors) {
                if (error.extensions['exception']) {
                    const exception = error.extensions['exception'] as GenericError;
                    if (exception.status === HttpStatus.UNAUTHORIZED) {
                        operations.push(res.forward(res.operation));
                        if (!isStartedRefreshSubject.getValue()) {
                            isStartedRefreshSubject.next(true);
                        }
                        return zenOperations.flatMap(() => res.forward(res.operation));
                    } else if (exception.status === HttpStatus.FORBIDDEN) {
                        if (res.operation.operationName !== 'RefreshTokens') {
                            snackbarService.addSnackbar({
                                type: 'error',
                                data: { message: `The fetch operation ${res.operation.operationName} is forbidden` }
                            });
                        }
                    }
                }
            }
        }
        if (res.networkError) {
            if (
                res.networkError instanceof HttpErrorResponse &&
                res.networkError.name === 'HttpErrorResponse' &&
                res.networkError.statusText === 'Unknown Error'
            ) {
                snackbarService.addSnackbar({
                    type: 'error',
                    data: { message: 'Could not fetch data. Please check that you have an Internet connection' }
                });
            } else {
                snackbarService.addSnackbar({
                    type: 'error',
                    data: { message: `The fetch operation resulted in following error: ${res.networkError.message}` }
                });
            }
        }
        return;
    });
}
