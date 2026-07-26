import { motion } from 'motion/react';
import { Target, Lightbulb, TrendingUp, ShieldCheck, Building2, Cpu, Award } from 'lucide-react';

const pillars = [
  {
    icon: Lightbulb,
    title: 'Venture Studio & Deep-Tech Incubation',
    description: 'We incubate ground-breaking educational & enterprise platforms from conception inside our dedicated R&D labs — providing initial capital, architectural blueprints, and institutional testbeds.',
    metric: '12 GLOBAL R&D HUBS • 100% INCUBATION SUCCESS',
    gradient: 'from-blue-500/20 via-blue-500/10 to-transparent',
    borderHover: 'hover:border-blue-500/50',
    tagColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
  },
  {
    icon: TrendingUp,
    title: 'Strategic Acquisitions (M&A) & Growth Capital',
    description: 'We acquire high-growth EdTech, campus ERP, and AI ventures, accelerating their trajectory through our holding company balance sheet and global university distribution network.',
    metric: '$1.85B PORTFOLIO ASSETS • ACTIVE SEED TO SERIES B',
    gradient: 'from-purple-500/20 via-purple-500/10 to-transparent',
    borderHover: 'hover:border-purple-500/50',
    tagColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
  },
  {
    icon: Cpu,
    title: 'Shared Enterprise Synergy Engine',
    description: 'All CSREXUS subsidiaries inherit our proprietary Cognitive AI Fabric, Zero-Trust Academic Identity (CSREXUS ID), and unified enterprise sales channels — reducing GTM friction by 65%.',
    metric: 'UNIFIED CSREXUS ID • ZERO-TRUST ARCHITECTURE',
    gradient: 'from-amber-500/20 via-amber-500/10 to-transparent',
    borderHover: 'hover:border-amber-500/50',
    tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
  },
];

export function About() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-[#0a0015] via-[#0d041e] to-[#0a0015] overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5">
            <Building2 className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-xs font-bold uppercase tracking-wider">
              Holding Group Strategy &amp; Operating Philosophy
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white">
            How CSREXUS Builds &amp; Scales <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-amber-200 via-white to-blue-200 bg-clip-text text-transparent">
              Industry-Leading Subsidiaries
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed mb-4">
            Unlike traditional software vendors, <strong className="text-white font-semibold">CSREXUS Holdings Group</strong> operates as a structured parent entity — combining permanent capital, centralized R&amp;D, and deep institutional relationships.
          </p>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            Our portfolio companies maintain entrepreneurial agility while leveraging the immense balance sheet and technical infrastructure of a global corporate conglomerate.
          </p>
        </motion.div>

        {/* The 3 Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative flex flex-col justify-between"
              >
                <div
                  className={`relative h-full p-8 bg-gradient-to-b from-white/[0.08] to-white/[0.03] backdrop-blur-xl border border-white/15 rounded-3xl transition-all duration-300 ${pillar.borderHover} hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-950/40 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 bg-gradient-to-br from-white/10 to-white/5 border border-white/15 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                        PILLAR 0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-white leading-snug">
                      {pillar.title}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Metric Tag */}
                  <div className="pt-6 border-t border-white/10">
                    <div className={`inline-block px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase border ${pillar.tagColor}`}>
                      {pillar.metric}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Parent Group Mandate & Corporate Governance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-8 md:p-12 bg-gradient-to-r from-blue-900/20 via-purple-900/30 to-amber-900/20 border border-white/15 backdrop-blur-xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                <Award className="w-4 h-4" />
                <span>The Holding Company Mandate</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                Why We Operate as a Private Holding Group
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Higher education and enterprise academic infrastructure demand multi-decade stability. By structuring as an independent holding company rather than a short-term venture fund, <strong className="text-white">CSREXUS Holdings Group</strong> guarantees that our subsidiaries remain committed to long-term academic excellence, data sovereignty, and zero-trust security.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <a
                href="#ecosystem"
                className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-purple-600 hover:from-amber-400 hover:to-purple-500 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-purple-900/30 text-center"
              >
                View 8 Subsidiaries
              </a>
              <a
                href="#leadership"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm rounded-xl transition-all text-center"
              >
                Board of Directors
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
