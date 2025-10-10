import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Eye, IndianRupee } from "lucide-react";
import { toast } from "sonner";

export const ROICalculator = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [campaignDuration, setCampaignDuration] = useState(3); // months
  const [flightsPerDay, setFlightsPerDay] = useState(15);
  const [avgPassengers, setAvgPassengers] = useState(150);

  // Calculations
  const dailyImpressions = flightsPerDay * avgPassengers * 2; // 2x for ground visibility
  const monthlyImpressions = dailyImpressions * 30;
  const totalImpressions = monthlyImpressions * campaignDuration;
  const costPerThousand = 45; // ₹45 per thousand impressions
  const totalCost = (totalImpressions / 1000) * costPerThousand;
  const traditionalCPM = 250; // Traditional advertising CPM in India
  const savings = ((totalImpressions / 1000) * traditionalCPM) - totalCost;
  const roi = ((savings / totalCost) * 100).toFixed(0);

  const handleGetQuote = () => {
    toast.success(
      `Amazing ROI potential! Our team will contact you with a detailed proposal for ${campaignDuration} months campaign.`,
      { duration: 5000 }
    );
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">
            CALCULATE YOUR
            <br />
            <span className="text-gradient-sky">CAMPAIGN ROI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See exactly how aircraft advertising in Hyderabad delivers unmatched value
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Calculator Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 shadow-premium bg-card border-border/50">
              <h3 className="text-2xl font-bold mb-8">Campaign Parameters</h3>
              
              <div className="space-y-8">
                <div>
                  <Label className="text-base font-semibold mb-4 flex items-center justify-between">
                    <span>Campaign Duration</span>
                    <span className="text-primary">{campaignDuration} months</span>
                  </Label>
                  <Slider
                    value={[campaignDuration]}
                    onValueChange={(value) => setCampaignDuration(value[0])}
                    min={1}
                    max={12}
                    step={1}
                    className="mt-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>1 month</span>
                    <span>12 months</span>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold mb-4 flex items-center justify-between">
                    <span>Daily Flights (Hyderabad)</span>
                    <span className="text-primary">{flightsPerDay} flights</span>
                  </Label>
                  <Slider
                    value={[flightsPerDay]}
                    onValueChange={(value) => setFlightsPerDay(value[0])}
                    min={5}
                    max={30}
                    step={1}
                    className="mt-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>5 flights</span>
                    <span>30 flights</span>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold mb-4 flex items-center justify-between">
                    <span>Average Passengers per Flight</span>
                    <span className="text-primary">{avgPassengers} passengers</span>
                  </Label>
                  <Slider
                    value={[avgPassengers]}
                    onValueChange={(value) => setAvgPassengers(value[0])}
                    min={100}
                    max={200}
                    step={10}
                    className="mt-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>100 passengers</span>
                    <span>200 passengers</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="p-8 shadow-premium bg-gradient-sky border-0">
              <h3 className="text-2xl font-bold mb-8 text-white">Your Campaign Impact</h3>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Eye className="w-5 h-5 text-accent" />
                      <span className="text-white/90 font-medium">Total Impressions</span>
                    </div>
                  </div>
                  <div className="text-4xl font-display font-black text-white">
                    {(totalImpressions / 1000000).toFixed(2)}M+
                  </div>
                  <p className="text-white/70 text-sm mt-1">
                    {dailyImpressions.toLocaleString()} impressions daily
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <IndianRupee className="w-5 h-5 text-accent" />
                      <span className="text-white/90 font-medium">Investment Required</span>
                    </div>
                  </div>
                  <div className="text-4xl font-display font-black text-white">
                    ₹{(totalCost / 100000).toFixed(2)}L
                  </div>
                  <p className="text-white/70 text-sm mt-1">
                    Just ₹{costPerThousand} per 1,000 impressions
                  </p>
                </div>

                <div className="bg-accent/20 backdrop-blur-md rounded-lg p-6 border-2 border-accent">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-accent" />
                      <span className="text-white font-medium">ROI vs Traditional Media</span>
                    </div>
                  </div>
                  <div className="text-5xl font-display font-black text-accent mb-1">
                    {roi}%
                  </div>
                  <p className="text-white/90 text-sm">
                    Save ₹{(savings / 100000).toFixed(2)}L compared to traditional advertising
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-accent" />
                    <span className="text-white/90 font-medium">Audience Reach</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {(monthlyImpressions / 1000).toLocaleString()}K+
                      </div>
                      <div className="text-xs text-white/70">Monthly Reach</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {flightsPerDay}
                      </div>
                      <div className="text-xs text-white/70">Daily Flights</div>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleGetQuote}
                size="lg"
                variant="premium"
                className="w-full mt-8 text-lg font-bold"
              >
                GET DETAILED PROPOSAL
              </Button>

              <p className="text-white/60 text-xs text-center mt-4">
                * Calculations based on actual Hyderabad airport traffic data
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
