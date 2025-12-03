import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ModernFeatures from "@/components/Features/ModernFeatures";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homemaker App, Making shopping rewarding",
  description: "HomeMaker transforms household spending into valuable rewards for buyers while maximizing profits for sellers",
  icons: {
    icon: "/favicon.svg", // This replaces favicon.ico
  },
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <ModernFeatures />
      <HowItWorks />
      <Stats />
      <CTA />
      <Contact />
    </>
  );
}
