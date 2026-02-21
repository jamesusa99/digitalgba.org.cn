import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { BookOpen, Database, Globe, BarChart3 } from "lucide-react";

const VISION_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Research: BookOpen,
  Database: Database,
  Industry: BarChart3,
  Globe: Globe,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  const visionItems = (t.raw("vision.items") as Array<{
    icon: string;
    title: string;
    desc: string;
  }>);

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

      {/* Intro */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
                {t("intro.title")}
              </h2>
              <p className="mt-1 text-sm font-medium text-bashu-bronze">{t("intro.subtitle")}</p>
              <div className="mt-6 space-y-5 text-muted leading-relaxed">
                <p>{t("intro.p1")}</p>
                <p>{t("intro.p2")}</p>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-paper-warm/40 p-8">
              <p className="font-serif text-lg font-semibold text-bashu-bronze leading-snug">
                &ldquo;{t("intro.subtitle")}&rdquo;
              </p>
              <div className="mt-6 space-y-3">
                {["传承", "创新", "协同", "包容", "专业"].map((v, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-bashu-bronze/10 text-sm font-medium text-bashu-bronze">
                      {i + 1}
                    </span>
                    <span className="text-sm text-ink font-medium">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="border-t border-border bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
              {t("vision.title")}
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visionItems.map((item) => {
              const Icon = VISION_ICONS[item.icon] ?? BookOpen;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-snow p-6 shadow-sm text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-bashu-bronze/10">
                    <Icon className="h-6 w-6 text-bashu-bronze" />
                  </div>
                  <h3 className="mt-4 font-serif text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
                {t("team.title")}
              </h2>
              <p className="mt-1 text-sm font-medium text-bashu-bronze">{t("team.subtitle")}</p>
              <p className="mt-5 text-muted leading-relaxed">{t("team.p1")}</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
                {t("leadership.title")}
              </h2>
              <p className="mt-1 text-sm font-medium text-bashu-bronze">{t("leadership.subtitle")}</p>
              <p className="mt-5 text-muted leading-relaxed">{t("leadership.p1")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Alliance */}
      <section className="border-t border-border bg-ink py-16 text-snow sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brocade-gold-soft sm:text-3xl">
            {t("alliance.title")}
          </h2>
          <p className="mt-1 text-sm text-snow/60">{t("alliance.subtitle")}</p>
          <div className="mt-8 space-y-6 text-snow/80 leading-relaxed">
            <p>
              {t("alliance.p1prefix")}
              <strong className="text-brocade-gold-soft">{t("alliance.allianceName")}</strong>
              {t("alliance.p1suffix")}
            </p>
            <p>
              {t("alliance.p2prefix")}
              <strong className="text-brocade-gold-soft">{t("alliance.governanceModel")}</strong>
              {t("alliance.p2middle")}
              <strong className="text-brocade-gold-soft">{t("alliance.ecosystem")}</strong>
              {t("alliance.p2suffix")}
              <strong className="text-brocade-gold-soft">{t("alliance.streetName")}</strong>
              {t("alliance.p2end")}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/industry"
              className="rounded-full bg-brocade-gold px-6 py-3 text-sm font-semibold text-ink transition hover:bg-brocade-gold-soft"
            >
              {locale === "en" ? "Explore Industry Empowerment" : locale === "zh-TW" ? "探索產業賦能" : "探索产业赋能"}
            </Link>
            <Link
              href="/cooperation"
              className="rounded-full border border-snow/30 px-6 py-3 text-sm font-medium text-snow/80 transition hover:border-snow/60"
            >
              {locale === "en" ? "Apply to Cooperate" : locale === "zh-TW" ? "申請合作" : "申请合作"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
