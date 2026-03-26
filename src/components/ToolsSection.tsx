import SectionHeader from "./SectionHeader";
import LinkCard from "./LinkCard";
import ImageCarousel from "./ImageCarousel";
import { Wrench } from "lucide-react";
import { motion } from "framer-motion";
import carouselTools from "@/assets/carousel-tools.jpg";

const ToolsSection = () => (
  <section id="tools" className="mx-auto max-w-6xl px-4 py-20">
    <SectionHeader title="TOOLS & EXPLOITS" subtitle="Extensions, removers, and system tools" icon={Wrench} />
    <motion.div
      className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <LinkCard
        title="Homey: Productivity New Tab"
        url="https://chromewebstore.google.com/detail/homey-productivity-new-ta/lllnjdmfnfjifcfpppjmcnanpokikcpl"
        description="Install, click 'Add Embedded', type any URL to unblock. Scroll to 'Other' and follow steps."
        tag="Exploit"
      />
      <LinkCard
        title="ExtPrint3r"
        url="https://blobby-boi.github.io/ExtPrint3r/"
        description="Extension printer tool"
      />
      <LinkCard
        title="EXT-REMOVER"
        url="https://3kh0.github.io/ext-remover/"
        description="Remove unwanted extensions"
      />
      <LinkCard
        title="Downgrading Chromebook"
        url="https://sites.google.com/view/eggyrolles/downgrading-chromebook"
        description="Guide to downgrade your Chromebook"
      />
      <LinkCard
        title="Emulator"
        url="https://sites.google.com/view/educational-math-me/pr0xi3s/emulator"
        description="Classic game emulator"
      />
      <LinkCard
        title="Linux Mint ISO"
        url="https://pub.linuxmint.io/stable/22.3/linuxmint-22.3-cinnamon-64bit.iso"
        description="Escape school computer restraints by downloading Linux (takes a long time to boot)"
        tag="Advanced"
      />
      <LinkCard
        title="TOR Browser"
        url="https://dist.torproject.org/torbrowser/15.0.8/tor-browser-android-x86-15.0.8.apk"
        description="Upload to Google Drive → New File → Select → Download"
        tag="Dark Web"
      />
      <LinkCard
        title="DeepSeek AI"
        url="https://sites.google.com/view/educational-math-me/pr0xi3s/a-i"
        description="Talk with DeepSeek AI here!"
      />
    </motion.div>
    <div className="mx-auto mt-6 max-w-4xl rounded-lg border border-border bg-card p-4">
      <p className="text-xs text-muted-foreground">
        💡 <strong>Remove ContentKeeper:</strong> Paste <code className="rounded bg-muted px-1.5 py-0.5 text-primary">chrome-extension://johiffgefcnfiddcakohlcpebgpidnji/manifest.json</code> in the URL bar.
      </p>
    </div>
  </section>
);

export default ToolsSection;
