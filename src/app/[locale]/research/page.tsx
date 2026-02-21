import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { MonitorPlay, Database, Wrench, FileText, CheckCircle, Lock } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "research.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function ResearchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "research" });

  const museums = (t.raw("museums.items") as Array<{
    title: string;
    desc: string;
    tag: string;
  }>);

  const dbFeatures = (t.raw("database.features") as Array<{
    title: string;
    desc: string;
  }>);

  const tools = (t.raw("tools.items") as Array<{
    title: string;
    desc: string;
    cta: string;
  }>);

  const reports = (t.raw("reports.items") as Array<{
    title: string;
    year: string;
    desc: string;
    free: boolean;
  }>);

  const dirs = [
    {
      title: t("dir1.title"),
      subtitle: t("dir1.subtitle"),
      items: t.raw("dir1.items") as Array<{ label: string; text: string }>,
    },
    {
      title: t("dir2.title"),
      subtitle: t("dir2.subtitle"),
      items: t.raw("dir2.items") as Array<{ label: string; text: string }>,
    },
    {
      title: t("dir3.title"),
      subtitle: t("dir3.subtitle"),
      items: t.raw("dir3.items") as Array<{ label: string; text: string }>,
    },
  ];

  const blocks = [
    { title: t("block1.title"), items: t.raw("block1.items") as Array<{ label: string; text: string }> },
    { title: t("block2.title"), items: t.raw("block2.items") as Array<{ label: string; text: string }> },
    { title: t("block3.title"), items: t.raw("block3.items") as Array<{ label: string; text: string }> },
    { title: t("block4.title"), items: t.raw("block4.items") as Array<{ label: string; text: string }> },
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

      {/* Digital Museums */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bashu-bronze/10">
              <MonitorPlay className="h-6 w-6 text-bashu-bronze" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-ink">{t("museums.title")}</h2>
              <p className="mt-1 text-muted">{t("museums.subtitle")}</p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {museums.map((m) => (
              <div key={m.title} className="rounded-2xl border border-border bg-snow p-6 shadow-sm">
                <span className="inline-block rounded-full bg-bashu-bronze/10 px-3 py-1 text-xs font-medium text-bashu-bronze">
                  {m.tag}
                </span>
                <h3 className="mt-4 font-serif text-base font-semibold text-ink">{m.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{m.desc}</p>
                <Link
                  href="/contact"
                  className="mt-4 inline-block text-xs font-medium text-bashu-bronze transition hover:text-bashu-bronze-light"
                >
                  {locale === "en" ? "Learn More →" : locale === "zh-TW" ? "了解詳情 →" : "了解详情 →"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Database */}
      <section className="border-t border-border bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bashu-bronze/10">
              <Database className="h-6 w-6 text-bashu-bronze" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-ink">{t("database.title")}</h2>
              <p className="mt-1 text-muted">{t("database.subtitle")}</p>
            </div>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {dbFeatures.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-snow p-5 shadow-sm text-center">
                <h3 className="font-medium text-ink">{f.title}</h3>
                <p className="mt-2 text-sm text-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bashu-bronze/10">
              <Wrench className="h-6 w-6 text-bashu-bronze" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-ink">{t("tools.title")}</h2>
              <p className="mt-1 text-muted">{t("tools.subtitle")}</p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {tools.map((tool) => (
              <div key={tool.title} className="flex flex-col rounded-2xl border border-border bg-snow p-6 shadow-sm">
                <h3 className="font-serif text-base font-semibold text-ink">{tool.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">{tool.desc}</p>
                <Link
                  href="/contact"
                  className="mt-5 inline-block rounded-lg bg-bashu-bronze px-4 py-2 text-center text-xs font-medium text-snow transition hover:bg-bashu-bronze-light"
                >
                  {tool.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="border-t border-border bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bashu-bronze/10">
              <FileText className="h-6 w-6 text-bashu-bronze" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-ink">{t("reports.title")}</h2>
              <p className="mt-1 text-muted">{t("reports.subtitle")}</p>
            </div>
          </div>
          <div className="mt-10 space-y-5">
            {reports.map((r) => (
              <div
                key={r.title}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-snow p-6 shadow-sm sm:flex-row sm:items-center"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-muted">{r.year}</span>
                    {r.free ? (
                      <span className="flex items-center gap-1 rounded-full bg-bashu-teal/10 px-2.5 py-0.5 text-xs font-medium text-bashu-teal">
                        <CheckCircle className="h-3 w-3" />
                        {t("reports.freeLabel")}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 rounded-full bg-brocade-gold/10 px-2.5 py-0.5 text-xs font-medium text-brocade-gold">
                        <Lock className="h-3 w-3" />
                        {t("reports.paidLabel")}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-1 font-serif text-base font-semibold text-ink">{r.title}</h3>
                  <p className="mt-1 text-sm text-muted">{r.desc}</p>
                </div>
                <Link
                  href="/contact"
                  className="shrink-0 rounded-lg bg-bashu-bronze px-5 py-2 text-sm font-medium text-snow transition hover:bg-bashu-bronze-light"
                >
                  {t("reports.downloadCta")}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Research Directions */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">{t("coreTitle")}</h2>
            <p className="mt-2 text-muted">{t("coreSubtitle")}</p>
          </div>
          <div className="mt-12 space-y-8">
            {dirs.map((dir) => (
              <div key={dir.title} className="rounded-2xl border border-border bg-snow p-7 shadow-sm">
                <h3 className="font-serif text-lg font-semibold text-ink">{dir.title}</h3>
                <p className="mt-1 text-sm font-medium text-bashu-bronze">{dir.subtitle}</p>
                <ul className="mt-5 space-y-3">
                  {dir.items.map((item) => (
                    <li key={item.label} className="text-sm text-muted leading-relaxed">
                      <strong className="font-medium text-ink">{item.label}</strong>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended blocks */}
      <section className="border-t border-border bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">{t("blocksTitle")}</h2>
            <p className="mt-2 text-muted">{t("blocksSubtitle")}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {blocks.map((block) => (
              <div key={block.title} className="rounded-2xl border border-border bg-snow p-6 shadow-sm">
                <h3 className="font-serif text-base font-semibold text-bashu-bronze">{block.title}</h3>
                <ul className="mt-4 space-y-3">
                  {block.items.map((item) => (
                    <li key={item.label} className="text-sm text-muted leading-relaxed">
                      <strong className="font-medium text-ink">{item.label}</strong>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
