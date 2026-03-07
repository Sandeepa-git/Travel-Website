"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-24 bg-white dark:bg-travel-dark overflow-hidden relative mesh-gradient">
      <div className="absolute right-[-10%] top-[-10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
      <div className="absolute left-[-5%] bottom-[-10%] w-[300px] h-[300px] bg-nature-green/10 rounded-full blur-[80px]" />

      <div className="container mx-auto px-6 relative z-10 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[32px] bg-gradient-to-br from-primary via-primary to-primary/90 p-10 text-center text-white shadow-2xl md:p-16 lg:p-20 md:text-left md:flex md:items-center md:justify-between gap-12 relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[60px]" />
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-warm/10 rounded-full blur-[40px]" />

          <div className="max-w-2xl relative z-10">
            <h2 className="text-section mb-6 font-extrabold leading-tight text-white">
              Ready to Discover Your Next Destination?
            </h2>
            <p className="mb-8 text-base md:text-lg text-white/80 leading-relaxed">
              Join thousands of happy travelers and let us help you create memories that last forever. Explore our most popular adventure and cultural tours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start relative z-10 shrink-0">
            <Link href="/tour-packages" className="btn-primary text-base px-8 py-4">
              Start Planning
            </Link>
            <Link href="/contact" className="btn-secondary text-base px-8 py-4">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
