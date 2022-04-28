import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ArticleService } from '@services/article.service';
import { AuthService } from '@services/auth.service';
import { LocalStorageService } from '@services/local-storage.service';
import { RightDrawerService } from '@services/right-drawer.service';
import { SnackbarService } from '@services/snackbar.service';
import { ILanguagesEnum, IMutationCreateArticlesArgs } from '@src/generated/types';

@Component({
    selector: 'app-create-article',
    templateUrl: './create-article.component.html'
})
export class CreateArticleComponent {
    isRightDrawerOpen$ = this.rightDrawerService.isOpen$;

    constructor(
        private articleService: ArticleService,
        private snackbarService: SnackbarService,
        private localStorageService: LocalStorageService,
        private authService: AuthService,
        private rightDrawerService: RightDrawerService
    ) {}

    private createArticle(variables: IMutationCreateArticlesArgs, form: FormGroup): void {
        this.articleService.createArticle(variables).subscribe({
            next: () => this.handleCreateArticleSuccess(form)
        });
    }

    private handleCreateArticleSuccess(form: FormGroup): void {
        const header = form.get('header')?.value;
        this.snackbarService.addSnackbar({
            type: 'success',
            data: {
                message: `The article ${header} was successfully created`
            }
        });
        this.rightDrawerService.close();
        form.reset();
    }

    closeRightDrawer() {
        this.rightDrawerService.close();
    }

    onSubmit({ form }: { formChanges?: Record<string, string>; form: FormGroup }) {
        const currentUser = this.localStorageService.getUser();
        if (currentUser) {
            const variables = {
                input: [
                    {
                        header: form.get('header')?.value,
                        subheader: form.get('subheader')?.value,
                        content: form.get('content')?.value,
                        isPublished: form.get('isPublished')?.value,
                        categories: {
                            connect: [
                                {
                                    where: {
                                        node: {
                                            id: form.get('category')?.value
                                        }
                                    }
                                }
                            ]
                        },
                        author: {
                            connect: {
                                where: {
                                    node: {
                                        email: currentUser.email
                                    }
                                }
                            }
                        },
                        language: ILanguagesEnum.English
                    }
                ]
            };
            this.createArticle(variables, form);
        } else {
            this.authService.logOut();
        }
    }
}
