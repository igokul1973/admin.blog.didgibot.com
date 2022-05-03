import { ICategory, ISortDirection } from '@src/generated/types';
import { GraphQLError } from 'graphql';
import { Observable, ObservableInput } from 'rxjs';

export interface IObservables extends Record<string, ObservableInput<unknown>> {
    loading: Observable<boolean>;
    errors: Observable<readonly GraphQLError[] | undefined>;
    categories: Observable<ICategory[]>;
    sortName: Observable<ISortDirection>;
}
