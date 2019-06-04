export interface User {
  email: string;
  password: string;
}

export interface Category {
  name: string;
  image?: string;
  user?: string;
  _id?: string;
}

export interface Message {
  message: string;
}

export interface Position {
  name: string;
  cost: number;
  user?: string;
  category: string;
  _id?: string;
  quantity?: number;
}

export interface Order {
  date?: Date;
  order?: number;
  user?: string;
  list: ListItem[];
  _id?: string;
}

export interface ListItem {
  name: string;
  cost: number;
  quantity: number;
  _id?: string;
}

export interface Filter {
  start?: Date;
  end?: Date;
  order?: number;
}

export interface OverviewPage {
  orders: OverviewItem;
  gain: OverviewItem;
}

export interface OverviewItem {
  percent: number;
  compare: number;
  yesterday: number;
  isHigher: boolean;
}

export interface AnalyticsPage {
  average: number;
  chart: ChartItem[];
}

export interface ChartItem {
  gain: number;
  order: number;
  label: string;
}
