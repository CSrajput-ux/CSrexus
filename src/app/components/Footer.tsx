import { Code2, Building2, ShieldCheck, Globe2, ArrowUpRight } from 'lucide-react';
import companyLogo from '@/assets/company-logo.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#07000e] border-t border-white/10 text-gray-400">
      {/* Top Conglomerate Strip */}
      <div className="border-b border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold">
          <div className="flex items-center gap-2 text-amber-300">
            <Building2 className="w-4 h-4" />
            <span>CSREXUS HOLDINGS GROUP — CONSOLIDATED CORPORATE DIRECTORY</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>ISO 27001 CERTIFIED</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-blue-400" />
              <span>250+ UNIVERSITIES</span>
            </span>
            <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
              AUDITED FY26
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Col 1: Brand & Overview */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-11 h-11 rounded-xl overflow-hidden bg-white/10 border border-white/20 p-1.5 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <img src={companyLogo} alt="CSREXUS Holdings Group Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-xl text-white font-extrabold tracking-tight">
                    CSREXUS
                  </span>
                  <span className="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    GROUP
                  </span>
                </div>
                <span className="text-[9px] text-gray-500 uppercase tracking-widest block -mt-1">
                  HOLDING COMPANY
                </span>
              </div>
            </a>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              A global technology holding company &amp; parent entity powering 8 independent digital infrastructure and higher education subsidiaries.
            </p>
            <div className="text-xs font-medium text-gray-500">
              Menlo Park, CA • Bangalore, India
            </div>
          </div>

          {/* Col 2: Group Portfolio (8 Subsidiaries) */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5 pb-2 border-b border-white/10">
              Group Subsidiaries (8)
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { name: 'MujCode (www.mujcode.in)', href: 'https://www.mujcode.in', external: true },
                { name: 'CampusX ERP (100% Owned)', href: '#ecosystem' },
                { name: 'Future Skill Labs (100% Owned)', href: '#ecosystem' },
                { name: 'EduStream LMS (100% Owned)', href: '#ecosystem' },
                { name: 'InstaTech Works (100% Owned)', href: '#ecosystem' },
                { name: 'CSREXUS AI Research', href: '#ecosystem' },
                { name: 'Nexus CyberSecurity (85%)', href: '#ecosystem' },
                { name: 'EduCapital Ventures', href: '#ecosystem' },
              ].map((sub, i) => (
                <li key={i}>
                  <a
                    href={sub.href}
                    target={sub.external ? '_blank' : undefined}
                    rel={sub.external ? 'noopener noreferrer' : undefined}
                    className="hover:text-amber-300 transition-colors flex items-center justify-between group"
                  >
                    <span>{sub.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Holding Governance & Board */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5 pb-2 border-b border-white/10">
              Governance &amp; Board
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { name: 'Board of Directors', href: '#leadership' },
                { name: 'Executive Holding Committee', href: '#leadership' },
                { name: 'Holding Mandate & Strategy', href: '#about' },
                { name: 'Venture Studio Incubation', href: '#venture-studio' },
                { name: 'ISO 27001 Security Charter', href: '#synergy' },
                { name: 'Audit & Risk Oversight', href: '#leadership' },
                { name: 'AA+ ESG Sustainability', href: '#investors' },
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Investor Relations & Newsroom */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5 pb-2 border-b border-white/10">
              Investors &amp; Newsroom
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { name: 'FY26 Group Annual Report', href: '#investors' },
                { name: 'Audited Revenue & Growth', href: '#investors' },
                { name: 'Shareholder Portal & FAQ', href: '#investors' },
                { name: 'M&A Acquisition Pitch', href: '#venture-studio' },
                { name: 'Official Press Releases', href: '#newsroom' },
                { name: 'Media Kit & Assets', href: '#newsroom' },
                { name: 'Whistleblower Charter', href: '#contact' },
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Legal & Compliance */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5 pb-2 border-b border-white/10">
              Legal &amp; Compliance
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                'Data Sovereignty Policy',
                'FERPA & GDPR Compliance',
                'Terms of Holding Service',
                'Cookie & Biometric Policy',
                'Anti-Bribery & Corruption',
                'Vulnerability Disclosure',
                'Indian DPDP Act Compliance',
              ].map((link, i) => (
                <li key={i}>
                  <a href="#contact" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-gray-500">
            © {currentYear} CSREXUS Holdings Group LLC. All rights reserved. Operating as an independent private holding entity.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-gray-500">
            <a href="#home" className="hover:text-gray-300 transition-colors">
              Holding Index
            </a>
            <a href="#investors" className="hover:text-gray-300 transition-colors">
              Shareholder Notice
            </a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">
              HQ Executive Desk
            </a>
            <a href="#home" className="hover:text-gray-300 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
