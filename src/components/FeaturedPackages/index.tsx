"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { tourPackages } from "@/data/travel";

const PackageCard = memo(function PackageCard({ pkg, index }: { pkg: typeof tourPackages[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 dark:border-white/5 bg-white dark:bg-travel-dark card-shadow hover:card-shadow-hover transition-all duration-500 hover:-translate-y-1"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={pkg.image}
          alt={`${pkg.name} tour package featuring ${pkg.highlights[0]}`}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute right-4 top-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-sm font-bold text-primary shadow-lg">
          {pkg.duration}
        </div>
        {index === 0 && (
          <div className="absolute left-4 top-4 badge badge-bestseller">Best Seller</div>
        )}
        {index === 2 && (
          <div className="absolute left-4 top-4 badge badge-new">New</div>
        )}
      </div>
      <div className="flex-1 p-6 md:p-8">
        <div className="mb-4 flex items-start justify-between gap-2">
          <h3 className="text-card-title font-bold text-primary dark:text-white group-hover:text-accent transition-colors leading-tight">
            {pkg.name}
          </h3>
          <div className="text-right shrink-0">
            <p className="text-xs text-muted line-through">${Math.round(pkg.price * 1.2)}</p>
            <p className="text-xl font-extrabold text-accent">${pkg.price}</p>
          </div>
        </div>
        <p className="mb-5 line-clamp-2 text-sm text-muted dark:text-gray-400 leading-relaxed">
          {pkg.description}
        </p>
        <div className="mb-6 grid grid-cols-2 gap-y-2">
          {pkg.highlights.slice(0, 4).map((highlight, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-muted dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-nature-green shrink-0"><path d="M20 6 9 17l-5-5" /></svg>
              <span className="truncate">{highlight}</span>
            </div>
          ))}
        </div>
        <Link
          href={`/tour-packages/${pkg.id}`}
          className="block rounded-full bg-gray-100 dark:bg-white/5 py-3.5 text-center text-sm font-bold text-primary dark:text-white transition-all group-hover:bg-accent group-hover:text-primary min-h-[44px]"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
});

const FeaturedPackages = () => {
  return (
    <section className="py-24 bg-white dark:bg-travel-dark relative mesh-gradient">
      <div className="container relative z-10 mx-auto px-6 max-w-[1400px]">
        <div className="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row md:gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-section font-extrabold text-primary dark:text-white mb-2 section-heading section-heading-left"
            >
              Popular <span className="text-gradient">Tour Packages</span>
            </motion.h2>
            <p className="mt-6 text-body-responsive text-muted dark:text-gray-400 leading-relaxed">
              Browse our most popular curated travel packages designed to give you the best experiences at incredible prices.
            </p>
          </div>
          <Link href="/tour-packages" className="btn-primary shrink-0">
            View All Packages
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tourPackages.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
