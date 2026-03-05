import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0015] via-[#1a0b2e] to-[#0f0520]"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Sparkles className="w-5 h-5 text-cyan-400" />
          <span className="text-cyan-400 tracking-wider uppercase text-sm">Next Generation Digital Infrastructure</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
          style={{ fontWeight: 800, lineHeight: 1.1 }}
        >
          Building The Future<br />of College Ecosystems
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          style={{ fontWeight: 400 }}
        >
          CSREXUS empowers institutions with a complete digital academic infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative flex items-center gap-2 text-white" style={{ fontWeight: 600 }}>
              Explore Our Ecosystem
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105">
            <span className="text-white" style={{ fontWeight: 600 }}>Contact Us</span>
          </button>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-1/4 left-10 w-20 h-20 border border-blue-500/30 rounded-lg rotate-12 hidden lg:block"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-1/4 right-10 w-16 h-16 border border-purple-500/30 rounded-full hidden lg:block"
        ></motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
