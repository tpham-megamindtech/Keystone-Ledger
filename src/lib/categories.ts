import type { CategorySlug } from "@/types/article";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  {
    slug: "finance-economy",
    name: "Finance & Economy",
    description: "Markets, banking, and the economic forces shaping Pennsylvania.",
  },
  {
    slug: "business-leaders",
    name: "Business Leaders",
    description: "The executives and entrepreneurs building the Keystone State's economy.",
  },
  {
    slug: "beauty-wellness",
    name: "Beauty & Wellness",
    description: "Salons, spas, and the wellness businesses serving local communities.",
  },
  {
    slug: "education",
    name: "Education",
    description: "Schools, universities, and the policies shaping how Pennsylvania learns.",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    description: "Hospitals, clinics, and the care systems serving the state.",
  },
];

export function getCategoryName(slug: string): string {
  return CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
