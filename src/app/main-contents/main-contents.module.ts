import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainContentsRoutingModule } from './main-contents-routing.module';
import { OriginalTemplateComponent } from './original-template/original-template.component';
import { MainContentsComponent } from './main-contents.component';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [OriginalTemplateComponent, MainContentsComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MainContentsRoutingModule
  ]
})
export class MainContentsModule { }
