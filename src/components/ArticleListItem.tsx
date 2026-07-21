import Image from "next/image";
import Link from "next/link";
import type { ArticleMeta } from "@/types/article";

export default function ArticleListItem({ article }: { article: ArticleMeta }) {
  return (
    <Link
      href={`/article/${article.slug}`}
      className="group flex gap-5 border-b border-border py-6 first:pt-0"
    >
      <div className="relative h-24 w-36 shrink-0 overflow-hidden bg-surface-alt sm:h-28 sm:w-44">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          sizes="176px"
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="font-display text-lg font-bold leading-snug text-navy group-hover:text-gold sm:text-xl">
          {article.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground/75 line-clamp-2">
          {article.description}
        </p>
      </div>
    </Link>
  );
}
