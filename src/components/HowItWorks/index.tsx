'use client'

import {
  BanknotesIcon,
  WalletIcon,
  ChartBarIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  ScaleIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const HowItWorks = () => {
  const stages = [
    {
      step: '01',
      title: 'Earning',
      subtitle: 'Mine tokens',
      description: 'Scan receipts, complete tasks, plan shopping, and give tips to complete reward actions and mine $HOMA continuously.',
      icon: BanknotesIcon,
      color: 'from-homa-600 to-homa-700',
    },
    {
      step: '02',
      title: 'Holding',
      subtitle: 'Asset accumulation',
      description: 'Build your base by buying and holding tokenized assets, bonds, T-bills, money market instruments, and tokens in one wallet, while unlocking baseline $HOMA.',
      icon: WalletIcon,
      color: 'from-homa-700 to-clay-600',
    },
    {
      step: '03',
      title: 'Growing',
      subtitle: 'Investments + yield',
      description: 'Deploy a selected portion of holdings into active investment and yield routes to compound returns with clear risk visibility.',
      icon: ChartBarIcon,
      color: 'from-clay-500 to-clay-600',
    },
    {
      step: '04',
      title: 'Spending',
      subtitle: 'Intelligent shopping',
      description: 'Shopping plans, price triggers, and budget rails optimize each purchase before checkout.',
      icon: ShoppingBagIcon,
      color: 'from-homa-600 to-homa-700',
    },
    {
      step: '05',
      title: 'Cooperating',
      subtitle: 'Bulk buying',
      description: 'You synchronize demand with cooperative buying pools to lower unit cost and improve negotiating power.',
      icon: UserGroupIcon,
      color: 'from-homa-700 to-clay-600',
    },
    {
      step: '06',
      title: 'Governing',
      subtitle: 'Personal governance',
      description: 'Voting, approvals, and policy rules decide how capital is deployed and how priorities are set.',
      icon: ScaleIcon,
      color: 'from-clay-500 to-clay-600',
    },
  ];

  return (
    <section className="bg-white py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-clay-100 px-4 py-2 text-sm font-medium text-clay-700 dark:bg-clay-900/30 dark:text-clay-200">
            <ArrowRightIcon className="h-4 w-4" />
            How Homa Combines It
          </span>
          <h2 className="mb-5 text-4xl font-black leading-[1.1] text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            One Loop. Six Moves.
            <span className="block bg-gradient-to-r from-homa-700 to-clay-500 bg-clip-text text-transparent">
              Continuous Personal Compounding.
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            Each stage reinforces the next, so everyday activity builds long-term personal strength instead of fragmented spending.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {stages.map((stage) => (
            <article
              key={stage.step}
              className="group rounded-3xl border border-homa-100 bg-gray-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-homa-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${stage.color} text-white`}>
                  <stage.icon className="h-6 w-6" />
                </div>
                <span className="text-lg font-black text-homa-700 dark:text-homa-300">{stage.step}</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stage.title}</h3>
              <p className="mb-3 mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-clay-600 dark:text-clay-300">
                {stage.subtitle}
              </p>
              <p className="text-gray-600 dark:text-gray-300">{stage.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-homa-200 bg-homa-50 p-6 text-center dark:border-homa-800/40 dark:bg-homa-900/20">
          <p className="text-lg font-semibold text-homa-800 dark:text-homa-200">
            Earning funds holding. Holding secures your base. Growing compounds your deployed capital. Spending improves. Cooperating cuts cost. Governing keeps everything aligned.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
