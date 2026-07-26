import { motion } from 'motion/react';
import { Newspaper, ArrowRight, Tag, Sparkles, Building2, Cpu, Globe2, ShieldCheck, FileText } from 'lucide-react';
import { useState } from 'react';

interface PressDirective {
  id: string;
  title: string;
  category: 'all' | 'acquisitions' | 'product' | 'governance';
  categoryLabel: string;
  mandate: string;
  summary: string;
  icon: any;
  gradient: string;
  highlight?: boolean;
}

const pressDirectives: PressDirective[] = [
  {
    id: 'directive-1',
    title: 'M&A & Portfolio Acquisition Directives',
    category: 'acquisitions',
    categoryLabel: 'M&A STRATEGY',
    mandate: 'Strategic Majority Stakes & Wholly Owned Integrations',
    summary: 'Our corporate M&A desk evaluates high-retention university ERP systems, automated grading engines, and biometric campus security platforms for permanent equity integration into the holding group.',
    icon: Building2,
    gradient: 'from-amber-400 to-yellow-500',
    highlight: true,
  },
  {
    id: 'directive-2',
    title: 'Central R&D & AI Benchmark Releases',
    category: 'product',
    categoryLabel: 'R&D LABS',
    mandate: 'Open-Source Pedagogical LLMs & Accreditation Benchmarks',
    summary: 'Our central CSREXUS AI Research division publishes recurring academic benchmark datasets and cognitive SLM architectures designed to assist university faculty and automate exam evaluation.',
    icon: Cpu,
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    id: 'directive-3',
    title: 'Institutional University Network Expansion',
    category: 'product',
    categoryLabel: 'CAMPUS WORKS',
    mandate: 'Multi-Campus Cloud Migrations & ERP Modernization',
    summary: 'InstaTech Solutions and CampusX lead institutional mainframe transformations across 250+ connected colleges, deploying unified student identity (CSREXUS ID) and high-concurrency examination grids.',
    icon: Globe2,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'directive-4',
    title: 'ESG & Data Sovereignty Compliance Bulletins',
    category: 'governance',
    categoryLabel: 'GOVERNANCE',
    mandate: 'ISO 27001 Security, Zero Data Breaches & DPDP Act Alignment',
    summary: 'We maintain strict annual compliance certifications across FERPA, GDPR, and Indian Data Privacy laws, ensuring all partner universities operate within audit-ready zero-trust parameters.',
    icon: ShieldCheck,
    gradient: 'from-emerald-500 to-teal-500',
  },
];

export function GroupNewsroom() {
  const [filter, setFilter] = useState<'all' | 'acquisitions' | 'product' | 'governance'>('all');

  const filteredNews = filter === 'all' 
    ? pressDirectives 
    : pressDirectives.filter((n) => n.category === filter);

  return (
    <section id="newsroom" className="relative py-28 bg-gradient-to-b from-[#0a0015] via-[#0d041e] to-[#0a0015] overflow-hidden border-t border-white/10">
      {/* Background illumination */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5">
            <Newspaper className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-xs font-bold uppercase tracking-wider">
              Corporate Press Room &amp; Milestone Directives
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white">
            Group Press Room &amp; <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-white via-amber-200 to-blue-200 bg-clip-text text-transparent">
              Strategic Milestones
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Official corporate directives, M&amp;A acquisition mandates, and institutional milestones from <strong className="text-white">CSREXUS Holdings Group</strong>.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {[
            { id: 'all', label: 'All Directives (4)' },
            { id: 'acquisitions', label: 'M&A Strategy' },
            { id: 'product', label: 'R&D & Campus Milestones' },
            { id: 'governance', label: 'ESG & Governance' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/20 scale-105'
                  : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Directives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredNews.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.03] border transition-all duration-300 flex flex-col justify-between ${
                  item.highlight
                    ? 'border-amber-400/50 shadow-xl shadow-amber-950/20'
                    : 'border-white/15 hover:border-white/30'
                }`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-white/10 border border-white/15 text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                        {item.categoryLabel}
                      </span>
                      {item.highlight && (
                        <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                          CORE MANDATE
                        </span>
                      )}
                    </div>

                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-200 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-4">
                    {item.mandate}
                  </p>

                  {/* Summary */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {item.summary}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-400">
                    CSREXUS HOLDINGS CORPORATE DESK
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 group-hover:text-amber-300 transition-colors"
                  >
                    <span>Inquire with Press Room</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Media & Press Contact Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-white/5 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-xl font-bold text-white mb-1">
              Request Official Corporate Media Kit &amp; Press Assets
            </h4>
            <p className="text-sm text-gray-400">
              For journalist accreditation, executive interview requests, and holding company press logos &amp; guidelines.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm hover:brightness-110 transition-all flex items-center gap-2 flex-shrink-0 shadow-lg shadow-purple-900/30"
          >
            <span>Contact Media Relations Desk</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
