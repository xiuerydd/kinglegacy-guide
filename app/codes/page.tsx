import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "King Legacy Codes (July 2026) — Active and Working",
  description: "Updated King Legacy codes for July 2026. Redeem for free gems, stat resets, XP boosts, and items. Check expiry info and how to redeem.",
};

export default function CodesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary mb-6">King Legacy Codes (July 2026)</h1>
      <p className="text-secondary mb-4">
        Codes are the easiest way to get free gems, stat resets, and XP boosts in King Legacy. The catch? They expire fast. We keep this list updated so you're not typing dead codes.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Active Codes Right Now</h2>
      <ul className="list-disc pl-6 text-secondary space-y-2 mb-6">
        <li><strong>KINGUPD8</strong> — 100 gems + stat reset</li>
        <li><strong>KINGBOOST</strong> — 2x XP for 30 minutes</li>
        <li><strong>SUMMER2026</strong> — 50 gems + cosmetic item</li>
        <li><strong>LEGACYFIX</strong> — stat reset</li>
        <li><strong>SEAVOYAGE</strong> — 75 gems</li>
      </ul>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">How to Redeem</h2>
      <p className="text-secondary mb-4">
        Open the game, press the <strong>Menu</strong> button (usually the Twitter/X icon on the side of the screen), paste or type the code into the text box, and hit confirm. If it doesn't work, the code has likely expired or you've already redeemed it. Codes are case-sensitive, so type them exactly as shown.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">Expired Codes and Rotation</h2>
      <p className="text-secondary mb-4">
        King Legacy codes typically last 1-2 weeks before expiring. Update days (usually Fridays) are when new codes drop. If a code from last month doesn't work, that's normal — the dev cycle moves fast. We purge expired codes from the list above as soon as we confirm they're dead.
      </p>

      <h2 className="text-xl font-semibold text-primary mt-8 mb-3">More Codes and Updates</h2>
      <p className="text-secondary">
        We maintain a full, real-time code list at <Link href="https://codes.robloxguides.xyz" className="text-primary hover:underline">codes.robloxguides.xyz</Link> — bookmark that for the freshest codes across all Roblox games, not just King Legacy. And while you're here, the <Link href="/fruits" className="text-primary hover:underline">Fruits Guide</Link> can help you spend those gems wisely.
      </p>
    </div>
  );
}
