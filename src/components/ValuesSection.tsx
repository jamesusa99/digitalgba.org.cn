"use client";

import { motion } from "framer-motion";
import { BookMarked, Lightbulb, Handshake, Heart, Award } from "lucide-react";
import { useTranslations } from "next-intl";

const VALUE_ICONS = [BookMarked, Lightbulb, Handshake, Heart, Award];
const VALUE_KEYS = ["inheritance", "innovation", "collaboration", "inclusiveness", "professionalism"] as const;

export function ValuesSection() {
  const t = useTranslations("values");

  return (
    <section className="py-16 sm:py-20">
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

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {VALUE_KEYS.map((key, i) => {
            const Icon = VALUE_ICONS[i];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group rounded-2xl border border-border bg-snow p-6 shadow-sm transition hover:border-bashu-bronze/40 hover:shadow-md"
              >
                <Icon className="h-10 w-10 text-bashu-bronze transition group-hover:text-brocade-gold" />
                <h3 className="mt-3 font-serif text-lg font-semibold text-ink">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-muted">{t(`items.${key}.desc`)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
