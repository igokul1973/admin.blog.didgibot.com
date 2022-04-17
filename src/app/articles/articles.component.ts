import { Component, OnDestroy, OnInit } from '@angular/core';
import { IArticle } from '@src/generated/types';
import { GET_ARTICLES } from '@src/operations/mutations/getArticles';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { SnackbarService } from '../services/snackbar.service';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, OnDestroy {
    articles: IArticle[] = [];
    articlesSubscription: Subscription | null = null;

    constructor(private apollo: Apollo, private snackbarService: SnackbarService) {}

    ngOnInit(): void {
        this.articlesSubscription = this.apollo
            .watchQuery<{ articles: IArticle[] }>({
                query: GET_ARTICLES,
                fetchPolicy: 'cache-and-network'
            })
            .valueChanges.subscribe({
                next: (result) => {
                    this.articles = result?.data?.articles;
                },
                error: () => {
                    this.snackbarService.addSnackbar({
                        type: 'error',
                        data: { message: 'Could not fetch articles' }
                    });
                }
            });
    }

    ngOnDestroy(): void {
        this.articlesSubscription?.unsubscribe();
    }
}
