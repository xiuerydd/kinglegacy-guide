import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "King Legacy Islands Guide — All Islands in Order",
  description: "Complete King Legacy islands guide. Every island listed with level ranges, NPC quests, notable drops, enemy density, and fast travel unlocks.",
};

export default function IslandsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary mb-6">King Legacy Islands Guide</h1>
      <p className="text-secondary mb-4">
        King Legacy's world splits into islands that unlock as you level. Each has its own quests, enemies, and NPCs. The fastest path is to move through them in order — jumping ahead slows your XP because you spend more time dying than farming. Here's the full progression, what each island offers, and the fast travel options that save sailing time.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">The Island Order</h2>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li><strong>Starter Island</strong> — level 1-20, tutorial quests, basic NPCs. Enemy spawns are sparse but enough for early levels</li>
        <li><strong>Marine Fortress</strong> — level 20-40, first real combat. Marine Captain drops the Marine Sword, a decent starter blade</li>
        <li><strong>Sand Island</strong> — level 40-70, desert biome. Sand King drops the Sand Gear accessory. Good Beli farming early on</li>
        <li><strong>Snow Island</strong> — level 70-100, cold biome with some of the densest spawns in the first sea. Fastest grinding spot in this range. Snow Yeti drops Yeti Fur materials</li>
        <li><strong>Sky Islands</strong> — level 100-150, flying enemies with different movement patterns. Has teleport NPCs — unlock them for later</li>
        <li><strong>Fishman Island</strong> — level 150-200, underwater combat. Fishman Lord drops aquatic armor. Spread-out spawns make this better for groups</li>
        <li><strong>New World Islands</strong> — level 200+, endgame. Dark Admiral and Yonko bosses with the best loot in the game. Group grinding recommended</li>
      </ul>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">How Quests Work</h2>
      <p className="text-secondary mb-4">
        Each island has a main quest NPC who gives a kill-and-collect chain. Completing these chains unlocks the next island and gives you most of your XP. Side quests and repeatable bounties exist but yield less XP per hour — only do them if you need a specific material drop. The main quest chain is always the fastest route to the next island.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Where Enemies Spawn Thickest</h2>
      <p className="text-secondary mb-4">
        Enemy spawn density varies a lot. Snow Island and Sky Islands have the tightest spawns — your AoE hits more enemies per minute, making them the fastest leveling areas in their range. Fishman Island and New World have spread-out spawns but higher XP per kill. Solo players should stick to high-density areas. Groups can handle spread-out high-XP zones by splitting up and covering more ground.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Saving Travel Time</h2>
      <p className="text-secondary mb-4">
        The boat is your main transport, but some islands have teleport NPCs that unlock after you finish their quest chain. These teleports save serious time when farming bosses that need back-and-forth travel. Unlock each one as you progress — you'll need them for daily boss runs later.
      </p>

      <p className="text-secondary">
        Need the exact leveling route? The <Link href="/leveling" className="text-primary hover:underline">Leveling Guide</Link> has it. Boss drops covered in the <Link href="/bosses" className="text-primary hover:underline">Bosses Guide</Link>. Grab <Link href="https://codes.robloxguides.xyz" className="text-primary hover:underline">King Legacy codes</Link> for free boosts.
      </p>
    </div>
  );
}
