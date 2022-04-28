import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { LocalStorageService } from '@services/local-storage.service';
import { Subscription } from 'rxjs';
import { RouteUrlEnum } from './types';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    currentUrl = '/';
    title = 'manhattanman-admin';
    isUserLoggedIn = false;
    isUserLoggedInLoading = true;
    displayNavigation = false;
    loginSubscription: Subscription | null = null;
    routerEventsSubscription: Subscription | null = null;

    constructor(
        private router: Router,
        private authService: AuthService,
        private localStorageService: LocalStorageService
    ) {
        this.routerEventsSubscription = router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                this.currentUrl = event.url;
            } else if (event instanceof NavigationCancel) {
                if (!this.isUserLoggedIn && event.url !== RouteUrlEnum.LOGIN) {
                    this.localStorageService.setLastVisitedRoute(this.currentUrl);
                }
            } else if (event instanceof NavigationEnd) {
                if (!this.isUserLoggedInLoading && this.isUserLoggedIn && event.url === RouteUrlEnum.LOGIN) {
                    this.router.navigateByUrl(RouteUrlEnum.HOME);
                }
            }
        });
    }

    ngOnInit(): void {
        this.loginSubscription = this.authService.getIsUserLoggedIn().valueChanges.subscribe({
            next: (result) => {
                this.isUserLoggedInLoading = result.loading;

                if (!this.isUserLoggedInLoading) {
                    this.isUserLoggedIn = result?.data?.isUserLoggedIn;
                    this.displayNavigation = this.isUserLoggedIn;
                    if (this.isUserLoggedIn) {
                        const lastVisitedRoute = this.localStorageService.getLastVisitedRoute();
                        this.localStorageService.removeLastVisitedRoute();
                        this.router.navigateByUrl(this.getCurrentUrl(lastVisitedRoute));
                    } else {
                        if (this.currentUrl !== RouteUrlEnum.LOGIN) {
                            this.router.navigateByUrl(RouteUrlEnum.LOGIN);
                        }
                    }
                }
            },
            error: (err: unknown) => {
                console.error(err);
            }
        });
    }

    ngOnDestroy(): void {
        this.routerEventsSubscription?.unsubscribe();
        this.loginSubscription?.unsubscribe();
    }

    getCurrentUrl(lastVisitedRoute: string | null) {
        if (lastVisitedRoute && lastVisitedRoute !== RouteUrlEnum.LOGIN) {
            return lastVisitedRoute;
        } else if (this.currentUrl === RouteUrlEnum.LOGIN) {
            return RouteUrlEnum.HOME;
        } else {
            return this.currentUrl;
        }
    }
}
