import { motion } from 'motion/react';
import { Code2, Menu, X, Globe, ShieldCheck, TrendingUp, Building2, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

import companyLogo from '@/assets/company-logo.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Group Overview', href: '#about' },
  { name: 'Our Subsidiaries', href: '#ecosystem' },
  { name: 'Synergy Engine', href: '#synergy' },
  { name: 'Venture Studio', href: '#venture-studio' },
  { name: 'Investor Relations', href: '#investors' },
  { name: 'Governance', href: '#leadership' },
  { name: 'Newsroom', href: '#newsroom' },
  { name: 'Contact Group', href: '#contact' },
];

const tickerItems = [
  { label: 'HOLDING GROUP', value: 'CSREXUS HOLDINGS', icon: Building2 },
  { label: 'PORTFOLIO SCALE', value: '8 INTEGRATED SUBSIDIARIES', icon: Sparkles },
  { label: 'ACADEMIC NETWORK', value: '250+ CONNECTED UNIVERSITIES', icon: Globe },
  { label: 'STUDENT & FACULTY ACCOUNTS', value: '1.2M+ ACTIVE USERS', icon: TrendingUp },
  { label: 'SECURITY & GOVERNANCE', value: 'ISO 27001 CERTIFIED', icon: ShieldCheck },
  { label: 'ESG RATING', value: 'AA+ SUSTAINABLE GROUP', icon: Building2 },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Live Holding Group Ticker Bar */}
      <div className="bg-[#07000e] border-b border-white/10 text-xs py-1.5 px-4 overflow-hidden relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-amber-400 font-semibold tracking-wider uppercase">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Live Group Index</span>
          </div>

          <div className="hidden md:flex items-center gap-8 overflow-hidden">
            {tickerItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-1.5 whitespace-nowrap">
                  <Icon className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-gray-400 font-medium">{item.label}:</span>
                  <span className="text-white font-semibold">{item.value}</span>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-3 text-gray-400 font-medium">
            <span className="hidden sm:inline">GLOBAL HEADQUARTERS • SILICON VALLEY, CA</span>
            <span className="px-1.5 py-0.5 rounded bg-white/10 text-white text-[10px] font-bold uppercase tracking-wider">
              PRIVATE HOLDING
            </span>
          </div>
        </div>
      </div>

      {/* Main Corporate Navigation */}
      <nav
        className={`bg-[#0a0015]/85 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ${
          scrolled ? 'shadow-2xl shadow-purple-900/20 py-1' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/10 border border-white/20 p-1.5 flex items-center justify-center shadow-lg shadow-purple-950/40 group-hover:scale-105 transition-transform">
                <img src={companyLogo} alt="CSREXUS Holdings Group Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl text-white tracking-tight font-extrabold">
                    CSREXUS
                  </span>
                  <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-widest bg-gradient-to-r from-amber-400/20 to-purple-500/20 text-amber-300 border border-amber-400/30 rounded-md">
                    GROUP
                  </span>
                </div>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest -mt-1">
                  HOLDING COMPANY
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-white transition-colors font-medium relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-400 after:to-purple-500 hover:after:w-full after:transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#investors"
                className="px-4 py-2 text-sm text-gray-300 hover:text-white border border-white/15 hover:border-white/30 rounded-lg transition-all font-semibold"
              >
                Investor Portal
              </a>
              <a
                href="#ecosystem"
                className="px-5 py-2.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 rounded-lg hover:brightness-110 transition-all hover:scale-105 shadow-lg shadow-purple-500/20 font-semibold text-white text-sm"
              >
                Explore Portfolio
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden w-10 h-10 flex items-center justify-center text-white rounded-lg bg-white/5 border border-white/10"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="xl:hidden py-6 border-t border-white/10"
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-white transition-colors py-2 px-4 rounded-lg hover:bg-white/5 font-medium"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                  <a
                    href="#investors"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center px-4 py-2.5 text-sm text-white border border-white/20 rounded-lg font-semibold"
                  >
                    Investor Portal
                  </a>
                  <a
                    href="#ecosystem"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white text-sm"
                  >
                    Explore Portfolio Companies
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
}