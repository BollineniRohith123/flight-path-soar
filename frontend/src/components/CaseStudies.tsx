import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import case1 from "@/assets/case-study-1.jpg";
import case2 from "@/assets/case-study-2.jpg";
import case3 from "@/assets/case-study-3.jpg";

const caseStudies = [
  {
    title: "TechCorp India - IT Services",
    category: "B2B Technology",
    description: "3-month campaign on Hyderabad-Bangalore-Mumbai routes generated 850K+ impressions and 340% increase in enterprise leads.",
    metrics: [
      { label: "Impressions", value: "850K+" },
      { label: "Lead Growth", value: "+340%" },
      { label: "ROI", value: "485%" },
    ],
    image: case1,
    color: "from-red-500 to-red-700",
  },
  {
    title: "Skyline Estates - Premium Real Estate",
    category: "Real Estate",
    description: "Full aircraft wrap campaign targeting Hyderabad's luxury property market resulted in ₹180 Cr in sales within 6 months.",
    metrics: [
      { label: "Sales Value", value: "₹180Cr" },
      { label: "Site Visits", value: "+520%" },
      { label: "Duration", value: "6 months" },
    ],
    image: case2,
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "GourmetHub - Restaurant Chain",
    category: "Hospitality",
    description: "Seasonal campaign during festival season drove massive footfall to 12 locations across Telangana and AP.",
    metrics: [
      { label: "Footfall", value: "+280%" },
      { label: "Bookings", value: "15K+" },
      { label: "Revenue", value: "+195%" },
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
            SUCCESS STORIES FROM
            <br />
            <span className="text-gradient-sky">HYDERABAD</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real businesses, real results, real growth across India
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
            "The reach we got from Hyderabad airport advertising exceeded our wildest expectations. Skylar's team made it effortless."
            <br />
            <span className="text-foreground font-semibold">— Marketing Director, Leading Indian Brand</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
