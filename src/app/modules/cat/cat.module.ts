import { NgModule } from '@angular/core';
import { SearchcatComponent } from './searchcat/searchcat.component';
import { RouterModule, Routes } from '@angular/router';
import {MatFormFieldModule} from "@angular/material/form-field";
import {CommonImportsModule} from "../common-imports.module";
import {BreedFilterPipe} from "../../pipes/breed-filter.pipe";

const routes: Routes = [
    {
        path: 'search',
        component: SearchcatComponent
    }
];


@NgModule({
    declarations: [
        SearchcatComponent,
        BreedFilterPipe
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonImportsModule
    ],
    providers: [
    ]
})
export class CatModule { }
