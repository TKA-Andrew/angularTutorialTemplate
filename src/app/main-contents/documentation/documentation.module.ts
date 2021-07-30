import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { GlobalStyleComponent } from './global-style/global-style.component';

@NgModule({
  declarations: [
    DocumentationComponent,
    GlobalStyleComponent
  ],
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    RouterModule
  ]
})
export class DocumentationModule { }
