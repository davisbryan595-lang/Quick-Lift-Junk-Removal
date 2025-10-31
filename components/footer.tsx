"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-primary-black border-t border-primary-yellow/20">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-t from-primary-yellow/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-yellow to-accent-gold flex items-center justify-center">
                <span className="text-primary-black font-bold text-sm">QL</span>
              </div>
              <div>
                <h3 className="font-bold text-white">Quick Lift</h3>
                <p className="text-foreground/60 text-xs">Junk Removal</p>
              </div>
            </div>
            <p className="text-foreground/70 text-sm mb-4">
              Premium junk removal and hauling services in MD, WV, and PA since 2015.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Services", "Gallery", "Pricing"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-foreground/70 hover:text-primary-yellow transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Service Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h4 className="font-bold text-white mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              {["Maryland", "West Virginia", "Pennsylvania"].map((area) => (
                <li
                  key={area}
                  className="text-foreground/70 hover:text-primary-yellow transition-colors cursor-pointer"
                >
                  {area}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <a
              href="tel:(240)500-0946"
              className="text-primary-yellow font-semibold text-sm hover:text-accent-gold transition-colors block mb-2"
            >
              (240) 500-0946
            </a>
            <a
              href="mailto:quickliftjunkremoval@gmail.com"
              className="text-foreground/70 hover:text-primary-yellow transition-colors text-sm block"
            >
              quickliftjunkremoval@gmail.com
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-yellow/20 mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/60 text-sm">© {currentYear} Quick Lift Junk Removal. All rights reserved.</p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full border border-primary-yellow/30 hover:border-primary-yellow hover:bg-primary-yellow/10 transition-all text-primary-yellow"
          >
            ↑
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
