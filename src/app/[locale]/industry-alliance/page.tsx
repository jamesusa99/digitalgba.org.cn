import { redirect } from "next/navigation";

export default async function IndustryAllianceRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/industry`);
}
