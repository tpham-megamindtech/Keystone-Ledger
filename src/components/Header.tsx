import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";

export default function Header() {
  return (
    <header className="border-b-4 border-navy bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-display text-3xl font-bold tracking-tight text-navy">
            Keystone <span className="text-gold">Ledger</span>
          </Link>
          <p className="hidden font-display text-sm italic text-muted sm:block">
            Pennsylvania Business &amp; Community News
          </p>
        </div>
      </div>

      <nav className="border-t border-border bg-navy">
        <div className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-4 sm:px-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="shrink-0 whitespace-nowrap px-3 py-3 text-sm font-semibold uppercase tracking-wide text-white/85 transition-colors hover:bg-navy-hover hover:text-gold"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
