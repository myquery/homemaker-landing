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
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-md shadow-amber-500/20 transition-all duration-300 ease-in-out hover:from-amber-600 hover:to-amber-700 hover:shadow-amber-600/30 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 dark:from-amber-600 dark:to-amber-700 dark:hover:from-amber-700 dark:hover:to-amber-800"
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-l-2 border-t-2 border-white"></span>
        </button>
      )}
    </div>
  );
}