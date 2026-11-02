import { motion } from 'motion/react';
import { BookOpen, Code, FileCheck, Brain, Database, Wrench, Sparkles, Building2, ShieldCheck, Network } from 'lucide-react';

const capabilities = [
  {
    icon: Database,
    title: 'Enterprise Academic Cloud & ERP Migration',
    description: 'Potential work includes planning legacy-system modernisation and cloud migration approaches with clear rollback and continuity requirements.',
    tag: 'INSTATECH WORKS',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Brain,
    title: 'Turnkey University AI Integration (CSREXUS AI)',
    description: 'Explore carefully scoped AI use cases such as learning assistance and workflow support, with human review and privacy safeguards.',
    tag: 'CSREXUS AI RESEARCH',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    icon: ShieldCheck,
    title: 'Multi-Campus Zero-Trust Security & Identity',
    description: 'Explore identity, access-control, and application-security requirements. Compliance or certification should only be claimed when supported by current evidence.',
    tag: 'NEXUS CYBERSECURITY',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Code,
    title: 'Global Career & Placement Pipeline Network',
    description: 'Explore coding practice, career preparation, and employer-engagement workflows for learners and institutions.',
    tag: 'MUJCODE PLATFORM',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Network,
    title: 'Specialized DeepTech Lab & Campus Works',
    description: 'Explore curriculum and simulation projects in emerging areas such as robotics, quantum computing, and bioinformatics.',
    tag: 'FUTURE SKILL LABS',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Wrench,
    title: 'Custom Institutional Engineering & R&D',
    description: 'Explore custom software architecture, implementation, integration, and research projects based on an agreed scope.',
    tag: 'HOLDINGS CORE R&D',
    gradient: 'from-cyan-500 to-blue-600',
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 bg-gradient-to-b from-[#0a0015] via-[#0d041d] to-[#0a0015] overflow-hidden border-t border-white/10">
      {/* Background illumination */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>

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
            <Building2 className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-xs font-bold uppercase tracking-wider">
              Technology capabilities
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white">
            Technology <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-300 via-white to-amber-200 bg-clip-text text-transparent">
              Capabilities &amp; Works
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Potential areas where <strong className="text-white">CSREXUS</strong> may collaborate include campus technology, applied AI, software engineering, and product development. Project scope, availability, and delivery are confirmed individually.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.03] border border-white/15 hover:border-amber-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-950/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-white/5 border border-white/10 text-amber-300 uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors">
                      Learn About Engagement
                    </span>
                    <span className="text-amber-400 font-bold">&rarr;</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
