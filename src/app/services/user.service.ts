import { Injectable } from '@angular/core';
import { IUser } from '@src/generated/types';
import { GET_USERS } from '@src/operations/queries/getUsers';
import { Apollo } from 'apollo-angular';
import { take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    admin$ = this.apollo
        .watchQuery<{ users: IUser[] }>({
            query: GET_USERS,
            variables: {
                where: { email: 'igk19@rambler.ru' }
            }
        })
        .valueChanges.pipe(take(1));

    constructor(private apollo: Apollo) {}
}
