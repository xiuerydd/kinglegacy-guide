import type { Metadata } from "next";
import "./globals.css";
import { CookieBanner } from "./components/CookieBanner";
import { ThemeToggle } from "./components/ThemeToggle";

export const metadata: Metadata = {
  title: {
    default: "King Legacy Guide — Fruits / Leveling / PvP Tips",
    template: "%s · King Legacy Guide",
  },
  description:
    "Independent King Legacy guide: devil fruit selection, leveling routes, and PvP tips. Faction basics included. No login required.",
  keywords: ["King Legacy guide", "King Legacy fruits", "King Legacy leveling", "Roblox King Legacy"],
  metadataBase: new URL("https://kinglegacy.robloxguides.xyz"),
  openGraph: { title: "King Legacy Guide", description: "Fruits / Leveling / PvP Tips", type: "website" },
};

const nav = [
  { href: "/", label: "Home" },
  { href: "/fruits", label: "Fruits" },
  { href: "/leveling", label: "Leveling" },
  { href: "/pvp", label: "PvP" },
  { href: "/fishing", label: "Fishing" },
  { href: "/codes", label: "Codes" },
];

const siblings = [
  { href: "https://roblox.robloxguides.xyz", label: "Home" },
  { href: "https://tools.robloxguides.xyz", label: "Tools" },
  { href: "https://pcg.robloxguides.xyz", label: "PCG" },
  { href: "https://calc.robloxguides.xyz", label: "Calc" },
  { href: "https://devtools.robloxguides.xyz", label: "DevTools" },
  { href: "https://sports.robloxguides.xyz", label: "Sports" },
  { href: "https://codes.robloxguides.xyz", label: "Codes" },
  { href: "https://robux.robloxguides.xyz", label: "Robux" },
  { href: "https://bloxfruits.robloxguides.xyz", label: "Blox Fruits" },
  { href: "https://adoptme.robloxguides.xyz", label: "Adopt Me" },
  { href: "https://kinglegacy.robloxguides.xyz", label: "King Legacy" },
  { href: "https://petsim99.robloxguides.xyz", label: "PS99" },
  { href: "https://animeadv.robloxguides.xyz", label: "Anime Adv" },
  { href: "https://mm2.robloxguides.xyz", label: "MM2" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7687330138473612" crossOrigin="anonymous" />
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(t){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();` }} />
      </head>
      <body>
        <div className="bar">
          <div className="inner">
            <div className="logo">KING LEGACY GUIDE</div>
            <nav>
              {nav.map((n) => (
                <a key={n.href} href={n.href}>{n.label}</a>
              ))}
              <ThemeToggle />
            </nav>
          </div>
        </div>
          <img src="/hero.svg" alt="" style={{width:"100%",maxWidth:"800px",height:"auto",margin:"0 auto 24px",display:"block",borderRadius:"16px"}} />

          {children}
        <footer>
          <div className="footer-nav">
            <a href="/privacy">Privacy</a>
            <a href="/cookie-policy">Cookies</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/terms">Terms</a>
          </div>
          <p>Independent King Legacy guide. Not affiliated with Roblox Corporation or the game developer. Content is based on community experience and provided for reference only.</p>
          <div className="footer-siblings">
            <span>RobloxGuides Network:</span>
            {siblings.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
            ))}
          </div>
        </footer>
        <CookieBanner />
      </body>
    </html>
  );
}
