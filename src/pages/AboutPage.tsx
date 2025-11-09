import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Award, Users, TrendingUp, Globe, Shield, Zap, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We deliver nothing less than premium quality in every campaign we execute.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Transparent pricing, honest reporting, and ethical business practices always.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Pioneering new advertising formats and leveraging cutting-edge technology.",
    },
    {
      icon: Heart,
      title: "Partnership",
      description: "We treat your brand success as our own and build long-term relationships.",
    },
  ];

  const timeline = [
    { year: "2013", event: "Founded", description: "Skylar launched to specialize in aircraft advertising, offering premium aircraft exterior and interior branding services." },
    { year: "2015", event: "Regional Expansion", description: "Expanded operations across South India and began strategic partnerships with domestic carriers and airport operators." },
    { year: "2018", event: "Service Diversification", description: "Added full-service ATL & BTL capabilities — production, outdoor hoardings, transit media and campaign planning." },
    { year: "2020", event: "Digital Integration", description: "Integrated digital OOH and programmatic buying into our offerings to deliver targeted multi-channel campaigns." },
    { year: "2022", event: "National Rollout", description: "Scaled to pan‑India operations with national installation teams and an expanded client success group." },
    { year: "2024", event: "Campaign Management Excellence", description: "Delivered measureable ROI across multi-channel campaigns and established advanced measurement frameworks for clients." },
    { year: "2025", event: "Integrated Solutions Leader", description: "Positioned as a leading integrated advertising partner offering aircraft, outdoor, digital and traditional solutions with end-to-end performance tracking." },
  ];

  const team = [
    {
      name: "Bala Krishna",
      role: "Founder & CEO",
      description: "Visionary leader with extensive experience in aviation marketing and outdoor advertising. Strategic expert driving innovation and excellence in aircraft advertising solutions.",
    },
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
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6">
              ABOUT SKYLAR
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              The House of Advertising - Your Complete Marketing Partner
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Founded in <span className="text-primary font-bold">2013</span>, Skylar began with a focused mission: bring premium aircraft advertising to brands seeking high-impact, captive-audience placements. Over the years we've grown from a niche provider into <span className="font-bold text-primary">The House of Advertising</span>, delivering integrated campaigns that combine aircraft branding with outdoor, transit and digital channels.
              </p>

              <p className="text-lg leading-relaxed">
                Our evolution follows a deliberate roadmap — regional expansion, service diversification, and technology integration — driven by strategic partnerships and a commitment to measurable outcomes. We combine creative production, compliant installations, and data-driven media planning to ensure every campaign performs.
              </p>

              <p className="text-lg leading-relaxed">
                Today, Skylar operates nationally with dedicated teams for installation, production, analytics, and client success. We focus on ROI-first campaigns, clear reporting, and premium execution across every channel — from the sky to the street and into digital ecosystems.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-3xl font-display font-black mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground">
                  To provide comprehensive, integrated advertising solutions that drive measurable results. 
                  As "The House of Advertising," we combine expertise across aircraft branding, outdoor media, 
                  digital campaigns, and traditional advertising to deliver 360° marketing success.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
                <Globe className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-3xl font-display font-black mb-4">Our Vision</h3>
                <p className="text-lg text-muted-foreground">
                  To be recognized as India's most trusted full-service advertising partner, known for 
                  innovative solutions, exceptional execution, and ROI-focused campaigns across all media channels - 
                  from the sky to the street, from digital screens to living rooms.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all h-full hover:border-primary">
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Milestones that shaped Skylar's success story
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 pb-12 border-l-2 border-primary/30 last:pb-0"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-3xl font-display font-black text-primary">{milestone.year}</span>
                    <h3 className="text-xl font-bold">{milestone.event}</h3>
                  </div>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry experts dedicated to your brand's success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "Since 2013", label: "Years of Excellence" },
              { number: "500+", label: "Campaigns Delivered" },
              { number: "50M+", label: "Total Impressions" },
              { number: "95%", label: "Client Retention" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-display font-black mb-2 text-accent">{stat.number}</div>
                <div className="text-lg font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
