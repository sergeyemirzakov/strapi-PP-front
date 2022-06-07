export interface Attributes {
  title: string;
  body: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Datum {
  id: number;
  attributes: Attributes;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface Posts {
  data: Datum[];
  meta: Meta;
}
