import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { BookOpen, Briefcase, Users } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "classroom.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function ClassroomPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "classroom" });

  const courses = (t.raw("training.courses") as Array<{
    title: string;
    level: string;
    duration: string;
    mode: string;
    desc: string;
  }>);

  const bases = (t.raw("internship.bases") as Array<{
    type: string;
    name: string;
    positions: string[];
  }>);

  const experts = (t.raw("expertHub.experts") as Array<{
    field: string;
    desc: string;
  }>);

  const levelColors: Record<string, string> = {
    "进阶": "bg-bashu-teal/10 text-bashu-teal",
    "实战": "bg-shu-red/10 text-shu-red",
    "应用": "bg-brocade-gold/10 text-brocade-gold",
    "专业": "bg-bashu-bronze/10 text-bashu-bronze",
    "前沿": "bg-ink/10 text-ink",
    "Advanced": "bg-bashu-teal/10 text-bashu-teal",
    "Practical": "bg-shu-red/10 text-shu-red",
    "Applied": "bg-brocade-gold/10 text-brocade-gold",
    "Professional": "bg-bashu-bronze/10 text-bashu-bronze",
    "Frontier": "bg-ink/10 text-ink",
    "進階": "bg-bashu-teal/10 text-bashu-teal",
    "實戰": "bg-shu-red/10 text-shu-red",
    "應用": "bg-brocade-gold/10 text-brocade-gold",
    "專業": "bg-bashu-bronze/10 text-bashu-bronze",
    "前沿zh-TW": "bg-ink/10 text-ink",
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-bashu-teal/90 via-bashu-bronze/90 to-ink py-24 text-center text-snow">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-xs uppercase tracking-widest text-brocade-gold-soft/80">
            Greater Bay Area Culture Digital Institute
          </p>
          <h1 className="mt-4 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
            {t("hero.title")}
          </h1>
          <p className="mt-4 text-lg text-snow/80">{t("hero.subtitle")}</p>
        </div>
      </section>

      {/* Training Courses */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bashu-bronze/10">
              <BookOpen className="h-6 w-6 text-bashu-bronze" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-ink">{t("training.title")}</h2>
              <p className="mt-1 text-muted">{t("training.subtitle")}</p>
            </div>
          </div>

          <p className="mt-6 rounded-xl bg-paper-warm/60 px-4 py-3 text-sm text-foreground/70">
            👥 {t("training.targetAudience")}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.title}
                className="flex flex-col rounded-2xl border border-border bg-snow p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${levelColors[course.level] ?? "bg-paper-warm text-ink"}`}
                  >
                    {t("training.levelLabel")}: {course.level}
                  </span>
                  <span className="text-xs text-muted">{course.duration}</span>
                </div>
                <h3 className="mt-4 font-serif text-base font-semibold text-ink">{course.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">{course.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-muted">
                    {t("training.modeLabel")}: {course.mode}
                  </span>
                  <Link
                    href="/contact"
                    className="rounded-lg bg-bashu-bronze px-4 py-1.5 text-xs font-medium text-snow transition hover:bg-bashu-bronze-light"
                  >
                    {t("training.enrollCta")}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship */}
      <section className="border-t border-border bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bashu-bronze/10">
              <Briefcase className="h-6 w-6 text-bashu-bronze" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-ink">{t("internship.title")}</h2>
              <p className="mt-1 text-muted">{t("internship.subtitle")}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {bases.map((base) => (
              <div key={base.name} className="rounded-2xl border border-border bg-snow p-6 shadow-sm">
                <span className="inline-block rounded-full bg-brocade-gold/10 px-3 py-1 text-xs font-medium text-brocade-gold">
                  {base.type}
                </span>
                <h3 className="mt-3 font-medium text-ink">{base.name}</h3>
                <ul className="mt-3 space-y-1.5">
                  {base.positions.map((pos) => (
                    <li key={pos} className="text-sm text-muted">· {pos}</li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-4 inline-block rounded-lg border border-bashu-bronze px-4 py-1.5 text-xs font-medium text-bashu-bronze transition hover:bg-paper-warm"
                >
                  {t("internship.applyCta")}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-ink px-6 py-6 text-snow">
            <h3 className="font-serif text-lg font-semibold text-brocade-gold-soft">
              {t("internship.entrepreneurTitle")}
            </h3>
            <p className="mt-2 text-sm text-snow/70">{t("internship.entrepreneurDesc")}</p>
          </div>
        </div>
      </section>

      {/* Expert Hub */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bashu-bronze/10">
              <Users className="h-6 w-6 text-bashu-bronze" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-ink">{t("expertHub.title")}</h2>
              <p className="mt-1 text-muted">{t("expertHub.subtitle")}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {experts.map((exp) => (
              <div key={exp.field} className="rounded-2xl border border-border bg-snow p-6 shadow-sm">
                <h3 className="font-serif text-base font-semibold text-bashu-bronze">{exp.field}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="rounded-full bg-bashu-bronze px-8 py-3 text-sm font-semibold text-snow transition hover:bg-bashu-bronze-light"
            >
              {t("expertHub.consultCta")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
