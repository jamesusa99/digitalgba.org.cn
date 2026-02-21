"use client";

const PARTNERS = [
  "中山大学",
  "香港大学",
  "澳门大学",
  "广东省博物馆",
  "腾讯文化",
  "华为云",
  "香港文化博物馆",
  "广东省文旅厅",
  "澳门文化局",
  "网易互动娱乐",
];

export function MemberLogoWall() {
  const duplicated = [...PARTNERS, ...PARTNERS];

  return (
    <div className="relative flex w-full overflow-hidden">
      <div className="flex gap-6 animate-marquee" style={{ width: "max-content" }}>
        {duplicated.map((name, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center justify-center rounded-xl border border-border bg-snow px-6 py-3 text-sm font-medium text-ink shadow-sm"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
