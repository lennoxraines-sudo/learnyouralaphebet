import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ThemeChanger from "@/components/ThemeChanger";
import ParticleBackground from "@/components/ParticleBackground";
import CautionSection from "@/components/CautionSection";
import ProxiesSection from "@/components/ProxiesSection";
import GamesSection from "@/components/GamesSection";
import MoviesSection from "@/components/MoviesSection";
import ToolsSection from "@/components/ToolsSection";
import DeadProxiesSection from "@/components/DeadProxiesSection";
import VersionsSection from "@/components/VersionsSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <ThemeChanger />
    <HeroSection />
    <CautionSection />
    <ProxiesSection />
    <GamesSection />
    <MoviesSection />
    <ToolsSection />
    <DeadProxiesSection />
    <VersionsSection />
    <footer className="border-t border-border py-8 text-center">
      <p className="font-display text-xs text-muted-foreground">
        YOYO'S NETWORK V2 — yoyosnetwork.com
      </p>
    </footer>
  </div>
);

export default Index;
