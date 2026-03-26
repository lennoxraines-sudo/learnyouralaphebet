import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  id?: string;
}

const SectionHeader = ({ title, subtitle, icon: Icon, id }: SectionHeaderProps) => (
  <motion.div
    id={id}
    className="mb-8 text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {Icon && (
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
    )}
    <h2 className="font-display text-2xl font-bold text-foreground text-glow md:text-3xl">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">{subtitle}</p>
    )}
    <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
  </motion.div>
);

export default SectionHeader;
