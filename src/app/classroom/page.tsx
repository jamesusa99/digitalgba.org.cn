import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Sparkles,
  Cpu,
  Globe,
  Building2,
  FileText,
  Users,
  Briefcase,
  ExternalLink,
  BookMarked,
  Radio,
  GraduationCap,
  Microscope,
} from "lucide-react";
import { ClassroomPartnerWall } from "./ClassroomPartnerWall";

export const metadata = {
  title: "文化课堂 | 大湾区文化数字研究院",
  description:
    "湾区非遗数字化精品课、AIGC实训、VR/AR体验设计。联合粤港澳高校，产教融合实训基地。开放式实践名额。",
};

const binngoCourses = [
  {
    id: "guangxiu",
    title: "《粤绣的故事》",
    desc: "探索粤绣背后的历史典籍与技艺传承，结合数字设计模拟制作过程，感受岭南刺绣之美。",
    image:
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&q=80",
  },
  {
    id: "xingshi",
    title: "《醒狮精神》",
    desc: "数字化呈现广东醒狮的传统工序与精神内涵，体验岭南民俗文化的现代传承。",
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&q=80",
  },
  {
    id: "jianzhu",
    title: "《岭南建筑》",
    desc: "通过数字建模解析骑楼、围屋、西关大屋等岭南建筑结构，领略湾区建筑的精巧与智慧。",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: "haisi",
    title: "《海丝记忆》",
    desc: "利用数字化技术还原海上丝绸之路的历史场景，传承大湾区开放包容的海洋文化基因。",
    image:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600&q=80",
  },
];

const techCourses = [
  {
    title: "AIGC 文化创意实训",
    desc: "联合粤港澳高校研发，涵盖 AIGC 在湾区文创设计、数字角色开发中的应用。",
    icon: Cpu,
  },
  {
    title: "VR/AR 体验设计实训",
    desc: "基于「湾区文脉」等重大项目，教授沉浸式场景构建与多模态交互技术。",
    icon: Globe,
  },
  {
    title: "文化大数据实践",
    desc: "学习文化资源的数据标注、确权评估及数字资产化管理流程。",
    icon: FileText,
  },
];

const baseInfo = [
  {
    title: "粤港澳媒体集团协作",
    desc: "研究院联合粤港澳主流媒体集团，通过自媒体流量运营实训基地，开展文化 IP 短视频直播矩阵营销培训，助力学生高质量就业。",
  },
  {
    title: "湾区出版机构",
    desc: "携手湾区出版机构，在融合出版、文化内容数字化及教材研发等领域开展深度合作，推动湾区文化资源向优质出版物转化。",
  },
  {
    title: "粤港澳艺术院校",
    desc: "与粤港澳知名艺术院校合作，在非遗艺术传承、文创设计与数字艺术创作等方面共建实训课程，培养复合型文化创意人才。",
  },
  {
    title: "开放型产教融合基地",
    desc: "在大湾区建设开放型实训基地，包含文创展示中心与新媒体流量运营基地，服务粤港澳三地学生实训。",
  },
];

const resources = [
  {
    title: "湾区文化在线平台",
    desc: "提供 4 门非遗手工系列数字化课程，支持 30 余课时在线自学。",
  },
  {
    title: "AIGC 实训平台",
    desc: "由研究院与粤港澳高校共同研发，为师生提供生成式人工智能创作环境。",
  },
  {
    title: "数字化研学手册",
    desc: "提供大湾区数字研学解决方案等文档下载，包含虚拟研学路线规划与案例。",
  },
];

const enrollmentOptions = [
  {
    title: "学生实训申请",
    desc: "面向合作院校学生开放，每年提供开放式产教融合实践名额。",
    icon: Users,
  },
  {
    title: "社会培训报名",
    desc: "针对政府干部、企业人员开展数字化文化贸易与城市美学塑造专题培训。",
    icon: Briefcase,
  },
];

export default function ClassroomPage() {
  return (
    <>
      <PageHero
        title="文化课堂"
        subtitle="课程与实训平台"
      />

      {/* 引言 */}
      <Section title="文化课堂与实训资源" subtitle="Education & Training">
        <div className="mx-auto max-w-4xl space-y-6">
          <p className="text-center text-muted">
            <strong className="text-ink">大湾区文化数字研究院</strong>
            充分依托
            <strong className="text-ink">「产教融合」</strong>
            的机制优势，联合
            <strong className="text-ink">中山大学</strong>
            、
            <strong className="text-ink">香港大学</strong>
            、
            <strong className="text-ink">澳门大学</strong>
            以及粤港澳主要科技与文化机构等核心战略合作伙伴，共同构建了涵盖从基础数字素养提升、非遗数字化传承到高端产业项目实训的全链条、多层次数字文化课程体系。
          </p>
          <p className="text-center text-muted">
            该体系重点整合湾区顶尖高校的学术资源，结合粤港澳传媒集团的传播矩阵与新媒体流量运营能力，旨在打造全国领先的数字文化人才培养高地，推动大湾区文化数字化成果的社会化应用与全民共享。
          </p>
        </div>
      </Section>

      {/* 合作伙伴 Logo 墙与分类 */}
      <Section title="战略合作伙伴" subtitle="在国家文化数字化战略引领下，深度整合行业头部资源">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="overflow-hidden rounded-2xl border border-border bg-paper-warm py-6">
            <ClassroomPartnerWall />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                type: "学术与科研",
                org: "中山大学 / 香港大学",
                fields: "岭南文化研究、数字人文、海丝文化",
                icon: BookMarked,
              },
              {
                type: "传媒与传播",
                org: "粤港澳传媒集团",
                fields: "新媒体矩阵运营、IP 流量变现、实训就业",
                icon: Radio,
              },
              {
                type: "数字技术教育",
                org: "澳门大学 / 深圳大学",
                fields: "AIGC 课程、AI 数字研学、青少年数字素养",
                icon: GraduationCap,
              },
              {
                type: "学术与技术支持",
                org: "腾讯文化 / 华为云",
                fields: "沉浸式交互技术、AIGC 实训平台底层架构",
                icon: Microscope,
              },
            ].map(({ type, org, fields, icon: Icon }, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-snow p-5 shadow-sm transition hover:border-bashu-bronze/30 hover:shadow-md"
              >
                <div className="rounded-lg bg-bashu-bronze/10 p-2 w-fit">
                  <Icon className="h-5 w-5 text-bashu-bronze" />
                </div>
                <p className="mt-3 text-xs font-medium uppercase tracking-wider text-brocade-gold">
                  {type}
                </p>
                <p className="mt-1 font-serif font-semibold text-ink">{org}</p>
                <p className="mt-2 text-sm text-muted">{fields}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 湾区文化课堂系列 */}
      <Section
        title="湾区文化课堂系列"
        subtitle="非遗数字化精品课 · 活态传承岭南文化"
      >
        <div className="mx-auto max-w-5xl">
          <p className="mb-8 text-center text-muted">
            依托 AI 与数字技术推动传统文化创新活化，项目实现跨区域、多场景规模化落地，覆盖粤港澳三地，深入中小学、社区、研学基地、文旅景区等场所，打造可复制、可推广的传统文化数字传承新模式。
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {binngoCourses.map((course) => (
              <article
                key={course.id}
                className="group overflow-hidden rounded-2xl border border-border bg-snow shadow-sm transition hover:border-bashu-bronze/40 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition duration-300 group-hover:bg-ink/40 group-hover:opacity-100">
                    <span className="rounded-full border border-snow bg-snow/20 px-4 py-2 text-sm font-medium text-snow backdrop-blur">
                      预览课程
                    </span>
                  </div>
                  <div className="absolute left-3 top-3 rounded-full bg-brocade-gold/90 px-2.5 py-0.5 text-xs font-medium text-ink">
                    湾区课堂
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif font-semibold text-ink">{course.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted">{course.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* 前沿技术与实践课 */}
      <Section
        title="前沿技术与实践课"
        subtitle="高端实训与项目驱动"
      >
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-3">
            {techCourses.map((course, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-snow p-6 shadow-sm transition hover:border-bashu-bronze/40 hover:shadow-md"
              >
                <div className="rounded-xl bg-bashu-bronze/10 p-3 w-fit">
                  <course.icon className="h-6 w-6 text-bashu-bronze" />
                </div>
                <h3 className="mt-4 font-serif font-semibold text-ink">{course.title}</h3>
                <p className="mt-2 text-sm text-muted">{course.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 实训成果展示 */}
      <Section title="实训成果展示" subtitle="学生作品与 AIGC 创作">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-center text-muted">
            展示学生在实训中通过 AIGC 生成的数字画作、3D 模型及文创设计作品。
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex aspect-square items-center justify-center rounded-2xl border-2 border-dashed border-border bg-paper-warm/50 text-muted"
              >
                <span className="text-sm">作品展示位</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-muted">
            更多作品将陆续更新，敬请关注。
          </p>
        </div>
      </Section>

      {/* 实训基地与合作背景 */}
      <Section title="实训基地与合作背景" subtitle="产教融合生态">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {baseInfo.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-paper-warm p-6 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-bashu-bronze" />
                  <h3 className="font-serif font-semibold text-ink">{item.title}</h3>
                </div>
                <p className="mt-4 text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 学习资源 */}
      <Section title="学习资源" subtitle="Resources & Enrollment">
        <div className="mx-auto max-w-4xl space-y-10">
          <div>
            <h3 className="mb-4 font-medium text-ink">学习资源链接</h3>
            <div className="space-y-3">
              {resources.map((r, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-border bg-snow p-4"
                >
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-brocade-gold" />
                  <div>
                    <p className="font-medium text-ink">{r.title}</p>
                    <p className="mt-0.5 text-sm text-muted">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-medium text-ink">报名入口</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {enrollmentOptions.map((opt, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-snow p-6 shadow-sm"
                >
                  <opt.icon className="h-6 w-6 text-bashu-bronze" />
                  <h4 className="mt-3 font-serif font-semibold text-ink">{opt.title}</h4>
                  <p className="mt-2 text-sm text-muted">{opt.desc}</p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-bashu-bronze hover:underline"
                  >
                    立即申请
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-bashu-bronze/30 bg-paper-warm p-8 text-center">
            <p className="font-medium text-ink">咨询与报名</p>
            <p className="mt-2 text-sm text-muted">
              欢迎通过
              <Link
                href="/contact"
                className="mx-1 text-bashu-bronze underline hover:text-bashu-bronze-light"
              >
                联系我们
              </Link>
              提交实训申请或咨询湾区文化课堂。
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-bashu-bronze bg-bashu-bronze px-6 py-3 text-sm font-medium text-snow transition hover:bg-bashu-bronze-light"
              >
                <BookOpen className="h-4 w-4" />
                提交咨询 / 报名
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
