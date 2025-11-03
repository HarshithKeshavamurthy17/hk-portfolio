import { motion } from 'framer-motion';
import { User, Briefcase, Heart, MapPin, GraduationCap, Rocket } from 'lucide-react';
import { Section } from '../components/layout/Section';

const highlights = [
  {
    icon: <Briefcase className="size-5" />,
    label: 'Now',
    content: 'Graph-RAG evals, data contracts, Azure Functions CI.',
    gradient: 'from-cyan-500/20 to-blue-500/10',
  },
  {
    icon: <Rocket className="size-5" />,
    label: 'Strengths',
    items: ['Streaming ETL (Kafka → dbt → Snowflake)', 'Interpretable ML (SHAP, model cards)', 'Graph retrieval (Neo4j, LangChain)'],
    gradient: 'from-emerald-500/20 to-green-500/10',
  },
  {
    icon: <Heart className="size-5" />,
    label: 'Outside work',
    content: 'F1 nerd—turning race telemetry into predictive dashboards.',
    gradient: 'from-pink-500/20 to-rose-500/10',
  },
];

export function About() {
  return (
    <Section id="about" className="relative">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-pink-500/5 blur-3xl" aria-hidden="true" />

      <div className="flex flex-col gap-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col gap-4"
        >
          <motion.div
            className="absolute -left-4 top-0 h-full w-1 rounded-full bg-gradient-to-b from-violet-500 via-purple-500 to-pink-500"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            aria-hidden="true"
          />
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-bold text-white">About Harshith</h2>
            <User className="size-6 text-violet-400" aria-hidden="true" />
          </div>
          <p className="max-w-3xl text-balance text-lg leading-relaxed text-neutral-300">
            I&apos;m an applied data scientist building end-to-end intelligence systems that bridge messy, real-world streams with precise decision loops. 
            I&apos;m currently at <span className="font-semibold text-white">Boston University (Applied Data Analytics)</span> while freelancing on high-impact AI deployments.
          </p>
        </motion.div>

        {/* Education & Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-4"
        >
          <div className="flex items-center gap-2 rounded-full border border-violet-400/30 bg-gradient-to-r from-violet-500/10 to-purple-500/5 px-4 py-2 backdrop-blur-sm">
            <GraduationCap className="size-4 text-violet-300" aria-hidden="true" />
            <span className="text-sm font-medium text-violet-200">Boston University · MS Applied Data Analytics</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-sky-400/30 bg-gradient-to-r from-sky-500/10 to-blue-500/5 px-4 py-2 backdrop-blur-sm">
            <GraduationCap className="size-4 text-sky-300" aria-hidden="true" />
            <span className="text-sm font-medium text-sky-200">RNSIT · B.E. Computer Science</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-gradient-to-r from-emerald-500/10 to-green-500/5 px-4 py-2 backdrop-blur-sm">
            <MapPin className="size-4 text-emerald-300" aria-hidden="true" />
            <span className="text-sm font-medium text-emerald-200">Boston, MA · Open to Remote</span>
          </div>
        </motion.div>

        {/* Open to roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 backdrop-blur-sm"
        >
          <motion.div
            className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
          <div className="relative z-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-cyan-400">Now open to</p>
            <div className="flex flex-wrap gap-2">
              {["Data/AI roles", "ML Platform", "RAG/Graph-RAG", "Streaming ETL"].map((role, index) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/5 px-4 py-2 text-sm font-medium text-cyan-200 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                >
                  {role}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Highlight cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-white/[0.01] p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/40 hover:shadow-[0_12px_50px_rgba(34,211,238,0.2)]"
            >
              <motion.div
                className={`pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-gradient-to-br ${highlight.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                aria-hidden="true"
              />
              <div className="relative z-10">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 text-cyan-300 ring-1 ring-white/10">
                    {highlight.icon}
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">{highlight.label}</h3>
                </div>
                {highlight.content && (
                  <p className="text-sm leading-relaxed text-neutral-200">{highlight.content}</p>
                )}
                {highlight.items && (
                  <ul className="space-y-2">
                    {highlight.items.map((item, idx) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        className="flex items-start gap-2 text-sm text-neutral-200"
                      >
                        <span className="mt-1.5 size-1.5 rounded-full bg-cyan-400" aria-hidden="true" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted by section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-4"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">Trusted by</span>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 px-8 py-6 backdrop-blur-xl">
            <div className="flex flex-wrap items-center justify-center gap-8 md:justify-start">
              {["tietoevry", "nineleaps", "nastech", "quantumventura", "bu"].map((logo, index) => (
                <motion.img
                  key={logo}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  src={`/logos/${logo}.svg`}
                  alt={`${logo} logo`}
                  className="h-8 w-auto opacity-60 grayscale transition-all duration-300 hover:grayscale-0"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
