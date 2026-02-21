import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function AboutPage() {
  const t = await getTranslations("about");

  return (
    <>
      <PageHero title={t("hero.title")} subtitle={t("hero.subtitle")} />
      <Section title={t("intro.title")} subtitle={t("intro.subtitle")}>
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>{t("intro.p1")}</p>
          <p>{t("intro.p2")}</p>
        </div>
      </Section>
      <Section title={t("leadership.title")} subtitle={t("leadership.subtitle")}>
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>{t("leadership.p1")}</p>
        </div>
      </Section>
      <Section title={t("alliance.title")} subtitle={t("alliance.subtitle")}>
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>
            {t("alliance.p1prefix")}
            <strong className="text-ink">{t("alliance.allianceName")}</strong>
            {t("alliance.p1suffix")}
          </p>
          <p>
            {t("alliance.p2prefix")}
            <strong className="text-ink">{t("alliance.governanceModel")}</strong>
            {t("alliance.p2middle")}
            <strong className="text-ink">{t("alliance.ecosystem")}</strong>
            {t("alliance.p2suffix")}
            <strong className="text-ink">{t("alliance.streetName")}</strong>
            {t("alliance.p2end")}
          </p>
        </div>
      </Section>
    </>
  );
}
