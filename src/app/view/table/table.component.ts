import { Component, OnInit } from '@angular/core';
import { DropdownName } from '@models/dropdown.model';
import { TableMenu } from '@models/table.model';
import { TableUpdateDialogComponent } from '@services/component/table-dialog/table-update-dialog/table-update-dialog.component';
import { MenuService } from '@services/menu.service';
import { DialogService } from 'primeng/dynamicdialog';

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
  auditStatus = [
    { name: '審核通過' },
    { name: '審核未通過' },
    { name: '未審核' },
  ];
  filterParent = '';
  filterCategory = '';
  filterChild = '';
  keyword = '';
  constructor(
    private menuService: MenuService,
    private dialogService: DialogService
  ) {}

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

  deleteData(itemIndex: number): void {
    this.products.splice(itemIndex, 1);
  }

  createItem(): void {
    const ref = this.dialogService.open(TableUpdateDialogComponent, {
      header: '新增資料',
      width: '50%',
    });
    ref.onClose.subscribe((res: TableMenu) => {
      if (res) {
        const len = Math.max(...this.products.map((item) => item.id)) + 1;
        this.products.push({
          id: len,
          order: len,
          title: res.title,
          status: res.status,
          startDate: res.startDate,
          endDate: res.endDate,
        });
      }
    });
  }

  updateItem(item: TableMenu, index: number): void {
    const ref = this.dialogService.open(TableUpdateDialogComponent, {
      header: '編輯資料',
      width: '50%',
      data: item,
    });
    ref.onClose.subscribe((res: TableMenu) => {
      if (res) {
        this.products.splice(index, 1, res);
      }
    });
  }
}
