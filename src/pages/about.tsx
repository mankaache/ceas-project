import {
  Activities,
  BaseLayout,
  HeroSection,
  MissionVision,
  OurTeam,
  WhoWeAre,
} from "@/components";
import OurPartners from "@/components/PageSegments/About/OurPartners";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const About = () => {
  return (
    <BaseLayout>
      <HeroSection />
      <WhoWeAre />
      <MissionVision />
      <OurTeam />
      <Activities />
      <OurPartners />
    </BaseLayout>
  );
};

export default About;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "about"])),
    },
  };
}
