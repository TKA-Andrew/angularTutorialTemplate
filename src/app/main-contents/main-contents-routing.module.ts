import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OriginalTemplateComponent } from './original-template/original-template.component';

const routes: Routes = [
  {
    path: '',
    component: OriginalTemplateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainContentsRoutingModule { }
