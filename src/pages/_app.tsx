import { Toaster } from "@/components/ui/toaster";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";

declare global {
  interface Window {
    googleTranslateInit?: () => void;
    google?: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Load Google Translate once per session
  useEffect(() => {
    const addScript = () => {
      if (document.getElementById("google-translate-script")) return;
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateInit";
      document.body.appendChild(script);
    };

    window.googleTranslateInit = () => {
      if (!window.google) return;
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es,fr,de,pt,it",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    addScript();
  }, []);

  // Re-apply the selected language after client-side navigation
  useEffect(() => {
    const handleRouteChangeComplete = () => {
      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (select && select.value && select.value !== "en") {
        setTimeout(() => {
          select.dispatchEvent(new Event("change"));
        }, 100);
      }
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <>
      <Component {...pageProps} />
      <Toaster />
      <CookieConsentBanner />
      <div id="google_translate_element" className="hidden" />
    </>
  );
}