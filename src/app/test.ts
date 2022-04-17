import { BehaviorSubject, Observable, of } from 'rxjs';
import { combineLatestWith, concatMap, delay, map, take, tap, withLatestFrom } from 'rxjs/operators';

type TCallBack = () => void;

const sourceErrors$ = of(12, 10, 10, 6, 3, 10, 22, 10, 10, 53);
const arrOfOperations: TCallBack[] = [];
const isFetchStartedSubject = new BehaviorSubject<boolean>(false);
const isFetchStarted$ = isFetchStartedSubject.asObservable();

function fetchTokens(): Observable<string> {
    return of('new token').pipe(delay(1200));
}

function logIn() {
    console.log('Logging user in!');
}

function logOut() {
    console.log('Logging user out!');
}

function handleFetch() {
    console.log('starting fetch..');
    const s = fetchTokens().subscribe({
        next: (res) => {
            console.log(4);
            if (res) {
                // log user in
                logIn();
            } else {
                // log user out
                logOut();
            }
        },
        complete: () => {
            // Stopping the fetch flag
            isFetchStartedSubject.next(false);
            console.log(5);
            s.unsubscribe();
        }
    });
}

/* combineLatest([sourceErrors$, isFetchStarted$]).subscribe({
    next: ([error, isFetchStarted]) => {
        if (error === 10) {
            if (!isFetchStarted) {
                isFetchStartedSubject.next(true);
            }
            arrOfOperations.push(() => console.log('Fulfilling the operation with error: ', error));
        }
    }
}); */

sourceErrors$
    .pipe(
        concatMap((v) => of(v).pipe(delay(1000))),
        tap((e) => {
            if (e === 10) {
                arrOfOperations.push(() => console.log('Fulfilling the operation with error'));
            }
        }),
        withLatestFrom(isFetchStarted$)
    )
    .subscribe({
        next: ([error, isFetchStarted]) => {
            if (error === 10 && !isFetchStarted) {
                isFetchStartedSubject.next(true);
            }
        }
    });

isFetchStarted$.subscribe({
    next: (isFetchStarted) => {
        if (isFetchStarted) {
            handleFetch();
        } else {
            arrOfOperations.forEach((callback) => {
                callback();
            });
            arrOfOperations.length = 0;
        }
    }
});
