import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const founder = {
  name: 'Rajesh Kumar',
  role: 'Founder & CEO',
  image: 'https://images.unsplash.com/photo-1758691737644-ef8be18256c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMGZvdW5kZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzE2Nzc2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  bio: 'With over 15 years of experience in education technology, Rajesh founded CSREXUS to bridge the gap between traditional education and modern digital infrastructure.',
  quote: '"Our mission is not just to build software, but to create ecosystems that empower the next generation of learners and educators."',
};

const team = [
  {
    name: 'Priya Sharma',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1762341118325-23fece6a2508?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwdGVjaG5vbG9neSUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NzE2Nzc2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'David Chen',
    role: 'VP of Engineering',
    image: 'https://images.unsplash.com/photo-1621388840685-3a530c4cd20c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwdGVjaCUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3MTY3NzY5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Sarah Johnson',
    role: 'Head of Product',
    image: 'https://images.unsplash.com/photo-1532618793091-ec5fe9635fbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcHJvZmVzc2lvbmFsJTIwZGV2ZWxvcGVyJTIwdGVhbSUyMG1lbWJlcnxlbnwxfHx8fDE3NzE2Nzc2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Marcus Williams',
    role: 'VP of Business Development',
    image: 'https://images.unsplash.com/photo-1645736593932-2c877741fd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYW1lcmljYW4lMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTY3NzY5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Leadership() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0f0520] to-[#1a0b2e] overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
            Leadership
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontWeight: 400 }}>
            Visionaries driving innovation in education technology.
          </p>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="relative p-8 md:p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent"></div>
            
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              {/* Founder Image */}
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-purple-500/30 ring-offset-4 ring-offset-transparent">
                  <ImageWithFallback
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Founder Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl mb-2 text-white" style={{ fontWeight: 700 }}>
                  {founder.name}
                </h3>
                <p className="text-purple-400 mb-4" style={{ fontWeight: 600 }}>
                  {founder.role}
                </p>
                <p className="text-gray-300 mb-6" style={{ fontWeight: 400 }}>
                  {founder.bio}
                </p>

                {/* Quote */}
                <div className="relative p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <Quote className="absolute top-4 left-4 w-8 h-8 text-purple-500/30" />
                  <p className="text-gray-200 italic pl-8" style={{ fontWeight: 400 }}>
                    {founder.quote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h3 className="text-3xl text-center mb-12 text-white" style={{ fontWeight: 600 }}>
            Core Team
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 text-center">
                {/* Member Image */}
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-purple-500/50 transition-all">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="text-xl mb-1 text-white" style={{ fontWeight: 600 }}>
                  {member.name}
                </h4>
                <p className="text-sm text-purple-400" style={{ fontWeight: 500 }}>
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
