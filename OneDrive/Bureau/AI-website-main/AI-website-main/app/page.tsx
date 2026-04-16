import MeshBackground from "@/components/MeshBackground";
import CursorGlow from "@/components/CursorGlow";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProcessRail from "@/components/ProcessRail";
import BentoWork from "@/components/BentoWork";
import Manifesto from "@/components/Manifesto";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <MeshBackground />
      <CursorGlow />
      <Nav />
      <Hero />
      <Services />
      <ProcessRail />
      <BentoWork />
      <Manifesto />
      <FinalCTA />
      <Footer />
    </main>
  );
}
