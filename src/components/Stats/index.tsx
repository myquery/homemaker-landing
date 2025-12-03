'use client'

import { 
  UsersIcon, 
  CurrencyDollarIcon, 
  BuildingStorefrontIcon, 
  StarIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const Stats = () => {
  const stats = [
    {
      number: "10K+",
      label: "Active Users",
      description: "Homemakers earning rewards daily",
      icon: UsersIcon
    },
    {
      number: "$2M+",
      label: "Rewards Distributed",
      description: "In $HOME tokens and cashback",
      icon: CurrencyDollarIcon
    },
    {
      number: "500+",
      label: "Partner Stores",
      description: "Major retailers and local shops",
      icon: BuildingStorefrontIcon
    },
    {
      number: "95%",
      label: "Satisfaction Rate",
      description: "Users love our platform",
      icon: StarIcon
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Thousands of
            <span className="block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Smart Homemakers
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join a growing community of homemakers who are making their shopping more rewarding every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-100 dark:border-gray-700 hover:border-amber-200 dark:hover:border-amber-700 transition-all duration-300"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-10 w-10 text-amber-600 dark:text-amber-400 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-amber-600 dark:text-amber-400 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <LockClosedIcon className="w-5 h-5" />
            <span className="text-sm font-medium">Bank-level Security</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <ShieldCheckIcon className="w-5 h-5" />
            <span className="text-sm font-medium">Verified Partners</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <ClockIcon className="w-5 h-5" />
            <span className="text-sm font-medium">24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;