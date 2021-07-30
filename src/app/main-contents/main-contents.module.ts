import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainContentsRoutingModule } from './main-contents-routing.module';
import { OriginalTemplateComponent } from './original-template/original-template.component';
import { MainContentsComponent } from './main-contents.component';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DocumentationModule } from './documentation/documentation.module';
import { ShareFacadeService } from './service/sharefacade.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BusyService } from './service/busy.service';
import { HttpCancelService } from './service/httpCancel.service';
import { DataProcessingService } from './service/dataProcessing.service';
import { DrawerService } from './service/drawer.service';

@NgModule({
  declarations: [OriginalTemplateComponent, MainContentsComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MainContentsRoutingModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    DocumentationModule
  ],
  providers: [
    DrawerService,
    ShareFacadeService,
    BusyService,
    HttpCancelService,
    DataProcessingService
  ]
})
export class MainContentsModule { }
