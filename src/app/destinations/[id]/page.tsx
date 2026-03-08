"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { destinations } from "@/data/travel";
import { CheckCircle, MapPin, Star, ArrowLeft, Camera, Compass } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";

export default function DestinationDetailsPage() {
  const { id } = useParams();
  const dest = destinations.find((d) => d.id === id);

  if (!dest) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-surface dark:bg-travel-dark px-6 text-center">
        <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-6">
          <MapPin size={40} className="text-muted" />
        </div>
        <h1 className="text-3xl font-extrabold text-primary dark:text-white mb-4">
          Destination Not Found
        </h1>
        <p className="text-muted dark:text-gray-400 mb-8 max-w-md">
          The destination you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/destinations" className="btn-primary">
          <ArrowLeft size={16} /> Back to Destinations
        </Link>
      </div>
    );
  }

  return (
    <main className="pt-24 min-h-screen bg-white dark:bg-travel-dark">
      {/* Header / Banner */}
      <section className="relative h-[400px] md:h-[550px] w-full flex items-center justify-center overflow-hidden">
        <Image
          src={dest.image}
          alt={`${dest.name} banner image`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
        <div className="container relative z-10 px-6 text-center text-white max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="rounded-full bg-accent/90 backdrop-blur-sm px-6 py-2 text-xs font-bold uppercase tracking-widest text-primary shadow-xl">
              Adventure Destination
            </span>
            <h1 className="text-hero font-extrabold mb-2 text-shadow-lg">
              {dest.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-lg font-semibold">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <MapPin size={22} className="text-accent" /> Premium Location
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <Star size={22} className="text-accent fill-accent" /> {dest.rating || 4.8} Rating
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb & Back Link */}
      <div className="container mx-auto px-6 max-w-[1400px] -mt-8 relative z-20">
        <div className="bg-white/80 dark:bg-travel-dark/80 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/20 dark:border-white/5 mb-8">
          <Breadcrumb
            items={[
              { label: "Destinations", href: "/destinations" },
              { label: dest.name },
            ]}
          />
        </div>
        <Link
          href="/destinations"
          className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-primary dark:hover:text-white transition-all mb-6 group"
        >
          <div className="p-2 rounded-full bg-accent/10 group-hover:bg-accent transition-colors">
            <ArrowLeft size={16} className="group-hover:text-white" />
          </div>
          Back to Destinations
        </Link>
      </div>

      {/* Main Content */}
      <section className="py-8 md:py-16 px-6">
        <div className="container mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Main Details */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose prose-lg dark:prose-invert max-w-none"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-1 w-20 bg-accent rounded-full" />
                  <span className="uppercase tracking-[0.3em] text-accent font-bold text-sm">Experience the magic</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black mb-8 text-primary dark:text-white leading-tight">
                  Discover the Beauty of {dest.name}
                </h2>
                
                <div className="text-xl md:text-2xl leading-relaxed text-muted dark:text-gray-300 mb-12 font-medium">
                  {dest.longDescription || dest.description}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  <div className="bg-surface dark:bg-white/5 p-8 rounded-[40px] border border-gray-100 dark:border-white/5">
                    <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-6">
                      <Compass size={30} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Adventure Highlights</h3>
                    <p className="text-muted dark:text-gray-400 mb-6">Explore the unique experiences that make this destination truly special and unforgettable.</p>
                    <ul className="space-y-4">
                      {dest.highlights?.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-3 font-semibold text-gray-700 dark:text-gray-300">
                          <CheckCircle size={18} className="text-nature-green" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-primary dark:bg-accent/10 p-8 rounded-[40px] text-white overflow-hidden relative group">
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-6">
                        <Camera size={30} />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Unforgettable Views</h3>
                      <p className="text-blue-100/80 dark:text-gray-300 mb-8 leading-relaxed">
                        Every corner of {dest.name} offers a perfect photo opportunity. Capture memories that will last a lifetime in this stunning paradise.
                      </p>
                      <button className="bg-accent text-primary px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                        Explore Gallery
                      </button>
                    </div>
                    <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
                  </div>
                </div>

                <h3 className="text-3xl font-black mb-10 text-primary dark:text-white flex items-center gap-4">
                  <span className="w-2 h-10 bg-accent rounded-full" />
                  Visual Journey
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                  {dest.gallery?.map((img, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -10 }}
                      className={`relative overflow-hidden rounded-[32px] shadow-2xl glass-morphism ${
                        idx === 0 ? "md:col-span-2 md:h-[450px]" : "h-[215px] md:h-auto"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${dest.name} gallery image ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white dark:bg-travel-dark p-10 rounded-[48px] shadow-2xl border border-gray-100 dark:border-white/5 relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <h3 className="text-3xl font-black mb-6 leading-tight">Ready for your next adventure?</h3>
                    <p className="text-muted dark:text-gray-400 mb-10 leading-relaxed italic border-l-4 border-accent pl-4">
                      "Collect moments, not things. Your journey to {dest.name} starts with a single click."
                    </p>
                    
                    <div className="space-y-6 mb-10">
                      <div className="flex items-center gap-4 p-4 rounded-3xl bg-surface dark:bg-white/5">
                        <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                          <CheckCircle size={24} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-muted uppercase tracking-wider">Status</p>
                          <p className="font-bold text-primary dark:text-white">Open for Travel</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 rounded-3xl bg-surface dark:bg-white/5">
                        <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                          <MapPin size={24} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-muted uppercase tracking-wider">Category</p>
                          <p className="font-bold text-primary dark:text-white">Top Rated Destination</p>
                        </div>
                      </div>
                    </div>

                    <Link href="/contact" className="btn-primary w-full py-5 text-lg rounded-full shadow-accent/20 shadow-xl inline-flex items-center justify-center gap-2">
                      Plan My Trip <Compass size={20} />
                    </Link>
                  </div>
                  
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl" />
                </motion.div>
                
                <div className="mt-8 p-8 rounded-3xl bg-nature-green/10 border border-nature-green/20">
                  <p className="text-nature-green font-bold text-sm flex items-center gap-2">
                    <CheckCircle size={16} /> Sustainable Tourism Certified
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
