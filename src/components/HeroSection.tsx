"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, BookOpen, FlaskConical, Users } from "lucide-react";

const ctaLinks = [
  { href: "/digital-collections", label: "探索数字全景", icon: Compass },
  { href: "/classroom", label: "走进文化课堂", icon: BookOpen },
  { href: "/research", label: "了解研究项目", icon: FlaskConical },
  { href: "/industry-alliance", label: "加入产业联盟", icon: Users },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-gradient-to-b from-bashu-teal/90 via-bashu-bronze/95 to-ink">
      {/* Ambient background */}
      <div className="absolute inset-0 grain-overlay" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(201,162,39,0.2) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(45,90,74,0.4) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-serif text-sm uppercase tracking-[0.3em] text-brocade-gold-soft/90 sm:text-base"
        >
          Greater Bay Area Culture Digital Research Institute
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 font-serif text-3xl font-bold leading-tight text-snow sm:text-4xl md:text-5xl lg:text-6xl"
        >
          湾区文化全景呈现
          <br />
          <span className="text-brocade-gold-soft">数字化成果全民共享</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-snow/90 sm:text-xl"
        >
          数字科技激活湾区文脉，文化遗产照亮未来征程
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {ctaLinks.map(({ href, label, icon: Icon }, i) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2 rounded-full border border-brocade-gold-soft/50 bg-brocade-gold-soft/10 px-5 py-3 text-sm font-medium text-snow transition hover:bg-brocade-gold-soft/25 hover:border-brocade-gold-soft"
            >
              <Icon size={18} className="text-brocade-gold-soft" />
              {label}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
