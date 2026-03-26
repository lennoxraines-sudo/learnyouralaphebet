import SectionHeader from "./SectionHeader";
import LinkCard from "./LinkCard";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

const proxies = [
  { title: "Froggy / Old Mill School", url: "https://oldmillschool.org/", recommended: true, description: "Froggy might be back — test this link!" },
  { title: "StrongDogXP", url: "https://algebra-is-fun.github.io/", recommended: true, description: "THE GOAT! Highly recommended proxy." },
  { title: "The Dog", url: "https://sites.google.com/view/hotdogmangoscar", recommended: true },
  { title: "Truffled", url: "https://health.wvpreschool.org/g", recommended: false },
  { title: "TheGameCompilation", url: "https://sites.google.com/site/thegamecompilation/home", recommended: true },
  { title: "TheAdvancedMethod", url: "https://sites.google.com/view/theadvancedmethod/home", recommended: true },
  { title: "Openbook Proxy", url: "https://sites.google.com/view/openbookproxy/", recommended: true },
  { title: "Void Network", url: "https://learnkidz.in.net/?/", recommended: true, description: "There are 1000 different void networks." },
  { title: "Unblocked S3", url: "https://unblockedgamess3.gitlab.io/category/action.html", recommended: true },
  { title: "CCported", url: "https://the-vasily.netlify.app/", recommended: true },
  { title: "The Pizza Edition", url: "https://the-pizza-editiongames.github.io/", recommended: true },
  { title: "Aether X2", url: "https://sites.google.com/view/educational-math-me/pr0xi3s/pre-installed-emulator", recommended: true, description: "Classics not found in others shown." },
  { title: "Chromebooks are racist", url: "https://incrediblewebsite.github.io/", recommended: false },
  { title: "Cyber City", url: "https://sites.google.com/view/cyberlabs/", recommended: false },
  { title: "EzClassWork", url: "https://sites.google.com/view/ezclasswork/home", recommended: true },
  { title: "Classroom Center", url: "https://sites.google.com/classroom.center/view/friday-n-funkin", recommended: false },
  { title: "WIX Games", url: "https://barrettpetreikis59.wixsite.com/project-games/games", recommended: false, description: "Password: easymath" },
  { title: "KenKen Puzzle", url: "https://www.kenkenpuzzle.com/twenty48", recommended: false },
  { title: "Schoology Gamers", url: "https://schoologygamers.weebly.com/games.html", recommended: false },
  { title: "GN Math", url: "https://jsitor.com/o0lakVfoMYV", recommended: false },
  { title: "Math Playground", url: "https://www.mathplayground.com/", recommended: false },
  { title: "Mortage Calculator Games", url: "https://www.mortgagecalculator.org/money-games/", recommended: false },
  { title: "NEO", url: "https://docs.google.com/document/d/1lO2MSG9GLp4M7X0VDNcQuKxyFHcq3N24ab0ltrYxQwU/edit?tab=t.vhtkk2vpn6w6#heading=h.462cfbg0gb2n", recommended: false },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

const ProxiesSection = () => (
  <section id="proxies" className="mx-auto max-w-6xl px-4 py-20">
    <SectionHeader title="PROXY SITES" subtitle="Curated collection of working proxy and game sites" icon={Globe} />
    <motion.div
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {proxies.map((p) => (
        <motion.div key={p.url} variants={item}>
          <LinkCard {...p} />
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default ProxiesSection;
