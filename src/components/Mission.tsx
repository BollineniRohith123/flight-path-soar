import { motion } from "framer-motion";
import { Plane, Globe, Zap, Target } from "lucide-react";

export const Mission = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const missions = [
    {
      icon: Target,
      title: "Beyond Impressions",
      description:
        "We don't just count views—we create lasting brand memories that soar above the competition.",
    },
    {
      icon: Globe,
      title: "India's Sky Canvas",
      description:
        "Transforming India's aviation landscape into the world's most prestigious advertising platform.",
    },
    {
      icon: Zap,
      title: "Instant Credibility",
      description:
        "When your brand flies at 35,000 feet, it automatically elevates your market position.",
    },
  ];

  const stats = [
    {
      value: "50x",
      label: "LONGER ENGAGEMENT",
      subtitle: "Captive Audience Advantage",
      description: "2.5 hours of undivided attention vs. 3 seconds of digital scroll time",
    },
    {
      value: "85%",
      label: "HIGH-INCOME TRAVELERS",
      subtitle: "Premium Context",
      description: "Your brand shares space with luxury travel, not random content",
    },
    {
      value: "3x",
      label: "BETTER RECALL",
      subtitle: "Memorable Impact",
      description: "Aviation advertising creates 'landmark moments' in customer memory",
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-background via-background to-accent/5 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Mission Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.div
            variants={fadeInUpVariants}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Plane className="w-6 h-6 text-primary animate-pulse" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-foreground">
              Skylar's Mission
            </h2>
            <Plane className="w-6 h-6 text-accent animate-pulse" />
          </motion.div>

          <motion.p
            variants={fadeInUpVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            We believe advertising in the skies is fundamentally different—and
            fundamentally better. Here's why your brand deserves to fly above the noise.
          </motion.p>
        </motion.div>

        {/* Mission Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20"
        >
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              variants={fadeInUpVariants}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <div className="relative bg-card border border-border rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2">
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <mission.icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {mission.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {mission.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Advertising in the Skies Is Different */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-8">
            Why Advertising in the Skies Is Different
          </h3>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUpVariants}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-8 lg:p-10 h-full transition-all duration-300 hover:shadow-2xl hover:border-primary/50 overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-300" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Stat Value */}
                  <div className="text-5xl lg:text-6xl font-black text-primary mb-2">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-sm font-bold text-accent tracking-wider mb-3">
                    {stat.label}
                  </div>

                  {/* Subtitle */}
                  <h4 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                    {stat.subtitle}
                  </h4>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
