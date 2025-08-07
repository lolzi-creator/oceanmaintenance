'use client';

import Header from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';

export default function ContactPage() {
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
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-500/30">
              <FaPhone className="w-4 h-4" />
              Kontakt
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                Kontaktieren
              </span>
              <br />
              Sie uns
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Wir sind gerne für Sie da - rufen Sie uns an oder besuchen Sie uns in Bern
            </p>
          </motion.div>
        </div>
      </section>

      <main>
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
} 