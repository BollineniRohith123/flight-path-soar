import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Send } from "lucide-react";

export const ContactForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    campaignType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you within 24 hours to discuss your campaign.", {
      duration: 5000,
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      campaignType: "",
      budget: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-sky relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-foreground mb-4">
              LAUNCH YOUR
              <br />
              <span className="text-gradient-gold">CAMPAIGN</span>
            </h2>
            <p className="text-lg sm:text-xl text-foreground/80">
              Ready for takeoff? Get your sky-high quote in minutes
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl shadow-premium p-8 space-y-6 border border-border/50"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="John Smith"
                  className="border-border/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="john@company.com"
                  className="border-border/50 focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                required
                placeholder="Your Company"
                className="border-border/50 focus:border-primary"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="campaignType">Campaign Type</Label>
                <Select
                  value={formData.campaignType}
                  onValueChange={(value) => setFormData({ ...formData, campaignType: value })}
                  required
                >
                  <SelectTrigger className="border-border/50">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="exterior">Exterior Advertising</SelectItem>
                    <SelectItem value="interior">Interior Branding</SelectItem>
                    <SelectItem value="full">Full Campaign</SelectItem>
                    <SelectItem value="consultation">Consultation First</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Estimated Budget</Label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) => setFormData({ ...formData, budget: value })}
                  required
                >
                  <SelectTrigger className="border-border/50">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2.5l-5l">₹2.5L - ₹5L</SelectItem>
                    <SelectItem value="5l-10l">₹5L - ₹10L</SelectItem>
                    <SelectItem value="10l-25l">₹10L - ₹25L</SelectItem>
                    <SelectItem value="25l+">₹25L+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Campaign Goals & Details</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                placeholder="Tell us about your brand, target audience, and campaign objectives..."
                rows={5}
                className="border-border/50 focus:border-primary resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              variant="premium"
              className="w-full text-lg font-semibold group"
            >
              CLEARED FOR TAKEOFF
              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              By submitting, you agree to receive communications from Skylar. 
              We respect your privacy and never share your information.
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};
