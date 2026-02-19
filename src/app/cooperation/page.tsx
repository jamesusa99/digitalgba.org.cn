import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { Building2, Landmark, GraduationCap, Factory } from "lucide-react";

export const metadata = {
  title: "合作交流 | 巴蜀文化数字研究院",
  description:
    "地方政府、文博机构、高校与企业合作案例。合作领域：红色文化数字化、非遗资产化、AI+文创培训、产教融合。洽谈流程与联系方式。",
};

const partners = [
  {
    icon: Building2,
    title: "地方政府与文旅部门",
    subtitle: "校地协同推动乡村振兴",
    objects: "巴中市委/市政府、温江区文化创意区、岳池县委组织部",
    cases: [
      {
        name: "巴中市文旅调研座谈",
        desc: "执行院长陈建文教授率领国家广电总局实验室专家团队赴巴中，为当地红色文化资源与虚拟现实视听技术的融合提供决策咨询。",
      },
      {
        name: "「城市文化美学塑造」培训",
        desc: "为岳池县新任领导干部开展专题培训，从底层逻辑输出数字化城市管理与美学建设方案。",
      },
    ],
    outcomes: "政产学研调研报告、地方干部数字化素养提升工程",
  },
  {
    icon: Landmark,
    title: "文博机构",
    subtitle: "数字化赋能「活态传承」",
    objects: "三星堆博物馆、四川省文化产业发展促进中心、各地方非遗中心",
    cases: [
      {
        name: "三星堆数字版权与艺术品开发",
        desc: "通过数字化建模与确权，推动三星堆文博资源向数字资产转化。",
      },
      {
        name: "「5·18 国际博物馆日」联合策展",
        desc: "依托巴蜀文化体验空间，与校内外文博单位共同举办数字化非遗体验展。",
      },
    ],
    outcomes: "数字藏品、数字化展览方案、非遗数据标注体系",
  },
  {
    icon: GraduationCap,
    title: "高等院校",
    subtitle: "跨校联合攻关核心技术",
    objects: "北京大学、四川大学、电子科技大学、重庆艺术文化职业学院",
    cases: [
      {
        name: "AIGC 实训平台研发",
        desc: "联合电子科技大学共同研发 AI 通识课程，搭建服务于师生的数字化艺术创作平台。",
      },
      {
        name: "川渝产教联盟构建",
        desc: "联合重庆艺职院筹建「巴蜀文化创意（数字）产教联盟」，实现成渝双城经济圈资源共享。",
      },
    ],
    outcomes: "联合科研课题、学分互认课程、数字化教材",
  },
  {
    icon: Factory,
    title: "企业与产业联盟",
    subtitle: "技术驱动新质生产力",
    objects: "浪潮集团、广东缤果奇迹 AI、四川萃雅教育科技",
    cases: [
      {
        name: "「云景长征」技术集成",
        desc: "与科技公司深度协作，攻关 AI+VR+AR 融合技术，构建沉浸式红色文化体验。",
      },
      {
        name: "数字化非遗进社区",
        desc: "联合企业研发《典籍里的首饰》等 AI 数字课程，已在东安湖社区、金凤社区等多地落地运营。",
      },
    ],
    outcomes: "数字化课程包、软件著作权、商业化文旅 IP",
  },
];

const cooperationFields = [
  {
    title: "项目策划",
    desc: "红色文化/非遗数字化交互项目申报与建设",
  },
  {
    title: "资源转化",
    desc: "文化资源数字化资产化、确权评估与平台对接",
  },
  {
    title: "人才培养",
    desc: "AI+文创专项培训、产教融合实训基地建设",
  },
  {
    title: "社会服务",
    desc: "数字化研学旅行产品研发、银发经济数字课程包定制",
  },
];

const processSteps = [
  { step: 1, title: "意向提交", desc: "通过网站「合作留言」板块或邮件提交初步需求" },
  { step: 2, title: "专家初评", desc: "由研究院学术委员会评估项目的文化价值与技术可行性" },
  { step: 3, title: "方案论证", desc: "组织跨学科专家团（涵盖高校、文创、科技领域）进行现场调研与方案编写" },
  { step: 4, title: "联盟签约", desc: "正式签署合作协议，并可申请加入「巴蜀文化创意（数字）产教联盟」" },
];

export default function CooperationPage() {
  return (
    <>
      <PageHero
        title="合作交流"
        subtitle="校地协同、文博共建、校企联合，共创巴蜀文化数字化新生态"
      />

      {/* 合作伙伴与典型案例 */}
      <Section
        title="合作伙伴与典型案例"
        subtitle="政产学研多方协作，成果落地共享"
      >
        <div className="mx-auto max-w-4xl space-y-10">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-border bg-snow shadow-sm"
            >
              <div className="border-b border-border bg-paper-warm px-6 py-4 sm:px-8">
                <div className="flex items-center gap-3">
                  <partner.icon className="h-6 w-6 text-bashu-bronze" />
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-ink">
                      {partner.title}
                    </h3>
                    <p className="text-sm text-muted">{partner.subtitle}</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted">
                  <span className="font-medium text-ink">合作对象：</span>
                  {partner.objects}
                </p>
              </div>
              <div className="space-y-4 p-6 sm:p-8">
                <div>
                  <p className="mb-2 text-sm font-medium text-ink">典型案例</p>
                  <ul className="space-y-3">
                    {partner.cases.map((c, j) => (
                      <li key={j} className="text-muted">
                        <span className="font-medium text-ink">{c.name}：</span>
                        {c.desc}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="rounded-lg border border-border/60 bg-paper-warm/50 px-4 py-2 text-sm text-muted">
                  <span className="font-medium text-ink">落地成果：</span>
                  {partner.outcomes}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 合作洽谈与对接方式 */}
      <Section
        title="合作洽谈与对接方式"
        subtitle="合作指南 · 从意向到签约的全流程"
      >
        <div className="mx-auto max-w-4xl space-y-12">
          {/* 合作领域 */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-ink">
              合作领域
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {cooperationFields.map((field, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-snow p-4 shadow-sm"
                >
                  <p className="font-medium text-ink">{field.title}</p>
                  <p className="mt-1 text-sm text-muted">{field.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 合作洽谈流程 */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-ink">
              合作洽谈流程
            </h3>
            <ol className="mt-4 space-y-4">
              {processSteps.map((item) => (
                <li
                  key={item.step}
                  className="flex gap-4 rounded-xl border border-border bg-snow p-4 shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bashu-bronze/10 font-serif text-lg font-semibold text-bashu-bronze">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-medium text-ink">{item.title}</p>
                    <p className="mt-1 text-sm text-muted">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* 联系方式 */}
          <div className="rounded-2xl border border-border bg-paper-warm p-6 sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-ink">
              联系方式
            </h3>
            <p className="mt-2 text-sm text-muted">
              欢迎通过以下方式与我们取得联系，或前往
              <Link
                href="/contact"
                className="mx-1 text-bashu-bronze underline hover:text-bashu-bronze-light"
              >
                联系我们
              </Link>
              页面提交合作意向。
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-8">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-bashu-bronze" />
                <div>
                  <p className="text-sm font-medium text-ink">地址</p>
                  <p className="text-sm text-muted">
                    成都市双流区怡心街道锦江路四段399号
                    <span className="block">（四川文化产业职业学院）</span>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-bashu-bronze" />
                <div>
                  <p className="text-sm font-medium text-ink">电话</p>
                  <p className="text-sm text-muted">028-85769208（学校总机）</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-bashu-bronze" />
                <div>
                  <p className="text-sm font-medium text-ink">邮箱</p>
                  <p className="text-sm text-muted">
                    contact@digitalbashu.org.cn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
