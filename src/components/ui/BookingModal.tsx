"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, CheckCircle } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
  packagePrice: number;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  travelers: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function BookingModal({ isOpen, onClose, packageName, packagePrice }: BookingModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLButtonElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    travelers: "2",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = useCallback((data: FormData): FormErrors => {
    const errs: FormErrors = {};
    if (!data.name || data.name.trim().length < 2) errs.name = "Name must be at least 2 characters";
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "Please enter a valid email";
    if (data.phone && !/^[+]?[\d\s()-]{7,15}$/.test(data.phone)) errs.phone = "Please enter a valid phone number";
    if (!data.message || data.message.trim().length < 20) errs.message = "Message must be at least 20 characters";
    return errs;
  }, []);

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
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
    const validationErrors = validate(formData);
    setTouched({ name: true, email: true, phone: true, message: true });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: "", email: "", phone: "", travelers: "2", message: "" });
      setTouched({});
      setErrors({});
      onClose();
    }, 3000);
  };

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      firstFocusRef.current?.focus();
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener("keydown", trapFocus);
    return () => document.removeEventListener("keydown", trapFocus);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg z-[61] bg-white dark:bg-travel-dark rounded-3xl shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-white/10">
              <div>
                <h2 id="booking-modal-title" className="text-2xl font-display font-bold text-primary dark:text-white">
                  Book Tour
                </h2>
                <p className="text-sm text-muted dark:text-gray-400 mt-1">{packageName}</p>
              </div>
              <button
                ref={firstFocusRef}
                onClick={onClose}
                aria-label="Close booking modal"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              >
                <X size={20} className="text-muted dark:text-gray-400" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-nature-green/20 flex items-center justify-center mb-6">
                    <CheckCircle size={40} className="text-nature-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary dark:text-white mb-2">Booking Request Sent!</h3>
                  <p className="text-muted dark:text-gray-400">We'll get back to you within 24 hours with your booking confirmation.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="booking-name" className="block text-sm font-bold text-muted uppercase tracking-wider mb-2">Full Name *</label>
                    <input
                      id="booking-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onBlur={() => handleBlur("name")}
                      className={`form-input ${touched.name && errors.name ? "error" : ""}`}
                      placeholder="John Doe"
                    />
                    {touched.name && errors.name && <p className="form-error">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="booking-email" className="block text-sm font-bold text-muted uppercase tracking-wider mb-2">Email *</label>
                    <input
                      id="booking-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      className={`form-input ${touched.email && errors.email ? "error" : ""}`}
                      placeholder="john@example.com"
                    />
                    {touched.email && errors.email && <p className="form-error">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="booking-phone" className="block text-sm font-bold text-muted uppercase tracking-wider mb-2">Phone (Optional)</label>
                    <input
                      id="booking-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      onBlur={() => handleBlur("phone")}
                      className={`form-input ${touched.phone && errors.phone ? "error" : ""}`}
                      placeholder="+1 234 567 890"
                    />
                    {touched.phone && errors.phone && <p className="form-error">{errors.phone}</p>}
                  </div>

                  {/* Travelers */}
                  <div>
                    <label htmlFor="booking-travelers" className="block text-sm font-bold text-muted uppercase tracking-wider mb-2">Number of Travelers</label>
                    <select
                      id="booking-travelers"
                      value={formData.travelers}
                      onChange={(e) => handleChange("travelers", e.target.value)}
                      className="form-input"
                    >
                      {[1,2,3,4,5,6,7,8,9,10,11,12].map(n => (
                        <option key={n} value={n}>{n} {n === 1 ? "Person" : "People"}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="booking-message" className="block text-sm font-bold text-muted uppercase tracking-wider mb-2">Message *</label>
                    <textarea
                      id="booking-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onBlur={() => handleBlur("message")}
                      className={`form-input ${touched.message && errors.message ? "error" : ""}`}
                      placeholder="Tell us about your travel preferences and any special requirements..."
                    />
                    {touched.message && errors.message && <p className="form-error">{errors.message}</p>}
                  </div>

                  {/* Price Summary */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-accent/10 border border-accent/20">
                    <span className="font-bold text-primary dark:text-white">Total Price</span>
                    <span className="text-2xl font-extrabold text-accent">
                      ${packagePrice * parseInt(formData.travelers || "1")}
                    </span>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Confirm Booking Request
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
