import type { Metadata } from "next";
import { Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const notoSans = Noto_Sans_SC({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSerif = Noto_Serif_SC({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digitalgba.org.cn"),
  title: "大湾区文化数字研究院 | 湾区文化全景呈现，数字化成果全民共享",
  description:
    "数字科技激活湾区文脉，文化遗产照亮未来征程。集学术研究、数字展示、创新应用、产教融合及产业联盟于一体，致力于全景呈现大湾区文化、推动数字化成果普惠共享。",
  keywords: ["大湾区文化", "数字研究院", "文化遗产", "数字藏品", "产业联盟", "粤港澳"],
  openGraph: {
    title: "大湾区文化数字研究院",
    description: "湾区文化全景呈现，数字化成果全民共享",
    url: "https://digitalgba.org.cn",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${notoSans.variable} ${notoSerif.variable} min-h-screen antialiased`}
      >
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
