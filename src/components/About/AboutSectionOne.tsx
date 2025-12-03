

'use client'

import Image from "next/image";
import { HomeIcon, ShoppingBagIcon, CurrencyDollarIcon, StarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const features = [
    "Smart shopping lists with AI recommendations",
    "Exclusive member rewards and cashback",
    "Family-friendly budgeting tools",
    "Personalized deals from 500+ stores",
    "Real-time spending analytics",
    "Secure $HOME token wallet"
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="max-w-[570px]">
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 mb-4">
                <ShieldCheckIcon className="h-4 w-4" />
                Why Choose HomeMaker
              </span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Built for Modern
                <span className="block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  Homemakers
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                HomeMaker revolutionizes household management by combining smart shopping with rewarding experiences. Save time, earn rewards, and make every purchase count toward building your dream home.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 16 13">
                        <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 border-2 border-white"></div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      Join 10,000+ homemakers
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Already earning rewards daily
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-4">
            <div className="relative mx-auto max-w-[500px] lg:ml-auto lg:mr-0">
              <div className="relative z-10">
                <Image
                  src="/images/about/homemaker-shopping-orange.svg"
                  alt="Happy homemaker shopping"
                  width={500}
                  height={480}
                  className="mx-auto max-w-full dark:hidden"
                />
                <Image
                  src="/images/about/homemaker-woman-shopping.svg"
                  alt="Happy homemaker shopping at night"
                  width={500}
                  height={480}
                  className="mx-auto hidden max-w-full dark:block"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full opacity-60 animate-pulse flex items-center justify-center">
                <StarIcon className="h-8 w-8 text-amber-600" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full opacity-40 animate-pulse flex items-center justify-center">
                <ShoppingBagIcon className="h-10 w-10 text-green-600" />
              </div>
              <div className="absolute top-1/2 -right-8 w-14 h-14 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-50 animate-pulse flex items-center justify-center">
                <CurrencyDollarIcon className="h-7 w-7 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
