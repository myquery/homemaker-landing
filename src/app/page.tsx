import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ModernFeatures from "@/components/Features/ModernFeatures";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homa, Hold Wealth Where It Works Harder",
  description:
    "Homa helps you hold naira, stable assets, tokenized instruments, marketplace value, and cooperative savings in one visible wealth stack.",
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
