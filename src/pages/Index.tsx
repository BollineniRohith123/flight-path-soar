import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Services } from "@/components/Services";
import { TrustSection } from "@/components/TrustSection";
import { ROICalculator } from "@/components/ROICalculator";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { CaseStudies } from "@/components/CaseStudies";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FixedCTABar } from "@/components/FixedCTABar";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Mission />
      <Services />
      <TrustSection />
      <ROICalculator />
      <ProcessTimeline />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
      <FixedCTABar />
    </main>
  );
};

export default Index;
