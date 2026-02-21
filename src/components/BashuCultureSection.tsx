"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Landmark, Drama, Mountain, Leaf } from "lucide-react";

const CULTURE_ITEMS = [
  {
    title: "岭南文化 · 广府风韵",
    desc: "粤剧、醒狮、龙舟、凉茶……广府文化是大湾区最深厚的文化根脉，历经千年仍焕发活力。",
    image:
      "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80",
    icon: Landmark,
    alt: "岭南文化",
  },
  {
    title: "粤剧 · 南国红豆",
    desc: "粤剧被誉为「南国红豆」，融汇唱念做打，是大湾区乃至全球粤籍华人共同的文化纽带。",
    image:
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=800&q=80",
    icon: Drama,
    alt: "粤剧",
  },
  {
    title: "客家文化 · 围屋之乡",
    desc: "深圳、惠州、梅州等地客家围屋闻名天下，客家山歌、围龙屋承载着湾区多元文化的共生之道。",
    image:
      "https://images.unsplash.com/photo-1600267165477-6d4cc741b379?w=800&q=80",
    icon: Mountain,
    alt: "客家文化",
  },
  {
    title: "海上丝路 · 港澳商脉",
    desc: "大湾区是古代海上丝绸之路的重要起点，港澳开放商脉与岭南文化交融，孕育出独特的湾区文化气质。",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    icon: Leaf,
    alt: "海上丝路",
  },
];

export function BashuCultureSection() {
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
            湾区文化 · 一图一故事
          </h2>
          <p className="mt-2 text-muted">
            岭南文明、粤剧、客家、海丝——以图载道，以数传情
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CULTURE_ITEMS.map((item, i) => (
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
                  src={item.image}
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
                <h3 className="font-serif text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
