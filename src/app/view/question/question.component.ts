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
  keyword = '';
  data: QuestionMenu[] = [];
  filterData: QuestionMenu[] = [];
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
        this.filterData = res;
      }
    });
  }

  search(): void {
    this.filterData = this.data;
    if (this.filterChild) {
      this.filterData = this.data.filter(
        (item) => item.category === this.filterChild
      );
    }

    if (this.keyword) {
      this.filterData = this.filterData.filter(
        (item) =>
          item.question.indexOf(this.keyword) > -1 ||
          item.answer.indexOf(this.keyword) > -1
      );
    }
  }
}
