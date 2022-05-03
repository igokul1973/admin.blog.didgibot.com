import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { AuthService } from '@services/auth.service';
import { StyleManagerService } from '@services/style-manager.service';
import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouteUrlEnum } from '@src/app/types';
import { RightDrawerService } from '@services/right-drawer.service';
import { RightDrawerComponentsEnum } from '@services/types';
import { IArticle } from '@src/generated/types';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
    @ViewChild('drawer') drawer!: MatDrawer;

    searchForm = new FormGroup({
        searchInput: new FormControl('')
    });

    routes = RouteUrlEnum;

    isSearchActivated = false;

    showSearch = false;
    isDark$ = this.styleManager.isDark$;

    isLeftDrawerOpenSubject = new BehaviorSubject<boolean>(false);
    isLeftDrawerOpen$ = this.isLeftDrawerOpenSubject.asObservable();

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

    observables = {
        isLeftDrawerOpen: this.isLeftDrawerOpen$,
        isRightDrawerOpen: this.rightDrawerService.isOpen$,
        leftDrawerComponent: this.rightDrawerService.component$,
        isExpanded: this.isExpanded$,
        isDark: this.isDark$,
        isHandset: this.isHandset$,
        isMedium: this.isMedium$,
        isLessThanMedium: this.isLessThanMedium$,
        isMoreThanMedium: this.isMoreThanMedium$
    };
    state$ = combineLatest(this.observables);
    leftDrawerComponents = RightDrawerComponentsEnum;

    constructor(
        private breakpointObserver: BreakpointObserver,
        private styleManager: StyleManagerService,
        private authService: AuthService,
        private renderer: Renderer2,
        private rightDrawerService: RightDrawerService
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
                this.isLeftDrawerOpenSubject.next(false);
            }
        });

        this.isMediumSubscription = this.isMedium$.subscribe((isMedium) => {
            if (isMedium) {
                this.isLeftDrawerOpenSubject.next(true);
            }
        });

        this.isMoreThanMediumSubscription = this.isMoreThanMedium$.subscribe((isMoreThanMedium) => {
            if (isMoreThanMedium) {
                this.isLeftDrawerOpenSubject.next(true);
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
                this.isLeftDrawerOpenSubject.next(false);
            }
            if (!isExpanded && isOpen) {
                this.isExpandedSubject.next(true);
                this.isLeftDrawerOpenSubject.next(true);
            }
            if (!isOpen) {
                this.drawer._modeChanged.next();
                this.isExpandedSubject.next(false);
                this.isLeftDrawerOpenSubject.next(true);
            }
        } else {
            this.isLeftDrawerOpenSubject.next(!isOpen);
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

    openCreateArticleSidenav() {
        this.rightDrawerService.open<IArticle>(RightDrawerComponentsEnum.createArticle);
    }

    openCreateCategorySidenav() {
        this.rightDrawerService.open<IArticle>(RightDrawerComponentsEnum.createCategory);
    }
}
