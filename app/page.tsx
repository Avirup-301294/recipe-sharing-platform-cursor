import { Header } from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <Header />

      <main>
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(24,24,27,0.08)_0%,rgba(24,24,27,0)_70%)] dark:bg-[radial-gradient(60%_60%_at_50%_0%,rgba(244,244,245,0.10)_0%,rgba(244,244,245,0)_70%)]"
          />
          <div className="mx-auto max-w-6xl px-4 pb-10 pt-12 sm:px-6 sm:pb-14 sm:pt-16">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                  <span className="inline-block size-1.5 rounded-full bg-emerald-500" />
                  New: Supabase-powered auth coming next
                </div>

                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Share recipes beautifully. Discover them instantly.
                </h1>
                <p className="max-w-prose text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300">
                  A clean recipe platform built with Next.js. Upload recipes,
                  browse community favorites, and filter by category — with
                  authentication and storage powered by Supabase.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="flex w-full items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm ring-1 ring-transparent focus-within:ring-zinc-900/10 dark:border-zinc-800 dark:bg-zinc-900 dark:focus-within:ring-white/10">
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className="size-5 text-zinc-400"
                      fill="none"
                    >
                      <path
                        d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M16 16.5 21 21.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <input
                      aria-label="Search recipes"
                      placeholder="Search recipes (coming soon)"
                      className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed"
                      disabled
                    />
                  </div>

                  <div className="flex gap-3">
                    <a
                      href="#recipes"
                      className="inline-flex h-11 items-center justify-center rounded-2xl bg-zinc-900 px-4 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
                    >
                      Browse recipes
                    </a>
                    <a
                      href="#features"
                      className="inline-flex h-11 items-center justify-center rounded-2xl border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
                    >
                      What’s next
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    "Appetizers",
                    "Main courses",
                    "Desserts",
                    "Quick meals",
                    "Vegetarian",
                  ].map((label) => (
                    <span
                      key={label}
                      className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold tracking-tight">
                      Featured recipes
                    </div>
                    <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      Sample content for now
                    </div>
                  </div>
                  <div className="hidden text-xs text-zinc-500 dark:text-zinc-400 sm:block">
                    Updated weekly
                  </div>
                </div>

                <div id="recipes" className="mt-5 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Lemon Garlic Pasta",
                      meta: "Main course • 20 min",
                    },
                    {
                      title: "Chocolate Mug Cake",
                      meta: "Dessert • 10 min",
                    },
                    {
                      title: "Cucumber Yogurt Dip",
                      meta: "Appetizer • 10 min",
                    },
                    {
                      title: "One-pan Veggie Rice",
                      meta: "Quick meal • 25 min",
                    },
                  ].map((r) => (
                    <article
                      key={r.title}
                      className="group rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition hover:bg-white hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-950/40 dark:hover:bg-zinc-950"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h2 className="text-sm font-semibold tracking-tight">
                            {r.title}
                          </h2>
                          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                            {r.meta}
                          </p>
                        </div>
                        <svg
                          aria-hidden
                          viewBox="0 0 24 24"
                          className="size-5 text-zinc-400 transition group-hover:text-zinc-700 dark:group-hover:text-zinc-200"
                          fill="none"
                        >
                          <path
                            d="M7 17 17 7"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M9 7h8v8"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        <span className="rounded-full bg-white px-2 py-1 text-[11px] font-medium text-zinc-600 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:ring-zinc-800">
                          easy
                        </span>
                        <span className="rounded-full bg-white px-2 py-1 text-[11px] font-medium text-zinc-600 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:ring-zinc-800">
                          popular
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="border-t border-zinc-200/70 bg-white py-10 dark:border-zinc-800/70 dark:bg-zinc-950"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-balance text-2xl font-semibold tracking-tight">
                  Built for a calm, focused cooking flow
                </h2>
                <p className="mt-2 max-w-prose text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  We’ll keep the UI simple: fast browsing, clean recipe pages,
                  and easy uploads.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Auth with Supabase",
              body: "Sign up, log in, log out, and password reset.",
            },
            {
              title: "Recipe uploads",
              body: "Title, ingredients, steps, and optional image.",
            },
            {
              title: "Search & categories",
              body: "Keyword search plus category filtering.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="text-sm font-semibold">{item.title}</div>
              <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                {item.body}
              </div>
            </div>
          ))}
            </div>

            <footer className="mt-10 flex flex-col gap-2 border-t border-zinc-200/70 pt-6 text-xs text-zinc-500 dark:border-zinc-800/70 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
              <div>Built with Next.js + Tailwind. Supabase integration next.</div>
              <div className="text-zinc-400 dark:text-zinc-500">
                © {new Date().getFullYear()} Recipe Sharing Platform
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
