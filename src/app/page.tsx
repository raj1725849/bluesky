'use client';

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { About } from "@/components/About";
import { Properties } from "@/components/Properties";
import { WhyUs } from "@/components/WhyUs";
import ClientFeedback from "@/components/ui/testimonial";
import { CTABanner } from "@/components/CTABanner";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Properties />
      <WhyUs />
      <ClientFeedback />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  );
}
