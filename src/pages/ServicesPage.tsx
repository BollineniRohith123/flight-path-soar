import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Plane, Home, TrendingUp, CheckCircle2, ArrowRight, 
  Building2, Bus, Newspaper, Radio, Monitor, MapPin 
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import exteriorImage from "@/assets/exterior-advertising.jpg";
import interiorImage from "@/assets/interior-branding.jpg";
import campaignImage from "@/assets/campaign-management.jpg";

const services = [
  {
    icon: Plane,
    title: "Aircraft Exterior Branding",
    subtitle: "Complete Aircraft Wraps - 360° Brand Coverage",
    description: "Transform aircraft into flying billboards with complete exterior branding. Your brand soars across India with maximum visibility at airports, during takeoff, landing, and in-flight, delivering unmatched brand recall and premium positioning.",
    features: [
      "Complete 360° Aircraft Wraps",
      "DGCA Compliant Premium Materials",
      "IndiGo, SpiceJet, Air India Partnerships",
      "Pan-India Route Coverage",
      "Weather-Resistant & Durable Graphics",
      "7-Day Express Installation",
      "Free 3D Mockups & Design Consultation"
    ],
    benefits: [
      "450,000+ Daily Airport Impressions",
      "15+ Million Monthly Reach",
      "Premium Brand Association",
      "Long Campaign Duration (6-12 months)",
      "360° Press Coverage"
    ],
    pricing: "Custom Packages - Contact for Quote",
    image: exteriorImage,
  },
  {
    icon: Home,
    title: "Aircraft Interior Branding",
    subtitle: "Captive Audience Engagement",
    description: "Dominate passenger attention throughout their flight journey with strategic interior branding. From overhead bins to seat backs, meal trays to headrests - engage travelers when they're most receptive to your message.",
    features: [
      "Overhead Bins - Branded Panels",
      "Skyline Panels (Above Windows)",
      "Meal Tray Interior Branding",
      "Headrest Cover Advertisements",
      "Seat Back & Tray Table Branding",
      "100% Captive Audience Coverage"
    ],
    benefits: [
      "Average 2.5 Hour Dwell Time",
      "100% Captive Audience",
      "Business & Premium Travelers",
      "High Engagement & Recall",
      "Multiple Touchpoints Per Flight"
    ],
    pricing: "Starting from ₹15 Lakhs/Month",
    image: interiorImage,
  },
  {
    icon: TrendingUp,
    title: "Airport & Ground Services",
    subtitle: "Complete Airport Ecosystem Branding",
    description: "Extend your brand presence beyond the aircraft with comprehensive airport and ground service branding. From digital check-ins to baggage carts, boarding passes to tarmac lounges - dominate every touchpoint.",
    features: [
      "Web Check-In & E-Ticket Branding",
      "Physical Boarding Pass Advertising",
      "Baggage & Luggage Cart Branding",
      "Tarmac Lounge & VIP Area Branding",
      "Step Ladder Graphics",
      "Ground Service Vehicle Branding"
    ],
    benefits: [
      "Multi-Touchpoint Engagement",
      "Pre-Flight & Post-Flight Visibility",
      "High-Value Traveler Targeting",
      "Strategic Airport Positioning",
      "Measurable Campaign Performance"
    ],
    pricing: "Packages Starting from ₹5 Lakhs",
    image: campaignImage,
  },
];

const additionalServices = [
  {
    icon: Building2,
    category: "Outdoor Advertising",
    services: [
      "Unipoles - Strategic Single-Pole Displays",
      "Hoardings & Billboard Advertising",
      "Anti Head Signs - Reverse Traffic Signage",
      "Median Boards - Construction Site Displays",
      "Bus Shelter Advertising",
      "Railway Station Branding",
      "Shopping Mall Advertising",
      "Commercial Space Branding"
    ]
  },
  {
    icon: Bus,
    category: "Transit & Transportation",
    services: [
      "Bus Branding - Complete Wraps",
      "Railway Platform Advertising",
      "Auto Canopy - Portable Pop-up Tents",
      "Metro Train Wraps",
      "Taxi & Cab Branding",
      "Fleet Advertising Solutions",
      "Vehicle Interior Advertising",
      "GPS-Tracked Mobile Media"
    ]
  },
  {
    icon: Monitor,
    category: "Digital & Interactive",
    services: [
      "LED Screen Advertising",
      "Digital Billboards",
      "Interactive Touch Kiosks",
      "Social Media Marketing",
      "Digital Display Networks",
      "QR Code Campaigns",
      "Augmented Reality Experiences",
      "Content Creation Services"
    ]
  },
  {
    icon: Newspaper,
    category: "Traditional Media",
    services: [
      "Press Advertising - Print Campaigns",
      "Direct Mail Marketing",
      "Cinema Advertising",
      "TV Commercial Production",
      "Radio Advertising",
      "Magazine Placements",
      "Newspaper Campaigns",
      "Print Production Services"
    ]
  },
  {
    icon: TrendingUp,
    category: "Campaign Management",
    services: [
      "ATL (Above The Line) Activities",
      "BTL (Below The Line) Campaigns",
      "Brand Activation Events",
      "Pop-up Advertising Solutions",
      "Experiential Marketing",
      "Campaign Strategy & Planning",
      "Media Planning & Buying",
      "Brand Consulting Services"
    ]
  },
  {
    icon: Radio,
    category: "Production & Support",
    services: [
      "Creative Design Services",
      "Large Format Printing",
      "Professional Installation",
      "Compliance & Permit Management",
      "Maintenance Services",
      "Graphic Design & Copywriting",
      "3D Visualization & Mockups",
      "Quality Assurance & Inspection"
    ]
  }
];

const ServicesPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
              OUR SERVICES
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Premium Aircraft Advertising Solutions for India's Domestic Aviation Market
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <p className="text-white font-semibold">450K+ Daily Reach</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <p className="text-white font-semibold">15M+ Monthly Impressions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <p className="text-white font-semibold">Pan-India Coverage</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24" ref={ref}>
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <service.icon className="w-16 h-16 text-accent" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <p className="text-primary font-semibold mb-2">{service.subtitle}</p>
                    <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="p-6 bg-muted/30">
                      <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        Features
                      </h3>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 mt-1.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </Card>

                    <Card className="p-6 bg-accent/10 border-accent/20">
                      <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-accent" />
                        Benefits
                      </h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 mt-1.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                    <p className="font-bold text-lg">{service.pricing}</p>
                    <Link to="/contact">
                      <Button className="bg-primary hover:bg-primary-dark">
                        Get Quote <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              Complete Marketing Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Beyond aircraft advertising, we offer comprehensive outdoor, transit, digital, and ambient media solutions across Hyderabad and India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all hover:border-primary h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl">{category.category}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {category.services.map((service) => (
                      <li key={service} className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full mt-6 border-primary text-primary hover:bg-primary hover:text-white"
                    asChild
                  >
                    <Link to="/contact">
                      Get Details
                    </Link>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Why Choose Our Complete Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-center">
                360° Marketing Solutions Under One Roof
              </h3>
              <div className="grid md:grid-cols-4 gap-6 mt-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-primary mb-2">50+</div>
                  <p className="text-sm text-muted-foreground">Media Types Available</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-primary mb-2">1000+</div>
                  <p className="text-sm text-muted-foreground">Active Locations</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-primary mb-2">24/7</div>
                  <p className="text-sm text-muted-foreground">Campaign Monitoring</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-primary mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Transparent Pricing</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <Card className="bg-gradient-to-br from-primary to-primary-dark text-white p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
              Ready to Launch Your Campaign?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get a free consultation and custom proposal for your aircraft advertising needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Request Free Quote
                </Button>
              </Link>
              <a href="tel:+919876543210">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-primary">
                  Call Us Now
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;
