'use client'

import {
  CircleStackIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  SparklesIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  ArrowsRightLeftIcon,
} from '@heroicons/react/24/outline';

const Stats = () => {
  const stats = [
    {
      number: '01',
      label: 'What You Are Holding',
      description: 'Naira, USDT, HOMA, tokenized instruments, marketplace value, and cooperative balances in one live ledger.',
      icon: CircleStackIcon,
    },
    {
      number: '02',
      label: 'What It Is Returning',
      description: 'Base yield from sweeps, instruments, discounts, or pools shown clearly instead of hidden across different apps.',
      icon: CurrencyDollarIcon,
    },
    {
      number: '03',
      label: 'What Homa Adds',
      description: 'Routing, optimization, receipt intelligence, and policy decisions layered on top of the base return.',
      icon: ChartBarIcon,
    },
    {
      number: '04',
      label: 'Total Wealth Position',
      description: 'A single view of movement across holdings, decisions, and net position so the whole stack stays visible.',
      icon: SparklesIcon,
    },
  ];

  return (
    <section className="bg-white py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            One Screen For
            <span className="block bg-gradient-to-r from-homa-800 via-homa-700 to-clay-500 bg-clip-text text-transparent">
              Your Full Wealth Stack
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Homa shows what you hold, what each layer is returning, what Homa is adding, and how your total position is moving, so decisions come from live visibility instead of scattered accounts.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-2xl border border-homa-100 bg-gradient-to-br from-gray-50 to-white p-8 text-center transition-all duration-300 hover:border-homa-300 dark:border-gray-700 dark:from-gray-800 dark:to-gray-900"
            >
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                <stat.icon className="mx-auto h-10 w-10 text-homa-700 dark:text-homa-300" />
              </div>
              <div className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
              <div className="mb-2 text-lg font-semibold text-homa-700 dark:text-homa-200">{stat.label}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-80">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <LockClosedIcon className="h-5 w-5" />
            <span className="text-sm font-medium">Visible custody and controls</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <ShieldCheckIcon className="h-5 w-5" />
            <span className="text-sm font-medium">Clear risk and policy layers</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <ArrowsRightLeftIcon className="h-5 w-5" />
            <span className="text-sm font-medium">Yield and allocation visibility</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
