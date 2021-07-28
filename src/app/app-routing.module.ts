import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentsComponent } from './main-contents/main-contents.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./main-contents/main-contents.module').then(m => m.MainContentsModule) },
  { path: 'notfound', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: '**', redirectTo: 'notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
