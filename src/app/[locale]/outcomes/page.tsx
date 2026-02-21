import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
export const metadata = {
  title: "成果发布 | 大湾区文化数字研究院",
  description:
    "研究院数字化重大项目成果、融合出版与学术研究、数字化教育与产教融合、社会服务与文化传播等核心产出与示范案例。",
};

export default function OutcomesPage() {
  return (
    <>
      <PageHero
        title="成果发布"
        subtitle="数字化成果与示范案例"
      />
      {/* 一、数字化重大项目成果 */}
      <Section
        title="数字化重大项目成果"
        subtitle="Digital Projects · 全景呈现大湾区文化的核心硬核产出"
      >
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="rounded-2xl border border-border bg-snow p-6 shadow-sm sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-ink">
              「湾区文脉」数字化交互项目
            </h3>
            <p className="mt-3 text-muted">
              利用 AR/VR/AI 融合技术，打造集教育、展示、体验于一体的大湾区文化数字化交互平台，构建「构建-融合-交互-呈现-评价」全链条技术引擎。
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-snow p-6 shadow-sm sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-ink">
              文化数字艺术品交易平台
            </h3>
            <p className="mt-3 text-muted">
              第一阶段建设已完成并上线运营，纳入全国文化大数据交易中心重点支持范围，推动湾区文化数字藏品发行与交易。
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-snow p-6 shadow-sm sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-ink">
              大湾区文化数字资源库
            </h3>
            <p className="mt-3 text-muted">
              开展文化数据标注、资产确权评估，推动大湾区优秀传统文化数字资源转化为文化数字资产。
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-snow p-6 shadow-sm sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-ink">
              大湾区文化创意街区
            </h3>
            <p className="mt-3 text-muted">
              建设开放型产教融合实践教学基地，涵盖文化品牌发布中心、电竞赛事中心等数字化新型文化业态。
            </p>
          </div>
        </div>
      </Section>

      {/* 二、融合出版与学术研究 */}
      <Section
        title="融合出版与学术研究"
        subtitle="Publications & Research · 文化内容数字化的专业深度"
      >
        <div className="mx-auto max-w-4xl space-y-8">
          <div>
            <h3 className="font-serif text-lg font-semibold text-ink">
              国家级重点图书项目
            </h3>
            <ul className="mt-4 space-y-3 text-muted">
              <li className="rounded-xl border border-border bg-paper-warm p-4">
                《大湾区非物质文化遗产数字化保护研究》（列入重点出版规划）
              </li>
              <li className="rounded-xl border border-border bg-paper-warm p-4">
                《岭南文化数字传承丛书》（第一辑、第二辑）
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-ink">
              学术交流与智库建设
            </h3>
            <ul className="mt-4 space-y-3 text-muted">
              <li>
                编发《大湾区文化数字研究院工作简报》，系统记录数字化转型实践历程
              </li>
              <li>
                参与「沉浸式文旅体验技术集成与场景创新」等国家文旅部衍生课题研究
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 三、数字化教育与产教融合 */}
      <Section
        title="数字化教育与产教融合"
        subtitle="Education & Integration · 产学研用一体化成果"
      >
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="rounded-2xl border border-border bg-snow p-6 shadow-sm sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-ink">
              数字化精品课程研发
            </h3>
            <p className="mt-3 text-muted">
              开发完成《粤绣的故事》《醒狮精神》《岭南建筑》《海丝记忆》等非遗手工系列数字化课程共 4 门（30 课时）。
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-snow p-6 shadow-sm sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-ink">
              AI 赋能实训平台
            </h3>
            <p className="mt-3 text-muted">
              联合粤港澳高校共同研发 AIGC 公选课及实训平台，提升学生人工智能素养与文化创意能力。
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-snow p-6 shadow-sm sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-ink">
              产教联盟生态构建
            </h3>
            <p className="mt-3 text-muted">
              发起成立「大湾区文化创意（数字）产教联盟」，连接粤港澳三地机构，构建统一的供应链与标准价值体系。
            </p>
          </div>
        </div>
      </Section>

      {/* 四、社会服务与文化传播 */}
      <Section
        title="社会服务与文化传播"
        subtitle="Social Service · 数字化成果全民共享"
      >
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="rounded-2xl border border-border bg-snow p-6 shadow-sm sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-ink">
              「空中课堂」支教服务
            </h3>
            <p className="mt-3 text-muted">
              将数字化文化课程引入粤东粤西等欠发达地区，助力教育均衡发展与文化普惠。
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-snow p-6 shadow-sm sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-ink">
              社区与校园推广
            </h3>
            <p className="mt-3 text-muted">
              数字化课程已进入大湾区多所中小学及社区，在线学习人数持续增长，文化普惠效果显著。
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-snow p-6 shadow-sm sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-ink">
              银发经济专题研究
            </h3>
            <p className="mt-3 text-muted">
              针对养老需求研发数字化特色研学课程，推动文化助老、赋能老龄产业发展。
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
