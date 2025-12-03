'use client'

import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, PlayIcon, ShoppingBagIcon, HomeIcon, CurrencyDollarIcon, StarIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-[120px] pb-20 dark:bg-gray-900 lg:pt-[150px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            {/* Left Content */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                  <HomeIcon className="h-4 w-4" />
                  Smart Home Shopping
                </span>
                <h1 className="mb-8 text-4xl font-black leading-[1.1] text-gray-900 dark:text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                  Turn Every
                  <span className="block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                    Purchase
                  </span>
                  Into Rewards
                </h1>
                <p className="mb-10 text-xl leading-relaxed text-gray-600 dark:text-gray-300 max-w-lg">
                  HomeMaker transforms your everyday household shopping into valuable rewards. Earn $HOME tokens on groceries, discover smart deals, and build a more efficient home.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:from-amber-600 hover:to-orange-600 hover:shadow-lg"
                  >
                    Get Started Free
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition-all duration-300 hover:border-amber-300 hover:bg-amber-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-amber-500 dark:hover:bg-gray-700"
                  >
                    <PlayIcon className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="mt-12 flex flex-wrap gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">10K+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">$2M+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Rewards Earned</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">500+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Partner Stores</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Content - App Preview */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto max-w-[500px] lg:ml-auto lg:mr-0">
                {/* Phone Mockup */}
                <div className="relative z-10 mx-auto w-[280px] rounded-[3rem] bg-gray-900 p-2 shadow-2xl">
                  <div className="overflow-hidden rounded-[2.5rem] bg-white">
                    <div className="h-[560px] bg-gradient-to-b from-amber-50 to-white p-6">
                      {/* App Header */}
                      <div className="mb-6 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-lg bg-amber-500"></div>
                          <span className="font-semibold text-gray-900">HomeMaker</span>
                        </div>
                        <div className="flex gap-1">
                          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                          <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                        </div>
                      </div>
                      
                      {/* Balance Card */}
                      <div className="mb-6 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 p-4 text-white">
                        <div className="text-sm opacity-90">Your Balance</div>
                        <div className="text-2xl font-bold">2,450 $HOME</div>
                        <div className="text-sm opacity-90">≈ $245.00</div>
                      </div>
                      
                      {/* Quick Actions */}
                      <div className="mb-6">
                        <div className="mb-3 text-sm font-semibold text-gray-700">Quick Actions</div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="rounded-xl bg-white p-3 shadow-sm">
                            <div className="mb-2 h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center">
                              <ShoppingBagIcon className="h-4 w-4 text-green-600" />
                            </div>
                            <div className="text-xs font-medium">Shop & Earn</div>
                          </div>
                          <div className="rounded-xl bg-white p-3 shadow-sm">
                            <div className="mb-2 h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center">
                              <CurrencyDollarIcon className="h-4 w-4 text-blue-600" />
                            </div>
                            <div className="text-xs font-medium">Redeem</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Recent Activity */}
                      <div>
                        <div className="mb-3 text-sm font-semibold text-gray-700">Recent Activity</div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center">
                              <span className="text-xs">+50</span>
                            </div>
                            <div className="flex-1">
                              <div className="text-xs font-medium">Grocery Shopping</div>
                              <div className="text-xs text-gray-500">Whole Foods</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-lg bg-amber-100 flex items-center justify-center">
                              <span className="text-xs">+25</span>
                            </div>
                            <div className="flex-1">
                              <div className="text-xs font-medium">Home Supplies</div>
                              <div className="text-xs text-gray-500">Target</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Icons */}
                <div className="absolute -top-4 -right-4 z-0 h-16 w-16 rounded-full bg-amber-100 flex items-center justify-center opacity-60 animate-pulse">
                  <HomeIcon className="h-8 w-8 text-amber-600" />
                </div>
                <div className="absolute -bottom-8 -left-8 z-0 h-20 w-20 rounded-full bg-orange-100 flex items-center justify-center opacity-40 animate-pulse">
                  <CurrencyDollarIcon className="h-10 w-10 text-orange-600" />
                </div>
                <div className="absolute top-1/2 -right-8 z-0 h-14 w-14 rounded-full bg-yellow-100 flex items-center justify-center opacity-50 animate-pulse">
                  <StarIcon className="h-7 w-7 text-yellow-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 opacity-30 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-gradient-to-tr from-yellow-100 to-amber-100 opacity-30 blur-3xl"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
