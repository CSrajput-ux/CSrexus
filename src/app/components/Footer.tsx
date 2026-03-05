import { Code2 } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0015] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl text-white" style={{ fontWeight: 700 }}>
                CSREXUS
              </span>
            </div>
            <p className="text-gray-400 text-sm" style={{ fontWeight: 400 }}>
              Building the future of college ecosystems through innovative digital infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4" style={{ fontWeight: 600 }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['About Us', 'Our Ecosystem', 'Services', 'Leadership', 'Careers'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                    style={{ fontWeight: 400 }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem Links */}
          <div>
            <h4 className="text-white mb-4" style={{ fontWeight: 600 }}>
              Our Ecosystem
            </h4>
            <ul className="space-y-2">
              {['MujCode', 'Future Skill Labs', 'CampusX', 'EduStream', 'InstaTech'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                    style={{ fontWeight: 400 }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white mb-4" style={{ fontWeight: 600 }}>
              Legal
            </h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Data Security', 'Compliance'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                    style={{ fontWeight: 400 }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm" style={{ fontWeight: 400 }}>
            © {currentYear} CSREXUS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm" style={{ fontWeight: 400 }}>
              Sitemap
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm" style={{ fontWeight: 400 }}>
              Accessibility
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm" style={{ fontWeight: 400 }}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
