'use client'

import {
  UsersIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  BuildingLibraryIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const Stats = () => {
  const stats = [
    {
      number: '$8.4M+',
      label: 'Personal Assets Tracked',
      description: 'Across token, cash, and investment holdings',
      icon: BuildingLibraryIcon,
    },
    {
      number: '42K+',
      label: 'Token Mining Events',
      description: 'Verified earning actions completed monthly',
      icon: CurrencyDollarIcon,
    },
    {
      number: '19%',
      label: 'Average Basket Savings',
      description: 'From intelligent shopping and group buying',
      icon: ChartBarIcon,
    },
    {
      number: '7.8K',
      label: 'Self-Governed Portfolios',
      description: 'Active personal policies and decision workflows',
      icon: UsersIcon,
    },
  ];

  return (
    <section className="bg-white py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Built For Individuals Running
            <span className="block bg-gradient-to-r from-homa-700 to-clay-500 bg-clip-text text-transparent">
              Real Multi-Asset Economies
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Homa is designed to connect everyday activity with long-term wealth outcomes, not just track expenses.
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
              <div className="mb-2 text-lg font-semibold text-clay-600 dark:text-clay-300">{stat.label}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-80">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <LockClosedIcon className="h-5 w-5" />
            <span className="text-sm font-medium">Bank-grade encryption</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <ShieldCheckIcon className="h-5 w-5" />
            <span className="text-sm font-medium">Policy-driven approvals</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <ClockIcon className="h-5 w-5" />
            <span className="text-sm font-medium">Always-on personal ledger</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
