import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-14">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(155 100% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(155 100% 50% / 0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <motion.div
        className="relative text-center"
        style={{ y, scale, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs text-primary">
            <Zap className="h-3 w-3" /> V2 — Fun in just two steps!
          </div>
          <h1 className="font-display text-5xl font-black tracking-tight text-foreground text-glow-strong md:text-7xl lg:text-8xl">
            YOYO'S<br />
            <span className="text-primary">NETWORK</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Your gateway to unblocked entertainment during school hours. Games, proxies, movies & more — all in one place.
          </p>
          <p className="mt-2 text-xs text-muted-foreground/60 italic">
            {"{original content credited to Joshua}"} — Shout out to Lennox, Bryce, and Juan
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#proxies" className="rounded-lg bg-primary px-6 py-2.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:box-glow-strong">
              Explore Proxies
            </a>
            <a href="#games" className="rounded-lg border border-border px-6 py-2.5 font-display text-sm font-semibold text-foreground transition-all hover:border-primary/50">
              Browse Games
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#caution"
        className="absolute bottom-8 text-muted-foreground hover:text-primary transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
