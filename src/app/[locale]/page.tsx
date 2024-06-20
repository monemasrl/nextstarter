import HeroVideo from "@/components/heros/video/HeroVideo";
import styles from "./page.module.scss";
import { unstable_setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import heroData from "../../../public/data/hero.json";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("home");
  const HeroDataLang = heroData[locale as keyof typeof heroData];

  return (
    <main className={styles.main}>
      {t("titolo")}
      <HeroVideo videoURL={"/video/vts.mp4"} data={HeroDataLang} />
    </main>
  );
}
