'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCar, FaWrench, FaWind } from 'react-icons/fa';

export default function WebsitesCarousel() {
  const websites = [
    {
      id: 1,
      name: "Ocean Car",
      subtitle: "Autohaus & Verkauf",
      description: "Premium Fahrzeuge und Autoverkauf",
      icon: FaCar,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#", // Will be the actual car dealership website
      status: "Bald verfügbar"
    },
    {
      id: 2,
      name: "Ocean Maintenance",
      subtitle: "Autowerkstatt & Service",
      description: "Reparatur, Wartung und Inspektion",
      icon: FaWrench,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20",
      image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/",
      status: "Aktuell"
    },
    {
      id: 3,
      name: "Ocean Air",
      subtitle: "Helikopter & Flugzeuge",
      description: "Luftfahrt und Helikopter Services",
      icon: FaWind,
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-500/10 to-blue-500/10",
      borderColor: "border-cyan-500/20",
      image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#", // Will be the actual air service website
      status: "Bald verfügbar"
    }
  ];

    return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #10b981 0%, transparent 50%)`,
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
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-blue-500/30 backdrop-blur-sm"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <FaCar className="w-5 h-5" />
            </motion.div>
            Die Ocean Familie
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-500 bg-clip-text text-transparent">
              Unsere
            </span>
            <br />
            <span className="text-white">Unternehmen</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Drei spezialisierte Bereiche unter einer Marke - <br />
            <span className="text-cyan-400 font-semibold">für alle Ihre Mobilitätsbedürfnisse</span>
          </motion.p>
        </motion.div>

        {/* Enhanced Websites Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {websites.map((website, index) => (
            <motion.div
              key={website.id}
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
              <div className={`absolute -inset-1 bg-gradient-to-r ${website.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              
              {/* Main Card */}
              <div className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 shadow-2xl transition-all duration-500 group-hover:border-white/40`}>
                
                                 {/* Enhanced Background Image - Mobile Compact */}
                 <div className="relative h-32 md:h-40 lg:h-48 xl:h-56 overflow-hidden">
                  <motion.img 
                    src={website.image} 
                    alt={website.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                                     {/* Enhanced Status Badge - Mobile Compact */}
                   <motion.div 
                     className={`absolute top-2 right-2 md:top-3 md:right-3 lg:top-4 lg:right-4 px-2 py-1 md:px-3 md:py-2 rounded-full text-xs md:text-sm font-bold backdrop-blur-sm ${
                       website.status === 'Aktuell' 
                         ? 'bg-green-500/90 text-white shadow-green-500/50' 
                         : 'bg-yellow-500/90 text-black shadow-yellow-500/50'
                     } shadow-lg`}
                     initial={{ scale: 0 }}
                     animate={{ scale: 1 }}
                     transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                   >
                     {website.status}
                   </motion.div>

                                     {/* Floating Icon - Mobile Compact */}
                   <motion.div 
                     className={`absolute top-2 left-2 md:top-3 md:left-3 lg:top-4 lg:left-4 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br ${website.color} rounded-xl md:rounded-xl lg:rounded-2xl flex items-center justify-center shadow-2xl`}
                     initial={{ scale: 0, rotate: -180 }}
                     animate={{ scale: 1, rotate: 0 }}
                     transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                     whileHover={{ rotate: 360, scale: 1.1 }}
                   >
                     <website.icon className="text-white" size={16} />
                   </motion.div>
                </div>

                                 {/* Enhanced Content - Mobile Compact */}
                 <div className="p-3 md:p-4 lg:p-6 xl:p-8">
                   <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                   >
                     <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-black text-white mb-1 md:mb-2">
                       {website.name}
                     </h3>
                     <p className="text-sm md:text-base text-cyan-300 font-semibold mb-2 md:mb-3 lg:mb-4">
                       {website.subtitle}
                     </p>
                     
                     <p className="text-gray-300 mb-3 md:mb-4 lg:mb-6 leading-relaxed text-sm md:text-base lg:text-lg">
                       {website.description}
                     </p>

                                         {/* Enhanced Link Button - Mobile Compact */}
                     {website.status === 'Aktuell' ? (
                       <Link href={website.link}>
                         <motion.div
                           className={`inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r ${website.color} text-white px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-3 rounded-lg md:rounded-xl font-bold text-sm md:text-base lg:text-lg shadow-xl group-hover:shadow-2xl transition-all duration-300`}
                           whileHover={{ scale: 1.05 }}
                           whileTap={{ scale: 0.95 }}
                         >
                           <span className="hidden sm:inline">Jetzt besuchen</span>
                           <span className="sm:hidden">Besuchen</span>
                           <motion.div
                             animate={{ x: [0, 5, 0] }}
                             transition={{ duration: 1.5, repeat: Infinity }}
                           >
                             →
                           </motion.div>
                         </motion.div>
                       </Link>
                     ) : (
                       <motion.div 
                         className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300 px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-3 rounded-lg md:rounded-xl font-bold text-sm md:text-base lg:text-lg cursor-not-allowed opacity-75"
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 0.75 }}
                         transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                       >
                         <span className="hidden sm:inline">Bald verfügbar</span>
                         <span className="sm:hidden">Bald da</span>
                         <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                       </motion.div>
                     )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-500/10 to-green-500/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl">🌊</div>
            <div>
              <h4 className="text-xl font-bold text-white mb-1">Ocean Gruppe</h4>
              <p className="text-gray-300">Ihre Partner für Mobilität zu Land, Wasser und Luft</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 