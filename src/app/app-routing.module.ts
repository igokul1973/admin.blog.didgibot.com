import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoutePathEnum } from './types';

const routes: Routes = [
    {
        path: RoutePathEnum.ARTICLES,
        component: ArticlesComponent
    },
    {
        path: RoutePathEnum.LOGIN,
        component: LoginComponent
    },
    {
        path: RoutePathEnum.HOME,
        redirectTo: RoutePathEnum.ARTICLES,
        pathMatch: 'full'
    },
    {
        path: RoutePathEnum.NOT_FOUND,
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
