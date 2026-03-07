'use client'

import {
  BanknotesIcon,
  WalletIcon,
  ChartBarIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  ScaleIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const ModernFeatures = () => {
  const pillars = [
    {
      icon: BanknotesIcon,
      title: "Earning",
      subtitle: "Mine tokens",
      description:
        "Mine $HOMA by scanning receipts, completing tasks, planning shopping, and giving tips. Verified actions convert into digital value in real time.",
      accent: "bg-homa-100 text-homa-700",
    },
    {
      icon: WalletIcon,
      title: "Holding",
      subtitle: "Asset accumulation",
      description:
        "Build your core position by buying and holding tokenized assets, bonds, T-bills, money market instruments, and tokens in one ledger. Holdings stay visible, controlled, and can earn baseline $HOMA.",
      accent: "bg-clay-100 text-clay-700",
    },
    {
      icon: ChartBarIcon,
      title: "Growing",
      subtitle: "Investments + yield",
      description:
        "Actively deploy selected balances from your holdings into vetted opportunities and yield pools to compound returns, with transparent risk labels for every decision.",
      accent: "bg-homa-100 text-homa-700",
    },
    {
      icon: ShoppingBagIcon,
      title: "Spending",
      subtitle: "Intelligent shopping",
      description:
        "Use smart baskets, timing alerts, and price tracking to spend at the right moment without compromising quality.",
      accent: "bg-clay-100 text-clay-700",
    },
    {
      icon: UserGroupIcon,
      title: "Cooperating",
      subtitle: "Bulk buying",
      description:
        "Coordinate group orders with trusted buying circles to unlock better pricing, lower logistics, and collective leverage.",
      accent: "bg-homa-100 text-homa-700",
    },
    {
      icon: ScaleIcon,
      title: "Governing",
      subtitle: "Personal governance",
      description:
        "Set approvals, decision rules, and spending limits so important money choices follow your own governance model.",
      accent: "bg-clay-100 text-clay-700",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-homa-100 px-4 py-2 text-sm font-medium text-homa-800 dark:bg-homa-900/30 dark:text-homa-200">
            <SparklesIcon className="h-4 w-4" />
            Homa Architecture
          </span>
          <h2 className="mb-6 text-4xl font-black leading-[1.1] text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            Six Pillars.
            <span className="block bg-gradient-to-r from-homa-700 to-clay-500 bg-clip-text text-transparent">
              One Personal Economy.
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            Homa merges token mining, wealth holding, investment growth, intelligent spending, cooperative purchasing, and shared governance into a single operating layer.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-3xl border border-homa-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"
            >
              <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${pillar.accent}`}>
                <pillar.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">{pillar.title}</h3>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-homa-700 dark:text-homa-300">
                {pillar.subtitle}
              </p>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">{pillar.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-gradient-to-r from-homa-700 to-clay-600 p-8 text-white md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Combined Outcome</p>
          <h3 className="mt-3 text-3xl font-black md:text-4xl">
            Personal cashflow becomes a coordinated, compounding engine.
          </h3>
          <p className="mt-4 max-w-3xl text-white/85">
            With Homa, earning feeds holding, holding secures your base, growing compounds the deployable part, spending gets smarter, cooperating lowers cost, and governance keeps everything aligned.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModernFeatures;
