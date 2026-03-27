import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "./SearchBar";

const links = [
  { label: "Proxies", href: "#proxies" },
  { label: "Games", href: "#games" },
  { label: "Movies", href: "#movies" },
  { label: "Tools", href: "#tools" },
  { label: "Versions", href: "#versions" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <a href="#" className="font-display text-lg font-bold text-primary text-glow">
          YOYO'S NETWORK
        </a>
        <div className="hidden gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="text-foreground md:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <div className="flex flex-col gap-2 p-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-primary">
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
