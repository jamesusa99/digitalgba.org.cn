import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata = {
  title: "合作交流 | 巴蜀文化数字研究院",
  description: "校地合作、社会服务与共创",
};

export default function CooperationPage() {
  return (
    <>
      <PageHero
        title="合作交流"
        subtitle="校地合作、社会服务与共创"
      />
      <Section title="合作方向" subtitle="政府、高校、企业与社会机构">
        <div className="mx-auto max-w-3xl space-y-4 text-muted">
          <p>
            与地方政府文旅部门、文博机构、高校及企业开展数字文化项目合作，推动成果落地与共享。
          </p>
          <p className="mt-4">
            本页可补充合作案例、洽谈方式与联系方式。
          </p>
        </div>
      </Section>
    </>
  );
}
