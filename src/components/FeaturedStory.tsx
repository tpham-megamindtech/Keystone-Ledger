import Image from "next/image";
import Link from "next/link";
import type { ArticleMeta } from "@/types/article";

export default function FeaturedStory({ article }: { article: ArticleMeta }) {
  return (
    <Link href={`/article/${article.slug}`} className="group block">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-alt">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          priority
          sizes="(min-width: 1024px) 640px, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <h3 className="font-display mt-4 text-2xl font-bold leading-snug text-navy group-hover:text-gold sm:text-3xl">
        {article.title}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-foreground/80">
        {article.description}
      </p>
    </Link>
  );
}
