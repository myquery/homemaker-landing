"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-homa-50 pt-16 dark:bg-gray-900 md:pt-20 lg:pt-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link href="/" className="mb-8 inline-block">
                <Image
                  src="/images/logo/logo-2.svg"
                  alt="Homa logo"
                  className="w-full dark:hidden"
                  width={140}
                  height={30}
                />
                <Image
                  src="/images/logo/logo.svg"
                  alt="Homa logo"
                  className="hidden w-full dark:block"
                  width={140}
                  height={30}
                />
              </Link>
              <p className="mb-9 text-base leading-relaxed text-homa-800 dark:text-homa-200">
                Homa helps users combine earning, holding, growing, spending, cooperating, and governing in one coordinated financial system.
              </p>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-homa-900 dark:text-homa-100">Platform</h2>
              <ul>
                <li>
                  <Link href="#" className="mb-4 inline-block text-base text-homa-800 duration-300 hover:text-homa-600 dark:text-homa-300 dark:hover:text-homa-200">
                    Pillars
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mb-4 inline-block text-base text-homa-800 duration-300 hover:text-homa-600 dark:text-homa-300 dark:hover:text-homa-200">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mb-4 inline-block text-base text-homa-800 duration-300 hover:text-homa-600 dark:text-homa-300 dark:hover:text-homa-200">
                    Governance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mb-4 inline-block text-base text-homa-800 duration-300 hover:text-homa-600 dark:text-homa-300 dark:hover:text-homa-200">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-homa-900 dark:text-homa-100">Company</h2>
              <ul>
                <li>
                  <Link href="#" className="mb-4 inline-block text-base text-homa-800 duration-300 hover:text-homa-600 dark:text-homa-300 dark:hover:text-homa-200">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mb-4 inline-block text-base text-homa-800 duration-300 hover:text-homa-600 dark:text-homa-300 dark:hover:text-homa-200">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mb-4 inline-block text-base text-homa-800 duration-300 hover:text-homa-600 dark:text-homa-300 dark:hover:text-homa-200">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="mb-4 inline-block text-base text-homa-800 duration-300 hover:text-homa-600 dark:text-homa-300 dark:hover:text-homa-200">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-homa-900 dark:text-homa-100">Contact</h2>
              <ul>
                <li className="mb-4 text-base text-homa-800 dark:text-homa-300">
                  Email: <a href="mailto:info@homa.finance" className="hover:underline">info@homa.finance</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-homa-100 py-8 dark:border-gray-700">
          <p className="text-center text-sm text-homa-700 dark:text-homa-300">
            &copy; {new Date().getFullYear()} Homa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
