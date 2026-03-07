"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleStickyNavbar = () => {
      setSticky(window.scrollY >= 80);
    };

    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  return (
    <header
      className={`header left-0 top-0 z-40 flex w-full items-center ${
        sticky
          ? "fixed z-[9999] bg-homa-50/85 shadow-sticky backdrop-blur-sm transition dark:bg-gray-900 dark:shadow-sticky-dark"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-52 max-w-full px-4 xl:mr-12">
            <Link
              href="/"
              className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-8"}`}
            >
              <Image
                src="/images/logo/homa-logo-light.svg"
                alt="Homa logo"
                width={140}
                height={30}
                className="w-full dark:hidden"
              />
              <Image
                src="/images/logo/homa-logo-dark.svg"
                alt="Homa logo"
                width={140}
                height={30}
                className="hidden w-full dark:block"
              />
            </Link>
          </div>

          <div className="flex items-center justify-end px-4">
            <Link
              href="#"
              className="hidden px-7 py-3 text-base font-medium text-homa-800 hover:opacity-70 dark:text-white md:block"
            >
              Sign In
            </Link>
            <Link
              href="#"
              className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-lg bg-gradient-to-r from-homa-700 to-clay-600 px-8 py-3 text-base font-medium text-white transition duration-300 hover:from-homa-800 hover:to-clay-700 md:block md:px-9 lg:px-6 xl:px-9"
            >
              Create Account
            </Link>
            <div>
              <ThemeToggler />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
