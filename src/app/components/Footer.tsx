import { ArrowUpRight } from 'lucide-react';
import companyLogo from '@/assets/company-logo.png';

const workLinks = [
  { name: 'MujCode', href: 'https://www.mujcode.in', external: true },
  { name: 'CampusX', href: '#ecosystem' },
  { name: 'Future Skill Labs', href: '#ecosystem' },
  { name: 'EduStream', href: '#ecosystem' },
  { name: 'InstaTech Solutions', href: '#ecosystem' },
  { name: 'CSREXUS AI Research', href: '#ecosystem' },
  { name: 'Nexus CyberSecurity', href: '#ecosystem' },
  { name: 'EduCapital Ventures', href: '#ecosystem' },
];

const companyLinks = [
  { name: 'About CSREXUS', href: '#about' },
  { name: 'Product portfolio', href: '#ecosystem' },
  { name: 'Technology approach', href: '#synergy' },
  { name: 'Venture studio', href: '#venture-studio' },
  { name: 'Leadership & governance', href: '#leadership' },
];

const resourceLinks = [
  { name: 'Updates & initiatives', href: '#newsroom' },
  { name: 'Partnership enquiries', href: '#contact' },
  { name: 'General contact', href: '#contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#07000e] text-gray-400">
      <div className="border-b border-white/10 bg-white/[0.02]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-5 text-xs sm:px-6">
          <span className="font-bold uppercase tracking-wider text-amber-300">CSREXUS · Technology & product initiatives</span>
          <span className="text-gray-500">Education · Campus · AI · Engineering</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="group mb-4 inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white/10 p-1.5 transition group-hover:scale-105">
                <img src={companyLogo} alt="CSREXUS logo" className="h-full w-full object-contain" />
              </span>
              <span>
                <span className="block text-xl font-extrabold tracking-tight text-white">CSREXUS</span>
                <span className="block text-[9px] uppercase tracking-[0.2em] text-gray-500">Ideas into products</span>
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-gray-400">
              Exploring technology across education, campus experiences, applied AI, and software engineering.
            </p>
          </div>

          <div>
            <h3 className="mb-5 border-b border-white/10 pb-2 text-xs font-bold uppercase tracking-widest text-white">Products & initiatives</h3>
            <ul className="space-y-3 text-sm">
              {workLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noopener noreferrer' : undefined} className="group flex items-center justify-between transition hover:text-amber-300">
                    <span>{link.name}</span>
                    {link.external && <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition group-hover:opacity-100" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 border-b border-white/10 pb-2 text-xs font-bold uppercase tracking-widest text-white">Explore</h3>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link) => <li key={link.name}><a href={link.href} className="transition hover:text-white">{link.name}</a></li>)}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 border-b border-white/10 pb-2 text-xs font-bold uppercase tracking-widest text-white">Connect</h3>
            <ul className="space-y-3 text-sm">
              {resourceLinks.map((link) => <li key={link.name}><a href={link.href} className="transition hover:text-white">{link.name}</a></li>)}
            </ul>
            <a href="#contact" className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-amber-400/50 hover:text-amber-200">
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 text-xs md:flex-row md:items-center">
          <p className="leading-relaxed text-gray-500">© {currentYear} CSREXUS. All rights reserved. Confirm the registered legal entity and applicable terms before publishing contractual or legal notices.</p>
          <div className="flex flex-wrap gap-5 text-gray-500">
            <a href="#home" className="transition hover:text-gray-300">Back to top</a>
            <a href="#contact" className="transition hover:text-gray-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
