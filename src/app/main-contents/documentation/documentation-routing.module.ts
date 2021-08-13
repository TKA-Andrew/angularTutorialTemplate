import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProcessingComponent } from './data-processing/data-processing.component';
import { DesignPatternsComponent } from './design-patterns/design-patterns.component';
import { DocumentationComponent } from './documentation.component';
import { GlobalStyleComponent } from './global-style/global-style.component';
import { HttpCancelComponent } from './http-cancel/http-cancel.component';
import { NgBusyDocumentationComponent } from './ng-busy-documentation/ng-busy-documentation.component';

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
        path: 'dataProcessing',
        component: DataProcessingComponent
      },
      {
        path: 'ngBusy',
        component: NgBusyDocumentationComponent
      },
      {
        path: 'httpCancel',
        component: HttpCancelComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { }
