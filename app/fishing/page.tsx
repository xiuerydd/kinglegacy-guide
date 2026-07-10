import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fishing in King Legacy — Best Spots and Rewards",
  description: "Everything you need to know about fishing in King Legacy. Mechanics, rare drops, best locations, and what to do with your catch.",
};

export default function FishingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary mb-6">Fishing in King Legacy — Best Spots and Rewards</h1>
      <p className="text-secondary mb-4">
        Fishing in King Legacy isn't a side activity — it's a legit way to farm gems, rare items, and even devil fruits. Most players ignore it until they see someone pull a legendary fish and cash out big. Let's fix that.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">How Fishing Works</h2>
      <p className="text-secondary mb-4">
        Grab a fishing rod from any general NPC shop, head to a body of water, and cast your line. You'll see a bobber — wait for it to dunk underwater, then tap the action button to reel in. The timing window is generous, so you won't lose your catch if you're half-paying attention. The rarer the fish, the longer the fight before you can reel it in.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Best Fishing Spots</h2>
      <p className="text-secondary mb-4">
        Not all water is the same. Some areas have better loot tables, and a few have exclusive catches you can't get anywhere else.
      </p>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li><strong>Starter Island coast</strong> — safe, catches common fish, good for building up bait money</li>
        <li><strong>Fishman Island docks</strong> — mid-tier fish and a chance at rare crafting materials</li>
        <li><strong>The hidden pond in the Sky Islands</strong> — one of the best spots for legendary fish, but you'll need to reach the area first</li>
        <li><strong>Deep sea zones</strong> — open water far from islands. Higher risk of getting attacked but the best loot tables in the game</li>
      </ul>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Rare Drops and What They're Worth</h2>
      <p className="text-secondary mb-4">
        Common fish sell for pocket change, but the rare ones are where the money's at. <strong>Sea Kings</strong> and <strong>Mythical Fish</strong> can sell for gems or trade for high-tier items. Some fish are ingredients for crafting quest items, and a few are tied to title unlocks. If you pull a glowing fish, you've hit the jackpot — check its sell price before you assume it's just another catch.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Tips to Maximize Your Haul</h2>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li>Fish at dawn or dusk in-game — some rare fish only spawn during those windows</li>
        <li>Upgrade your rod when you can. Higher-tier rods reduce the time to reel in rare fish</li>
        <li>Bring a friend to watch your back in deep sea zones — mobs don't care that you're fishing</li>
        <li>Save legendary fish for trading, sell the rest for gems</li>
      </ul>

      <p className="text-secondary">
        Fishing is a relaxing alternative to grinding bosses. If you want the full picture on making money in King Legacy, check the <Link href="/leveling" className="text-primary hover:underline">Leveling Guide</Link> and don't forget to grab <Link href="https://codes.robloxguides.xyz" className="text-primary hover:underline">active King Legacy codes</Link> for freebies.
      </p>
    </div>
  );
}
