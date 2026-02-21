import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "联系我们 | 大湾区文化数字研究院",
  description:
    "大湾区文化数字研究院联系方式。诚邀校企合作、产教融合项目、学术交流及文化数字化创新伙伴。",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="联系我们"
        subtitle="诚邀校企合作、产教融合项目、学术交流及文化数字化创新伙伴"
      />
      <Section title="合作与咨询" subtitle="我们欢迎以下方向的洽谈">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-3 rounded-xl border border-border bg-paper-warm p-6">
            <p className="text-muted">
              研究院致力于大湾区文化全景呈现与数字化成果全民共享，诚挚欢迎各方在以下领域与我们开展合作：
            </p>
            <ul className="list-inside list-disc space-y-1.5 text-muted">
              <li>校企合作与产教融合项目（粤港澳产教联合体、AIGC 实训平台共建等）</li>
              <li>大湾区文化创意（数字）产教联盟加入与资源对接</li>
              <li>文化数字化、数字藏品、沉浸式文旅等技术研发与项目合作</li>
              <li>学术交流、联合课题及成果出版</li>
              <li>岭南文化、海丝文化数字化保护与传播合作</li>
            </ul>
          </div>
        </div>
      </Section>
      <Section title="联系方式" subtitle="地址、电话与邮箱">
        <div className="mx-auto max-w-2xl space-y-6 rounded-2xl border border-border bg-snow p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-bashu-bronze" />
            <div>
              <p className="font-medium text-ink">地址</p>
              <p className="text-muted">
                广东省广州市
                <span className="mt-1 block text-sm">（具体地址待确认）</span>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-bashu-bronze" />
            <div>
              <p className="font-medium text-ink">电话</p>
              <p className="text-muted">
                待更新
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-bashu-bronze" />
            <div>
              <p className="font-medium text-ink">邮箱</p>
              <p className="text-muted">contact@digitalgba.org.cn</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
