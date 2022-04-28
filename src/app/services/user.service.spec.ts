import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IUser } from '@src/generated/types';
import { GET_USERS } from '@src/operations/queries/getUsers';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { map } from 'rxjs';
import { AppComponent } from '../app.component';
import { UserService } from './user.service';

describe('UserService', () => {
    let service: UserService;
    let controller: ApolloTestingController;
    const emailObj = { email: 'igk19@rambler.ru' };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, ApolloTestingModule],
            declarations: [AppComponent]
        }).compileComponents();

        service = TestBed.inject(UserService);
        controller = TestBed.inject(ApolloTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('expect and answer', () => {
        //Call the relevant method
        service.admin$.pipe(map((r) => r?.data.users)).subscribe((users: IUser[]) => {
            //Make some assertion about the result;
            expect(users.length).toEqual(1);
            expect(users[0].phone).toEqual('+7657483909');
            expect(users[0].email).toEqual(emailObj.email);
        });

        // The following `expectOne()` will match the operation's document.
        // If no requests or multiple requests matched that document
        // `expectOne()` would throw.
        const op = controller.expectOne(GET_USERS);

        // Assert that one of the variables is {email: '...'}.
        expect(op.operation.variables['where']).toEqual(emailObj);

        // Respond with mock data, causing Observable to resolve.
        op.flush({
            data: {
                users: [
                    {
                        id: '2423423',
                        email: emailObj.email,
                        phone: '+7657483909',
                        ip: 'Some content',
                        lastLoggedAt: 32039843,
                        __typename: 'Users'
                    }
                ]
            }
        });

        // Assert that there are no outstanding operations.
        controller.verify();
    });
});
