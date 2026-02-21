import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { MapPin, Phone, Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function ContactPage() {
  const t = await getTranslations("contact");

  const consultItems = [0, 1, 2, 3, 4];

  return (
    <>
      <PageHero title={t("hero.title")} subtitle={t("hero.subtitle")} />
      <Section title={t("consultation.title")} subtitle={t("consultation.subtitle")}>
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-3 rounded-xl border border-border bg-paper-warm p-6">
            <p className="text-muted">{t("consultation.intro")}</p>
            <ul className="list-inside list-disc space-y-1.5 text-muted">
              {consultItems.map((i) => (
                <li key={i}>{t(`consultation.items.${i}`)}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <Section title={t("contactInfo.title")} subtitle={t("contactInfo.subtitle")}>
        <div className="mx-auto max-w-2xl space-y-6 rounded-2xl border border-border bg-snow p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-bashu-bronze" />
            <div>
              <p className="font-medium text-ink">{t("contactInfo.addressLabel")}</p>
              <p className="text-muted">
                {t("contactInfo.addressValue")}
                <span className="mt-1 block text-sm">{t("contactInfo.addressNote")}</span>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-bashu-bronze" />
            <div>
              <p className="font-medium text-ink">{t("contactInfo.phoneLabel")}</p>
              <p className="text-muted">{t("contactInfo.phoneValue")}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-bashu-bronze" />
            <div>
              <p className="font-medium text-ink">{t("contactInfo.emailLabel")}</p>
              <p className="text-muted">contact@digitalgba.org.cn</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
