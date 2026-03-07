"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Home, ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-surface dark:bg-travel-dark relative overflow-hidden px-6">
      {/* Background decorations */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-warm/10 rounded-full blur-[80px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-lg"
      >
        {/* Animated compass icon */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 mx-auto mb-8 bg-accent/20 rounded-full flex items-center justify-center"
        >
          <Compass size={48} className="text-accent" />
        </motion.div>

        <h1 className="text-[8rem] font-extrabold text-primary/10 dark:text-white/10 leading-none mb-[-2rem] font-display">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary dark:text-white mb-4">
          Lost in <span className="text-gradient">Paradise</span>
        </h2>
        <p className="text-base text-muted dark:text-gray-400 mb-10 leading-relaxed">
          It seems like you&apos;ve wandered off the beaten path. The page you&apos;re looking for doesn&apos;t exist or has been moved to a new destination.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary px-8 py-4 text-base">
            <Home size={18} />
            Go Back Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-outline px-8 py-4 text-base"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </motion.div>
    </main>
  );
}
