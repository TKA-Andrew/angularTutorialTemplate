import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialComponent } from './tutorial.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { RoutingTutorialComponent } from './routing-tutorial/routing-tutorial.component';
import { ScssComponent } from './scss/scss.component';
import { TutorialHttpclientComponent } from './tutorial-httpclient/tutorial-httpclient.component';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    TutorialComponent,
    RoutingTutorialComponent,
    ScssComponent,
    TutorialHttpclientComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    HttpClientModule,
    TutorialRoutingModule,
    MatExpansionModule
  ]
})
export class TutorialModule { }
