import { motion } from 'motion/react';
import { Cpu, ShieldCheck, KeyRound, Network, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const synergyLayers = [
  {
    id: 'auth',
    title: 'CSREXUS ID (Unified Identity Fabric)',
    subtitle: 'Single sign-on & cross-platform academic credentials',
    icon: KeyRound,
    color: 'from-blue-500 to-cyan-500',
    textColor: 'text-blue-400',
    borderColor: 'border-blue-500/40',
    bgGlow: 'bg-blue-600/10',
    description: 'A single zero-trust identity layer (CSREXUS ID) that authenticates 1.2M+ students, professors, and university administrators across MujCode, CampusX, EduStream, and all group subsidiaries.',
    benefits: [
      'Zero student password fatigue across 8 platforms',
      'Real-time degree and transcript portability via cryptographic verification',
      'Automated role-based access control (RBAC) for university deans & depts',
    ],
  },
  {
    id: 'ai',
    title: 'Cognitive AI & SLM Research Fabric',
    subtitle: 'Shared educational Small Language Models (SLMs)',
    icon: Cpu,
    color: 'from-purple-500 to-indigo-500',
    textColor: 'text-purple-400',
    borderColor: 'border-purple-500/40',
    bgGlow: 'bg-purple-600/10',
    description: 'Rather than every subsidiary building isolated AI models, our central CSREXUS AI Research lab trains proprietary pedagogical models that are shared via low-latency API hooks across all portfolio companies.',
    benefits: [
      'Automated hackathon & code grading inside MujCode',
      'AI-assisted attendance & retention prediction in CampusX ERP',
      '24/7 autonomous pedagogical co-pilots inside EduStream LMS',
    ],
  },
  {
    id: 'security',
    title: 'Nexus Zero-Trust Compliance Grid',
    subtitle: 'ISO 27001 & regulatory data protection firewall',
    icon: ShieldCheck,
    color: 'from-emerald-500 to-teal-500',
    textColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/40',
    bgGlow: 'bg-emerald-600/10',
    description: 'Our subsidiary Nexus CyberSecurity enforces uniform encryption, biometric proctoring verification, and compliance with FERPA, GDPR, and Indian Data Privacy laws across the entire holding group.',
    benefits: [
      '100% audit-ready data compliance for partner universities',
      'Biometric examination security with tamper-proof audit trails',
      'Centralized threat detection and automated DDoS mitigation',
    ],
  },
  {
    id: 'gtm',
    title: 'Global Institutional Distribution Engine',
    subtitle: 'Unified enterprise sales & 250+ university contracts',
    icon: Network,
    color: 'from-amber-500 to-orange-500',
    textColor: 'text-amber-400',
    borderColor: 'border-amber-500/40',
    bgGlow: 'bg-amber-600/10',
    description: 'New subsidiaries acquired or incubated by CSREXUS Holdings instantly tap into our established procurement relationships with 250+ university presidents, deans, and state education boards.',
    benefits: [
      '65% faster enterprise procurement & contract closing',
      'Cross-selling synergy between ERP, placement, and LMS suites',
      'Dedicated 24/7 cloud migration taskforce (InstaTech)',
    ],
  },
];

export function GroupArchitecture() {
  const [activeLayerId, setActiveLayerId] = useState('auth');
  const activeLayer = synergyLayers.find((l) => l.id === activeLayerId) || synergyLayers[0];

  return (
    <section id="synergy" className="relative py-28 bg-gradient-to-b from-[#0a0015] via-[#0b0319] to-[#0a0015] overflow-hidden border-t border-white/10">
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
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-xs font-bold uppercase tracking-wider">
              Holding Group Synergy &amp; Shared Infrastructure
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white">
            The Parent-Subsidiary <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-purple-300 via-white to-blue-300 bg-clip-text text-transparent">
              Synergy Engine
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Why do our subsidiaries outperform standalone software companies? Because they run on the shared <strong className="text-white">CSREXUS Holdings Core</strong> — a centralized infrastructure stack that powers every portfolio venture.
          </p>
        </motion.div>

        {/* Interactive Architecture Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Clickable Synergy Layers */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-4 px-2">
              Select Shared Parent Infrastructure Layer
            </h3>
            {synergyLayers.map((layer) => {
              const Icon = layer.icon;
              const isActive = layer.id === activeLayerId;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayerId(layer.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    isActive
                      ? 'bg-gradient-to-r from-white/15 to-white/5 border-amber-400/60 shadow-xl shadow-purple-950/40 scale-[1.02]'
                      : 'bg-white/5 hover:bg-white/10 border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-0.5">{layer.title}</h4>
                      <p className="text-xs text-gray-400">{layer.subtitle}</p>
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isActive ? 'bg-amber-400 text-black' : 'text-gray-500'}`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Synergy Explanation Card */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeLayer.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className={`p-8 md:p-10 rounded-3xl bg-gradient-to-b from-white/[0.1] to-white/[0.04] border ${activeLayer.borderColor} backdrop-blur-2xl shadow-2xl relative overflow-hidden`}
            >
              <div className={`absolute -right-20 -bottom-20 w-64 h-64 ${activeLayer.bgGlow} rounded-full blur-3xl pointer-events-none`}></div>

              {/* Layer Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-white text-xs font-bold uppercase tracking-wider mb-6">
                <span>ACTIVE HOLDING GROUP LAYER</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${activeLayer.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <activeLayer.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                    {activeLayer.title}
                  </h3>
                  <p className={`text-sm font-semibold ${activeLayer.textColor}`}>
                    {activeLayer.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-gray-200 text-base leading-relaxed mb-8">
                {activeLayer.description}
              </p>

              {/* Benefits Checklist */}
              <div className="space-y-3 pt-6 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Synergy Advantage Across All 8 Subsidiaries
                </h4>
                {activeLayer.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-white">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
