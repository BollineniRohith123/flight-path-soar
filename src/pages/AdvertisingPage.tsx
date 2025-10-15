import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FixedCTABar } from "@/components/FixedCTABar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Plane, Target, Eye, Rocket, TrendingUp, BarChart3,
  Users, Zap, CheckCircle2, ArrowRight
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const AdvertisingPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Plane,
      title: "Aircraft Advertising",
      description: "Exterior & interior aircraft branding with complete fleet coverage",
      features: [
        "Full & partial aircraft wraps",
        "Interior seat branding",
        "Tray table advertising",
        "Overhead bin graphics"
      ]
    },
    {
      icon: Target,
      title: "Outdoor Media",
      description: "High-impact outdoor advertising across prime locations",
      features: [
        "LED billboards",
        "Hoarding & unipoles",
        "Transit advertising",
        "Street furniture branding"
      ]
    },
    {
      icon: Eye,
      title: "Digital Integration",
      description: "Amplify your physical campaigns with digital presence",
      features: [
        "Social media amplification",
        "QR code integration",
        "Campaign microsites",
        "Digital OOH screens"
      ]
    }
  ];

  const brandingProcess = [
    {
      step: 1,
      title: "Discovery & Strategy",
      icon: Target,
      description: "Deep dive into your brand, target audience, and goals to chart a clear flight plan.",
      deliverables: ["Market research", "Strategic roadmap", "Budget proposal"]
    },
    {
      step: 2,
      title: "Identity & Positioning",
      icon: Rocket,
      description: "Craft compelling brand identities that resonate with high-altitude audiences.",
      deliverables: ["Brand identity", "Messaging strategy", "Creative concepts"]
    },
    {
      step: 3,
      title: "Campaign Activation",
      icon: Zap,
      description: "Launch integrated campaigns across aircraft, outdoor, and digital channels.",
      deliverables: ["Multi-channel rollout", "Media placement", "Creative execution"]
    }
  ];

  const whyAircraftMatters = [
    {
      icon: Users,
      stat: "84% Unreached Offline",
      title: "Unmatched Attention Value",
      description: "Captive audiences of 2.5+ hours—no skipping, no scrolling, just immersive brand engagement at cruising altitude."
    },
    {
      icon: TrendingUp,
      stat: "88% High-Income Travelers",
      title: "Premium Context Association",
      description: "Your brand shares space with luxury travel experiences, automatically elevating perception and credibility."
    },
    {
      icon: BarChart3,
      stat: "3x Higher purchasing power",
      title: "Quality Audience Targeting",
      description: "Air travelers have 3x higher purchasing power and are decision-makers in their organizations and households."
    },
    {
      icon: Rocket,
      stat: "2x Better recall rates",
      title: "Memorable Brand Moments",
      description: "Aviation advertising creates 'landmark moments' that travelers remember and share long after landing."
    }
  ];

  const comparisonData = [
    {
      feature: "Engagement Duration",
      skylar: "2.5 hours (captive)",
      outdoor: "3-8 seconds (fleeting)",
      tv: "15-30 sec spots",
      digital: "0.3-2 seconds"
    },
    {
      feature: "Reach vs. Waste",
      skylar: "1:48 ratio (low waste)",
      outdoor: "Mass reach",
      tv: "1:17+ ratio (high waste)",
      digital: "Moderate"
    },
    {
      feature: "TV Advertising",
      skylar: "Ad blocks (low clutter)",
      outdoor: "Visual clutter",
      tv: "15 ads/hr (high clutter)",
      digital: "Ad fatigue"
    },
    {
      feature: "Indoor Ambience",
      skylar: "1-2 brands/flight",
      outdoor: "Multiple ads",
      tv: "30-45 min programs",
      digital: "Endless scrolling"
    }
  ];

  const futureInsights = [
    {
      title: "India's Aviation Boom",
      description: "Domestic air traffic growing at 8% annually, making aviation advertising India's fastest-growing premium channel.",
      cta: "Claim your fleet partnership →",
      highlight: "8% annual growth"
    },
    {
      title: "Rising Affluence",
      description: "India's rising affluent class (80M+ households) prefers air travel, creating unmatched brand access opportunities.",
      cta: "Target affluent India →",
      highlight: "80M+ households"
    },
    {
      title: "Digital Integration",
      description: "QR-enabled aircraft ads driving 4x higher engagement through seamless physical-to-digital brand journeys.",
      cta: "Integrate your campaign →",
      highlight: "4x engagement"
    }
  ];

  const skylarVsVendors = [
    {
      criteria: "Consultation Depth",
      skylar: "Full strategic brand partnership with research",
      others: "One dimensional approach",
      advantage: "Holistic Solutions"
    },
    {
      criteria: "Speed to Market",
      skylar: "7-14 days from contract to flight",
      others: "No strict time commitment",
      advantage: "3x Faster Launch"
    },
    {
      criteria: "Creative Excellence",
      skylar: "In-house team of aviation specialists",
      others: "Outsourced or limited design help",
      advantage: "Better & Cheaper"
    },
    {
      criteria: "Performance Tracking",
      skylar: "Real-time dashboards with weekly reports",
      others: "Monthly reports (if any)",
      advantage: "Live Visibility"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-primary via-primary-dark to-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light rounded-full blur-3xl animate-pulse-slow" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <Badge className="mb-6 bg-accent/20 text-accent border-accent/30 text-base px-6 py-2">
              Comprehensive Advertising & Branding
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 leading-tight">
              Where Your Brand Takes Off
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Comprehensive Advertising and Branding, Above and Beyond
            </p>
            
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              From aircraft branding to outdoor media, we orchestrate integrated campaigns that elevate your brand across India's skies and streets.
            </p>
            
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-foreground font-bold text-lg px-8 py-6 shadow-xl"
            >
              Let's Build Your Presence
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Your Brand, Anywhere, Any Altitude */}
      <section className="py-24" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6">
              Your Brand. Anywhere, Any Altitude
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just place ads—we create brand ecosystems across the traveler's entire journey, from airport arrival to in-flight experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:border-primary/50 h-full group">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Proven Branding Process */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
              Our Proven Branding Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From discovery to deployment, we follow a strategic process that ensures your brand not only takes flight but soars.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            {brandingProcess.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-8 hover:shadow-xl transition-all">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                        {process.step}
                      </div>
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <process.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{process.title}</h3>
                      <p className="text-muted-foreground mb-4">{process.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {process.deliverables.map((deliverable) => (
                          <Badge key={deliverable} variant="secondary">
                            {deliverable}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Aircraft Advertising Matters in 2025+ */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
              Why Aircraft Advertising Matters in 2025+
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Aviation isn't just another channel—it's a fundamentally different way to reach India's decision-makers with premium context and measurability that traditional OOH can't match.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {whyAircraftMatters.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 hover:shadow-2xl transition-all duration-300 h-full border-l-4 border-l-primary">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-black text-primary mb-2">{item.stat}</div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Aviation vs. Other Advertising Mediums */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              Aviation vs. Other Advertising Mediums
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold">Comparison Factor</th>
                      <th className="px-6 py-4 text-left font-bold bg-accent text-foreground">
                        Skylar
                      </th>
                      <th className="px-6 py-4 text-left font-bold">Outdoor</th>
                      <th className="px-6 py-4 text-left font-bold">TV Ads</th>
                      <th className="px-6 py-4 text-left font-bold">Digital Ads</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={row.feature} className={index % 2 === 0 ? 'bg-muted/30' : 'bg-background'}>
                        <td className="px-6 py-4 font-semibold">{row.feature}</td>
                        <td className="px-6 py-4 bg-accent/10 font-bold text-primary">{row.skylar}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.outdoor}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.tv}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.digital}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* The Future Is Taking Off */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              The Future Is Taking Off
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {futureInsights.map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="p-8 hover:shadow-2xl transition-all duration-300 h-full bg-gradient-to-br from-card to-primary/5">
                  <div className="text-4xl font-black text-accent mb-4">{insight.highlight}</div>
                  <h3 className="text-2xl font-bold mb-4">{insight.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{insight.description}</p>
                  <Button variant="link" className="text-primary font-semibold p-0 h-auto">
                    {insight.cta} <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Capitalize on Aviation's Growth */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-6">
          <Card className="bg-primary-dark border-accent/30 p-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Plane className="w-16 h-16 mx-auto mb-6 text-accent" />
              <h2 className="text-4xl md:text-5xl font-display font-black mb-6 text-white">
                Ready to Capitalize on Aviation's Growth?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                The aviation advertising boom is here. Secure your fleet partnership before competitors claim the skies. Start building your altitude advantage today.
              </p>
              <Button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-foreground font-bold text-lg px-8 py-6"
              >
                Secure Your Skies
              </Button>
            </motion.div>
          </Card>
        </div>
      </section>

      {/* Skylar vs. Typical Advertising Vendors */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
              Skylar vs. Typical Advertising Vendors
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here's why leading brands choose Skylar over traditional advertising agencies
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-primary to-primary-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold">Comparison Criteria</th>
                      <th className="px-6 py-4 text-left font-bold bg-accent text-foreground">Skylar</th>
                      <th className="px-6 py-4 text-left font-bold">Others</th>
                      <th className="px-6 py-4 text-left font-bold">Our Advantage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {skylarVsVendors.map((row, index) => (
                      <tr key={row.criteria} className={index % 2 === 0 ? 'bg-muted/30' : 'bg-background'}>
                        <td className="px-6 py-4 font-semibold">{row.criteria}</td>
                        <td className="px-6 py-4 bg-accent/10 font-bold text-primary">{row.skylar}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.others}</td>
                        <td className="px-6 py-4">
                          <Badge className="bg-accent text-foreground">{row.advantage}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <FixedCTABar />
    </div>
  );
};

export default AdvertisingPage;
