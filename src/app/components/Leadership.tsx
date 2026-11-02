import { motion } from 'motion/react';
import { ShieldCheck, Award, Users, Scale, Building2, Network, CheckCircle2, ArrowRight } from 'lucide-react';

const governingBodies = [
  {
    title: 'Board of Directors & Supervisory Committee',
    mandate: 'Independent Governance & Fiduciary Oversight',
    structure: 'Governance structure to be confirmed',
    description: 'A proposed governance function for strategic oversight, accountability, and responsible decision-making as the organisation develops.',
    icon: ShieldCheck,
    gradient: 'from-amber-400 to-yellow-500',
    borderHover: 'hover:border-amber-400/50',
    keyResponsibilities: [
      'Multi-decade holding group strategy & capital stewardship',
      'Executive committee appointments & subsidiary CEO reviews',
      'Shareholder equity protection & fiduciary risk management',
    ],
  },
  {
    title: 'Executive Holding Committee (Operating Board)',
    mandate: 'Group Strategy, Capital Allocation & Subsidiary Synergies',
    structure: 'Operating roles to be confirmed',
    description: 'A proposed operating function for coordinating priorities, delivery, and shared resources across active products and teams.',
    icon: Building2,
    gradient: 'from-blue-500 to-cyan-500',
    borderHover: 'hover:border-blue-500/50',
    keyResponsibilities: [
      'Coordinate shared technology priorities where appropriate',
      'Enterprise sales coordination across subsidiary product lines',
      'Resource allocation between EdTech, ERP, and AI divisions',
    ],
  },
  {
    title: 'Venture & Acquisitions (M&A) Directorate',
    mandate: 'Venture Studio Incubation & Strategic Stakes',
    structure: 'Partnership and product roles',
    description: 'A proposed function for evaluating product opportunities, collaborations, and potential venture development.',
    icon: Network,
    gradient: 'from-purple-500 to-indigo-500',
    borderHover: 'hover:border-purple-500/50',
    keyResponsibilities: [
      'Identification of early-stage EdTech & campus ERP founders',
      '3-stage incubation & testbed deployment across partner campuses',
      'Balance sheet integration for newly acquired group subsidiaries',
    ],
  },
  {
    title: 'Audit, Risk & Data Sovereignty Committee',
    mandate: 'ISO 27001 Security, Academic Compliance & ESG Standard',
    structure: 'Risk and security responsibilities',
    description: 'A proposed function for identifying operational, privacy, security, and financial risks and tracking appropriate controls.',
    icon: Scale,
    gradient: 'from-emerald-500 to-teal-500',
    borderHover: 'hover:border-emerald-500/50',
    keyResponsibilities: [
      'Document security controls and review them periodically',
      'Assess privacy obligations relevant to each product and market',
      'Track sustainability commitments using appropriate evidence',
    ],
  },
];

const governanceCredentials = [
  { label: 'SECURITY GOVERNANCE', detail: 'Documented controls and independent review, where applicable', icon: ShieldCheck },
  { label: 'OVERSIGHT', detail: 'Roles and responsibilities to be confirmed', icon: Users },
  { label: 'RISK MANAGEMENT', detail: 'Review cadence and independent assurance to be confirmed', icon: Scale },
  { label: 'SUSTAINABILITY', detail: 'Initiatives and external ratings to be confirmed', icon: Award },
];

export function Leadership() {
  return (
    <section id="leadership" className="relative py-28 bg-gradient-to-b from-[#0a0015] via-[#0e0420] to-[#0a0015] overflow-hidden border-t border-white/10">
      {/* Background illumination */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none"></div>

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
            <Building2 className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-xs font-bold uppercase tracking-wider">
              Governance approach
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white">
            Governance responsibilities &amp; <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-amber-200 via-white to-purple-200 bg-clip-text text-transparent">
              Executive Architecture
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed">
            A suggested framework for accountability, risk awareness, and responsible decision-making as CSREXUS and its products evolve.
          </p>
        </motion.div>

        <p className="mb-8 rounded-2xl border border-amber-400/20 bg-amber-400/5 px-5 py-4 text-sm leading-relaxed text-amber-100/90">
          Governance note: these cards describe suggested responsibilities only. They do not establish that a board, committee, independent director, audit, certification, or formal appointment currently exists.
        </p>

        {/* Corporate Governance Credentials Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {governanceCredentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-white uppercase tracking-wider">
                    {cred.label}
                  </div>
                  <div className="text-[11px] text-gray-400">
                    {cred.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Governing Bodies & Executive Committees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {governingBodies.map((body, index) => {
            const Icon = body.icon;
            return (
              <motion.div
                key={body.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col justify-between"
              >
                <div className={`relative h-full p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 ${body.borderHover} transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-950/40 flex flex-col justify-between`}>
                  <div>
                    {/* Top Bar */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${body.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-300 uppercase tracking-wider">
                        {body.structure}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-1.5 leading-snug">
                      {body.title}
                    </h3>

                    <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-4">
                      {body.mandate}
                    </p>

                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {body.description}
                    </p>

                    {/* Responsibilities Checklist */}
                    <div className="space-y-2.5 pt-6 border-t border-white/10">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                        Key Supervisory &amp; Executive Mandate
                      </h4>
                      {body.keyResponsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-200">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-white transition-colors">
                    <span>Inquire with Governance Desk</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Board & Shareholder Charter Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 border border-white/20 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-1">
              Request Official Holding Group Governance &amp; Audit Charter
            </h3>
            <p className="text-sm text-gray-300">
              For accredited university chancellors, government education boards, and institutional shareholders.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm hover:brightness-110 transition-all flex items-center gap-2 flex-shrink-0 shadow-lg shadow-purple-900/30"
          >
            <span>Contact Governance Desk</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
