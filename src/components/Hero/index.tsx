
'use client'
/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-gradient-to-b from-amber-50 to-white pb-16 pt-[120px] dark:from-gray-800 dark:to-gray-900 md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-amber-900 dark:text-amber-100 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  <span className="inline-block pb-2">Smart Household Shopping,</span><br />
                  <span className="inline-block bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text pb-2 text-transparent dark:from-amber-400 dark:to-amber-600">Warmer Homes</span>
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg md:text-xl">
                  HomeMaker blends technology with homemaking wisdom, turning your everyday shopping into rewarding experiences. Earn points on groceries, discover smart home solutions, and enjoy exclusive deals with $HOME token—all while building a cozier, more efficient home.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/"
                    className="rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-amber-500/20 duration-300 ease-in-out hover:from-amber-600 hover:to-amber-700 hover:shadow-amber-600/30"
                  >
                    Start Saving Today
                  </Link>
                  <Link
                    href="/how-it-works"
                    className="inline-block rounded-lg border-2 border-amber-500 bg-transparent px-8 py-4 text-base font-semibold text-amber-700 duration-300 ease-in-out hover:bg-amber-50/50 dark:text-amber-300 dark:hover:bg-amber-900/20"
                  >
                    How It Works
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tech-inspired background elements with homey touches */}
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Kitchen-inspired shapes */}
            <path
              d="M300 100C300 44.7715 255.228 0 200 0C144.772 0 100 44.7715 100 100V456C100 511.228 144.772 556 200 556C255.228 556 300 511.228 300 456V100Z"
              fill="url(#paint0_linear_home)"
            />
            {/* Shopping cart icon silhouette */}
            <path
              d="M400 200H350L325 250H225L200 200H100V250H175L200 300H325L350 250H400V200Z"
              fill="url(#paint1_linear_home)"
              opacity="0.8"
            />
            {/* Reward coin */}
            <circle
              cx="350"
              cy="400"
              r="50"
              fill="url(#paint2_radial_home)"
              stroke="url(#paint3_linear_home)"
              strokeWidth="5"
            />
            <defs>
              {/* <linearGradient
                id="paint0_linear_home"
                x1="200"
                y1="0"
                x2="200"
                y2="556"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FDE68A" />
                <stop offset="1" stopColor="#F59E0B" stopOpacity="0.3" />
              </linearGradient> */}
              {/* <linearGradient
                id="paint1_linear_home"
                x1="250"
                y1="200"
                x2="250"
                y2="300"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F59E0B" />
                <stop offset="1" stopColor="#B45309" />
              </linearGradient> */}
              {/* <radialGradient
                id="paint2_radial_home"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(350 400) rotate(90) scale(50)"
              >
                <stop offset="0.1" stopColor="#FCD34D" />
                <stop offset="1" stopColor="#F59E0B" />
              </radialGradient> */}
              {/* <linearGradient
                id="paint3_linear_home"
                x1="350"
                y1="345"
                x2="350"
                y2="455"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#92400E" />
                <stop offset="1" stopColor="#B45309" />
              </linearGradient> */}
            </defs>
          </svg>
        </div>
        
        {/* Bottom decorative elements */}
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Grocery items silhouette */}
            {/* <path
              d="M50 150L75 100L100 150L125 100L150 150"
              stroke="url(#paint0_linear_bottom)"
              strokeWidth="8"
              strokeLinecap="round"
            /> */}
            {/* Kitchen whisk */}
            {/* <path
              d="M200 50V150M200 80L220 60M200 80L180 60M200 120L220 140M200 120L180 140"
              stroke="url(#paint1_linear_bottom)"
              strokeWidth="4"
            /> */}
            {/* Smart home icon */}
            {/* <path
              d="M300 50H250V100H300V50ZM275 100V150M250 125H300"
              stroke="url(#paint2_linear_bottom)"
              strokeWidth="4"
            /> */}
            <defs>
              <linearGradient
                id="paint0_linear_bottom"
                x1="100"
                y1="100"
                x2="100"
                y2="150"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F59E0B" />
                <stop offset="1" stopColor="#B45309" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_bottom"
                x1="200"
                y1="50"
                x2="200"
                y2="150"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F59E0B" />
                <stop offset="1" stopColor="#92400E" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_bottom"
                x1="275"
                y1="50"
                x2="275"
                y2="150"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FCD34D" />
                <stop offset="1" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Floating household items */}
        {/* <div className="absolute top-1/4 left-10 hidden animate-float lg:block">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div> */}
        {/* <div className="absolute top-1/3 right-20 hidden animate-float-delay lg:block">
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3H21L19 12H5L3 3Z" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 18C9 18.5523 8.55228 19 8 19C7.44772 19 7 18.5523 7 18C7 17.4477 7.44772 17 8 17C8.55228 17 9 17.4477 9 18Z" stroke="#B45309" strokeWidth="2"/>
            <path d="M17 18C17 18.5523 16.5523 19 16 19C15.4477 19 15 18.5523 15 18C15 17.4477 15.4477 17 16 17C16.5523 17 17 17.4477 17 18Z" stroke="#B45309" strokeWidth="2"/>
          </svg>
        </div> */}
      </section>
      
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 6s ease-in-out 1s infinite;
        }
      `}</style>
    </>
  );
};

export default Hero;
