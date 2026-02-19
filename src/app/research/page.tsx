import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata = {
  title: "研究方向 | 巴蜀文化数字研究院",
  description:
    "国家文化数字化战略下，研究院聚焦文化大数据与标准化、人工智能+文化生产力、数字消费新场景，以及文化资源资产化、产教融合、红色民族文化保护、文化普惠四大板块。",
};

export default function ResearchPage() {
  return (
    <>
      <PageHero
        title="研究方向"
        subtitle="国家战略驱动，四轮板块协同"
      />
      <Section
        title="国家战略维度的核心研究方向"
        subtitle="国家文化数字化战略旨在构建从资源到生产、传播、消费的全新体系"
      >
        <div className="mx-auto max-w-4xl space-y-12">
          {/* 方向 1：文化大数据体系与标准化研究 */}
          <div className="rounded-2xl border border-border bg-snow p-6 shadow-sm sm:p-8">
            <h3 className="font-serif text-xl font-semibold text-ink">
              1. 文化大数据体系与标准化研究
            </h3>
            <p className="mt-1 text-sm text-muted">
              数字化战略的「底座」
            </p>
            <ul className="mt-4 space-y-3 text-muted">
              <li>
                <strong className="text-ink">文化数据标识与关联技术：</strong>
                研究如何将碎片化的巴蜀文化资源（如散落在民间的非遗技艺、地市州的文物数据）通过统一标识体系进行关联，打通数据孤岛。
              </li>
              <li>
                <strong className="text-ink">文化数据确权与价值评估：</strong>
                针对文化资源转化为「数据资产」的过程，研究数字化版权保护、技术确权评估及数据要素的价值生成逻辑。
              </li>
              <li>
                <strong className="text-ink">行业标准制订：</strong>
                利用研究院在产教联盟中的地位，主导或参与制定巴蜀文化数字艺术品、数字化课程的行业标准。
              </li>
            </ul>
          </div>

          {/* 方向 2：「人工智能+」文化生产力研究 */}
          <div className="rounded-2xl border border-border bg-snow p-6 shadow-sm sm:p-8">
            <h3 className="font-serif text-xl font-semibold text-ink">
              2. 「人工智能+」文化生产力研究
            </h3>
            <p className="mt-1 text-sm text-muted">
              响应国家「人工智能赋能新型工业化」及四川省「智改数转」行动
            </p>
            <ul className="mt-4 space-y-3 text-muted">
              <li>
                <strong className="text-ink">垂直领域大模型应用：</strong>
                研发专门针对巴蜀文化、文博垂类的多模态大模型，支持自动化数据标注与创意内容生成。
              </li>
              <li>
                <strong className="text-ink">数字化语境下的「活态传承」：</strong>
                研究如何利用数字技术「重构语境」，将技术的虚拟性转化为文化的「在场性」，解决非遗传承中技术工具与文化价值的矛盾。
              </li>
              <li>
                <strong className="text-ink">AIGC 辅助艺术设计：</strong>
                探索 AI 在蜀锦纹样设计、川剧剧本辅助创作及数字人教师引导等场景的深度集成。
              </li>
            </ul>
          </div>

          {/* 方向 3：数字文化消费新场景与体验研究 */}
          <div className="rounded-2xl border border-border bg-snow p-6 shadow-sm sm:p-8">
            <h3 className="font-serif text-xl font-semibold text-ink">
              3. 数字文化消费新场景与体验研究
            </h3>
            <p className="mt-1 text-sm text-muted">
              发力需求侧，推动文化产业布局向智能化、沉浸化转型
            </p>
            <ul className="mt-4 space-y-3 text-muted">
              <li>
                <strong className="text-ink">沉浸式文旅集成技术：</strong>
                依托北京大学等合作单位的技术支撑，攻关「构建-融合-交互-呈现-评价」全链条技术引擎。
              </li>
              <li>
                <strong className="text-ink">数实融合消费场景：</strong>
                研究「农文旅+电竞+电商+文创」的多维融合模式，打造如巴蜀文化创意街区等城市消费新地标。
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        title="扩展后的四大研究板块"
        subtitle="丰富版研究架构"
      >
        <div className="mx-auto max-w-4xl space-y-10">
          {/* 板块 1 */}
          <div className="rounded-2xl border border-bashu-bronze/30 bg-paper-warm p-6 sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-ink">
              板块 1：文化资源数字化资产化平台
            </h3>
            <ul className="mt-4 space-y-2 text-muted">
              <li>
                <strong className="text-ink">数据采集与加工：</strong>
                开展全省一体化文化数据体系建设，统筹利用文化普查成果进行高清采集与清洗。
              </li>
              <li>
                <strong className="text-ink">文化资产重点实验室：</strong>
                聚焦文化数据标注、数字艺术品存证生成，推动文化资源向「数字资本」转化。
              </li>
            </ul>
          </div>

          {/* 板块 2 */}
          <div className="rounded-2xl border border-bashu-bronze/30 bg-paper-warm p-6 sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-ink">
              板块 2：产教深度融合与人才培育生态
            </h3>
            <ul className="mt-4 space-y-2 text-muted">
              <li>
                <strong className="text-ink">市域产教联合体：</strong>
                发挥「政行校企」多主体协同优势，申报国家级产教联合体，解决人才培养与产业需求「两张皮」问题。
              </li>
              <li>
                <strong className="text-ink">数字化教学改革：</strong>
                共建 AIGC 实训平台，开发数字化系列教材，培养具备数字素养的复合型文化产业人才。
              </li>
            </ul>
          </div>

          {/* 板块 3 */}
          <div className="rounded-2xl border border-bashu-bronze/30 bg-paper-warm p-6 sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-ink">
              板块 3：红色文化与民族文化数字化保护
            </h3>
            <ul className="mt-4 space-y-2 text-muted">
              <li>
                <strong className="text-ink">红色基因库建设：</strong>
                如「云景长征」项目，通过数字化手段传承红色精神，为长征胜利九十周年献礼。
              </li>
              <li>
                <strong className="text-ink">藏羌彝走廊文旅融合：</strong>
                研究跨民族地区的文化数字化呈现，促进民族交流与区域高质量增长。
              </li>
            </ul>
          </div>

          {/* 板块 4 */}
          <div className="rounded-2xl border border-bashu-bronze/30 bg-paper-warm p-6 sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-ink">
              板块 4：文化普惠与社会服务场景
            </h3>
            <ul className="mt-4 space-y-2 text-muted">
              <li>
                <strong className="text-ink">银发经济数字化：</strong>
                针对老龄化社会需求，研发「银龄研学」数字课程，推动养老教育数字化转型。
              </li>
              <li>
                <strong className="text-ink">智慧文博与社区赋能：</strong>
                将数字化成果通过「缤果课堂」等平台引入社区与中小学，实现成果全民共享。
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
