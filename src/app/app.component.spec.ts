import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApolloTestingModule, ApolloTestingController } from 'apollo-angular/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { SnackbarComponent } from './snackbar/snackbar.component';

describe('AppComponent', () => {
    let controller: ApolloTestingController;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MaterialModule, RouterTestingModule, ApolloTestingModule],
            declarations: [AppComponent, SnackbarComponent]
        }).compileComponents();

        controller = TestBed.inject(ApolloTestingController);
    });

    afterEach(() => {
        // Assert that there are no outstanding operations.
        controller.verify();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should have as currentUrl "/"', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.currentUrl).toEqual('/');
    });

    /* it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('.content span')?.textContent).toContain('manhattanman-admin app is running!');
    }); */
});
