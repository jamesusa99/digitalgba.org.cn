import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata = {
  title: "关于我们 | 巴蜀文化数字研究院",
  description: "了解巴蜀文化数字研究院的使命、愿景与团队",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="关于我们"
        subtitle="数字科技唤醒巴蜀文脉，文化遗产照亮未来征程"
      />
      <Section title="研究院简介" subtitle="使命与愿景">
        <div className="mx-auto max-w-3xl space-y-4 text-muted">
          <p>
            巴蜀文化数字研究院集学术研究、数字展示、创新应用、产教融合及产业联盟于一体，
            致力于全景呈现巴蜀文化、推动数字化成果普惠共享。
          </p>
          <p className="mt-4">
            本页内容可根据实际介绍补充完善。
          </p>
        </div>
      </Section>
    </>
  );
}
