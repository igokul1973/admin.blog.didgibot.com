import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { CategoryService } from '@services/category.service';
import { LocalStorageService } from '@services/local-storage.service';
import { RightDrawerService } from '@services/right-drawer.service';
import { SnackbarService } from '@services/snackbar.service';
import { ICategory, IMutationUpdateCategoriesArgs } from '@src/generated/types';
import { ArgumentError } from '@utilities/errors';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-update-category',
    templateUrl: './update-category.component.html'
})
export class UpdateCategoryComponent implements OnInit, OnDestroy {
    isRightDrawerOpen$ = this.rightDrawerService.isOpen$;
    initialFormVariables$ = this.rightDrawerService.meta$ as Observable<ICategory>;
    initialFormVariables!: ICategory;
    destroyedSubject = new Subject<boolean>();
    destroyed$ = this.destroyedSubject.asObservable();

    constructor(
        private categoryService: CategoryService,
        private snackbarService: SnackbarService,
        private localStorageService: LocalStorageService,
        private authService: AuthService,
        private rightDrawerService: RightDrawerService
    ) {}

    ngOnInit(): void {
        this.initialFormVariables$.pipe(takeUntil(this.destroyed$)).subscribe({
            next: (initialFormVariables) => {
                if (initialFormVariables.__typename !== 'Category') {
                    throw new ArgumentError('The application sent wrong Category argument');
                }
                this.initialFormVariables = initialFormVariables;
            }
        });
    }

    ngOnDestroy(): void {
        this.destroyedSubject.next(true);
    }

    private updateCategory(variables: IMutationUpdateCategoriesArgs, form: FormGroup): void {
        this.categoryService.updateCategories(variables).subscribe({
            next: () => this.handleCreateCategorySuccess(form)
        });
    }

    private handleCreateCategorySuccess(form: FormGroup): void {
        const name = form.get('name')?.value;
        this.snackbarService.addSnackbar({
            type: 'success',
            data: {
                message: `The category ${name} was successfully updated`
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
            const variables: IMutationUpdateCategoriesArgs = {
                where: {
                    id: this.initialFormVariables.id
                },
                update: formChanges
            };
            this.updateCategory(variables, form);
        } else {
            this.authService.logOut();
        }
    }
}
