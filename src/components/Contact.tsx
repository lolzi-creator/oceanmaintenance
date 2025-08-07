'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaWhatsapp, FaExclamationTriangle } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-500/30">
                <FaPhone className="w-4 h-4" />
                Kontakt
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                  Kontaktieren
                </span>
                <br />
                Sie uns
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Haben Sie Fragen zu Ihrem Fahrzeug oder benötigen Sie unsere Hilfe? 
                Unser Team ist gerne für Sie da.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Phone */}
                             <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.4, delay: 0.4 }}
                 className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300"
                 whileHover={{ scale: 1.02 }}
               >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <FaPhone className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Telefon</h3>
                    <a href="tel:0313326030" className="text-green-300 font-bold text-xl hover:text-green-200 transition-colors">
                      031 332 60 30
                    </a>
                    <p className="text-gray-400 text-sm">Mo-Fr: 07:00-18:00</p>
                  </div>
                </div>
              </motion.div>

              {/* Address */}
                             <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.4, delay: 0.5 }}
                 className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
               >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Adresse</h3>
                    <p className="text-gray-300">Zikadenweg 42a</p>
                    <p className="text-gray-300">3006 Bern</p>
                  </div>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <FaEnvelope className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">E-Mail</h3>
                    <a href="mailto:info@ocean-maintenance.ch" className="text-purple-300 hover:text-purple-200 transition-colors">
                      info@ocean-maintenance.ch
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* WhatsApp */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-2xl flex items-center justify-center">
                    <FaWhatsapp className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">WhatsApp</h3>
                    <a href="https://wa.me/41313326030" className="text-green-300 hover:text-green-200 transition-colors">
                      +41 31 332 60 30
                    </a>
                    <p className="text-gray-400 text-sm">Schnelle Antwort</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Opening Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <FaClock className="text-yellow-400" />
                Öffnungszeiten
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Montag - Freitag</span>
                  <span className="text-white font-semibold">07:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Samstag</span>
                  <span className="text-white font-semibold">08:00 - 16:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Sonntag</span>
                  <span className="text-red-300">Geschlossen</span>
                </div>
              </div>
            </motion.div>

            {/* Emergency Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30"
            >
              <div className="flex items-center gap-3 mb-3">
                <FaExclamationTriangle className="text-red-400 text-xl" />
                <h3 className="text-white font-bold text-lg">24h Notdienst</h3>
              </div>
              <p className="text-orange-200 mb-3">
                Bei Pannen und Notfällen sind wir rund um die Uhr für Sie erreichbar.
              </p>
              <a 
                href="tel:0313326030"
                className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                <FaPhone size={16} />
                Notfall anrufen
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:sticky lg:top-32 h-fit"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400" />
                So finden Sie uns
              </h3>
              <div className="w-full h-96 md:h-[500px] rounded-xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2723.304400576377!2d7.466595876738089!3d46.95570893269727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e37c66b850905%3A0x7c1f601814d3f61a!2sGarage%20Ocean%20Car%20Gmbh!5e0!3m2!1sde!2sch!4v1751631522450!5m2!1sde!2sch" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              
              <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <p className="text-blue-200 text-sm">
                  <strong>Parkplätze:</strong> Kostenlose Parkplätze direkt vor der Werkstatt verfügbar
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 