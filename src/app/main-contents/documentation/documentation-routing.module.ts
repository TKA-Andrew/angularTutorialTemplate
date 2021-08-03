import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataPassingDocumentationComponent } from './data-passing-documentation/data-passing-documentation.component';
import { DesignPatternsComponent } from './design-patterns/design-patterns.component';
import { DocumentationComponent } from './documentation.component';
import { GlobalStyleComponent } from './global-style/global-style.component';
import { RoutingDocumentationComponent } from './routing-documentation/routing-documentation.component';
import { ScssComponent } from './scss/scss.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentationComponent,
    children: [
      {
        path: 'scss',
        component: ScssComponent
      },
      {
        path: 'globalStyle',
        component: GlobalStyleComponent
      },
      {
        path: 'designPattern',
        component: DesignPatternsComponent
      },
      {
        path: 'routing',
        component: RoutingDocumentationComponent
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
