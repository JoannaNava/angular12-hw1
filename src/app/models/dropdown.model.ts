export interface DropdownName {
  name: string;
}

export interface DropdownMenu {
  parentCategory: DropdownName[];
  category: DropdownName[];
  childCategory: DropdownName[];
}
