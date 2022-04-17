import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { StyleManagerService } from '@services/style-manager.service';
import { LocalStorageService } from '@services/local-storage.service';
import { AuthService } from '@services/auth.service';
import { RouteUrlEnum } from '../types';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
    @ViewChild('drawer') drawer!: MatDrawer; // ElementRef<HTMLDivElement>;

    searchForm = new FormGroup({
        searchInput: new FormControl('')
    });

    routes = RouteUrlEnum;

    isSearchActivated = false;

    showSearch = false;
    isDark$ = this.styleManager.isDark$;

    isOpenSubject = new BehaviorSubject<boolean>(false);
    isOpen$ = this.isOpenSubject.asObservable();

    isExpandedSubject = new BehaviorSubject<boolean>(false);
    isExpanded$ = this.isExpandedSubject.asObservable();

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map((result) => result.matches),
        shareReplay({ bufferSize: 1, refCount: true })
    );

    isLessThanMedium$ = this.breakpointObserver
        .observe([Breakpoints.XSmall, Breakpoints.Small])
        .pipe(map((result) => result.matches));

    isLessThanMediumSubscription: Subscription | null = null;

    isMedium$ = this.breakpointObserver.observe(Breakpoints.Medium).pipe(
        map((result) => {
            return result.matches;
        })
    );

    isMediumSubscription: Subscription | null = null;

    isMoreThanMedium$ = this.breakpointObserver
        // .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
        .observe('(min-width: 960px)')
        .pipe(map((result) => result.matches));

    isMoreThanMediumSubscription: Subscription | null = null;

    state$ = combineLatest([
        this.isOpen$,
        this.isDark$,
        this.isHandset$,
        this.isMedium$,
        this.isLessThanMedium$,
        this.isMoreThanMedium$,
        this.isExpanded$
    ]).pipe(
        map(([isOpen, isDark, isHandset, isMedium, isLessThanMedium, isMoreThanMedium, isExpanded]) => ({
            isOpen,
            isDark,
            isHandset,
            isMedium,
            isLessThanMedium,
            isMoreThanMedium,
            isExpanded
        }))
    );

    constructor(
        private breakpointObserver: BreakpointObserver,
        private styleManager: StyleManagerService,
        private localStorageService: LocalStorageService,
        private authService: AuthService,
        private renderer: Renderer2
    ) {
        this.renderer.listen('window', 'click', (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest('.search-icon') && !target.closest('.search-bar') && this.isSearchActivated) {
                this.isSearchActivated = !this.isSearchActivated;
            }
        });
    }

    ngOnInit(): void {
        this.isLessThanMediumSubscription = this.isLessThanMedium$.subscribe((isLessThanMedium) => {
            if (isLessThanMedium) {
                this.isOpenSubject.next(false);
            }
        });

        this.isMediumSubscription = this.isMedium$.subscribe((isMedium) => {
            if (isMedium) {
                this.isOpenSubject.next(true);
            }
        });

        this.isMoreThanMediumSubscription = this.isMoreThanMedium$.subscribe((isMoreThanMedium) => {
            if (isMoreThanMedium) {
                this.isOpenSubject.next(true);
            }
        });
    }

    ngOnDestroy(): void {
        this.isLessThanMediumSubscription?.unsubscribe();
        this.isMediumSubscription?.unsubscribe();
        this.isMoreThanMediumSubscription?.unsubscribe();
    }

    onClick(state: { isExpanded: boolean; isOpen: boolean; isMedium: boolean }) {
        const { isExpanded, isOpen, isMedium } = state;
        if (isMedium) {
            if (isExpanded && isOpen) {
                this.isOpenSubject.next(false);
            }
            if (!isExpanded && isOpen) {
                this.isExpandedSubject.next(true);
                this.isOpenSubject.next(true);
            }
            if (!isOpen) {
                // console.log(this.drawer._modeChanged.next()/* .subscribe(console.log)) */;
                this.drawer._modeChanged.next();
                this.isExpandedSubject.next(false);
                this.isOpenSubject.next(true);
            }
        } else {
            this.isOpenSubject.next(!isOpen);
        }
    }

    // TODO: WIP - turn it on when necessary
    search() {
        this.showSearch = false;
    }

    toggleDarkTheme(isDark: boolean | undefined) {
        if (typeof isDark === 'boolean') {
            this.styleManager.toggleDarkTheme(isDark);
        }
    }

    logout() {
        this.authService.logOut();
    }
}
