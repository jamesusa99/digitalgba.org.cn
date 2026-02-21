import type { Metadata } from "next";
import { Noto_Sans_SC, Noto_Serif_SC, Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

// Chinese fonts
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

// Latin / English fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "site" });

  return {
    metadataBase: new URL("https://digitalgba.org.cn"),
    title: t("title"),
    description: t("description"),
    keywords: ["大湾区文化", "数字研究院", "文化遗产", "数字藏品", "产业联盟", "粤港澳", "GBA culture", "digital heritage"],
    openGraph: {
      title: t("name"),
      description: t("tagline"),
      url: "https://digitalgba.org.cn",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "zh-CN" | "zh-TW" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  const htmlLang =
    locale === "zh-CN" ? "zh-Hans" : locale === "zh-TW" ? "zh-Hant" : "en";

  const isEnglish = locale === "en";

  return (
    <html lang={htmlLang}>
      <body
        className={`${notoSans.variable} ${notoSerif.variable} ${inter.variable} ${playfair.variable} min-h-screen antialiased ${isEnglish ? "font-en" : ""}`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
