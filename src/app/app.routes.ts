import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent)},   
    {path:'**', loadComponent: () => import('./not-found/not-found.component').then(mod => mod.NotFoundComponent)}
];
