import { motion } from 'motion/react';
import { BrainCircuit, Code2, GraduationCap, Network } from 'lucide-react';

const focusAreas = [
  {
    icon: GraduationCap,
    title: 'Education technology',
    detail: 'Learning tools and student-focused digital experiences.',
    tag: 'LEARNING',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Network,
    title: 'Campus operations',
    detail: 'Ideas for connected academic workflows and institutional systems.',
    tag: 'CAMPUS',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    icon: BrainCircuit,
    title: 'AI & applied research',
    detail: 'Practical experimentation with responsible, useful AI.',
    tag: 'RESEARCH',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Code2,
    title: 'Engineering & security',
    detail: 'Reliable software foundations, developer tools, and safer systems.',
    tag: 'ENGINEERING',
    gradient: 'from-amber-500 to-orange-500',
  },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#0a0015] via-[#0d041d] to-[#0a0015] py-24 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[170px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5">
            <Network className="h-4 w-4 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">Areas of focus</span>
          </div>
          <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Technology with
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-amber-200 via-white to-blue-200 bg-clip-text text-transparent"> a practical purpose</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
            CSREXUS brings together product thinking and engineering across education, campus technology, AI, and software infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.article key={area.tag} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="group rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-amber-400/40">
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${area.gradient} shadow-lg transition group-hover:scale-105`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-amber-300">{area.tag}</p>
                <h3 className="mb-3 text-xl font-bold text-white">{area.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{area.detail}</p>
              </motion.article>
            );
          })}
        </div>
        <p className="mt-8 text-center text-xs leading-relaxed text-gray-500">
          Portfolio descriptions and organisational information elsewhere on this site are provided by the project and should be independently verified before business or investment decisions.
        </p>
      </div>
    </section>
  );
}
