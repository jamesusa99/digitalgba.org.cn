"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Landmark, Drama, Mountain, Leaf } from "lucide-react";
import { useTranslations } from "next-intl";

const IMAGES = [
  { src: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80", icon: Landmark },
  { src: "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=800&q=80", icon: Drama },
  { src: "https://images.unsplash.com/photo-1600267165477-6d4cc741b379?w=800&q=80", icon: Mountain },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80", icon: Leaf },
];

export function BashuCultureSection() {
  const t = useTranslations("cultureSection");

  const items = [0, 1, 2, 3].map((i) => ({
    title: t(`items.${i}.title`),
    desc: t(`items.${i}.desc`),
    alt: t(`items.${i}.alt`),
    ...IMAGES[i],
  }));

  return (
    <section className="border-y border-border bg-snow py-16 sm:py-20">
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

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group overflow-hidden rounded-2xl border border-border bg-paper shadow-sm transition hover:border-bashu-bronze/40 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute bottom-2 right-2 rounded-full bg-ink/50 p-2 text-brocade-gold-soft">
                  <item.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
