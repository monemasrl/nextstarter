import styles from "./page.module.scss";
import { unstable_setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("home");

  return <main className={styles.main}>{t("titolo")}</main>;
}
