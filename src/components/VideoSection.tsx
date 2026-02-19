"use client";

import { motion } from "framer-motion";

const BILIBILI_BVID = "BV1zU411f78r";
const BILIBILI_EMBED = `https://player.bilibili.com/player.html?bvid=${BILIBILI_BVID}&high_quality=1`;

export function VideoSection() {
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
            巴蜀风貌 · 一镜一山河
          </h2>
          <p className="mt-2 text-muted">
            地图视角看巴蜀地区的前世今生，历史行政区域演变
          </p>
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
              title="地图视角看巴蜀地区的前世今生，巴蜀地区历史行政区域演变"
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
