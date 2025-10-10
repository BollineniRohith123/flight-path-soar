import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Plane, Home, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import exteriorImage from "@/assets/exterior-advertising.jpg";
import interiorImage from "@/assets/interior-branding.jpg";
import campaignImage from "@/assets/campaign-management.jpg";

const services = [
  {
    icon: Plane,
    title: "Aircraft Exterior Branding",
    description: "Full and partial aircraft wraps on domestic carriers flying from Hyderabad to major Indian cities.",
    features: ["IndiGo, SpiceJet, Air India Partners", "DGCA Compliant Materials", "7-Day Express Installation", "Pan-India Route Coverage"],
    image: exteriorImage,
  },
  {
    icon: Home,
    title: "In-Cabin Advertising",
    description: "Premium interior placements including seat backs, overhead bins, and tray tables on Hyderabad routes.",
    features: ["High Dwell Time", "Captive Audience", "Business Traveler Focus", "Cost-Effective Reach"],
    image: interiorImage,
  },
  {
    icon: TrendingUp,
    title: "Turnkey Campaign Solutions",
    description: "Complete service from design to installation with dedicated account management and weekly performance reports.",
    features: ["Free Design & Mockups", "Installation Management", "Real-Time Flight Tracking", "ROI Analytics Dashboard"],
    image: campaignImage,
  },
];

export const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-foreground mb-4">
            DOMINATE THE SKIES
            <br />
            <span className="text-gradient-sky">ABOVE HYDERABAD</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three powerful advertising solutions for India's domestic aviation market
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="group overflow-hidden h-full hover:shadow-premium transition-all duration-500 bg-card border-border/50">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="w-12 h-12 text-accent" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
