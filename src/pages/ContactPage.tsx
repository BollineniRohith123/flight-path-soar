import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "+91 80191 99995",
      secondary: "Direct Line",
      description: "Mon-Sat, 9 AM - 7 PM IST",
      action: "Call Now",
      link: "tel:+919346148825"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      primary: "+91 80191 99995",
      secondary: "Quick Response Guaranteed",
      description: "24/7 Instant Support",
      action: "Chat Now",
      link: "https://wa.me/919346148825"
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "contact@skylaradvertising.com",
      secondary: "sales@skylaradvertising.com",
      description: "Response within 2 hours",
      action: "Send Email",
      link: "mailto:contact@skylaradvertising.com"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      primary: "Free Consultation",
      secondary: "30-Minute Strategy Session",
      description: "Book a convenient time",
      action: "Book Now",
      link: "/contact#form"
    },
  ];

  const offices = [
    {
      city: "Hyderabad (Head Office)",
      address: "#308, 3rd floor, 502B, Capital Pk Rd, VIP Hills,\nMadhapur, HITEC City, Hyderabad, Telangana 500081,\nHyderabad, Telangana, India - 500081",
      phone: "+91 80191 99995",
      email: "hyderabad@skylaradvertising.com",
      hours: "Mon-Sat: 9:00 AM - 7:00 PM",
      isMain: true
    },
    {
      city: "Airport Operations",
      address: "Rajiv Gandhi International Airport,\nShamshabad, Hyderabad - 500108",
      phone: "+91 80191 99995",
      email: "airport@skylaradvertising.com",
      hours: "24/7 Operations",
      isMain: false
    },
  ];

  const faqs = [
    {
      question: "What's the typical response time?",
      answer: "We respond to all inquiries within 2 hours during business hours. WhatsApp queries get instant attention 24/7."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes! We provide complimentary 30-minute strategy sessions to understand your needs and recommend the best solutions."
    },
    {
      question: "Can I visit your office?",
      answer: "Absolutely! We welcome office visits. Please schedule an appointment to ensure our team is available to assist you."
    },
    {
      question: "Do you provide airport tours?",
      answer: "Yes, we can arrange guided tours of Hyderabad Airport to see our aircraft wraps in action. Contact us to schedule."
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
              GET IN TOUCH
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Let's Launch Your Brand to New Heights
            </p>
            <p className="text-lg text-white/80">
              Speak with our aviation marketing experts and get a custom proposal within 24 hours
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              Choose Your Preferred Contact Method
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to help through multiple channels
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all hover:border-primary h-full flex flex-col">
                  <method.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                  <p className="font-semibold text-primary mb-1">{method.primary}</p>
                  <p className="text-sm text-muted-foreground mb-2">{method.secondary}</p>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">{method.description}</p>
                  <a href={method.link} className="mt-auto">
                    <Button className="w-full bg-primary hover:bg-primary-dark">
                      {method.action}
                    </Button>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="form" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              Request a Free Quote
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours with a custom proposal
            </p>
          </motion.div>
          <ContactForm />
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              Our Locations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visit us or reach out to our nearest office
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <Card className={`p-8 hover:shadow-lg transition-all h-full ${office.isMain ? 'border-primary border-2' : ''}`}>
                  {office.isMain && (
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                      Main Office
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-6">{office.city}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground whitespace-pre-line">{office.address}</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <a href={`tel:${office.phone}`} className="text-primary hover:underline">
                        {office.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-primary hover:underline">
                        {office.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                      <p className="text-muted-foreground">{office.hours}</p>
                    </div>
                  </div>

                  {office.isMain && (
                    <Button className="w-full mt-6 bg-primary hover:bg-primary-dark">
                      Get Directions
                    </Button>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <Card className="overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160425671!2d78.24323209999999!3d17.412608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Skylar Office Location"
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Quick FAQs */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">
              Quick Questions?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common queries about reaching us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all h-full">
                  <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-display font-black mb-4">
            Need Immediate Assistance?
          </h3>
          <p className="text-xl mb-6">
            Our team is available 24/7 for urgent campaign requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919346148825">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Emergency Hotline
              </Button>
            </a>
            <a href="https://wa.me/919346148825">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Support
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
