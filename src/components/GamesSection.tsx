import { useState } from "react";
import SectionHeader from "./SectionHeader";
import LinkCard from "./LinkCard";
import ImageCarousel from "./ImageCarousel";
import { ScrollFlipIn, ScrollZoomIn } from "./ScrollAnimations";
import { Gamepad2, ChevronDown, ChevronUp, Download } from "lucide-react";
import { motion } from "framer-motion";
import carouselGaming from "@/assets/carousel-gaming.jpg";
import carouselArcade from "@/assets/carousel-arcade.jpg";
import { originalGames, driveGames } from "@/data/games";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.04 } } };
const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } };

const GamesSection = () => {
  const [showDriveGames, setShowDriveGames] = useState(false);

  return (
    <section id="games" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeader title="GAMES" subtitle={`Direct links to ${originalGames.length + driveGames.length}+ playable games`} icon={Gamepad2} />
      <ScrollFlipIn>
        <div className="mb-8">
          <ImageCarousel images={[
            { src: carouselGaming, alt: "Gaming setup", caption: "Unblocked gaming at its finest" },
            { src: carouselArcade, alt: "Retro arcade", caption: "Classic arcade titles available" },
          ]} />
        </div>
      </ScrollFlipIn>

      {/* Original direct-play games */}
      <motion.div
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
      >
        {originalGames.map((g) => (
          <motion.div key={g.url} variants={item}>
            <ScrollZoomIn>
              <LinkCard {...g} />
            </ScrollZoomIn>
          </motion.div>
        ))}
      </motion.div>

      {/* Downloadable HTML games toggle */}
      <div className="mt-8">
        <button
          onClick={() => setShowDriveGames(!showDriveGames)}
          className="mx-auto flex items-center gap-2 rounded-lg border border-border bg-card/50 px-6 py-3 font-display text-sm text-foreground backdrop-blur transition-colors hover:bg-primary/10"
        >
          <Download className="h-4 w-4 text-primary" />
          {showDriveGames ? "Hide" : "Show"} {driveGames.length}+ Downloadable HTML Games
          {showDriveGames ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        <p className="mt-2 text-center text-xs text-muted-foreground">Download the .html file and open it in your browser</p>
      </div>

      {showDriveGames && (
        <motion.div
          className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.4 }}
        >
          {driveGames.map((g) => (
            <a
              key={g.url}
              href={g.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-border bg-card/30 px-3 py-2 text-sm text-foreground transition-colors hover:border-primary/50 hover:bg-primary/5"
            >
              <Gamepad2 className="h-3.5 w-3.5 shrink-0 text-primary" />
              <span className="truncate">{g.title}</span>
            </a>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default GamesSection;
