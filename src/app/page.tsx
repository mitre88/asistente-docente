import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import AIShowcase from "@/components/AIShowcase";
import Capabilities from "@/components/Capabilities";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import Integrations from "@/components/Integrations";
import WhatsAppSection from "@/components/WhatsAppSection";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Security from "@/components/Security";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <Features />
      <AIShowcase />
      <Capabilities />
      <UseCases />
      <HowItWorks />
      <Integrations />
      <WhatsAppSection />
      <Comparison />
      <Testimonials />
      <Pricing />
      <Security />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
