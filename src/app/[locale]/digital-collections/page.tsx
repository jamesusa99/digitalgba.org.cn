import { redirect } from "next/navigation";

export default async function DigitalCollectionsRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/culture-system`);
}
