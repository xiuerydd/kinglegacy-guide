import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "King Legacy Devil Fruits Guide — Best Fruits by Type",
  description: "Complete King Legacy devil fruits guide. Logia, Zoan, Paramecia breakdown. Best fruits for grinding, PvP, and how to switch safely.",
};

export default function FruitsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary mb-6">King Legacy Devil Fruits Guide</h1>
      <p className="text-secondary mb-4">
        Three fruit families exist in King Legacy — Logia, Zoan, and Paramecia — and each one fits a different stage of the game. Pick the wrong one early and grinding feels twice as slow. Here's what each type actually does, the ones worth using for PvE vs. PvP, how awakening works, and when to switch.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Logia: Your First Fruit Should Be One</h2>
      <p className="text-secondary mb-4">
        Logia fruits turn you into an element. Your attacks pierce through enemies and hit multiple at once, making them the fastest leveling type through the first and second sea. Flame, Ice, and Dark are the most common — cheap from the shop and deadly on crowded spawns. If you're starting fresh, grab a Logia first.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Zoan: Where Beast Types Shine</h2>
      <p className="text-secondary mb-4">
        Zoan fruits transform you into a creature with boosted stats, HP, and damage. They're average early but absolutely dominant later, especially the Mythical ones — Dragon, Phoenix, Leopard. If you're past the second sea and have some budget, a Mythical Zoan is the strongest thing you can buy for both PvE boss fights and PvP. The survivability alone makes them forgiving in tough content.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Paramecia: High Risk, Higher Reward</h2>
      <p className="text-secondary mb-4">
        Paramecia fruits have the most creative movesets and the highest damage ceiling — but they demand more from you than Logia or Zoan. If you know your combos and can read your opponent, a Paramecia outperforms everything else. For newer players they feel clunky. Dough, Venom, and Spirit are the standouts.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Before You Switch</h2>
      <p className="text-secondary mb-4">
        Switching clears your current fruit entirely — abilities, mastery, everything. So don't do it lightly. Rare fruits come from boss drops or trading, and ignore anyone DMing you about "free fruits" — that's how accounts get scammed. Some fruits have awakenings that need specific materials, so check before you commit. If you can, test a fruit's moveset through videos or a friend's account before spending your Beli.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">What Awakening Actually Does</h2>
      <p className="text-secondary mb-4">
        Awakening upgrades your fruit's moves to stronger versions with new effects. It costs fragments from raids and some materials. Awaken your PvP fruit first — the stat gains matter most against players.
      </p>

      <p className="text-secondary">
        Need the fastest leveling route? Hit up the <Link href="/leveling" className="text-primary hover:underline">Leveling Guide</Link>. For PvP builds, see the <Link href="/pvp" className="text-primary hover:underline">PvP Guide</Link>. And grab <Link href="https://codes.robloxguides.xyz" className="text-primary hover:underline">King Legacy codes</Link> for free gems while they're active.
      </p>
    </div>
  );
}
