import { MacbookScrollDemo } from "@/components/About";
import { HeroHighlightDemo } from "@/components/Hero";
import { ContentNav } from "@/components/Navbar";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main className="wrapper">
      <ContentNav />
      <HeroHighlightDemo />
      <MacbookScrollDemo />
      <Services />
    </main>
  );
}
