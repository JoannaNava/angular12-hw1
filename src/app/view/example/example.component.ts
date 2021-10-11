import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements OnInit {
  showNum = 1;
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
  }
}
