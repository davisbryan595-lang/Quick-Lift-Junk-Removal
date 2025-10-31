"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { useInView } from "react-intersection-observer"

export function ContactSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    }, 3000)
  }

  const serviceAreas = [
    "Hagerstown",
    "Frederick",
    "Martinsburg",
    "Chambersburg",
    "Waynesboro",
    "Greencastle",
    "Boonsboro",
    "Shepherdstown",
  ]

  return (
    <section id="contact" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        >
          <h2 className="text-5xl font-black mb-4 text-foreground">Get Your Free Quote</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Fill out the form or call us directly for immediate assistance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-foreground font-semibold mb-2">Full Name</label>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-primary/30 text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Your name"
                whileFocus={{ scale: 1.02 }}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-foreground font-semibold mb-2">Email</label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-primary/30 text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="your@email.com"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <div>
                <label className="block text-foreground font-semibold mb-2">Phone</label>
                <motion.input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-primary/30 text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="(240) 500-0946"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-foreground font-semibold mb-2">Service Type</label>
              <motion.select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-primary/30 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                whileFocus={{ scale: 1.02 }}
                required
              >
                <option value="">Select a service</option>
                <option value="residential">Residential Junk Removal</option>
                <option value="commercial">Commercial Junk Removal</option>
                <option value="construction">Construction Hauling</option>
              </motion.select>
            </div>

            <div>
              <label className="block text-foreground font-semibold mb-2">Message</label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-primary/30 text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Tell us about your junk removal needs..."
                rows={4}
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <motion.button
              type="submit"
              className="w-full py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-background font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {submitted ? "✓ Quote Requested!" : "Get Free Quote"}
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            {/* Direct Contact */}
            <motion.a
              href="tel:(240)500-0946"
              className="block p-6 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/10 border border-primary/30 hover:border-primary/60 transition-all group"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255, 205, 0, 0.3)" }}
            >
              <div className="text-primary text-3xl font-bold mb-2">(240) 500-0946</div>
              <p className="text-foreground/70">Call or text for immediate assistance</p>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:Quickliftjunkremoval@gmail.com"
              className="block p-6 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/10 border border-primary/30 hover:border-primary/60 transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255, 205, 0, 0.3)" }}
            >
              <div className="font-bold text-foreground mb-2">Email</div>
              <p className="text-foreground/70">Quickliftjunkremoval@gmail.com</p>
            </motion.a>

            {/* Service Areas */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border border-primary/30">
              <h4 className="text-lg font-bold text-foreground mb-4">Service Areas</h4>
              <div className="grid grid-cols-2 gap-2">
                {serviceAreas.map((area, i) => (
                  <motion.div
                    key={area}
                    className="text-foreground/80 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    ✓ {area}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social */}
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/10 border border-primary/30 hover:border-primary/60 transition-all text-center"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255, 205, 0, 0.3)" }}
            >
              <div className="font-bold text-foreground mb-2">Follow Us</div>
              <p className="text-foreground/70">Connect with us on Facebook</p>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
