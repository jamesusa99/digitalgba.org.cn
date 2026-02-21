"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function NewsTicker() {
  const t = useTranslations("newsTicker");

  const items = [0, 1, 2, 3, 4].map((i) => ({
    type: t(`items.${i}.type`),
    text: t(`items.${i}.text`),
  }));

  return (
    <section className="border-b border-border bg-snow py-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 overflow-hidden">
          <span className="shrink-0 font-serif text-sm font-semibold text-bashu-bronze">
            {t("label")}
          </span>
          <div className="flex-1 overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{ x: [0, -1200] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
              {[...items, ...items].map((item, i) => (
                <span key={i} className="flex shrink-0 items-center gap-2 text-sm text-muted">
                  <span className="rounded bg-paper-warm px-2 py-0.5 text-xs text-bashu-bronze">
                    {item.type}
                  </span>
                  {item.text}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
