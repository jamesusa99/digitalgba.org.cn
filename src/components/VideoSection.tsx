"use client";

import { motion } from "framer-motion";

/** 可替换为研究院自有宣传片：修改下方 videoId 或 src 中的 YouTube 视频 ID */
const VIDEO_ID = "3tUDgQOw2-c";

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
            影像记录巴蜀文化，数字留存千年文脉
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
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0`}
              title="巴蜀文化 / 四川风貌 宣传片"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="border-t border-border bg-paper px-6 py-3">
            <p className="text-xs text-muted">
              可替换为研究院自有宣传片或合作项目视频，修改{" "}
              <code className="rounded bg-paper-warm px-1.5 font-mono text-ink">
                src/components/VideoSection.tsx
              </code>{" "}
              中的 <code className="rounded bg-paper-warm px-1.5 font-mono text-ink">VIDEO_ID</code> 即可。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
