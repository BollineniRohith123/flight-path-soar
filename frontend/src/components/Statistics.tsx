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
    value: 50000000,
    suffix: "+",
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
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 bg-transparent" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          {campaignStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-foreground mb-2">
                {s.value >= 1000000 ? `${(s.value/1000000).toFixed(1)}M` : s.value}{s.suffix}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
