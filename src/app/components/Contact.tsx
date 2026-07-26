import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github, Building2, ShieldCheck, Globe2 } from 'lucide-react';
import { useState } from 'react';

const inquiryCategories = [
  { id: 'mna', label: 'M&A & Subsidiary Acquisitions', subtitle: 'Pitching for venture seed or group acquisition' },
  { id: 'partnership', label: 'Institutional Partnership', subtitle: 'Deploying CampusX or EduStream on campus' },
  { id: 'investors', label: 'Investor & Shareholder Relations', subtitle: 'Accredited family offices & capital allocation' },
  { id: 'general', label: 'Media & General Governance', subtitle: 'Press accreditation, ESG & compliance reports' },
];

export function Contact() {
  const [selectedCategory, setSelectedCategory] = useState('mna');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! Your inquiry (${selectedCategory.toUpperCase()}) has been securely routed to the CSREXUS Holdings executive committee.`);
    setFormData({ name: '', email: '', organization: '', role: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-28 bg-gradient-to-b from-[#0a0015] via-[#0d041e] to-[#0a0015] overflow-hidden border-t border-white/10">
      {/* Background illumination */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>

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
            <Building2 className="w-4 h-4 text-amber-400" />
            <span className="text-amber-300 text-xs font-bold uppercase tracking-wider">
              Corporate Headquarters &amp; Executive Desk
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white">
            Connect With The <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-amber-200 via-white to-blue-300 bg-clip-text text-transparent">
              Holding Group Executives
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Select your inquiry category to route directly to our M&amp;A directors, institutional partnership leads, or corporate governance desk.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {inquiryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-b from-white/15 to-white/5 border-amber-400 shadow-xl shadow-purple-950/40 scale-[1.02]'
                  : 'bg-white/5 hover:bg-white/10 border-white/10'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-white">{cat.label}</span>
                <div className={`w-3 h-3 rounded-full ${selectedCategory === cat.id ? 'bg-amber-400' : 'bg-gray-600'}`} />
              </div>
              <p className="text-xs text-gray-400 leading-normal">{cat.subtitle}</p>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 p-8 md:p-10 rounded-3xl bg-gradient-to-b from-white/[0.09] to-white/[0.03] border border-white/15 backdrop-blur-2xl shadow-2xl"
          >
            <div className="mb-6 pb-6 border-b border-white/10">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                SELECTED ROUTING DESK
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                {inquiryCategories.find((c) => c.id === selectedCategory)?.label}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase font-bold text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-all text-sm"
                    placeholder="Dr. Alistair Vance"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase font-bold text-gray-300 mb-2">
                    Corporate / University Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-all text-sm"
                    placeholder="a.vance@stanford.edu"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="organization" className="block text-xs uppercase font-bold text-gray-300 mb-2">
                    Institution / Company Name *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-all text-sm"
                    placeholder="Stanford University / Venture Corp"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-xs uppercase font-bold text-gray-300 mb-2">
                    Title / Role *
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-all text-sm"
                    placeholder="President / Founder / Partner"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase font-bold text-gray-300 mb-2">
                  Inquiry Mandate &amp; Message *
                  </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-all text-sm resize-none"
                  placeholder="Describe your M&A proposal, campus deployment requirements, or shareholder inquiry..."
                />
              </div>

              <button
                type="submit"
                className="group w-full py-4 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-amber-500 rounded-xl font-bold text-white text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-xl shadow-purple-900/30"
              >
                <span>Transmit to Holding Group Executive Desk</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Corporate Headquarters & Executive Desks */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Global HQ Card */}
            <div className="p-7 rounded-3xl bg-white/5 border border-white/15">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-amber-300 tracking-wider">
                    CORPORATE HEADQUARTERS
                  </span>
                  <h4 className="text-lg font-bold text-white">
                    Silicon Valley Holding HQ
                  </h4>
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                100 Innovation Drive, Executive Suite 800 <br />
                Menlo Park, CA 94025, United States
              </p>
            </div>

            {/* R&D & Asia HQ Card */}
            <div className="p-7 rounded-3xl bg-white/5 border border-white/15">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                  <Globe2 className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-blue-300 tracking-wider">
                    R&amp;D &amp; ASIA-PACIFIC HQ
                  </span>
                  <h4 className="text-lg font-bold text-white">
                    Bangalore Innovation Tower
                  </h4>
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                CSREXUS Tower, Embassy TechVillage <br />
                Outer Ring Road, Bangalore 560103, India
              </p>
            </div>

            {/* Dedicated Executive Routing Lines */}
            <div className="p-7 rounded-3xl bg-white/5 border border-white/15 space-y-4">
              <h4 className="text-sm uppercase font-bold tracking-wider text-gray-400 pb-3 border-b border-white/10">
                Direct Executive Channels
              </h4>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400 font-medium">Venture Studio &amp; M&amp;A:</span>
                <span className="text-amber-300 font-bold">mna@csrexus.com</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400 font-medium">Investor Relations:</span>
                <span className="text-blue-300 font-bold">investors@csrexus.com</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400 font-medium">Legal &amp; Governance:</span>
                <span className="text-purple-300 font-bold">governance@csrexus.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
