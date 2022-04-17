import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApolloError } from '@apollo/client/core';
import { AuthService } from '@services/auth.service';
import { GenericError } from '@src/utilities/errors';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
    });

    isLoginFailed = false;
    errorMessage = '';

    constructor(private authService: AuthService) {}

    onLoginFormSubmit() {
        this.authService
            .fetchTokens(this.loginForm.value)
            .pipe(take(1))
            .subscribe({
                next: (tokens) => {
                    if (tokens) {
                        this.authService.logIn(tokens);
                    } else {
                        console.error('The server did not return any accessToken');
                    }
                },
                error: (err: unknown) => {
                    if (err instanceof ApolloError) {
                        const { networkError, graphQLErrors } = err;
                        if (graphQLErrors) {
                            for (const error of graphQLErrors) {
                                if (error.extensions['exception']) {
                                    const exception = error.extensions['exception'] as GenericError;
                                    if (exception.status === 401) {
                                        this.errorMessage = 'You are not authorized';
                                    }
                                } else {
                                    this.errorMessage = error.message;
                                }
                            }
                        }
                        // To retry on network errors, we recommend the RetryLink
                        // instead of the onError link. This just logs the error.
                        if (networkError) {
                            this.errorMessage = networkError.message;
                        }
                    }
                    this.isLoginFailed = true;
                }
            });
    }
}
