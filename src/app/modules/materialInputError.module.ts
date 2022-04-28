import { NgModule } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

class ShowOnTouchedErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return !!(form && !form.untouched && control && control.invalid && (control.touched || control.dirty));
    }
}

@NgModule({
    providers: [
        {
            provide: ErrorStateMatcher,
            useClass: ShowOnTouchedErrorStateMatcher
        }
    ]
})
export class MaterialInputErrorModule {}
