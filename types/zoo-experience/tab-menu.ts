export interface TabMenuData {
  tab: string;
  tab_content: TabMenuContentItem[];
}

export interface TabMenuContentItem {
  title: string;
  tag: string;
  description: string;
  price: string;
}
