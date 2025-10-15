import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Award, Users, Clock, CheckCircle, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const clientLogos = [
  { name: "Luxe Homes Realty", abbr: "LHR" },
  { name: "AutoElite Motors", abbr: "AM" },
  { name: "WellnessFirst Hospitals", abbr: "WH" },
  { name: "Premium Finance Corp", abbr: "PFC" },
  { name: "Elite Education Group", abbr: "EEG" },
  { name: "Luxury Hospitality Chain", abbr: "LHC" },
];

const trackRecordStats = [
  {
    value: "100+",
    title: "Brands Trust Skylar",
    description: "Across diverse industries",
  },
  {
    value: "500+",
    title: "Aircraft Branded",
    description: "Premium fleet coverage",
  },
  {
    value: "50M+",
    title: "Passenger Impressions",
    description: "Monthly reach achieved",
  },
  {
    value: "98%",
    title: "Client Retention Rate",
    description: "Long-term partnerships",
  },
];

const trustBadges = [
  {
    icon: Shield,
    title: "AAI Certified",
    description: "Airport Authority of India approved partner",
  },
  {
    icon: Award,
    title: "ISO Compliant",
    description: "Quality management certified operations",
  },
  {
    icon: Users,
    title: "50+ Brands",
    description: "Trusted by India's leading companies",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Dedicated campaign management team",
  },
];

const guarantees = [
  "100% compliance with aviation regulations",
  "Premium quality materials & installation",
  "Real-time campaign tracking & analytics",
  "Flexible payment terms available",
  "Free design consultation & mockups",
  "Guaranteed campaign launch dates",
];

export const TrustSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        
        {/* Brands Who Trust Skylar Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Trusted by Industry Leaders
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-foreground mb-6">
            Brands Who Trust Skylar
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
            From startups to Fortune 500 companies, leading brands choose Skylar for their most important advertising campaigns.
          </p>
        </motion.div>

        {/* Scrolling Client Logos */}
        <div className="mb-20 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="flex gap-8 animate-scroll-infinite">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <motion.div
                  key={`${client.abbr}-${index}`}
                  className="flex-shrink-0 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 min-w-[200px]">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center text-2xl font-bold text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all">
                        {client.abbr}
                      </div>
                      <p className="text-sm font-medium text-foreground">{client.name}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Our Track Record Speaks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-foreground text-center mb-12">
            Our Track Record Speaks
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trackRecordStats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="p-8 text-center hover:shadow-premium transition-all duration-300 bg-gradient-to-br from-card to-card/50 border-border/50 group hover:border-primary/30 h-full">
                  <div className="text-5xl lg:text-6xl font-display font-black text-primary mb-3 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    {stat.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Skylar Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-4"
        >
          <Badge className="mb-4 bg-accent text-foreground">
            Why Skylar?
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-foreground mb-4">
            YOUR TRUSTED PARTNER IN
            <br />
            <span className="text-gradient-sky">HYDERABAD AIRPORT</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            India's first specialized aircraft advertising agency with exclusive Hyderabad domestic terminal partnerships
          </p>
        </motion.div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center hover:shadow-premium transition-all duration-300 bg-card border-border/50">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <badge.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Guarantees Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="p-8 md:p-12 shadow-premium bg-gradient-to-br from-card to-card/50 border-primary/20">
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-8 h-8 text-accent fill-accent" />
              <h3 className="text-3xl font-display font-black">Our Ironclad Promise</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={guarantee}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{guarantee}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-accent/10 rounded-lg border-2 border-accent/30">
              <p className="text-center text-lg font-semibold text-foreground">
                <span className="text-accent">Limited Availability:</span> Only 3 campaign slots remaining for Q1 2025
              </p>
              <p className="text-center text-sm text-muted-foreground mt-2">
                Secure your spot before peak travel season begins
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
