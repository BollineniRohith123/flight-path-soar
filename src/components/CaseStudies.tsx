import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import case1 from "@/assets/case-study-1.jpg";
import case2 from "@/assets/case-study-2.jpg";
import case3 from "@/assets/case-study-3.jpg";

const caseStudies = [
  {
    title: "Netflix Global Launch Campaign",
    category: "Entertainment",
    description: "Transformed 50 aircraft into flying Netflix billboards across major international routes, generating 45M impressions in 90 days.",
    metrics: [
      { label: "Impressions", value: "45M+" },
      { label: "Routes", value: "120" },
      { label: "ROI", value: "340%" },
    ],
    image: case1,
    color: "from-red-500 to-red-700",
  },
  {
    title: "Emirates Co-Branding Excellence",
    category: "Luxury Travel",
    description: "Premium partnership showcasing dual-brand power on flagship A380 fleet, elevating both brands through strategic alliance.",
    metrics: [
      { label: "Reach", value: "28M+" },
      { label: "Markets", value: "65" },
      { label: "Engagement", value: "+185%" },
    ],
    image: case2,
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Tourism Board Seasonal Push",
    category: "Destination Marketing",
    description: "Seasonal aircraft wraps promoting tropical destinations during peak winter travel, driving record tourism numbers.",
    metrics: [
      { label: "Bookings", value: "+220%" },
      { label: "Duration", value: "6 months" },
      { label: "Coverage", value: "Global" },
    ],
    image: case3,
    color: "from-cyan-500 to-blue-600",
  },
];

export const CaseStudies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="case-studies" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-foreground mb-4">
            CAMPAIGNS THAT
            <br />
            <span className="text-gradient-sky">SOAR</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from brands that trusted us to elevate their visibility
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="group overflow-hidden h-full hover:shadow-premium transition-all duration-500 bg-card border-border/50">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${study.color} opacity-30 group-hover:opacity-40 transition-opacity`} />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-foreground hover:bg-white">
                      {study.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {study.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-muted-foreground italic">
            "Skylar transformed our brand visibility from ground-level to global phenomenon."
            <br />
            <span className="text-foreground font-semibold">— Chief Marketing Officer, Fortune 500 Company</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
