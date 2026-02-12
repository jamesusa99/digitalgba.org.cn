import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata = {
  title: "研究方向 | 巴蜀文化数字研究院",
  description: "巴蜀文化数字化研究项目与学术方向",
};

export default function ResearchPage() {
  return (
    <>
      <PageHero
        title="研究方向"
        subtitle="数字巴蜀文脉与知识图谱"
      />
      <Section title="研究板块" subtitle="学术研究与实践项目">
        <div className="mx-auto max-w-3xl space-y-4 text-muted">
          <p>
            研究院围绕巴蜀文化遗产的数字化保存、知识图谱构建、数字藏品与沉浸式体验等方向开展研究。
          </p>
          <p className="mt-4">
            本页可补充具体研究项目、团队与成果。
          </p>
        </div>
      </Section>
    </>
  );
}
