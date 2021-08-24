import { Component, OnInit } from '@angular/core';
import { DropdownName } from '@models/dropdown.model';
import { QuestionMenu } from '@models/question.model';
import { MenuService } from '@services/menu.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  childCategory: DropdownName[] = [];
  filterChild = '';
  data: QuestionMenu[] = [];
  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.getQuestion();
    this.getDropdown();
  }

  getDropdown(): void {
    this.menuService.getDropdown().subscribe((res) => {
      if (res) {
        this.childCategory = res.childCategory;
      }
    });
  }

  getQuestion(): void {
    this.menuService.getQuestion().subscribe((res) => {
      if (res) {
        this.data = res;
      }
    });
  }
}
