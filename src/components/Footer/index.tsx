
"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-amber-50 pt-16 dark:bg-gray-900 md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {/* Logo and Intro */}
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/logo-2.svg"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/images/logo/logo.svg"
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="mb-9 text-base leading-relaxed text-amber-800 dark:text-amber-200">
                  HomeMaker transforms household spending into valuable rewards for families while helping local businesses thrive.
                </p>
                {/* Social icons omitted for brevity, already complete */}
              </div>
            </div>

            {/* Useful Links */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-amber-900 dark:text-amber-100">
                  Useful Links
                </h2>
                <ul>
                  <li>
                    <Link href="#" className="mb-4 inline-block text-base text-amber-800 duration-300 hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-400">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="mb-4 inline-block text-base text-amber-800 duration-300 hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-400">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="mb-4 inline-block text-base text-amber-800 duration-300 hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-400">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="mb-4 inline-block text-base text-amber-800 duration-300 hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-400">
                      Features
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Support */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-amber-900 dark:text-amber-100">
                  Support
                </h2>
                <ul>
                  <li>
                    <Link href="#" className="mb-4 inline-block text-base text-amber-800 duration-300 hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-400">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="mb-4 inline-block text-base text-amber-800 duration-300 hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-400">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="mb-4 inline-block text-base text-amber-800 duration-300 hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-400">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="mb-4 inline-block text-base text-amber-800 duration-300 hover:text-amber-600 dark:text-amber-300 dark:hover:text-amber-400">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-amber-900 dark:text-amber-100">
                  Contact Info
                </h2>
                <ul>
                  {/* <li className="mb-4 text-base text-amber-800 dark:text-amber-300">
                    123 Local Market Street, Lagos, Nigeria
                  </li> */}
                  <li className="mb-4 text-base text-amber-800 dark:text-amber-300">
                    Email: <a href="mailto:support@homemaker.ng" className="hover:underline">info@myhomemakr.com</a>
                  </li>
                  {/* <li className="text-base text-amber-800 dark:text-amber-300">
                    Phone: <a href="tel:+2348012345678" className="hover:underline">+234 801 234 5678</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          {/* Footer bottom text */}
          <div className="border-t border-amber-100 py-8 dark:border-gray-700">
            <p className="text-center text-sm text-amber-700 dark:text-amber-300">
              &copy; {new Date().getFullYear()} HomeMaker. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
