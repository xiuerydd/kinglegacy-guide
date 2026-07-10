export default function Home() {
  return (
    <div className="wrap">
      <section className="cover">
        <span className="pill">ROBLOX · Anime Pirate Action RPG</span>
        <h1>King Legacy Guide</h1>
        <p>Which devil fruit to pick, the fastest way to level up, and how to win PvP — a practical guide from beginner to mid-game.</p>
      </section>

      <div className="stats">
        <div className="stat"><div className="n">3 Types</div><div className="l">Logia / Zoan / Paramecia</div></div>
        <div className="stat"><div className="n">2 Factions</div><div className="l">Pirates vs Marines</div></div>
        <div className="stat"><div className="n">All Levels</div><div className="l">1 → max leveling route</div></div>
      </div>

      <div className="tag-row">
        <span className="tag">Devil Fruits</span>
        <span className="tag">Leveling</span>
        <span className="tag">Boss</span>
        <span className="tag">PvP</span>
        <span className="tag">Beginner</span>
      </div>

      <div className="sec">
        <h2>What this site covers</h2>
        <p>King Legacy is a popular One Piece–themed action RPG on Roblox with deep mechanics and lots of content. New players most often get stuck on "what to grind first, which fruit to pick, which faction to join."</p>
        <p>We break the common questions into three parts: <strong>fruit selection</strong>, <strong>leveling routes</strong>, and <strong>PvP tips</strong> — each with advice you can act on directly.</p>
        <div className="callout"><strong>Note:</strong> The game updates over time. Values and mechanics follow the game itself. This site only provides a framework and is not guaranteed to stay current.</div>
      </div>
    </div>
  );
}
