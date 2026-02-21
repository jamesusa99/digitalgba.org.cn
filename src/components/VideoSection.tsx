"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const BILIBILI_BVID = "BV19p4y1q7fo";
const BILIBILI_EMBED = `https://player.bilibili.com/player.html?bvid=${BILIBILI_BVID}&high_quality=1`;

export function VideoSection() {
  const t = useTranslations("videoSection");

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

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-border bg-ink shadow-lg"
        >
          <div className="relative aspect-video">
            <iframe
              src={BILIBILI_EMBED}
              title={t("heading")}
              className="absolute inset-0 h-full w-full"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
