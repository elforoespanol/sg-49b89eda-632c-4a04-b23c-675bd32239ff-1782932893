"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CookieConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setShow(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t border-border shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-foreground">🍪 Cookie Consent</p>
          <p className="text-xs text-foreground/70 mt-1">
            We use cookies to analyze engagement, prevent spam, and improve your learning experience. You can modify or revoke your choices anytime via our{" "}
            <Link href="/cookie-consent-policy" className="text-primary hover:underline font-medium">
              Cookie Policy
            </Link>.
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline" size="sm" onClick={handleReject} className="text-xs font-medium">
            Reject Non-Essential
          </Button>
          <Button size="sm" onClick={handleAccept} className="bg-primary hover:bg-primary/90 text-xs font-medium text-white">
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
}