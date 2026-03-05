import { motion } from 'motion/react';
import { Code2, GraduationCap, Building2, Sparkles, Zap, ExternalLink } from 'lucide-react';

const companies = [
  {
    icon: Code2,
    name: 'MujCode',
    description: 'Comprehensive coding and placement platform connecting students with top tech opportunities.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Sparkles,
    name: 'Future Skill Labs',
    description: 'Advanced skill development programs designed for the future of work.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Building2,
    name: 'CampusX',
    description: 'Complete campus management system for modern educational institutions.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: GraduationCap,
    name: 'EduStream',
    description: 'Next-generation learning management and content delivery platform.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Zap,
    name: 'InstaTech Solutions',
    description: 'Rapid deployment tools for institutional digital transformation.',
    gradient: 'from-indigo-500 to-blue-500',
  },
];

export function Ecosystem() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#1a0b2e] to-[#0f0520] overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
            Our Ecosystem
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontWeight: 400 }}>
            A comprehensive suite of platforms designed to revolutionize education technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, index) => {
            const Icon = company.icon;
            return (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                  {/* Animated glow on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${company.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
                  
                  <div className="relative">
                    {/* Logo placeholder */}
                    <div className={`w-14 h-14 mb-4 bg-gradient-to-br ${company.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-xl mb-3 text-white" style={{ fontWeight: 600 }}>
                      {company.name}
                    </h3>

                    <p className="text-gray-400 mb-6 text-sm" style={{ fontWeight: 400 }}>
                      {company.description}
                    </p>

                    <button className={`group/btn flex items-center gap-2 text-sm bg-gradient-to-r ${company.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity`} style={{ fontWeight: 600 }}>
                      Visit Platform
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
