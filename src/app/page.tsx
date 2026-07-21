import CategorySection from "@/components/CategorySection";
import { CATEGORIES } from "@/lib/categories";
import { getArticlesByCategory, getFeaturedArticle } from "@/lib/articles";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="divide-y divide-border">
        {CATEGORIES.map((category) => {
          const featured = getFeaturedArticle(category.slug);
          const list = getArticlesByCategory(category.slug)
            .filter((article) => article.slug !== featured.slug)
            .slice(0, 5);

          return (
            <CategorySection
              key={category.slug}
              name={category.name}
              slug={category.slug}
              featured={featured}
              list={list}
            />
          );
        })}
      </div>
    </div>
  );
}
