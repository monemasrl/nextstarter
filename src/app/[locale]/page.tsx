import HeroVideo from "@/components/heros/video/HeroVideo";
import styles from "./page.module.scss";
import { unstable_setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import heroData from "../../../public/data/hero.json";
import Parallax from "@/components/parallax/parallax";
import AnimatedSection from "@/components/mainLayoutComponents/sections/animatedSection";

/**
 * PAGINA
 * Utilizzare le pagine per fetchare i dati e passarli ai componenti
 * Mantenere le pagine componenti server-side
 * Passare i dati ai componenti tramite props
 */

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
      <Parallax imageURL="/image/mainimage.jpg" alt="test" height="300px" />
      <AnimatedSection>
        <h2>porcoddio</h2>
      </AnimatedSection>
    </main>
  );
}
