import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How King Legacy Guide uses cookies, including Google AdSense advertising cookies, and how you can control your cookie preferences.",
};

export default function CookiePolicyPage() {
  return (
    <div className="wrap">
      <div className="sec">
        <h2>Cookie Policy</h2>
        <p>
          This Cookie Policy explains what cookies are, how King Legacy Guide uses them, and your options for managing cookie preferences.
        </p>

        <h3>What Are Cookies?</h3>
        <p>
          Cookies are small text files stored on your device by websites you visit. They are widely used to make websites work efficiently and to provide information to site owners and advertisers.
        </p>

        <h3>How We Use Cookies</h3>
        <p>
          <strong>Essential Cookies:</strong> We use a single essential cookie to remember whether you have accepted our cookie notice. This cookie stores only your consent preference and is not used for tracking.
        </p>
        <p>
          <strong>Advertising Cookies:</strong> Google AdSense, our advertising partner, may set cookies on your device to:
        </p>
        <ul>
          <li>Serve advertisements relevant to your interests</li>
          <li>Limit the number of times you see the same ad</li>
          <li>Measure the effectiveness of advertising campaigns</li>
          <li>Detect click fraud and ensure ad quality</li>
        </ul>
        <p>
          These cookies do not collect personal information like your name or email address. They use anonymous identifiers associated with your browser.
        </p>

        <h3>Managing Cookies</h3>
        <p>You can control and manage cookies in several ways:</p>
        <ul>
          <li>
            <strong>Google Ads Settings:</strong> Visit{" "}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
              Google Ads Settings
            </a>{" "}
            to control personalized advertising.
          </li>
          <li>
            <strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies through their settings. Note that blocking cookies may affect your browsing experience on many websites.
          </li>
          <li>
            <strong>Opt-Out Programs:</strong> You can opt out of interest-based advertising from participating companies through the{" "}
            <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer">
              Digital Advertising Alliance
            </a>{" "}
            or the{" "}
            <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer">
              European Interactive Digital Advertising Alliance
            </a>
            .
          </li>
        </ul>

        <h3>Changes</h3>
        <p>We may update this Cookie Policy from time to time. Changes will be posted on this page.</p>
      </div>
      <footer>
        Independent King Legacy guide. Not affiliated with Roblox Corporation or the game developer. Content is based on community experience and provided for reference only.
      </footer>
    </div>
  );
}
