import { SiteNavigation } from "@/components/navigation/SiteNavigation";
import { ScrollRevealController } from "@/components/motion/ScrollRevealController";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HomeAbout } from "@/components/sections/HomeAbout";
import { HomeContext } from "@/components/sections/HomeContext";
import { HomeFinalCta } from "@/components/sections/HomeFinalCta";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeProjects } from "@/components/sections/HomeProjects";
import { HomeServices } from "@/components/sections/HomeServices";
import { HomeWorkProcess } from "@/components/sections/HomeWorkProcess";

export default function Home() {
  return (
    <>
      <SiteNavigation />
      <div className="home-canvas">
        <ScrollRevealController />
        <main>
          <HomeHero />
          <HomeContext />
          <HomeServices />
          <HomeWorkProcess />
          <HomeProjects />
          <HomeAbout />
          <HomeFinalCta />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
