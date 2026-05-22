import { Toaster } from "@/components/ui/toaster";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
      <CookieConsentBanner />
    </>
  );
}
