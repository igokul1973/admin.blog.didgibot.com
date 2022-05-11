import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { TagService } from '@services/tag.service';
import { LocalStorageService } from '@services/local-storage.service';
import { RightDrawerService } from '@services/right-drawer.service';
import { SnackbarService } from '@services/snackbar.service';
import { IMutationCreateTagsArgs } from '@src/generated/types';

@Component({
    selector: 'app-create-tag',
    templateUrl: './create-tag.component.html'
})
export class CreateTagComponent {
    isRightDrawerOpen$ = this.rightDrawerService.isOpen$;

    constructor(
        private tagService: TagService,
        private snackbarService: SnackbarService,
        private localStorageService: LocalStorageService,
        private authService: AuthService,
        private rightDrawerService: RightDrawerService
    ) {}

    private createTag(variables: IMutationCreateTagsArgs, form: FormGroup): void {
        this.tagService.createTags(variables).subscribe({
            next: () => this.handleCreateTagSuccess(form)
        });
    }

    private handleCreateTagSuccess(form: FormGroup): void {
        const name = form.get('name')?.value;
        this.snackbarService.addSnackbar({
            type: 'success',
            data: {
                message: `The tag ${name} was successfully created`
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
            this.createTag(variables, form);
        } else {
            this.authService.logOut();
        }
    }
}
