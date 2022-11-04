import { NgModule } from '@angular/core';
import { SearchcatComponent } from './searchcat/searchcat.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonImportsModule } from '../common-imports.module';
import {BreedFilterPipe} from "../../pipes/breed-filter.pipe";
import {SearchcatService} from "../../services/searchcat.service";

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
        CommonImportsModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        SearchcatService
    ]
})
export class CatModule { }
