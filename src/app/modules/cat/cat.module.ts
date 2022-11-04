import { NgModule } from '@angular/core';
import { SearchcatComponent } from './searchcat/searchcat.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'search',
        component: SearchcatComponent
    }
];


@NgModule({
    declarations: [
        SearchcatComponent,
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [
    ]
})
export class CatModule { }
