import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  { href: "/about", label: "关于我们" },
  { href: "/research", label: "研究方向" },
  { href: "/digital-collections", label: "数字全景" },
  { href: "/outcomes", label: "成果发布" },
  { href: "/industry-alliance", label: "产业联盟" },
  { href: "/cooperation", label: "合作交流" },
  { href: "/classroom", label: "文化课堂" },
  { href: "/contact", label: "联系我们" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-snow">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-serif text-lg font-semibold text-brocade-gold-soft">
              大湾区文化数字研究院
            </h3>
            <p className="mt-2 text-sm text-snow/80">
              湾区文化全景呈现，数字化成果全民共享
            </p>
            <p className="mt-1 text-xs text-snow/60">
              Digital Technology Awakens GBA&apos;s Cultural Veins
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-snow/90">栏目导航</h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-snow/70 transition hover:text-brocade-gold-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-snow/90">联系方式</h4>
            <ul className="mt-3 space-y-2 text-sm text-snow/70">
              <li className="flex items-center gap-2">
                <MapPin size={14} className="shrink-0 text-brocade-gold-soft" />
                广东省广州市
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="shrink-0 text-brocade-gold-soft" />
                请见联系我们页面
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="shrink-0 text-brocade-gold-soft" />
                contact@digitalgba.org.cn
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-snow/90">核心价值观</h4>
            <p className="mt-2 text-xs text-snow/60">
              传承 · 创新 · 协同 · 包容 · 专业
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-snow/20 pt-8 text-center text-xs text-snow/50">
          © {new Date().getFullYear()} 大湾区文化数字研究院 版权所有
        </div>
      </div>
    </footer>
  );
}
