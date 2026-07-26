import { motion } from 'motion/react';
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Building2, Globe2 } from 'lucide-react';

const parentStats = [
  { value: '8', label: 'Portfolio Subsidiaries', subtitle: 'Wholly & Majority Owned', icon: Building2 },
  { value: '250+', label: 'University Partners', subtitle: 'Global Digital Footprint', icon: Globe2 },
  { value: '1.2M+', label: 'Active User Accounts', subtitle: 'Students & Faculty Connected', icon: TrendingUp },
  { value: 'AA+', label: 'ESG & Governance', subtitle: 'Highest Institutional Standard', icon: ShieldCheck },
];

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#07000f] via-[#0d031e] to-[#0a0015]"></div>
      
      {/* Ambient background illumination */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[130px] animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[130px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-amber-500/10 rounded-full blur-[140px]"></div>
      </div>

      {/* Subtle architectural grid pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Parent Company Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 border border-white/15 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-amber-300 tracking-widest uppercase text-xs font-bold">
            The Parent Company Behind Tomorrow&apos;s Digital Powerhouses
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight leading-[1.08] text-white"
        >
          Architecting &amp; Powering <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-300 via-white to-purple-300 bg-clip-text text-transparent">
            Global Digital Ecosystems
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-normal leading-relaxed"
        >
          <strong className="text-white font-semibold">CSREXUS Holdings Group</strong> builds, acquires, and scales independent subsidiary platforms — empowering 250+ educational institutions, 1.2M+ students, and enterprise tech networks worldwide.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#ecosystem"
            className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative flex items-center justify-center gap-2 text-white font-bold text-base">
              Explore Portfolio Companies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </span>
          </a>

          <a
            href="#investors"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-md border border-white/15 rounded-xl hover:bg-white/10 hover:border-white/30 transition-all hover:scale-105 font-bold text-white text-base"
          >
            Investor &amp; Partner Portal
          </a>

          <a
            href="#about"
            className="w-full sm:w-auto px-6 py-4 text-gray-400 hover:text-white transition-colors font-semibold text-sm"
          >
            Holding Strategy &rarr;
          </a>
        </motion.div>

        {/* Holding Group Metrics Cards inside Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto"
        >
          {parentStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-xl text-left hover:border-amber-400/40 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-amber-300" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-gray-400">
                    GROUP STAT
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-200 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-400">
                  {stat.subtitle}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
