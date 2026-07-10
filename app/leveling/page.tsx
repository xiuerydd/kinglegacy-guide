import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "King Legacy Leveling Guide — Fastest Leveling Route",
  description: "Fastest leveling route in King Legacy from level 1 to max. Best islands per level, quest order, XP events, and common time wasters to avoid.",
};

export default function LevelingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary mb-6">King Legacy Leveling Guide</h1>
      <p className="text-secondary mb-4">
        Leveling in King Legacy is just following the main quest through harder islands. The fastest path isn't complicated — do the quests, fight at your level, use the right fruit. But knowing which islands to prioritize and which fights to skip saves you hours.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">First Sea (Levels 1–100)</h2>
      <p className="text-secondary mb-4">
        Start on Starter Island and follow every NPC quest marker. Buy a Logia fruit (Flame or Ice) as soon as you can — piercing attacks double your kill speed on dense spawns. Don't skip ahead to higher-level islands; dying repeatedly is worse XP than a steady grind at your level.
      </p>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li>Starter Island (1-20) → Marine Fortress (20-40) → Sand Island (40-70) → Snow Island (70-100)</li>
        <li>Stat priority: Melee and Defense before fruit damage — you need survivability more than burst</li>
        <li>Save Beli for your first Logia, don't waste it on cosmetics or accessories</li>
      </ul>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Sky and Fishman Islands (100–300)</h2>
      <p className="text-secondary mb-4">
        Sky Islands throw flying enemies with different movement patterns at you. A Logia still dominates here. Switch to a Zoan or Paramecia around level 200 if the Logia playstyle gets boring. Start grouping with other players too — solo grinding slows down hard in this range, and a duo clears way faster.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">New World (300–700)</h2>
      <p className="text-secondary mb-4">
        The New World opens islands with tougher enemies and higher XP per kill. Enemy HP spikes here, and a Logia starts falling off unless you've awakened it. Time to shift to a Mythical Zoan or a strong Paramecia. This is also where you should start doing boss runs in groups — the drops fund your next fruit upgrade.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">XP Events: Plan Around Them</h2>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li>2x XP events roughly double your hourly gain — schedule your sessions around them</li>
        <li>Farm the toughest enemies you can one-shot, not the toughest you can survive</li>
        <li>Keep Beli for stat refunds before events so you can optimize for speed</li>
        <li>Server hop to find active crews during events — solo XP is always slower</li>
      </ul>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Stuff That Slows You Down</h2>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li>Fighting bosses above your level — death loop, less XP than staying in your zone</li>
        <li>Skipping the main quest — areas stay locked, limiting your farming pool</li>
        <li>Soloing hard dungeons — easy wipe without a team, zero reward</li>
        <li>Frequent fruit switches — each one resets all your mastery progress</li>
      </ul>

      <p className="text-secondary">
        Wondering what's on each island? See the <Link href="/islands" className="text-primary hover:underline">Islands Guide</Link>. Need better gear? The <Link href="/bosses" className="text-primary hover:underline">Bosses Guide</Link> has you covered. Grab <Link href="https://codes.robloxguides.xyz" className="text-primary hover:underline">King Legacy codes</Link> for XP boosts while they last.
      </p>
    </div>
  );
}
