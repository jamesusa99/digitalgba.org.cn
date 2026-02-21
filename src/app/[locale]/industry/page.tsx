import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Palette, Map, Cpu, Copyright, Users } from "lucide-react";

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette,
  Map,
  Cpu,
  Copyright,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "industry.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "industry" });

  const services = (t.raw("services") as Array<{
    id: string;
    icon: string;
    title: string;
    subtitle: string;
    desc: string;
    cases: Array<{ title: string; desc: string }>;
    cta: string;
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

      {/* Services */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-14">
          {services.map((svc, idx) => {
            const Icon = SERVICE_ICONS[svc.icon] ?? Palette;
            return (
              <div
                key={svc.id}
                className={`grid gap-10 lg:grid-cols-2 lg:items-start ${idx % 2 === 1 ? "" : ""}`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bashu-bronze/10">
                      <Icon className="h-6 w-6 text-bashu-bronze" />
                    </div>
                    <div>
                      <h2 className="font-serif text-xl font-bold text-ink">{svc.title}</h2>
                      <p className="text-xs text-bashu-bronze/80">{svc.subtitle}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-muted leading-relaxed">{svc.desc}</p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-block rounded-full bg-bashu-bronze px-5 py-2.5 text-sm font-medium text-snow transition hover:bg-bashu-bronze-light"
                  >
                    {svc.cta}
                  </Link>
                </div>

                <div className="space-y-4">
                  {svc.cases.map((c) => (
                    <div
                      key={c.title}
                      className="rounded-2xl border border-border bg-paper-warm/40 p-5"
                    >
                      <h3 className="font-medium text-ink">{c.title}</h3>
                      <p className="mt-1 text-sm text-muted">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Alliance CTA */}
      <section className="border-t border-border bg-ink py-14 text-center text-snow">
        <div className="mx-auto max-w-2xl px-4">
          <Users className="mx-auto h-10 w-10 text-brocade-gold-soft" />
          <h2 className="mt-4 font-serif text-2xl font-semibold">{t("allianceTitle")}</h2>
          <p className="mt-3 text-snow/70 text-sm leading-relaxed">{t("allianceDesc")}</p>
          <Link
            href="/cooperation"
            className="mt-6 inline-block rounded-full bg-brocade-gold px-7 py-3 text-sm font-semibold text-ink transition hover:bg-brocade-gold-soft"
          >
            {t("joinAlliance")}
          </Link>
        </div>
      </section>
    </>
  );
}
