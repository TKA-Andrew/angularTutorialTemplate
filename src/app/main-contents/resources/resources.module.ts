import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { LodashEsComponent } from './lodash-es/lodash-es.component';
import { NgBusyResourcesComponent } from './ng-busy-resources/ng-busy-resources.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutResourcesComponent } from './flex-layout-resources/flex-layout-resources.component';
import { AngularMaterialResourcesComponent } from './angular-material-resources/angular-material-resources.component';
import { MatTableModule } from '@angular/material/table';
import { ResourcesEchartsComponent } from './resources-echarts/resources-echarts.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    ResourcesComponent,
    LodashEsComponent,
    NgBusyResourcesComponent,
    FlexLayoutResourcesComponent,
    AngularMaterialResourcesComponent,
    ResourcesEchartsComponent
  ],
  imports: [
    CommonModule,
    ResourcesRoutingModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatExpansionModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ]
})
export class ResourcesModule { }
