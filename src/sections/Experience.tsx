import { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import experienceData from '../data/experience';
import ExperienceItem from '../components/ExperienceItem';

const containerVariants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut' as const,
      staggerChildren: 0.18,
      delayChildren: 0.05,
    },
  },
};

export default function Experience() {
  const prefersReducedMotion = useReducedMotion();
  const data = useMemo(() => experienceData, []);

  return (
    <section id="experience" className="pt-0">
      <div className="mx-auto w-full max-w-full px-8 md:px-12 lg:px-16">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold text-white">Experience Timeline</h2>
          <p className="text-sm text-neutral-400">
            Hands-on roles building ML platforms, streaming data systems, and interpretable ML.
          </p>
        </div>

        <div className="relative mt-10 pl-0 md:border-l md:border-white/10 md:pl-16">
          <span
            className="pointer-events-none absolute left-0 top-0 hidden h-full w-px md:left-8 md:block"
            aria-hidden="true"
          >
            <motion.span
              className="absolute inset-0 before:absolute before:left-1/2 before:top-0 before:block before:h-full before:w-[2px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-to-b before:from-cyan-300/60 before:via-cyan-400/30 before:to-transparent before:shadow-[0_0_32px_rgba(34,211,238,0.35)]"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
            />
          </span>
          <motion.div
            className="flex flex-col gap-8"
            variants={prefersReducedMotion ? undefined : containerVariants}
            initial={prefersReducedMotion ? undefined : 'initial'}
            whileInView={prefersReducedMotion ? undefined : 'animate'}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="sticky top-20 hidden h-12 items-center text-xs font-semibold uppercase tracking-[0.4em] text-neutral-500 md:flex md:pl-12">
              Now
            </div>
            {data.map((exp) => (
              <div key={exp.id} className="relative md:pl-12">
                {/* Timeline dot */}
                <div className="pointer-events-none absolute left-0 top-8 hidden md:flex md:translate-x-[-34px] md:flex-col md:items-center">
                  <motion.span
                    className="block size-3.5 rounded-full border-2 border-cyan-200 bg-cyan-400"
                    aria-hidden="true"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(94,234,212,0.55)",
                        "0 0 40px rgba(94,234,212,0.8)",
                        "0 0 20px rgba(94,234,212,0.55)",
                      ],
                    }}
                  />
                </div>
                {/* Year badge on timeline */}
                <div className="pointer-events-none absolute left-0 top-2 hidden md:block md:translate-x-[calc(-100%-24px)]">
                  <span className="whitespace-nowrap rounded-full bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/50 backdrop-blur">
                    {exp.start.includes('2025') ? '2025' : 
                     exp.start.includes('2024') ? '2024' : 
                     exp.start.includes('2023') ? '2023' : 
                     exp.start.includes('2022') ? '2022' : exp.start}
                  </span>
                </div>
                {/* Mobile date */}
                <div className="mb-2 flex items-center gap-2 md:hidden">
                  <span className="size-2 rounded-full bg-cyan-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    {exp.start}
                  </span>
                </div>
                <ExperienceItem exp={exp} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

