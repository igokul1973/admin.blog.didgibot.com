import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { CategoryService } from '@services/category.service';
import { LocalStorageService } from '@services/local-storage.service';
import { RightDrawerService } from '@services/right-drawer.service';
import { SnackbarService } from '@services/snackbar.service';
import { IMutationCreateCategoriesArgs } from '@src/generated/types';

@Component({
    selector: 'app-create-category',
    templateUrl: './create-category.component.html'
})
export class CreateCategoryComponent {
    isRightDrawerOpen$ = this.rightDrawerService.isOpen$;

    constructor(
        private categoryService: CategoryService,
        private snackbarService: SnackbarService,
        private localStorageService: LocalStorageService,
        private authService: AuthService,
        private rightDrawerService: RightDrawerService
    ) {}

    private createCategory(variables: IMutationCreateCategoriesArgs, form: FormGroup): void {
        this.categoryService.createCategories(variables).subscribe({
            next: () => this.handleCreateCategorySuccess(form)
        });
    }

    private handleCreateCategorySuccess(form: FormGroup): void {
        const name = form.get('name')?.value;
        this.snackbarService.addSnackbar({
            type: 'success',
            data: {
                message: `The category ${name} was successfully created`
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
                        name: form.get('name')?.value
                    }
                ]
            };
            this.createCategory(variables, form);
        } else {
            this.authService.logOut();
        }
    }
}
