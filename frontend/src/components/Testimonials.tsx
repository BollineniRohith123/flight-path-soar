import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Marketing Director",
    company: "TechVista Solutions",
    content: "We launched our B2B SaaS campaign with Skylar and saw a 340% increase in qualified leads from Hyderabad and Bangalore. The aircraft visibility gave us instant credibility with enterprise clients.",
    rating: 5,
    initials: "RS",
    color: "bg-blue-500",
  },
  {
    name: "Priya Reddy",
    role: "Founder & CEO",
    company: "Luxe Homes Realty",
    content: "Our luxury apartment sales went through the roof after the aircraft campaign. Hyderabad's elite travelers saw our brand at 35,000 feet - talk about premium positioning! Best marketing investment we've made.",
    rating: 5,
    initials: "PR",
    color: "bg-purple-500",
  },
  {
    name: "Arjun Mehta",
    role: "Brand Manager",
    company: "Spice Trail Restaurants",
    content: "Skylar handled everything from design to installation. Our restaurant chain got massive exposure across South India. The team's professionalism and attention to detail were outstanding.",
    rating: 5,
    initials: "AM",
    color: "bg-orange-500",
  },
  {
    name: "Kavita Patel",
    role: "Head of Marketing",
    company: "EduGlobal Academy",
    content: "As an educational institution, aircraft advertising positioned us as premium and internationally minded. Admissions increased by 180% in just 3 months. The ROI calculator they showed was spot-on!",
    rating: 5,
    initials: "KP",
    color: "bg-green-500",
  },
  {
    name: "Vikram Singh",
    role: "Regional Manager",
    company: "AutoElite Motors",
    content: "Our luxury car dealership wanted to reach high-net-worth travelers. Skylar's aircraft campaigns delivered exactly that. Professional service, transparent pricing, and incredible results.",
    rating: 5,
    initials: "VS",
    color: "bg-indigo-500",
  },
  {
    name: "Sneha Desai",
    role: "CMO",
    company: "WellnessFirst Hospitals",
    content: "The team at Skylar understands the Hyderabad market deeply. They recommended the perfect campaign duration and routes. Our medical tourism business has seen record international inquiries.",
    rating: 5,
    initials: "SD",
    color: "bg-pink-500",
  },
];

export const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">
            BRANDS THAT
            <br />
            <span className="text-gradient-sky">TRUST SKYLAR</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real businesses across Hyderabad and India
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-premium transition-all duration-300 bg-card border-border/50 relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <Avatar className={`${testimonial.color} w-12 h-12`}>
                    <AvatarFallback className="text-white font-bold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Signal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="inline-block px-8 py-6 bg-gradient-gold border-0 shadow-gold">
            <div className="flex items-center gap-4">
              <div className="text-4xl font-display font-black text-foreground">4.9/5</div>
              <div className="text-left">
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                  ))}
                </div>
                <div className="text-sm text-foreground/80">Based on 87+ client reviews</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
