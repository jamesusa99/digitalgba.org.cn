import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import Link from "next/link";
import { ClipboardList, FileText, Download } from "lucide-react";
import { MemberLogoWall } from "./MemberLogoWall";

export const metadata = {
  title: "产业联盟 | 大湾区文化数字研究院",
  description:
    "大湾区文化创意（数字）产教联盟汇聚文博、文旅、科技、教育等机构，政行校企协同，推动大湾区文化数字化转型。汇聚产业力量，价值共赢。",
};

const charterItems = [
  {
    title: "协同机制",
    desc: "建立政府、企业、学校、科研机构多方参与的理事会，推行多元协同的治理模式。",
  },
  {
    title: "标准统一",
    desc: "共同建立统一的策划、供应链、内容生产、数据存储及结算的标准价值体系。",
  },
  {
    title: "资源共享",
    desc: "联盟成员享有大湾区文化数字资源库的使用权及数字化交互平台的技术支持。",
  },
  {
    title: "价值共创",
    desc: "推动「文旅+电竞+电商+文创」的多维融合，共同打造数字化新型文化业态。",
  },
];

const memberCategories = [
  {
    cat: "学术与科研机构",
    items: [
      "中山大学（岭南文化研究支持）",
      "香港大学（数字人文联合研究）",
      "澳门大学（文化遗产数字化）",
    ],
  },
  {
    cat: "文博与文化机构",
    items: [
      "广东省博物馆",
      "广州市文化广电旅游局",
      "香港文化博物馆",
      "澳门文化局",
    ],
  },
  {
    cat: "科技与运营企业",
    items: [
      "腾讯文化（数字文创与电竞）",
      "华为云（数字底座支持）",
      "网易互动娱乐",
      "粤港澳各地国有文化平台",
    ],
  },
  {
    cat: "教育与培训平台",
    items: [
      "广东省教育厅直属机构",
      "香港职业训练局",
      "在线文化教育平台",
    ],
  },
];

const events = [
  {
    title: "「大湾区文化+」品牌融合发展高峰论坛",
    desc: "聚合优质资源，讨论市场动态与品牌抱团发展策略。",
  },
  {
    title: "数字化交互项目发布会",
    desc: "如「湾区文脉」等重大文旅项目的启动与阶段性成果展示。",
  },
  {
    title: "湾区电竞文化赛事",
    desc: "定期举办具有全国影响力的电竞赛事，吸引年轻群体关注大湾区文化。",
  },
  {
    title: "新媒体人才培训营",
    desc: "面向粤港澳三地开展文化 IP 品牌孵化与短视频直播矩阵营销培训。",
  },
];

const joinSteps = [
  { title: "在线申请", desc: "通过本页面下方或「联系我们」提交单位简介与合作意向" },
  { title: "资格审核", desc: "联盟理事会根据成员准入标准进行初步评估" },
  { title: "签署章程", desc: "审核通过后，双方正式签署《大湾区文化创意（数字）产教联盟章程》" },
  { title: "正式授牌", desc: "在联盟年度会议或专题活动中进行成员单位授牌" },
];

export default function IndustryAlliancePage() {
  return (
    <>
      <PageHero
        title="大湾区文化创意（数字）产教联盟"
        subtitle="汇聚产业力量，实现价值共赢"
      />

      {/* 成员 Logo 墙 */}
      <section className="border-y border-border bg-paper-warm py-8">
        <div className="overflow-hidden">
          <MemberLogoWall />
        </div>
      </section>

      {/* 1. 联盟简介与核心使命 */}
      <Section title="联盟简介与核心使命" subtitle="大湾区文化创意（数字）产教联盟">
        <div className="mx-auto max-w-4xl space-y-6">
          <p className="text-center text-lg text-muted">
            大湾区文化创意（数字）产教联盟是由大湾区文化数字研究院发起，汇聚文博、文旅、科技、教育等机构的跨界组织。联盟致力于共同推动大湾区文化数字化转型，构建「政行校企」多主体协同的市域产教联合体，实现产业创新与文化价值的深度融合。
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-snow p-4 text-center shadow-sm">
              <p className="font-serif text-2xl font-semibold text-bashu-bronze">粤港澳</p>
              <p className="mt-1 text-sm text-muted">三地联动覆盖</p>
            </div>
            <div className="rounded-xl border border-border bg-snow p-4 text-center shadow-sm">
              <p className="font-serif text-2xl font-semibold text-bashu-bronze">政行校企</p>
              <p className="mt-1 text-sm text-muted">多主体协同</p>
            </div>
            <div className="rounded-xl border border-border bg-snow p-4 text-center shadow-sm">
              <p className="font-serif text-2xl font-semibold text-bashu-bronze">湾区</p>
              <p className="mt-1 text-sm text-muted">产教联合体</p>
            </div>
            <div className="rounded-xl border border-border bg-snow p-4 text-center shadow-sm">
              <p className="font-serif text-2xl font-semibold text-bashu-bronze">价值共赢</p>
              <p className="mt-1 text-sm text-muted">产业与文化融合</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 2. 联盟章程概要 */}
      <Section title="联盟章程概要" subtitle="Alliance Charter · 共同准则保障生态健康发展">
        <div className="mx-auto max-w-4xl">
          <p className="mb-8 text-center text-muted">
            联盟成员需遵循以下共同准则，以确保生态的健康发展：
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {charterItems.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-snow p-6 shadow-sm"
              >
                <h3 className="font-serif font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 3. 成员单位名单 */}
      <Section title="成员单位名单" subtitle="Partial Member List">
        <div className="mx-auto max-w-4xl">
          <p className="mb-8 text-center text-muted">
            联盟已连接粤港澳三地及全国重点文旅、非遗资源。
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {memberCategories.map((group, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-snow p-6 shadow-sm"
              >
                <h3 className="font-serif font-semibold text-ink">{group.cat}</h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-bashu-bronze/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. 年度峰会与重点活动 */}
      <Section title="年度峰会与重点活动" subtitle="高规格活动提升品牌影响力">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {events.map((event, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-snow p-6 shadow-sm"
              >
                <h3 className="font-serif font-semibold text-ink">{event.title}</h3>
                <p className="mt-3 text-sm text-muted">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. 加入申请方式 */}
      <Section title="加入申请方式" subtitle="How to Join">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="rounded-xl border border-border bg-paper-warm p-6">
            <h3 className="font-medium text-ink">申请条件</h3>
            <p className="mt-2 text-muted">
              具备文博资源、数字化技术、文旅运营能力或产教融合需求的企事业单位及社会团体。
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-medium text-ink">加入流程</h3>
            <ol className="space-y-3">
              {joinSteps.map((step, i) => (
                <li
                  key={i}
                  className="flex gap-4 rounded-xl border border-border bg-snow px-4 py-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bashu-bronze/10 font-serif font-semibold text-bashu-bronze">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-medium text-ink">{step.title}</p>
                    <p className="mt-0.5 text-sm text-muted">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-bashu-bronze bg-bashu-bronze px-6 py-3 text-sm font-medium text-snow transition hover:bg-bashu-bronze-light"
            >
              <ClipboardList className="h-4 w-4" />
              提交加入申请
            </Link>
          </div>
        </div>
      </Section>

      {/* 资源下载区 */}
      <Section title="资源下载" subtitle="联盟章程与白皮书">
        <div className="mx-auto max-w-2xl">
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="#"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-snow p-6 shadow-sm transition hover:border-bashu-bronze/40 hover:shadow-md"
            >
              <div className="rounded-xl bg-bashu-bronze/10 p-3">
                <FileText className="h-8 w-8 text-bashu-bronze" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-ink group-hover:text-bashu-bronze">
                  《大湾区文化创意（数字）产教联盟章程》
                </p>
                <p className="mt-1 flex items-center gap-1 text-sm text-muted">
                  <Download className="h-4 w-4" />
                  PDF 下载
                </p>
              </div>
            </a>
            <a
              href="#"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-snow p-6 shadow-sm transition hover:border-bashu-bronze/40 hover:shadow-md"
            >
              <div className="rounded-xl bg-bashu-bronze/10 p-3">
                <FileText className="h-8 w-8 text-bashu-bronze" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-ink group-hover:text-bashu-bronze">
                  《大湾区文化数字化白皮书》
                </p>
                <p className="mt-1 flex items-center gap-1 text-sm text-muted">
                  预览 / 下载
                </p>
              </div>
            </a>
          </div>
          <p className="mt-6 text-center text-sm text-muted">
            完整版文档可通过
            <Link
              href="/contact"
              className="mx-1 text-bashu-bronze underline hover:text-bashu-bronze-light"
            >
              联系我们
            </Link>
            获取。
          </p>
        </div>
      </Section>
    </>
  );
}
