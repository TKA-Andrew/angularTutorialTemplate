import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentsComponent } from './main-contents.component';
import { OriginalTemplateComponent } from './original-template/original-template.component';

const routes: Routes = [
  {
    path: '',
    component: MainContentsComponent,
    children: [
      {
        path: 'original-template',
        component: OriginalTemplateComponent,
      },
      {
        path: 'tutorial',
        loadChildren: () =>
            import('./tutorial/tutorial.module').then(
                (m) => m.TutorialModule
            ),
      },
      {
        path: 'documentation',
        loadChildren: () =>
            import('./documentation/documentation.module').then(
                (m) => m.DocumentationModule
            ),
      },
      {
        path: 'resources',
        loadChildren: () =>
            import('./resources/resources.module').then(
                (m) => m.ResourcesModule
            ),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainContentsRoutingModule { }
