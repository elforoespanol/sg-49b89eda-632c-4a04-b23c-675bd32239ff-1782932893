import { X } from "lucide-react";
import { useState } from "react";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-accent text-accent-foreground py-3 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
        <a 
          href="https://learnspanishlikeidid.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-center font-semibold text-sm md:text-base hover:underline"
        >
          🎉 Special Offer: 50% off our Master Spanish Course - Limited Time!
        </a>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
          aria-label="Close announcement"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}