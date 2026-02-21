"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const nodes = [
  {
    id: "academic",
    label: "学术研究",
    href: "/research",
    cx: 50,
    cy: 35,
    desc: "数字湾区文脉与知识图谱",
  },
  {
    id: "digital",
    label: "数字项目",
    href: "/digital-collections",
    cx: 28,
    cy: 58,
    desc: "数字藏品与沉浸式体验",
  },
  {
    id: "education",
    label: "产教融合",
    href: "/classroom",
    cx: 72,
    cy: 58,
    desc: "课程与实训平台",
  },
  {
    id: "service",
    label: "社会服务",
    href: "/cooperation",
    cx: 50,
    cy: 78,
    desc: "合作交流与共创",
  },
  {
    id: "alliance",
    label: "产业联盟",
    href: "/industry-alliance",
    cx: 50,
    cy: 50,
    desc: "汇聚产业力量，价值共赢",
    highlight: true,
  },
];

export function InstituteMap() {
  return (
    <section className="border-y border-border bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
            研究院概览
          </h2>
          <p className="mt-2 text-muted">
            四大核心板块与产业联盟协同，实现全景呈现、全民共享与产业发展
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mt-12 aspect-[4/3] max-h-[420px] w-full overflow-hidden rounded-2xl border border-border bg-snow shadow-lg sm:aspect-video"
        >
          {/* SVG map: central alliance, four corners for other nodes */}
          <svg
            viewBox="0 0 100 100"
            className="h-full w-full p-4"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Connection lines (glow effect) */}
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-brocade-gold)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--color-bashu-bronze)" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            {nodes
              .filter((n) => n.id !== "alliance")
              .map((n) => (
                <line
                  key={`line-${n.id}`}
                  x1="50"
                  y1="50"
                  x2={n.cx}
                  y2={n.cy}
                  stroke="url(#lineGrad)"
                  strokeWidth="0.4"
                  strokeDasharray="1 0.5"
                  className="animate-pulse"
                />
              ))}

            {nodes.map((node, i) => (
              <g key={node.id}>
                <motion.circle
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, type: "spring", stiffness: 200 }}
                  r={node.highlight ? 8 : 5}
                  cx={node.cx}
                  cy={node.cy}
                  className={node.highlight ? "node-glow fill-brocade-gold" : "fill-bashu-bronze"}
                />
              </g>
            ))}
          </svg>

          {/* Overlay clickable cards */}
          <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
            <div className="flex justify-center gap-4 sm:gap-8">
              <Link
                href="/research"
                className="rounded-xl bg-snow/95 px-4 py-2 text-sm font-medium text-bashu-bronze shadow-md backdrop-blur transition hover:bg-snow hover:shadow-lg"
              >
                学术研究
              </Link>
            </div>
            <div className="flex justify-between">
              <Link
                href="/digital-collections"
                className="rounded-xl bg-snow/95 px-4 py-2 text-sm font-medium text-bashu-bronze shadow-md backdrop-blur transition hover:bg-snow hover:shadow-lg"
              >
                数字项目
              </Link>
              <Link
                href="/industry-alliance"
                className="rounded-xl bg-brocade-gold/20 px-4 py-2 text-sm font-semibold text-bashu-teal shadow-md backdrop-blur transition hover:bg-brocade-gold/30"
              >
                产业联盟
              </Link>
              <Link
                href="/classroom"
                className="rounded-xl bg-snow/95 px-4 py-2 text-sm font-medium text-bashu-bronze shadow-md backdrop-blur transition hover:bg-snow hover:shadow-lg"
              >
                产教融合
              </Link>
            </div>
            <div className="flex justify-center">
              <Link
                href="/cooperation"
                className="rounded-xl bg-snow/95 px-4 py-2 text-sm font-medium text-bashu-bronze shadow-md backdrop-blur transition hover:bg-snow hover:shadow-lg"
              >
                社会服务
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
