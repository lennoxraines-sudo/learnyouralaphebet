import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Minimize2, ExternalLink } from "lucide-react";
import { useState } from "react";

interface GamePlayerProps {
  title: string;
  url: string;
  onClose: () => void;
}

/** Convert a Google Drive share/view link into an embeddable preview URL. */
const toEmbedUrl = (url: string): string => {
  // Google Drive file links
  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (driveMatch) return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;

  const openMatch = url.match(/drive\.google\.com\/open\?id=([^&]+)/);
  if (openMatch) return `https://drive.google.com/file/d/${openMatch[1]}/preview`;

  return url;
};

const GamePlayer = ({ title, url, onClose }: GamePlayerProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const embedUrl = toEmbedUrl(url);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={`relative flex flex-col overflow-hidden rounded-lg border border-border bg-background shadow-2xl transition-all ${
            isFullscreen ? "h-screen w-screen rounded-none" : "h-[85vh] w-[90vw] max-w-5xl"
          }`}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header bar */}
          <div className="flex items-center justify-between border-b border-border bg-card px-4 py-2">
            <h3 className="truncate font-display text-sm font-semibold text-foreground">{title}</h3>
            <div className="flex items-center gap-1">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                title="Open in new tab"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="rounded p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
              >
                {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </button>
              <button
                onClick={onClose}
                className="rounded p-1.5 text-muted-foreground transition-colors hover:bg-destructive/20 hover:text-destructive"
                title="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Game iframe */}
          <iframe
            src={embedUrl}
            title={title}
            className="flex-1 w-full bg-black"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals"
            allow="autoplay; fullscreen; gamepad"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GamePlayer;
