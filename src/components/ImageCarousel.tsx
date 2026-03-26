import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageCarouselProps {
  images: { src: string; alt: string; caption?: string }[];
  autoPlay?: boolean;
  interval?: number;
}

const ImageCarousel = ({ images, autoPlay = true, interval = 4000 }: ImageCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, next]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card">
      <div className="relative aspect-video">
        <AnimatePresence custom={direction} mode="wait">
          <motion.img
            key={current}
            src={images[current].src}
            alt={images[current].alt}
            className="absolute inset-0 h-full w-full object-cover"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            loading="lazy"
            width={1280}
            height={720}
          />
        </AnimatePresence>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

        {/* Caption */}
        {images[current].caption && (
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-sm font-semibold text-foreground">{images[current].caption}</p>
          </div>
        )}
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-border/50 bg-background/60 text-foreground backdrop-blur-sm transition-colors hover:bg-background/80 hover:border-primary/50"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-border/50 bg-background/60 text-foreground backdrop-blur-sm transition-colors hover:bg-background/80 hover:border-primary/50"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
            className={`h-1.5 rounded-full transition-all ${i === current ? "w-6 bg-primary" : "w-1.5 bg-foreground/30"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
