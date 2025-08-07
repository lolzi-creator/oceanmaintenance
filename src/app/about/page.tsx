'use client';

import Header from '@/components/Navbar';
import Footer from '@/components/Footer';
import About from '@/components/About';
import { motion } from 'framer-motion';
import { FaUsers } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Simple Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
              <FaUsers className="w-4 h-4" />
              Über uns
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-500 bg-clip-text text-transparent">
                Ihre vertrauensvolle
              </span>
              <br />
              Autowerkstatt
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seit über 15 Jahren Ihr Partner für Qualität und Zuverlässigkeit in Bern
            </p>
          </motion.div>
        </div>
      </section>

      <main>
        <About />
      </main>
      
      <Footer />
    </div>
  );
} 