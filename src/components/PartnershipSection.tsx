"use client";

import { motion } from "framer-motion";
import { Building2, GraduationCap, Briefcase } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const CATEGORY_ICONS = [Building2, GraduationCap, Briefcase];

export function PartnershipSection() {
  const t = useTranslations("partnership");

  const categories = [0, 1, 2].map((i) => ({
    title: t(`categories.${i}.title`),
    items: [0, 1, 2, 3].map((j) => {
      try { return t(`categories.${i}.items.${j}`); } catch { return null; }
    }).filter(Boolean) as string[],
    icon: CATEGORY_ICONS[i],
  }));

  return (
    <section className="border-t border-border bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
            {t("heading")}
          </h2>
          <p className="mt-2 text-muted">{t("subheading")}</p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-snow p-6 shadow-sm"
            >
              <cat.icon className="h-10 w-10 text-bashu-bronze" />
              <h3 className="mt-3 font-serif text-lg font-semibold text-ink">{cat.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {cat.items.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/industry"
            className="rounded-full bg-bashu-bronze px-6 py-3 text-sm font-medium text-snow transition hover:bg-bashu-bronze-light"
          >
            {t("learnMore")}
          </Link>
          <Link
            href="/cooperation"
            className="rounded-full border border-bashu-bronze px-6 py-3 text-sm font-medium text-bashu-bronze transition hover:bg-paper-warm"
          >
            {t("cooperation")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
