import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  GraduationCap, 
  Building2, 
  Sparkles, 
  Zap, 
  ExternalLink, 
  Cpu, 
  ShieldCheck, 
  TrendingUp, 
  X, 
  CheckCircle2, 
  ArrowRight,
  Users,
  Calendar,
  Award
} from 'lucide-react';
import { useState } from 'react';

interface Subsidiary {
  id: string;
  name: string;
  category: 'all' | 'edtech' | 'erp' | 'ai' | 'venture';
  ownership: string;
  leadership: string;
  founded: string;
  scale: string;
  description: string;
  deepDiveText: string;
  synergyPoint: string;
  icon: any;
  gradient: string;
  borderGlow: string;
  url?: string;
  urlLabel?: string;
}

const subsidiaries: Subsidiary[] = [
  {
    id: 'mujcode',
    name: 'MujCode',
    category: 'edtech',
    ownership: '100% Wholly Owned Subsidiary',
    leadership: 'Dr. Alistair Vance, Chief Executive Officer',
    founded: 'Est. 2021',
    scale: '150,000+ Active Coders • 65+ University Partners',
    description: 'Comprehensive coding, automated hackathon grading, and career placement platform connecting engineering students with top global enterprises.',
    deepDiveText: 'MujCode serves as the primary technical talent pipeline across CSREXUS Holdings Group. Offering automated test cases, real-world DevOps sandboxes, and enterprise placement analytics, MujCode has placed over 18,000 engineers into Fortune 500 tech firms.',
    synergyPoint: 'Integrates natively with CampusX ERP for student transcripts and EduStream for proctored technical exams.',
    icon: Code2,
    gradient: 'from-blue-500 to-cyan-500',
    borderGlow: 'hover:border-blue-500/50',
    url: 'https://www.mujcode.in',
    urlLabel: 'www.mujcode.in',
  },
  {
    id: 'campusx',
    name: 'CampusX',
    category: 'erp',
    ownership: '100% Wholly Owned Subsidiary',
    leadership: 'Elena Rostova, Managing Director',
    founded: 'Est. 2019',
    scale: '180+ Universities • 850,000+ Student Accounts',
    description: 'Next-generation cloud ERP & Campus OS automating admissions, attendance, finance, degree verification, and faculty workflows.',
    deepDiveText: 'CampusX is the institutional operating system powering leading colleges. It replaces fragmented legacy databases with a unified cloud architecture, handling over $400M in tuition processing and 2M daily attendance records.',
    synergyPoint: 'Serves as the single sign-on (CSREXUS ID) identity provider for all 8 group portfolio platforms.',
    icon: Building2,
    gradient: 'from-purple-500 to-indigo-500',
    borderGlow: 'hover:border-purple-500/50',
  },
  {
    id: 'future-skill-labs',
    name: 'Future Skill Labs',
    category: 'edtech',
    ownership: '100% Wholly Owned Subsidiary',
    leadership: 'Marcus Vance, CEO & Head of Curriculum',
    founded: 'Est. 2022',
    scale: '45+ Specialized Labs • 40,000+ Certified Graduates',
    description: 'Deep-tech workforce incubation programs in Quantum Computing, Autonomous Robotics, and Bio-Informatics for university campuses.',
    deepDiveText: 'Future Skill Labs builds industry-accredited deep-tech laboratories inside university campuses. Equipping students with hardware-in-the-loop simulation tools and direct mentorship from industry research fellows.',
    synergyPoint: 'Leverages CSREXUS AI Research models for personalized adaptive curriculum delivery.',
    icon: Sparkles,
    gradient: 'from-pink-500 to-rose-500',
    borderGlow: 'hover:border-pink-500/50',
  },
  {
    id: 'edustream',
    name: 'EduStream',
    category: 'edtech',
    ownership: '100% Wholly Owned Subsidiary',
    leadership: 'Sarah Jenkins, President',
    founded: 'Est. 2020',
    scale: '99.99% Uptime • 12M+ Exams Proctored',
    description: 'High-concurrency immersive learning management system (LMS) and AI-proctored digital examination grid for accredited degrees.',
    deepDiveText: 'EduStream delivers zero-latency video lectures and military-grade proctored online examinations. Capable of supporting 200,000 concurrent students without degradation during nationwide university test cycles.',
    synergyPoint: 'Utilizes Nexus CyberSecurity biometric face-verification and tamper-proof audit trails.',
    icon: GraduationCap,
    gradient: 'from-emerald-500 to-teal-500',
    borderGlow: 'hover:border-emerald-500/50',
  },
  {
    id: 'instatech',
    name: 'InstaTech Solutions',
    category: 'erp',
    ownership: '100% Wholly Owned Subsidiary',
    leadership: 'Vikram Mehta, VP of Cloud Works',
    founded: 'Est. 2021',
    scale: '200+ Institution Migrations • 24/7 Taskforce',
    description: 'Rapid institutional cloud transformation, legacy database modernization, and multi-campus fiber infrastructure works.',
    deepDiveText: 'InstaTech Solutions provides the hands-on engineering taskforce that migrates decades-old university mainframe systems to AWS, Azure, and private CSREXUS cloud clusters in under 90 days.',
    synergyPoint: 'Acts as the deployment and onboarding arm for all CSREXUS Holdings software contracts.',
    icon: Zap,
    gradient: 'from-amber-500 to-orange-500',
    borderGlow: 'hover:border-amber-500/50',
  },
  {
    id: 'csrexus-ai',
    name: 'CSREXUS AI Research',
    category: 'ai',
    ownership: '100% Group R&D Division',
    leadership: 'Dr. Aris Thorne, Chief Scientist',
    founded: 'Est. 2023',
    scale: '12 Proprietary LLMs • Open-Source EdTech Benchmarks',
    description: 'The autonomous cognitive AI engine powering pedagogical co-pilots, automated grading, and predictive dropout analytics across all group subsidiaries.',
    deepDiveText: 'CSREXUS AI Research develops domain-specific Small Language Models (SLMs) trained exclusively on academic literature, computer science pedagogy, and institutional compliance datasets — outperforming generic LLMs on education benchmarks.',
    synergyPoint: 'Provides embedded AI co-pilots across MujCode, CampusX, and EduStream.',
    icon: Cpu,
    gradient: 'from-cyan-500 to-blue-600',
    borderGlow: 'hover:border-cyan-500/50',
  },
  {
    id: 'nexus-security',
    name: 'Nexus CyberSecurity',
    category: 'ai',
    ownership: '85% Majority Owned Venture',
    leadership: 'Kaelen Voss, Managing Director',
    founded: 'Acquired 2024',
    scale: 'ISO 27001 Certified • Zero Data Breaches Across Group',
    description: 'Zero-trust academic identity fabric (CSREXUS ID), biometric examination verification, and regulatory data compliance firewall.',
    deepDiveText: 'Nexus CyberSecurity protects student records, financial transactions, and research IP against cyber infiltration. We acquired an 85% majority stake in Nexus in 2024 to ensure our partner universities remain compliant with global privacy laws.',
    synergyPoint: 'Enforces Zero-Trust encryption across all CSREXUS Holdings Group platforms.',
    icon: ShieldCheck,
    gradient: 'from-indigo-500 to-purple-600',
    borderGlow: 'hover:border-indigo-500/50',
  },
  {
    id: 'educapital',
    name: 'EduCapital Ventures',
    category: 'venture',
    ownership: 'Group Venture Capital Arm',
    leadership: 'David Chen, MD of Investments',
    founded: 'Est. 2022',
    scale: '$120M Capital Deployed • 18 Early-Stage Founders',
    description: 'Strategic seed and Series A growth fund investing in student-founded startups, campus incubators, and breakthrough educational hardware.',
    deepDiveText: 'EduCapital Ventures is the venture capital arm of CSREXUS Holdings Group. We deploy non-dilutive and seed capital into student entrepreneurs and faculty spin-off ventures, providing them direct access to our 250+ university testbeds.',
    synergyPoint: 'Feeds next-generation acquisition targets into the CSREXUS M&A pipeline.',
    icon: TrendingUp,
    gradient: 'from-amber-400 to-yellow-500',
    borderGlow: 'hover:border-amber-400/50',
  },
];

const categories = [
  { id: 'all', label: 'All Portfolio (8)' },
  { id: 'edtech', label: 'EdTech & Learning (3)' },
  { id: 'erp', label: 'Enterprise & ERP (2)' },
  { id: 'ai', label: 'AI & Security Labs (2)' },
  { id: 'venture', label: 'Venture Arm (1)' },
];

export function Ecosystem() {
  const [activeTab, setActiveTab] = useState<'all' | 'edtech' | 'erp' | 'ai' | 'venture'>('all');
  const [selectedSub, setSelectedSub] = useState<Subsidiary | null>(null);

  const filteredSubs = activeTab === 'all' 
    ? subsidiaries 
    : subsidiaries.filter((s) => s.category === activeTab);

  return (
    <section id="ecosystem" className="relative py-28 bg-gradient-to-b from-[#0a0015] via-[#0c031d] to-[#0a0015] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-xs font-bold uppercase tracking-wider">
              Holding Group Portfolio &amp; Operating Entities
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white">
            Our Subsidiaries &amp; <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-300 via-white to-amber-200 bg-clip-text text-transparent">
              Portfolio Companies
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed">
            An integrated portfolio of 8 market-leading platforms — operating independently while sharing the technical, AI, and capital advantage of <strong className="text-white">CSREXUS Holdings Group</strong>.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as any)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/20 scale-105'
                  : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Subsidiaries Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredSubs.map((company, index) => {
              const Icon = company.icon;
              return (
                <motion.div
                  key={company.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative flex flex-col justify-between"
                >
                  <div
                    onClick={() => setSelectedSub(company)}
                    className={`relative h-full p-6 bg-gradient-to-b from-white/[0.08] to-white/[0.03] backdrop-blur-xl border border-white/15 rounded-2xl transition-all duration-300 ${company.borderGlow} hover:scale-[1.03] hover:shadow-xl hover:shadow-purple-900/30 flex flex-col justify-between cursor-pointer`}
                  >
                    <div>
                      {/* Top Bar: Icon & Ownership Badge */}
                      <div className="flex items-start justify-between gap-3 mb-5">
                        <div className={`w-14 h-14 bg-gradient-to-br ${company.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>

                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-white/10 border border-white/15 text-amber-300 uppercase tracking-wider text-right">
                          {company.ownership}
                        </span>
                      </div>

                      {/* Name & Sector */}
                      <h3 className="text-xl font-bold mb-1.5 text-white flex items-center justify-between">
                        <span>{company.name}</span>
                        <span className="text-xs text-gray-400 font-normal">{company.founded}</span>
                      </h3>

                      <p className="text-xs text-blue-300 font-semibold mb-3">
                        {company.scale}
                      </p>

                      <p className="text-gray-300 text-sm leading-relaxed mb-6">
                        {company.description}
                      </p>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors">
                        View Ownership Details
                      </span>
                      {company.url ? (
                        <a
                          href={company.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-2.5 py-1 rounded-lg bg-amber-400/20 hover:bg-amber-400/30 border border-amber-400/30 text-amber-300 text-xs font-bold flex items-center gap-1.5 transition-all shadow-md"
                        >
                          <span>{company.urlLabel}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 flex items-center justify-center transition-all">
                          <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Subsidiary Deep-Dive Interactive Modal */}
        <AnimatePresence>
          {selectedSub && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSub(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full bg-[#0d041e] border border-white/20 rounded-3xl p-6 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedSub(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-300 hover:text-white transition-all"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedSub.gradient} flex items-center justify-center shadow-lg`}>
                    <selectedSub.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                        {selectedSub.ownership}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">
                        {selectedSub.founded}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                      {selectedSub.name}
                    </h3>
                  </div>
                </div>

                {/* Executive Leadership & Scale */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-gray-400 uppercase font-bold">Executive Leadership</div>
                      <div className="text-sm font-semibold text-white">{selectedSub.leadership}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-gray-400 uppercase font-bold">Market Footprint</div>
                      <div className="text-sm font-semibold text-white">{selectedSub.scale}</div>
                    </div>
                  </div>
                </div>

                {/* Deep Dive Description */}
                <div className="mb-6">
                  <h4 className="text-sm uppercase font-bold tracking-wider text-gray-400 mb-2">
                    Subsidiary Overview &amp; Mandate
                  </h4>
                  <p className="text-gray-200 text-base leading-relaxed">
                    {selectedSub.deepDiveText}
                  </p>
                </div>

                {/* Parent Company Synergy */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-sm font-bold text-white mb-1">
                        CSREXUS Holdings Synergy &amp; Integration
                      </h5>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {selectedSub.synergyPoint}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedSub(null)}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all"
                  >
                    Close Window
                  </button>
                  {selectedSub.url && (
                    <a
                      href={selectedSub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:brightness-110 text-black font-extrabold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                    >
                      <span>Visit {selectedSub.urlLabel}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href="#contact"
                    onClick={() => setSelectedSub(null)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
                  >
                    <span>Inquire About {selectedSub.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
