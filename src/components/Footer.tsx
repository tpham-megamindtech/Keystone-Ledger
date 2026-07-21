import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";

export default function Footer() {
  return (
    <footer className="border-t-4 border-navy bg-navy text-white/80">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="font-display text-2xl font-bold text-white">
              Keystone <span className="text-gold">Ledger</span>
            </p>
            <p className="mt-2 max-w-xs text-sm text-white/60">
              Independent coverage of finance, business, wellness, education, and
              healthcare across Pennsylvania.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gold">
              Sections
            </h3>
            <ul className="mt-3 space-y-2">
              {CATEGORIES.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/category/${category.slug}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          &copy; {new Date().getFullYear()} Keystone Ledger. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
