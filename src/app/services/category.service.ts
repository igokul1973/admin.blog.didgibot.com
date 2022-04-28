import { Injectable } from '@angular/core';
import { ICategory } from '@src/generated/types';
import { GET_CATEGORIES } from '@src/operations/queries/getCategories';
import { Apollo } from 'apollo-angular';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    constructor(private apollo: Apollo) {}

    getCategories() {
        return this.apollo.watchQuery<{ categories: ICategory[] }>({
            query: GET_CATEGORIES
        });
    }
}
