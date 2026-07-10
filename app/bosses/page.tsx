import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "King Legacy Bosses Guide — Locations, Drops, Strategies",
  description: "Learn where to find every boss in King Legacy, what they drop, spawn timers, solo and group strategies, and how to farm efficiently.",
};

export default function BossesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary mb-6">King Legacy Bosses Guide</h1>
      <p className="text-secondary mb-4">
        Bosses are the best source of rare items in King Legacy — swords, accessories, upgrade materials, and big Beli drops. Know where each one spawns, how long the cooldown is, and the right strategy for your level, and boss hunting turns from a gamble into a reliable farming loop. Here's every major boss, what they drop, and how to take them on solo or with a group.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Bosses You Can Take Early</h2>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li><strong>Bandit Leader</strong> — Starter Island, near the first NPC camp. Drops basic weapons and Beli. Easy solo kill from level 15</li>
        <li><strong>Marine Captain</strong> — Marine Fortress, inside the fort compound. Drops Marine Sword, a decent early blade that carries through the first sea</li>
        <li><strong>Sand King</strong> — Sand Island, at the pyramid. Drops Sand Gear accessory (defense boost). Harder than the first two — bring healing items</li>
        <li><strong>Snow Yeti</strong> — Snow Island, in the cave system. Drops Yeti Fur for early weapon upgrades. Medium difficulty, soloable from level 70</li>
      </ul>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Stepping Up: Mid Game</h2>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li><strong>Sky Commander</strong> — Sky Islands, highest platform. Drops wing materials and a rare sword. Teleport NPC nearby makes this easy to farm repeatedly</li>
        <li><strong>Fishman Lord</strong> — Fishman Island, underwater arena. Drops aquatic armor with water resistance. Use AoE to hit through the water column — single-target skills often miss</li>
        <li><strong>Sea King</strong> — ocean spawn, travels between islands. Drops Sea materials for weapon upgrades. Requires boat combat — upgrade your ship first. The Sea King moves, so pin it against an island to stop it fleeing</li>
      </ul>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">The Big Ones</h2>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li><strong>Dark Admiral</strong> — New World, patrols between two islands. Drops high-tier swords including Bisento and Saber upgrade materials. Needs level 400+ and a coordinated group for efficient clears</li>
        <li><strong>Yonko</strong> — endgame raid boss, best loot in the game. Requires a full group with assigned roles (tank, DPS, healer). Multiple phases with different attack patterns — learn each phase before optimizing damage</li>
        <li><strong>Cursed Captain</strong> — event spawn, appears during special events. Drops curse materials for late-game accessories. Not farmable outside events, so prioritize it when it's active</li>
      </ul>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Farming Them Efficiently</h2>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li>Learn each boss's telegraph — every attack has a visual cue before it lands. Dodge the cue, dodge the damage</li>
        <li>Group farming is 2-3x faster than solo from mid-game onward</li>
        <li>Keep healing items ready and use them between phases, not during boss attacks</li>
        <li>Server hop if a boss is on cooldown — spawn timers are per-server</li>
        <li>Join the official King Legacy Discord and find a boss farming crew. Scheduled runs beat hoping for a group on random servers</li>
      </ul>

      <p className="text-secondary">
        Build around your boss drops — see the <Link href="/swords" className="text-primary hover:underline">Swords Guide</Link> and <Link href="/fruits" className="text-primary hover:underline">Fruits Guide</Link>. Active <Link href="https://codes.robloxguides.xyz" className="text-primary hover:underline">King Legacy codes</Link> for free gems and stat resets.
      </p>
    </div>
  );
}
