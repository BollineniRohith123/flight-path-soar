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

const faqs = [
  {
    question: "Which airlines and aircraft do you work with at Hyderabad airport?",
    answer: "We partner with all major domestic carriers operating from Hyderabad including IndiGo, SpiceJet, Air India, and Vistara. We have access to narrow-body aircraft (A320, 737) that serve routes across India.",
  },
  {
    question: "What are the minimum and maximum campaign durations?",
    answer: "Minimum campaign duration is 1 month, ideal for seasonal promotions. Maximum is 12 months for brands seeking year-round visibility. Most clients opt for 3-6 month campaigns to align with business cycles and festival seasons.",
  },
  {
    question: "How much does aircraft advertising cost in Hyderabad?",
    answer: "Campaign costs start from ₹2.5 lakhs per month depending on aircraft size, wrap coverage, and flight frequency. We offer flexible packages including partial wraps, full wraps, and interior branding options. Contact us for a customized quote.",
  },
  {
    question: "Do you handle the design and creative work?",
    answer: "Yes! Our in-house creative team provides complete design services at no extra cost. We create aviation-compliant designs, 3D mockups, and handle all regulatory approvals. You'll see exactly how your brand will look before installation.",
  },
  {
    question: "How do you track campaign performance and ROI?",
    answer: "We provide comprehensive analytics including: daily flight schedules, passenger counts, route coverage, photo/video documentation, and estimated impressions. You'll receive weekly reports showing exactly where your brand is flying and how many people are seeing it.",
  },
  {
    question: "What types of businesses benefit most from aircraft advertising?",
    answer: "Perfect for real estate developers, automotive brands, e-commerce companies, educational institutions, hospitality chains, and FMCG brands targeting middle to upper-middle class travelers. Especially effective for pan-India brands wanting to establish presence in Telangana and Andhra Pradesh.",
  },
  {
    question: "Are there any restrictions on what can be advertised?",
    answer: "We must comply with DGCA (Directorate General of Civil Aviation) regulations. Prohibited: alcohol, tobacco, gambling, and political content. We handle all compliance and approval processes - you focus on your brand, we handle the regulations.",
  },
  {
    question: "Can I choose specific routes or destinations?",
    answer: "Yes! We help you select aircraft serving routes that match your target markets. Popular domestic routes from Hyderabad include Bangalore, Mumbai, Delhi, Chennai, Goa, and tier-2 cities. We optimize based on your customer demographics.",
  },
  {
    question: "What happens if an aircraft is grounded or route changes?",
    answer: "We have backup aircraft ready to ensure continuous campaign coverage. If your primary aircraft is temporarily grounded, we immediately transfer your branding to another aircraft at no additional cost. This is included in our service guarantee.",
  },
  {
    question: "Do you offer payment plans for smaller businesses?",
    answer: "Absolutely! We offer flexible payment terms including monthly installments and milestone-based payments. For first-time clients, we provide special introductory rates. We believe aircraft advertising should be accessible to growing Indian brands.",
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
          <Card className="p-8 shadow-premium bg-card border-border/50">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border/50 last:border-0"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

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
