import SectionHeader from "./SectionHeader";
import LinkCard from "./LinkCard";
import { ScrollSlideIn, ScrollZoomIn } from "./ScrollAnimations";
import { History, Users } from "lucide-react";

const VersionsSection = () => (
  <section id="versions" className="mx-auto max-w-4xl px-4 py-20">
    <SectionHeader title="VERSIONS & LINKS" subtitle="Past versions and official sites" icon={History} />
    <div className="grid gap-4 sm:grid-cols-2">
      <ScrollSlideIn direction="left"><LinkCard title="Yoyo's Network V.0 (Demo)" url="https://docs.google.com/presentation/d/1QJz86MjRcLRHbX3yWkGNCjDz2VRq9XZ0DST1v99QOMQ/edit?slide=id.g3c4bb630ee3_0_2#slide=id.g3c4bb630ee3_0_2" description="Only works if you have access" /></ScrollSlideIn>
      <ScrollSlideIn direction="right"><LinkCard title="Yoyo's Network V.1" url="https://docs.google.com/presentation/u/0/d/1ZQ5rOa4TdSJ-KLtlJL5pA9c2H8vDephLZ-p6WMwOn7U/edit" description="The first release" /></ScrollSlideIn>
      <ScrollSlideIn direction="left"><LinkCard title="Official Website (Firebase)" url="https://studio--studio-1101954883-24347.us-central1.hosted.app/" description="Firebase link — if blocked, use the Homey exploit on slide 4" tag="NEW" /></ScrollSlideIn>
      <ScrollSlideIn direction="right"><LinkCard title="Official Website V1.5" url="https://sites.google.com/view/smithper42025-2026trimenster3/home" description="Credited to Lennox" /></ScrollSlideIn>
      <ScrollSlideIn direction="left"><LinkCard title="GitHub Repo" url="https://github.com/lennoxraines-sudo/studio" description="Source code — DNS may still be checking" tag="NEW" /></ScrollSlideIn>
    </div>

    <ScrollZoomIn className="mt-12">
      <div className="flex items-center gap-3 mb-4">
        <Users className="h-5 w-5 text-primary" />
        <h3 className="font-display text-lg font-bold text-foreground">Partners & Shoutouts</h3>
      </div>
      <div className="rounded-xl border border-border bg-card p-6">
        <p className="text-sm text-muted-foreground mb-3">Shout out to Yoyo's Network's partners!</p>
        <LinkCard title="The Proxy Network (Rebooted by Bryce)" url="https://docs.google.com/presentation/d/1KM7IBJ930lNjg3q3VHG7-ZTtDTSfy2n2cjh6dqAip9I/edit?slide=id.g3a4399611a1_0_0#slide=id.g3a4399611a1_0_0" />
        <p className="mt-3 text-sm text-primary font-semibold">Thank you Henry! 🎉</p>
      </div>
    </ScrollZoomIn>
  </section>
);

export default VersionsSection;
