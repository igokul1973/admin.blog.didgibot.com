import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { JwtService } from '@services/jwt.service';
import { SnackbarService } from '@services/snackbar.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    loginForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
    });

    errorMessageSubject = new BehaviorSubject<string>('');
    errorMessage$ = this.errorMessageSubject.asObservable();
    errorSubscription: Subscription | null = null;

    constructor(
        private authService: AuthService,
        private snackbarService: SnackbarService,
        private jwtService: JwtService
    ) {}

    ngOnInit(): void {
        this.errorSubscription = this.errorMessage$.subscribe({
            next: (message) => {
                if (message) {
                    this.snackbarService.addSnackbar({
                        type: 'error',
                        data: { message }
                    });
                }
            }
        });
    }

    ngOnDestroy(): void {
        if (this.errorSubscription) {
            this.errorSubscription.unsubscribe();
        }
    }

    onLoginFormSubmit() {
        this.authService
            .fetchTokens(this.loginForm.value)
            .pipe(take(1))
            .subscribe({
                next: (tokens) => {
                    if (tokens) {
                        // Verifying the access token
                        const tokenPayload = this.jwtService.decode(tokens.accessToken);
                        if (tokenPayload) {
                            const { id, email } = tokenPayload;
                            if (id && email) {
                                this.errorMessageSubject.next('');
                                return this.authService.logIn(tokens, { id, email });
                            }
                        }
                    } else {
                        this.errorMessageSubject.next('Log-in failure!');
                    }
                },
                error: () => {
                    this.errorMessageSubject.next('Log-in failure!');
                }
            });
    }
}
