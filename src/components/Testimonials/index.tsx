"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Adventure Enthusiast",
    text: "My trip to Bali with Wanderlust was absolutely life-changing. Everything from the accommodation to the guided tours was impeccably organized. Highly recommend for anyone looking for authentic experiences!",
    image: "/images/testimonials/author-01.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "Luxury Traveler",
    text: "The Greek Islands tour exceeded all my expectations. The sunset in Oia was magical, and our guide knew all the secret spots away from the crowds. A truly premium experience worth every penny.",
    image: "/images/testimonials/author-02.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Hiroshi Sato",
    role: "Cultural Explorer",
    text: "Exploring Kyoto and the Swiss Alps with Wanderlust gave me a deep appreciation for the beauty of our world. The attention to detail and cultural sensitivity in their packages is outstanding.",
    image: "/images/testimonials/author-03.png",
    rating: 5,
  },
];

const Testimonials = () => {
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
            What Our <span className="text-gradient">Travelers Say</span>
          </motion.h2>
          <p className="mx-auto mt-6 max-w-2xl text-body-responsive text-muted dark:text-gray-400 leading-relaxed">
            Real experiences from travelers who explored the world with us. Their stories are our greatest motivation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col rounded-3xl bg-white dark:bg-travel-dark p-8 card-shadow hover:card-shadow-hover border border-transparent hover:border-accent/20 transition-all duration-300 quote-bg overflow-hidden"
            >
              <div className="mb-5 flex items-center gap-1 text-accent">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                ))}
                <span className="sr-only">{t.rating} out of 5 stars</span>
              </div>
              <p className="mb-8 flex-1 italic text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-4 border-t border-gray-100 dark:border-white/5 pt-6">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-accent/20 shrink-0">
                  <Image
                    src={t.image}
                    alt={`Portrait of ${t.name}, ${t.role}`}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-primary dark:text-white">{t.name}</h4>
                  <p className="text-sm text-muted dark:text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
