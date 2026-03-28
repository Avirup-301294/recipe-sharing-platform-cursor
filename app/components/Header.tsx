import Link from "next/link";

interface HeaderProps {
  brand?: string;
  tagline?: string;
}

export function Header({
  brand = "Recipe Sharing",
  tagline = "Upload and discover recipes",
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200/70 bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800/70 dark:bg-zinc-950/70 dark:supports-[backdrop-filter]:bg-zinc-950/55">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid size-9 place-items-center rounded-xl bg-zinc-900 text-sm font-semibold text-white shadow-sm ring-1 ring-zinc-900/10 dark:bg-zinc-50 dark:text-zinc-950 dark:ring-white/10">
            R
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">{brand}</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              {tagline}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {[
            { label: "Browse", href: "/" },
            { label: "Categories", href: "/" },
            { label: "Upload", href: "/" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900/60 dark:hover:text-zinc-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-xl border border-zinc-200 bg-white px-3 text-sm font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
          >
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}

