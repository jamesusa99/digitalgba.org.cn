"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Header() {
  const t = useTranslations("nav");
  const tSite = useTranslations("site");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/research", label: t("research") },
    { href: "/digital-collections", label: t("digitalCollections") },
    { href: "/outcomes", label: t("outcomes") },
    { href: "/industry-alliance", label: t("industryAlliance") },
    { href: "/cooperation", label: t("cooperation") },
    { href: "/classroom", label: t("classroom") },
    { href: "/contact", label: t("contact") },
  ];

  const languages = [
    { code: "zh-CN", label: "简体中文" },
    { code: "zh-TW", label: "繁體中文" },
    { code: "en", label: "English" },
  ];

  function switchLocale(newLocale: string) {
    // Strip the current locale prefix from the pathname and navigate
    const segments = pathname.split("/");
    // segments[0] = '', segments[1] = locale, rest = path
    const pathWithoutLocale = "/" + segments.slice(2).join("/");
    router.push(`/${newLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`);
    setLangOpen(false);
    setMobileOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/80 bg-snow/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="shrink-0 font-serif text-sm font-semibold text-bashu-bronze transition hover:text-bashu-bronze-light sm:text-base lg:text-lg"
        >
          {tSite("name")}
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex xl:gap-1">
          {navItems.map((item) => {
            const localizedPath = `/${locale}${item.href === "/" ? "" : item.href}`;
            const isActive = pathname === localizedPath || (item.href === "/" && pathname === `/${locale}`);
            const isAlliance = item.href === "/industry-alliance";
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-md px-2 py-2 text-xs transition xl:px-3 xl:text-sm ${
                  isActive
                    ? "text-bashu-bronze font-medium"
                    : "text-foreground/80 hover:text-bashu-bronze hover:bg-paper-warm/60"
                } ${isAlliance ? "text-brocade-gold font-medium" : ""}`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-bashu-bronze"
                    transition={{ type: "spring", duration: 0.4 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((o) => !o)}
              className="flex items-center gap-1.5 rounded-lg border border-border/60 px-3 py-2 text-sm text-foreground/80 transition hover:border-bashu-bronze/40 hover:text-bashu-bronze"
              aria-label="Switch language"
            >
              <Globe size={15} />
              <span className="hidden sm:inline">
                {locale === "zh-CN" ? "简中" : locale === "zh-TW" ? "繁中" : "EN"}
              </span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="absolute right-0 top-full mt-1 min-w-[120px] overflow-hidden rounded-xl border border-border bg-snow shadow-lg"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => switchLocale(lang.code)}
                      className={`w-full px-4 py-2.5 text-left text-sm transition hover:bg-paper-warm ${
                        locale === lang.code ? "font-medium text-bashu-bronze" : "text-foreground/80"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ink lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-snow lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navItems.map((item) => {
                const localizedPath = `/${locale}${item.href === "/" ? "" : item.href}`;
                const isActive = pathname === localizedPath || (item.href === "/" && pathname === `/${locale}`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-lg px-4 py-3 text-sm ${
                      isActive
                        ? "bg-paper-warm text-bashu-bronze font-medium"
                        : "text-foreground/90"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              {/* Language options in mobile menu */}
              <div className="mt-2 border-t border-border pt-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => switchLocale(lang.code)}
                    className={`w-full rounded-lg px-4 py-2.5 text-left text-sm transition hover:bg-paper-warm ${
                      locale === lang.code ? "font-medium text-bashu-bronze" : "text-foreground/70"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
