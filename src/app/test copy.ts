import { interval, of, timer } from 'rxjs';
import { catchError, retryWhen, take, tap } from 'rxjs/operators';

/* let thrown = false;

function throwOnFirstTry() {
    if (!thrown) {
        thrown = true;
        throw 'Error trown';
    }
}

const obs = of('Leia', 'Han', 'Solo');

obs.pipe(
    tap(throwOnFirstTry),
    catchError((e: unknown) => {
        console.error('The error is: ', e);
        throw e;
    }),
    retryWhen(() => timer(1000))
).subscribe({
    next: (n) => console.log(n),
    error: console.error
}); */

timer(3000, 1000)
    .pipe(take(3))
    .subscribe((n) => console.log('timer', n));
interval(1000)
    .pipe(take(3))
    .subscribe((n) => console.log('interval', n));
