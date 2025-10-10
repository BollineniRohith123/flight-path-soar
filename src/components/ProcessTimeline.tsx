import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MessageSquare, FileCheck, Palette, Plane, BarChart, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: MessageSquare,
    title: "Initial Consultation",
    description: "Free strategy session to understand your brand goals and target audience",
    duration: "Day 1",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileCheck,
    title: "Proposal & Agreement",
    description: "Detailed campaign plan with pricing, timeline, and aircraft selection",
    duration: "Days 2-3",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Palette,
    title: "Design & Approval",
    description: "Professional mockups and 3D visualizations for your approval",
    duration: "Days 4-7",
    color: "from-teal-500 to-green-500",
  },
  {
    icon: Plane,
    title: "Production & Installation",
    description: "Premium material printing and expert aircraft wrapping at Hyderabad airport",
    duration: "Days 8-14",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: BarChart,
    title: "Campaign Launch",
    description: "Your brand takes flight with full tracking and monitoring",
    duration: "Day 15+",
    color: "from-emerald-500 to-lime-500",
  },
  {
    icon: CheckCircle,
    title: "Performance Reports",
    description: "Weekly analytics showing impressions, reach, and campaign impact",
    duration: "Ongoing",
    color: "from-lime-500 to-yellow-500",
  },
];

export const ProcessTimeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-muted/20" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">
            FROM CONCEPT TO
            <br />
            <span className="text-gradient-sky">TAKEOFF</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our proven 15-day process gets your brand flying over Hyderabad
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-24 w-0.5 h-20 bg-gradient-to-b from-primary/50 to-primary/20 -translate-x-1/2 hidden md:block" />
              )}

              <Card className="mb-8 overflow-hidden hover:shadow-premium transition-all duration-300 bg-card border-border/50">
                <div className="flex flex-col md:flex-row items-center gap-6 p-6">
                  {/* Step Number & Icon */}
                  <div className="relative shrink-0">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-elevation`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-foreground font-bold text-sm shadow-gold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-2xl font-display font-bold text-foreground">
                        {step.title}
                      </h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mt-2 md:mt-0">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Fast Track Option */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12"
        >
          <Card className="p-8 bg-gradient-gold border-0 shadow-gold">
            <div className="text-center">
              <h3 className="text-2xl font-display font-black text-foreground mb-3">
                Need It Faster? ⚡
              </h3>
              <p className="text-foreground/80 text-lg mb-4">
                Our express service can launch your campaign in just 7 days
              </p>
              <p className="text-sm text-foreground/70">
                Perfect for seasonal promotions and time-sensitive launches
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
