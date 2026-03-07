"use client";

import Link from "next/link";
import { Compass, Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin, Send } from "lucide-react";

const footerLinks = [
  {
    title: "The Brand",
    links: [
      { name: "Home", href: "/" },
      { name: "Destinations", href: "/destinations" },
      { name: "Tour Packages", href: "/tour-packages" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Experiences",
    links: [
      { name: "Destinations", href: "/destinations" },
      { name: "Tour Packages", href: "/tour-packages" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact Us", href: "/contact" },
      { name: "FAQs", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary pt-24 pb-12 text-white footer-gold-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-warm/5 rounded-full blur-[80px]" />

      <div className="container relative z-10 mx-auto px-6 max-w-[1400px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 max-w-sm">
            <Link href="/" className="mb-6 flex items-center gap-2.5" aria-label="Wanderlust Home">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary shadow-lg">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tight text-white">
                Wanderlust
              </span>
            </Link>
            <p className="mb-8 text-base leading-relaxed text-surface/60 font-medium">
              Curating high-end adventurous escapes for the discerning traveler. We believe travel should be immersive, transformative, and deeply personal.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={`Follow us on ${label}`}
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center transition-all hover:bg-accent hover:border-accent hover:text-primary min-w-[44px] min-h-[44px]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1 hidden lg:block" />

          {/* Links Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm font-medium transition-colors text-surface/50 hover:text-accent min-h-[44px] inline-flex items-center"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Connect With Us
            </h4>
            <ul className="mb-8 flex flex-col gap-4 text-surface/50">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent shrink-0 mt-0.5" size={18} />
                <span className="text-sm">123 Avenue Montaigne, Paris, France</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent shrink-0" size={18} />
                <span className="text-sm">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent shrink-0" size={18} />
                <span className="text-sm">concierge@wanderlust.com</span>
              </li>
            </ul>

            <div className="relative group overflow-hidden rounded-full luxury-shadow">
              <label htmlFor="newsletter-email" className="sr-only">Newsletter email</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Newsletter Signup"
                className="w-full bg-surface/10 border border-white/10 rounded-full py-3.5 px-5 text-sm font-medium focus:ring-1 focus:ring-accent transition-all outline-none pr-16"
              />
              <button
                aria-label="Subscribe to newsletter"
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-accent text-primary rounded-full px-4 flex items-center justify-center transition-all hover:bg-primary hover:text-accent min-w-[44px]"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row text-xs font-bold uppercase tracking-widest text-surface/30">
          <p>© 2026 Wanderlust. All Rights Reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="/contact" className="transition-colors hover:text-accent min-h-[44px] inline-flex items-center">Privacy</Link>
            <Link href="/contact" className="transition-colors hover:text-accent min-h-[44px] inline-flex items-center">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
