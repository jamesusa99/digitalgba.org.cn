import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Newspaper, Bell } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "news.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "news" });

  const items = (t.raw("items") as Array<{
    category: string;
    date: string;
    title: string;
    excerpt: string;
  }>);

  const categoryColors: Record<string, string> = {
    institute: "bg-bashu-bronze/10 text-bashu-bronze",
    policy: "bg-bashu-teal/10 text-bashu-teal",
    culture: "bg-brocade-gold/10 text-brocade-gold",
    outcomes: "bg-shu-red/10 text-shu-red",
    events: "bg-ink/10 text-ink",
  };

  const categories = [
    { key: "all", label: t("categories.all") },
    { key: "institute", label: t("categories.institute") },
    { key: "policy", label: t("categories.policy") },
    { key: "culture", label: t("categories.culture") },
    { key: "outcomes", label: t("categories.outcomes") },
    { key: "events", label: t("categories.events") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-bashu-teal/90 via-bashu-bronze/90 to-ink py-24 text-center text-snow">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-xs uppercase tracking-widest text-brocade-gold-soft/80">
            Greater Bay Area Culture Digital Institute
          </p>
          <h1 className="mt-4 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
            {t("hero.title")}
          </h1>
          <p className="mt-4 text-lg text-snow/80">{t("hero.subtitle")}</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">

            {/* Main content */}
            <div className="flex-1">
              {/* Category tabs */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    type="button"
                    className="rounded-full border border-border px-4 py-1.5 text-sm text-foreground/70 transition hover:border-bashu-bronze hover:text-bashu-bronze first:bg-bashu-bronze first:text-snow first:border-bashu-bronze"
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* News list */}
              <div className="mt-8 space-y-6">
                {items.map((item) => (
                  <article
                    key={item.title}
                    className="flex flex-col gap-3 rounded-2xl border border-border bg-snow p-6 shadow-sm transition hover:shadow-md sm:flex-row sm:items-start"
                  >
                    <div className="shrink-0">
                      <Newspaper className="h-8 w-8 text-bashu-bronze/40" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[item.category] ?? "bg-paper-warm text-ink"}`}
                        >
                          {t(`categories.${item.category}`)}
                        </span>
                        <time className="text-xs text-muted">{item.date}</time>
                      </div>
                      <h2 className="mt-2 font-serif text-base font-semibold text-ink leading-snug">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-sm text-muted leading-relaxed">{item.excerpt}</p>
                      <button
                        type="button"
                        className="mt-3 text-xs font-medium text-bashu-bronze transition hover:text-bashu-bronze-light"
                      >
                        {t("readMore")} →
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-10 text-center">
                <button
                  type="button"
                  className="rounded-full border border-bashu-bronze px-8 py-3 text-sm font-medium text-bashu-bronze transition hover:bg-paper-warm"
                >
                  {t("loadMore")}
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-72 space-y-6">
              {/* Subscribe */}
              <div className="rounded-2xl border border-border bg-snow p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-bashu-bronze" />
                  <h3 className="font-serif text-base font-semibold text-ink">{t("subscribe.title")}</h3>
                </div>
                <p className="mt-2 text-sm text-muted">{t("subscribe.desc")}</p>
                <input
                  type="email"
                  placeholder={t("subscribe.emailPlaceholder")}
                  className="mt-4 w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-bashu-bronze"
                />
                <button
                  type="button"
                  className="mt-3 w-full rounded-lg bg-bashu-bronze py-2 text-sm font-medium text-snow transition hover:bg-bashu-bronze-light"
                >
                  {t("subscribe.subscribeCta")}
                </button>
                <button
                  type="button"
                  className="mt-2 w-full rounded-lg border border-bashu-bronze py-2 text-sm font-medium text-bashu-bronze transition hover:bg-paper-warm"
                >
                  {t("subscribe.wechatCta")}
                </button>
              </div>

              {/* Q&A */}
              <div className="rounded-2xl border border-border bg-paper-warm/40 p-6">
                <h3 className="font-serif text-base font-semibold text-ink">{t("qa.title")}</h3>
                <p className="mt-2 text-sm text-muted">{t("qa.subtitle")}</p>
                <Link
                  href="/contact"
                  className="mt-4 inline-block rounded-lg bg-bashu-bronze px-4 py-2 text-xs font-medium text-snow transition hover:bg-bashu-bronze-light"
                >
                  {locale === "en" ? "Ask a Question" : locale === "zh-TW" ? "提問" : "提问"}
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
