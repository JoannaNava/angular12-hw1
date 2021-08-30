import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@shared/component/layout/layout.component';
import { PanelComponent } from '@view/panel/panel.component';
import { QuestionComponent } from '@view/question/question.component';
import { TableComponent } from '@view/table/table.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'table',
        component: TableComponent,
        data: {
          label: 'Table',
          url: '/table',
        },
      },
      {
        path: 'question',
        component: QuestionComponent,
        data: {
          label: 'Question',
          url: '/question',
        },
      },
      {
        path: 'panel',
        component: PanelComponent,
        data: {
          label: 'Panel',
          url: '/panel',
        },
      },
      {
        path: '**',
        redirectTo: 'table',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
