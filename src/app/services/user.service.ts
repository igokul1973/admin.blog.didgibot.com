import { Injectable } from '@angular/core';
import { IUser } from '@src/generated/types';
import { Apollo, gql } from 'apollo-angular';
import { take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    admin$ = this.apollo
        .watchQuery<{ users: IUser[] }>({
            query: gql`
                {
                    users(where: { email: "igk19@rambler.ru" }) {
                        id
                        email
                        phone
                        ip
                        lastLoggedAt
                    }
                }
            `
        })
        .valueChanges.pipe(take(1));
    constructor(private apollo: Apollo) {}
}
