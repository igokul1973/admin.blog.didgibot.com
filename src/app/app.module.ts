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
import { TagsComponent } from '@components/tags/tags.component';
import { GraphQLModule } from '@modules/graphql.module';
import { LoginComponent } from '@components/login/login.component';
import { NavigationComponent } from '@components/navigation/navigation.component';
import { PageNotFoundComponent } from '@components/page-not-found/page-not-found.component';
import { SnackbarComponent } from '@components/snackbar/snackbar.component';
import { CreateArticleComponent } from '@components/create-article/create-article.component';
import { MaterialInputErrorModule } from '@modules/materialInputError.module';
import { MaterialModule } from '@modules/material.module';
import { ArticleFormComponent } from '@components/article-form/article-form.component';
import { TagFormComponent } from '@components/tag-form/tag-form.component';
import { UpdateArticleComponent } from '@components/update-article/update-article.component';
import { CategoriesComponent } from '@components/categories/categories.component';
import { CategoryFormComponent } from '@components/category-form/category-form.component';
import { CreateCategoryComponent } from '@components/create-category/create-category.component';
import { CreateTagComponent } from '@components/create-tag/create-tag.component';
import { UpdateCategoryComponent } from '@components/update-category/update-category.component';
import { UpdateTagComponent } from '@components/update-tag/update-tag.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        PageNotFoundComponent,
        NavigationComponent,
        ArticlesComponent,
        TagsComponent,
        SnackbarComponent,
        CreateArticleComponent,
        ArticleFormComponent,
        TagFormComponent,
        UpdateArticleComponent,
        CategoriesComponent,
        CategoryFormComponent,
        CreateCategoryComponent,
        UpdateCategoryComponent,
        CreateTagComponent,
        UpdateTagComponent
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
