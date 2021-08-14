import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialResourcesComponent } from './angular-material-resources/angular-material-resources.component';
import { FlexLayoutResourcesComponent } from './flex-layout-resources/flex-layout-resources.component';
import { LodashEsComponent } from './lodash-es/lodash-es.component';
import { NgBusyResourcesComponent } from './ng-busy-resources/ng-busy-resources.component';
import { ResourcesEchartsComponent } from './resources-echarts/resources-echarts.component';
import { ResourcesComponent } from './resources.component';

const routes: Routes = [{
  path: '',
  component: ResourcesComponent,
  children: [{
    path: 'lodash-es',
    component: LodashEsComponent
  }, {
    path: 'flexLayout',
    component: FlexLayoutResourcesComponent
  }, {
    path: 'angularMaterial',
    component: AngularMaterialResourcesComponent
  }, {
    path: 'ngBusy',
    component: NgBusyResourcesComponent
  }, {
    path: 'eCharts',
    component: ResourcesEchartsComponent
  }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
