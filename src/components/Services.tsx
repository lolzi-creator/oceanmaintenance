'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaWrench, FaShieldAlt, FaTools, FaCar, FaOilCan, FaCog, FaCheckCircle, FaPhoneAlt, FaChevronDown, FaChevronUp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

export default function Services() {
  // State for expanded services (mobile only)
  const [expandedService, setExpandedService] = useState<number | null>(null);
  // State for carousel (desktop only)
  const [currentSlide, setCurrentSlide] = useState(0);

  // WhatsApp function
  const openWhatsApp = (serviceName: string) => {
    const phoneNumber = "+41786788709";
    const message = `Hallo Ocean Maintenance! Ich bin interessiert an Ihrem Service: ${serviceName}. Könnten Sie mir bitte mehr Informationen geben?`;
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Toggle service expansion (mobile only)
  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  // Carousel navigation (desktop only)
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const services = [
    {
      icon: FaWrench,
      title: "Reparaturen",
      description: "Professionelle Fahrzeugreparaturen aller Art",
      features: ["Motor & Getriebe", "Bremsen & Fahrwerk", "Elektrik & Elektronik", "Karosserie"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaShieldAlt,
      title: "Wartung & Service",
      description: "Regelmäßige Wartung für lange Lebensdauer",
      features: ["Ölwechsel", "Inspektion", "Filterwechsel", "Flüssigkeiten"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FaTools,
      title: "Diagnose",
      description: "Modernste Diagnosetechnik für alle Marken",
      features: ["Computerdiagnose", "Fehlerspeicher", "System-Check", "Analyse"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: FaCar,
      title: "TÜV & MFK",
      description: "Vorbereitung und Durchführung",
      features: ["MFK Vorbereitung", "Prüfung", "Nachbesserung", "Abnahme"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FaOilCan,
      title: "Reifenservice",
      description: "Alles rund um Ihre Reifen",
      features: ["Reifenwechsel", "Einlagerung", "Auswuchten", "Reparatur"],
      color: "from-red-500 to-rose-500"
    },
    {
      icon: FaCog,
      title: "Klimaservice",
      description: "Klimaanlagen-Wartung und Reparatur",
      features: ["Wartung", "Desinfektion", "Reparatur", "Befüllung"],
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">

        {/* Mobile: Accordion Layout */}
        <div className="lg:hidden space-y-4 max-w-2xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-green-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Service Header - Always Visible */}
              <motion.div
                onClick={() => toggleService(index)}
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-white/5 transition-colors"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="text-white" size={20} />
                  </div>
                  
                  {/* Title and Description */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Expand/Collapse Icon */}
                <div className="flex-shrink-0 ml-2">
                  {expandedService === index ? (
                    <FaChevronUp className="text-green-400 w-4 h-4" />
                  ) : (
                    <FaChevronDown className="text-gray-400 w-4 h-4" />
                  )}
                </div>
              </motion.div>

              {/* Expandable Content */}
              <motion.div
                initial={false}
                animate={{ 
                  height: expandedService === index ? "auto" : 0,
                  opacity: expandedService === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 pt-0">
                  <div className="border-t border-white/10 pt-4">
                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-base font-semibold text-green-400 mb-2">
                        Was wir bieten:
                      </h4>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-gray-300">
                            <FaCheckCircle className="text-green-400 w-3 h-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* WhatsApp Button */}
                    <motion.button
                      onClick={() => openWhatsApp(service.title)}
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaWhatsapp size={16} />
                      WhatsApp Anfrage
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: Carousel Layout with Peek Effect */}
        <div className="hidden lg:block">
          <div className="relative max-w-7xl mx-auto">
            
            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mb-8">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-green-400 scale-125' 
                      : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Carousel Container with Book-like Animation */}
            <div className="relative overflow-visible">
              <div className="flex items-center gap-3">
                
                {/* Previous Service (Left Peek) - Closer & Bigger */}
                <motion.div 
                  className="w-96 opacity-50 scale-85 transition-all duration-700 cursor-pointer hover:opacity-70 hover:scale-90" 
                  onClick={prevSlide}
                  initial={{ rotateY: -15, x: 20 }}
                  animate={{ rotateY: -10, x: 0 }}
                  whileHover={{ rotateY: -5, x: -10 }}
                  style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 text-center shadow-xl transform-gpu">
                    <div className={`w-18 h-18 bg-gradient-to-br ${services[(currentSlide - 1 + services.length) % services.length].color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                      {React.createElement(services[(currentSlide - 1 + services.length) % services.length].icon, { className: "text-white", size: 28 })}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {services[(currentSlide - 1 + services.length) % services.length].title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {services[(currentSlide - 1 + services.length) % services.length].description}
                    </p>
                  </div>
                </motion.div>

                {/* Current Service (Center) - Book Page Effect */}
                <motion.div
                  key={currentSlide}
                  initial={{ 
                    opacity: 0, 
                    rotateY: -90, 
                    scale: 0.8,
                    z: -100
                  }}
                  animate={{ 
                    opacity: 1, 
                    rotateY: 0, 
                    scale: 1,
                    z: 0
                  }}
                  exit={{ 
                    opacity: 0, 
                    rotateY: 90, 
                    scale: 0.8,
                    z: -100
                  }}
                  transition={{ 
                    duration: 0.8, 
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }}
                  className="flex-1 max-w-4xl mx-auto relative z-10"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-3xl border border-white/30 p-8 text-center shadow-2xl transform-gpu">
                    {/* Icon */}
                    <motion.div 
                      className={`w-24 h-24 bg-gradient-to-br ${services[currentSlide].color} rounded-3xl flex items-center justify-center mb-6 mx-auto`}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {React.createElement(services[currentSlide].icon, { className: "text-white", size: 40 })}
                    </motion.div>

                    {/* Title */}
                    <motion.h3 
                      className="text-4xl font-black text-white mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {services[currentSlide].title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                      className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      {services[currentSlide].description}
                    </motion.p>

                    {/* Features Grid */}
                    <motion.div 
                      className="grid grid-cols-2 gap-4 mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      {services[currentSlide].features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex} 
                          className="flex items-center gap-3 text-gray-300 bg-white/10 rounded-xl p-4 backdrop-blur-sm"
                          initial={{ opacity: 0, x: featureIndex % 2 === 0 ? -20 : 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.7 + featureIndex * 0.1 }}
                        >
                          <FaCheckCircle className="text-green-400 w-5 h-5 flex-shrink-0" />
                          <span className="text-lg font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* WhatsApp Button */}
                    <motion.button
                      onClick={() => openWhatsApp(services[currentSlide].title)}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-xl flex items-center gap-3 hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-2xl mx-auto"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaWhatsapp size={24} />
                      Jetzt WhatsApp Anfrage senden
                    </motion.button>
                  </div>
                </motion.div>

                {/* Next Service (Right Peek) - Closer & Bigger */}
                <motion.div 
                  className="w-96 opacity-50 scale-85 transition-all duration-700 cursor-pointer hover:opacity-70 hover:scale-90" 
                  onClick={nextSlide}
                  initial={{ rotateY: 15, x: -20 }}
                  animate={{ rotateY: 10, x: 0 }}
                  whileHover={{ rotateY: 5, x: 10 }}
                  style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 text-center shadow-xl transform-gpu">
                    <div className={`w-18 h-18 bg-gradient-to-br ${services[(currentSlide + 1) % services.length].color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                      {React.createElement(services[(currentSlide + 1) % services.length].icon, { className: "text-white", size: 28 })}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {services[(currentSlide + 1) % services.length].title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {services[(currentSlide + 1) % services.length].description}
                    </p>
                  </div>
                </motion.div>

              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20 z-10"
              >
                <FaChevronLeft className="text-white w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/20 z-10"
              >
                <FaChevronRight className="text-white w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-green-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Benötigen Sie unsere Hilfe?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Unser erfahrenes Team steht Ihnen gerne zur Verfügung. Kontaktieren Sie uns für eine kostenlose Beratung.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:0313326030"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-lg shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhoneAlt size={20} />
                Jetzt anrufen
              </motion.a>
              
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-green-400/50 text-green-400 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-lg backdrop-blur-sm hover:bg-green-400/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Termin vereinbaren
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 