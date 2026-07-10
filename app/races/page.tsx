import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "King Legacy Races Guide — All Races and Abilities",
  description: "Complete guide to races in King Legacy. Human, Mink, Skypiea, Fishman — racial abilities, best race per playstyle, passives explained, and how to change your race.",
};

export default function RacesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary mb-6">King Legacy Races Guide</h1>
      <p className="text-secondary mb-4">
        Your race in King Legacy gives you passive stat bonuses that affect movement, combat, and survivability. The differences are subtle — a skilled player wins with any race — but the right one for your build gives a real edge in specific situations. Here's what each race does, which builds they fit, and how they interact with your fruit.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">The Four Races</h2>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li><strong>Human</strong> — balanced stats, no major weaknesses or standout strengths. Best if you want one build that works for both PvE and PvP. The stat spread lets you adapt to any fruit without being locked into a playstyle</li>
        <li><strong>Mink</strong> — faster movement and attack speed. The speed bonus really shows in close-range PvP, where landing the first hit often decides the trade. Minks excel at hit-and-run and quick combos that overwhelm before the opponent reacts</li>
        <li><strong>Skypiea</strong> — enhanced observation (dodge) and slightly better air mobility. The dodge bonus helps survive burst combos that would kill other races. Skypiea suits defensive players who prefer counter-attacking — let them waste cooldowns, then punish the recovery window</li>
        <li><strong>Fishman</strong> — faster swimming and combat bonuses in water zones. Niche but strong: sea-based PvP or boss fights near water, Fishman has a clear advantage. The swimming speed also saves travel time between islands</li>
      </ul>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Which Race Fits You</h2>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li><strong>Aggressive PvP</strong> — Mink (speed lets you dictate engagement range)</li>
        <li><strong>Defensive / counter PvP</strong> — Skypiea (dodge bonus gives more room for error)</li>
        <li><strong>PvE / grinding</strong> — Human (balanced stats work with any fruit or sword)</li>
        <li><strong>Sea zone farming</strong> — Fishman (water combat bonus matters against Sea King and aquatic bosses)</li>
        <li><strong>Hybrid (both PvE and PvP)</strong> — Human is the safest pick if you can't commit to one style</li>
      </ul>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Making Race and Fruit Work Together</h2>
      <p className="text-secondary mb-4">
        Your race and fruit should complement each other. A Mink with a close-range Zoan makes a speed-and-tankiness combo that's hard to counter. A Skypiea with a ranged Logia can kite forever. A Fishman with a water-element fruit (if available) stacks the aquatic bonuses. Think about how the passives amplify your fruit's natural playstyle before you reroll.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Rerolling (and When Not To)</h2>
      <p className="text-secondary mb-4">
        Races aren't permanent — you can change with a Race Reroll item from the shop or event drops. Rerolls are limited, so don't switch casually. Change only when you've settled on a main fruit and playstyle. If you're still experimenting with fruits, keep your current race until your build is final.
      </p>

      <p className="text-secondary">
        Taking PvP seriously? The <Link href="/pvp" className="text-primary hover:underline">PvP Guide</Link> and <Link href="/fruits" className="text-primary hover:underline">Fruits Guide</Link> have more. Leveling tips in the <Link href="/leveling" className="text-primary hover:underline">Leveling Guide</Link>. And grab <Link href="https://codes.robloxguides.xyz" className="text-primary hover:underline">King Legacy codes</Link> for free gems.
      </p>
    </div>
  );
}
