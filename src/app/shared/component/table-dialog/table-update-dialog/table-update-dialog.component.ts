import { Component, OnInit } from '@angular/core';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { TableMenu } from '@models/table.model';
import { deepClone } from '@services/utils/utils';
@Component({
  selector: 'app-table-update-dialog',
  templateUrl: './table-update-dialog.component.html',
  styleUrls: ['./table-update-dialog.component.scss'],
})
export class TableUpdateDialogComponent implements OnInit {
  data!: TableMenu;
  auditStatus = [
    { name: '審核通過' },
    { name: '審核未通過' },
    { name: '未審核' },
  ];
  constructor(
    private ref: DynamicDialogRef,
    public dialogService: DialogService,
    public config: DynamicDialogConfig
  ) {
    this.data = new TableMenu();
  }

  ngOnInit(): void {
    let data = deepClone(this.config.data);
    if (data) {
      this.data = data;
      this.data.startDate = new Date(data.startDate).toLocaleDateString();
      this.data.endDate = new Date(data.endDate).toLocaleDateString();
    }
  }

  close(): void {
    this.ref.close();
  }

  confirm(): void {
    this.ref.close(this.data);
  }
}
