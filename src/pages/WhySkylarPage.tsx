import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ROICalculator } from "@/components/ROICalculator";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Award, Shield, Zap, TrendingUp, Users, Clock, 
  CheckCircle2, Target, Plane, BarChart3 
} from "lucide-react";
import { Card } from "@/components/ui/card";

const WhySkylarPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const advantages = [
    {
      icon: Target,
      title: "Complete Advertising Solutions",
      description: "The House of Advertising - one partner for all your marketing needs across aircraft, outdoor, digital, and traditional media.",
      benefits: [
        "360° integrated campaigns",
        "Consistent brand messaging",
        "Multi-channel expertise",
        "Unified strategy & execution"
      ]
    },
    {
      icon: Zap,
      title: "Rapid Deployment Across All Media",
      description: "Industry-leading turnaround times whether it's aircraft wraps, hoardings installation, or digital campaign launches.",
      benefits: [
        "7-day aircraft installation",
        "Fast outdoor media deployment",
        "Immediate digital campaign start",
        "24/7 project management"
      ]
    },
    {
      icon: BarChart3,
      title: "Data-Driven Performance",
      description: "Real-time tracking and analytics across all advertising channels with comprehensive ROI measurement.",
      benefits: [
        "Live campaign dashboards",
        "Cross-channel attribution",
        "Detailed engagement metrics",
        "Weekly performance insights"
      ]
    },
    {
      icon: Shield,
      title: "Full Compliance & Safety",
      description: "Complete regulatory management across DGCA aviation standards, municipal outdoor advertising licenses, and broadcast regulations.",
      benefits: [
        "100% compliance guarantee",
        "All permits handled",
        "Insurance coverage",
        "Risk-free execution"
      ]
    },
    {
      icon: Users,
      title: "Dedicated Campaign Team",
      description: "Every client gets a specialized team including account manager, creative director, media planner, and production coordinator.",
      benefits: [
        "Single point of contact",
        "Direct WhatsApp access",
        "Weekly strategy sessions",
        "Proactive optimization"
      ]
    },
    {
      icon: Award,
      title: "Premium Quality Standards",
      description: "Highest-grade materials, certified professionals, and meticulous quality control across all services - from vinyl wraps to video production.",
      benefits: [
        "3M certified materials",
        "Weather-resistant outdoor",
        "4K video production",
        "Multi-stage quality checks"
      ]
    },
  ];

  const comparisons = [
    {
      feature: "Service Scope",
      skylar: "All Media Channels",
      others: "Single Channel Focus",
      advantage: "Complete Solutions"
    },
    {
      feature: "Campaign Integration",
      skylar: "360° Unified Strategy",
      others: "Isolated Campaigns",
      advantage: "Better ROI"
    },
    {
      feature: "Installation Time",
      skylar: "7-14 Days",
      others: "15-45 Days",
      advantage: "2-3x Faster"
    },
    {
      feature: "Performance Tracking",
      skylar: "Real-Time Dashboard",
      others: "Monthly Reports",
      advantage: "Live Visibility"
    },
    {
      feature: "Client Support",
      skylar: "24/7 Dedicated Team",
      others: "Business Hours Only",
      advantage: "Always Available"
    },
    {
      feature: "Creative Services",
      skylar: "In-House Production",
      others: "Outsourced",
      advantage: "Faster & Cheaper"
    },
    {
      feature: "Material Quality",
      skylar: "3M Premium Grade",
      others: "Standard Grade",
      advantage: "Longer Lasting"
    },
  ];

  const guarantees = [
    "On-time campaign launch or 10% refund",
    "Minimum impression guarantee or extended duration",
    "100% DGCA compliance or full refund",
    "Weekly performance reports guaranteed",
    "Free campaign optimization based on data",
    "Dedicated support response within 2 hours"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary-dark to-background overflow-hidden">
        <div className="absolute inset-0 bg-[url('/clouds-background.jpg')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6">
              WHY CHOOSE SKYLAR?
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              The Clear Choice for Aircraft Advertising Excellence in India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-24" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              The Skylar Advantage
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Six compelling reasons why India's top brands choose us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 hover:shadow-lg transition-all hover:border-primary h-full">
                  <advantage.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground mb-6">{advantage.description}</p>
                  <ul className="space-y-2">
                    {advantage.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              Skylar vs. Others
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how we stack up against the competition
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold">Feature</th>
                      <th className="px-6 py-4 text-left font-bold">Skylar</th>
                      <th className="px-6 py-4 text-left font-bold">Others</th>
                      <th className="px-6 py-4 text-left font-bold">Our Advantage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((item, index) => (
                      <tr key={item.feature} className={index % 2 === 0 ? 'bg-muted/30' : ''}>
                        <td className="px-6 py-4 font-semibold">{item.feature}</td>
                        <td className="px-6 py-4 text-primary font-bold">{item.skylar}</td>
                        <td className="px-6 py-4 text-muted-foreground">{item.others}</td>
                        <td className="px-6 py-4">
                          <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                            {item.advantage}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Guarantees */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              Our Guarantees
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We stand behind our service with these commitments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all hover:border-accent h-full">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <p className="font-semibold">{guarantee}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-24 bg-muted/30">
        <ROICalculator />
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <Card className="bg-gradient-to-br from-primary to-primary-dark text-white p-12 text-center">
            <Plane className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
              Ready to Experience the Skylar Difference?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join 100+ brands who chose excellence. Get your free consultation and custom proposal today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="px-8 py-4 bg-accent text-foreground font-bold rounded-lg hover:bg-accent/90 transition-all">
                  Get Free Quote
                </button>
              </a>
              <a href="tel:+919876543210">
                <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-all">
                  Call Now
                </button>
              </a>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default WhySkylarPage;
