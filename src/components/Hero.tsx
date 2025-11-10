import { motion } from 'framer-motion';
import { Database, Brain, BarChart3, ChevronRight, Sparkles } from 'lucide-react';

// Generate particles once
const particles = [...Array(15)].map((_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 3 + Math.random() * 4,
  delay: Math.random() * 2,
}));

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-surface relative overflow-hidden py-32 text-white lg:py-40">
      {/* Animated gradient mesh background */}
      <div className="hero-grid-noise" aria-hidden="true" />
      
      {/* Multiple layered gradient orbs for depth */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-1/4 top-20 size-[600px] rounded-full bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-transparent opacity-40 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute right-1/4 top-40 size-[700px] rounded-full bg-gradient-to-br from-sky-500/25 via-teal-400/20 to-transparent opacity-30 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-1/2 top-32 size-[500px] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-500/20 via-cyan-400/15 to-transparent opacity-35 blur-3xl"
        />
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute size-1 rounded-full bg-cyan-400/30"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [-20, -60, -20],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="mx-auto w-full max-w-[1920px] px-6 md:px-8 lg:px-12 xl:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative inline-block"
        >
          <h1 className="relative text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            <span className="inline-block bg-gradient-to-br from-white via-sky-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(34,211,238,0.4)]">
              Harshith K
            </span>
            <motion.span
              className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-violet-500/20 blur-2xl"
              animate={{ opacity: [0, 0.6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-xl font-medium tracking-wide text-cyan-300/90 md:text-2xl"
        >
          Applied AI • Data Engineering • Intelligent Data Platforms
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-4xl text-xl leading-relaxed text-neutral-200/80 md:text-2xl"
        >
          I build data-driven AI systems and scalable data platforms—blending machine learning, retrieval-augmented generation (RAG), and data engineering to create intelligent, interpretable solutions for decision intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            onClick={() => scrollToSection('#projects')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-[length:200%_100%] px-8 py-4 text-base font-bold text-black shadow-[0_0_40px_rgba(34,211,238,0.5),0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[position:100%_0] hover:shadow-[0_0_60px_rgba(34,211,238,0.7),0_15px_40px_rgba(0,0,0,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="size-5" aria-hidden="true" />
              View Projects
              <ChevronRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </span>
            <motion.span
              className="absolute inset-0 -z-0 bg-gradient-to-r from-white/30 to-transparent"
              animate={{ x: [-300, 300] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('#experience')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden rounded-full border-2 border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/60 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
          >
            <span className="flex items-center gap-2">
              Experience
            </span>
            <span className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-t from-cyan-500/20 to-transparent transition-transform duration-300 group-hover:translate-y-0" />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('#contact')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full px-8 py-4 text-base font-semibold text-neutral-200 transition-all duration-300 hover:bg-white/10 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            Contact Me
          </motion.button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 text-sm tracking-wide text-neutral-400/90"
        >
          <span className="font-semibold text-cyan-300">Now open to:</span>{' '}
          <span className="inline-flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200">Data Engineer</span>
            <span className="rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200">AI/ML Engineer</span>
            <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200">Data Scientist</span>
            <span className="rounded-full border border-teal-400/30 bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-200">ML Platform Roles</span>
          </span>
        </motion.p>

        <div className="mt-20 grid gap-6 text-left md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)]"
          >
            <div className="relative z-10">
              <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/20 shadow-[0_0_30px_rgba(34,211,238,0.3)] ring-1 ring-white/10">
                <Brain className="size-7 text-cyan-300" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-white">Applied AI & RAG</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                Graph-aware retrieval & evaluation systems (Neo4j + LangChain + Azure).
              </p>
            </div>
            <motion.div
              className="absolute -right-12 -top-12 size-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 hover:border-sky-300/50 hover:shadow-[0_20px_60px_rgba(56,189,248,0.25)]"
          >
            <div className="relative z-10">
              <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/30 to-cyan-500/20 shadow-[0_0_30px_rgba(56,189,248,0.3)] ring-1 ring-white/10">
                <Database className="size-7 text-sky-300" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-white">Data Engineering</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                Streaming ETL & data contracts with Kafka, dbt & Snowflake.
              </p>
            </div>
            <motion.div
              className="absolute -right-12 -top-12 size-32 rounded-full bg-gradient-to-br from-sky-500/20 to-transparent blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 hover:border-violet-300/50 hover:shadow-[0_20px_60px_rgba(139,92,246,0.25)]"
          >
            <div className="relative z-10">
              <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/30 to-blue-500/20 shadow-[0_0_30px_rgba(139,92,246,0.3)] ring-1 ring-white/10">
                <BarChart3 className="size-7 text-violet-300" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-white">Analytics & ML Ops</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                Interpretable models, dashboards, and automated evaluation pipelines.
              </p>
            </div>
            <motion.div
              className="absolute -right-12 -top-12 size-32 rounded-full bg-gradient-to-br from-violet-500/20 to-transparent blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
