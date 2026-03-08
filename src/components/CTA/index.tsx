'use client'

import Link from "next/link";
import {
  ArrowRightIcon,
  PlayIcon,
  WalletIcon,
  CircleStackIcon,
  ScaleIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-homa-900 via-homa-700 to-clay-600 py-20">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Move from scattered balances to one coordinated wealth stack.
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
            Start with what you already hold, make the return visible, and let Homa route, optimize, and govern the stack from one place.
          </p>

          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-homa-800 transition-all duration-300 hover:scale-105 hover:bg-gray-100 shadow-lg"
            >
              Request Early Access
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
              <PlayIcon className="mr-2 h-5 w-5" />
              See The Dashboard
            </Link>
          </div>

          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white/10 p-4 text-white backdrop-blur-sm">
              <WalletIcon className="mx-auto mb-2 h-6 w-6" />
              <p className="text-sm font-semibold">Hold</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 text-white backdrop-blur-sm">
              <ChartBarIcon className="mx-auto mb-2 h-6 w-6" />
              <p className="text-sm font-semibold">Route</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 text-white backdrop-blur-sm">
              <CircleStackIcon className="mx-auto mb-2 h-6 w-6" />
              <p className="text-sm font-semibold">See Position</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 text-white backdrop-blur-sm">
              <ScaleIcon className="mx-auto mb-2 h-6 w-6" />
              <p className="text-sm font-semibold">Govern</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
      </div>
    </section>
  );
};

export default CTA;
