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

const GamesSection = () => (
  <section id="games" className="mx-auto max-w-6xl px-4 py-20">
    <SectionHeader title="GAMES" subtitle="Direct links to playable games" icon={Gamepad2} />
    <ScrollFlipIn>
      <div className="mb-8">
        <ImageCarousel images={[
          { src: carouselGaming, alt: "Gaming setup", caption: "Unblocked gaming at its finest" },
          { src: carouselArcade, alt: "Retro arcade", caption: "Classic arcade titles available" },
        ]} />
      </div>
    </ScrollFlipIn>
    <motion.div
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
    >
      {games.map((g) => (
        <motion.div key={g.url} variants={item}>
          <ScrollZoomIn>
            <LinkCard {...g} />
          </ScrollZoomIn>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default GamesSection;
