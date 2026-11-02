import { motion } from 'motion/react';
import { ArrowRight, BrainCircuit, Code2, GraduationCap, Network, Sparkles } from 'lucide-react';

const focusAreas = [
  { title: 'Education technology', subtitle: 'Tools for learning and student growth', icon: GraduationCap },
  { title: 'Campus technology', subtitle: 'Connected academic experiences', icon: Network },
  { title: 'AI & applied research', subtitle: 'Responsible, practical experimentation', icon: BrainCircuit },
  { title: 'Software engineering', subtitle: 'Useful products and dependable systems', icon: Code2 },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pb-20 pt-36">
      <div className="absolute inset-0 bg-gradient-to-br from-[#07000f] via-[#0d031e] to-[#0a0015]" />
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-10 top-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-blue-600/15 blur-[130px]" />
        <div className="absolute bottom-10 right-10 h-[500px] w-[500px] animate-pulse rounded-full bg-purple-600/15 blur-[130px]" />
        <div className="absolute left-1/2 top-1/3 h-[350px] w-[650px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[140px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-15" style={{ backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 text-center sm:px-6">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md">
          <Sparkles className="h-4 w-4 text-amber-400" />
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300">Building useful digital products</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mb-6 text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Technology that
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-300 via-white to-purple-300 bg-clip-text text-transparent"> moves ideas forward.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-300 sm:text-xl md:text-2xl">
          <strong className="font-semibold text-white">CSREXUS</strong> is a technology initiative focused on education, campus experiences, applied AI, and software engineering.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#ecosystem" className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-purple-500/20 transition hover:scale-[1.02] hover:brightness-110 sm:w-auto">
            Explore our work <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </a>
          <a href="#contact" className="w-full rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-base font-bold text-white transition hover:border-white/30 hover:bg-white/10 sm:w-auto">
            Get in touch
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mx-auto grid max-w-6xl grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div key={area.title} className="rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-5 backdrop-blur-xl transition hover:border-amber-400/40">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Icon className="h-5 w-5 text-amber-300" />
                </div>
                <h2 className="mb-1 text-base font-bold text-white">{area.title}</h2>
                <p className="text-xs leading-relaxed text-gray-400">{area.subtitle}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
