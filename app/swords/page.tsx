import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "King Legacy Swords Guide — Best Swords and Stats",
  description: "Complete sword guide for King Legacy. Find the best swords, where to get them, upgrade materials, and recommended builds for PvP and grinding.",
};

export default function SwordsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary mb-6">King Legacy Swords Guide</h1>
      <p className="text-secondary mb-4">
        Swords are the backbone of most King Legacy builds. They give you high single-target damage, long combo strings, and mobility that fruits alone can't match. Pairing the right sword with your fruit is what separates winning a PvP clash from getting combo-locked into a loss.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Which Sword Does What</h2>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li><strong>PvP</strong> — Mochi Sword, Soul Cane, and Dark Blade bring fast combos and long reach. Dark Blade is rare and trades heavily</li>
        <li><strong>Grinding</strong> — Long Sword, Saber, and Katana clear mobs efficiently and are easy to get early</li>
        <li><strong>Boss Killing</strong> — Bisento, Trident, and Greatsword hit hard on single targets and shred boss HP bars fast</li>
        <li><strong>Utility</strong> — swords with a dash or gap-closer help you reposition during raids</li>
      </ul>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Where They Drop</h2>
      <p className="text-secondary mb-4">
        Common swords drop from world mobs and low-tier bosses. Mid-tier blades come from quest rewards and the shop. The strongest ones — Bisento, Dark Blade, and event exclusives — drop from high-level bosses or sit behind rare trades. Expect to grind or save gems. <Link href="https://codes.robloxguides.xyz" className="text-primary hover:underline">King Legacy codes</Link> can speed that up with gem and XP boosts.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Leveling It Up</h2>
      <p className="text-secondary mb-4">
        Swords level up with materials dropped by bosses and mobs. Each tier raises base damage and can unlock an extra move in the combo. Take them to the Blacksmith NPC. Prioritize the sword you use in PvP first — that's where damage matters most. A maxed common sword often beats an unupgraded rare one.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Building Around Your Fruit</h2>
      <p className="text-secondary mb-4">
        The strongest builds layer a sword on top of a complementary fruit. Dark Blade pairs naturally with dark-element fruits for a cohesive combo. Mochi Sword works with almost any close-range fruit because its reach covers the gaps. Don't stack two slow, telegraphed kits — if your fruit has a long wind-up, pick a fast sword to keep pressure on.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">PvP Build vs. PvE Build</h2>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li><strong>PvP</strong> — fast combos, a gap-closer, and a fruit that can escape being combo-locked</li>
        <li><strong>PvE / grinding</strong> — AoE fruit plus a sword with good mob clear. Survivability over burst</li>
        <li><strong>Bosses</strong> — maximum single-target damage and a defensive fruit for the enrage phase</li>
      </ul>

      <p className="text-secondary">
        Pair your sword with the right fruit — see the <Link href="/fruits" className="text-primary hover:underline">Fruits Guide</Link>. Need to level faster? <Link href="/leveling" className="text-primary hover:underline">Leveling Guide</Link>. And don't sleep on the <Link href="/races" className="text-primary hover:underline">Races Guide</Link> to round out your build.
      </p>
    </div>
  );
}
