import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; rising: boolean }[] = [];
    const mouse = { x: -9999, y: -9999 };
    const MOUSE_RADIUS = 150;
    const MOUSE_FORCE = 0.8;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    const COUNT = 80;
    const RISING_COUNT = 40;
    const MAX_DIST = 120;

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -(Math.random() * 0.6 + 0.2),
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        rising: true,
      });
    }

    for (let i = 0; i < RISING_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 200,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -(Math.random() * 1.2 + 0.4),
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        rising: true,
      });
    }

    const getColor = () => {
      const root = getComputedStyle(document.documentElement);
      const primary = root.getPropertyValue("--primary").trim();
      return primary || "155 100% 50%";
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const hsl = getColor();

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Mouse repulsion
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < MOUSE_RADIUS && mDist > 0) {
          const force = (1 - mDist / MOUSE_RADIUS) * MOUSE_FORCE;
          p.vx += (mdx / mDist) * force;
          p.vy += (mdy / mDist) * force;
        }

        // Damping
        p.vx *= 0.98;
        p.vy *= 0.97;
        // Constant upward drift
        p.vy -= 0.01;

        // Clamp speed
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 3) {
          p.vx = (p.vx / speed) * 3;
          p.vy = (p.vy / speed) * 3;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.rising) {
          if (p.y < -10) {
            p.x = Math.random() * canvas.width;
            p.y = canvas.height + Math.random() * 50;
            p.vx = (Math.random() - 0.5) * 0.3;
            p.vy = -(Math.random() * 1.2 + 0.4);
            p.opacity = Math.random() * 0.4 + 0.1;
          }
        } else {
          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;
          if (p.y < 0) p.y = canvas.height;
          if (p.y > canvas.height) p.y = 0;
        }

        // Glow near mouse
        const glowBoost = mDist < MOUSE_RADIUS ? 0.3 * (1 - mDist / MOUSE_RADIUS) : 0;
        const drawSize = p.size + (mDist < MOUSE_RADIUS ? 1.5 * (1 - mDist / MOUSE_RADIUS) : 0);

        ctx.beginPath();
        ctx.arc(p.x, p.y, drawSize, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${hsl} / ${Math.min(p.opacity + glowBoost, 0.9)})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsl(${hsl} / ${0.08 * (1 - dist / MAX_DIST)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default ParticleBackground;
