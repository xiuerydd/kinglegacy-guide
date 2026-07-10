import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact King Legacy Guide for questions, suggestions, or content corrections. We welcome community feedback.",
};

export default function ContactPage() {
  return (
    <div className="wrap">
      <div className="sec">
        <h2>Contact Us</h2>
        <p>
          Have a question, suggestion, or correction for our King Legacy guides? We welcome feedback from the community.
        </p>
        <p>
          For general inquiries, corrections to guide content, or to report issues with the site, please reach out to us at{" "}
          <strong>robloxguides.xyz@gmail.com</strong>.
        </p>
        <p>
          For advertising and partnership inquiries, please use the same email with &quot;Advertising&quot; in the subject line.
        </p>
        <p>
          We strive to respond within 2-3 business days. Please note that we cannot provide in-game support, recover lost accounts or items, or assist with Roblox account issues.
        </p>
      </div>
      <footer>
        Independent King Legacy guide. Not affiliated with Roblox Corporation or the game developer. Content is based on community experience and provided for reference only.
      </footer>
    </div>
  );
}
