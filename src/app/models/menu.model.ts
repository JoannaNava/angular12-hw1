export interface ChildMenu extends CustomMenu {
  child_category: string;
  child_question: string;
  child_answer: string;
}

export interface Menu extends CustomMenu {
  category: string;
  question: string;
  ans: string;
  child: ChildMenu[];
}

export interface MenuList {
  [key: string]: Menu[];
}

export interface ParentMenu extends CustomMenu {
  name: string;
  child: Menu[];
}

export interface CustomMenu {
  // 自訂義屬性
  selected?: boolean;
}
