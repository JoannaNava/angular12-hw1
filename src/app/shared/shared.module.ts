import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { LayoutComponent } from './component/layout/layout.component';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    DropdownModule,
    MenuModule,
    DividerModule,
    PanelMenuModule,
    BreadcrumbModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    AccordionModule,
  ],
  exports: [
    DropdownModule,
    MenuModule,
    DividerModule,
    PanelMenuModule,
    BreadcrumbModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    AccordionModule,
  ],
})
export class SharedModule {}
