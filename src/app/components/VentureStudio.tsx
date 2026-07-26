import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Rocket, TrendingUp, Building2, CheckCircle2, Award } from 'lucide-react';

const stages = [
  {
    step: 'STAGE 01',
    title: 'Incubation & Seed Capital Injection',
    subtitle: '$500K — $2M Non-Dilutive & Seed Capital',
    description: 'We identify breakthrough educational research, AI models, and student-founded platforms. Selected founders enter our Silicon Valley & Bangalore venture studios with immediate engineering and seed capital support.',
    icon: Rocket,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    step: 'STAGE 02',
    title: '250+ University Campus Testbed',
    subtitle: 'Direct Beta Distribution & Real User Feedback',
    description: 'Instead of struggling for initial traction, our studio ventures deploy directly across CSREXUS partner universities — testing their technology with 1.2M+ active student and faculty accounts.',
    icon: TrendingUp,
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    step: 'STAGE 03',
    title: 'Scale as Independent Subsidiary',
    subtitle: 'Full Balance Sheet Backing & Dedicated CEO',
    description: 'Once unit economics and institutional retention are proven, the venture is incorporated as a Wholly Owned or Majority Subsidiary of CSREXUS Holdings Group with permanent growth capital.',
    icon: Building2,
    gradient: 'from-amber-500 to-orange-500',
  },
];

const portfolioMetrics = [
  { value: '18', label: 'Startups Incubated', detail: 'Since 2021 inception' },
  { value: '8', label: 'Graduated Subsidiaries', detail: 'Now standalone group brands' },
  { value: '$120M', label: 'Growth Capital Deployed', detail: 'Across Seed & Series B' },
  { value: '4.2x', label: 'Average Revenue Multiple', detail: 'Within 24 mos of acquisition' },
];

export function VentureStudio() {
  return (
    <section id="venture-studio" className="relative py-28 bg-gradient-to-b from-[#0a0015] via-[#0d041f] to-[#0a0015] overflow-hidden border-t border-white/10">
      {/* Background illumination */}
      <div className="absolute top-1/3 left-0 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none"></div>

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
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-xs font-bold uppercase tracking-wider">
              Venture Studio &amp; M&amp;A Incubation Arm
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white">
            Incubating the Next Generation of <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-amber-200 via-white to-purple-300 bg-clip-text text-transparent">
              Institutional Tech Giants
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed">
            How does <strong className="text-white">CSREXUS Holdings Group</strong> continually expand its ecosystem? Through our dedicated <strong className="text-white">Venture Studio &amp; M&amp;A division</strong> that builds, funds, and scales educational and campus ERP innovators.
          </p>
        </motion.div>

        {/* 3-Stage Studio Lifecycle */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative flex flex-col justify-between"
              >
                <div className="relative h-full p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 hover:border-amber-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-950/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-extrabold tracking-widest px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                        {stage.step}
                      </span>
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stage.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 leading-snug">
                      {stage.title}
                    </h3>

                    <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-4">
                      {stage.subtitle}
                    </p>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-white transition-colors">
                    <span>Venture Track Progression</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Portfolio Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-purple-950/40 to-amber-950/30 border border-white/15 backdrop-blur-xl">
          {portfolioMetrics.map((item, index) => (
            <div key={index} className="text-center sm:text-left">
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">
                {item.value}
              </div>
              <div className="text-sm font-bold text-amber-300 mb-0.5">
                {item.label}
              </div>
              <div className="text-xs text-gray-400">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

        {/* M&A & Founder Pitch Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-8 md:p-12 bg-gradient-to-r from-white/10 via-white/5 to-white/10 border border-white/20 backdrop-blur-2xl overflow-hidden text-center"
        >
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4" />
            <span>Open M&amp;A &amp; Founder Submissions</span>
          </div>

          <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
            Are You Building for Higher Education or Enterprise Tech?
          </h3>

          <p className="text-gray-300 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you are seeking Seed Incubation, Series A growth capital, or a strategic M&amp;A acquisition into the <strong className="text-white">CSREXUS Holdings Group</strong> portfolio — our venture directors want to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 text-white font-bold text-sm transition-all hover:scale-105 shadow-xl shadow-purple-900/30"
            >
              Submit M&amp;A or Venture Pitch
            </a>
            <a
              href="#investors"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm transition-all"
            >
              Investor Capital Allocation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
