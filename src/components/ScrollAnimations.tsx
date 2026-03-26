import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollZoomProps {
  children: React.ReactNode;
  className?: string;
}

/** Zooms in from 0.85 → 1 as element scrolls into view */
export const ScrollZoomIn = ({ children, className }: ScrollZoomProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className={className}>
      {children}
    </motion.div>
  );
};

/** Slides in from one side with parallax */
export const ScrollSlideIn = ({ children, className, direction = "left" }: ScrollZoomProps & { direction?: "left" | "right" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const x = useTransform(scrollYProgress, [0, 1], [direction === "left" ? -80 : 80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <motion.div ref={ref} style={{ x, opacity }} className={className}>
      {children}
    </motion.div>
  );
};

/** Parallax — moves slower than scroll for depth */
export const ScrollParallax = ({ children, className, speed = 0.3 }: ScrollZoomProps & { speed?: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

/** Rotates in 3D as it enters viewport */
export const ScrollFlipIn = ({ children, className }: ScrollZoomProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, opacity, scale, transformPerspective: 1200 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/** Text blurs in and scales up from small */
export const ScrollBlurIn = ({ children, className }: ScrollZoomProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const filter = useTransform(scrollYProgress, [0, 0.7], ["blur(10px)", "blur(0px)"]);

  return (
    <motion.div ref={ref} style={{ scale, opacity, filter }} className={className}>
      {children}
    </motion.div>
  );
};
