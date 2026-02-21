import { Mail, MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function Footer() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");
  const tSite = await getTranslations("site");

  const footerLinks = [
    { href: "/about", label: tNav("about") },
    { href: "/research", label: tNav("research") },
    { href: "/digital-collections", label: tNav("digitalCollections") },
    { href: "/outcomes", label: tNav("outcomes") },
    { href: "/industry-alliance", label: tNav("industryAlliance") },
    { href: "/cooperation", label: tNav("cooperation") },
    { href: "/classroom", label: tNav("classroom") },
    { href: "/contact", label: tNav("contact") },
  ];

  return (
    <footer className="border-t border-border bg-ink text-snow">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-serif text-lg font-semibold text-brocade-gold-soft">
              {tSite("name")}
            </h3>
            <p className="mt-2 text-sm text-snow/80">
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
        <div className="mt-10 border-t border-snow/20 pt-8 text-center text-xs text-snow/50">
          © {new Date().getFullYear()} {tSite("name")} {tSite("copyright")}
        </div>
      </div>
    </footer>
  );
}
