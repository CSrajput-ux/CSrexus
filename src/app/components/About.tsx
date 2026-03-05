import { motion } from 'motion/react';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Pioneering cutting-edge solutions that transform educational technology.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Infrastructure',
    description: 'Building robust platforms that grow with your institution\'s needs.',
  },
  {
    icon: Target,
    title: 'Institutional Empowerment',
    description: 'Enabling colleges to focus on education while we handle technology.',
  },
];

export function About() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0f0520] to-[#1a0b2e] overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
            About CSREXUS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4" style={{ fontWeight: 400 }}>
            We are redefining the future of academic infrastructure through innovative technology solutions.
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto" style={{ fontWeight: 400 }}>
            Our mission is to empower educational institutions with comprehensive digital ecosystems that streamline operations, enhance learning experiences, and prepare students for the future of work.
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
                  
                  <div className="relative">
                    <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl mb-3 text-white" style={{ fontWeight: 600 }}>
                      {value.title}
                    </h3>
                    <p className="text-gray-400" style={{ fontWeight: 400 }}>
                      {value.description}
                    </p>
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
