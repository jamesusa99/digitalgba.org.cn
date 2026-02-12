import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata = {
  title: "数字全景 | 巴蜀文化数字研究院",
  description: "巴蜀文化数字藏品与沉浸式体验",
};

export default function DigitalCollectionsPage() {
  return (
    <>
      <PageHero
        title="数字全景"
        subtitle="数字藏品与沉浸式体验"
      />
      <Section title="数字展示" subtitle="探索巴蜀文化数字化成果">
        <div className="mx-auto max-w-3xl space-y-4 text-muted">
          <p>
            汇聚三星堆、川剧、非遗等巴蜀文化数字藏品与虚拟展陈，提供线上沉浸式浏览与互动体验。
          </p>
          <p className="mt-4">
            本页可接入数字藏品列表、3D/VR 展示入口等。
          </p>
        </div>
      </Section>
    </>
  );
}
