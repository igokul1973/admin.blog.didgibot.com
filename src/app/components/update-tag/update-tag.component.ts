import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { TagService } from '@services/tag.service';
import { LocalStorageService } from '@services/local-storage.service';
import { RightDrawerService } from '@services/right-drawer.service';
import { SnackbarService } from '@services/snackbar.service';
import { ITag, IMutationUpdateTagsArgs } from '@src/generated/types';
import { ArgumentError } from '@utilities/errors';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-update-tag',
    templateUrl: './update-tag.component.html'
})
export class UpdateTagComponent implements OnInit, OnDestroy {
    isRightDrawerOpen$ = this.rightDrawerService.isOpen$;
    initialFormVariables$ = this.rightDrawerService.meta$ as Observable<ITag>;
    initialFormVariables!: ITag;
    destroyedSubject = new Subject<boolean>();
    destroyed$ = this.destroyedSubject.asObservable();

    constructor(
        private tagService: TagService,
        private snackbarService: SnackbarService,
        private localStorageService: LocalStorageService,
        private authService: AuthService,
        private rightDrawerService: RightDrawerService
    ) {}

    ngOnInit(): void {
        this.initialFormVariables$.pipe(takeUntil(this.destroyed$)).subscribe({
            next: (initialFormVariables) => {
                if (initialFormVariables.__typename !== 'Tag') {
                    throw new ArgumentError('The application sent wrong Tag argument');
                }
                this.initialFormVariables = initialFormVariables;
            }
        });
    }

    ngOnDestroy(): void {
        this.destroyedSubject.next(true);
    }

    private updateTag(variables: IMutationUpdateTagsArgs, form: FormGroup): void {
        this.tagService.updateTags(variables).subscribe({
            next: () => this.handleCreateTagSuccess(form)
        });
    }

    private handleCreateTagSuccess(form: FormGroup): void {
        const name = form.get('name')?.value;
        this.snackbarService.addSnackbar({
            type: 'success',
            data: {
                message: `The tag ${name} was successfully updated`
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
            const variables: IMutationUpdateTagsArgs = {
                where: {
                    id: this.initialFormVariables.id
                },
                update: formChanges
            };
            this.updateTag(variables, form);
        } else {
            this.authService.logOut();
        }
    }
}
