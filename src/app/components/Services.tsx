import { motion } from 'motion/react';
import { BookOpen, Code, FileCheck, Brain, Database, Wrench } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: 'Academic Management Systems',
    description: 'Comprehensive tools for curriculum, scheduling, and academic administration.',
  },
  {
    icon: Code,
    title: 'Coding & Placement Solutions',
    description: 'End-to-end platform for technical training and career placement.',
  },
  {
    icon: FileCheck,
    title: 'Digital Examination System',
    description: 'Secure, scalable online examination and assessment platform.',
  },
  {
    icon: Brain,
    title: 'AI-based Student Analytics',
    description: 'Advanced analytics for personalized learning and performance tracking.',
  },
  {
    icon: Database,
    title: 'Institutional ERP',
    description: 'Complete enterprise resource planning for educational institutions.',
  },
  {
    icon: Wrench,
    title: 'Custom Software Development',
    description: 'Tailored technology solutions designed for your unique needs.',
  },
];

export function Services() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0f0520] via-[#1a0b2e] to-[#0f0520] overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontWeight: 400 }}>
            Comprehensive technology solutions tailored for educational excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
                  {/* Gradient glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/5 group-hover:to-cyan-500/10 transition-all duration-300"></div>
                  
                  <div className="relative flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl mb-2 text-white" style={{ fontWeight: 600 }}>
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm" style={{ fontWeight: 400 }}>
                        {service.description}
                      </p>
                    </div>
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
