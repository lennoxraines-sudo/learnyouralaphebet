import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { ScrollZoomIn, ScrollSlideIn } from "./ScrollAnimations";

const CautionSection = () => (
  <section id="caution" className="mx-auto max-w-3xl px-4 py-20">
    <ScrollZoomIn>
      <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6 md:p-8">
        <div className="flex items-start gap-4">
          <motion.div
            whileInView={{ rotate: [0, -10, 10, -10, 0], scale: [1, 1.2, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AlertTriangle className="h-8 w-8 flex-shrink-0 text-destructive" />
          </motion.div>
          <div>
            <h2 className="font-display text-xl font-bold text-destructive">CAUTION!!!</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              For those lucky few who have been able to access this network, <strong>PLEASE HEAR THIS!</strong> Many of you may have used the old proxy network site/slides, and if you haven't seen what happened, then I'm sorry to say that almost every site from there has been blocked! The reason for this was that the network had been widespread to the point where the district found out and restricted everything.
            </p>
            <p className="mt-3 text-sm font-semibold text-foreground/90">
              To avoid that from happening again… please keep this as secret as possible.
            </p>
            <p className="mt-4 text-sm text-primary font-semibold">
              🎉 GREAT NEWS! "Proxy Network" is back online! Check out the proxies below.
            </p>
          </div>
        </div>
      </div>
    </ScrollZoomIn>

    <ScrollSlideIn direction="right">
      <div className="mt-8 rounded-xl border border-border bg-card p-6 md:p-8">
        <h3 className="font-display text-lg font-bold text-foreground">Our Promise</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          We wish to give children fun entertainment during school hours when they're bored. And that's what we're doing! We try our best to bring the word 'fun' in 'school' in JUST TWO STEPS (or yoyo rotations). We promise to update our site every month or so, and to add stuff on our slides once a week!
        </p>
      </div>
    </ScrollSlideIn>
  </section>
);

export default CautionSection;
