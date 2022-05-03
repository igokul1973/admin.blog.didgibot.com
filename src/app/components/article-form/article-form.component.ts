import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '@services/category.service';
import { SnackbarService } from '@services/snackbar.service';
import { FormTypeEnum } from '@src/app/types';
import { IArticle, ICategory, IQueryCategoriesArgs } from '@src/generated/types';
import { editorConfig } from '@src/utilities/angularEditorConfig';
import { accumulateFormChanges, getFormChangesFromResponse } from '@src/utilities/getFormChanges';
import { QueryRef } from 'apollo-angular';
import { combineLatest, map, scan, Subscription } from 'rxjs';

@Component({
    selector: 'app-article-form',
    templateUrl: './article-form.component.html'
})
export class ArticleFormComponent implements OnChanges {
    @Input('initialFormVariables') initialFormVariables: IArticle | undefined = undefined;
    @Output('submitForm') submitForm = new EventEmitter<{ formChanges: Record<string, string>; form: FormGroup }>();
    categoriesSource$ = this.getCategories();
    observables = {
        loading: this.categoriesSource$.valueChanges.pipe(map((r) => r.loading)),
        errors: this.categoriesSource$.valueChanges.pipe(map((r) => r.errors)),
        categories: this.categoriesSource$.valueChanges.pipe(map((r) => r.data.categories))
    };
    data$ = combineLatest(this.observables);
    formType: FormTypeEnum = FormTypeEnum.CREATE;
    articleForm: FormGroup = this.fb.group(this.getInitialFormBuilderGroupValues());
    angularEditorConfig = editorConfig;
    formChanges: Record<string, string> | null = null;
    articleFormSubscription: Subscription | null = null;

    constructor(
        private fb: FormBuilder,
        private categoryService: CategoryService,
        private snackbarService: SnackbarService
    ) {}

    ngOnInit() {
        if (!this.articleFormSubscription) {
            this.handleInitialFormValues();
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        const { currentValue } = changes['initialFormVariables'];
        this.handleInitialFormValues(currentValue);
    }

    ngOnDestroy() {
        if (this.articleFormSubscription) {
            this.articleFormSubscription.unsubscribe();
        }
    }

    private handleInitialFormValues(initialFormVariables?: IArticle) {
        if (initialFormVariables) {
            this.formType = FormTypeEnum.UPDATE;
            this.articleForm = this.fb.group(this.getInitialFormBuilderGroupValues(initialFormVariables));
        }
        this.articleFormSubscription = this.articleForm.valueChanges
            .pipe(scan(accumulateFormChanges, [this.articleForm.value, {}]))
            .subscribe({
                next: (res) => {
                    this.formChanges = getFormChangesFromResponse(res);
                }
            });
    }

    private getCategories(): QueryRef<{ categories: ICategory[] }, IQueryCategoriesArgs> {
        return this.categoryService.getCategories();
    }

    private getInitialFormBuilderGroupValues(initialFormVariables?: IArticle) {
        return {
            category: [
                (initialFormVariables &&
                    initialFormVariables.categories &&
                    initialFormVariables.categories[0] &&
                    initialFormVariables.categories[0].id) ||
                    null,
                Validators.required
            ],
            header: [(initialFormVariables && initialFormVariables.header) || null, Validators.required],
            subheader: [(initialFormVariables && initialFormVariables.subheader) || null],
            isPublished: [(initialFormVariables && initialFormVariables.isPublished) || false],
            content: [(initialFormVariables && initialFormVariables.content) || null, Validators.required]
        };
    }

    get isPublished(): boolean {
        return this.articleForm.get('isPublished')?.value;
    }

    onSubmit() {
        if (this.formChanges) {
            this.submitForm.emit({ formChanges: this.formChanges, form: this.articleForm });
            this.formChanges = null;
        } else {
            console.log(this.articleForm);
            this.snackbarService.addSnackbar({
                type: 'warning',
                data: {
                    message: 'Please make a change in the form and then submit'
                }
            });
        }
    }
}
