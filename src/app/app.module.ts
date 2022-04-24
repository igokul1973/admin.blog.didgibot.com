import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { ArticlesComponent } from '@src/app/articles/articles.component';
import { GraphQLModule } from '@src/app/graphql.module';
import { LoginComponent } from '@src/app/login/login.component';
import { MaterialModule } from '@src/app/material/material.module';
import { NavigationComponent } from '@src/app/navigation/navigation.component';
import { PageNotFoundComponent } from '@src/app/page-not-found/page-not-found.component';
import { SnackbarComponent } from '@src/app/snackbar/snackbar.component';
import { ApolloModule } from 'apollo-angular';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        PageNotFoundComponent,
        NavigationComponent,
        ArticlesComponent,
        SnackbarComponent
    ],
    imports: [
        ApolloModule,
        GraphQLModule,
        FormsModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MaterialModule,
        LayoutModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
