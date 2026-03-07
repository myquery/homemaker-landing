'use client'

import Link from "next/link";
import {
  ArrowRightIcon,
  PlayIcon,
  BanknotesIcon,
  UserGroupIcon,
  ScaleIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-homa-800 via-homa-700 to-clay-600 py-20">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Ready to run your personal economy on Homa?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
            Start with token earning, scale into multi-asset wealth, and coordinate spending, cooperation, and governance from one place.
          </p>

          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-homa-800 transition-all duration-300 hover:scale-105 hover:bg-gray-100 shadow-lg"
            >
              Join Homa
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
              <PlayIcon className="mr-2 h-5 w-5" />
              Watch Platform Tour
            </Link>
          </div>

          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white/10 p-4 text-white backdrop-blur-sm">
              <BanknotesIcon className="mx-auto mb-2 h-6 w-6" />
              <p className="text-sm font-semibold">Mine</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 text-white backdrop-blur-sm">
              <ChartBarIcon className="mx-auto mb-2 h-6 w-6" />
              <p className="text-sm font-semibold">Grow</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 text-white backdrop-blur-sm">
              <UserGroupIcon className="mx-auto mb-2 h-6 w-6" />
              <p className="text-sm font-semibold">Cooperate</p>
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
