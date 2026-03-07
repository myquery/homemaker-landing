'use client'

import Link from "next/link";
import {
  ArrowRightIcon,
  PlayIcon,
  BanknotesIcon,
  WalletIcon,
  ChartBarIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';

const Hero = () => {
  const pillars = [
    { label: "Earning", detail: "Mine tokens", icon: BanknotesIcon },
    { label: "Holding", detail: "Build core positions", icon: WalletIcon },
    { label: "Growing", detail: "Deploy + compound", icon: ChartBarIcon },
    { label: "Spending", detail: "Intelligent shopping", icon: ShoppingBagIcon },
    { label: "Cooperating", detail: "Bulk buying", icon: UserGroupIcon },
    { label: "Governing", detail: "Personal governance", icon: ScaleIcon },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-homa-50 via-white to-clay-50/40 pt-[120px] pb-20 dark:bg-gradient-to-b dark:from-[#111710] dark:via-[#141d13] dark:to-[#1A2218] lg:pt-[150px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-homa-100 px-4 py-2 text-sm font-medium text-homa-800 dark:border dark:border-homa-500/40 dark:bg-homa-300/15 dark:text-homa-100">
                  <ScaleIcon className="h-4 w-4" />
                  Homa Wealth Loop
                </span>
                <h1 className="mb-8 text-4xl font-black leading-[1.1] text-gray-900 dark:text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                  Run Personal Wealth
                  <span className="block bg-gradient-to-r from-homa-700 to-clay-500 bg-clip-text text-transparent dark:from-homa-200 dark:to-clay-200">
                    As One System
                  </span>
                </h1>
                <p className="mb-10 max-w-lg text-xl leading-relaxed text-gray-600 dark:text-gray-100">
                  Homa combines earning, holding, growing, spending, cooperating, and governing in a single-user app. Mine tokens by scanning receipts, completing tasks, planning shopping, and giving tips.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-homa-700 to-homa-600 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:from-homa-800 hover:to-homa-700 hover:shadow-lg"
                  >
                    Open Homa
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-homa-200 bg-white px-8 py-4 text-base font-semibold text-homa-800 transition-all duration-300 hover:border-homa-300 hover:bg-homa-50 dark:border-homa-500/40 dark:bg-white/10 dark:text-white dark:hover:border-homa-400 dark:hover:bg-white/15"
                  >
                    <PlayIcon className="mr-2 h-5 w-5" />
                    See The Flow
                  </Link>
                </div>

              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto max-w-[500px] lg:ml-auto lg:mr-0">
                <div className="relative z-10 mx-auto w-[280px] rounded-[3rem] bg-gray-900 p-2 shadow-2xl">
                  <div className="overflow-hidden rounded-[2.5rem] bg-white">
                    <div className="h-[560px] bg-gradient-to-b from-homa-50 to-white p-6">
                      <div className="mb-6 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-lg bg-homa-600"></div>
                          <span className="font-semibold text-gray-900">Homa</span>
                        </div>
                        <div className="flex gap-1">
                          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                          <div className="h-2 w-2 rounded-full bg-homa-600"></div>
                        </div>
                      </div>

                      <div className="mb-6 rounded-2xl bg-gradient-to-r from-homa-700 to-clay-500 p-4 text-white">
                        <div className="text-sm opacity-90">Personal Net Position</div>
                        <div className="text-2xl font-bold">12,480 $HOMA</div>
                        <div className="text-sm opacity-90">Across cash, tokens, and assets</div>
                      </div>

                      <div className="mb-6">
                        <div className="mb-3 text-sm font-semibold text-gray-700">Core Modes</div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="rounded-xl bg-white p-3 shadow-sm">
                            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-homa-100">
                              <BanknotesIcon className="h-4 w-4 text-homa-700" />
                            </div>
                            <div className="text-xs font-medium">Mine</div>
                          </div>
                          <div className="rounded-xl bg-white p-3 shadow-sm">
                            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-clay-100">
                              <ChartBarIcon className="h-4 w-4 text-clay-700" />
                            </div>
                            <div className="text-xs font-medium">Grow</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="mb-3 text-sm font-semibold text-gray-700">6-Pillar Activity</div>
                        <div className="space-y-3">
                          {pillars.map((pillar) => (
                            <div key={pillar.label} className="flex items-center gap-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-homa-100">
                                <pillar.icon className="h-4 w-4 text-homa-700" />
                              </div>
                              <div className="flex-1">
                                <div className="text-xs font-medium">{pillar.label}</div>
                                <div className="text-xs text-gray-500">{pillar.detail}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 z-0 flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-homa-100 opacity-60">
                  <WalletIcon className="h-8 w-8 text-homa-700" />
                </div>
                <div className="absolute -bottom-8 -left-8 z-0 flex h-20 w-20 animate-pulse items-center justify-center rounded-full bg-clay-100 opacity-40">
                  <UserGroupIcon className="h-10 w-10 text-clay-600" />
                </div>
                <div className="absolute top-1/2 -right-8 z-0 flex h-14 w-14 animate-pulse items-center justify-center rounded-full bg-homa-100 opacity-50">
                  <ScaleIcon className="h-7 w-7 text-homa-700" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-gradient-to-br from-homa-100 to-clay-100 opacity-40 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-gradient-to-tr from-homa-50 to-clay-100 opacity-40 blur-3xl"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
