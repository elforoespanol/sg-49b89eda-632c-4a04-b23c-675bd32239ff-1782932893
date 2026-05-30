import { X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 text-center">
            <p className="text-sm md:text-base font-semibold">
              Special Offer: 50% off our Master Spanish Course - Limited Time!{" "}
              <Link 
                href="https://learnspanishlikeidid.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary underline underline-offset-4 hover:text-secondary/80 transition-colors font-bold"
              >
                Explore Now
              </Link>
            </p>
          </div>
          
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 hover:bg-white/10 p-1 rounded transition-colors"
            aria-label="Close announcement"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}