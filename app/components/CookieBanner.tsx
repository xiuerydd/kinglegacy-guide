"use client";

import { useEffect, useState } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookies-accepted")) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p>We use cookies and similar technologies to enhance your experience and serve personalized ads. By clicking &quot;Accept&quot;, you consent to our use of cookies.</p>
      <button
        onClick={() => {
          localStorage.setItem("cookies-accepted", "true");
          setVisible(false);
        }}
      >
        Accept
      </button>
    </div>
  );
}
