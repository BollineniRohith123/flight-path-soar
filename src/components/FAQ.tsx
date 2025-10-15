import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqCategories = [
  {
    category: "Getting Started",
    faqs: [
      {
        question: "Is Skylar Right for My Brand?",
        answer: "Skylar is perfect for brands targeting premium audiences and seeking high-impact visibility. If you're a real estate developer, automotive brand, luxury hospitality chain, financial services company, educational institution, or any B2C/B2B brand looking to establish credibility and reach affluent travelers, aircraft advertising is ideal. We work with Fortune 500 companies and ambitious startups alike. Our campaigns are especially effective for brands launching new products, expanding to new markets, or establishing authority in their industry.",
      },
      {
        question: "What's the minimum investment to get started?",
        answer: "Campaign investments start from ₹2.5 lakhs per month, which includes aircraft branding, design services, regulatory compliance, and installation. We offer flexible packages based on coverage area (partial wrap, full wrap, or interior branding), campaign duration, and aircraft selection. Most brands start with a 3-month campaign to test effectiveness. We also provide payment plans and milestone-based payments for growing businesses. Contact us for a customized quote tailored to your budget and objectives.",
      },
      {
        question: "How quickly can my campaign launch?",
        answer: "From contract signing to aircraft takeoff: typically 3-4 weeks. This includes: design approval (3-5 days), DGCA regulatory clearance (7-10 days), vinyl production (5-7 days), and aircraft installation (2-3 days). For urgent campaigns, we offer expedited services that can launch in as little as 2 weeks. We handle all logistics, permits, and coordination with airlines - you just approve the designs. Peak travel seasons (festivals, holidays) may require earlier booking to secure premium aircraft slots.",
      },
    ],
  },
  {
    category: "Campaign Strategy",
    faqs: [
      {
        question: "How do you customize campaigns for different brands?",
        answer: "Every campaign is tailored to your unique brand objectives, target audience, and budget. We start with a strategic consultation to understand your goals - whether it's brand awareness, product launch, market expansion, or event promotion. Then we recommend the optimal mix of: aircraft selection (based on routes serving your target markets), creative approach (bold and disruptive vs. elegant and premium), placement strategy (exterior wraps, interior branding, seat-back displays), and campaign duration. Our creative team designs aviation-compliant visuals that align with your brand guidelines while maximizing impact at 35,000 feet.",
      },
      {
        question: "Can you guarantee results?",
        answer: "We guarantee campaign execution excellence: confirmed flight schedules, verified passenger counts, regulatory compliance, and quality installation. What we can guarantee: 100% campaign uptime (with backup aircraft ready), accurate impression tracking and reporting, professional documentation (photos/videos), and timely communication. While we can't guarantee specific sales outcomes (no ethical advertiser can), we provide detailed analytics showing reach, frequency, and engagement metrics. Our 98% client retention rate speaks to the measurable value brands experience. Most clients see increased brand recognition, website traffic, and inquiries during campaigns.",
      },
      {
        question: "How do you measure success?",
        answer: "Comprehensive performance tracking includes: Passenger Impressions (daily flight data × passenger loads × viewing probability), Route Coverage (maps showing where your brand travels), Brand Visibility Hours (time in air + ground time at airports), Social Media Amplification (photos shared by travelers), and Website/Inquiry Tracking (QR codes and custom URLs). You receive weekly reports with flight schedules, estimated reach, photographic evidence, and ROI calculations. We also conduct post-campaign brand lift studies to measure awareness increase among air travelers.",
      },
    ],
  },
  {
    category: "First-Time Buyers",
    faqs: [
      {
        question: "I've never done aircraft advertising. Where do I start?",
        answer: "Welcome to the most exciting advertising platform in India! Here's your simple onboarding journey: (1) Discovery Call - We discuss your brand, target audience, and goals (15-20 mins), (2) Custom Proposal - We present aircraft options, routes, creative concepts, and pricing tailored to you, (3) Design Phase - Our team creates stunning mockups showing exactly how your brand will look, (4) Approval & Launch - Once you approve, we handle everything from regulatory clearance to installation. You'll have a dedicated campaign manager guiding you every step. No aviation knowledge required - we're your experts.",
      },
      {
        question: "What if aircraft advertising doesn't work for my brand?",
        answer: "We understand the hesitation - aircraft advertising is premium and unfamiliar to many brands. Here's our risk-mitigation approach: Start Small (3-month pilot campaign to test effectiveness), Flexible Options (partial wraps cost less than full wraps), Detailed Reporting (weekly proof of performance), and Money-Back Promise (if we fail to deliver promised flight hours, we refund pro-rata). Most importantly: we'll tell you upfront if aircraft advertising isn't right for your brand. We only work with brands where we're confident of delivering value. Our consultation is free and honest.",
      },
      {
        question: "Do I need to understand aviation regulations?",
        answer: "Absolutely not! That's our job. Aircraft advertising in India is regulated by DGCA (Directorate General of Civil Aviation), and we handle 100% of compliance: Design Approval (ensuring visuals meet safety and visibility standards), Airline Coordination (contracts, insurance, installation scheduling), Material Specifications (fire-resistant, aviation-grade vinyl), and Documentation (permits, clearances, liability coverage). You never interact with regulators or airlines - we manage all technical and legal aspects. Your only job is approving the creative and watching your brand take flight.",
      },
    ],
  },
];

export const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleWhatsAppContact = () => {
    window.open("https://wa.me/919876543210?text=Hi! I have questions about aircraft advertising at Hyderabad airport.", "_blank");
  };

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-foreground mb-4">
            QUESTIONS?
            <br />
            <span className="text-gradient-sky">WE'VE GOT ANSWERS</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about aircraft advertising in Hyderabad
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h3 className="text-2xl md:text-3xl font-display font-black text-foreground mb-6">
                {category.category}
              </h3>
              
              <Card className="p-6 md:p-8 shadow-premium bg-card border-border/50">
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.category}-${index}`}
                      className="border-b border-border/50 last:border-0"
                    >
                      <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-primary transition-colors py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </motion.div>
          ))}

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-6">
                Chat with our aviation advertising experts on WhatsApp
              </p>
              <Button
                onClick={handleWhatsAppContact}
                size="lg"
                variant="premium"
                className="text-lg font-semibold"
              >
                Chat on WhatsApp →
              </Button>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
