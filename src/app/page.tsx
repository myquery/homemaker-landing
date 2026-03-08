import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ModernFeatures from "@/components/Features/ModernFeatures";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homa, Earn Hold Grow Spend Cooperate Govern",
  description:
    "Homa combines token mining, multi-asset holding, investing, intelligent shopping, cooperative buying, and personal governance in one app.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <ModernFeatures />
      {/* <HowItWorks /> */}
      <Stats />
      <CTA />
      <Contact />
    </>
  );
}
