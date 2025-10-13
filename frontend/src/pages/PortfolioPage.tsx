import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CaseStudies } from "@/components/CaseStudies";
import { Testimonials } from "@/components/Testimonials";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, TrendingUp, Eye, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const PortfolioPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const successMetrics = [
    {
      icon: Eye,
      metric: "50M+",
      label: "Monthly Impressions",
      description: "Across all channels & campaigns",
    },
    {
      icon: TrendingUp,
      metric: "4.2x",
      label: "Average ROI",
      description: "Multi-channel campaigns",
    },
    {
      icon: Target,
      metric: "200+",
      label: "Active Campaigns",
      description: "Across all media types",
    },
    {
      icon: Award,
      metric: "500+",
      label: "Successful Projects",
      description: "Since 2018",
    },
  ];

  const industries = [
    { name: "Technology & Startups", campaigns: 45, highlight: "Razorpay, Zomato, PhonePe" },
    { name: "Real Estate", campaigns: 38, highlight: "Prestige, Brigade, Godrej" },
    { name: "BFSI", campaigns: 42, highlight: "ICICI, HDFC, Kotak" },
    { name: "E-Commerce", campaigns: 35, highlight: "Flipkart, Myntra, BigBasket" },
    { name: "Automotive", campaigns: 32, highlight: "Hyundai, Maruti, Honda" },
    { name: "Healthcare", campaigns: 28, highlight: "Apollo, Manipal, Fortis" },
    { name: "Education", campaigns: 25, highlight: "BYJU'S, upGrad, Great Learning" },
    { name: "Hospitality & Travel", campaigns: 34, highlight: "Marriott, MakeMyTrip, Taj" },
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
            className="text-center max-w-4xl mx-auto px-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6">
              OUR PORTFOLIO
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8">
              Showcasing Integrated Marketing Campaigns Across All Media Channels
            </p>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              Results That Speak
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real numbers from real campaigns across India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center hover:shadow-lg transition-all hover:border-primary h-full">
                  <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-display font-black text-primary mb-2">
                    {item.metric}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Deep dive into our most successful campaigns
            </p>
          </motion.div>
        </div>
        <CaseStudies />
      </section>

      {/* Industries We Serve */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diverse expertise across multiple sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all hover:border-primary h-full">
                  <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                  <p className="text-3xl font-display font-black text-primary mb-2">
                    {industry.campaigns}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">Campaigns</p>
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs text-muted-foreground">Notable Clients:</p>
                    <p className="text-sm font-semibold">{industry.highlight}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from brands who soared with Skylar
            </p>
          </motion.div>
        </div>
        <Testimonials />
      </section>

      {/* Campaign Gallery Info */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 p-12 text-center border-primary/20">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
              See Our Work in Action
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Visit Hyderabad Airport to see our latest aircraft wraps, or schedule a 
              consultation to view our complete portfolio and discuss your campaign
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-all">
                  Schedule Portfolio Review
                </button>
              </a>
              <a href="tel:+919876543210">
                <button className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all">
                  Call for Details
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

export default PortfolioPage;
