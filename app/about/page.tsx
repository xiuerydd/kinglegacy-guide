import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About King Legacy Guide — an independent strategy resource for King Legacy players, unaffiliated with Roblox Corporation.",
};

export default function AboutPage() {
  return (
    <div className="wrap">
      <div className="sec">
        <h2>About King Legacy Guide</h2>
        <p>
          King Legacy Guide is an independent, community-driven resource for King Legacy players. We provide strategy guides on devil fruit selection, leveling routes, PvP tactics, and faction recommendations. Our goal is to help both new and experienced players make informed decisions without requiring login or registration.
        </p>
        <p>
          All content is based on community experience, in-game testing, and publicly available information. We update our guides regularly to reflect game updates and meta shifts.
        </p>
        <p>
          <strong>Important:</strong> King Legacy Guide is an independent fan site. We are not affiliated with, endorsed by, or connected to Roblox Corporation, the King Legacy development team, or any official entity. All trademarks and game content belong to their respective owners.
        </p>
      </div>
      <footer>
        Independent King Legacy guide. Not affiliated with Roblox Corporation or the game developer. Content is based on community experience and provided for reference only.
      </footer>
    </div>
  );
}
