"use client";

import { useState, useMemo, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { tourPackages } from "@/data/travel";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Search, SlidersHorizontal, X } from "lucide-react";

const durationFilters = [
  { label: "All", value: "all" },
  { label: "Under 7 Days", value: "short" },
  { label: "7-10 Days", value: "medium" },
  { label: "10+ Days", value: "long" },
];

const sortOptions = [
  { label: "Price (Low-High)", value: "price-asc" },
  { label: "Price (High-Low)", value: "price-desc" },
  { label: "Duration (Short-Long)", value: "duration-asc" },
  { label: "Name (A-Z)", value: "name-asc" },
];

const parseDuration = (d: string): number => {
  const match = d.match(/(\d+)/);
  return match ? parseInt(match[1]) : 0;
};

const PkgCard = memo(function PkgCard({ pkg, index }: { pkg: typeof tourPackages[0]; index: number }) {
  const isFirst = index === 0;
  const isNew = index === tourPackages.length - 1;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.05 }}
      className="group flex flex-col bg-white dark:bg-travel-dark/80 rounded-3xl card-shadow hover:card-shadow-hover overflow-hidden transition-all duration-500 hover:-translate-y-1 border border-gray-100 dark:border-white/5"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={pkg.image}
          alt={`${pkg.name} tour package featuring ${pkg.highlights[0]}`}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-5 left-5 rounded-full bg-white/90 backdrop-blur-sm px-4 py-1.5 text-xs font-bold text-primary shadow-lg">
          {pkg.duration}
        </div>
        <div className="absolute top-5 right-5 rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-primary shadow-lg">
          ${pkg.price}
        </div>
        {isFirst && <div className="absolute bottom-5 left-5 badge badge-bestseller">Best Seller</div>}
        {isNew && <div className="absolute bottom-5 left-5 badge badge-new">New</div>}
      </div>
      <div className="p-8 flex flex-col items-center text-center flex-1">
        <h3 className="text-card-title font-bold mb-3 text-primary dark:text-white group-hover:text-accent transition-all">
          {pkg.name}
        </h3>
        <p className="text-sm text-muted dark:text-gray-400 mb-6 max-w-md leading-relaxed">
          {pkg.description}
        </p>
        <div className="mb-8 w-full grid grid-cols-1 gap-y-2">
          {pkg.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-center justify-center gap-2 text-xs text-muted dark:text-gray-400 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-nature-green shrink-0"><path d="M20 6 9 17l-5-5" /></svg>
              {highlight}
            </div>
          ))}
        </div>
        <Link
          href={`/tour-packages/${pkg.id}`}
          className="w-full btn-primary py-4 text-base mt-auto"
        >
          Explore Package Details
        </Link>
      </div>
    </motion.div>
  );
});

export default function TourPackagesPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("price-asc");
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(5000);

  const filteredPackages = useMemo(() => {
    let filtered = [...tourPackages];

    // Duration filter
    if (activeFilter !== "all") {
      filtered = filtered.filter((p) => {
        const days = parseDuration(p.duration);
        if (activeFilter === "short") return days < 7;
        if (activeFilter === "medium") return days >= 7 && days <= 10;
        if (activeFilter === "long") return days > 10;
        return true;
      });
    }

    // Price filter
    filtered = filtered.filter((p) => p.price <= maxPrice);

    // Search filter
    if (search.trim()) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-asc": return a.price - b.price;
        case "price-desc": return b.price - a.price;
        case "duration-asc": return parseDuration(a.duration) - parseDuration(b.duration);
        case "name-asc": return a.name.localeCompare(b.name);
        default: return 0;
      }
    });

    return filtered;
  }, [activeFilter, sortBy, search, maxPrice]);

  const clearFilters = useCallback(() => {
    setActiveFilter("all");
    setSortBy("price-asc");
    setSearch("");
    setMaxPrice(5000);
  }, []);

  const hasActiveFilters = activeFilter !== "all" || search.trim() !== "" || maxPrice < 5000 || sortBy !== "price-asc";

  return (
    <main className="pt-24 min-h-screen bg-white dark:bg-travel-dark">
      {/* Page Header */}
      <section className="bg-surface dark:bg-travel-dark/50 py-20 relative noise-texture">
        <div className="container relative z-10 mx-auto px-6 text-center max-w-[1400px]">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-hero font-extrabold mb-4 text-primary dark:text-white"
          >
            Tour <span className="text-gradient">Packages</span>
          </motion.h1>
          <p className="text-body-responsive max-w-2xl mx-auto text-muted dark:text-gray-400 leading-relaxed">
            Choose from our carefully curated selection of tour packages designed to provide the ultimate travel experience.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "Tour Packages" }]} />

      {/* Filters */}
      <section className="py-6 px-6">
        <div className="container mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Filter tabs */}
            <div className="flex items-center gap-2 flex-wrap">
              {durationFilters.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className={`rounded-full px-5 py-2 text-sm font-bold transition-all min-h-[44px] ${
                    activeFilter === tab.value
                      ? "bg-accent text-primary shadow-lg"
                      : "bg-white dark:bg-white/5 text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-sm font-bold text-red-500 hover:text-red-600 min-h-[44px] px-3"
                >
                  <X size={14} /> Clear All
                </button>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Price Range */}
              <div className="flex items-center gap-3 bg-white dark:bg-white/5 rounded-full px-4 py-2 border border-gray-200 dark:border-white/10">
                <label htmlFor="price-range" className="text-xs font-bold text-muted whitespace-nowrap">Max $</label>
                <input
                  id="price-range"
                  type="range"
                  min="500"
                  max="5000"
                  step="100"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                  className="w-24 accent-accent"
                  aria-label="Maximum price range"
                />
                <span className="text-sm font-bold text-accent min-w-[60px]">${maxPrice}</span>
              </div>

              {/* Search */}
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type="text"
                  placeholder="Search packages..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="form-input pl-9 py-2.5 text-sm rounded-full"
                  aria-label="Search packages"
                />
              </div>

              {/* Sort */}
              <label htmlFor="pkg-sort" className="sr-only">Sort packages</label>
              <select
                id="pkg-sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="form-input py-2.5 text-sm rounded-full w-auto"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-8 px-6 pb-24">
        <div className="container mx-auto max-w-[1400px]">
          <AnimatePresence mode="wait">
            {filteredPackages.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-24 text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-6">
                  <SlidersHorizontal size={40} className="text-muted" />
                </div>
                <h3 className="text-2xl font-bold text-primary dark:text-white mb-3">No packages found</h3>
                <p className="text-muted dark:text-gray-400 mb-6 max-w-md">
                  Try adjusting your filters, price range, or search terms.
                </p>
                <button onClick={clearFilters} className="btn-primary">
                  Clear All Filters
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredPackages.map((pkg, index) => (
                  <PkgCard key={pkg.id} pkg={pkg} index={index} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
