import { motion } from 'motion/react';
import { Building, Users, Shield, Headphones } from 'lucide-react';

const stats = [
  {
    icon: Building,
    value: '10+',
    label: 'Colleges Integrated',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    value: '50,000+',
    label: 'Students Managed',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Shield,
    value: '99%',
    label: 'System Reliability',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Headphones,
    value: '24/7',
    label: 'Support',
    gradient: 'from-orange-500 to-red-500',
  },
];

export function Stats() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#1a0b2e] to-[#0f0520] overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
            Why Choose CSREXUS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontWeight: 400 }}>
            Trusted by institutions for reliability, scale, and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 text-center">
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Value */}
                    <div className={`text-5xl mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`} style={{ fontWeight: 800 }}>
                      {stat.value}
                    </div>

                    {/* Label */}
                    <p className="text-gray-300" style={{ fontWeight: 500 }}>
                      {stat.label}
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
