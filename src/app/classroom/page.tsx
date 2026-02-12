import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata = {
  title: "文化课堂 | 巴蜀文化数字研究院",
  description: "巴蜀文化课程与实训平台",
};

export default function ClassroomPage() {
  return (
    <>
      <PageHero
        title="文化课堂"
        subtitle="课程与实训平台"
      />
      <Section title="课程与实训" subtitle="产教融合、数字文创实践">
        <div className="mx-auto max-w-3xl space-y-4 text-muted">
          <p>
            提供巴蜀文化相关数字文创实训、文化大数据实践、VR/AR 体验设计等课程与实训资源。
          </p>
          <p className="mt-4">
            本页可补充课程列表、报名入口与学习资源链接。
          </p>
        </div>
      </Section>
    </>
  );
}
