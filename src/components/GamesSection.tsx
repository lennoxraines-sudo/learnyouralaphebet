import SectionHeader from "./SectionHeader";
import LinkCard from "./LinkCard";
import ImageCarousel from "./ImageCarousel";
import { ScrollFlipIn, ScrollZoomIn } from "./ScrollAnimations";
import { Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";
import carouselGaming from "@/assets/carousel-gaming.jpg";
import carouselArcade from "@/assets/carousel-arcade.jpg";

const games = [
  { title: "DOOM", url: "https://incrediblewebsite.github.io/doom", description: "Arrow keys and Ctrl to play" },
  { title: "Idle Breakout", url: "https://incrediblewebsite.github.io/idlebreakout/" },
  { title: "Cookie Clicker", url: "https://incrediblewebsite.github.io/cookieclicker/" },
  { title: "Kaizo Cookies", url: "https://plasma4.github.io/kaizo-cookies/", description: "A harder Cookie Clicker experience" },
  { title: "Minecraft", url: "https://oldmillschool.org/iframe.html" },
  { title: "Big Ice Tower Tiny Square", url: "https://incrediblewebsite.github.io/bigicetowertinysquare/" },
  { title: "Scratch — FNAF", url: "https://scratch.mit.edu/projects/1231016758/fullscreen/" },
  { title: "Five Nights at Epstein's", url: "https://sites.google.com/view/smithper42025-2026trimenster3/five-nights-at-epsteins" },
  { title: "RUN 3", url: "https://incrediblewebsite.github.io/run3/" },
  { title: "SLOPE", url: "https://incrediblewebsite.github.io/slope/" },
  { title: "Meme Soundboard", url: "https://soundboardguys.com/", description: "#1 way to annoy teachers and students" },
  { title: "Blooket Hacks", url: "https://docs.google.com/document/d/10dcFBbj3YKHmsAVORQF6u9zp_ukofnvs6kmB-0leGF8/edit?tab=t.0" },
  { title: "PC Games (GitHub)", url: "https://github.com/Project-Bradnails/Bradnails/commit/d967e7e572e7cd04137a3140f53becd3cc05b484#diff-4372ef01d848d6fc93a6a60d9bdc6b08364f4bfb5e3aa23974b01ab4dd3b40deR149-R151", description: "Most might not work because of .exe files" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.04 } } };
const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } };

const GamesSection = () => (
  <section id="games" className="mx-auto max-w-6xl px-4 py-20">
    <SectionHeader title="GAMES" subtitle="Direct links to playable games" icon={Gamepad2} />
    <div className="mb-8">
      <ImageCarousel images={[
        { src: carouselGaming, alt: "Gaming setup", caption: "Unblocked gaming at its finest" },
        { src: carouselArcade, alt: "Retro arcade", caption: "Classic arcade titles available" },
      ]} />
    </div>
    <motion.div
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
    >
      {games.map((g) => (
        <motion.div key={g.url} variants={item}>
          <LinkCard {...g} />
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default GamesSection;
