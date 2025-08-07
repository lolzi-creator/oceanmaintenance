'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaWrench } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <FaWrench className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Ocean Maintenance</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Ihre vertrauensvolle Autowerkstatt in Bern. Professioneller Service für alle Fahrzeugmarken.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'Über uns', href: '/about' },
                { name: 'Kontakt', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaPhone className="text-green-400" size={16} />
                <a href="tel:0313326030" className="text-gray-400 hover:text-white transition-colors">
                  031 332 60 30
                </a>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1" size={16} />
                <div className="text-gray-400">
                  <p>Zikadenweg 42a</p>
                  <p>3006 Bern</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-purple-400" size={16} />
                <a href="mailto:info@ocean-maintenance.ch" className="text-gray-400 hover:text-white transition-colors">
                  info@ocean-maintenance.ch
                </a>
              </div>
            </div>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Öffnungszeiten</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FaClock className="text-yellow-400" size={14} />
                <div className="text-gray-400">
                  <p className="font-medium">Mo - Fr:</p>
                  <p>07:00 - 18:00</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-yellow-400" size={14} />
                <div className="text-gray-400">
                  <p className="font-medium">Samstag:</p>
                  <p>08:00 - 16:00</p>
                </div>
              </div>
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3 mt-4">
                <p className="text-red-300 text-sm font-medium">24h Notdienst verfügbar</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500">
            © 2024 Ocean Maintenance. Alle Rechte vorbehalten.
          </p>
        </motion.div>
      </div>
    </footer>
  );
} 