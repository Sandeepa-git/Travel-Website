"use client";

import { useState, useMemo, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { destinations } from "@/data/travel";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Search, SlidersHorizontal, X } from "lucide-react";

const filterTabs = [
  { label: "All", value: "all" },
  { label: "Islands", value: "islands" },
  { label: "Mountains", value: "mountains" },
  { label: "Cities", value: "cities" },
];

// Map destinations to categories for filtering
const destCategories: Record<string, string> = {
  "bali-indonesia": "islands",
  "santorini-greece": "islands",
  "kyoto-japan": "cities",
  "swiss-alps": "mountains",
};

const sortOptions = [
  { label: "Name (A-Z)", value: "name-asc" },
  { label: "Name (Z-A)", value: "name-desc" },
  { label: "Rating (High-Low)", value: "rating-desc" },
  { label: "Rating (Low-High)", value: "rating-asc" },
];

const DestCard = memo(function DestCard({ dest, index }: { dest: typeof destinations[0]; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.05 }}
      className="group flex flex-col bg-white dark:bg-travel-dark/80 rounded-3xl card-shadow hover:card-shadow-hover overflow-hidden transition-all duration-500 hover:-translate-y-1 border border-gray-100 dark:border-white/5"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={dest.image}
          alt={`${dest.name} - ${dest.description}`}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {dest.rating && (
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-primary font-bold text-xs shadow-lg">
            ★ {dest.rating}
          </div>
        )}
        {dest.rating && dest.rating >= 4.9 && (
          <div className="absolute top-3 left-3 badge badge-popular">Popular</div>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-card-title font-bold mb-3 text-primary dark:text-white group-hover:text-accent transition-colors">
          {dest.name}
        </h3>
        <p className="text-sm text-muted dark:text-gray-400 mb-4 leading-relaxed flex-1">
          {dest.description}
        </p>
        <button className="text-accent font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all min-h-[44px]">
          View Adventure Details
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
        </button>
      </div>
    </motion.div>
  );
});

export default function DestinationsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("rating-desc");
  const [search, setSearch] = useState("");

  const filteredDestinations = useMemo(() => {
    let filtered = [...destinations];

    // Filter by category
    if (activeFilter !== "all") {
      filtered = filtered.filter((d) => destCategories[d.id] === activeFilter);
    }

    // Filter by search
    if (search.trim()) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (d) => d.name.toLowerCase().includes(q) || d.description.toLowerCase().includes(q)
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name-asc": return a.name.localeCompare(b.name);
        case "name-desc": return b.name.localeCompare(a.name);
        case "rating-desc": return (b.rating || 0) - (a.rating || 0);
        case "rating-asc": return (a.rating || 0) - (b.rating || 0);
        default: return 0;
      }
    });

    return filtered;
  }, [activeFilter, sortBy, search]);

  const clearFilters = useCallback(() => {
    setActiveFilter("all");
    setSortBy("rating-desc");
    setSearch("");
  }, []);

  const hasActiveFilters = activeFilter !== "all" || search.trim() !== "" || sortBy !== "rating-desc";

  return (
    <main className="pt-24 min-h-screen bg-surface dark:bg-travel-dark">
      {/* Hero Header */}
      <section className="relative h-[350px] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt="Panoramic view of beautiful travel destinations"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <div className="container relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-hero font-extrabold mb-4"
          >
            Our <span className="text-gradient">Destinations</span>
          </motion.h1>
          <p className="text-body-responsive max-w-2xl mx-auto text-gray-200 leading-relaxed">
            From the sun-drenched beaches of Bali to the snow-capped Swiss Alps, explore our collection of the world&apos;s most breathtaking places.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "Destinations" }]} />

      {/* Filters & Sort */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Filter tabs */}
            <div className="flex items-center gap-2 flex-wrap">
              {filterTabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className={`relative rounded-full px-5 py-2 text-sm font-bold transition-all min-h-[44px] ${
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

            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative flex-1 md:w-64">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="form-input pl-9 py-2.5 text-sm rounded-full"
                  aria-label="Search destinations"
                />
              </div>
              {/* Sort */}
              <label htmlFor="dest-sort" className="sr-only">Sort destinations</label>
              <select
                id="dest-sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="form-input py-2.5 text-sm rounded-full w-auto pr-8"
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
            {filteredDestinations.length === 0 ? (
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
                <h3 className="text-2xl font-bold text-primary dark:text-white mb-3">No destinations found</h3>
                <p className="text-muted dark:text-gray-400 mb-6 max-w-md">
                  Try adjusting your filters or search terms to find what you&apos;re looking for.
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
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredDestinations.map((dest, index) => (
                  <DestCard key={dest.id} dest={dest} index={index} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white dark:bg-travel-dark mesh-gradient">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-section font-bold mb-4 text-primary dark:text-white section-heading">
            Can&apos;t find your destination?
          </h2>
          <p className="text-body-responsive text-muted dark:text-gray-400 mb-8 mt-6 leading-relaxed">
            We are constantly adding new locations to our portfolio. Let us know where you&apos;d like to go next!
          </p>
          <a href="/contact" className="btn-primary text-base px-10 py-4">
            Request a Destination
          </a>
        </div>
      </section>
    </main>
  );
}
