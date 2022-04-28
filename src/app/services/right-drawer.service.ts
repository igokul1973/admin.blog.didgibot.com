import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RightDrawerComponentsEnum } from './types';

@Injectable({
    providedIn: 'root'
})
export class RightDrawerService {
    private isOpenSubject = new BehaviorSubject<boolean>(false);
    isOpen$ = this.isOpenSubject.asObservable();
    private componentSubject = new BehaviorSubject<RightDrawerComponentsEnum>(RightDrawerComponentsEnum.createArticle);
    component$ = this.componentSubject.asObservable();
    private metaSubject = new BehaviorSubject<unknown>(null);
    meta$ = this.metaSubject.asObservable();

    open<T>(component: RightDrawerComponentsEnum, meta?: T) {
        this.componentSubject.next(component);
        this.isOpenSubject.next(true);
        if (meta) {
            this.metaSubject.next(meta);
        }
    }

    close() {
        this.isOpenSubject.next(false);
    }
}
