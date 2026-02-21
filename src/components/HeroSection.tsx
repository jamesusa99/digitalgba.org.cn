"use client";

import { motion } from "framer-motion";
import { Compass, BookOpen, FlaskConical, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export function HeroSection() {
  const t = useTranslations("hero");

  const ctaLinks = [
    { href: "/culture-system", label: t("cta.cultureSystem"), icon: Compass },
    { href: "/research", label: t("cta.digitalOutcomes"), icon: FlaskConical },
    { href: "/industry", label: t("cta.industry"), icon: Users },
    { href: "/cooperation", label: t("cta.cooperation"), icon: BookOpen },
  ];

  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-gradient-to-b from-bashu-teal/90 via-bashu-bronze/95 to-ink">
      <div className="absolute inset-0 grain-overlay" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(201,162,39,0.2) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(45,90,74,0.4) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="relative mx-auto h-20 w-20 sm:h-24 sm:w-24">
            <div className="absolute inset-0 rounded-full bg-brocade-gold/20 blur-xl" />
            <Image
              src="/logo.png"
              alt="大湾区文化数字研究院"
              width={96}
              height={96}
              className="relative h-full w-full rounded-full object-contain ring-2 ring-brocade-gold-soft/40 drop-shadow-lg"
              priority
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-serif text-sm uppercase tracking-[0.3em] text-brocade-gold-soft/90 sm:text-base"
        >
          {t("englishName")}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 font-serif text-3xl font-bold leading-tight text-snow sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {t("heading1")}
          <br />
          <span className="text-brocade-gold-soft">{t("heading2")}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-snow/90 sm:text-xl"
        >
          {t("subheading")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {ctaLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2 rounded-full border border-brocade-gold-soft/50 bg-brocade-gold-soft/10 px-5 py-3 text-sm font-medium text-snow transition hover:bg-brocade-gold-soft/25 hover:border-brocade-gold-soft"
            >
              <Icon size={18} className="text-brocade-gold-soft" />
              {label}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
