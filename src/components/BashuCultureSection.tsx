"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Landmark, Drama, Mountain, Leaf } from "lucide-react";

const CULTURE_ITEMS = [
  {
    title: "古蜀文明 · 三星堆",
    desc: "神秘的古蜀国与三星堆遗址，青铜神树、纵目面具见证巴蜀千年文明。",
    // 优先使用本地图片：将图片放到 public/images/sanxingdui.jpg 即可
    image:
      "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=800&q=80",
    icon: Landmark,
    alt: "古蜀文明",
  },
  {
    title: "川剧变脸",
    desc: "川剧绝活变脸、吐火，一转身一张脸，演绎巴蜀人的豪迈与幽默。",
    image:
      "https://images.unsplash.com/photo-1528642474498-1af0c17fd8e3?w=800&q=80",
    icon: Drama,
    alt: "川剧变脸",
  },
  {
    title: "大熊猫之乡",
    desc: "成都平原是大熊猫的故乡，憨态可掬的国宝承载着巴蜀与自然和谐共生的理念。",
    image:
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&q=80",
    icon: Mountain,
    alt: "大熊猫",
  },
  {
    title: "川茶与蜀锦",
    desc: "蒙顶茶、竹叶青，蜀锦华彩，茶马古道与丝路交织出巴蜀的商贸与雅趣。",
    image:
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80",
    icon: Leaf,
    alt: "川茶文化",
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
            巴蜀文化 · 一图一故事
          </h2>
          <p className="mt-2 text-muted">
            古蜀文明、川剧、熊猫、川茶——以图载道，以数传情
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
