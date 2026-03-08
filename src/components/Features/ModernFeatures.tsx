import Image from "next/image";
import { SparklesIcon } from "@heroicons/react/24/outline";

const pillars = [
  {
    id: "01",
    title: "Holding",
    subtitle: "Multi-form wealth",
    description:
      "Keep naira, USDT, HOMA, tokenized assets, T-bills, money market instruments, and savings buckets in one ledger so your full balance sheet stops living across disconnected apps and informal systems.",
    image: "/images/architecture/holding-grid.svg",
    imageBg: "bg-clay-50 dark:bg-clay-900/20",
  },
  {
    id: "02",
    title: "Growing",
    subtitle: "Yield architecture",
    description:
      "Route eligible balances into sweeps, yield pools, and vetted opportunities with visible risk labels so the held part of your stack can start compounding instead of sitting idle.",
    image: "/images/architecture/growing-grid.svg",
    imageBg: "bg-homa-50 dark:bg-homa-900/20",
  },
  {
    id: "03",
    title: "Cooperating",
    subtitle: "Collective yield",
    description:
      "Turn group buying and cooperative pools into structured savings and discount vehicles, so shared purchasing becomes a serious cost and yield layer instead of an informal side process.",
    image: "/images/architecture/cooperating-grid.svg",
    imageBg: "bg-homa-50 dark:bg-homa-900/20",
  },
  {
    id: "04",
    title: "Spending",
    subtitle: "Intelligence layer",
    description:
      "Use receipts, shopping plans, merchant timing, and price signals to improve basket decisions. Spending becomes an optimization input for wealth, not just money leaving the account.",
    image: "/images/architecture/spending-grid.svg",
    imageBg: "bg-clay-50 dark:bg-clay-900/20",
  },
  {
    id: "05",
    title: "Governing",
    subtitle: "Controls and policy",
    description:
      "Set approvals, allocation rules, and spending limits so the whole system follows your own risk discipline before money moves anywhere.",
    image: "/images/architecture/governing-grid.svg",
    imageBg: "bg-clay-50 dark:bg-clay-900/20",
  },
  {
    id: "06",
    title: "Earning",
    subtitle: "Data + incentives",
    description:
      "Receipt scans and verified actions should make Homa smarter and unlock incentives. They are a support layer that enriches decisions, not the whole reason someone opens the app.",
    image: "/images/architecture/earning-grid.svg",
    imageBg: "bg-homa-50 dark:bg-homa-900/20",
  },
];

const ModernFeatures = () => {
  return (
    <section className="bg-[#F4F6EF] py-24 dark:bg-[#0B110B]">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-homa-200 bg-white px-4 py-2 text-sm font-semibold text-homa-800 shadow-sm dark:border-homa-300/15 dark:bg-white/5 dark:text-homa-100">
            <SparklesIcon className="h-4 w-4" />
            Homa Architecture
          </span>
          <h2 className="text-4xl font-black leading-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            A Wealth Stack That Matches
            <span className="block bg-gradient-to-r from-homa-800 via-homa-700 to-clay-500 bg-clip-text text-transparent dark:from-homa-100 dark:via-homa-200 dark:to-clay-200">
              How You Already Hold Value.
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:text-xl">
            People already split value across naira accounts, USDT wallets, token positions, pre-purchased goods, and informal groups. Homa turns that scattered instinct into one coordinated system with visibility, yield, and controls.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="overflow-hidden rounded-[28px] border border-homa-100 bg-white shadow-[0_18px_50px_rgba(57,66,37,0.08)] transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-[#10150F]"
            >
              <div className={`relative aspect-[16/10] overflow-hidden ${pillar.imageBg}`}>
                <Image
                  src={pillar.image}
                  alt={`${pillar.title} illustration`}
                  fill
                  priority={index < 3}
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="p-6 sm:p-7">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-homa-100 px-3 text-xs font-bold tracking-[0.16em] text-homa-800 dark:bg-homa-400/10 dark:text-homa-100">
                    {pillar.id}
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay-600 dark:text-clay-300">
                    {pillar.subtitle}
                  </p>
                </div>

                <h3 className="text-2xl font-black text-gray-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-gray-600 dark:text-gray-300">
                  {pillar.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[28px] border border-homa-200 bg-white px-8 py-7 text-center shadow-[0_18px_50px_rgba(57,66,37,0.06)] dark:border-white/10 dark:bg-[#10150F]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-homa-700 dark:text-homa-200">
            Combined Outcome
          </p>
          <h3 className="mt-3 text-2xl font-black text-gray-900 dark:text-white md:text-3xl">
            Homa becomes yield infrastructure first, and the intelligence layer above it.
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-gray-600 dark:text-gray-300">
            Holding is the center of gravity. Growing compounds the deployable part, cooperation lowers cost, spending sharpens allocation, governance protects discipline, and earning data keeps recommendations improving.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModernFeatures;
