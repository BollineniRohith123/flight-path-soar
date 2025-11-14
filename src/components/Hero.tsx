import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import heroImage from "@/assets/indian-aircraft-hero-1.jpg";

export const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Set playback rate for smoother experience
      video.playbackRate = 1.0;
      
      // Check if user prefers reduced motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        // Don't auto-play if user prefers reduced motion
        return;
      }
      
      // Attempt to play the video
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Auto-play prevented:", error);
          // Auto-play was prevented, video will show fallback image
        });
      }
    }

    // Optimize performance on mobile
    const handleVisibilityChange = () => {
      if (video && document.hidden) {
        video.pause();
      } else if (video && !document.hidden && !videoError) {
        video.play().catch(() => {});
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [videoError]);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
    console.error("Video failed to load, using fallback image");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Fallback Image */}
      <div className="absolute inset-0 z-0">
        {/* Fallback Background Image */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            opacity: videoError || !isVideoLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Loading Indicator */}
        {!isVideoLoaded && !videoError && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-20">
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="w-20 h-20 border-4 border-white/20 border-t-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-accent rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        )}
        
        {/* Background Video (no borders) */}
        {!videoError && (
          <video
            ref={videoRef}
            // Force cover so the video always fills the hero area (will crop instead of showing borders)
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={heroImage}
            onLoadedData={handleVideoLoaded}
            onError={handleVideoError}
            style={{
              opacity: isVideoLoaded ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out'
            }}
          >
            <source src="/Airport_Branding_Video_Generation%20(online-video-cutter.com).mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        
        {/* Gradient Overlay - Enhanced for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />
        
        {/* Premium animated particles/bokeh effect */}
        <div className="absolute inset-0 z-10 opacity-30">
          <motion.div
            className="absolute top-20 left-[10%] w-2 h-2 bg-accent rounded-full blur-sm"
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-[15%] w-3 h-3 bg-primary-light rounded-full blur-sm"
            animate={{
              y: [0, -120, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute bottom-40 left-[20%] w-2 h-2 bg-white rounded-full blur-sm"
            animate={{
              y: [0, -80, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          />
        </div>
        
        {/* Additional vignette effect for cinematic look */}
        <div className="absolute inset-0 bg-radial-gradient z-10" style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
        }} />
      </div>

      {/* Animated Clouds - Enhanced Parallax */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-32 bg-white/5 rounded-full blur-3xl z-10"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-96 h-48 bg-white/5 rounded-full blur-3xl z-10"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black text-white mb-4 sm:mb-6 tracking-tight text-shadow-premium px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              WHERE BRANDS
            </motion.span>
            <br />
            <motion.span 
              className="text-gradient-sky inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary-light via-white to-accent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
            >
              TAKE FLIGHT
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto font-light px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            India's First AI-Driven Traditional Marketing Company
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              className="min-h-[48px] min-w-[160px] w-full sm:w-auto bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-foreground font-semibold text-lg shadow-premium"
            >
              Get Started
            </Button>
            <Button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              variant="outline"
              className="min-h-[48px] min-w-[160px] w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 backdrop-blur-sm text-lg"
            >
              Explore Services
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Enhanced */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-20 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToServices}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-white/50 text-xs uppercase tracking-wider">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
