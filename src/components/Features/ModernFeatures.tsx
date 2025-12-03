'use client'

import Image from "next/image";
import { 
  ShoppingBagIcon, 
  HomeIcon, 
  CurrencyDollarIcon, 
  ChartBarIcon, 
  BuildingStorefrontIcon, 
  ShieldCheckIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const ModernFeatures = () => {
  const features = [
    {
      icon: ShoppingBagIcon,
      title: "Smart Shopping Rewards",
      description: "Earn $HOME tokens on every purchase from groceries to home essentials. The more you shop, the more you earn.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: HomeIcon,
      title: "Home Optimization",
      description: "Get personalized recommendations for home improvements and smart devices that save money and energy.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: CurrencyDollarIcon,
      title: "Instant Cashback",
      description: "Redeem your $HOME tokens instantly for cash, gift cards, or exclusive discounts at partner stores.",
      color: "from-amber-400 to-orange-500"
    },
    {
      icon: ChartBarIcon,
      title: "Spending Analytics",
      description: "Track your household expenses with detailed insights and budgeting tools to optimize your spending.",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: BuildingStorefrontIcon,
      title: "Partner Network",
      description: "Access exclusive deals from 500+ partner stores including major retailers and local businesses.",
      color: "from-indigo-400 to-blue-500"
    },
    {
      icon: ShieldCheckIcon,
      title: "Secure & Private",
      description: "Your data is encrypted and secure. We never share your personal information with third parties.",
      color: "from-gray-400 to-slate-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 mb-4">
            <StarIcon className="h-4 w-4" />
            Features
          </span>
          <h2 className="text-4xl font-black leading-[1.1] text-gray-900 dark:text-white mb-6 sm:text-5xl lg:text-6xl">
            Everything You Need for
            <span className="block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Smart Home Shopping
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            HomeMaker combines the best of technology and homemaking wisdom to transform how you shop for your home.
          </p>
        </div>

        {/* Creative Layout - ShopPoint Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Content */}
          <div className="space-y-12">
            {/* Feature 1 - Hero Card */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-10 text-white shadow-2xl">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <ShoppingBagIcon className="h-10 w-10" />
                </div>
                <h3 className="text-3xl font-black">Smart Shopping Rewards</h3>
              </div>
              <p className="text-white/90 mb-8 text-lg leading-relaxed">Earn $HOME tokens on every purchase from groceries to home essentials. The more you shop, the more you earn.</p>
              <div className="flex gap-6">
                <div className="bg-white/20 rounded-xl px-6 py-4">
                  <div className="text-2xl font-black">2-5%</div>
                  <div className="text-sm font-medium">Cashback</div>
                </div>
                <div className="bg-white/20 rounded-xl px-6 py-4">
                  <div className="text-2xl font-black">500+</div>
                  <div className="text-sm font-medium">Stores</div>
                </div>
              </div>
            </div>

            {/* Feature 2 & 3 - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <HomeIcon className="h-8 w-8 text-orange-500" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Home Optimization</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Get personalized recommendations for home improvements and smart devices that save money and energy.</p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <CurrencyDollarIcon className="h-8 w-8 text-orange-500" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Instant Cashback</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Redeem your $HOME tokens instantly for cash, gift cards, or exclusive discounts at partner stores.</p>
              </div>
            </div>

            {/* Feature 4 - Full Width */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/10 dark:to-amber-900/10 rounded-3xl p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <ChartBarIcon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Spending Analytics</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">Track your household expenses with detailed insights and budgeting tools to optimize your spending.</p>
                </div>
              </div>
            </div>

            {/* Feature 5 & 6 - Remaining Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <BuildingStorefrontIcon className="h-8 w-8 text-orange-500" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Partner Network</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Access exclusive deals from 500+ partner stores including major retailers and local businesses.</p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <ShieldCheckIcon className="h-8 w-8 text-orange-500" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Secure & Private</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Your data is encrypted and secure. We never share your personal information with third parties.</p>
              </div>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <div className="relative mx-auto max-w-[500px]">
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
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-200 rounded-full opacity-60 animate-pulse flex items-center justify-center">
                <StarIcon className="h-8 w-8 text-orange-600" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-orange-200 rounded-full opacity-40 animate-pulse flex items-center justify-center">
                <ShoppingBagIcon className="h-10 w-10 text-orange-600" />
              </div>
              <div className="absolute top-1/2 -right-8 w-14 h-14 bg-orange-200 rounded-full opacity-50 animate-pulse flex items-center justify-center">
                <CurrencyDollarIcon className="h-7 w-7 text-orange-600" />
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-4 rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-900">
                <div className="text-left">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    Join 10,000+ happy homemakers
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Start earning rewards on your next shopping trip
                  </div>
                </div>
                <button className="rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default ModernFeatures;