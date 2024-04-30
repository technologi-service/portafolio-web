import { MacbookScrollDemo } from "@/components/About";
import { BackgroundBeam } from "@/components/Footer";
import { HeroHighlightDemo } from "@/components/Hero";
import { ContentNav } from "@/components/Navbar";
import { TracingBeamPage } from "@/components/Projects";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main className="wrapper">
      <ContentNav />
      <HeroHighlightDemo />
      <MacbookScrollDemo />
      <Services />
      <TracingBeamPage />

      <BackgroundBeam />
    </main>
  );
}
