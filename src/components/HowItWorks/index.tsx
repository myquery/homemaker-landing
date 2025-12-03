'use client'

import { ShoppingBagIcon, CurrencyDollarIcon, GiftIcon, MapPinIcon, TicketIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Shop & Scan",
      description: "Shop at any of our 500+ partner stores and scan your receipts or link your cards to automatically track purchases.",
      icon: ShoppingBagIcon,
      illustration: (
        <div className="w-full h-72 bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl flex items-center justify-center shadow-lg">
          <ShoppingBagIcon className="h-28 w-28 text-orange-600" />
        </div>
      )
    },
    {
      step: "02", 
      title: "Earn Rewards",
      description: "Automatically earn $HOME tokens on every purchase. The more you spend on household essentials, the more you earn.",
      icon: CurrencyDollarIcon,
      illustration: (
        <div className="w-full h-72 bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl flex items-center justify-center shadow-lg">
          <CurrencyDollarIcon className="h-28 w-28 text-orange-600" />
        </div>
      )
    },
    {
      step: "03",
      title: "Shop Near You",
      description: "Shop in your favorite stores near you and discover local deals and exclusive offers from nearby retailers.",
      icon: MapPinIcon,
      illustration: (
        <div className="w-full h-72 bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl flex items-center justify-center shadow-lg">
          <MapPinIcon className="h-28 w-28 text-orange-600" />
        </div>
      )
    },
    {
      step: "04",
      title: "Claim Discounts",
      description: "Use your $HOME tokens to claim discounts and exclusive offers at checkout for maximum savings.",
      icon: TicketIcon,
      illustration: (
        <div className="w-full h-72 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl flex items-center justify-center shadow-lg">
          <TicketIcon className="h-28 w-28 text-orange-500" />
        </div>
      )
    },
    {
      step: "05",
      title: "Share & Earn",
      description: "Share tips with the community and earn bonus points for helping other homemakers save money and shop smarter.",
      icon: UserGroupIcon,
      illustration: (
        <div className="w-full h-72 bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl flex items-center justify-center shadow-lg">
          <UserGroupIcon className="h-28 w-28 text-orange-600" />
        </div>
      )
    },
    {
      step: "06",
      title: "Redeem & Save",
      description: "Use your accumulated tokens for cashback, gift cards, or exclusive discounts on future purchases. Make every dollar count.",
      icon: GiftIcon,
      illustration: (
        <div className="w-full h-72 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl flex items-center justify-center shadow-lg">
          <GiftIcon className="h-28 w-28 text-orange-500" />
        </div>
      )
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 mb-4">
            <CurrencyDollarIcon className="h-4 w-4" />
            How It Works
          </span>
          <h2 className="text-4xl font-black leading-[1.1] text-gray-900 dark:text-white mb-6 sm:text-5xl lg:text-6xl">
            Start Earning in
            <span className="block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              6 Simple Steps
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Transform your everyday shopping into valuable rewards with our simple and intuitive process.
          </p>
        </div>

        {/* Creative Steps Layout */}
        <div className="relative">
          {/* Animated Progress Path */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
              <path d="M100 200 Q300 100 500 200 T900 200 Q1000 250 1100 300" stroke="#fed7aa" strokeWidth="3" strokeDasharray="10,10" opacity="0.5">
                <animate attributeName="stroke-dashoffset" values="0;20" dur="2s" repeatCount="indefinite" />
              </path>
              
              {/* Progress Dots */}
              <circle cx="100" cy="200" r="4" fill="#f97316" className="animate-pulse" />
              <circle cx="300" cy="150" r="4" fill="#f97316" className="animate-pulse" style={{animationDelay: '0.3s'}} />
              <circle cx="500" cy="200" r="4" fill="#f97316" className="animate-pulse" style={{animationDelay: '0.6s'}} />
              <circle cx="700" cy="150" r="4" fill="#f97316" className="animate-pulse" style={{animationDelay: '0.9s'}} />
              <circle cx="900" cy="200" r="4" fill="#f97316" className="animate-pulse" style={{animationDelay: '1.2s'}} />
            </svg>
          </div>

          {/* Step 1 - Large Left */}
          <div className="mb-16 lg:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg">
                    01
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Shop & Scan</h3>
                    <p className="text-gray-600 dark:text-gray-300">Shop at any of our 500+ partner stores and scan your receipts or link your cards to automatically track purchases.</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 h-80 flex items-center justify-center relative overflow-hidden">
                  <img src="/images/shopping.svg" alt="Shopping" className="w-full h-full object-contain" style={{filter: 'hue-rotate(15deg) saturate(1.2) brightness(0.9)'}} />
                  
                  {/* Floating UI Cards */}
                  <div className="absolute top-4 right-4 bg-white rounded-xl p-3 shadow-xl border border-orange-100 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>
                    <div className="text-xs text-gray-500">Receipt Scanned</div>
                    <div className="text-sm font-bold text-green-600">+25 points</div>
                  </div>
                  
                  <div className="absolute bottom-6 left-4 bg-white rounded-xl p-3 shadow-xl border border-orange-100 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}>
                    <div className="text-xs text-gray-500">Whole Foods</div>
                    <div className="text-sm font-bold text-orange-600">$47.82</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 & 3 - Side by Side */}
          <div className="mb-16 lg:mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center text-white font-black text-lg">
                    02
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Earn Rewards</h3>
                </div>
                <div className="bg-orange-50 rounded-2xl p-6 mb-6 h-48 flex items-center justify-center relative overflow-hidden">
                  <img src="/images/savings.svg" alt="Rewards" className="w-full h-full object-contain" style={{filter: 'hue-rotate(15deg) saturate(1.2) brightness(0.9)'}} />
                  
                  {/* Floating Coins Animation */}
                  <div className="absolute top-2 right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                  <div className="absolute top-4 right-8 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="absolute top-6 right-4 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Automatically earn $HOME tokens on every purchase. The more you spend on household essentials, the more you earn.</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl p-8 text-white shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-white font-black text-lg">
                    03
                  </div>
                  <h3 className="text-xl font-bold text-white">Shop Near You</h3>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 mb-6 h-48 flex items-center justify-center">
                  <img src="/images/locations.svg" alt="Location" className="w-full h-full object-contain" style={{filter: 'brightness(0) invert(1)'}} />
                </div>
                <p className="text-white/90">Shop in your favorite stores near you and discover local deals and exclusive offers from nearby retailers.</p>
              </div>
            </div>
          </div>

          {/* Step 4 - Large Right */}
          <div className="mb-16 lg:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 h-80 flex items-center justify-center relative overflow-hidden">
                <img src="/images/special_events.svg" alt="Discounts" className="w-full h-full object-contain" style={{filter: 'hue-rotate(15deg) saturate(1.2) brightness(0.9)'}} />
                
                {/* Floating Discount Cards */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg p-2 shadow-lg animate-pulse">
                  <div className="text-xs font-bold">20% OFF</div>
                </div>
                
                <div className="absolute bottom-8 left-6 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg p-2 shadow-lg animate-pulse" style={{animationDelay: '0.5s'}}>
                  <div className="text-xs font-bold">$5 OFF</div>
                </div>
                
                <div className="absolute top-1/2 right-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg p-2 shadow-lg animate-pulse" style={{animationDelay: '1s'}}>
                  <div className="text-xs font-bold">BOGO</div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg">
                    04
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Claim Discounts</h3>
                    <p className="text-gray-600 dark:text-gray-300">Use your $HOME tokens to claim discounts and exclusive offers at checkout for maximum savings.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 & 6 - Creative Bottom */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center text-white font-black text-lg">
                      05
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Share & Earn</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">Share tips with the community and earn bonus points for helping other homemakers save money and shop smarter.</p>
                </div>
                <div className="bg-orange-50 rounded-2xl p-6 flex items-center justify-center">
                  <img src="/images/community.svg" alt="Community" className="w-full h-full object-contain" style={{filter: 'hue-rotate(15deg) saturate(1.2) brightness(0.9)'}} />
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center text-white font-black text-lg mx-auto mb-6">
                  06
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Redeem & Save</h3>
                <div className="bg-white/50 rounded-2xl p-4 mb-4 h-32 flex items-center justify-center">
                  <img src="/images/gift_cards.svg" alt="Gift" className="w-full h-full object-contain" style={{filter: 'hue-rotate(15deg) saturate(1.2) brightness(0.9)'}} />
                </div>
                <p className="text-gray-700 text-sm">Use your accumulated tokens for cashback, gift cards, or exclusive discounts on future purchases.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-8">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Ready to get started?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Join thousands of homemakers earning rewards today
              </p>
            </div>
            <button className="flex-shrink-0 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:from-amber-600 hover:to-orange-600 hover:scale-105">
              Start Earning Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;