import Image from "next/image";
import Link from "next/link";
import type { ArticleMeta } from "@/types/article";

export default function CompactList({ articles }: { articles: ArticleMeta[] }) {
  return (
    <ul className="divide-y divide-border">
      {articles.map((article) => (
        <li key={article.slug}>
          <Link
            href={`/article/${article.slug}`}
            className="group flex items-start gap-3 py-3 first:pt-0"
          >
            <div className="relative h-16 w-20 shrink-0 overflow-hidden bg-surface-alt">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <h4 className="font-display text-sm font-semibold leading-snug text-foreground group-hover:text-gold">
              {article.title}
            </h4>
          </Link>
        </li>
      ))}
    </ul>
  );
}
