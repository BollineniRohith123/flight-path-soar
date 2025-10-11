import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Eye, Plane, Globe } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  {
    icon: Eye,
    value: 450000,
    suffix: "+",
    label: "Daily Passenger Reach",
  },
  {
    icon: Plane,
    value: 180,
    suffix: "+",
    label: "Daily Flights (Hyderabad)",
  },
  {
    icon: Globe,
    value: 65,
    suffix: "+",
    label: "Domestic Destinations",
  },
];

const campaignStats = [
  {
    value: 500,
    suffix: "+",
    label: "Campaigns Delivered",
  },
  {
    value: 50,
    suffix: "M+",
    label: "Total Impressions",
  },
  {
    value: 200,
    suffix: "+",
    label: "Happy Clients",
  },
];

const CountUp = ({ end, duration = 2000, inView }: { end: number; duration?: number; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, inView]);

  return <span>{count.toLocaleString()}</span>;
};

export const Statistics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-gold"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.5 }}
        style={{ transformOrigin: "left" }}
      />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-4">
            HYDERABAD AIRPORT
            <br />
            <span className="text-gradient-gold">BY THE NUMBERS</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Unmatched reach across India's fastest-growing aviation hub
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 border-2 border-accent mb-6 group-hover:bg-accent/20 transition-all duration-300">
                <stat.icon className="w-10 h-10 text-accent" />
              </div>
              
              <div className="text-5xl md:text-6xl font-display font-black text-white mb-2">
                <CountUp end={stat.value} inView={inView} />
                <span className="text-accent">{stat.suffix}</span>
              </div>
              
              <p className="text-lg text-white/70 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Campaign Performance Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl md:text-4xl font-display font-black text-white text-center mb-12">
            OUR <span className="text-gradient-gold">TRACK RECORD</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {campaignStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.15 }}
                className="glass-effect p-8 rounded-xl border border-accent/20 hover:border-accent/40 transition-all text-center group hover:scale-105"
              >
                <div className="text-5xl md:text-6xl font-display font-black mb-2">
                  <span className="text-gradient-gold">
                    <CountUp end={stat.value} inView={inView} />
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-lg text-white/80 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Hyderabad Airport: India's 6th busiest with 25+ million annual passengers. Your brand reaches premium travelers flying to Mumbai, Delhi, Bangalore, and 60+ domestic destinations daily.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
