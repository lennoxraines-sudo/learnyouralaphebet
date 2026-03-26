import { useState, useEffect } from "react";
import { Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const themes = [
  { name: "Neon Green", key: "green", primary: "155 100% 50%", accent: "280 100% 65%" },
  { name: "Cyber Blue", key: "blue", primary: "200 100% 50%", accent: "260 100% 65%" },
  { name: "Hot Pink", key: "pink", primary: "330 100% 60%", accent: "280 80% 55%" },
  { name: "Amber", key: "amber", primary: "38 100% 50%", accent: "15 100% 55%" },
  { name: "Red Alert", key: "red", primary: "0 100% 55%", accent: "340 80% 50%" },
];

const ThemeChanger = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("green");

  useEffect(() => {
    const saved = localStorage.getItem("yoyo-theme");
    if (saved) applyTheme(saved);
  }, []);

  const applyTheme = (key: string) => {
    const theme = themes.find((t) => t.key === key);
    if (!theme) return;
    const root = document.documentElement;
    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty("--ring", theme.primary);
    root.style.setProperty("--accent", theme.accent);
    root.style.setProperty("--sidebar-primary", theme.primary);
    root.style.setProperty("--sidebar-ring", theme.primary);
    // Update glow CSS vars
    root.style.setProperty("--neon-glow", `0 0 10px hsl(${theme.primary} / 0.4), 0 0 40px hsl(${theme.primary} / 0.15)`);
    root.style.setProperty("--neon-glow-strong", `0 0 10px hsl(${theme.primary} / 0.6), 0 0 40px hsl(${theme.primary} / 0.3), 0 0 80px hsl(${theme.primary} / 0.1)`);
    root.style.setProperty("--accent-glow", `0 0 10px hsl(${theme.accent} / 0.4), 0 0 40px hsl(${theme.accent} / 0.15)`);
    setActive(key);
    localStorage.setItem("yoyo-theme", key);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-14 right-0 w-44 rounded-lg border border-border bg-card p-2 shadow-xl"
          >
            {themes.map((t) => (
              <button
                key={t.key}
                onClick={() => { applyTheme(t.key); setOpen(false); }}
                className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-xs transition-colors ${active === t.key ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"}`}
              >
                <span className="h-3 w-3 rounded-full flex-shrink-0" style={{ background: `hsl(${t.primary})` }} />
                {t.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-lg transition-colors hover:text-primary hover:border-primary/50"
      >
        <Palette className="h-4 w-4" />
      </button>
    </div>
  );
};

export default ThemeChanger;
