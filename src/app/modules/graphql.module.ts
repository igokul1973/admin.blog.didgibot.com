import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { apolloProviderFactory } from '@src/utilities/apolloProviderFactory';
import { AuthService } from '@services/auth.service';
import { LocalStorageService } from '@services/local-storage.service';
import { SnackbarService } from '@services/snackbar.service';
import { JwtService } from '@services/jwt.service';

@NgModule({
    exports: [ApolloModule],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: apolloProviderFactory,
            deps: [HttpLink, LocalStorageService, AuthService, SnackbarService, JwtService]
        }
    ]
})
export class GraphQLModule {}
