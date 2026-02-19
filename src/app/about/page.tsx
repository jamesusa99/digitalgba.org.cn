import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata = {
  title: "关于我们 | 巴蜀文化数字研究院",
  description:
    "巴蜀文化数字研究院致力于巴蜀文化全景呈现、数字化成果全民共享，引领数字文化产业发展。学术研究、数字项目、融合出版、跨界合作四轮驱动。",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="关于我们"
        subtitle="数字科技唤醒巴蜀文脉，文化遗产照亮未来征程"
      />
      <Section title="研究院简介" subtitle="传承 · 创新 · 协同 · 包容 · 专业">
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>
            巴蜀文化数字研究院（以下简称「研究院」）是一家致力于巴蜀文化全景呈现、推动数字化成果全民共享，并引领数字文化产业发展的权威学术与创新平台。研究院坚持「传承、创新、协同、包容、专业」的核心价值观，深度融合 AI、VR/AR 等前沿数字技术，对三星堆、川剧、蜀锦及非遗民艺等巴蜀文化资源进行创造性转化与创新性表达。
          </p>
        </div>
      </Section>
      <Section title="领导与体系" subtitle="学术研究 + 数字项目 + 融合出版 + 跨界合作">
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>
            研究院由四川文化产业职业学院领导，由陈建文教授担任执行院长。在学术研究的基础上，研究院构建了「学术研究 + 数字项目 + 融合出版 + 跨界合作」四轮驱动的发展体系，重点推进包括「云景长征」数字化项目、巴蜀文化 AI 短剧创作，以及《中国少数民族服饰文化与传统技艺·羌族》等国家级重点出版成果。
          </p>
        </div>
      </Section>
      <Section title="产教融合与产业联盟" subtitle="产学研用一体化生态">
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>
            作为产教融合的坚定推动者，研究院发起并依托「巴蜀文化创意（数字）产教联盟」，深化校企协同，构建起「产学研用」一体化生态，持续扩大巴蜀文化的社会影响力与辐射效能。
          </p>
        </div>
      </Section>
    </>
  );
}
