import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { GlobalStyleComponent } from './global-style/global-style.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DesignPatternsComponent } from './design-patterns/design-patterns.component';
import { DataProcessingComponent } from './data-processing/data-processing.component';

@NgModule({
  declarations: [
    DocumentationComponent,
    GlobalStyleComponent,
    DesignPatternsComponent,
    DataProcessingComponent,
  ],
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule
  ]
})
export class DocumentationModule { }
