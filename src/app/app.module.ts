import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusyConfig, NgBusyModule } from 'ng-busy';
import { AppBusyComponent } from './element/app-busy.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    NgBusyModule.forRoot(new BusyConfig({
      template: AppBusyComponent,
      wrapperClass: 'app-busy',
      disableAnimation: true,
  }))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
