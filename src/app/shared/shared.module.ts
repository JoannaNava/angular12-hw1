import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { LayoutComponent } from './component/layout/layout.component';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PanelMenuModule } from 'primeng/panelmenu';
@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    DropdownModule,
    MenuModule,
    DividerModule,
    PanelMenuModule,
    BreadcrumbModule,
  ],
  exports: [
    DropdownModule,
    MenuModule,
    DividerModule,
    PanelMenuModule,
    BreadcrumbModule,
  ],
})
export class SharedModule {}
