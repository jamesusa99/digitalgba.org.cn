import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata = {
  title: "成果发布 | 巴蜀文化数字研究院",
  description: "研究院数字化成果与案例发布",
};

export default function OutcomesPage() {
  return (
    <>
      <PageHero
        title="成果发布"
        subtitle="数字化成果与示范案例"
      />
      <Section title="成果与案例" subtitle="项目成果、论文与获奖">
        <div className="mx-auto max-w-3xl space-y-4 text-muted">
          <p>
            发布研究院在文化数字化领域的项目成果、学术论文、示范案例及合作成果。
          </p>
          <p className="mt-4">
            本页可补充成果列表、时间线与详情链接。
          </p>
        </div>
      </Section>
    </>
  );
}
