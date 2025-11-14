import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FixedCTABar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show when scrolling down and past 300px, hide when scrolling up
      if (currentScrollY > 300 && currentScrollY > lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleGetQuote = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919346148825?text=Hi! I'm interested in aircraft advertising with Skylar.",
      "_blank"
    );
  };

  const handleCallClick = () => {
    window.location.href = "tel:+919346148825";
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            opacity: { duration: 0.2 }
          }}
          className="fixed bottom-0 left-0 right-0 z-50 shadow-2xl"
        >
          <div className="bg-primary text-white">
            <div className="container mx-auto px-4 py-3 md:py-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                {/* Left side - CTA Text */}
                <div className="flex items-center gap-3 text-center md:text-left">
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 10, 0],
                      scale: [1, 1.1, 1.1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    <Plane className="w-6 h-6 md:w-8 md:h-8 text-accent hidden md:block" />
                  </motion.div>
                  <div>
                    <h3 className="text-base md:text-xl font-bold leading-tight">
                      Ready to Elevate Your Brand?
                    </h3>
                    <p className="text-xs md:text-base text-white/90">
                      Get your free impact projection and see how your brand can soar
                    </p>
                  </div>
                </div>

                {/* Right side - Action Buttons */}
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <Button
                    onClick={handleGetQuote}
                    size="lg"
                    className="flex-1 md:flex-none bg-accent hover:bg-accent/90 text-foreground font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-9 md:h-11"
                  >
                    Get Free Quote
                  </Button>
                  
                  <Button
                    onClick={handleWhatsApp}
                    size="lg"
                    variant="outline"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300 h-9 md:h-11"
                  >
                    <MessageCircle className="w-5 h-5 md:mr-2" />
                    <span className="hidden md:inline">WhatsApp</span>
                  </Button>
                  
                  <Button
                    onClick={handleCallClick}
                    size="lg"
                    variant="outline"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300 h-9 md:h-11"
                  >
                    <Phone className="w-5 h-5 md:mr-2" />
                    <span className="hidden md:inline">Call Now</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Progress indicator dots (optional subtle animation) */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1 pb-1">
              <motion.div
                className="w-6 h-0.5 bg-accent rounded-full scale-x-75"
                animate={{ 
                  scaleX: [0, 1, 1, 0],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
 };
