import { motion } from 'motion/react';
import { Code2, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Ecosystem', href: '#ecosystem' },
  { name: 'Services', href: '#services' },
  { name: 'Leadership', href: '#leadership' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-[#0a0015]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300 ${scrolled ? 'shadow-lg shadow-purple-500/10' : ''}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl text-white" style={{ fontWeight: 700 }}>
              CSREXUS
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors"
                style={{ fontWeight: 500 }}
              >
                {link.name}
              </a>
            ))}
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all hover:scale-105">
              <span className="text-white" style={{ fontWeight: 600 }}>
                Get Started
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-white/10"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors py-2"
                  style={{ fontWeight: 500 }}
                >
                  {link.name}
                </a>
              ))}
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all">
                <span className="text-white" style={{ fontWeight: 600 }}>
                  Get Started
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}