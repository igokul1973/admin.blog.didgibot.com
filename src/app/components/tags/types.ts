import { ITag, ISortDirection } from '@src/generated/types';
import { GraphQLError } from 'graphql';
import { Observable, ObservableInput } from 'rxjs';

export interface IObservables extends Record<string, ObservableInput<unknown>> {
    loading: Observable<boolean>;
    errors: Observable<readonly GraphQLError[] | undefined>;
    tags: Observable<ITag[]>;
    sortName: Observable<ISortDirection>;
}
