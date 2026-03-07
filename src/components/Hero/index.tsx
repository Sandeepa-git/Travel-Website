"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[750px] w-full flex flex-col overflow-hidden">
      {/* Background Image with next/image */}
      <Image
        src="/images/hero-senja.jpg"
        alt="Solitary traveler in red jacket reflecting in a crystal-clear pool on a rocky coast with jagged mountains"
        fill
        priority
        className="object-cover scale-105"
        sizes="100vw"
        quality={100}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

      {/* Content Area - Flex-1 to push stats down */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto text-center text-white max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-6 inline-block rounded-full bg-accent/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur-md border border-accent/20 shadow-lg">
              Your Ultimate Travel Partner
            </span>
            <h1 className="text-hero mb-6 font-semibold leading-[1.1] tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              Explore the World <br className="hidden sm:block" />
              <span className="text-gradient filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] font-bold">One Adventure</span> at a Time
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-body-responsive text-white/90 sm:text-xl font-light leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] tracking-wide">
              Discover breathtaking destinations, unique experiences, and unforgettable memories. Your journey of a thousand miles begins with a single step.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/destinations" className="btn-primary text-base px-10 py-4">
                Start Exploring
              </Link>
              <Link href="/tour-packages" className="btn-secondary text-base px-10 py-4">
                View Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Stats Area - Relative positioning to stay below buttons */}
      <div className="relative z-10 w-full px-4 pb-10 md:pb-16">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid grid-cols-2 gap-3 rounded-3xl bg-white/10 p-5 backdrop-blur-xl md:grid-cols-4 md:p-8 border border-white/10"
          >
            {[
              { value: "500+", label: "Destinations" },
              { value: "12k+", label: "Happy Travelers" },
              { value: "4.9", label: "User Rating" },
              { value: "15+", label: "Years Experience" },
            ].map((stat, i) => (
              <div key={stat.label} className={`text-center ${i < 3 ? "md:border-r md:border-white/20" : ""}`}>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{stat.value}</h3>
                <p className="text-xs md:text-sm text-gray-300 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
