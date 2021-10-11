import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@shared/component/layout/layout.component';
import { ExampleComponent } from '@view/example/example.component';
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
        path: 'example1',
        component: ExampleComponent,
        data: {
          label: 'Example1-傳值傳址',
          url: '/example1',
        },
      },
      {
        path: 'example2',
        component: ExampleComponent,
        data: {
          label: 'Example2-深淺複製',
          url: '/example2',
        },
      },
      {
        path: 'example3',
        component: ExampleComponent,
        data: {
          label: 'Example3-閉包',
          url: '/example3',
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
