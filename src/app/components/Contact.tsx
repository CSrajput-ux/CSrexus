import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github, Instagram } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0f0520] to-[#1a0b2e] overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontWeight: 400 }}>
            Ready to transform your institution? Let's start a conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-gray-300 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                  placeholder="Your institution or company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <button
                type="submit"
                className="group w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
              >
                <span className="flex items-center justify-center gap-2 text-white" style={{ fontWeight: 600 }}>
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white mb-1" style={{ fontWeight: 600 }}>
                    Email
                  </h4>
                  <p className="text-gray-400" style={{ fontWeight: 400 }}>
                    contact@csrexus.com
                  </p>
                  <p className="text-gray-400" style={{ fontWeight: 400 }}>
                    support@csrexus.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white mb-1" style={{ fontWeight: 600 }}>
                    Phone
                  </h4>
                  <p className="text-gray-400" style={{ fontWeight: 400 }}>
                    +1 (555) 123-4567
                  </p>
                  <p className="text-gray-400" style={{ fontWeight: 400 }}>
                    +1 (555) 987-6543
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white mb-1" style={{ fontWeight: 600 }}>
                    Office
                  </h4>
                  <p className="text-gray-400" style={{ fontWeight: 400 }}>
                    123 Innovation Drive
                    <br />
                    Tech Park, Silicon Valley
                    <br />
                    CA 94025, United States
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <h4 className="text-white mb-4" style={{ fontWeight: 600 }}>
                Connect With Us
              </h4>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Github, href: '#' },
                  { icon: Instagram, href: '#' },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:border-transparent transition-all hover:scale-110"
                    >
                      <Icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
