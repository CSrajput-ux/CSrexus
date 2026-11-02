import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { BrainCircuit, Code2, GraduationCap, Menu, Network, X } from 'lucide-react';
import companyLogo from '@/assets/company-logo.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Overview', href: '#about' },
  { name: 'Our Work', href: '#ecosystem' },
  { name: 'Technology', href: '#synergy' },
  { name: 'Venture Studio', href: '#venture-studio' },
  { name: 'Partnerships', href: '#investors' },
  { name: 'Governance', href: '#leadership' },
  { name: 'Updates', href: '#newsroom' },
  { name: 'Contact', href: '#contact' },
];

const focusItems = [
  { label: 'LEARNING', value: 'Education technology', icon: GraduationCap },
  { label: 'CAMPUS', value: 'Connected experiences', icon: Network },
  { label: 'RESEARCH', value: 'Applied AI', icon: BrainCircuit },
  { label: 'ENGINEERING', value: 'Software & systems', icon: Code2 },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="relative z-50 overflow-hidden border-b border-white/10 bg-[#07000e] px-4 py-2 text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <span className="flex shrink-0 items-center gap-2 font-semibold uppercase tracking-wider text-amber-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            CSREXUS
          </span>
          <div className="hidden items-center gap-6 overflow-hidden md:flex">
            {focusItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-1.5 whitespace-nowrap">
                  <Icon className="h-3.5 w-3.5 text-gray-400" />
                  <span className="font-medium text-gray-400">{item.label}:</span>
                  <span className="font-semibold text-white">{item.value}</span>
                </div>
              );
            })}
          </div>
          <span className="shrink-0 rounded bg-white/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-200">Technology initiative</span>
        </div>
      </div>

      <nav aria-label="Main navigation" className={`border-b border-white/10 bg-[#0a0015]/90 backdrop-blur-xl transition-shadow duration-300 ${scrolled ? 'shadow-2xl shadow-purple-900/20' : ''}`}>
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="flex h-[4.5rem] items-center justify-between">
            <a href="#home" onClick={closeMenu} className="group flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
              <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white/10 p-1.5 shadow-lg shadow-purple-950/40 transition group-hover:scale-105">
                <img src={companyLogo} alt="CSREXUS logo" className="h-full w-full object-contain" />
              </span>
              <span className="flex flex-col">
                <span className="flex items-center gap-1.5 text-xl font-extrabold tracking-tight text-white">
                  CSREXUS
                  <span className="rounded-md border border-amber-400/30 bg-amber-400/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-amber-300">TECH</span>
                </span>
                <span className="-mt-0.5 text-[9px] uppercase tracking-[0.2em] text-gray-400">Ideas into products</span>
              </span>
            </a>

            <div className="hidden items-center gap-5 xl:flex">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="relative py-2 text-xs font-medium text-gray-300 transition hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-400 after:to-purple-500 after:transition-all hover:after:w-full">
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <a href="#contact" className="rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-gray-200 transition hover:border-white/30 hover:text-white">Contact</a>
              <a href="#ecosystem" className="rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:brightness-110">Explore work</a>
            </div>

            <button type="button" onClick={() => setIsOpen((open) => !open)} className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 xl:hidden" aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isOpen} aria-controls="mobile-navigation">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {isOpen && (
            <motion.div id="mobile-navigation" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="border-t border-white/10 py-5 xl:hidden">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={closeMenu} className="rounded-lg px-4 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
                    {link.name}
                  </a>
                ))}
              </div>
              <a href="#ecosystem" onClick={closeMenu} className="mt-4 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-sm font-semibold text-white">
                Explore our work
              </a>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
}
