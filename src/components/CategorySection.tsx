import Link from "next/link";
import FeaturedStory from "@/components/FeaturedStory";
import CompactList from "@/components/CompactList";
import type { ArticleMeta } from "@/types/article";
import type { CategorySlug } from "@/types/article";

export default function CategorySection({
  name,
  slug,
  featured,
  list,
}: {
  name: string;
  slug: CategorySlug;
  featured: ArticleMeta;
  list: ArticleMeta[];
}) {
  return (
    <section className="py-10">
      <div className="flex items-baseline justify-between border-b-2 border-navy pb-2">
        <h2 className="font-display text-xl font-bold uppercase tracking-wide text-navy sm:text-2xl">
          {name}
        </h2>
        <Link
          href={`/category/${slug}`}
          className="text-sm font-semibold text-gold hover:text-gold-hover"
        >
          View all &rarr;
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <FeaturedStory article={featured} />
        </div>
        <div className="lg:col-span-1 lg:border-l lg:border-border lg:pl-8">
          <CompactList articles={list} />
        </div>
      </div>
    </section>
  );
}
