import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Statistics } from "@/components/Statistics";
import { CaseStudies } from "@/components/CaseStudies";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Statistics />
      <CaseStudies />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
