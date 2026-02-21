import { redirect } from "next/navigation";

export default async function OutcomesRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/research`);
}
