import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { concatMap, delay, fromEvent, interval, Observable, of, Subject, take, takeUntil, takeWhile } from 'rxjs';
import { SnackbarService } from '../services/snackbar.service';
import { TSnackbar, TSnackbarType } from '../services/types';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements AfterViewInit, OnDestroy {
    @ViewChildren('item') items!: QueryList<ElementRef<HTMLDivElement>>;
    destroyedSubject = new Subject<boolean>();
    destroyed$ = this.destroyedSubject.asObservable();
    unsubscribeHovers$ = interval(60000).pipe(takeUntil(this.destroyed$));
    snackbar$ = this.snackbarService.snackbar$;
    activeSnackbarsMap = new Map<
        number,
        {
            snackbar: TSnackbar;
            hover$: Observable<MouseEvent>;
            unHover$: Observable<MouseEvent>;
        }
    >();
    snackbarsSubject = new Subject<TSnackbar[]>();
    snackbars$ = this.snackbarsSubject.asObservable();

    newSnackbars = new WeakSet();

    snackbarTypeToIconMap: Record<TSnackbarType, string> = {
        success: 'done',
        info: 'info',
        warning: 'warning',
        error: 'error'
    };

    constructor(private snackbarService: SnackbarService) {
        // Signing up for the snackbars coming in from the snackbarService
        this.snackbar$.pipe(takeUntil(this.destroyed$)).subscribe({
            next: (snackbar) => {
                const snackbarObject = {
                    snackbar,
                    hover$: new Observable<MouseEvent>(),
                    unHover$: new Observable<MouseEvent>()
                };
                // Pushing new snackbars to the Map that will be turned
                // into Array and fed into the template
                this.activeSnackbarsMap.set(snackbar.id, snackbarObject);
                this.snackbarsSubject.next(this.getSnackbarsArray());
                // Show the Snackbar in browser with a delay of 50ms due to
                // the necessity of an animated transition
                this.showSnackbar(snackbar);
            }
        });
    }

    ngAfterViewInit(): void {
        // As soon as the Snackbar element becomes a part of the DOM,
        // make sure it has the event listeners to hover / unhover
        // and is scheduled to disappear after its duration property value.
        // The default timeout is 10 seconds.
        this.items.changes
            .pipe(
                concatMap((el: QueryList<ElementRef<HTMLDivElement>>) => of(el)),
                takeUntil(this.destroyed$)
            )
            .subscribe({
                next: (el: QueryList<ElementRef<HTMLDivElement>>) => {
                    el.toArray().forEach((item) => {
                        if (!this.newSnackbars.has(item)) {
                            this.newSnackbars.add(item);
                            this.handleNewItem(item);
                        }
                    });
                }
            });
    }

    ngOnDestroy(): void {
        this.destroyedSubject.next(true);
    }

    getSnackbarsArray() {
        const array = Array.from(this.activeSnackbarsMap.values());
        return array.map((mapElement) => mapElement.snackbar);
    }

    /**
     * Checks if the Snackbar is shown
     */
    isItemShown(e: MouseEvent) {
        const target = e.target as HTMLDivElement | null;
        return !!target?.classList.contains('shown');
    }

    /**
     * As soon as a new Snackbar appears in the DOM, we subscribe
     * to hover/unhover for it to stay on / leave the screen if a
     * user hovers/unhovers over it, as well as scheduling the
     * closing of the Snackbar in case nothing is done with it by
     * the user.
     */
    handleNewItem({ nativeElement }: ElementRef<HTMLDivElement>) {
        const id = Number(nativeElement.dataset['id']);
        if (id) {
            const activeSnackbar = this.activeSnackbarsMap.get(id);
            if (activeSnackbar) {
                const hover$ = fromEvent<MouseEvent>(nativeElement, 'mouseenter');
                const unHover$ = fromEvent<MouseEvent>(nativeElement, 'mouseleave');
                // Unsubscribing from hover/unhover events as soon as the Snackbar item is hidden
                activeSnackbar.hover$ = hover$.pipe(takeWhile((e) => this.isItemShown(e)));
                activeSnackbar.unHover$ = unHover$.pipe(takeWhile((e) => this.isItemShown(e)));
                activeSnackbar.unHover$.subscribe({
                    next: () => {
                        this.scheduleSnackbarClose(activeSnackbar.snackbar);
                    }
                });
                // Schedule the disappearance
                this.scheduleSnackbarClose(activeSnackbar.snackbar);
            }
        }
    }

    showSnackbar(snackbar: TSnackbar) {
        of(snackbar)
            .pipe(delay(50))
            .subscribe({
                next: () => {
                    snackbar.isShow = true;
                }
            });
    }

    closeSnackbar(snackbar: TSnackbar) {
        snackbar.isShow = false;
        interval(600)
            .pipe(take(1))
            .subscribe({
                next: () => {
                    if (this.activeSnackbarsMap.has(snackbar.id)) {
                        this.activeSnackbarsMap.delete(snackbar.id);
                        this.snackbarsSubject.next(this.getSnackbarsArray());
                    }
                }
            });
    }

    scheduleSnackbarClose(snackbar: TSnackbar) {
        const activeSnackbarObject = this.activeSnackbarsMap.get(snackbar.id);
        if (activeSnackbarObject) {
            interval(snackbar.duration)
                .pipe(take(1), takeUntil(activeSnackbarObject.hover$))

                .subscribe({
                    next: () => {
                        this.closeSnackbar(snackbar);
                    }
                });
        }
    }
}
