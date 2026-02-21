"use client";

import { motion } from "framer-motion";
import {
  BookMarked,
  Lightbulb,
  Handshake,
  Heart,
  Award,
} from "lucide-react";

const values = [
  {
    key: "inheritance",
    title: "传承",
    en: "Inheritance",
    icon: BookMarked,
    desc: "深入挖掘与活态传承大湾区多元文化",
  },
  {
    key: "innovation",
    title: "创新",
    en: "Innovation",
    icon: Lightbulb,
    desc: "科技赋能，推动文化创意转化，引领产业创新",
  },
  {
    key: "collaboration",
    title: "协同",
    en: "Collaboration",
    icon: Handshake,
    desc: "汇聚粤港澳多方力量，共建数字生态，促进成果开放共享，构建紧密产业联盟",
  },
  {
    key: "inclusiveness",
    title: "包容",
    en: "Inclusiveness",
    icon: Heart,
    desc: "促进文化交流与共享，面向不同背景的用户开放，吸纳多元产业伙伴",
  },
  {
    key: "professionalism",
    title: "专业",
    en: "Professionalism",
    icon: Award,
    desc: "严谨学术，高质量产出，确保内容权威性与可信度，树立行业标杆",
  },
];

export function ValuesSection() {
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
            核心价值观
          </h2>
          <p className="mt-2 text-muted">
            传承 · 创新 · 协同 · 包容 · 专业
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value, i) => (
            <motion.div
              key={value.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group rounded-2xl border border-border bg-snow p-6 shadow-sm transition hover:border-bashu-bronze/40 hover:shadow-md"
            >
              <value.icon className="h-10 w-10 text-bashu-bronze transition group-hover:text-brocade-gold" />
              <h3 className="mt-3 font-serif text-lg font-semibold text-ink">
                {value.title}
              </h3>
              <p className="text-xs text-brocade-gold">{value.en}</p>
              <p className="mt-2 text-sm text-muted">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
