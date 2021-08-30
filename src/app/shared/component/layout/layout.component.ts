import { Route } from '@angular/compiler/src/core';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs/operators';
import { MenuService } from '@services/menu.service';
import { ChildMenu, Menu } from '@models/menu.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
  items: MenuItem[] = [];
  breadcrumbItems: MenuItem[] = [];
  isMenuOpen = true;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private menuService: MenuService
  ) {
    this.breadcrumbItems = [{ label: 'Home', url: '/' }];
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event) {
          console.log(event);
          console.log(this.route.snapshot.routeConfig);

          const { children } = this.route.snapshot.routeConfig as Route;
          if (children) {
            const target = children.filter((item) => {
              if ((item as any)?.data) {
                return (item as any)?.data.url === event.url;
              } else {
                return false;
              }
            });

            if (target.length === 0) {
              this.breadcrumbItems = [
                { label: 'Home', url: '/' },
                { label: 'Table', url: '/table' },
              ];
              return;
            }
            const [activeChild] = target;
            const { url, label } = (activeChild as any).data;
            this.breadcrumbItems.splice(1, 1, { label, url });
          }
        }
      });
    this.items = [
      {
        label: 'Homework',
        icon: 'pi pi-pw pi-file',
        items: [
          {
            label: 'Table',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/table',
          },
          {
            label: 'Panel',
            icon: 'pi pi-fw pi-external-link',
            routerLink: '/panel',
          },
          {
            label: 'Question',
            icon: 'pi pi-fw pi-times',
            routerLink: '/question',
          },
        ],
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
        ],
      },
      {
        label: 'Help',
        icon: 'pi pi-fw pi-question',
        items: [
          {
            label: 'Contents',
            icon: 'pi pi-pi pi-bars',
          },
          {
            label: 'Search',
            icon: 'pi pi-pi pi-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace',
                  },
                ],
              },
              {
                label: 'User',
                icon: 'pi pi-fw pi-file',
              },
            ],
          },
        ],
      },
      {
        label: 'Actions',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              { label: 'Save', icon: 'pi pi-fw pi-save' },
              { label: 'Update', icon: 'pi pi-fw pi-save' },
            ],
          },
          {
            label: 'Other',
            icon: 'pi pi-fw pi-tags',
            items: [{ label: 'Delete', icon: 'pi pi-fw pi-minus' }],
          },
        ],
      },
    ];

    // this.breadcrumbItems = [
    //   { label: 'Categories' },
    //   { label: 'Sports' },
    //   { label: 'Football' },
    //   { label: 'Countries' },
    //   { label: 'Spain' },
    //   { label: 'F.C. Barcelona' },
    //   { label: 'Squad' },
    //   {
    //     label: 'Lionel Messi',
    //     url: 'https://en.wikipedia.org/wiki/Lionel_Messi',
    //   },
    // ];
  }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(): void {
    this.menuService.getLayerMenu().subscribe((res) => {
      if (res) {
        let menu = [];
        menu = Object.entries(res).map(([key, value]) => {
          return {
            label: key,
            icon: 'pi pi-fw pi-cog',
            items: this.createMenu(value),
          };
        });
        this.items = this.items.concat(menu);
        console.log('menu', menu);
      }
    });
  }

  createMenu(menuList: (Menu | ChildMenu)[]): MenuItem[] {
    console.log(menuList);

    return menuList.map((item: Menu | ChildMenu) => {
      const labelKey = Object.keys(item)[0];
      console.log(labelKey);
      console.log((item as any)[labelKey]);
      if (item && 'child' in item) {
        return {
          label: labelKey ? (item as any)[labelKey] : 'labelKey',
          icon: 'pi pi-fw pi-cog',
          items: this.createMenu(item.child),
        };
      }
      return {
        label: labelKey ? (item as any)[labelKey] : 'labelKey',
        icon: 'pi pi-fw pi-cog',
      };
    });
  }
}
