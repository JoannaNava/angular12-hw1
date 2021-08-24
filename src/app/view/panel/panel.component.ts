import { Component, OnInit } from '@angular/core';
import { DropdownName } from '@models/dropdown.model';
import { MenuList, ParentMenu } from '@models/menu.model';
import { MenuService } from '@services/menu.service';
import { deepClone } from '@services/utils/utils';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  panelMenu: MenuList = {};
  filterMenu: ParentMenu[] = [];
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
    this.getMenu();
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

  getMenu(): void {
    this.menuService.getLayerMenu().subscribe((res) => {
      if (res) {
        this.panelMenu = res;
        this.filterMenu = this.generateFilterMenu();
      }
    });
  }

  generateFilterMenu(): ParentMenu[] {
    return Object.entries(this.panelMenu).map(([key, value], index) => ({
      name: key,
      child: deepClone(value),
      selected: index === 0,
    })) as ParentMenu[];
  }

  search(): void {
    this.filterMenu = this.generateFilterMenu();
    if (this.filterParent) {
      this.filterMenu = [
        {
          name: this.filterParent,
          child: this.panelMenu[this.filterParent],
          selected: true,
        },
      ];
    }

    if (this.filterCategory) {
      this.filterMenu = this.filterMenu.filter((parent) => {
        const result = parent.child.some(
          (child) => child.category === this.filterCategory
        );
        if (result === true) {
          parent.child = parent.child.filter(
            (child) => child.category === this.filterCategory
          );
        }
        return result;
      });
    }

    if (this.keyword) {
      const target = this.generateFilterMenu();
      this.filterMenu = target.filter((p) => {
        const result = p.child.some((c) => {
          return c.child.some(
            (t) =>
              t.child_question.indexOf(this.keyword) > -1 ||
              t.child_answer.indexOf(this.keyword) > -1
          );
        });
        if (result === true) {
          p.child = p.child.filter((c) => {
            const result1 = c.child.some(
              (t) =>
                t.child_question.indexOf(this.keyword) > -1 ||
                t.child_answer.indexOf(this.keyword) > -1
            );
            if (result1 === true) {
              c.child = c.child.filter(
                (t) =>
                  t.child_question.indexOf(this.keyword) > -1 ||
                  t.child_answer.indexOf(this.keyword) > -1
              );
            }
            return result1;
          });
        }
        return result;
      });
    }
  }
}
