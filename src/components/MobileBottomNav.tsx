"use client";

import { useState } from "react";
import { Home, BookOpen, Monitor, Handshake, Phone, MoreHorizontal, X, ChevronRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function MobileBottomNav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);

  const primaryItems = [
    { href: "/", label: t("home"), icon: Home },
    { href: "/culture-system", label: t("cultureSystem"), icon: BookOpen },
    { href: "/research", label: t("research"), icon: Monitor },
    { href: "/cooperation", label: t("cooperation"), icon: Handshake },
    { href: "/contact", label: t("contact"), icon: Phone },
  ];

  const moreItems = [
    { href: "/about", label: t("about") },
    { href: "/industry", label: t("industry") },
    { href: "/classroom", label: t("classroom") },
    { href: "/news", label: t("news") },
  ];

  function isActive(href: string) {
    const localizedPath = `/${locale}${href === "/" ? "" : href}`;
    return pathname === localizedPath || (href === "/" && pathname === `/${locale}`);
  }

  return (
    <>
      {/* Overlay for "More" drawer */}
      <AnimatePresence>
        {moreOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMoreOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* More drawer */}
      <AnimatePresence>
        {moreOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed bottom-16 left-0 right-0 z-50 rounded-t-2xl border-t border-border bg-snow shadow-2xl lg:hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <span className="font-medium text-ink text-sm">
                {locale === "en" ? "More Pages" : locale === "zh-TW" ? "更多頁面" : "更多页面"}
              </span>
              <button
                type="button"
                onClick={() => setMoreOpen(false)}
                className="rounded-full p-1.5 text-muted hover:bg-paper-warm"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="px-3 py-3">
              {moreItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMoreOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm transition hover:bg-paper-warm ${
                    isActive(item.href) ? "text-bashu-bronze font-medium" : "text-foreground/80"
                  }`}
                >
                  {item.label}
                  <ChevronRight size={16} className="text-muted/50" />
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom nav bar — only on mobile */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-snow/95 backdrop-blur-md lg:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="grid grid-cols-5 px-1">
          {primaryItems.map(({ href, label, icon: Icon }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex flex-col items-center justify-center gap-0.5 py-2.5 text-[10px] transition ${
                  active ? "text-bashu-bronze" : "text-foreground/50"
                }`}
              >
                <Icon
                  size={22}
                  strokeWidth={active ? 2.2 : 1.6}
                  className={active ? "text-bashu-bronze" : "text-foreground/50"}
                />
                <span className="leading-none">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Replace last "联系我们" slot with "更多" button if needed via JS: handled above */}
    </>
  );
}

// Separate "More" trigger — replaces the 5th contact item on smallest screens
export function MobileBottomNavWithMore() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);

  const primaryItems = [
    { href: "/", label: t("home"), icon: Home },
    { href: "/culture-system", label: t("cultureSystem"), icon: BookOpen },
    { href: "/research", label: t("research"), icon: Monitor },
    { href: "/cooperation", label: t("cooperation"), icon: Handshake },
    { href: "/contact", label: t("contact"), icon: Phone },
  ];

  const moreItems = [
    { href: "/about", label: t("about") },
    { href: "/industry", label: t("industry") },
    { href: "/classroom", label: t("classroom") },
    { href: "/news", label: t("news") },
  ];

  function isActive(href: string) {
    const localizedPath = `/${locale}${href === "/" ? "" : href}`;
    return pathname === localizedPath || (href === "/" && pathname === `/${locale}`);
  }

  const anyMoreActive = moreItems.some((i) => isActive(i.href));

  return (
    <>
      <AnimatePresence>
        {moreOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMoreOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {moreOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed bottom-16 left-0 right-0 z-50 rounded-t-2xl border-t border-border bg-snow shadow-2xl lg:hidden"
            style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <span className="font-medium text-ink text-sm">
                {locale === "en" ? "More Pages" : locale === "zh-TW" ? "更多頁面" : "更多页面"}
              </span>
              <button
                type="button"
                onClick={() => setMoreOpen(false)}
                className="rounded-full p-1.5 text-muted hover:bg-paper-warm"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="px-3 py-3">
              {moreItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMoreOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm transition hover:bg-paper-warm ${
                    isActive(item.href) ? "text-bashu-bronze font-medium bg-paper-warm" : "text-foreground/80"
                  }`}
                >
                  {item.label}
                  <ChevronRight size={16} className="text-muted/50" />
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <nav
        className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-snow/95 backdrop-blur-md lg:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="grid grid-cols-5 px-1">
          {primaryItems.slice(0, 4).map(({ href, label, icon: Icon }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex flex-col items-center justify-center gap-0.5 py-2.5 text-[10px] transition ${
                  active ? "text-bashu-bronze" : "text-foreground/50"
                }`}
              >
                <Icon size={22} strokeWidth={active ? 2.2 : 1.6} />
                <span className="leading-none">{label}</span>
              </Link>
            );
          })}

          {/* More button */}
          <button
            type="button"
            onClick={() => setMoreOpen((o) => !o)}
            className={`flex flex-col items-center justify-center gap-0.5 py-2.5 text-[10px] transition ${
              anyMoreActive || moreOpen ? "text-bashu-bronze" : "text-foreground/50"
            }`}
            aria-label="More"
          >
            <MoreHorizontal
              size={22}
              strokeWidth={anyMoreActive || moreOpen ? 2.2 : 1.6}
            />
            <span className="leading-none">
              {locale === "en" ? "More" : "更多"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
