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


@NgModule({
  declarations: [
    TutorialComponent,
    RoutingTutorialComponent,
    ScssComponent,
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
    TutorialRoutingModule
  ]
})
export class TutorialModule { }
