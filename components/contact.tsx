"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "residential",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", phone: "", email: "", serviceType: "residential", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section ref={ref} id="contact" className="relative py-20 md:py-32 bg-white/40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(253, 216, 53, 0.1) 0%, transparent 50%), 
                            radial-gradient(circle at 80% 50%, rgba(101, 143, 226, 0.1) 0%, transparent 50%)`,
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Get Your Free{" "}
              <span className="bg-gradient-to-r from-primary-yellow via-accent-gold to-primary-yellow bg-clip-text text-transparent">
                QOUTE TODAY
              </span>
            </h2>

            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Contact us for a free, no-obligation estimate. Our team is ready to help you declutter and transform your
              space.
            </p>

            <div className="space-y-6 mb-8">
              {/* Phone */}
              <motion.a
                href="tel:(240)500-0946"
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary-yellow/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-yellow to-accent-gold flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-primary-yellow/50 transition-all">
                  <span className="text-primary-black font-bold text-lg">📞</span>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Call Us</h3>
                  <p className="text-primary-yellow font-semibold text-lg">(240) 500-0946</p>
                  <p className="text-foreground/60 text-sm">Available 24/7</p>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:quickliftjunkremoval@gmail.com"
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary-yellow/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-yellow to-accent-gold flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-primary-yellow/50 transition-all">
                  <span className="text-primary-black font-bold text-lg">✉️</span>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Email</h3>
                  <p className="text-primary-yellow font-semibold">quickliftjunkremoval@gmail.com</p>
                  <p className="text-foreground/60 text-sm">We'll respond within 2 hours</p>
                </div>
              </motion.a>

              {/* Service Areas */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary-yellow/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-yellow to-accent-gold flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-primary-yellow/50 transition-all">
                  <span className="text-primary-black font-bold text-lg">📍</span>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Service Areas</h3>
                  <p className="text-foreground/70 text-sm">MD, WV, PA & surrounding areas</p>
                  <p className="text-primary-yellow text-sm font-semibold mt-2">Same-day service available</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-primary-yellow/10 border border-primary-yellow/30 hover:border-primary-yellow/80 flex items-center justify-center text-primary-yellow hover:bg-primary-yellow/20 transition-all"
              >
                f
              </motion.a>
              <p className="text-foreground/60 text-sm self-center">Follow us on Facebook</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-gradient-to-br from-white/70 to-blue-50/50 border border-primary-yellow/20 hover:border-primary-yellow/50 transition-colors duration-300"
            >
              <div className="space-y-5">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                >
                  <label className="block text-sm font-semibold text-white mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-primary-yellow/5 border border-primary-yellow/30 focus:border-primary-yellow focus:bg-primary-yellow/10 text-white placeholder-foreground/40 outline-none transition-all duration-300"
                    placeholder="Your name"
                  />
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-semibold text-white mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-primary-yellow/5 border border-primary-yellow/30 focus:border-primary-yellow focus:bg-primary-yellow/10 text-white placeholder-foreground/40 outline-none transition-all duration-300"
                    placeholder="(240) 500-0946"
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <label className="block text-sm font-semibold text-white mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-primary-yellow/5 border border-primary-yellow/30 focus:border-primary-yellow focus:bg-primary-yellow/10 text-white placeholder-foreground/40 outline-none transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </motion.div>

                {/* Service Type */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-semibold text-white mb-2">Service Type</label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-primary-yellow/5 border border-primary-yellow/30 focus:border-primary-yellow focus:bg-primary-yellow/10 text-white outline-none transition-all duration-300"
                  >
                    <option value="residential">Residential Junk Removal</option>
                    <option value="commercial">Commercial Hauling</option>
                    <option value="estate">Estate Liquidation</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <label className="block text-sm font-semibold text-white mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-primary-yellow/5 border border-primary-yellow/30 focus:border-primary-yellow focus:bg-primary-yellow/10 text-white placeholder-foreground/40 outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your junk removal needs..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-primary-yellow to-accent-gold text-primary-black font-bold hover:shadow-2xl hover:shadow-primary-yellow/50 transition-all duration-300 mt-6"
                  >
                    {submitted ? "Submitted! We'll contact you soon." : "Get Free Quote"}
                  </motion.button>
                </motion.div>
              </div>

              <p className="text-foreground/50 text-xs text-center mt-4">
                We'll respond to your inquiry within 2 hours during business hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
