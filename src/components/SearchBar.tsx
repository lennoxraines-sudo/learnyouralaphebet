import { useState, useEffect, useMemo, useRef } from "react";
import { Search, X, Globe, Gamepad2, Film, Wrench, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { allGames } from "@/data/games";

interface SearchItem {
  title: string;
  url: string;
  description?: string;
  category: string;
  icon: typeof Globe;
  sectionId: string;
}

const allItems: SearchItem[] = [
  // Proxies
  { title: "Froggy / Old Mill School", url: "https://oldmillschool.org/", description: "Froggy might be back — test this link!", category: "Proxy", icon: Globe, sectionId: "proxies" },
  { title: "StrongDogXP", url: "https://algebra-is-fun.github.io/", description: "THE GOAT! Highly recommended proxy.", category: "Proxy", icon: Globe, sectionId: "proxies" },
  { title: "The Dog", url: "https://sites.google.com/view/hotdogmangoscar", category: "Proxy", icon: Globe, sectionId: "proxies" },
  { title: "Truffled", url: "https://health.wvpreschool.org/g", category: "Proxy", icon: Globe, sectionId: "proxies" },
  { title: "TheGameCompilation", url: "https://sites.google.com/site/thegamecompilation/home", category: "Proxy", icon: Globe, sectionId: "proxies" },
  { title: "TheAdvancedMethod", url: "https://sites.google.com/view/theadvancedmethod/home", category: "Proxy", icon: Globe, sectionId: "proxies" },
  { title: "Openbook Proxy", url: "https://sites.google.com/view/openbookproxy/", category: "Proxy", icon: Globe, sectionId: "proxies" },
  { title: "Void Network", url: "https://learnkidz.in.net/?/", description: "There are 1000 different void networks.", category: "Proxy", icon: Globe, sectionId: "proxies" },
  { title: "Unblocked S3", url: "https://unblockedgamess3.gitlab.io/category/action.html", category: "Proxy", icon: Globe, sectionId: "proxies" },
  { title: "CCported", url: "https://the-vasily.netlify.app/", category: "Proxy", icon: Globe, sectionId: "proxies" },
  { title: "The Pizza Edition", url: "https://the-pizza-editiongames.github.io/", category: "Proxy", icon: Globe, sectionId: "proxies" },
  { title: "Aether X2", url: "https://sites.google.com/view/educational-math-me/pr0xi3s/pre-installed-emulator", description: "Classics not found in others shown.", category: "Proxy", icon: Globe, sectionId: "proxies" },
  { title: "Chromebooks are racist", url: "https://incrediblewebsite.github.io/", category: "Proxy", icon: Globe, sectionId: "proxies" },
  { title: "Cyber City", url: "https://sites.google.com/view/cyberlabs/", category: "Proxy", icon: Globe, sectionId: "proxies" },
  { title: "EzClassWork", url: "https://sites.google.com/view/ezclasswork/home", category: "Proxy", icon: Globe, sectionId: "proxies" },
  { title: "Classroom Center", url: "https://sites.google.com/classroom.center/view/friday-n-funkin", category: "Proxy", icon: Globe, sectionId: "proxies" },
  { title: "WIX Games", url: "https://barrettpetreikis59.wixsite.com/project-games/games", description: "Password: easymath", category: "Proxy", icon: Globe, sectionId: "proxies" },
  { title: "KenKen Puzzle", url: "https://www.kenkenpuzzle.com/twenty48", category: "Proxy", icon: Globe, sectionId: "proxies" },
  { title: "Schoology Gamers", url: "https://schoologygamers.weebly.com/games.html", category: "Proxy", icon: Globe, sectionId: "proxies" },
  { title: "GN Math", url: "https://jsitor.com/o0lakVfoMYV", category: "Proxy", icon: Globe, sectionId: "proxies" },
  { title: "Math Playground", url: "https://www.mathplayground.com/", category: "Proxy", icon: Globe, sectionId: "proxies" },
  { title: "Mortage Calculator Games", url: "https://www.mortgagecalculator.org/money-games/", category: "Proxy", icon: Globe, sectionId: "proxies" },
  { title: "NEO", url: "https://docs.google.com/document/d/1lO2MSG9GLp4M7X0VDNcQuKxyFHcq3N24ab0ltrYxQwU/edit?tab=t.vhtkk2vpn6w6#heading=h.462cfbg0gb2n", category: "Proxy", icon: Globe, sectionId: "proxies" },
  // Games (generated from data)
  ...allGames.map(g => ({ title: g.title, url: g.url, description: g.description, category: "Game", icon: Gamepad2, sectionId: "games" })),
  // Movies
  { title: "SomeStuff Proxy", url: "https://sites.google.com/view/smithper42025-2026trimenster3/some-stuff", description: "300-1000+ movies available via streaming tab", category: "Movie", icon: Film, sectionId: "movies" },
  { title: "Videos Collection", url: "https://sites.google.com/view/smithper42025-2026trimenster3/videos", description: "Video links collection", category: "Movie", icon: Film, sectionId: "movies" },
  { title: "Universal Movies (30k+ links)", url: "https://docs.google.com/document/d/15vlrgUvy3LPyaVCr-_3JcxogJvTGcHos4j6R-9d-eOc/edit?tab=t.c2qjmyt0tcji", description: "One year of movie links — 30,000+", category: "Movie", icon: Film, sectionId: "movies" },
  { title: "UGS Files", url: "https://drive.google.com/drive/folders/1ou3mI5xJVQv8Vt_MvwejPtf7zStSnU-s", description: "Google Drive resources", category: "Movie", icon: Film, sectionId: "movies" },
  // Tools
  { title: "Homey: Productivity New Tab", url: "https://chromewebstore.google.com/detail/homey-productivity-new-ta/lllnjdmfnfjifcfpppjmcnanpokikcpl", description: "Install, click 'Add Embedded', type any URL to unblock.", category: "Tool", icon: Wrench, sectionId: "tools" },
  { title: "ExtPrint3r", url: "https://blobby-boi.github.io/ExtPrint3r/", description: "Extension printer tool", category: "Tool", icon: Wrench, sectionId: "tools" },
  { title: "EXT-REMOVER", url: "https://3kh0.github.io/ext-remover/", description: "Remove unwanted extensions", category: "Tool", icon: Wrench, sectionId: "tools" },
  { title: "Downgrading Chromebook", url: "https://sites.google.com/view/eggyrolles/downgrading-chromebook", description: "Guide to downgrade your Chromebook", category: "Tool", icon: Wrench, sectionId: "tools" },
  { title: "Emulator", url: "https://sites.google.com/view/educational-math-me/pr0xi3s/emulator", description: "Classic game emulator", category: "Tool", icon: Wrench, sectionId: "tools" },
  { title: "Linux Mint ISO", url: "https://pub.linuxmint.io/stable/22.3/linuxmint-22.3-cinnamon-64bit.iso", description: "Escape school computer restraints by downloading Linux", category: "Tool", icon: Wrench, sectionId: "tools" },
  { title: "TOR Browser", url: "https://dist.torproject.org/torbrowser/15.0.8/tor-browser-android-x86-15.0.8.apk", description: "Upload to Google Drive → New File → Select → Download", category: "Tool", icon: Wrench, sectionId: "tools" },
  { title: "DeepSeek AI", url: "https://sites.google.com/view/educational-math-me/pr0xi3s/a-i", description: "Talk with DeepSeek AI here!", category: "Tool", icon: Wrench, sectionId: "tools" },
];

const categoryColors: Record<string, string> = {
  Proxy: "bg-primary/20 text-primary",
  Game: "bg-accent/20 text-accent-foreground",
  Movie: "bg-destructive/20 text-destructive",
  Tool: "bg-secondary text-secondary-foreground",
};

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.description?.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [query]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [open]);

  const handleSelect = (item: SearchItem) => {
    setOpen(false);
    window.open(item.url, "_blank", "noopener,noreferrer");
  };

  const handleScrollTo = (sectionId: string) => {
    setOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Trigger button in navbar */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-lg border border-border bg-card/50 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
      >
        <Search className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Search...</span>
        <kbd className="hidden rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline">
          ⌘K
        </kbd>
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              className="relative z-10 w-full max-w-lg mx-4 rounded-xl border border-border bg-card shadow-2xl overflow-hidden"
              initial={{ scale: 0.95, opacity: 0, y: -10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              {/* Input */}
              <div className="flex items-center gap-3 border-b border-border px-4 py-3">
                <Search className="h-4 w-4 text-muted-foreground shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search proxies, games, movies, tools..."
                  className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                />
                <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-80 overflow-y-auto p-2">
                {!query.trim() && (
                  <div className="space-y-1">
                    <p className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Jump to section</p>
                    {[
                      { label: "Proxies", id: "proxies", icon: Globe },
                      { label: "Games", id: "games", icon: Gamepad2 },
                      { label: "Movies", id: "movies", icon: Film },
                      { label: "Tools", id: "tools", icon: Wrench },
                    ].map((s) => (
                      <button
                        key={s.id}
                        onClick={() => handleScrollTo(s.id)}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent"
                      >
                        <s.icon className="h-4 w-4 text-muted-foreground" />
                        {s.label}
                      </button>
                    ))}
                  </div>
                )}

                {query.trim() && results.length === 0 && (
                  <p className="py-8 text-center text-sm text-muted-foreground">No results found</p>
                )}

                {results.length > 0 && (
                  <div className="space-y-1">
                    {results.map((item) => (
                      <button
                        key={item.url}
                        onClick={() => handleSelect(item)}
                        className="group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-accent"
                      >
                        <item.icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="truncate text-sm font-medium text-foreground">{item.title}</span>
                            <span className={`shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-bold ${categoryColors[item.category]}`}>
                              {item.category}
                            </span>
                          </div>
                          {item.description && (
                            <p className="truncate text-xs text-muted-foreground">{item.description}</p>
                          )}
                        </div>
                        <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SearchBar;
