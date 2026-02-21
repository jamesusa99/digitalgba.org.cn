import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata = {
  title: "关于我们 | 大湾区文化数字研究院",
  description:
    "大湾区文化数字研究院致力于湾区文化全景呈现、数字化成果全民共享，引领数字文化产业发展。学术研究、数字项目、融合出版、跨界合作四轮驱动。",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="关于我们"
        subtitle="数字科技激活湾区文脉，文化遗产照亮未来征程"
      />
      <Section title="研究院简介" subtitle="传承 · 创新 · 协同 · 包容 · 专业">
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>
            大湾区文化数字研究院是在粤港澳大湾区文化发展战略背景下，为深入贯彻落实「粤港澳大湾区发展规划纲要」及「国家文化数字化战略」而成立的高层次学术创新与产业融合平台。研究院立足于国家级产教融合实践教学基地，致力于通过前沿数字技术挖掘、重构与传播大湾区文化的深厚底蕴。
          </p>
          <p>
            大湾区文化作为中华优秀传统文化的重要组成部分，孕育了璀璨的岭南文明、海上丝绸之路商贸文化、广府粤剧非遗技艺以及客家围屋文化脉络。研究院不仅承担着数字化语境下传承保护湾区文脉的学术使命，更发挥着「政行校企」多主体协同优势，引领文化资源向数字资产的价值转化。
          </p>
        </div>
      </Section>
      <Section title="领导与体系" subtitle="学术研究 + 数字项目 + 融合出版 + 跨界合作">
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>
            研究院依托粤港澳顶尖高校与机构，构建了「学术研究 + 数字项目 + 融合出版 + 跨界合作」四轮驱动的发展体系，重点推进包括湾区非遗数字化项目、大湾区 AI 文创内容生产，以及《大湾区文化遗产数字化保护》等重点研究成果。
          </p>
        </div>
      </Section>
      <Section title="产教融合与产业联盟" subtitle="产学研用一体化生态">
        <div className="mx-auto max-w-3xl space-y-6 text-muted">
          <p>
            作为国家文化数字化战略与产教融合的坚定推动者，研究院发起并依托
            <strong className="text-ink">「大湾区文化创意（数字）产教联盟」</strong>
            ，联合粤港澳主要文化机构、科技企业及高校，深度深化校企协同机制。
          </p>
          <p>
            通过构建
            <strong className="text-ink">「政行校企」多主体协同的治理模式</strong>
            ，研究院成功搭建起集学术研究、数字项目、实训教学与社会服务于一体的
            <strong className="text-ink">「产学研用」全链路生态</strong>
            。依托湾区文化数字交互项目、非遗数字课程以及
            <strong className="text-ink">大湾区文化创意街区</strong>
            等标志性成果，研究院正持续将文化资源转化为具有全国竞争力的数字资产与新型文化业态，全方位扩大湾区文化的社会影响力与辐射效能。
          </p>
        </div>
      </Section>
    </>
  );
}
