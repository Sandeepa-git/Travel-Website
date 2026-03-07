"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Facebook, Twitter, Instagram, Youtube, Loader2, CheckCircle } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validate = useCallback((data: FormData): FormErrors => {
    const errs: FormErrors = {};
    if (!data.name || data.name.trim().length < 2) errs.name = "Name must be at least 2 characters";
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "Please enter a valid email address";
    if (data.phone && !/^[+]?[\d\s()-]{7,15}$/.test(data.phone)) errs.phone = "Please enter a valid phone number";
    if (!data.subject || data.subject.trim().length < 2) errs.subject = "Subject is required";
    if (!data.message || data.message.trim().length < 20) errs.message = "Message must be at least 20 characters";
    return errs;
  }, []);

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(formData));
  };

  const handleChange = (field: keyof FormData, value: string) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    if (touched[field]) {
      setErrors(validate(newData));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(false);
    const validationErrors = validate(formData);
    setTouched({ name: true, email: true, phone: true, subject: true, message: true });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTouched({});
      setErrors({});
    }, 5000);
  };

  return (
    <main className="pt-24 min-h-screen bg-white dark:bg-travel-dark">
      {/* Header Section */}
      <section className="bg-surface dark:bg-travel-dark/50 py-20 relative overflow-hidden noise-texture">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
        <div className="container relative z-10 mx-auto px-6 text-center max-w-[1400px]">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-hero font-extrabold mb-4 text-primary dark:text-white"
          >
            Get in <span className="text-gradient">Touch</span>
          </motion.h1>
          <p className="text-body-responsive max-w-2xl mx-auto text-muted dark:text-gray-400 leading-relaxed">
            Have questions about our tours or need help planning your trip? We&apos;re here to help you create your perfect adventure.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "Contact" }]} />

      {/* Grid Content */}
      <section className="py-8 md:py-12 px-6 pb-24">
        <div className="container mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-surface dark:bg-travel-dark/50 p-8 md:p-10 rounded-3xl card-shadow border border-gray-100 dark:border-white/5"
            >
              <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-primary dark:text-white section-heading section-heading-left">
                Contact Information
              </h2>

              <div className="space-y-6 mb-12 mt-8">
                {[
                  {
                    icon: MapPin,
                    title: "Our Office",
                    lines: ["123 Adventure Way, Wanderlust Plaza, CA 90210, USA"],
                  },
                  {
                    icon: Send,
                    title: "Email Address",
                    lines: ["hello@wanderlust.com", "support@wanderlust.com"],
                  },
                  {
                    icon: Phone,
                    title: "Phone Number",
                    lines: ["+1 (234) 567-890", "+1 (234) 567-891"],
                  },
                ].map(({ icon: Icon, title, lines }) => (
                  <div key={title} className="flex items-start gap-4 group">
                    <div className="rounded-full bg-accent/10 p-3 text-accent transition-all group-hover:bg-accent group-hover:text-primary group-hover:shadow-lg group-hover:shadow-accent/20 shrink-0">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-primary dark:text-white mb-1">{title}</h4>
                      {lines.map((line) => (
                        <p key={line} className="text-sm text-muted dark:text-gray-400">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-bold text-primary dark:text-white mb-4">Stay Connected</h4>
                <div className="flex items-center gap-3">
                  {[
                    { icon: Facebook, label: "Facebook" },
                    { icon: Twitter, label: "Twitter" },
                    { icon: Instagram, label: "Instagram" },
                    { icon: Youtube, label: "YouTube" },
                  ].map(({ icon: Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={`Follow us on ${label}`}
                      className="rounded-full bg-white dark:bg-white/10 p-3 text-primary dark:text-white card-shadow hover:bg-accent hover:text-primary transition-all transform hover:-translate-y-1 min-w-[44px] min-h-[44px] flex items-center justify-center"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-travel-dark border border-gray-100 dark:border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl"
            >
              <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-primary dark:text-white section-heading section-heading-left">
                Send Us a Message
              </h2>

              {/* Submit Error Banner */}
              {submitError && (
                <div className="mb-6 p-4 rounded-2xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-sm font-medium flex items-center gap-2">
                  <span>⚠️</span> Something went wrong. Please try again.
                </div>
              )}

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-nature-green/20 flex items-center justify-center mb-6">
                    <CheckCircle size={40} className="text-nature-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-muted dark:text-gray-400 max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5 mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-muted uppercase tracking-wider mb-2 ml-1">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        onBlur={() => handleBlur("name")}
                        className={`form-input ${touched.name && errors.name ? "error" : ""}`}
                        placeholder="John Doe"
                      />
                      {touched.name && errors.name && <p className="form-error">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-muted uppercase tracking-wider mb-2 ml-1">
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        className={`form-input ${touched.email && errors.email ? "error" : ""}`}
                        placeholder="john@example.com"
                      />
                      {touched.email && errors.email && <p className="form-error">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-muted uppercase tracking-wider mb-2 ml-1">
                        Phone (Optional)
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        onBlur={() => handleBlur("phone")}
                        className={`form-input ${touched.phone && errors.phone ? "error" : ""}`}
                        placeholder="+1 234 567 890"
                      />
                      {touched.phone && errors.phone && <p className="form-error">{errors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-bold text-muted uppercase tracking-wider mb-2 ml-1">
                        Subject *
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        onBlur={() => handleBlur("subject")}
                        className={`form-input ${touched.subject && errors.subject ? "error" : ""}`}
                        placeholder="Planning a trip"
                      />
                      {touched.subject && errors.subject && <p className="form-error">{errors.subject}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-muted uppercase tracking-wider mb-2 ml-1">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onBlur={() => handleBlur("message")}
                      className={`form-input ${touched.message && errors.message ? "error" : ""}`}
                      placeholder="Tell us about your travel plans and how we can help (min 20 characters)..."
                    />
                    {touched.message && errors.message && <p className="form-error">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Your Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-[1400px]">
          <div className="h-[350px] md:h-[450px] w-full rounded-3xl bg-gray-100 dark:bg-white/5 overflow-hidden card-shadow border border-gray-100 dark:border-white/10 relative">
            <div className="absolute inset-0 grayscale opacity-50 dark:invert transition-all hover:grayscale-0 hover:opacity-100 cursor-grab active:cursor-grabbing">
              <iframe
                title="Office location on Google Maps"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                src="https://maps.google.com/maps?q=London&t=&z=13&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
