"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if we've already shown the loader in this session
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("hasLoaded", "true");
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-primary overflow-hidden"
        >
          {/* Animated Mesh Glow Background */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#C9A84C_0%,transparent_70%)] opacity-20 pointer-events-none"
          />

          <div className="relative flex flex-col items-center">
            {/* The 3 Dots - Using Website Themes (Gold Accent) */}
            <div className="flex items-center justify-center gap-5 mb-10">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0.3 }}
                  animate={{
                    scale: [0.8, 1.3, 0.8],
                    opacity: [0.3, 1, 0.3],
                    y: [0, -10, 0],
                    boxShadow: [
                      "0 0 0px rgba(201, 168, 76, 0)",
                      "0 0 25px rgba(201, 168, 76, 0.6)",
                      "0 0 0px rgba(201, 168, 76, 0)"
                    ]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                  className="w-4 h-4 rounded-full bg-accent"
                />
              ))}
            </div>

            {/* Branded Text using Website Fonts */}
            <div className="text-center">
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-white text-3xl md:text-5xl font-display font-bold tracking-tight mb-2"
                >
                  SETTING UP <span className="text-accent italic font-normal">Wanderlust</span>
                </motion.h2>
              </div>
              
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 0.7 }}
                  transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-white text-[10px] md:text-xs font-body font-semibold uppercase tracking-[0.5em]"
                >
                  Curating your premium adventure
                </motion.p>
              </div>
            </div>

            {/* Artistic Underline Progress */}
            <motion.div 
               initial={{ scaleX: 0, opacity: 0 }}
               animate={{ scaleX: 1, opacity: 1 }}
               transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
               className="w-32 h-[1px] bg-white/10 mt-8 relative"
            >
              <motion.div 
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-accent shadow-[0_0_10px_#C9A84C]"
              />
            </motion.div>
          </div>

          {/* Luxury Sliding Curtain Transition Out */}
          <motion.div
            initial={{ height: 0 }}
            exit={{ height: "100vh" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute bottom-0 left-0 w-full bg-accent/10 backdrop-blur-md z-[1001]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
