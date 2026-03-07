"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/travel";

const FeaturedDestinations = () => {
  return (
    <section className="py-24 bg-surface dark:bg-travel-dark/50 relative noise-texture">
      <div className="container relative z-10 mx-auto px-6 max-w-[1400px]">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-section font-extrabold text-primary dark:text-white mb-2 section-heading"
          >
            Explore Top <span className="text-gradient">Destinations</span>
          </motion.h2>
          <p className="mx-auto mt-6 max-w-2xl text-body-responsive text-muted dark:text-gray-400 leading-relaxed">
            From tropical islands to historic cities, find your perfect getaway among our hand-picked top travel spots around the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[380px] overflow-hidden rounded-3xl card-shadow hover:card-shadow-hover transition-all duration-500 hover:-translate-y-1"
            >
              <Image
                src={dest.image}
                alt={`${dest.name} - ${dest.description}`}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Badge */}
              {dest.rating && dest.rating >= 4.9 && (
                <div className="absolute top-4 left-4 badge badge-popular">
                  Popular
                </div>
              )}

              <div className="absolute bottom-0 left-0 w-full p-6 text-white transform transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2 text-accent">
                  <span className="text-sm font-bold">★ {dest.rating}</span>
                </div>
                <h3 className="text-card-title mb-2 font-bold group-hover:-translate-y-1 transition-transform duration-300">
                  {dest.name}
                </h3>
                <p className="mb-4 line-clamp-2 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {dest.description}
                </p>
                <Link
                  href="/destinations"
                  className="inline-flex items-center gap-2 text-sm font-bold text-accent transition-colors hover:text-white"
                >
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
