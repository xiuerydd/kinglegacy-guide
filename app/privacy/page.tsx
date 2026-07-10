import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How King Legacy Guide handles your information, including Google AdSense cookie usage and your options for personalized advertising.",
};

export default function PrivacyPage() {
  return (
    <div className="wrap">
      <div className="sec">
        <h2>Privacy Policy</h2>
        <p>
          King Legacy Guide respects your privacy. This policy explains how we handle your information when you visit our site.
        </p>

        <h3>Information We Collect</h3>
        <p>
          We do not collect personal information such as your name, email address, or location. Our site does not require account registration, and we do not store any user data on our servers.
        </p>
        <p>
          However, we use Google AdSense to display advertisements. Google AdSense may use cookies to serve relevant ads based on your browsing history and interests. These cookies do not identify you personally but help deliver advertisements that are more likely to interest you.
        </p>
        <p>
          You can opt out of personalized advertising by visiting{" "}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
            Google Ads Settings
          </a>
          . You may also use the Network Advertising Initiative opt-out page at{" "}
          <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">
            optout.networkadvertising.org
          </a>
          .
        </p>

        <h3>Third-Party Services</h3>
        <p>
          Our site displays advertisements served by Google AdSense, a third-party advertising network. Google may use cookies (such as the DoubleClick cookie) to serve ads based on your prior visits to this site and other websites on the Internet. Our site itself does not track you or store any personal information.
        </p>

        <h3>Cookies</h3>
        <p>
          We use essential cookies to remember your cookie consent preference. Third-party advertisers, including Google, may set cookies for ad delivery and measurement. Please see our{" "}
          <a href="/cookie-policy">Cookie Policy</a> for more details.
        </p>

        <h3>Children&apos;s Privacy</h3>
        <p>
          Our site is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe your child has provided such information, please contact us.
        </p>

        <h3>Changes</h3>
        <p>We may update this policy from time to time. Changes will be posted on this page with an updated revision date.</p>
      </div>
      <footer>
        Independent King Legacy guide. Not affiliated with Roblox Corporation or the game developer. Content is based on community experience and provided for reference only.
      </footer>
    </div>
  );
}
