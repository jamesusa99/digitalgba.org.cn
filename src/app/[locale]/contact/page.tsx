import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Mail, MapPin, Phone, MessageSquare, Send, Navigation } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  const consultItems = t.raw("consultation.items") as string[];

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
          <div className="grid gap-12 lg:grid-cols-2">

            {/* Left: Consultation & Contact Info */}
            <div className="space-y-10">
              {/* Consultation */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-ink">
                  {t("consultation.title")}
                </h2>
                <p className="mt-1 text-sm text-bashu-bronze font-medium">{t("consultation.subtitle")}</p>
                <p className="mt-4 text-muted text-sm leading-relaxed">{t("consultation.intro")}</p>
                <ul className="mt-5 space-y-3">
                  {consultItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-bashu-bronze/10 text-xs font-medium text-bashu-bronze">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="rounded-2xl border border-border bg-snow p-6 shadow-sm">
                <h2 className="font-serif text-xl font-semibold text-ink">
                  {t("contactInfo.title")}
                </h2>
                <p className="mt-1 text-xs text-muted">{t("contactInfo.subtitle")}</p>

                {/* One-tap quick actions — prominent on mobile */}
                <div className="mt-4 grid grid-cols-3 gap-2 sm:hidden">
                  <a
                    href="tel:+86"
                    className="flex flex-col items-center justify-center gap-1 rounded-xl bg-bashu-bronze/10 py-3 text-xs font-medium text-bashu-bronze"
                  >
                    <Phone size={20} />
                    {locale === "en" ? "Call" : locale === "zh-TW" ? "撥打" : "拨打"}
                  </a>
                  <a
                    href="mailto:contact@digitalgba.org.cn"
                    className="flex flex-col items-center justify-center gap-1 rounded-xl bg-bashu-bronze/10 py-3 text-xs font-medium text-bashu-bronze"
                  >
                    <Mail size={20} />
                    {locale === "en" ? "Email" : "邮件"}
                  </a>
                  <a
                    href="https://maps.google.com/?q=广州+大湾区文化数字研究院"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-1 rounded-xl bg-bashu-bronze/10 py-3 text-xs font-medium text-bashu-bronze"
                  >
                    <Navigation size={20} />
                    {locale === "en" ? "Map" : locale === "zh-TW" ? "導航" : "导航"}
                  </a>
                </div>

                <ul className="mt-5 space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-bashu-bronze" />
                    <div>
                      <p className="text-xs text-muted">{t("contactInfo.addressLabel")}</p>
                      <p className="text-sm font-medium text-ink">
                        {t("contactInfo.addressValue")}
                        <span className="ml-1 text-xs text-muted">{t("contactInfo.addressNote")}</span>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-bashu-bronze" />
                    <div>
                      <p className="text-xs text-muted">{t("contactInfo.phoneLabel")}</p>
                      <a
                        href="tel:+86"
                        className="text-sm font-medium text-ink transition hover:text-bashu-bronze"
                      >
                        {t("contactInfo.phoneValue")}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-bashu-bronze" />
                    <div>
                      <p className="text-xs text-muted">{t("contactInfo.emailLabel")}</p>
                      <a
                        href="mailto:contact@digitalgba.org.cn"
                        className="text-sm font-medium text-bashu-bronze transition hover:underline"
                      >
                        contact@digitalgba.org.cn
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Online Consult & Feedback */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-paper-warm/40 p-5">
                  <MessageSquare className="h-6 w-6 text-bashu-bronze" />
                  <h3 className="mt-3 font-medium text-ink">{t("onlineConsult.title")}</h3>
                  <p className="mt-1 text-xs text-muted">{t("onlineConsult.subtitle")}</p>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-lg bg-bashu-bronze py-2 text-xs font-medium text-snow transition hover:bg-bashu-bronze-light"
                  >
                    {t("onlineConsult.cta")}
                  </button>
                </div>
                <div className="rounded-2xl border border-border bg-paper-warm/40 p-5">
                  <Send className="h-6 w-6 text-bashu-bronze" />
                  <h3 className="mt-3 font-medium text-ink">{t("feedback.title")}</h3>
                  <p className="mt-1 text-xs text-muted">{t("feedback.desc")}</p>
                  <button
                    type="button"
                    className="mt-4 w-full rounded-lg border border-bashu-bronze py-2 text-xs font-medium text-bashu-bronze transition hover:bg-paper-warm"
                  >
                    {t("feedback.cta")}
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Map placeholder + social */}
            <div className="space-y-6">
              <div className="overflow-hidden rounded-2xl border border-border bg-paper-warm/30 h-64 flex items-center justify-center">
                <div className="text-center text-muted">
                  <MapPin className="mx-auto h-10 w-10 text-bashu-bronze/30" />
                  <p className="mt-2 text-sm">{t("contactInfo.addressValue")}</p>
                  <p className="text-xs text-muted/60">{t("contactInfo.addressNote")}</p>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-snow p-6 shadow-sm">
                <h3 className="font-serif text-base font-semibold text-ink">
                  {locale === "en" ? "Follow Us" : locale === "zh-TW" ? "關注我們" : "关注我们"}
                </h3>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {["WeChat", "Weibo", "Douyin"].map((platform) => (
                    <div
                      key={platform}
                      className="flex flex-col items-center justify-center rounded-xl border border-border bg-paper-warm/40 py-4 text-xs text-muted"
                    >
                      <div className="h-10 w-10 rounded-lg bg-mist/50" />
                      <span className="mt-2">{platform}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted/60">
                  {locale === "en"
                    ? "Scan QR code to follow our official accounts"
                    : locale === "zh-TW"
                    ? "掃描二維碼關注官方帳號"
                    : "扫描二维码关注官方账号"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
