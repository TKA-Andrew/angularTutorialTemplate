import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataPassingDocumentationComponent } from './data-passing-documentation/data-passing-documentation.component';
import { DesignPatternsComponent } from './design-patterns/design-patterns.component';
import { DocumentationComponent } from './documentation.component';
import { GlobalStyleComponent } from './global-style/global-style.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentationComponent,
    children: [
      {
        path: 'globalStyle',
        component: GlobalStyleComponent
      },
      {
        path: 'designPattern',
        component: DesignPatternsComponent
      },
      {
        path: 'dataPassing',
        component: DataPassingDocumentationComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { }
