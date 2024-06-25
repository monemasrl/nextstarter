import HeroVideo from "@/components/heros/video/HeroVideo";
import styles from "./page.module.scss";
import { unstable_setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import heroData from "../../../public/data/hero.json";
import Parallax from "@/components/parallax/parallax";
import AnimatedSection from "@/components/mainLayoutComponents/sections/animatedSection";
import LeafletMain from "@/components/map/Leaflet";
import SliderTimer from "@/components/sliders/sliderTimer";

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
  const t = await getTranslations("generics");
  const HeroDataLang = heroData[locale as keyof typeof heroData];
  const address = {
    city: t("cittaName"),
    street: t("indirizzoName"),
    number: t("numeroCivicoName"),
  };
  return (
    <main className={styles.main}>
      <HeroVideo videoURL={"/video/video.mp4"} data={HeroDataLang} />
      <AnimatedSection>
        <SliderTimer
          data={[
            { image: "/image/mainimage.jpg", titolo: "mannaggia" },
            {
              image: "/image/mainimage2.jpg",
              titolo: "mannaggia mannaggia",
            },
          ]}
        />
      </AnimatedSection>
      <Parallax imageURL="/image/mainimage2.jpg" alt="test" height="300px" />
      <AnimatedSection>
        <h2>test</h2>
      </AnimatedSection>
      <AnimatedSection>
        <LeafletMain address={address} />
      </AnimatedSection>
    </main>
  );
}
