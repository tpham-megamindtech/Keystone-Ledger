import { notFound } from "next/navigation";
import ArticleListItem from "@/components/ArticleListItem";
import Pagination from "@/components/Pagination";
import { CATEGORIES, getCategoryBySlug } from "@/lib/categories";
import { getArticlesByCategory } from "@/lib/articles";
import type { CategorySlug } from "@/types/article";

const PAGE_SIZE = 9;

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ slug: category.slug }));
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const { page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page ?? "1", 10) || 1);

  const allArticles = getArticlesByCategory(slug as CategorySlug);
  const totalPages = Math.max(1, Math.ceil(allArticles.length / PAGE_SIZE));
  const start = (currentPage - 1) * PAGE_SIZE;
  const articles = allArticles.slice(start, start + PAGE_SIZE);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="font-display border-b-2 border-navy pb-4 text-3xl font-bold text-navy sm:text-4xl">
        {category.name}
      </h1>
      <p className="mt-3 text-muted">{category.description}</p>

      {articles.length === 0 ? (
        <p className="mt-10 text-muted">No articles in this category yet.</p>
      ) : (
        <div className="mt-8">
          {articles.map((article) => (
            <ArticleListItem key={article.slug} article={article} />
          ))}
        </div>
      )}

      <Pagination
        basePath={`/category/${slug}`}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
