import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "King Legacy PvP Guide — Combos, Movement, Matchups",
  description: "Master King Legacy PvP. Learn combos, dodging, fruit matchups, and the mindset that wins fights. Tips for Logia, Zoan, and Paramecia builds.",
};

export default function PvpPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary mb-6">King Legacy PvP Guide</h1>
      <p className="text-secondary mb-4">
        PvP in King Legacy comes down to timing and matchup knowledge — not your level or having the rarest fruit. A player with a common fruit and a practiced combo will beat someone spamming a Mythical any day. Here's the combo flow, how to move, and how to adapt to each fruit type.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">How Every Combo Works</h2>
      <p className="text-secondary mb-4">
        Every reliable combo follows the same flow: start, extend, finish. Open with something fast to stun or close distance — a dash, a quick sword slash, or a low-windup fruit skill. Then extend with utility moves to keep them locked: mobility skills, area denial, or knock-up. Finish with your highest-damage move while they can't dodge. Opening with your ultimate is the most common mistake — the long wind-up lets them escape and punish you for it.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Don't Stand Still</h2>
      <p className="text-secondary mb-4">
        Standing still gets you killed in King Legacy PvP. Circle-strafe. Jump between attacks. Never commit to a full combo unless you know your opponent has no dodge left. Sidestepping sideways dodges more than running backward — most skills have forward range but terrible lateral tracking. Use dodge charges only to escape a confirmed combo, not to reposition. Burn both early and you're defenseless.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Know Your Matchup</h2>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li><strong>Logia vs. Zoan</strong> — Logia hates close-range grabs that bypass immunity. Keep distance, poke, never let a Zoan get close</li>
        <li><strong>Zoan vs. Paramecia</strong> — Zoan wants to outlast the initial burst. Paramecia wants to end it fast before tankiness kicks in</li>
        <li><strong>Paramecia vs. Logia</strong> — Paramecia wins a direct trade, but Logia mobility makes pinning them hard. Force corners</li>
        <li><strong>Sword + Fruit synergy</strong> — a fast sword (Saber, Mochi) covers your fruit's downtime. A slow sword needs a fruit with strong neutral game</li>
      </ul>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">The First 20 Seconds</h2>
      <p className="text-secondary mb-4">
        Watch for patterns right away. Does your opponent always dodge backward after attacking? Do they open with the same skill every time? Are they passive or aggressive? Find one habit and exploit it. If they always dodge left, aim your next skill slightly left. The mental game matters more than the mechanical one.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Stuff That Gets You Killed</h2>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li>Spamming ultimates — you're wide open during every wind-up</li>
        <li>Standing still while attacking — easy to kite and counter</li>
        <li>Ignoring fruit matchups — walking into a hard counter loses before the fight starts</li>
        <li>Chasing lost fights — disengage and reset if you're way behind</li>
      </ul>

      <p className="text-secondary">
        Your race matters too — check the <Link href="/races" className="text-primary hover:underline">Races Guide</Link>. Need a better sword for your combo? See the <Link href="/swords" className="text-primary hover:underline">Swords Guide</Link>. Don't miss active <Link href="https://codes.robloxguides.xyz" className="text-primary hover:underline">King Legacy codes</Link> for free stat resets.
      </p>
    </div>
  );
}
