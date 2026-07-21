import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/formatDate";
import { getCategoryName } from "@/lib/categories";
import { getAllArticleSlugs, getArticleBySlug, getRelatedArticles } from "@/lib/articles";

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article, 3);

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link
        href={`/category/${article.category}`}
        className="text-xs font-semibold uppercase tracking-wider text-gold"
      >
        {getCategoryName(article.category)}
      </Link>

      <h1 className="font-display mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl md:text-5xl">
        {article.title}
      </h1>

      <div className="mt-4 border-b border-border pb-4 text-sm text-muted">
        <time dateTime={article.date}>{formatDate(article.date)}</time>
      </div>

      <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden bg-surface-alt">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          priority
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
        />
      </div>
      <p className="mt-2 text-xs italic text-muted">Photo: {article.imageCredit}</p>

      <div
        className="prose mt-10 max-w-none prose-headings:font-display prose-headings:text-navy prose-a:text-gold prose-a:no-underline hover:prose-a:underline"
        dangerouslySetInnerHTML={{ __html: article.contentHtml }}
      />

      {related.length > 0 && (
        <section className="mt-16 border-t-2 border-navy pt-8">
          <h2 className="font-display mb-6 text-xl font-bold uppercase tracking-wide text-navy">
            Related in {getCategoryName(article.category)}
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/article/${item.slug}`} className="group block">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-alt">
                  <Image
                    src={item.coverImage}
                    alt={item.title}
                    fill
                    sizes="(min-width: 640px) 240px, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-display mt-3 text-sm font-bold leading-snug text-foreground group-hover:text-gold">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
