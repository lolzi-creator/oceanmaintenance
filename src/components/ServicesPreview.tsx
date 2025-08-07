'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaWrench, FaShieldAlt, FaTools, FaArrowRight, FaWhatsapp } from 'react-icons/fa';

export default function ServicesPreview() {
  // WhatsApp function
  const openWhatsApp = (serviceName: string) => {
    const phoneNumber = "+41786788709";
    const message = `Hallo Ocean Maintenance! Ich bin interessiert an Ihrem Service: ${serviceName}. Könnten Sie mir bitte mehr Informationen geben?`;
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const topServices = [
    {
      icon: FaWrench,
      title: "Reparaturen",
      description: "Professionelle Fahrzeugreparaturen aller Art",
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: FaShieldAlt,
      title: "Wartung & Service",
      description: "Regelmäßige Wartung für lange Lebensdauer",
      color: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: FaTools,
      title: "Diagnose",
      description: "Modernste Diagnosetechnik für alle Marken",
      color: "from-yellow-500 to-orange-500",
      image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-black via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 75% 25%, #10b981 0%, transparent 50%), 
                           radial-gradient(circle at 25% 75%, #059669 0%, transparent 50%)`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-green-500/30 backdrop-blur-sm"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaWrench className="w-5 h-5" />
            </motion.div>
            Unsere Services
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Was wir
            </span>
            <br />
            <span className="text-white">für Sie tun</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Professioneller Fahrzeugservice von <br />
            <span className="text-emerald-400 font-semibold">erfahrenen Experten in Bern</span>
          </motion.p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {topServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4 + index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="group relative"
              whileHover={{ y: -10, scale: 1.03 }}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 shadow-2xl transition-all duration-500 group-hover:border-white/40">
                
                                                  {/* Card Header with Service Image - Mobile Compact */}
                 <div className="relative h-20 md:h-28 lg:h-40 overflow-hidden">
                   {/* Background Service Image */}
                   <motion.img 
                     src={service.image} 
                     alt={service.title}
                     className="w-full h-full object-cover"
                     whileHover={{ scale: 1.05 }}
                     transition={{ duration: 0.6 }}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                                     {/* Floating Icon - Mobile Compact */}
                   <motion.div 
                     className={`absolute top-2 left-2 md:top-3 md:left-3 lg:top-4 lg:left-4 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${service.color} rounded-xl md:rounded-xl lg:rounded-2xl flex items-center justify-center shadow-2xl`}
                     initial={{ scale: 0, rotate: -180 }}
                     animate={{ scale: 1, rotate: 0 }}
                     transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                     whileHover={{ rotate: 360, scale: 1.1 }}
                   >
                     <service.icon className="text-white" size={18} />
                   </motion.div>

                                     {/* Service Badge - Mobile Compact */}
                   <motion.div 
                     className="absolute top-2 right-2 md:top-3 md:right-3 lg:top-4 lg:right-4 px-2 py-1 md:px-3 md:py-2 rounded-full text-xs md:text-sm font-bold bg-green-500/90 text-white shadow-green-500/50 shadow-lg backdrop-blur-sm"
                     initial={{ scale: 0 }}
                     animate={{ scale: 1 }}
                     transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                   >
                     Premium
                   </motion.div>
                </div>

                                 {/* Enhanced Content - Mobile Compact */}
                 <div className="p-3 md:p-4 lg:p-6 xl:p-8">
                   <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                   >
                     <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-black text-white mb-2 md:mb-3">
                       {service.title}
                     </h3>
                     
                     <p className="text-gray-300 mb-3 md:mb-4 lg:mb-6 leading-relaxed text-sm md:text-base lg:text-lg">
                       {service.description}
                     </p>

                                         {/* Enhanced WhatsApp Button - Mobile Compact */}
                     <motion.button
                       onClick={() => openWhatsApp(service.title)}
                       className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 rounded-lg md:rounded-xl font-bold text-sm md:text-base lg:text-lg flex items-center justify-center gap-2 md:gap-3 hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-xl group-hover:shadow-2xl"
                       whileHover={{ scale: 1.02 }}
                       whileTap={{ scale: 0.98 }}
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                     >
                       <FaWhatsapp size={16} />
                       <span className="hidden sm:inline">Jetzt anfragen</span>
                       <span className="sm:hidden">Anfragen</span>
                       <motion.div
                         animate={{ scale: [1, 1.2, 1] }}
                         transition={{ duration: 2, repeat: Infinity }}
                       >
                         💬
                       </motion.div>
                     </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced See All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-16"
        >
          <Link href="/services">
            <motion.div
              className="inline-flex items-center gap-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-2xl group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              
              <span className="relative z-10 flex items-center gap-4">
                Alle Services entdecken
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowRight size={20} />
                </motion.div>
              </span>
            </motion.div>
          </Link>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl">🔧</div>
            <div>
              <h4 className="text-xl font-bold text-white mb-1">21 Jahr Erfahrung</h4>
              <p className="text-gray-300">Ihr vertrauensvoller Partner für alle Fahrzeugservices</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 