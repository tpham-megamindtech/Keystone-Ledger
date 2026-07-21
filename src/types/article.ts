export type CategorySlug =
  | "finance-economy"
  | "business-leaders"
  | "beauty-wellness"
  | "education"
  | "healthcare";

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  category: CategorySlug;
  coverImage: string;
  imageCredit: string;
  date: string;
  featured?: boolean;
}

export interface Article extends ArticleMeta {
  contentHtml: string;
}
