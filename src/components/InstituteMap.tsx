"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function InstituteMap() {
  const t = useTranslations("instituteMap");

  const nodes = [
    { id: "academic", label: t("nodes.academic"), href: "/research", cx: 50, cy: 35 },
    { id: "digital", label: t("nodes.digital"), href: "/digital-collections", cx: 28, cy: 58 },
    { id: "education", label: t("nodes.education"), href: "/classroom", cx: 72, cy: 58 },
    { id: "service", label: t("nodes.service"), href: "/cooperation", cx: 50, cy: 78 },
    { id: "alliance", label: t("nodes.alliance"), href: "/industry-alliance", cx: 50, cy: 50, highlight: true },
  ];

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
            {t("heading")}
          </h2>
          <p className="mt-2 text-muted">{t("subheading")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mt-12 aspect-[4/3] max-h-[420px] w-full overflow-hidden rounded-2xl border border-border bg-snow shadow-lg sm:aspect-video"
        >
          <svg
            viewBox="0 0 100 100"
            className="h-full w-full p-4"
            preserveAspectRatio="xMidYMid meet"
          >
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
                  x1="50" y1="50" x2={n.cx} y2={n.cy}
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
                  r={"highlight" in node && node.highlight ? 8 : 5}
                  cx={node.cx}
                  cy={node.cy}
                  className={"highlight" in node && node.highlight ? "node-glow fill-brocade-gold" : "fill-bashu-bronze"}
                />
              </g>
            ))}
          </svg>

          <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
            <div className="flex justify-center">
              <Link href="/research" className="rounded-xl bg-snow/95 px-4 py-2 text-sm font-medium text-bashu-bronze shadow-md backdrop-blur transition hover:bg-snow hover:shadow-lg">
                {t("nodes.academic")}
              </Link>
            </div>
            <div className="flex justify-between">
              <Link href="/digital-collections" className="rounded-xl bg-snow/95 px-4 py-2 text-sm font-medium text-bashu-bronze shadow-md backdrop-blur transition hover:bg-snow hover:shadow-lg">
                {t("nodes.digital")}
              </Link>
              <Link href="/industry-alliance" className="rounded-xl bg-brocade-gold/20 px-4 py-2 text-sm font-semibold text-bashu-teal shadow-md backdrop-blur transition hover:bg-brocade-gold/30">
                {t("nodes.alliance")}
              </Link>
              <Link href="/classroom" className="rounded-xl bg-snow/95 px-4 py-2 text-sm font-medium text-bashu-bronze shadow-md backdrop-blur transition hover:bg-snow hover:shadow-lg">
                {t("nodes.education")}
              </Link>
            </div>
            <div className="flex justify-center">
              <Link href="/cooperation" className="rounded-xl bg-snow/95 px-4 py-2 text-sm font-medium text-bashu-bronze shadow-md backdrop-blur transition hover:bg-snow hover:shadow-lg">
                {t("nodes.service")}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
