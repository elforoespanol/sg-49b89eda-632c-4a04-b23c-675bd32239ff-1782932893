"use client";

import { useState, useRef, useEffect } from "react";
import { Languages } from "lucide-react";

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lang: string) => {
    const applyTranslation = () => {
      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (!select) return false;
      select.value = lang;
      select.dispatchEvent(new Event("change"));
      return true;
    };

    // Apply immediately if the widget is ready; otherwise retry briefly
    if (!applyTranslation()) {
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (applyTranslation() || attempts > 30) {
          clearInterval(interval);
        }
      }, 100);
    }

    setIsOpen(false);
  };

  const languages = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
    { code: "pt", label: "Português", flag: "🇵🇹" },
    { code: "it", label: "Italiano", flag: "🇮🇹" },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 border border-secondary/30 text-secondary font-sans font-semibold px-4 py-2.5 rounded-2xl hover:bg-secondary/5 transition-colors"
        aria-label="Translate page"
      >
        <Languages className="w-4 h-4" />
        <span className="hidden sm:inline text-sm">Translate</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-white border border-border/60 rounded-2xl shadow-lg py-2 min-w-[180px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="w-full text-left px-4 py-2.5 hover:bg-muted/60 transition-colors font-sans text-sm text-foreground flex items-center gap-3"
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}