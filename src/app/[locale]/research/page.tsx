import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "research.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function ResearchPage() {
  const t = await getTranslations("research");

  const dirs = ["dir1", "dir2", "dir3"] as const;
  const blocks = ["block1", "block2", "block3", "block4"] as const;

  const dir1Items = [0, 1, 2];
  const dir2Items = [0, 1, 2];
  const dir3Items = [0, 1];
  const blockItems: Record<string, number[]> = {
    block1: [0, 1],
    block2: [0, 1],
    block3: [0, 1],
    block4: [0, 1],
  };

  const dirItemCounts: Record<string, number[]> = {
    dir1: dir1Items,
    dir2: dir2Items,
    dir3: dir3Items,
  };

  return (
    <>
      <PageHero title={t("hero.title")} subtitle={t("hero.subtitle")} />
      <Section title={t("coreTitle")} subtitle={t("coreSubtitle")}>
        <div className="mx-auto max-w-4xl space-y-12">
          {dirs.map((dir) => (
            <div key={dir} className="rounded-2xl border border-border bg-snow p-6 shadow-sm sm:p-8">
              <h3 className="font-serif text-xl font-semibold text-ink">{t(`${dir}.title`)}</h3>
              <p className="mt-1 text-sm text-muted">{t(`${dir}.subtitle`)}</p>
              <ul className="mt-4 space-y-3 text-muted">
                {dirItemCounts[dir].map((i) => (
                  <li key={i}>
                    <strong className="text-ink">{t(`${dir}.items.${i}.label`)}</strong>
                    {t(`${dir}.items.${i}.text`)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title={t("blocksTitle")} subtitle={t("blocksSubtitle")}>
        <div className="mx-auto max-w-4xl space-y-10">
          {blocks.map((block) => (
            <div key={block} className="rounded-2xl border border-bashu-bronze/30 bg-paper-warm p-6 sm:p-8">
              <h3 className="font-serif text-lg font-semibold text-ink">{t(`${block}.title`)}</h3>
              <ul className="mt-4 space-y-2 text-muted">
                {blockItems[block].map((i) => (
                  <li key={i}>
                    <strong className="text-ink">{t(`${block}.items.${i}.label`)}</strong>
                    {t(`${block}.items.${i}.text`)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
