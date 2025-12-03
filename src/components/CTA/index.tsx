'use client'

import Link from "next/link";
import { ArrowRightIcon, PlayIcon, HomeIcon, CurrencyDollarIcon, ShoppingBagIcon, StarIcon } from '@heroicons/react/24/outline';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block">Shopping Experience?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of homemakers who are already earning rewards on every purchase. Start your journey to smarter shopping today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-gray-900 transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-lg"
            >
              Get Started Free
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              <PlayIcon className="mr-2 h-5 w-5" />
              Watch Demo
            </Link>
          </div>

          {/* App Store Badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-white/80 text-sm font-medium mb-2 sm:mb-0">
              Download the app:
            </div>
            <div className="flex gap-4">
              <Link href="#" className="transition-transform hover:scale-105">
                <div className="flex items-center gap-3 bg-black rounded-lg px-4 py-3 min-w-[140px]">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Download on the</div>
                    <div className="text-sm font-semibold text-white">App Store</div>
                  </div>
                </div>
              </Link>
              <Link href="#" className="transition-transform hover:scale-105">
                <div className="flex items-center gap-3 bg-black rounded-lg px-4 py-3 min-w-[140px]">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Get it on</div>
                    <div className="text-sm font-semibold text-white">Google Play</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-20 left-20 animate-pulse">
        <HomeIcon className="h-10 w-10 text-white/20" />
      </div>
      <div className="absolute bottom-20 right-20 animate-pulse">
        <CurrencyDollarIcon className="h-10 w-10 text-white/20" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-pulse">
        <ShoppingBagIcon className="h-8 w-8 text-white/20" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 animate-pulse">
        <StarIcon className="h-8 w-8 text-white/20" />
      </div>
    </section>
  );
};

export default CTA;