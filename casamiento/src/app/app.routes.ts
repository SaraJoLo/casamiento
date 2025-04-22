import { Routes } from '@angular/router';
import { SinglePageComponent } from './layout/single-page/single-page.component';

export const routes: Routes = [
    { path: '', component: SinglePageComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '', pathMatch: 'full' } 
];
