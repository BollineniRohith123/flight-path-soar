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
  Bus, Newspaper, Zap, Target, Brain, Lightbulb, Calculator,
  Calendar, Banknote, Rocket
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
  const [showGoalInfo, setShowGoalInfo] = useState(false);

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
  
  // Get dynamic recommendations based on goal + audience
  const getRecommendations = () => {
    const recommendations: { [key: string]: any } = {
      'awareness-general': {
        title: 'Mass Reach Strategy',
        description: 'Focus on outdoor and transit for maximum visibility across Hyderabad',
        allocation: { aircraft: 25, outdoor: 35, digital: 15, transit: 20, traditional: 5 },
        kpi: 'Target: 10M+ impressions, 5% awareness lift'
      },
      'awareness-premium': {
        title: 'Premium Brand Positioning',
        description: 'Aircraft + digital for high-end visibility in Jubilee Hills, Banjara Hills',
        allocation: { aircraft: 50, outdoor: 15, digital: 25, transit: 5, traditional: 5 },
        kpi: 'Target: High-value impressions, 8% brand recall'
      },
      'awareness-youth': {
        title: 'Digital-First Awareness',
        description: 'Digital + social dominance for tech-savvy Hyderabad youth',
        allocation: { aircraft: 15, outdoor: 15, digital: 45, transit: 15, traditional: 10 },
        kpi: 'Target: 15M+ reach, 12% social engagement'
      },
      'awareness-business': {
        title: 'Corporate Visibility',
        description: 'Airport + HITEC City targeting for B2B decision makers',
        allocation: { aircraft: 45, outdoor: 25, digital: 20, transit: 5, traditional: 5 },
        kpi: 'Target: 500K+ business travelers, 10% brand lift'
      },
      'awareness-regional': {
        title: 'Local Hyderabad Campaign',
        description: 'Outdoor + traditional media in Telugu for regional connect',
        allocation: { aircraft: 10, outdoor: 40, digital: 15, transit: 20, traditional: 15 },
        kpi: 'Target: 8M+ local reach, regional penetration'
      },
      'sales-general': {
        title: 'E-commerce Conversion Drive',
        description: 'Digital + retargeting for direct sales in competitive e-commerce market',
        allocation: { aircraft: 10, outdoor: 15, digital: 50, transit: 15, traditional: 10 },
        kpi: 'Target: 2-3% CTR, ₹200-300 CPA'
      },
      'sales-premium': {
        title: 'Luxury Sales Campaign',
        description: 'Premium touchpoints for high-ticket conversions',
        allocation: { aircraft: 40, outdoor: 10, digital: 40, transit: 5, traditional: 5 },
        kpi: 'Target: 1.5% conversion, high AOV'
      },
      'sales-youth': {
        title: 'Direct-to-Consumer Digital',
        description: 'App installs, quick commerce, startup products',
        allocation: { aircraft: 5, outdoor: 10, digital: 60, transit: 15, traditional: 10 },
        kpi: 'Target: 5K+ conversions, low CPA'
      },
      'sales-business': {
        title: 'B2B Lead Generation',
        description: 'LinkedIn + airport for enterprise deal closures',
        allocation: { aircraft: 45, outdoor: 15, digital: 35, transit: 0, traditional: 5 },
        kpi: 'Target: 200+ qualified leads, ₹5K CPA'
      },
      'sales-regional': {
        title: 'Local Commerce Push',
        description: 'Neighborhood targeting for regional product sales',
        allocation: { aircraft: 5, outdoor: 30, digital: 35, transit: 20, traditional: 10 },
        kpi: 'Target: Local conversions, store visits'
      },
      'engagement-general': {
        title: 'Community Building',
        description: 'Balanced approach for audience nurturing',
        allocation: { aircraft: 20, outdoor: 25, digital: 30, transit: 15, traditional: 10 },
        kpi: 'Target: 25K+ engaged users, 8% interaction'
      },
      'engagement-premium': {
        title: 'Exclusive Experiences',
        description: 'Premium events + experiential for HNI engagement',
        allocation: { aircraft: 35, outdoor: 15, digital: 35, transit: 10, traditional: 5 },
        kpi: 'Target: VIP event RSVPs, exclusivity'
      },
      'engagement-youth': {
        title: 'Social Community Growth',
        description: 'Influencer + UGC campaigns for viral engagement',
        allocation: { aircraft: 10, outdoor: 15, digital: 55, transit: 15, traditional: 5 },
        kpi: 'Target: 50K+ followers, trending content'
      },
      'engagement-business': {
        title: 'Thought Leadership',
        description: 'Webinars, LinkedIn, content marketing for B2B trust',
        allocation: { aircraft: 30, outdoor: 15, digital: 45, transit: 5, traditional: 5 },
        kpi: 'Target: 10K+ whitepaper downloads'
      },
      'engagement-regional': {
        title: 'Cultural Connection',
        description: 'Regional festivals, local influencers, vernacular content',
        allocation: { aircraft: 15, outdoor: 30, digital: 30, transit: 15, traditional: 10 },
        kpi: 'Target: Community participation, cultural events'
      }
    };
    
    const key = `${campaignGoal}-${targetAudience}`;
    return recommendations[key] || recommendations['awareness-general'];
  };

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

  // Realistic ROI calculations based on service mix and campaign factors
  const calculateRealisticROI = () => {
    // Base ROI values for each service type (realistic market data)
    const serviceROIMultipliers: { [key: string]: number } = {
      aircraft: 4.2,      // Premium visibility = higher ROI
      outdoor: 2.8,       // Good reach but lower engagement
      digital: 3.5,       // Trackable and targeted
      transit: 2.5,       // Mass reach but generic
      traditional: 2.2    // Declining effectiveness
    };
    
    // Calculate weighted average ROI based on allocation
    let weightedROI = 0;
    Object.keys(serviceAllocations).forEach(serviceId => {
      const allocation = serviceAllocations[serviceId as keyof typeof serviceAllocations] / 100;
      const multiplier = serviceROIMultipliers[serviceId] || 2.5;
      weightedROI += allocation * multiplier;
    });
    
    // Duration bonus (longer campaigns build awareness)
    const durationMultiplier = 1 + (Math.min(campaignDuration, 12) * 0.05); // +5% per month, cap at 12
    
    // Budget efficiency (economies of scale)
    const budgetEfficiency = totalBudget > 2000000 ? 1.2 : totalBudget > 1000000 ? 1.1 : 1.0;
    
    // Audience targeting bonus (Hyderabad-specific insights)
    const audienceMultipliers: { [key: string]: number } = {
      premium: 1.3,     // High-value customers (HNI in Jubilee Hills, Banjara Hills)
      business: 1.2,    // B2B has better ROI (HITEC City, Financial District)
      youth: 1.15,      // Digital-savvy (Tech hub advantage in Hyderabad)
      general: 1.0,     // Baseline mass market
      regional: 1.1     // Regional Telugu audience (strong local engagement)
    };
    const audienceBonus = audienceMultipliers[targetAudience] || 1.0;
    
    // Goal optimization
    const goalMultipliers: { [key: string]: number } = {
      awareness: 1.0,   // Standard brand building
      sales: 1.15,      // Direct conversion focus
      engagement: 1.05  // Community building
    };
    const goalBonus = goalMultipliers[campaignGoal] || 1.0;
    
    // Calculate final ROI percentage
    const baseROI = (weightedROI - 1) * 100;
    const finalROI = baseROI * durationMultiplier * budgetEfficiency * audienceBonus * goalBonus;
    
    return Math.round(Math.max(80, Math.min(450, finalROI))); // Realistic range: 80-450%
  };
  
  const roi = calculateRealisticROI();
  const brandImpactValue = totalBudget * (1 + roi / 100);
  const estimatedEngagements = campaignMetrics.totalImpressions * 0.0015; // 0.15% engagement
  const awarenessLift = Math.min(45, Math.round((campaignMetrics.totalImpressions / 1000000) * 2));

  // Auto-balancing allocation handler
  const handleAllocationChange = (serviceId: string, value: number) => {
    setServiceAllocations(prev => {
      const currentValue = prev[serviceId as keyof typeof prev];
      const diff = value - currentValue;
      
      // Get other services that can be adjusted
      const otherServices = Object.keys(prev).filter(key => key !== serviceId);
      const otherTotal = otherServices.reduce((sum, key) => sum + prev[key as keyof typeof prev], 0);
      
      // If increasing and would exceed 100%, reduce others proportionally
      if (value > currentValue && (value + otherTotal) > 100) {
        const excessNeeded = (value + otherTotal) - 100;
        const newAllocations: any = { ...prev, [serviceId]: value };
        
        // Reduce others proportionally
        otherServices.forEach(key => {
          const currentOtherValue = prev[key as keyof typeof prev];
          if (otherTotal > 0) {
            const reduction = (currentOtherValue / otherTotal) * excessNeeded;
            newAllocations[key] = Math.max(0, Math.round(currentOtherValue - reduction));
          }
        });
        
        return newAllocations;
      }
      
      return { ...prev, [serviceId]: value };
    });
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
            {/* Unified Card Layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="p-3 sm:p-6 lg:p-8 shadow-premium hover:shadow-gold transition-all duration-500 bg-card/80 backdrop-blur-md border-border/50 hover-lift relative overflow-hidden">
                {/* Floating Recommendation Button - Top Right */}
                <motion.div
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  key={`${campaignGoal}-${targetAudience}`}
                >
                  <Button
                    onClick={() => setServiceAllocations(getRecommendations().allocation)}
                    size="sm"
                    className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all text-xs px-2 py-1 h-8"
                  >
                    <Zap className="w-3 h-3 mr-1" />
                    <span className="hidden sm:inline text-xs">AI Mix</span>
                    <span className="sm:hidden text-xs">AI</span>
                  </Button>
                </motion.div>

                <h3 className="text-base sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 pr-16 sm:pr-24">
                  <div className="p-2 bg-gradient-sky rounded-lg">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <span className="text-base sm:text-2xl">Campaign Builder</span>
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                  {/* LEFT COLUMN: Parameters */}
                  <div className="space-y-4 sm:space-y-6">

                    {/* Campaign Basics */}
                    <motion.div 
                      className="grid grid-cols-1 gap-3 sm:gap-4"
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div>
                        <div className="flex items-center gap-1.5 mb-2">
                          <Target className="w-4 h-4 text-primary" />
                          <Label className="text-sm font-semibold">Campaign Goal</Label>
                        </div>
                        <Select value={campaignGoal} onValueChange={setCampaignGoal}>
                          <SelectTrigger className="border-primary/20 hover:border-primary/40 transition-colors">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="awareness">
                              <div className="flex flex-col">
                                <span className="font-semibold">🎯 Brand Awareness</span>
                                <span className="text-xs text-muted-foreground">Maximize reach & visibility</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="engagement">
                              <div className="flex flex-col">
                                <span className="font-semibold">👥 Lead Generation</span>
                                <span className="text-xs text-muted-foreground">Build audience & nurture</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="sales">
                              <div className="flex flex-col">
                                <span className="font-semibold">💰 Direct Sales</span>
                                <span className="text-xs text-muted-foreground">Drive conversions & revenue</span>
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 mb-2">
                          <Users className="w-4 h-4 text-primary" />
                          <Label className="text-sm font-semibold">Target Audience</Label>
                        </div>
                        <Select value={targetAudience} onValueChange={setTargetAudience}>
                          <SelectTrigger className="border-primary/20 hover:border-primary/40 transition-colors">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">
                              <div className="flex flex-col">
                                <span className="font-semibold">👨‍👩‍👧‍👦 Mass Market (18-55)</span>
                                <span className="text-xs text-muted-foreground">FMCG, E-commerce, broad reach</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="premium">
                              <div className="flex flex-col">
                                <span className="font-semibold">💎 Premium Consumers (HNI)</span>
                                <span className="text-xs text-muted-foreground">Luxury, high-value products</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="youth">
                              <div className="flex flex-col">
                                <span className="font-semibold">📱 Tech-Savvy Youth (18-35)</span>
                                <span className="text-xs text-muted-foreground">Digital natives, startups, apps</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="business">
                              <div className="flex flex-col">
                                <span className="font-semibold">💼 Corporate/B2B Decision Makers</span>
                                <span className="text-xs text-muted-foreground">Enterprise, B2B services</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="regional">
                              <div className="flex flex-col">
                                <span className="font-semibold">🌐 Regional/Telugu Audience</span>
                                <span className="text-xs text-muted-foreground">Hyderabad local, vernacular</span>
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </motion.div>


                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-sm font-semibold">Duration</span>
                        </div>
                        <motion.span 
                          className="text-primary font-black text-lg whitespace-nowrap"
                          key={campaignDuration}
                          initial={{ scale: 1.3, color: "hsl(209 100% 60%)" }}
                          animate={{ scale: 1, color: "hsl(209 100% 40%)" }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {campaignDuration} {campaignDuration === 1 ? 'month' : 'months'}
                        </motion.span>
                      </div>
                      <div className="relative px-2">
                        {/* Simplified Mobile Slider */}
                        <input
                          type="range"
                          min="1"
                          max="12"
                          step="1"
                          value={campaignDuration}
                          onChange={(e) => setCampaignDuration(parseInt(e.target.value))}
                          className="w-full h-12 appearance-none bg-transparent cursor-pointer touch-manipulation"
                          style={{
                            WebkitAppearance: 'none',
                          }}
                        />
                        <div className="absolute top-0 left-2 right-2 h-12 flex items-center pointer-events-none">
                          <div className="w-full h-3 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 rounded-full shadow-inner">
                            <div 
                              className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-200"
                              style={{ width: `${((campaignDuration - 1) / 11) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground px-2">
                        <span>1 month</span>
                        <span>12 months</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1.5">
                          <Banknote className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-sm font-semibold">Budget</span>
                        </div>
                        <motion.span 
                          className="text-primary font-black text-lg whitespace-nowrap"
                          key={totalBudget}
                          initial={{ scale: 1.3, color: "hsl(209 100% 60%)" }}
                          animate={{ scale: 1, color: "hsl(209 100% 40%)" }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          ₹{(totalBudget/100000).toFixed(1)}L
                        </motion.span>
                      </div>
                      <div className="relative px-2">
                        {/* Simplified Mobile Slider */}
                        <input
                          type="range"
                          min="100000"
                          max="5000000"
                          step="50000"
                          value={totalBudget}
                          onChange={(e) => setTotalBudget(parseInt(e.target.value))}
                          className="w-full h-12 appearance-none bg-transparent cursor-pointer touch-manipulation"
                          style={{
                            WebkitAppearance: 'none',
                          }}
                        />
                        <div className="absolute top-0 left-2 right-2 h-12 flex items-center pointer-events-none">
                          <div className="w-full h-3 bg-gradient-to-r from-green-100 via-emerald-200 to-green-300 rounded-full shadow-inner">
                            <div 
                              className="h-full bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 rounded-full transition-all duration-200"
                              style={{ width: `${((totalBudget - 100000) / 4900000) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground px-2">
                        <span>₹1L</span>
                        <span>₹50L</span>
                      </div>
                    </div>

                    {/* Service Allocation */}
                    <div className="p-3 sm:p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
                      <Label className="text-sm sm:text-base font-semibold mb-3 sm:mb-4 flex items-center justify-between gap-2">
                        <span className="flex items-center gap-1 sm:gap-2 text-xs sm:text-base">
                          🎨 <span className="truncate">Media Allocation</span>
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
                              <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-1">
                                  <div className="p-1 sm:p-1.5 bg-primary/10 rounded-md shrink-0">
                                    <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                                  </div>
                                  <span className="text-xs sm:text-sm font-medium truncate">{service.name}</span>
                                  {isOptimal && (
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                                      transition={{ type: "spring", stiffness: 500 }}
                                    >
                                      <Lightbulb className="w-4 h-4 text-amber-500 drop-shadow-lg" />
                                    </motion.div>
                                  )}
                                </div>
                                <motion.span 
                                  className="text-xs sm:text-sm text-primary font-bold shrink-0 whitespace-nowrap"
                                  key={allocation}
                                  initial={{ scale: 1.3 }}
                                  animate={{ scale: 1 }}
                                  transition={{ type: "spring", stiffness: 300 }}
                                >
                                  {allocation}%
                                </motion.span>
                              </div>
                              <div className="relative mt-2">
                                <div className="relative group">
                                  {/* Custom Service Slider */}
                                  <div className="relative h-2.5 w-full bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300 rounded-full overflow-hidden shadow-inner">
                                    <motion.div 
                                      className="absolute h-full bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 rounded-full"
                                      style={{ width: `${allocation}%` }}
                                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                  </div>
                                  <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="5"
                                    value={allocation}
                                    onChange={(e) => handleAllocationChange(service.id, parseInt(e.target.value))}
                                    className="absolute inset-0 w-full opacity-0 cursor-grab active:cursor-grabbing z-20"
                                  />
                                  {/* Draggable Service Icon */}
                                  <div
                                    className="absolute top-1/2 pointer-events-none z-10 transition-opacity duration-200"
                                    style={{
                                      left: `${allocation}%`,
                                      transform: `translate(-50%, -50%) scale(${allocation > 0 ? 1 : 0.7})`,
                                      opacity: allocation > 0 ? 1 : 0.4
                                    }}
                                  >
                                    <motion.div
                                      whileHover={{ scale: 1.1 }}
                                      className="relative"
                                    >
                                      <div className="w-8 h-8 bg-white rounded-lg shadow-xl border-2 border-purple-400 flex items-center justify-center transform transition-transform">
                                        <Icon className="w-4 h-4 text-purple-600" />
                                      </div>
                                    </motion.div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Budget Breakdown Table */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200"
                      >
                        <h4 className="text-xs sm:text-sm font-bold mb-2 sm:mb-3 flex items-center gap-1 sm:gap-2">
                          <IndianRupee className="w-3 h-3 sm:w-4 sm:h-4 text-primary shrink-0" />
                          <span className="truncate">Budget Breakdown</span>
                        </h4>
                        <div className="space-y-1.5 sm:space-y-2">
                          {services.map((service) => {
                            const allocation = serviceAllocations[service.id as keyof typeof serviceAllocations];
                            const amount = (totalBudget * allocation) / 100;
                            const Icon = service.icon;
                            
                            return (
                              <div key={service.id} className="flex items-center justify-between text-[10px] sm:text-xs gap-2">
                                <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-1">
                                  <Icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-muted-foreground shrink-0" />
                                  <span className="text-muted-foreground truncate">{service.name}</span>
                                </div>
                                <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                                  <span className="font-mono text-primary font-semibold">{allocation}%</span>
                                  <span className="text-muted-foreground hidden sm:inline">=</span>
                                  <span className="font-mono font-bold text-foreground whitespace-nowrap">
                                    ₹{(amount/100000).toFixed(1)}L
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                          <div className="pt-2 mt-2 border-t border-blue-300 flex items-center justify-between font-bold">
                            <span className={totalAllocation === 100 ? "text-green-600" : "text-red-600"}>
                              TOTAL: {totalAllocation}%
                            </span>
                            <span className="font-mono text-primary text-sm">
                              ₹{formatIndianNumber(totalBudget)}
                            </span>
                          </div>
                        </div>
                        
                        {/* Visual Progress Ring */}
                        <div className="mt-4 flex items-center gap-3">
                          <div className="relative w-16 h-16">
                            <svg className="w-16 h-16 transform -rotate-90">
                              <circle
                                cx="32"
                                cy="32"
                                r="28"
                                stroke="hsl(var(--muted))"
                                strokeWidth="6"
                                fill="none"
                              />
                              <circle
                                cx="32"
                                cy="32"
                                r="28"
                                stroke={totalAllocation === 100 ? "#10b981" : totalAllocation > 100 ? "#ef4444" : "#f59e0b"}
                                strokeWidth="6"
                                fill="none"
                                strokeDasharray={`${(totalAllocation / 100) * 176} 176`}
                                strokeLinecap="round"
                                className="transition-all duration-300"
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className={`text-sm font-black ${totalAllocation === 100 ? "text-green-600" : totalAllocation > 100 ? "text-red-600" : "text-yellow-600"}`}>
                                {totalAllocation}%
                              </span>
                            </div>
                          </div>
                          <div className="flex-1">
                            {totalAllocation === 100 ? (
                              <p className="text-xs text-green-600 font-semibold">✓ Perfect allocation!</p>
                            ) : totalAllocation > 100 ? (
                              <p className="text-xs text-red-600 font-semibold">⚠️ Over 100% - Auto-reducing others</p>
                            ) : (
                              <p className="text-xs text-yellow-600 font-semibold">⚠️ {100 - totalAllocation}% unused budget</p>
                            )}
                            <p className="text-xs text-muted-foreground mt-1">
                              {totalAllocation === 100 ? "Your budget is optimally distributed" : "Adjust sliders to allocate 100%"}
                            </p>
                          </div>
                        </div>
                      </motion.div>

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
                            <Zap className="w-4 h-4 mr-2 text-blue-400" />
                            Apply AI Optimization
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* RIGHT COLUMN: Impact Analysis */}
                  <div className="lg:col-span-1">
                    <div className="sticky top-4 p-6 sm:p-8 rounded-xl shadow-gold bg-gradient-sky border-0 overflow-hidden relative">
                      {/* Animated background elements */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 rounded-full blur-3xl animate-float" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/30 rounded-full blur-3xl animate-float-delayed" />
                      </div>

                      <div className="relative z-10">
                        <h3 className="text-lg sm:text-2xl font-bold mb-6 text-white flex items-center gap-2">
                          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-md">
                            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
                          </div>
                          <span className="text-base sm:text-2xl">Impact Analysis</span>
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
                            <div className="p-2 bg-blue-500/20 rounded-lg">
                              <Eye className="w-5 h-5 text-blue-400" />
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
                          <span className="inline-block w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
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
                            <div className="p-2 bg-blue-500/20 rounded-lg">
                              <Users className="w-5 h-5 text-blue-400" />
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
                          <span className="inline-block w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
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
                            <div className="p-2 bg-blue-500/20 rounded-lg">
                              <IndianRupee className="w-5 h-5 text-blue-400" />
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
                          <span className="inline-block w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                          Optimized across {campaignDuration} {campaignDuration === 1 ? 'month' : 'months'}
                        </p>
                      </motion.div>

                      {/* ROI - Featured */}
                      <motion.div 
                        className="bg-gradient-to-br from-primary/20 via-blue-500/15 to-primary/10 backdrop-blur-md rounded-xl p-6 border-2 border-primary/40 shadow-premium hover:shadow-gold transition-all"
                        whileHover={{ scale: 1.03, y: -4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="p-2 bg-primary/30 rounded-lg">
                              <TrendingUp className="w-5 h-5 text-blue-400" />
                            </div>
                            <span className="text-white font-semibold">Expected ROI</span>
                          </div>
                          <Badge className="bg-primary text-white shadow-sm">
                            Premium Value
                          </Badge>
                        </div>
                        <motion.div 
                          className="text-6xl font-display font-black text-white mb-1 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] counter-animate"
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
                              className="h-full bg-gradient-to-r from-primary via-blue-400 to-blue-300"
                              initial={{ width: 0 }}
                              animate={{ width: `${Math.min(roi, 100)}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                              key={`roi-bar-${roi}`}
                            />
                          </div>
                          <span className="text-xs text-white/70 font-medium">ROI Score</span>
                        </div>
                        
                        {/* ROI Breakdown Explanation */}
                        <motion.div 
                          className="mt-4 pt-4 border-t border-white/20"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 }}
                        >
                          <p className="text-xs text-white/60 mb-2 flex items-center gap-1">
                            <Brain className="w-3 h-3" />
                            ROI Calculation Factors:
                          </p>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="bg-white/5 rounded px-2 py-1.5">
                              <span className="text-white/50">Service Mix:</span>
                              <span className="text-white/90 font-semibold ml-1">
                                {serviceAllocations.aircraft > 30 ? "Premium" : serviceAllocations.digital > 30 ? "Digital-focused" : "Balanced"}
                              </span>
                            </div>
                            <div className="bg-white/5 rounded px-2 py-1.5">
                              <span className="text-white/50">Duration:</span>
                              <span className="text-white/90 font-semibold ml-1">
                                {campaignDuration >= 6 ? "Long-term" : campaignDuration >= 3 ? "Medium" : "Short"}
                              </span>
                            </div>
                            <div className="bg-white/5 rounded px-2 py-1.5">
                              <span className="text-white/50">Budget Scale:</span>
                              <span className="text-white/90 font-semibold ml-1">
                                {totalBudget > 2000000 ? "Enterprise" : totalBudget > 1000000 ? "Large" : "Standard"}
                              </span>
                            </div>
                            <div className="bg-white/5 rounded px-2 py-1.5">
                              <span className="text-white/50">Audience:</span>
                              <span className="text-white/90 font-semibold ml-1 capitalize">
                                {targetAudience}
                              </span>
                            </div>
                          </div>
                        </motion.div>
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
                          AI-powered calculations based on real market data
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
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
                    our AI recommends focusing on <span className="font-semibold text-primary">{services.find(s => optimalAllocation[s.id])?.name || 'multi-channel'}</span> advertising.
                  </p>
                </motion.div>
                <motion.div 
                  className="p-5 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20 hover:border-primary/40 transition-all hover-lift"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <h4 className="font-bold">Performance Prediction</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    With current settings, expect <span className="font-bold text-primary">{roi.toFixed(0)}% ROI</span> and
                    <span className="font-bold text-primary"> {formatIndianNumber(campaignMetrics.totalImpressions)} impressions</span> over <span className="font-semibold">{campaignDuration} {campaignDuration === 1 ? 'month' : 'months'}</span>.
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
                  <Zap className="w-5 h-5 text-blue-300" />
                  <h4 className="font-bold text-lg">Premium AI Features</h4>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-400 font-bold text-xs">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold">Real-time Optimization</p>
                      <p className="text-white/70 text-xs">Dynamic budget allocation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-400 font-bold text-xs">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold">Market Intelligence</p>
                      <p className="text-white/70 text-xs">Industry benchmarks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-400 font-bold text-xs">✓</span>
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
