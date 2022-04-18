import { Component, OnInit } from '@angular/core';
import { IArticle } from '@src/generated/types';
import { GET_ARTICLES } from '@src/operations/mutations/getArticles';
import { Apollo } from 'apollo-angular';
import { GraphQLError } from 'graphql';
import { Observable, pluck } from 'rxjs';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
    articles$: Observable<IArticle[]> | null = null;
    loading$: Observable<boolean> = new Observable<boolean>();
    errors$: Observable<readonly GraphQLError[] | undefined> | null = null;

    constructor(private apollo: Apollo) {}

    ngOnInit(): void {
        const source$ = this.getArticles();
        this.loading$ = source$.pipe(pluck('loading'));
        this.errors$ = source$.pipe(pluck('errors'));
        this.articles$ = source$.pipe(pluck('data', 'articles'));
    }

    getArticles() {
        return this.apollo.watchQuery<{ articles: IArticle[] }>({
            query: GET_ARTICLES,
            fetchPolicy: 'cache-and-network'
        }).valueChanges;
    }
}
