'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaPhone, FaMapMarkerAlt, FaWrench, FaClock, FaArrowDown, FaShieldAlt, FaTools } from 'react-icons/fa';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -150]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const goToServices = () => {
    window.location.href = '/services';
  };

  const maintenanceServices = [
    { icon: FaWrench, text: 'Reparaturen', color: 'from-blue-500 to-cyan-500' },
    { icon: FaShieldAlt, text: 'Wartung', color: 'from-green-500 to-emerald-500' },
    { icon: FaTools, text: 'Inspektion', color: 'from-yellow-500 to-orange-500' },
  ];

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-black">
      {/* Dynamic Background with Parallax */}
      <div className="absolute inset-0">
        {/* Main Background Image - Professional Car Service */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ y: y1 }}
        >
          <div 
            className="w-full h-[120%] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80)',
            }}
          />
        </motion.div>
        
        {/* Interactive Overlay that follows mouse */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-900/70 to-black/80"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.3) 0%, rgba(15, 23, 42, 0.8) 50%, rgba(0, 0, 0, 0.9) 100%)`,
          }}
        />
      </div>

      {/* Simplified Floating Elements - Hidden on Mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <motion.div
          className="absolute top-32 right-20 w-4 h-4 bg-green-400 rounded-full opacity-60"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-3 h-3 bg-cyan-400 opacity-40"
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Top spacer for header - increased for mobile to prevent title overlap */}
        <div className="h-40 md:h-32"></div>
        
        {/* Main content area */}
        <div className="flex-1 container mx-auto px-4 flex items-center">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center w-full">
            
            {/* Left Side - Main Content */}
            <motion.div 
              className="space-y-6 md:space-y-8"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              >
                <motion.div 
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-white text-sm font-medium">Professionelle Autowerkstatt • Bern</span>
              </motion.div>

              {/* Main Heading with Staggered Animation - Mobile Optimized */}
              <div className="space-y-2 md:space-y-4">
                <motion.h1 
                  className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.span 
                    className="block"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    OCEAN
                  </motion.span>
                  <motion.span 
                    className="block bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    MAINTENANCE
                  </motion.span>
                </motion.h1>
                
                <motion.p 
                  className="text-base md:text-xl lg:text-2xl text-green-200 font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  Autowerkstatt & Service in Bern
                </motion.p>
              </div>

              {/* Description - Mobile Optimized */}
              <motion.p 
                className="text-sm md:text-lg text-gray-300 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Vertrauen Sie auf über 
                <span className="text-cyan-400 font-semibold"> 21 Jahr Erfahrung</span> in der 
                Fahrzeugwartung und -reparatur. Unser professionelles Team sorgt dafür, 
                dass Ihr Auto sicher und zuverlässig bleibt.
              </motion.p>

              {/* CTA Buttons with Hover Effects */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <motion.button
                  onClick={goToServices}
                  className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    <FaWrench size={20} />
                    Services entdecken
                  </span>
                </motion.button>
                
                <motion.a
                  href="tel:0313326030"
                  className="group relative overflow-hidden border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg backdrop-blur-sm hover:border-green-400/50"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    <FaPhone size={20} />
                    24h Notdienst
                  </span>
                </motion.a>
              </motion.div>

              {/* Service Quick Cards - More Compact on Mobile */}
              <motion.div
                className="flex flex-wrap gap-2 md:gap-3 pt-2 md:pt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                {maintenanceServices.map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-1 md:gap-2 bg-white/5 backdrop-blur-sm px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl border border-white/10 hover:border-green-400/30 transition-all"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <service.icon className={`w-3 h-3 md:w-4 md:h-4 text-green-400`} />
                    <span className="text-xs md:text-sm text-gray-300 font-medium">{service.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Cards & Stats - Mobile Optimized */}
            <motion.div 
              className="space-y-3 md:space-y-6"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              
              {/* Emergency Contact Card */}
              <motion.div
                className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl md:rounded-3xl p-3 md:p-6 border border-red-500/30"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg md:rounded-2xl flex items-center justify-center">
                    <FaPhone className="text-white text-base md:text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm md:text-lg">24h Notdienst</h3>
                    <p className="text-orange-200 text-xs md:text-base">Immer für Sie da</p>
                    <a href="tel:0313326030" className="text-orange-300 font-bold text-base md:text-xl">031 332 60 30</a>
                  </div>
                </div>
              </motion.div>

              {/* Location Card */}
              <motion.div
                className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl md:rounded-3xl p-3 md:p-6 border border-blue-500/30"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg md:rounded-2xl flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white text-base md:text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm md:text-lg">Unser Standort</h3>
                    <p className="text-blue-200 text-xs md:text-base">Zikadenweg 42a</p>
                    <p className="text-blue-300 font-bold text-xs md:text-base">3006 Bern</p>
                  </div>
                </div>
              </motion.div>

              {/* Opening Hours Card */}
              <motion.div
                className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-xl md:rounded-3xl p-3 md:p-6 border border-green-500/30"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg md:rounded-2xl flex items-center justify-center">
                    <FaClock className="text-white text-base md:text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm md:text-lg">Öffnungszeiten</h3>
                    <p className="text-green-200 text-xs md:text-base">Mo-Fr: 07:00-18:00</p>
                    <p className="text-green-300 font-bold text-xs md:text-base">Sa: 08:00-16:00</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={goToServices}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-white/70 text-sm font-medium">Services entdecken</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-2">
              <motion.div
                className="w-1 h-3 bg-white/70 rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
            <FaArrowDown className="text-white/50 text-sm" />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Smooth transition overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-gray-900/50 to-transparent pointer-events-none"></div>
    </section>
  );
} 