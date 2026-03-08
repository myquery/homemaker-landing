"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-homa-800 via-homa-700 to-clay-600 text-white shadow-md shadow-homa-900/20 transition-all duration-300 ease-in-out hover:from-homa-900 hover:via-homa-800 hover:to-clay-700 hover:shadow-homa-900/30 focus:outline-none focus:ring-2 focus:ring-homa-500 focus:ring-opacity-60 dark:from-homa-700 dark:via-homa-600 dark:to-clay-600 dark:hover:from-homa-800 dark:hover:via-homa-700 dark:hover:to-clay-700"
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-l-2 border-t-2 border-white"></span>
        </button>
      )}
    </div>
  );
}
