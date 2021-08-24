import { Component, OnInit } from '@angular/core';
import { DropdownName } from '@models/dropdown.model';
import { TableMenu } from '@models/table.model';
import { MenuService } from '@services/menu.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  products: TableMenu[] = [];
  parentCategory: DropdownName[] = [];
  category: DropdownName[] = [];
  childCategory: DropdownName[] = [];
  filterParent = '';
  filterCategory = '';
  filterChild = '';
  keyword = '';
  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.getDropdown();
    this.getTable();
  }

  getDropdown(): void {
    this.menuService.getDropdown().subscribe((res) => {
      if (res) {
        this.parentCategory = res.parentCategory;
        this.childCategory = res.childCategory;
        this.category = res.category;
      }
    });
  }

  getTable(): void {
    this.menuService.getTable().subscribe((res) => {
      if (res) {
        this.products = res;
      }
    });
  }
}
