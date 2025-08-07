'use client';

import { motion } from 'framer-motion';
import { FaUsers, FaAward, FaClock, FaWrench, FaMapMarkerAlt, FaPhone, FaStar } from 'react-icons/fa';

export default function About() {
  const stats = [
    { icon: FaClock, value: "21", label: "Jahr Erfahrung" },
    { icon: FaUsers, value: "1000+", label: "Zufriedene Kunden" },
    { icon: FaWrench, value: "5000+", label: "Reparaturen" },
    { icon: FaAward, value: "100%", label: "Qualität" }
  ];

  const values = [
    {
      icon: FaWrench,
      title: "Expertise",
      description: "Über 21 Jahr Erfahrung in der Fahrzeugwartung und -reparatur"
    },
    {
      icon: FaUsers,
      title: "Vertrauen",
      description: "Transparente Kommunikation und faire Preise für alle Kunden"
    },
    {
      icon: FaAward,
      title: "Qualität",
      description: "Höchste Standards bei allen Arbeiten und Originalteile"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Company Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Seit über 21 Jahren sind wir Ihr kompetenter Partner für alle Belange rund um Ihr Fahrzeug. 
                Unser erfahrenes Team aus qualifizierten Mechanikern steht für Qualität, Zuverlässigkeit und fairen Service.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Von der regelmäßigen Wartung bis zur komplexen Reparatur - 
                wir behandeln jedes Fahrzeug mit der Sorgfalt, die es verdient.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                   className="text-center p-4 bg-white/5 rounded-xl border border-white/10"
                 >
                  <stat.icon className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                                 <motion.div
                   key={index}
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                   className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
                 >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Google Map */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400" />
                Unser Standort
              </h3>
              <div className="w-full h-64 rounded-xl overflow-hidden">
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
            </div>

            {/* Contact Details */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Kontakt & Öffnungszeiten</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-blue-400" size={16} />
                  <div className="text-gray-300">
                    <p>Zikadenweg 42a</p>
                    <p>3006 Bern, Schweiz</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <FaPhone className="text-green-400" size={16} />
                  <a href="tel:0313326030" className="text-gray-300 hover:text-white transition-colors">
                    031 332 60 30
                  </a>
                </div>
                
                <div className="border-t border-white/10 pt-4 mt-4">
                  <h4 className="text-white font-semibold mb-3">Öffnungszeiten:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Montag - Freitag:</span>
                      <span className="text-white">07:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Samstag:</span>
                      <span className="text-white">08:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Sonntag:</span>
                      <span className="text-red-300">Geschlossen</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 mt-4">
                  <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-400" size={16} />
                    <span className="text-green-300 font-semibold">4.8/5 Google Bewertung</span>
                  </div>
                  <p className="text-green-200 text-sm mt-1">Über 50 zufriedene Kunden</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 