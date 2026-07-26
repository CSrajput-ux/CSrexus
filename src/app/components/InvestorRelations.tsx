import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  FileText, 
  Download, 
  ShieldCheck, 
  Building2, 
  Sparkles, 
  X, 
  CheckCircle2,
  ArrowRight,
  Scale,
  Lock,
  Globe2
} from 'lucide-react';
import { useState } from 'react';

const capitalPillars = [
  {
    title: 'Non-Dilutive R&D Reinvestment',
    subtitle: 'CENTRAL LABS & AI INFRASTRUCTURE',
    description: 'We allocate significant holding group cash flow directly into our central CSREXUS AI Research lab and shared campus tech, ensuring all 8 subsidiaries inherit cutting-edge pedagogical models.',
    icon: Sparkles,
    gradient: 'from-blue-500 to-cyan-500',
    stat: '12 Global Labs',
  },
  {
    title: 'Strategic Portfolio M&A Scale',
    subtitle: 'WHOLLY OWNED & MAJORITY STAKES',
    description: 'We acquire majority and wholly owned equity stakes in high-retention EdTech platforms and campus ERP innovators, integrating them into our 250+ university distribution network.',
    icon: Building2,
    gradient: 'from-purple-500 to-indigo-500',
    stat: '8 Operating Platforms',
  },
  {
    title: 'Sustainable ARR Discipline',
    subtitle: 'MULTI-YEAR INSTITUTIONAL CONTRACTS',
    description: 'Our portfolio balance sheet is underpinned by multi-year institutional software contracts with universities and state education boards, generating predictable, low-churn recurring revenue.',
    icon: TrendingUp,
    gradient: 'from-amber-400 to-yellow-500',
    stat: '99.4% Contract Retention',
  },
];

const governanceReports = [
  {
    title: 'Audited Group Balance Sheet & Financial Dossier',
    type: 'ANNUAL AUDIT SUMMARY',
    date: 'FY2026 AUDIT COMPLETED',
    highlight: 'Comprehensive audit of all 8 subsidiary balance sheets by independent top-4 accounting partners.',
    badge: 'AUDITED FY26',
    icon: FileText,
  },
  {
    title: 'ESG & Sustainability Manifesto',
    type: 'ESG COMPLIANCE REPORT',
    date: 'ANNUAL RATING RENEWED',
    highlight: 'AA+ Rating certification, carbon-neutral university server footprint and green data center operations.',
    badge: 'AA+ RATED',
    icon: Globe2,
  },
  {
    title: 'Corporate Governance & Whistleblower Charter',
    type: 'GOVERNANCE POLICY',
    date: 'BOARD CHARTER ACTIVE',
    highlight: 'Independent board supervisory rules, audit committee charter, and institutional compliance standards.',
    badge: 'ISO 27001',
    icon: Scale,
  },
];

export function InvestorRelations() {
  const [showDossierModal, setShowDossierModal] = useState(false);

  return (
    <section id="investors" className="relative py-28 bg-gradient-to-b from-[#0a0015] via-[#0d031e] to-[#0a0015] overflow-hidden border-t border-white/10">
      {/* Background illumination */}
      <div className="absolute top-1/4 right-10 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[170px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-10 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[170px] pointer-events-none"></div>

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
            <TrendingUp className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-xs font-bold uppercase tracking-wider">
              Capital Allocation &amp; Holding Governance
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white">
            Capital Allocation Strategy &amp; <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-300 via-white to-amber-300 bg-clip-text text-transparent">
              Audited Governance Framework
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed">
            As an independent technology holding group, <strong className="text-white">CSREXUS Holdings</strong> maintains strict capital stewardship, audited subsidiary reporting, and multi-year institutional ARR retention across all 8 operating platforms.
          </p>
        </motion.div>

        {/* Capital Allocation Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {capitalPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative flex flex-col justify-between"
              >
                <div className="relative h-full p-8 rounded-3xl bg-gradient-to-b from-white/[0.09] to-white/[0.03] border border-white/15 hover:border-amber-400/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-300 uppercase tracking-wider">
                        {pillar.stat}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 leading-snug">
                      {pillar.title}
                    </h3>

                    <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-4">
                      {pillar.subtitle}
                    </p>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-white transition-colors">
                    <span>Holding Capital Mandate</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Governance Reports & Institutional Disclosures */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-extrabold text-white mb-1">
                Audited Governance Reports &amp; Institutional Disclosures
              </h3>
              <p className="text-sm text-gray-400">
                Official governance charters, independent accounting certifications, and ESG reporting standards.
              </p>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-amber-300 font-bold uppercase">
              ISO 27001 COMPLIANT
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {governanceReports.map((doc, idx) => {
              const Icon = doc.icon;
              return (
                <div
                  key={idx}
                  className="group p-7 rounded-3xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/15 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-amber-300" />
                      </div>
                      <span className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30">
                        {doc.badge}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                      {doc.type}
                    </div>

                    <h4 className="text-xl font-bold text-white mb-2 leading-snug">
                      {doc.title}
                    </h4>

                    <p className="text-xs text-gray-400 mb-6">
                      {doc.highlight}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-gray-400">{doc.date}</span>
                    <button
                      onClick={() => setShowDossierModal(true)}
                      className="flex items-center gap-1.5 text-xs font-bold text-blue-400 group-hover:text-amber-300 transition-colors"
                    >
                      <span>Request Official Dossier</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Shareholder & Institutional Inquiry Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-900/30 via-purple-900/40 to-blue-900/30 border border-white/15 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-1">
              Accredited Shareholder &amp; M&amp;A Capital Allocation Desk
            </h3>
            <p className="text-sm text-gray-300">
              For accredited family offices, institutional venture partners, and university chancellors seeking official disclosures.
            </p>
          </div>
          <button
            onClick={() => setShowDossierModal(true)}
            className="flex-shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-purple-900/30 flex items-center gap-2"
          >
            <span>Request Audited Financial Dossier</span>
            <Lock className="w-4 h-4" />
          </button>
        </div>

        {/* Official Corporate Dossier Request Modal */}
        <AnimatePresence>
          {showDossierModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDossierModal(false)}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-2xl w-full bg-[#0d041e] border border-white/20 rounded-3xl p-6 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
              >
                <button
                  onClick={() => setShowDossierModal(false)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-300 hover:text-white transition-all"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 rounded bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30 uppercase tracking-wider">
                    CONFIDENTIAL DISCLOSURE DESK
                  </span>
                  <span className="text-xs text-gray-400">ISO 27001 Secure Routing</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                  Request Audited Holding Group Financial &amp; Governance Dossier
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  Official financial balance sheets and shareholder charters are released to accredited university presidents, state education boards, and verified institutional partners.
                </p>

                <div className="space-y-4 text-gray-300 text-sm leading-relaxed mb-8 p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">Independent Accounting &amp; Audit Verification</strong>
                      <span>All subsidiary balance sheets are independently audited annually with zero material weaknesses.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">Zero Data Breaches &amp; FERPA/GDPR Compliance</strong>
                      <span>Student records and financial transactions are protected by zero-trust encryption across all 8 portfolio platforms.</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-4 border-t border-white/10">
                  <button
                    onClick={() => setShowDossierModal(false)}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all"
                  >
                    Close Window
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setShowDossierModal(false)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-900/30"
                  >
                    <span>Proceed to Executive Contact Desk</span>
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
