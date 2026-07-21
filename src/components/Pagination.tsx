import Link from "next/link";

export default function Pagination({
  basePath,
  currentPage,
  totalPages,
}: {
  basePath: string;
  currentPage: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="mt-10 flex items-center justify-center gap-2 border-t border-border pt-8">
      <Link
        href={currentPage > 1 ? `${basePath}?page=${currentPage - 1}` : "#"}
        aria-disabled={currentPage === 1}
        className={`px-3 py-2 text-sm font-semibold ${
          currentPage === 1
            ? "pointer-events-none text-muted/40"
            : "text-navy hover:text-gold"
        }`}
      >
        &larr; Prev
      </Link>

      {pages.map((page) => (
        <Link
          key={page}
          href={`${basePath}?page=${page}`}
          className={`px-3 py-2 text-sm font-semibold ${
            page === currentPage
              ? "bg-navy text-white"
              : "text-navy hover:text-gold"
          }`}
        >
          {page}
        </Link>
      ))}

      <Link
        href={currentPage < totalPages ? `${basePath}?page=${currentPage + 1}` : "#"}
        aria-disabled={currentPage === totalPages}
        className={`px-3 py-2 text-sm font-semibold ${
          currentPage === totalPages
            ? "pointer-events-none text-muted/40"
            : "text-navy hover:text-gold"
        }`}
      >
        Next &rarr;
      </Link>
    </nav>
  );
}
