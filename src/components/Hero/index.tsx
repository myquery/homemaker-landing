'use client'

import Link from "next/link";
import {
  ArrowRightIcon,
  PlayIcon,
  BanknotesIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
  WalletIcon,
  ChartBarIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';

const Hero = () => {
  const holdings = [
    {
      label: "Naira Sweep",
      detail: "Virtual account -> MMF / T-bills",
      allocation: "34%",
      returnText: "11.8%",
      accent: "bg-homa-500",
    },
    {
      label: "USDT Stack",
      detail: "Stable reserve + staking boost",
      allocation: "22%",
      returnText: "8.4%",
      accent: "bg-clay-500",
    },
    {
      label: "Co-op Pool",
      detail: "Shared buy + pooled yield",
      allocation: "18%",
      returnText: "14.1%",
      accent: "bg-homa-400",
    },
    {
      label: "Marketplace Value",
      detail: "Pre-bought goods at discount",
      allocation: "12%",
      returnText: "9.6%",
      accent: "bg-clay-400",
    },
  ];

  const actions = [
    {
      label: "Base return live",
      value: "NGN 148k / mo",
      icon: WalletIcon,
      tone: "bg-homa-100 text-homa-800",
    },
    {
      label: "Homa adds",
      value: "+ NGN 39k / mo",
      icon: ArrowTrendingUpIcon,
      tone: "bg-clay-100 text-clay-800",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-homa-50 via-homa-100 to-clay-50 pt-[120px] pb-20 dark:bg-gradient-to-b dark:from-[#111710] dark:via-[#182113] dark:to-[#223028] lg:pt-[150px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-homa-100 px-4 py-2 text-sm font-medium text-homa-800 dark:border dark:border-homa-500/40 dark:bg-homa-300/15 dark:text-homa-100">
                  <WalletIcon className="h-4 w-4" />
                  Coordinated Wealth Infrastructure
                </span>
                <h1 className="mb-8 text-4xl font-black leading-[1.1] text-gray-900 dark:text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                  Hold Wealth
                  <span className="block bg-gradient-to-r from-homa-800 via-homa-700 to-clay-500 bg-clip-text text-transparent dark:from-homa-100 dark:via-homa-200 dark:to-clay-200">
                    Where It Works Harder
                  </span>
                </h1>
                <p className="mb-10 max-w-xl text-xl leading-relaxed text-gray-600 dark:text-gray-100">
                  Homa brings naira, stable assets, tokenized instruments, marketplace value, and cooperative savings into one visible stack. See what you hold, what it is returning, and what Homa is doing to improve the outcome.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-homa-800 via-homa-700 to-clay-500 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:from-homa-900 hover:via-homa-800 hover:to-clay-600 hover:shadow-lg"
                  >
                    See Wealth Stack
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-homa-200 bg-white px-8 py-4 text-base font-semibold text-homa-800 transition-all duration-300 hover:border-homa-300 hover:bg-homa-50 dark:border-homa-500/40 dark:bg-white/10 dark:text-white dark:hover:border-homa-400 dark:hover:bg-white/15"
                  >
                    <PlayIcon className="mr-2 h-5 w-5" />
                    View Home Screen
                  </Link>
                </div>

              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto max-w-[500px] lg:ml-auto lg:mr-0">
                <div className="relative z-10 mx-auto w-[300px] rounded-[3rem] bg-gray-900 p-2 shadow-2xl">
                  <div className="overflow-hidden rounded-[2.5rem] bg-white">
                    <div className="h-[600px] bg-gradient-to-b from-homa-50 via-white to-clay-50/30 p-5">
                      <div className="mb-5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-homa-700 to-homa-500 text-white shadow-sm">
                            <WalletIcon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">Homa</div>
                            <div className="text-[11px] text-gray-500">Live wealth stack</div>
                          </div>
                        </div>
                        <div className="rounded-full bg-homa-100 px-3 py-1 text-[11px] font-semibold text-homa-800">
                          Today
                        </div>
                      </div>

                      <div className="mb-4 rounded-[28px] bg-gradient-to-br from-homa-900 via-homa-700 to-clay-600 p-5 text-white shadow-lg">
                        <div className="text-[11px] uppercase tracking-[0.18em] text-white/70">
                          Total visible wealth
                        </div>
                        <div className="mt-3 text-[30px] font-black leading-none">NGN 24.8M</div>
                        <div className="mt-2 flex items-center gap-2 text-sm text-white/85">
                          <ArrowTrendingUpIcon className="h-4 w-4" />
                          +7.2% over 30 days
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-2 text-[10px]">
                          <div className="rounded-2xl bg-white/10 p-2">
                            <div className="text-white/65">Holding</div>
                            <div className="mt-1 font-semibold">6 layers</div>
                          </div>
                          <div className="rounded-2xl bg-white/10 p-2">
                            <div className="text-white/65">Returning</div>
                            <div className="mt-1 font-semibold">11.3% blended</div>
                          </div>
                          <div className="rounded-2xl bg-white/10 p-2">
                            <div className="text-white/65">Homa adds</div>
                            <div className="mt-1 font-semibold">+1.8 pts</div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4 grid grid-cols-2 gap-3">
                        {actions.map((action) => (
                          <div key={action.label} className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-homa-100/80">
                            <div className={`mb-2 flex h-8 w-8 items-center justify-center rounded-xl ${action.tone}`}>
                              <action.icon className="h-4 w-4" />
                            </div>
                            <div className="text-[11px] font-medium text-gray-500">{action.label}</div>
                            <div className="mt-1 text-sm font-semibold text-gray-900">{action.value}</div>
                          </div>
                        ))}
                      </div>

                      <div className="mb-4 rounded-[26px] bg-white p-4 shadow-sm ring-1 ring-homa-100/80">
                        <div className="mb-3 flex items-center justify-between">
                          <div className="text-sm font-semibold text-gray-900">Current holdings</div>
                          <div className="text-[11px] font-medium text-gray-500">Visible returns</div>
                        </div>
                        <div className="space-y-3">
                          {holdings.map((holding) => (
                            <div key={holding.label} className="flex items-center gap-3">
                              <div className={`h-3 w-3 rounded-full ${holding.accent}`}></div>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-3">
                                  <div className="truncate text-xs font-semibold text-gray-900">{holding.label}</div>
                                  <div className="text-xs font-semibold text-gray-900">{holding.returnText}</div>
                                </div>
                                <div className="flex items-center justify-between gap-3 text-[11px] text-gray-500">
                                  <div className="truncate">{holding.detail}</div>
                                  <div>{holding.allocation}</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4 rounded-[24px] bg-[#111710] p-4 text-white shadow-sm">
                        <div className="mb-3 flex items-center justify-between">
                          <div className="text-sm font-semibold">What Homa is doing</div>
                          <div className="rounded-full bg-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-white/70">
                            Live
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-homa-400/20 text-homa-100">
                              <ChartBarIcon className="h-4 w-4" />
                            </div>
                            <div className="flex-1">
                              <div className="text-xs font-semibold">Sweep idle naira tonight</div>
                              <div className="text-[11px] text-white/65">Move NGN 420k into MMF / T-bill layer</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-clay-400/20 text-clay-100">
                              <UserGroupIcon className="h-4 w-4" />
                            </div>
                            <div className="flex-1">
                              <div className="text-xs font-semibold">Open cooperative slot available</div>
                              <div className="text-[11px] text-white/65">Lower unit cost on rice basket this week</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-[24px] bg-white p-4 shadow-sm ring-1 ring-homa-100/80">
                        <div className="mb-2 flex items-center gap-2">
                          <BanknotesIcon className="h-4 w-4 text-homa-700" />
                          <div className="text-sm font-semibold text-gray-900">Receipt intelligence</div>
                        </div>
                        <div className="text-[11px] leading-5 text-gray-500">
                          Receipt scans are improving shopping signals, not acting as the core product.
                        </div>
                        <div className="mt-3 flex items-center justify-between rounded-2xl bg-homa-50 px-3 py-2 text-[11px]">
                          <div>
                            <div className="font-semibold text-gray-900">Price signal updated</div>
                            <div className="text-gray-500">Rice basket is cheaper Tue-Thu</div>
                          </div>
                          <ShoppingBagIcon className="h-4 w-4 text-homa-700" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute right-0 top-12 z-20 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-900">
                    <ArrowTrendingUpIcon className="h-4 w-4 text-homa-700" />
                    Yield visible
                  </div>
                  <div className="mt-1 text-[11px] text-gray-500">Base return + Homa layer</div>
                </div>
                <div className="absolute -bottom-6 left-0 z-20 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-900">
                    <ShieldCheckIcon className="h-4 w-4 text-homa-700" />
                    Policy active
                  </div>
                  <div className="mt-1 text-[11px] text-gray-500">Limits before money moves</div>
                </div>
                <div className="absolute right-2 top-1/2 z-20 rounded-2xl border border-homa-200/70 bg-homa-50/95 px-4 py-3 shadow-lg backdrop-blur">
                  <div className="flex items-center gap-2 text-xs font-semibold text-homa-900">
                    <ScaleIcon className="h-4 w-4 text-homa-700" />
                    Routing on
                  </div>
                  <div className="mt-1 text-[11px] text-homa-700/80">Idle balances are being swept</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-gradient-to-br from-homa-100 via-homa-100 to-clay-100 opacity-40 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-gradient-to-tr from-homa-50 via-homa-100 to-clay-100 opacity-40 blur-3xl"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
