import SectionHeader from "./SectionHeader";
import { ScrollZoomIn } from "./ScrollAnimations";
import { Skull } from "lucide-react";
import { motion } from "framer-motion";

const deadProxies = [
  { name: "Original Proxy Network", url: "https://sites.google.com/view/educational-math-me/home_1" },
  { name: "Hypackel", url: "https://sites.google.com/view/educational-math-me/pr0xi3s/hypackel" },
  { name: "UBSG3", url: "https://sites.google.com/view/educational-math-me/pr0xi3s/ubsg3" },
  { name: "S3B-T00L", url: "https://sites.google.com/view/educational-math-me/pr0xi3s/s3b-t00l", note: "Too many ads" },
  { name: "Quasar", url: "https://dmectexas.org/g" },
  { name: "Froggie's", url: "https://classlink.riversideacademy.site/" },
];

const DeadProxiesSection = () => (
  <section className="mx-auto max-w-4xl px-4 py-20">
    <SectionHeader title="DEAD PROXIES 🥀" subtitle="This is what happens when you snitch. (don't snitch)" icon={Skull} />
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {deadProxies.map((p, i) => (
        <ScrollZoomIn key={p.url}>
          <motion.div
            className="group relative rounded-lg border border-destructive/20 bg-destructive/5 p-4 opacity-60 transition-opacity hover:opacity-80"
            whileInView={{ opacity: [0, 0.6], x: [i % 2 === 0 ? -20 : 20, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="absolute -top-2 right-3 rounded-full bg-destructive/80 px-2 py-0.5 text-[10px] font-bold uppercase text-destructive-foreground">
              WASTED
            </div>
            <p className="font-display text-sm font-semibold text-foreground line-through">{p.name}</p>
            <p className="mt-1 truncate text-xs text-muted-foreground">{p.url}</p>
            {p.note && <p className="mt-1 text-xs italic text-destructive">{p.note}</p>}
          </motion.div>
        </ScrollZoomIn>
      ))}
    </div>
  </section>
);

export default DeadProxiesSection;
