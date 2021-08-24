import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DropdownMenu } from '@models/dropdown.model';
import { MenuList } from '@models/menu.model';
import { QuestionMenu } from '@models/question.model';
import { TableMenu } from '@models/table.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {}

  getLayerMenu(): Observable<MenuList> {
    return this.http.get<MenuList>('http://localhost:3000/menu');
  }

  getDropdown(): Observable<DropdownMenu> {
    return this.http.get<DropdownMenu>('http://localhost:3000/dropdown');
  }

  getTable(): Observable<TableMenu[]> {
    return this.http.get<TableMenu[]>('http://localhost:3000/table');
  }

  getQuestion(): Observable<QuestionMenu[]> {
    return this.http.get<QuestionMenu[]>('http://localhost:3000/question');
  }
}
