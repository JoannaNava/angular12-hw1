export interface TableMenu {
  id: number;
  order: number;
  title: string;
  status: string;
  startDate: string;
  endDate: string;
}

export class TableMenu {
  id = 0;
  order = 0;
  title = '';
  status = '';
  startDate = new Date().toLocaleDateString();
  endDate = new Date().toLocaleDateString();
  constructor() {}
}
