"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { tourPackages } from "@/data/travel";
import { CheckCircle, Clock, MapPin, Star, Users, ArrowLeft } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import BookingModal from "@/components/ui/BookingModal";

export default function TourPackageDetailsPage() {
  const { id } = useParams();
  const pkg = tourPackages.find((p) => p.id === id);
  const [bookingOpen, setBookingOpen] = useState(false);

  if (!pkg) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-surface dark:bg-travel-dark px-6 text-center">
        <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-6">
          <MapPin size={40} className="text-muted" />
        </div>
        <h1 className="text-3xl font-extrabold text-primary dark:text-white mb-4">
          Package Not Found
        </h1>
        <p className="text-muted dark:text-gray-400 mb-8 max-w-md">
          The tour package you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link href="/tour-packages" className="btn-primary">
          <ArrowLeft size={16} /> Back to Packages
        </Link>
      </div>
    );
  }

  return (
    <>
      <main className="pt-24 min-h-screen bg-white dark:bg-travel-dark">
        {/* Header / Banner */}
        <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
          <Image
            src={pkg.image}
            alt={`${pkg.name} banner image showing tour destination highlights`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
          <div className="container relative z-10 px-6 text-center text-white max-w-[1400px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-4"
            >
              <span className="rounded-full bg-accent px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary">
                Tour Package
              </span>
              <h1 className="text-hero font-extrabold mb-2">
                {pkg.name}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm md:text-base font-medium">
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-accent" /> {pkg.duration}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-accent" /> World Class Destinations
                </div>
                <div className="flex items-center gap-2">
                  <Star size={18} className="text-accent fill-accent" /> 4.9 Rating
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Breadcrumb & Back Link */}
        <div className="container mx-auto px-6 max-w-[1400px]">
          <Breadcrumb
            items={[
              { label: "Tour Packages", href: "/tour-packages" },
              { label: pkg.name },
            ]}
          />
          <Link
            href="/tour-packages"
            className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-primary dark:hover:text-white transition-colors mb-6 min-h-[44px]"
          >
            <ArrowLeft size={16} />
            Back to Packages
          </Link>
        </div>

        {/* Main Content */}
        <section className="py-8 md:py-16 px-6 bg-surface dark:bg-travel-dark/50">
          <div className="container mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
              {/* Left: Details */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white dark:bg-travel-dark p-8 md:p-10 rounded-3xl card-shadow border border-gray-100 dark:border-white/5 mb-8"
                >
                  <h2 className="text-section font-extrabold mb-6 text-primary dark:text-white section-heading section-heading-left">
                    About This Tour
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed text-muted dark:text-gray-400 mb-10 mt-6">
                    {pkg.description} Experience luxury and adventure combined into one seamless journey. Our expert guides will ensure you see the best of every location without the hassle of planning.
                  </p>

                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary dark:text-white">Tour Highlights</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {pkg.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 p-4 rounded-2xl bg-surface dark:bg-white/5 border border-transparent hover:border-accent/20 transition-all"
                      >
                        <div className="rounded-full bg-nature-green/20 p-2 text-nature-green shrink-0">
                          <CheckCircle size={20} />
                        </div>
                        <span className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary dark:text-white">Photo Gallery</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {pkg.gallery.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative h-40 md:h-48 w-full overflow-hidden rounded-2xl group cursor-pointer card-shadow hover:card-shadow-hover transition-all"
                      >
                        <Image
                          src={pkg.image}
                          alt={`${pkg.name} gallery photo ${idx + 1}`}
                          fill
                          loading="lazy"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right: Booking Sidebar */}
              <aside className="lg:col-span-1 order-1 lg:order-2">
                <div className="lg:sticky lg:top-28">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white dark:bg-travel-dark p-8 rounded-3xl shadow-2xl border border-accent/20"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <div className="text-muted font-bold uppercase tracking-wider text-xs">Tour Price</div>
                      <div className="text-3xl md:text-4xl font-extrabold text-accent">${pkg.price}</div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center justify-between p-3.5 rounded-2xl bg-surface dark:bg-white/5">
                        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-bold text-sm">
                          <Clock size={18} className="text-accent" /> Duration
                        </div>
                        <span className="font-bold text-sm">{pkg.duration}</span>
                      </div>
                      <div className="flex items-center justify-between p-3.5 rounded-2xl bg-surface dark:bg-white/5">
                        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-bold text-sm">
                          <Users size={18} className="text-accent" /> Capacity
                        </div>
                        <span className="font-bold text-sm">12 People Max</span>
                      </div>
                      <div className="flex items-center justify-between p-3.5 rounded-2xl bg-surface dark:bg-white/5">
                        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-bold text-sm">
                          <Star size={18} className="text-accent fill-accent" /> Rating
                        </div>
                        <span className="font-bold text-sm">4.9 / 5.0</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setBookingOpen(true)}
                      className="btn-primary w-full py-4 text-base mb-3"
                    >
                      Book This Tour Now
                    </button>
                    <p className="text-center text-xs text-muted font-medium">
                      No payment required. We&apos;ll confirm availability first.
                    </p>
                  </motion.div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Fixed bottom bar on mobile */}
        <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white dark:bg-travel-dark border-t border-gray-200 dark:border-white/10 p-4 shadow-2xl">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-muted">From</p>
              <p className="text-2xl font-extrabold text-accent">${pkg.price}</p>
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className="btn-primary py-3.5 px-8 text-sm"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Spacer for fixed bottom bar on mobile */}
        <div className="h-20 lg:hidden" />
      </main>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        packageName={pkg.name}
        packagePrice={pkg.price}
      />
    </>
  );
}
