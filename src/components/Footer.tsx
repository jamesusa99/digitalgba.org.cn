import { Mail, MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export async function Footer() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");
  const tSite = await getTranslations("site");

  const footerLinks = [
    { href: "/about", label: tNav("about") },
    { href: "/culture-system", label: tNav("cultureSystem") },
    { href: "/research", label: tNav("research") },
    { href: "/industry", label: tNav("industry") },
    { href: "/cooperation", label: tNav("cooperation") },
    { href: "/classroom", label: tNav("classroom") },
    { href: "/news", label: tNav("news") },
    { href: "/contact", label: tNav("contact") },
  ];

  return (
    <footer className="border-t border-border bg-ink text-snow">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="大湾区文化数字研究院"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-contain ring-1 ring-brocade-gold-soft/30"
              />
              <h3 className="font-serif text-base font-semibold text-brocade-gold-soft leading-tight">
                {tSite("name")}
              </h3>
            </div>
            <p className="mt-3 text-sm text-snow/80">
              {tSite("tagline")}
            </p>
            <p className="mt-1 text-xs text-snow/60">
              {t("englishTagline")}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-snow/90">{t("navigation")}</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-snow/70 transition hover:text-brocade-gold-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-snow/90">{t("contact")}</h4>
            <ul className="mt-3 space-y-2 text-sm text-snow/70">
              <li className="flex items-center gap-2">
                <MapPin size={14} className="shrink-0 text-brocade-gold-soft" />
                {t("address")}
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="shrink-0 text-brocade-gold-soft" />
                {t("phone")}
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="shrink-0 text-brocade-gold-soft" />
                contact@digitalgba.org.cn
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-snow/90">{t("values")}</h4>
            <p className="mt-2 text-xs text-snow/60">
              {t("valuesText")}
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-snow/20 pt-6">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-snow/40">
            <Link href="/sitemap" className="transition hover:text-snow/70">{t("sitemap")}</Link>
            <span>·</span>
            <Link href="/privacy" className="transition hover:text-snow/70">{t("privacy")}</Link>
            <span>·</span>
            <Link href="/disclaimer" className="transition hover:text-snow/70">{t("disclaimer")}</Link>
            <span>·</span>
            <span className="text-snow/30">{t("followUs")}：{t("wechat")} / {t("weibo")} / {t("douyin")}</span>
          </div>
          <div className="mt-4 text-center text-xs text-snow/40">
            © {new Date().getFullYear()} {tSite("name")} · {tSite("copyright")}
          </div>
        </div>
      </div>
    </footer>
  );
}
