import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ArticleService } from '@services/article.service';
import { AuthService } from '@services/auth.service';
import { LocalStorageService } from '@services/local-storage.service';
import { RightDrawerService } from '@services/right-drawer.service';
import { SnackbarService } from '@services/snackbar.service';
import { IArticle, IMutationUpdateArticlesArgs } from '@src/generated/types';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ArgumentError } from '@utilities/errors';

@Component({
    selector: 'app-update-article',
    templateUrl: './update-article.component.html'
})
export class UpdateArticleComponent implements OnInit, OnDestroy {
    isRightDrawerOpen$ = this.rightDrawerService.isOpen$;
    initialFormVariables$ = this.rightDrawerService.meta$ as Observable<IArticle>;
    initialFormVariables!: IArticle;
    destroyedSubject = new Subject<boolean>();
    destroyed$ = this.destroyedSubject.asObservable();

    constructor(
        private articleService: ArticleService,
        private snackbarService: SnackbarService,
        private localStorageService: LocalStorageService,
        private authService: AuthService,
        private rightDrawerService: RightDrawerService
    ) {}

    ngOnInit(): void {
        this.initialFormVariables$.pipe(takeUntil(this.destroyed$)).subscribe({
            next: (initialFormVariables) => {
                if (initialFormVariables.__typename !== 'Article') {
                    throw new ArgumentError('The application sent wrong Article argument');
                }
                this.initialFormVariables = initialFormVariables;
            }
        });
    }

    ngOnDestroy(): void {
        this.destroyedSubject.next(true);
    }

    private updateArticle(variables: IMutationUpdateArticlesArgs, form: FormGroup): void {
        this.articleService.updateArticles(variables).subscribe({
            next: () => this.handleCreateArticleSuccess(form)
        });
    }

    private handleCreateArticleSuccess(form: FormGroup): void {
        const header = form.get('header')?.value;
        this.snackbarService.addSnackbar({
            type: 'success',
            data: {
                message: `The article ${header} was successfully updated`
            }
        });
        this.rightDrawerService.close();
    }

    closeRightDrawer() {
        this.rightDrawerService.close();
    }

    onSubmit({ formChanges, form }: { formChanges?: Record<string, string>; form: FormGroup }) {
        const currentUser = this.localStorageService.getUser();
        if (currentUser && formChanges) {
            let category: string | undefined = undefined;
            let update: Record<string, string> | undefined = undefined;
            ({ category, ...update } = formChanges);
            let variables: IMutationUpdateArticlesArgs = {
                where: {
                    id: this.initialFormVariables.id
                }
            };
            if (update) {
                variables.update = update;
            }
            if (category) {
                variables = {
                    ...variables,
                    disconnect: {
                        categories: [
                            {
                                where: {
                                    node: {
                                        id: this.initialFormVariables.categories[0].id
                                    }
                                }
                            }
                        ]
                    },
                    connect: {
                        categories: [
                            {
                                where: {
                                    node: {
                                        id: form.get('category')?.value
                                    }
                                }
                            }
                        ]
                    }
                };
            }
            this.updateArticle(variables, form);
        } else {
            this.authService.logOut();
        }
    }
}
