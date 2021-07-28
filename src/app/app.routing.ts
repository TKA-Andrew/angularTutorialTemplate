import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./main-contents/main-contents.module').then(m => m.MainContentsModule) },
    { path: 'notfound', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },
    { path: '**', redirectTo: 'notfound' }
];

export const AppRouting = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });
