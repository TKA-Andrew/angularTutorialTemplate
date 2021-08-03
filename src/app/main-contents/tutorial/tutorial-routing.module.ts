import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingTutorialComponent } from './routing-tutorial/routing-tutorial.component';
import { ScssComponent } from './scss/scss.component';
import { TutorialComponent } from './tutorial.component';

const routes: Routes = [
  {
    path: '',
    component: TutorialComponent,
    children: [
      {
        path: 'scss',
        component: ScssComponent
      },
      {
        path: 'routing',
        component: RoutingTutorialComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule { }
