import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for King Legacy Guide. By using this site, you agree to these terms regarding content accuracy, third-party ads, and intellectual property.",
};

export default function TermsPage() {
  return (
    <div className="wrap">
      <div className="sec">
        <h2>Terms of Use</h2>
        <p>
          By accessing and using King Legacy Guide, you agree to be bound by these Terms of Use. If you do not agree, please do not use this site.
        </p>

        <h3>Content Disclaimer</h3>
        <p>
          All guides, tips, and strategy information on this site are provided for informational and entertainment purposes only. While we strive for accuracy, game mechanics may change, and we make no guarantees that all content is current or error-free. Use the information at your own discretion.
        </p>
        <p>
          This site is an independent fan resource and is not affiliated with or endorsed by Roblox Corporation, the King Legacy development team, or any related entities. All trademarks, game assets, and intellectual property referenced belong to their respective owners.
        </p>

        <h3>Third-Party Advertisements</h3>
        <p>
          This site displays advertisements served by Google AdSense and other third-party advertising networks. We are not responsible for the content of these advertisements or any third-party websites linked from them. Your interactions with advertisers are between you and the advertiser.
        </p>

        <h3>Limitation of Liability</h3>
        <p>
          King Legacy Guide and its operators shall not be liable for any damages arising from the use of or inability to use this site, including but not limited to direct, indirect, incidental, or consequential damages. This includes any losses related to in-game accounts, items, or progress.
        </p>

        <h3>Intellectual Property</h3>
        <p>
          Original guide content (text, structure, and original strategy analysis) is the property of King Legacy Guide. You may not reproduce, distribute, or republish our content for commercial purposes without permission. Fair use for personal reference and short quotations with attribution is permitted.
        </p>

        <h3>Changes</h3>
        <p>These terms may be updated at any time. Continued use of the site after changes constitutes acceptance of the revised terms.</p>
      </div>
      <footer>
        Independent King Legacy guide. Not affiliated with Roblox Corporation or the game developer. Content is based on community experience and provided for reference only.
      </footer>
    </div>
  );
}
