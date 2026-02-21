import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { VRARShowcase } from "@/components/VRARShowcase";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "cultureSystemPage.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function CultureSystemPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "cultureSystemPage" });

  const badgeColors: Record<string, string> = {
    lingnan: "bg-bashu-bronze/10 text-bashu-bronze border-bashu-bronze/20",
    hkmo: "bg-brocade-gold/10 text-brocade-gold border-brocade-gold/20",
    redculture: "bg-shu-red/10 text-shu-red border-shu-red/20",
    ethnic: "bg-bashu-teal/10 text-bashu-teal border-bashu-teal/20",
  };

  const systems = (t.raw("systems") as Array<{
    id: string;
    badge: string;
    title: string;
    subtitle: string;
    desc: string;
    subsystems: Array<{ title: string; items: string[] }>;
    digitalTag: string;
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

      {/* Four systems */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">
          {systems.map((sys, idx) => (
            <div
              key={sys.id}
              className={`grid gap-10 lg:grid-cols-2 lg:items-start ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Text side */}
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <span
                  className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${badgeColors[sys.id] ?? "bg-mist text-ink border-border"}`}
                >
                  {sys.badge}
                </span>
                <h2 className="mt-3 font-serif text-2xl font-bold text-ink sm:text-3xl">
                  {sys.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-bashu-bronze">{sys.subtitle}</p>
                <p className="mt-4 text-muted leading-relaxed">{sys.desc}</p>

                <div className="mt-6 rounded-xl border border-border bg-paper-warm/50 px-4 py-3 text-sm text-bashu-bronze/80">
                  🔬 {sys.digitalTag}
                </div>
              </div>

              {/* Subsystems side */}
              <div className={`space-y-4 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                {sys.subsystems.map((sub) => (
                  <div
                    key={sub.title}
                    className="rounded-2xl border border-border bg-snow p-5 shadow-sm"
                  >
                    <h3 className="font-serif text-base font-semibold text-ink">
                      {sub.title}
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {sub.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full bg-paper-warm px-3 py-1 text-xs text-foreground/70"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VR/AR Showcase */}
      <VRARShowcase />

      {/* CTA */}
      <section className="border-t border-border bg-paper py-14 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
            {locale === "en"
              ? "Discover Our Digital Achievements"
              : locale === "zh-TW"
              ? "探索我們的數字成果"
              : "探索我们的数字成果"}
          </h2>
          <p className="mt-2 text-muted text-sm">
            {locale === "en"
              ? "See how the Institute digitizes and activates GBA's four cultural systems"
              : locale === "zh-TW"
              ? "了解研究院如何對四大文化體系進行數字化激活"
              : "了解研究院如何对四大文化体系进行数字化激活"}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/research"
              className="rounded-full bg-bashu-bronze px-6 py-3 text-sm font-medium text-snow transition hover:bg-bashu-bronze-light"
            >
              {locale === "en" ? "Digital Works" : locale === "zh-TW" ? "數字成果" : "数字成果"}
            </Link>
            <Link
              href="/cooperation"
              className="rounded-full border border-bashu-bronze px-6 py-3 text-sm font-medium text-bashu-bronze transition hover:bg-paper-warm"
            >
              {locale === "en" ? "Cooperate" : locale === "zh-TW" ? "合作交流" : "合作交流"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
