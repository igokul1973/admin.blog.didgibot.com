import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TSnackbar, TSnackbarArguments } from './types';

@Injectable({
    providedIn: 'root'
})
export class SnackbarService {
    snackbarSubject = new Subject<TSnackbar>();
    snackbar$ = this.snackbarSubject.asObservable();

    private get id() {
        const nowTimestamp = Date.now();
        const random = Math.random() * Math.random() * 10000;
        return Number(`${nowTimestamp.toString()}${random}`);
    }

    addSnackbar({ data, type, duration }: TSnackbarArguments) {
        this.snackbarSubject.next({
            id: this.id,
            data,
            duration: duration || 10000,
            type: type || 'info',
            isShow: false
        });
    }
}
