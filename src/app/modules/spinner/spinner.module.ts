import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';
import { CommonImportsModule } from '../common-imports.module';

@NgModule({
    declarations: [
        SpinnerComponent
    ],
    imports: [
        CommonImportsModule
    ],
    exports: [
        SpinnerComponent,
    ]
})
export class SpinnerModule { }
