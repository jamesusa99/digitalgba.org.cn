"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Glasses, Scan, Smartphone, Play, X, ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";

type Experience = {
  id: string;
  type: "VR" | "AR";
  icon: React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  desc: string;
  tag: string;
  comingSoon?: boolean;
};

export function VRARShowcase() {
  const locale = useLocale();
  const [active, setActive] = useState<string | null>(null);
  const [scanActive, setScanActive] = useState(false);

  const labels = {
    heading: locale === "en"
      ? "VR / AR Immersive Cultural Experience"
      : locale === "zh-TW"
      ? "VR / AR 沉浸式文化體驗"
      : "VR / AR 沉浸式文化体验",
    subheading: locale === "en"
      ? "Scan cultural symbols or enter VR to experience Lingnan culture in an entirely new dimension"
      : locale === "zh-TW"
      ? "掃描文化符號或進入VR全景，在全新維度感受嶺南文化"
      : "扫描文化符号或进入VR全景，在全新维度感受岭南文化",
    comingSoon: locale === "en" ? "Coming Soon" : locale === "zh-TW" ? "即將上線" : "即将上线",
    tryNow: locale === "en" ? "Try Experience" : locale === "zh-TW" ? "立即體驗" : "立即体验",
    scanTip: locale === "en"
      ? "Point camera at lion dance symbol to activate AR"
      : locale === "zh-TW"
      ? "將攝像頭對準醒獅圖標，啟動AR體驗"
      : "将摄像头对准醒狮图标，启动AR体验",
    arScanTitle: locale === "en" ? "AR Scanner" : locale === "zh-TW" ? "AR掃描儀" : "AR扫描仪",
    previewTitle: locale === "en" ? "VR Preview" : locale === "zh-TW" ? "VR預覽" : "VR预览",
    previewDesc: locale === "en"
      ? "Full VR experience requires compatible headset or mobile gyroscope"
      : locale === "zh-TW"
      ? "完整VR體驗需要VR眼鏡或支持陀螺儀的手機"
      : "完整VR体验需要VR眼镜或支持陀螺仪的手机",
  };

  const experiences: Experience[] = [
    {
      id: "vr-lingnan",
      type: "VR",
      icon: Glasses,
      title: locale === "en" ? "Lingnan VR Museum" : locale === "zh-TW" ? "嶺南文化VR博物館" : "岭南文化VR博物馆",
      desc: locale === "en"
        ? "360° immersive tour of Lingnan historic sites, arcade buildings, and cultural landscapes"
        : locale === "zh-TW"
        ? "360°沉浸式漫遊嶺南古蹟、騎樓建築與文化場景"
        : "360°沉浸式漫游岭南古迹、骑楼建筑与文化场景",
      tag: "VR · 360°",
    },
    {
      id: "ar-lion",
      type: "AR",
      icon: Scan,
      title: locale === "en" ? "Lion Dance AR Scan" : locale === "zh-TW" ? "醒獅AR掃描" : "醒狮AR扫描",
      desc: locale === "en"
        ? "Scan the lion dance symbol to activate dynamic 3D lion animations on your screen"
        : locale === "zh-TW"
        ? "掃描醒獅圖標，在屏幕上呈現動態3D醒獅效果"
        : "扫描醒狮图标，在屏幕上呈现动态3D醒狮效果",
      tag: "AR · 互动",
    },
    {
      id: "vr-hkmo",
      type: "VR",
      icon: Glasses,
      title: locale === "en" ? "HK-Macao VR Tour" : locale === "zh-TW" ? "港澳文化VR漫遊" : "港澳文化VR漫游",
      desc: locale === "en"
        ? "Virtual stroll through Victoria Harbour, Ruins of St. Paul's, and East-meets-West architecture"
        : locale === "zh-TW"
        ? "虛擬漫步維多利亞港、大三巴牌坊與中西合璧建築群"
        : "虚拟漫步维多利亚港、大三巴牌坊与中西合璧建筑群",
      tag: "VR · 文旅",
    },
    {
      id: "ar-folk",
      type: "AR",
      icon: Smartphone,
      title: locale === "en" ? "Folk Custom AR Card" : locale === "zh-TW" ? "民俗AR賀卡" : "民俗AR贺卡",
      desc: locale === "en"
        ? "Scan folk festival cards to watch animated dragon boats, flower markets come to life"
        : locale === "zh-TW"
        ? "掃描民俗節慶賀卡，龍舟競渡、行花街動態呈現"
        : "扫描民俗节庆贺卡，龙舟竞渡、行花街动态呈现",
      tag: "AR · 民俗",
      comingSoon: true,
    },
  ];

  return (
    <section className="border-t border-border bg-ink py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full border border-brocade-gold/30 bg-brocade-gold/10 px-3 py-1 text-xs font-medium text-brocade-gold-soft">
            VR / AR
          </span>
          <h2 className="mt-3 font-serif text-2xl font-semibold text-snow sm:text-3xl">
            {labels.heading}
          </h2>
          <p className="mt-2 text-sm text-snow/60">{labels.subheading}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            const isVR = exp.type === "VR";
            return (
              <motion.div
                key={exp.id}
                whileHover={{ y: -4 }}
                className={`relative flex flex-col rounded-2xl border p-5 transition cursor-pointer ${
                  isVR
                    ? "border-bashu-bronze/30 bg-bashu-bronze/10 hover:border-bashu-bronze/60"
                    : "border-brocade-gold/30 bg-brocade-gold/10 hover:border-brocade-gold/60"
                }`}
                onClick={() => !exp.comingSoon && setActive(exp.id)}
              >
                {exp.comingSoon && (
                  <span className="absolute right-3 top-3 rounded-full bg-snow/10 px-2 py-0.5 text-[10px] text-snow/50">
                    {labels.comingSoon}
                  </span>
                )}
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                    isVR ? "bg-bashu-bronze/20" : "bg-brocade-gold/20"
                  }`}
                >
                  <Icon
                    size={20}
                    className={isVR ? "text-bashu-bronze-light" : "text-brocade-gold-soft"}
                  />
                </div>
                <span
                  className={`mt-3 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${
                    isVR
                      ? "bg-bashu-bronze/20 text-bashu-bronze-light"
                      : "bg-brocade-gold/20 text-brocade-gold-soft"
                  }`}
                >
                  {exp.tag}
                </span>
                <h3 className="mt-2 font-medium text-snow text-sm leading-snug">{exp.title}</h3>
                <p className="mt-1.5 flex-1 text-xs text-snow/50 leading-relaxed">{exp.desc}</p>
                {!exp.comingSoon && (
                  <button
                    type="button"
                    className={`mt-4 flex items-center gap-1 text-xs font-medium transition ${
                      isVR
                        ? "text-bashu-bronze-light hover:text-snow"
                        : "text-brocade-gold-soft hover:text-snow"
                    }`}
                  >
                    <Play size={12} />
                    {labels.tryNow}
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* VR/AR demo modal */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 backdrop-blur-sm p-4"
              onClick={() => setActive(null)}
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                className="relative w-full max-w-lg rounded-2xl border border-snow/10 bg-ink p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="absolute right-4 top-4 rounded-full bg-snow/10 p-1.5 text-snow/60 hover:bg-snow/20"
                >
                  <X size={18} />
                </button>

                {active?.startsWith("vr") ? (
                  <>
                    <div className="vr-shimmer flex h-48 items-center justify-center rounded-xl">
                      <div className="text-center">
                        <Glasses className="mx-auto h-10 w-10 text-bashu-bronze-light/60" />
                        <p className="mt-3 text-sm font-medium text-snow/70">{labels.previewTitle}</p>
                        <p className="mt-1 text-xs text-snow/40 max-w-xs">{labels.previewDesc}</p>
                      </div>
                    </div>
                    <div className="mt-5">
                      <h3 className="font-serif text-lg font-semibold text-snow">
                        {experiences.find((e) => e.id === active)?.title}
                      </h3>
                      <p className="mt-2 text-sm text-snow/60">
                        {experiences.find((e) => e.id === active)?.desc}
                      </p>
                      <a
                        href="/contact"
                        className="mt-5 flex items-center justify-between rounded-xl bg-bashu-bronze px-5 py-3 text-sm font-medium text-snow transition hover:bg-bashu-bronze-light"
                      >
                        <span>{locale === "en" ? "Contact us to arrange VR demo" : locale === "zh-TW" ? "聯繫我們安排VR體驗" : "联系我们安排VR体验"}</span>
                        <ChevronRight size={16} />
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className={`relative flex h-48 items-center justify-center rounded-xl border-2 border-dashed transition ${
                        scanActive ? "border-brocade-gold bg-brocade-gold/5" : "border-snow/20 bg-snow/5"
                      }`}
                    >
                      <div className="text-center">
                        <Scan
                          className={`mx-auto h-12 w-12 transition ${
                            scanActive ? "text-brocade-gold" : "text-snow/30"
                          }`}
                        />
                        <p className="mt-3 text-sm text-snow/50">{labels.scanTip}</p>
                      </div>
                      {scanActive && (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          className="absolute left-4 right-4 top-1/2 h-0.5 bg-brocade-gold/60"
                        />
                      )}
                    </div>
                    <h3 className="mt-5 font-serif text-lg font-semibold text-snow">{labels.arScanTitle}</h3>
                    <p className="mt-2 text-sm text-snow/60">
                      {experiences.find((e) => e.id === active)?.desc}
                    </p>
                    <button
                      type="button"
                      onClick={() => setScanActive((v) => !v)}
                      className={`mt-5 w-full rounded-xl py-3 text-sm font-semibold transition ${
                        scanActive
                          ? "bg-brocade-gold text-ink"
                          : "bg-snow/10 text-snow hover:bg-snow/20"
                      }`}
                    >
                      {scanActive
                        ? locale === "en" ? "Scanning…" : "扫描中…"
                        : locale === "en" ? "Start AR Scan" : locale === "zh-TW" ? "啟動AR掃描" : "启动AR扫描"}
                    </button>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
