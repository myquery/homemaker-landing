import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ThemeToggler = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-10 w-[88px] items-center rounded-full border border-homa-300/80 bg-white/90 p-1 shadow-sm transition-all duration-300 hover:shadow-md dark:border-homa-400/50 dark:bg-[#1D2A1D]"
    >
      <span className="pointer-events-none absolute inset-0 flex items-center justify-between px-3 text-[10px] font-semibold uppercase tracking-[0.08em] text-homa-700 dark:text-white/90">
        <span className={`${isDark ? "opacity-45" : "opacity-100"} transition-opacity duration-200`}>
          Day
        </span>
        <span className={`${isDark ? "opacity-100" : "opacity-45"} transition-opacity duration-200`}>
          Night
        </span>
      </span>

      <span
        className={`relative z-10 flex h-8 w-8 transform items-center justify-center rounded-full bg-gradient-to-r from-homa-700 to-clay-600 text-white shadow transition-transform duration-300 ${
          isDark ? "translate-x-12" : "translate-x-0"
        }`}
      >
        {isDark ? <MoonIcon className="h-4 w-4" /> : <SunIcon className="h-4 w-4" />}
      </span>
    </button>
  );
};

export default ThemeToggler;
