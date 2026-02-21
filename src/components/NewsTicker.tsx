"use client";

import { motion } from "framer-motion";

const items = [
  { type: "新闻", text: "研究院与粤港澳大湾区文旅局签署文化数字化战略合作协议" },
  { type: "活动", text: "产业联盟年度峰会将于本季度举行，敬请关注" },
  { type: "成果", text: "岭南文化数字复原项目入选省级文化数字化示范案例" },
  { type: "合作", text: "与多所粤港澳高校共建大湾区文化数字教育课程" },
  { type: "联盟", text: "新成员加入产业联盟，共同推动湾区文化数字化转型" },
];

export function NewsTicker() {
  return (
    <section className="border-b border-border bg-snow py-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 overflow-hidden">
          <span className="shrink-0 font-serif text-sm font-semibold text-bashu-bronze">
            最新动态
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
