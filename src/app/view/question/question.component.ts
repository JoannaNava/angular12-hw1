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
    this.cloneExample();
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
  // 深淺複製範例
  cloneExample(): void {
    const example = {
      item: {
        item: {
          item: {
            item: {
              item: {
                item: {
                  a: '1',
                },
              },
            },
          },
        },
        a: '1',
      },
    };

    // 淺複製
    const obj1 = Object.assign({}, example);
    obj1.item.item.item.item.item.item.a = '2';
    obj1.item.a = '2';
    // 深複製
    const obj2 = JSON.parse(JSON.stringify(example));
    obj2.item.item.item.item.item.item.a = '3';
    obj2.item.a = '3';
    console.log('深淺複製範例: ');
    console.log(example);
    console.log(obj2);

    // 傳值傳址範例
    var val1 = 'apple';
    var val2 = val1;
    val2 = 'pineapple';

    const val3 = {
      value: 'apple',
    };
    const val4 = val3;
    //val4.value = 'pineapple';
    console.log('傳值傳址範例: ');
    console.log(val1);
    console.log(val2);
    console.log(val3);
    console.log(val4);

    // 閉包
    const func = function () {
      var count = 1;
      return function (x: number) {
        return count + x;
      };
    };

    const addcount = func();

    console.log('add', addcount(1));
    console.log('add', addcount(2));
    console.log('add', addcount(3));
  }
}
