import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { ArticlesComponent } from '@components/articles/articles.component';
import { GraphQLModule } from '@modules/graphql.module';
import { LoginComponent } from '@components/login/login.component';
import { NavigationComponent } from '@components/navigation/navigation.component';
import { PageNotFoundComponent } from '@components/page-not-found/page-not-found.component';
import { SnackbarComponent } from '@components/snackbar/snackbar.component';
import { CreateArticleComponent } from '@components/create-article/create-article.component';
import { MaterialInputErrorModule } from '@modules/materialInputError.module';
import { MaterialModule } from '@modules/material.module';
import { ArticleFormComponent } from '@components/article-form/article-form.component';
import { UpdateArticleComponent } from './components/update-article/update-article.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        PageNotFoundComponent,
        NavigationComponent,
        ArticlesComponent,
        SnackbarComponent,
        CreateArticleComponent,
        ArticleFormComponent,
        UpdateArticleComponent
    ],
    imports: [
        GraphQLModule,
        FormsModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MaterialModule,
        LayoutModule,
        AngularEditorModule,
        MaterialInputErrorModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
