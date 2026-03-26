import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";

interface LinkCardProps {
  title: string;
  url: string;
  description?: string;
  recommended?: boolean;
  tag?: string;
}

const LinkCard = ({ title, url, description, recommended, tag }: LinkCardProps) => {
  // Extract clean URL for display
  const cleanUrl = (() => {
    try {
      const parsed = new URL(url);
      return parsed.hostname + (parsed.pathname !== "/" ? parsed.pathname.slice(0, 30) : "");
    } catch {
      return url.slice(0, 40);
    }
  })();

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:box-glow"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {recommended && (
        <span className="absolute -top-2 right-3 flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase text-primary-foreground">
          <Star className="h-3 w-3" /> Recommended
        </span>
      )}
      {tag && !recommended && (
        <span className="absolute -top-2 right-3 rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase text-accent-foreground">
          {tag}
        </span>
      )}
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="mt-1 truncate text-xs text-muted-foreground">{cleanUrl}</p>
          {description && (
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">{description}</p>
          )}
        </div>
        <ExternalLink className="h-4 w-4 flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
      {/* Embedded preview iframe */}
      <div className="mt-3 overflow-hidden rounded border border-border bg-background">
        <iframe
          src={url}
          title={title}
          className="h-32 w-full pointer-events-none"
          sandbox="allow-scripts allow-same-origin"
          loading="lazy"
        />
      </div>
    </motion.a>
  );
};

export default LinkCard;
