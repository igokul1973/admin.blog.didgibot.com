import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
    articles: any[] = [];
    constructor(private apollo: Apollo) {}

    ngOnInit(): void {
        this.apollo
            .watchQuery({
                query: gql`
                    {
                        articles {
                            header
                            subheader
                            content
                        }
                    }
                `
            })
            .valueChanges.subscribe((result: any) => {
                this.articles = result?.data?.articles;
            });
    }
}
