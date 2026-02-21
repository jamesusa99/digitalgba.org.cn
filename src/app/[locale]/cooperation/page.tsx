import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { GraduationCap, Building2, Landmark, Globe2 } from "lucide-react";

const DIRECTION_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  Building2,
  Landmark,
  Globe2,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "cooperation.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function CooperationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "cooperation" });

  const directions = (t.raw("directions.items") as Array<{
    icon: string;
    title: string;
    desc: string;
    tags: string[];
  }>);

  const cases = (t.raw("cases.items") as Array<{
    partner: string;
    title: string;
    desc: string;
    tag: string;
  }>);

  const events = (t.raw("events.items") as Array<{
    type: string;
    title: string;
    date: string;
    desc: string;
    status: string;
  }>);

  const statusColors: Record<string, string> = {
    upcoming: "bg-brocade-gold/10 text-brocade-gold border-brocade-gold/30",
    open: "bg-bashu-bronze/10 text-bashu-bronze border-bashu-bronze/30",
    regular: "bg-bashu-teal/10 text-bashu-teal border-bashu-teal/30",
  };

  const statusLabels: Record<string, string> = {
    upcoming: t("events.upcomingLabel"),
    open: t("events.openLabel"),
    regular: t("events.regularLabel"),
  };

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

      {/* Cooperation Directions */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
              {t("directions.title")}
            </h2>
            <p className="mt-2 text-muted">{t("directions.subtitle")}</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {directions.map((dir) => {
              const Icon = DIRECTION_ICONS[dir.icon] ?? GraduationCap;
              return (
                <div
                  key={dir.title}
                  className="rounded-2xl border border-border bg-snow p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bashu-bronze/10">
                    <Icon className="h-6 w-6 text-bashu-bronze" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-ink">{dir.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{dir.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {dir.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-paper-warm px-2.5 py-0.5 text-xs text-foreground/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="border-t border-border bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
              {t("cases.title")}
            </h2>
            <p className="mt-2 text-muted">{t("cases.subtitle")}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {cases.map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-snow p-6 shadow-sm">
                <span className="inline-block rounded-full bg-bashu-bronze/10 px-3 py-1 text-xs font-medium text-bashu-bronze">
                  {c.tag}
                </span>
                <p className="mt-3 text-xs text-muted">{c.partner}</p>
                <h3 className="mt-1 font-serif text-base font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
              {t("events.title")}
            </h2>
            <p className="mt-2 text-muted">{t("events.subtitle")}</p>
          </div>

          <div className="mt-12 space-y-6">
            {events.map((ev) => (
              <div
                key={ev.title}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-snow p-6 shadow-sm sm:flex-row sm:items-start"
              >
                <div className="flex shrink-0 flex-col items-start gap-2">
                  <span className="rounded-full bg-bashu-bronze px-3 py-1 text-xs font-medium text-snow">
                    {ev.type}
                  </span>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${statusColors[ev.status] ?? ""}`}
                  >
                    {statusLabels[ev.status]}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted">{ev.date}</p>
                  <h3 className="mt-1 font-serif text-lg font-semibold text-ink">{ev.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{ev.desc}</p>
                </div>
                <div className="flex shrink-0 flex-col gap-2 sm:items-end">
                  <Link
                    href="/contact"
                    className="rounded-lg bg-bashu-bronze px-4 py-2 text-xs font-medium text-snow transition hover:bg-bashu-bronze-light"
                  >
                    {t("events.registerCta")}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="border-t border-border bg-ink py-14 text-snow">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="font-serif text-2xl font-semibold">{t("applyCta.title")}</h2>
          <p className="mt-2 text-snow/70 text-sm">{t("applyCta.subtitle")}</p>
          <div className="mt-8 space-y-4">
            <input
              type="text"
              placeholder={t("applyCta.namePlaceholder")}
              className="w-full rounded-xl border border-snow/20 bg-snow/10 px-4 py-3 text-sm text-snow placeholder-snow/40 outline-none focus:border-brocade-gold-soft/60"
            />
            <input
              type="text"
              placeholder={t("applyCta.typePlaceholder")}
              className="w-full rounded-xl border border-snow/20 bg-snow/10 px-4 py-3 text-sm text-snow placeholder-snow/40 outline-none focus:border-brocade-gold-soft/60"
            />
            <textarea
              placeholder={t("applyCta.messagePlaceholder")}
              rows={4}
              className="w-full rounded-xl border border-snow/20 bg-snow/10 px-4 py-3 text-sm text-snow placeholder-snow/40 outline-none focus:border-brocade-gold-soft/60 resize-none"
            />
            <button
              type="button"
              className="w-full rounded-xl bg-brocade-gold py-3 text-sm font-semibold text-ink transition hover:bg-brocade-gold-soft"
            >
              {t("applyCta.submitBtn")}
            </button>
            <p className="text-xs text-snow/40">{t("applyCta.contactNote")}</p>
          </div>
        </div>
      </section>
    </>
  );
}
