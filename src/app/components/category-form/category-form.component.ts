import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from '@services/snackbar.service';
import { FormTypeEnum } from '@src/app/types';
import { ICategory } from '@src/generated/types';
import { editorConfig } from '@src/utilities/angularEditorConfig';
import { accumulateFormChanges, getFormChangesFromResponse } from '@src/utilities/getFormChanges';
import { scan, Subscription } from 'rxjs';

@Component({
    selector: 'app-category-form',
    templateUrl: './category-form.component.html',
    styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
    @Input('initialFormVariables') initialFormVariables: ICategory | undefined = undefined;
    @Output('submitForm') submitForm = new EventEmitter<{ formChanges: Record<string, string>; form: FormGroup }>();
    formType: FormTypeEnum = FormTypeEnum.CREATE;
    categoryForm: FormGroup = this.fb.group(this.getInitialFormBuilderGroupValues());
    angularEditorConfig = editorConfig;
    formChanges: Record<string, string> | null = null;
    categoryFormSubscription: Subscription | null = null;

    constructor(private fb: FormBuilder, private snackbarService: SnackbarService) {}

    ngOnInit() {
        if (!this.categoryFormSubscription) {
            this.handleInitialFormValues();
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        const { currentValue } = changes['initialFormVariables'];
        this.handleInitialFormValues(currentValue);
    }

    ngOnDestroy() {
        if (this.categoryFormSubscription) {
            this.categoryFormSubscription.unsubscribe();
        }
    }

    private handleInitialFormValues(initialFormVariables?: ICategory) {
        if (initialFormVariables) {
            this.formType = FormTypeEnum.UPDATE;
            this.categoryForm = this.fb.group(this.getInitialFormBuilderGroupValues(initialFormVariables));
        }
        this.categoryFormSubscription = this.categoryForm.valueChanges
            .pipe(scan(accumulateFormChanges, [this.categoryForm.value, {}]))
            .subscribe({
                next: (res) => {
                    this.formChanges = getFormChangesFromResponse(res);
                }
            });
    }

    private getInitialFormBuilderGroupValues(initialFormVariables?: ICategory) {
        return {
            name: [(initialFormVariables && initialFormVariables.name) || null, Validators.required]
        };
    }

    onSubmit() {
        if (this.formChanges) {
            this.submitForm.emit({ formChanges: this.formChanges, form: this.categoryForm });
            this.formChanges = null;
        } else {
            console.log(this.categoryForm);
            this.snackbarService.addSnackbar({
                type: 'warning',
                data: {
                    message: 'Please make a change in the form and then submit'
                }
            });
        }
    }
}
