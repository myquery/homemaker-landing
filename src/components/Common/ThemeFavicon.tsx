"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

const LIGHT_FAVICON = "/favicon-light.svg";
const DARK_FAVICON = "/favicon-dark.svg";

export default function ThemeFavicon() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const href = resolvedTheme === "dark" ? DARK_FAVICON : LIGHT_FAVICON;
    let iconLink = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;

    if (!iconLink) {
      iconLink = document.createElement("link");
      iconLink.rel = "icon";
      document.head.appendChild(iconLink);
    }

    iconLink.type = "image/svg+xml";
    iconLink.href = href;
  }, [resolvedTheme]);

  return null;
}
