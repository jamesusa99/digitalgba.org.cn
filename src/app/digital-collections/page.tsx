import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import Image from "next/image";
import { Package, Globe, LayoutGrid, ExternalLink } from "lucide-react";

export const metadata = {
  title: "数字全景 | 大湾区文化数字研究院",
  description:
    "汇聚岭南文化、粤剧、非遗等大湾区文化数字藏品与虚拟展陈，提供线上沉浸式浏览与互动体验。3D/VR 展示入口，湾区文化数字体验。",
};

const DIGITAL_COLLECTIONS = [
  {
    id: "lingnan",
    title: "岭南文化数字藏品",
    desc: "广府骑楼、西关大屋、疍家文化等岭南建筑与生活文化数字化建模与展示，推动文博资源向数字资产转化。",
    image:
      "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80",
    category: "岭南文化",
  },
  {
    id: "yueju",
    title: "粤剧数字藏品",
    desc: "粤剧脸谱、戏服纹样、经典折子戏片段等粤剧元素数字化收藏与展示，传承南国红豆文化。",
    image:
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=800&q=80",
    category: "粤剧",
  },
  {
    id: "guangxiu",
    title: "粤绣纹样数字藏品",
    desc: "传统粤绣纹样、织造技艺与非遗手工系列数字化课程衍生产品，展现湾区精湛工艺美学。",
    image:
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80",
    category: "非遗民艺",
  },
  {
    id: "hakka",
    title: "客家文化数字藏品",
    desc: "客家围龙屋、客家山歌、传统服饰等文化资源的数字化呈现，展示湾区多元文化共生之道。",
    image:
      "https://images.unsplash.com/photo-1600267165477-6d4cc741b379?w=800&q=80",
    category: "客家文化",
  },
  {
    id: "maritime",
    title: "海丝文化数字藏品",
    desc: "海上丝绸之路历史文物、广州十三行、南海神庙等海洋文化主题数字艺术品，传递湾区开放包容的文化精神。",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    category: "海丝文化",
  },
];

const VR_EXHIBITIONS = [
  {
    id: "lingnan-vr",
    title: "「岭南文化」沉浸式体验",
    desc: "AR/VR/AI 融合技术打造的岭南文化数字化交互平台，全链条技术引擎，沉浸式体验岭南文化精髓。",
    type: "VR/AR",
    href: "#",
    status: "运营中",
  },
  {
    id: "gba-space",
    title: "大湾区文化体验空间",
    desc: "线下数字化非遗体验展陈，支持虚拟导览与互动，联动「5·18 国际博物馆日」等文化节点。",
    type: "线下+线上",
    href: "#",
    status: "运营中",
  },
  {
    id: "digital-trade",
    title: "文化数字艺术品交易平台",
    desc: "大湾区文化数字藏品发行、确权与交易，全国文化大数据交易中心重点支持。",
    type: "交易平台",
    href: "#",
    status: "已上线",
  },
  {
    id: "future",
    title: "更多 3D/VR 展陈",
    desc: "广州城市 3D 历史漫游、粤剧虚拟剧场、海丝沉浸式体验等项目持续建设中，敬请期待。",
    type: "建设中",
    href: "#",
    status: "筹备中",
  },
];

export default function DigitalCollectionsPage() {
  return (
    <>
      <PageHero
        title="数字全景"
        subtitle="数字藏品与沉浸式体验"
      />
      <Section title="数字展示" subtitle="探索大湾区文化数字化成果">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-muted">
            汇聚岭南文化、粤剧、非遗等大湾区文化数字藏品与虚拟展陈，提供线上沉浸式浏览与互动体验。
          </p>
        </div>
      </Section>

      {/* 数字藏品列表 */}
      <Section title="数字藏品" subtitle="大湾区文化数字资产精选">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DIGITAL_COLLECTIONS.map((item) => (
              <article
                key={item.id}
                className="group overflow-hidden rounded-2xl border border-border bg-snow shadow-sm transition hover:border-bashu-bronze/40 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute left-3 top-3 rounded-full bg-ink/70 px-2.5 py-0.5 text-xs text-snow">
                    {item.category}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition duration-300 group-hover:bg-ink/30 group-hover:opacity-100">
                    <span className="rounded-full border border-snow bg-snow/20 px-4 py-2 text-sm font-medium text-snow backdrop-blur">
                      查看藏品
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* 3D/VR 展示入口 */}
      <Section title="3D / VR 展示入口" subtitle="沉浸式体验与虚拟展陈">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {VR_EXHIBITIONS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-snow shadow-sm transition hover:border-brocade-gold/50 hover:shadow-lg"
              >
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div className="rounded-lg bg-bashu-bronze/10 p-2">
                        {item.type.includes("VR") ? (
                          <Globe className="h-5 w-5 text-bashu-bronze" />
                        ) : item.type === "交易平台" ? (
                          <Package className="h-5 w-5 text-bashu-bronze" />
                        ) : (
                          <LayoutGrid className="h-5 w-5 text-bashu-bronze" />
                        )}
                      </div>
                      <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted">
                        {item.type}
                      </span>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs ${
                        item.status === "运营中" || item.status === "已上线"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-ink group-hover:text-bashu-bronze">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{item.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-bashu-bronze">
                    进入体验
                    <ExternalLink className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            更多数字藏品与 3D/VR 项目将陆续上线，敬请关注研究院动态。
          </p>
        </div>
      </Section>
    </>
  );
}
