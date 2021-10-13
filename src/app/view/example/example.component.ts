import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements OnInit {
  showNum = 1;
  val1 = '';
  val2 = '';
  val3 = { value: '' };
  val4 = { value: '' };
  example: { item: any } = { item: {} };
  obj1: { item: any } = { item: {} };
  obj2: { item: any } = { item: {} };
  count1 = 0;
  count2 = 0;
  count3 = 0;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((res) => {
      console.log('res', res);

      if (res.url) {
        switch (res.url) {
          case '/example1':
            this.showNum = 1;
            break;
          case '/example2':
            this.showNum = 2;
            break;
          case '/example3':
            this.showNum = 3;
            break;
        }
      }
    });
    this.cloneExample();
  }

  // 深淺複製範例
  cloneExample(): void {
    this.example = {
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
    this.obj1 = Object.assign({}, this.example);
    this.obj1.item.item.item.item.item.item.a = '2';
    this.obj1.item.a = '2';
    // 深複製
    this.obj2 = JSON.parse(JSON.stringify(this.example));
    this.obj2.item.item.item.item.item.item.a = '3';
    this.obj2.item.a = '3';

    // 傳值傳址範例
    this.val1 = 'apple';
    this.val2 = this.val1;
    this.val2 = 'pineapple';

    this.val3 = {
      value: 'apple',
    };
    this.val4 = this.val3;
    // this.val4.value = 'pineapple';
    this.val4 = {
      value: 'apple1',
    };

    // 閉包
    const func = function () {
      var count = 0;
      return function (x: number) {
        count += x;
        return count;
      };
    };

    const addcount = func();
    this.count1 = addcount(1);
    this.count2 = addcount(1);
    this.count3 = addcount(1);
  }
}
