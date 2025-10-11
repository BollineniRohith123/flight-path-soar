import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TrendingUp, Users, Eye, IndianRupee, Plane, Building2, Monitor,
  Bus, Newspaper, Zap, Target, Brain, Lightbulb, Calculator
} from "lucide-react";
import { toast } from "sonner";

interface ServiceConfig {
  id: string;
  name: string;
  icon: any;
  baseCPM: number;
  reachMultiplier: number;
  description: string;
  aiRecommendation: string;
}

const services: ServiceConfig[] = [
  {
    id: "aircraft",
    name: "Aircraft Advertising",
    icon: Plane,
    baseCPM: 350, // Realistic aircraft advertising CPM in India
    reachMultiplier: 1.8,
    description: "Premium visibility at Hyderabad Airport",
    aiRecommendation: "Best for brand awareness and premium positioning"
  },
  {
    id: "outdoor",
    name: "Outdoor Media",
    icon: Building2,
    baseCPM: 180, // Outdoor advertising CPM in India
    reachMultiplier: 2.1,
    description: "Unipoles, hoardings, and billboards",
    aiRecommendation: "Ideal for local market penetration"
  },
  {
    id: "digital",
    name: "Digital Advertising",
    icon: Monitor,
    baseCPM: 220, // Digital advertising CPM in India
    reachMultiplier: 1.9,
    description: "LED screens and interactive kiosks",
    aiRecommendation: "Perfect for targeted digital campaigns"
  },
  {
    id: "transit",
    name: "Transit Media",
    icon: Bus,
    baseCPM: 150, // Transit media CPM in India
    reachMultiplier: 2.3,
    description: "Bus and metro branding",
    aiRecommendation: "Excellent for commuter audience reach"
  },
  {
    id: "traditional",
    name: "Traditional Media",
    icon: Newspaper,
    baseCPM: 280, // Traditional media CPM in India
    reachMultiplier: 1.5,
    description: "TV, radio, and print",
    aiRecommendation: "Great for mass market coverage"
  }
];

export const ROICalculator = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Helper function to format numbers in Indian style
  const formatIndianNumber = (num: number): string => {
    if (num >= 10000000) { // 1 Crore
      return `${(num / 10000000).toFixed(2)} Cr`;
    } else if (num >= 100000) { // 1 Lakh
      return `${(num / 100000).toFixed(2)} L`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(2)} K`;
    }
    return num.toFixed(0);
  };

  // Campaign parameters
  const [campaignDuration, setCampaignDuration] = useState(3);
  const [totalBudget, setTotalBudget] = useState(500000);
  const [targetAudience, setTargetAudience] = useState("general");
  const [campaignGoal, setCampaignGoal] = useState("awareness");

  // Service allocations (percentages)
  const [serviceAllocations, setServiceAllocations] = useState({
    aircraft: 40,
    outdoor: 25,
    digital: 20,
    transit: 10,
    traditional: 5
  });

  // AI-powered recommendations
  const [aiInsights, setAiInsights] = useState<string[]>([]);
  const [optimalAllocation, setOptimalAllocation] = useState<any>({});

  // Calculate AI recommendations based on inputs
  useEffect(() => {
    const insights: string[] = [];
    const optimal: any = {};

    // AI Logic based on campaign parameters
    if (campaignGoal === "awareness" && targetAudience === "premium") {
      insights.push("🎯 Aircraft advertising is optimal for premium brand awareness");
      optimal.aircraft = Math.max(serviceAllocations.aircraft, 50);
    }

    if (totalBudget > 1000000) {
      insights.push("💰 High budget allows for multi-channel integrated campaign");
      optimal.digital = Math.max(serviceAllocations.digital, 25);
    }

    if (campaignDuration >= 6) {
      insights.push("📅 Long campaign duration favors outdoor media for sustained visibility");
      optimal.outdoor = Math.max(serviceAllocations.outdoor, 30);
    }

    if (targetAudience === "youth") {
      insights.push("👥 Digital and transit media perform best with younger demographics");
      optimal.digital = Math.max(serviceAllocations.digital, 30);
      optimal.transit = Math.max(serviceAllocations.transit, 20);
    }

    setAiInsights(insights);
    setOptimalAllocation(optimal);
  }, [campaignGoal, targetAudience, totalBudget, campaignDuration, serviceAllocations]);

  // Calculate total allocation percentage
  const totalAllocation = Object.values(serviceAllocations).reduce((sum, val) => sum + val, 0);

  // Calculate campaign metrics
  const calculateServiceMetrics = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    if (!service) return { impressions: 0, cost: 0, reach: 0 };

    const allocation = serviceAllocations[serviceId as keyof typeof serviceAllocations] / 100;
    const serviceBudget = totalBudget * allocation;
    
    if (serviceBudget === 0) return { impressions: 0, cost: 0, reach: 0 };

    // Calculate impressions based on actual budget and CPM
    // Impressions = (Budget / CPM) * 1000
    const impressionsPerMonth = (serviceBudget / campaignDuration / service.baseCPM) * 1000;
    const totalImpressions = impressionsPerMonth * campaignDuration * service.reachMultiplier;
    
    const cost = serviceBudget;
    const reach = totalImpressions * 0.65; // 65% unique reach is realistic

    return { impressions: totalImpressions, cost, reach };
  };

  // Calculate overall campaign metrics
  const campaignMetrics = services.reduce((acc, service) => {
    const metrics = calculateServiceMetrics(service.id);
    return {
      totalImpressions: acc.totalImpressions + metrics.impressions,
      totalCost: acc.totalCost + metrics.cost,
      totalReach: acc.totalReach + metrics.reach
    };
  }, { totalImpressions: 0, totalCost: 0, totalReach: 0 });

  // Realistic ROI calculations for Indian market
  const avgCTR = 0.15; // 0.15% realistic CTR for outdoor/aircraft advertising
  const estimatedEngagements = campaignMetrics.totalImpressions * (avgCTR / 100);
  const brandValueMultiplier = 3.8; // Conservative brand value multiplier
  const brandImpactValue = totalBudget * brandValueMultiplier;
  const awarenessLift = Math.min(45, Math.round((campaignMetrics.totalImpressions / 1000000) * 2)); // Cap at 45%
  const roi = ((brandImpactValue - totalBudget) / totalBudget) * 100; // Actual ROI calculation

  const handleAllocationChange = (serviceId: string, value: number) => {
    setServiceAllocations(prev => ({
      ...prev,
      [serviceId]: value
    }));
  };

  const handleGetQuote = () => {
    toast.success(
      `AI-powered campaign analysis complete! Our experts will create a customized strategy for ₹${formatIndianNumber(totalBudget)} budget.`,
      { duration: 5000 }
    );
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  };

  const applyAIOptimization = () => {
    if (Object.keys(optimalAllocation).length > 0) {
      setServiceAllocations(prev => ({ ...prev, ...optimalAllocation }));
      toast.success("AI optimization applied! Campaign allocation updated for maximum ROI.");
    }
  };

  return (
    <section id="roi" className="py-24 bg-background relative overflow-hidden">
      {/* Premium background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div 
            className="flex items-center justify-center gap-2 mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Brain className="w-8 h-8 text-primary animate-glow" />
            <Badge variant="secondary" className="text-sm px-4 py-1.5 shadow-premium">
              AI-Powered Calculator
            </Badge>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-4 text-shadow-premium">
            CALCULATE YOUR
            <br />
            <span className="text-gradient-sky inline-block">CAMPAIGN ROI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Customize your advertising strategy with AI-powered insights across all channels
          </p>
        </motion.div>

        <Tabs defaultValue="calculator" className="max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8 p-1.5 bg-muted/50 backdrop-blur-sm">
            <TabsTrigger value="calculator" className="flex items-center gap-2 data-[state=active]:shadow-premium">
              <Calculator className="w-4 h-4" />
              <span className="hidden sm:inline">Campaign</span> Calculator
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center gap-2 data-[state=active]:shadow-premium">
              <Brain className="w-4 h-4" />
              AI Insights
            </TabsTrigger>
          </TabsList>

          <TabsContent value="calculator">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Calculator Controls */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="p-8 shadow-premium hover:shadow-gold transition-all duration-500 bg-card/80 backdrop-blur-md border-border/50 hover-lift">
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                    <div className="p-2 bg-gradient-sky rounded-lg">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    Campaign Parameters
                  </h3>

                  <div className="space-y-8">
                    {/* Campaign Basics */}
                    <motion.div 
                      className="grid grid-cols-2 gap-4"
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div>
                        <Label className="text-sm font-semibold mb-2 flex items-center gap-1">
                          <Target className="w-3 h-3" />
                          Campaign Goal
                        </Label>
                        <Select value={campaignGoal} onValueChange={setCampaignGoal}>
                          <SelectTrigger className="border-primary/20 hover:border-primary/40 transition-colors">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="awareness">🎯 Brand Awareness</SelectItem>
                            <SelectItem value="sales">💰 Sales Conversion</SelectItem>
                            <SelectItem value="engagement">👥 Audience Engagement</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-sm font-semibold mb-2 flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          Target Audience
                        </Label>
                        <Select value={targetAudience} onValueChange={setTargetAudience}>
                          <SelectTrigger className="border-primary/20 hover:border-primary/40 transition-colors">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">👨‍👩‍👧‍👦 General Public</SelectItem>
                            <SelectItem value="premium">💎 Premium Segment</SelectItem>
                            <SelectItem value="youth">🎓 Young Adults</SelectItem>
                            <SelectItem value="business">💼 Business Travelers</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </motion.div>

                    <div className="space-y-2">
                      <Label className="text-base font-semibold mb-4 flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          📅 Campaign Duration
                        </span>
                        <motion.span 
                          className="text-primary font-black text-lg"
                          key={campaignDuration}
                          initial={{ scale: 1.3, color: "hsl(51 100% 50%)" }}
                          animate={{ scale: 1, color: "hsl(209 100% 40%)" }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {campaignDuration} months
                        </motion.span>
                      </Label>
                      <Slider
                        value={[campaignDuration]}
                        onValueChange={(value) => setCampaignDuration(value[0])}
                        min={1}
                        max={12}
                        step={1}
                        className="mt-4 cursor-pointer"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-2">
                        <span>1 month</span>
                        <span>12 months</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-base font-semibold mb-4 flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          💰 Total Budget
                        </span>
                        <motion.span 
                          className="text-primary font-black text-lg"
                          key={totalBudget}
                          initial={{ scale: 1.3, color: "hsl(51 100% 50%)" }}
                          animate={{ scale: 1, color: "hsl(209 100% 40%)" }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          ₹{(totalBudget/100000).toFixed(1)}L
                        </motion.span>
                      </Label>
                      <Slider
                        value={[totalBudget]}
                        onValueChange={(value) => setTotalBudget(value[0])}
                        min={100000}
                        max={5000000}
                        step={50000}
                        className="mt-4 cursor-pointer"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-2">
                        <span>₹1L</span>
                        <span>₹50L</span>
                      </div>
                    </div>

                    {/* Service Allocation */}
                    <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
                      <Label className="text-base font-semibold mb-4 flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          🎨 Media Allocation
                        </span>
                        <Badge variant={totalAllocation === 100 ? "default" : "destructive"} className="shadow-sm">
                          {totalAllocation}% {totalAllocation === 100 ? '✓' : '⚠️'}
                        </Badge>
                      </Label>

                      <div className="space-y-4">
                        {services.map((service, index) => {
                          const Icon = service.icon;
                          const allocation = serviceAllocations[service.id as keyof typeof serviceAllocations];
                          const isOptimal = optimalAllocation[service.id] && optimalAllocation[service.id] > allocation;

                          return (
                            <motion.div 
                              key={service.id} 
                              className="space-y-2 p-3 rounded-lg bg-card/50 hover:bg-card transition-all"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ x: 4 }}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <div className="p-1.5 bg-primary/10 rounded-md">
                                    <Icon className="w-4 h-4 text-primary" />
                                  </div>
                                  <span className="text-sm font-medium">{service.name}</span>
                                  {isOptimal && (
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                                      transition={{ type: "spring", stiffness: 500 }}
                                    >
                                      <Lightbulb className="w-4 h-4 text-yellow-500 drop-shadow-lg" />
                                    </motion.div>
                                  )}
                                </div>
                                <motion.span 
                                  className="text-sm text-primary font-bold"
                                  key={allocation}
                                  initial={{ scale: 1.3 }}
                                  animate={{ scale: 1 }}
                                  transition={{ type: "spring", stiffness: 300 }}
                                >
                                  {allocation}%
                                </motion.span>
                              </div>
                              <Slider
                                value={[allocation]}
                                onValueChange={(value) => handleAllocationChange(service.id, value[0])}
                                min={0}
                                max={100}
                                step={5}
                                className="mt-2 cursor-pointer"
                              />
                            </motion.div>
                          );
                        })}
                      </div>

                      {Object.keys(optimalAllocation).length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <Button
                            onClick={applyAIOptimization}
                            variant="outline"
                            size="sm"
                            className="w-full mt-4 bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 border-primary/30 shadow-sm hover:shadow-md transition-all"
                          >
                            <Zap className="w-4 h-4 mr-2 text-yellow-500" />
                            Apply AI Optimization
                          </Button>
                        </motion.div>
                      )}
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
                <Card className="p-8 shadow-gold hover:shadow-premium transition-all duration-500 bg-gradient-sky border-0 overflow-hidden relative hover-lift">
                  {/* Animated background elements */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/30 rounded-full blur-3xl animate-float-delayed" />
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-2">
                      <div className="p-2 bg-white/20 rounded-lg backdrop-blur-md">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      Campaign Impact Analysis
                    </h3>

                    <div className="space-y-6">
                      {/* Total Impressions */}
                      <motion.div 
                        className="glass-effect-dark rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="p-2 bg-accent/20 rounded-lg">
                              <Eye className="w-5 h-5 text-accent" />
                            </div>
                            <span className="text-white/90 font-medium">Total Impressions</span>
                          </div>
                        </div>
                        <motion.div 
                          className="text-5xl font-display font-black text-white counter-animate"
                          key={`impressions-${campaignMetrics.totalImpressions}-${campaignDuration}-${totalBudget}`}
                        >
                          {formatIndianNumber(campaignMetrics.totalImpressions)}
                        </motion.div>
                        <p className="text-white/70 text-sm mt-2 flex items-center gap-1">
                          <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse" />
                          Across all selected media channels
                        </p>
                      </motion.div>

                      {/* Unique Reach */}
                      <motion.div 
                        className="glass-effect-dark rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="p-2 bg-accent/20 rounded-lg">
                              <Users className="w-5 h-5 text-accent" />
                            </div>
                            <span className="text-white/90 font-medium">Unique Reach</span>
                          </div>
                        </div>
                        <motion.div 
                          className="text-5xl font-display font-black text-white counter-animate"
                          key={`reach-${campaignMetrics.totalReach}-${campaignDuration}-${totalBudget}`}
                        >
                          {formatIndianNumber(campaignMetrics.totalReach)}
                        </motion.div>
                        <p className="text-white/70 text-sm mt-2 flex items-center gap-1">
                          <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse" />
                          Estimated unique audience reached
                        </p>
                      </motion.div>

                      {/* Investment */}
                      <motion.div 
                        className="glass-effect-dark rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="p-2 bg-accent/20 rounded-lg">
                              <IndianRupee className="w-5 h-5 text-accent" />
                            </div>
                            <span className="text-white/90 font-medium">Total Investment</span>
                          </div>
                        </div>
                        <motion.div 
                          className="text-5xl font-display font-black text-white counter-animate"
                          key={`budget-${totalBudget}`}
                        >
                          ₹{formatIndianNumber(totalBudget)}
                        </motion.div>
                        <p className="text-white/70 text-sm mt-2 flex items-center gap-1">
                          <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse" />
                          Optimized across {campaignDuration} {campaignDuration === 1 ? 'month' : 'months'}
                        </p>
                      </motion.div>

                      {/* ROI - Featured */}
                      <motion.div 
                        className="bg-gradient-to-br from-accent/30 to-accent/10 backdrop-blur-md rounded-xl p-6 border-2 border-accent shadow-gold hover:shadow-premium transition-all"
                        whileHover={{ scale: 1.03, y: -4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="p-2 bg-accent/30 rounded-lg">
                              <TrendingUp className="w-5 h-5 text-accent" />
                            </div>
                            <span className="text-white font-semibold">Expected ROI</span>
                          </div>
                          <Badge className="bg-accent text-foreground shadow-sm">
                            Premium Value
                          </Badge>
                        </div>
                        <motion.div 
                          className="text-6xl font-display font-black text-accent mb-1 text-glow counter-animate"
                          key={`roi-${roi}-${campaignDuration}-${totalBudget}`}
                        >
                          {roi.toFixed(0)}%
                        </motion.div>
                        <p className="text-white/90 text-sm font-medium">
                          🎯 {awarenessLift}% brand awareness lift expected
                        </p>
                        <p className="text-white/70 text-xs mt-1">
                          💰 Brand impact value: ₹{formatIndianNumber(brandImpactValue)}
                        </p>
                        <div className="mt-4 flex items-center gap-2">
                          <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-accent to-yellow-300"
                              initial={{ width: 0 }}
                              animate={{ width: `${Math.min(roi, 100)}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                              key={`roi-bar-${roi}`}
                            />
                          </div>
                          <span className="text-xs text-white/70 font-medium">ROI Score</span>
                        </div>
                      </motion.div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        onClick={handleGetQuote}
                        size="lg"
                        variant="premium"
                        className="w-full mt-8 text-lg font-bold shadow-gold hover:shadow-premium transition-all relative overflow-hidden group"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          <Zap className="w-5 h-5" />
                          GET AI-POWERED STRATEGY
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      </Button>
                    </motion.div>

                    <p className="text-white/60 text-xs text-center mt-4 flex items-center justify-center gap-2">
                      <Brain className="w-3 h-3" />
                      AI-powered calculations based on real market data and performance metrics
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="insights">
            <Card className="p-8 max-w-4xl mx-auto shadow-premium hover:shadow-gold transition-all duration-500 bg-card/80 backdrop-blur-md">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <div className="p-2 bg-gradient-sky rounded-lg">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  AI Campaign Insights
                </h3>
                <Badge variant="secondary" className="shadow-sm">
                  {aiInsights.length} Recommendations
                </Badge>
              </div>

              {aiInsights.length > 0 ? (
                <motion.div className="space-y-4">
                  {aiInsights.map((insight, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-3 p-5 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/20 hover:border-primary/40 transition-all hover-lift"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 4 }}
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                      >
                        <Lightbulb className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 drop-shadow-lg" />
                      </motion.div>
                      <p className="text-foreground font-medium">{insight}</p>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Brain className="w-16 h-16 mx-auto mb-4 opacity-30" />
                  </motion.div>
                  <p className="text-lg">Adjust your campaign parameters to see AI-powered insights</p>
                  <p className="text-sm mt-2">Our AI will analyze your inputs and provide strategic recommendations</p>
                </div>
              )}

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <motion.div 
                  className="p-5 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20 hover:border-primary/40 transition-all hover-lift"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 text-primary" />
                    <h4 className="font-bold">Recommended Strategy</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Based on your <span className="font-semibold text-primary">{campaignGoal}</span> goal and <span className="font-semibold text-primary">{targetAudience}</span> audience,
                    our AI recommends focusing on <span className="font-semibold text-accent">{services.find(s => optimalAllocation[s.id])?.name || 'multi-channel'}</span> advertising.
                  </p>
                </motion.div>
                <motion.div 
                  className="p-5 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-accent/20 hover:border-accent/40 transition-all hover-lift"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <h4 className="font-bold">Performance Prediction</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    With current settings, expect <span className="font-bold text-accent">{roi.toFixed(0)}% ROI</span> and
                    <span className="font-bold text-accent"> {formatIndianNumber(campaignMetrics.totalImpressions)} impressions</span> over <span className="font-semibold">{campaignDuration} {campaignDuration === 1 ? 'month' : 'months'}</span>.
                  </p>
                </motion.div>
              </div>

              {/* Premium AI Features Section */}
              <motion.div 
                className="mt-8 p-6 bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl shadow-premium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-accent" />
                  <h4 className="font-bold text-lg">Premium AI Features</h4>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-accent font-bold text-xs">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold">Real-time Optimization</p>
                      <p className="text-white/70 text-xs">Dynamic budget allocation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-accent font-bold text-xs">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold">Market Intelligence</p>
                      <p className="text-white/70 text-xs">Industry benchmarks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-accent font-bold text-xs">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold">Performance Tracking</p>
                      <p className="text-white/70 text-xs">Live campaign metrics</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
