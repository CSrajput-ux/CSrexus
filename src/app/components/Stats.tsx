import { motion } from 'motion/react';
import { Building2, Users, Shield, TrendingUp, Globe2, Cpu, Award, CheckCircle2 } from 'lucide-react';

const conglomerateStats = [
  {
    icon: Shield,
    value: '100%',
    label: 'ISO 27001 Certified Group',
    detail: 'Zero data breaches across all 8 operating subsidiaries',
    gradient: 'from-amber-400 to-yellow-500',
  },
  {
    icon: Building2,
    value: '8',
    label: 'Active Portfolio Platforms',
    detail: '100% Wholly Owned Subsidiaries & 85% Majority Ventures',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Globe2,
    value: '250+',
    label: 'Universities Connected',
    detail: 'Multi-year enterprise CampusX & EduStream contracts',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Users,
    value: '1.2M+',
    label: 'Active CSREXUS ID Users',
    detail: 'Students, professors, and university administrators',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Cpu,
    value: '12',
    label: 'Global R&D Laboratories',
    detail: 'Dedicated AI & DeepTech research hubs in CA & India',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Award,
    value: 'AA+',
    label: 'ESG & Corporate Rating',
    detail: 'Carbon-neutral server footprint & independent board governance',
    gradient: 'from-cyan-500 to-blue-600',
  },
];

export function Stats() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-[#0a0015] via-[#0d041d] to-[#0a0015] overflow-hidden border-t border-white/10">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[170px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5">
            <Globe2 className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-xs font-bold uppercase tracking-wider">
              Holding Group Footprint &amp; Aggregate Impact
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white">
            Global Conglomerate <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-amber-200 via-white to-blue-200 bg-clip-text text-transparent">
              Impact &amp; Scale
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed">
            The combined scale of <strong className="text-white">CSREXUS Holdings Group</strong> across education technology, enterprise ERP cloud clusters, and autonomous AI research.
          </p>
        </motion.div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {conglomerateStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-3xl bg-gradient-to-b from-white/[0.09] to-white/[0.03] border border-white/15 hover:border-amber-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-950/40">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-white/5 border border-white/10 text-gray-400 uppercase tracking-wider">
                      CONSOLIDATED
                    </span>
                  </div>

                  <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                    {stat.value}
                  </div>

                  <h3 className="text-lg font-bold text-amber-300 mb-1">
                    {stat.label}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    {stat.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Audit & Verification Footer */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>All consolidated statistics independently audited by top-4 accounting partners for FY2026.</span>
          </div>
          <span className="font-semibold text-white uppercase tracking-wider">
            CSREXUS HOLDINGS GROUP • CORPORATE INDEX
          </span>
        </div>
      </div>
    </section>
  );
}
