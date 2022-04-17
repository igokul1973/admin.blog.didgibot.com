import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApolloLink } from '@apollo/client/core';
import { environment } from '@src/environments/environment';
import { getApolloErrorLink } from '@src/utilities/getApolloErrorLink';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { cache } from './cache';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/local-storage.service';
import { SnackbarService } from './services/snackbar.service';
import { SnackbarComponent } from './snackbar/snackbar.component';

const ACCESS_TOKEN_HEADER_KEY = 'Authorization';
@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        NavigationComponent,
        ArticlesComponent,
        LoginComponent,
        SnackbarComponent
    ],
    imports: [
        ApolloModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MaterialModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule
    ],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: (
                httpLink: HttpLink,
                localStorageService: LocalStorageService,
                authService: AuthService,
                snackbarService: SnackbarService
            ) => {
                const httpApolloLink = httpLink.create({
                    uri: environment.apiUrl
                });
                // Adding an access token to each request but the LoginUser
                const authLink = new ApolloLink((operation, forward) => {
                    if (operation.operationName !== 'LoginUser') {
                        operation.setContext({
                            headers: {
                                [ACCESS_TOKEN_HEADER_KEY]: `Bearer ${localStorageService.getAccessToken()}`
                            }
                        });
                    }
                    return forward(operation);
                });

                const errorApolloLink = getApolloErrorLink(authService, snackbarService);

                const link = errorApolloLink.concat(authLink.concat(httpApolloLink));

                return {
                    cache,
                    link
                };
            },
            deps: [HttpLink, LocalStorageService, AuthService, SnackbarService]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
