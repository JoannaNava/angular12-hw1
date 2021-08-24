import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

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
  constructor() {
    this.items = this.items = [
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

    this.breadcrumbItems = [
      { label: 'Categories' },
      { label: 'Sports' },
      { label: 'Football' },
      { label: 'Countries' },
      { label: 'Spain' },
      { label: 'F.C. Barcelona' },
      { label: 'Squad' },
      {
        label: 'Lionel Messi',
        url: 'https://en.wikipedia.org/wiki/Lionel_Messi',
      },
    ];
  }

  ngOnInit(): void {}
}
