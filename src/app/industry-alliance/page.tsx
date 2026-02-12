import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata = {
  title: "产业联盟 | 巴蜀文化数字研究院",
  description: "汇聚产业力量，价值共赢",
};

export default function IndustryAlliancePage() {
  return (
    <>
      <PageHero
        title="产业联盟"
        subtitle="汇聚产业力量，价值共赢"
      />
      <Section title="联盟介绍" subtitle="成员、权益与加入方式">
        <div className="mx-auto max-w-3xl space-y-4 text-muted">
          <p>
            产业联盟汇聚文博、文旅、科技、教育等机构，共同推动巴蜀文化数字化转型与产业应用。
          </p>
          <p className="mt-4">
            本页可补充联盟章程、成员名单、年度峰会与加入申请方式。
          </p>
        </div>
      </Section>
    </>
  );
}
