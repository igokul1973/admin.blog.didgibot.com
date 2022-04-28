import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@modules/material.module';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { GET_ARTICLES } from '@src/operations/queries/getArticles';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { map } from 'rxjs';
import { ArticlesComponent } from './articles.component';

describe('ArticlesComponent', () => {
    let component: ArticlesComponent;
    let fixture: ComponentFixture<ArticlesComponent>;
    let controller: ApolloTestingController;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ArticlesComponent],
            imports: [
                BrowserModule,
                BrowserAnimationsModule,
                ReactiveFormsModule,
                MaterialModule,
                LayoutModule,
                HttpClientModule,
                AppRoutingModule,
                ApolloTestingModule
            ]
        }).compileComponents();

        controller = TestBed.inject(ApolloTestingController);
        fixture = TestBed.createComponent(ArticlesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('expect and answer', () => {
        //Call the relevant method
        component.source$?.valueChanges.pipe(map((r) => r?.data?.articles)).subscribe((articles) => {
            //Make some assertion about the result;
            expect(articles.length).toEqual(1);
            expect(articles[0].subheader).toEqual('Some subheader');
        });

        // The following `expectOne()` will match the operation's document.
        // If no requests or multiple requests matched that document
        // `expectOne()` would throw.
        const op = controller.expectOne(GET_ARTICLES);

        // Assert that one of variables is Mr Apollo.
        // expect(op.operation.variables['header']).toEqual('Some header');

        // Respond with mock data, causing Observable to resolve.
        op.flush({
            data: {
                articles: [
                    {
                        id: '2423423',
                        header: 'Some header',
                        subheader: 'Some subheader',
                        content: 'Some content',
                        __typename: 'Article'
                    }
                ]
            }
        });

        // Assert that there are no outstanding operations.
        controller.verify();
    });
});
