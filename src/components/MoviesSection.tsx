import SectionHeader from "./SectionHeader";
import LinkCard from "./LinkCard";
import ImageCarousel from "./ImageCarousel";
import { Film } from "lucide-react";
import { motion } from "framer-motion";
import carouselMovies from "@/assets/carousel-movies.jpg";

const MoviesSection = () => (
  <section id="movies" className="mx-auto max-w-6xl px-4 py-20">
    <SectionHeader title="MOVIES & STREAMING" subtitle="Watch shows and movies during your free time" icon={Film} />
    <div className="mx-auto max-w-3xl mb-8">
      <ImageCarousel images={[
        { src: carouselMovies, alt: "Cyberpunk cinema", caption: "300-1000+ movies available for streaming" },
      ]} autoPlay={false} />
    </div>
    <motion.div
      className="mx-auto max-w-3xl space-y-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="rounded-xl border border-border bg-card p-6">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Although Some Stuff isn't much in games, since most of it don't work, it's still pretty reliable for borrowed streaming. You can watch all types of shows in this proxy! The gaming tab is available but unreliable — however you can go watch TV in the live TV tab, or go to the streaming tab to watch anywhere from 300 to a thousand borrowed movies!
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <LinkCard
          title="SomeStuff Proxy"
          url="https://sites.google.com/view/smithper42025-2026trimenster3/some-stuff"
          recommended
          description="300-1000+ movies available via streaming tab"
        />
        <LinkCard
          title="Videos Collection"
          url="https://sites.google.com/view/smithper42025-2026trimenster3/videos"
          description="Video links collection"
        />
        <LinkCard
          title="Universal Movies (30k+ links)"
          url="https://docs.google.com/document/d/15vlrgUvy3LPyaVCr-_3JcxogJvTGcHos4j6R-9d-eOc/edit?tab=t.c2qjmyt0tcji"
          recommended
          description="One year of movie links — 30,000+"
        />
        <LinkCard
          title="UGS Files"
          url="https://drive.google.com/drive/folders/1ou3mI5xJVQv8Vt_MvwejPtf7zStSnU-s"
          description="Google Drive resources"
        />
      </div>
    </motion.div>
  </section>
);

export default MoviesSection;
