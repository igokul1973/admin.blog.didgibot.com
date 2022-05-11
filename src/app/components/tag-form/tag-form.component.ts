import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from '@services/snackbar.service';
import { FormTypeEnum } from '@src/app/types';
import { ITag } from '@src/generated/types';
import { editorConfig } from '@src/utilities/angularEditorConfig';
import { accumulateFormChanges, getFormChangesFromResponse } from '@src/utilities/getFormChanges';
import { scan, Subscription } from 'rxjs';

@Component({
    selector: 'app-tag-form',
    templateUrl: './tag-form.component.html'
})
export class TagFormComponent implements OnInit {
    @Input('initialFormVariables') initialFormVariables: ITag | undefined = undefined;
    @Output('submitForm') submitForm = new EventEmitter<{ formChanges: Record<string, string>; form: FormGroup }>();
    formType: FormTypeEnum = FormTypeEnum.CREATE;
    tagForm: FormGroup = this.fb.group(this.getInitialFormBuilderGroupValues());
    angularEditorConfig = editorConfig;
    formChanges: Record<string, string> | null = null;
    tagFormSubscription: Subscription | null = null;

    constructor(private fb: FormBuilder, private snackbarService: SnackbarService) {}

    ngOnInit() {
        if (!this.tagFormSubscription) {
            this.handleInitialFormValues();
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        const { currentValue } = changes['initialFormVariables'];
        this.handleInitialFormValues(currentValue);
    }

    ngOnDestroy() {
        if (this.tagFormSubscription) {
            this.tagFormSubscription.unsubscribe();
        }
    }

    private handleInitialFormValues(initialFormVariables?: ITag) {
        if (initialFormVariables) {
            this.formType = FormTypeEnum.UPDATE;
            this.tagForm = this.fb.group(this.getInitialFormBuilderGroupValues(initialFormVariables));
        }
        this.tagFormSubscription = this.tagForm.valueChanges
            .pipe(scan(accumulateFormChanges, [this.tagForm.value, {}]))
            .subscribe({
                next: (res) => {
                    this.formChanges = getFormChangesFromResponse(res);
                }
            });
    }

    private getInitialFormBuilderGroupValues(initialFormVariables?: ITag) {
        return {
            name: [(initialFormVariables && initialFormVariables.name) || null, Validators.required]
        };
    }

    onSubmit() {
        if (this.formChanges) {
            this.submitForm.emit({ formChanges: this.formChanges, form: this.tagForm });
            this.formChanges = null;
        } else {
            console.log(this.tagForm);
            this.snackbarService.addSnackbar({
                type: 'warning',
                data: {
                    message: 'Please make a change in the form and then submit'
                }
            });
        }
    }
}
