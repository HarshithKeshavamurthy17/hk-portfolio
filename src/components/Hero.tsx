import { motion } from 'framer-motion';
import { Database, Brain, BarChart3, ChevronRight, Sparkles } from 'lucide-react';

// Generate particles once
// Force rebuild - updated visual effects
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
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.15, 1.05, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-1/4 top-20 size-[700px] rounded-full bg-gradient-to-br from-cyan-500/35 via-blue-500/25 to-transparent opacity-50 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 40, -20, 0],
            scale: [1, 1.2, 1.1, 1],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute right-1/4 top-40 size-[800px] rounded-full bg-gradient-to-br from-sky-500/30 via-teal-400/25 to-transparent opacity-40 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -40, 10, 0],
            scale: [1, 1.25, 1.1, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-1/2 top-32 size-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-500/25 via-cyan-400/20 to-transparent opacity-45 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -25, 25, 0],
            y: [0, 35, -15, 0],
            scale: [1, 1.3, 1.15, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-1/3 bottom-20 size-[550px] rounded-full bg-gradient-to-br from-purple-500/20 via-pink-500/15 to-transparent opacity-35 blur-3xl"
        />
      </div>

      {/* Animated grid pattern - MORE VISIBLE */}
      <motion.div 
        className="pointer-events-none absolute inset-0 -z-10"
        animate={{ 
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Floating geometric shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {i % 3 === 0 ? (
              <div className="size-24 rounded-full border-2 border-cyan-400/40" />
            ) : i % 3 === 1 ? (
              <div className="size-20 rotate-45 border-2 border-blue-400/40" />
            ) : (
              <div className="size-0 border-l-[50px] border-r-[50px] border-t-[85px] border-l-transparent border-r-transparent border-t-violet-400/40" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Rotating rings */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute rounded-full border-2 border-cyan-400/25"
            style={{
              width: `${400 + i * 200}px`,
              height: `${400 + i * 200}px`,
            }}
            animate={{
              rotate: i % 2 === 0 ? [0, 360] : [360, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 30 + i * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Diagonal animated lines */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-full w-0.5 bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent"
            style={{
              left: `${15 + i * 15}%`,
              transform: 'skewX(-12deg)',
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scaleY: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7,
            }}
          />
        ))}
      </div>

      {/* Floating particles with enhanced glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute size-1.5 rounded-full bg-cyan-400/40 shadow-[0_0_10px_rgba(34,211,238,0.6)]"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [-20, -80, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 2.2, 1],
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

      {/* Pulsing dots grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute size-1.5 rounded-full bg-cyan-400/40 shadow-[0_0_8px_rgba(34,211,238,0.6)]"
            style={{
              left: `${(i % 8) * 12.5}%`,
              top: `${Math.floor(i / 8) * 20}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 8) * 0.2,
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
            <motion.span 
              className="inline-block bg-gradient-to-br from-white via-sky-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(34,211,238,0.5)]"
              animate={{ 
                textShadow: [
                  "0 0 40px rgba(34,211,238,0.5)",
                  "0 0 60px rgba(34,211,238,0.7)",
                  "0 0 40px rgba(34,211,238,0.5)",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Harshith K
            </motion.span>
            <motion.span
              className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-r from-cyan-500/25 via-blue-500/15 to-violet-500/25 blur-3xl"
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-[length:200%_100%] px-8 py-4 text-base font-bold text-black shadow-[0_0_45px_rgba(34,211,238,0.6),0_12px_35px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-[position:100%_0] hover:shadow-[0_0_70px_rgba(34,211,238,0.8),0_18px_45px_rgba(0,0,0,0.45)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="size-5" aria-hidden="true" />
              </motion.div>
              View Projects
              <ChevronRight className="size-5 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
            </span>
            <motion.span
              className="absolute inset-0 -z-0 bg-gradient-to-r from-white/40 via-white/20 to-transparent"
              animate={{ x: [-350, 350] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('#experience')}
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="group relative overflow-hidden rounded-full border-2 border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/70 hover:bg-white/15 hover:shadow-[0_0_35px_rgba(34,211,238,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Experience
            </span>
            <motion.span 
              className="absolute inset-0 -z-10 bg-gradient-to-t from-cyan-500/25 via-blue-500/15 to-transparent"
              initial={{ y: "100%" }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('#contact')}
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="group relative overflow-hidden rounded-full px-8 py-4 text-base font-semibold text-neutral-200 transition-all duration-300 hover:bg-white/15 hover:text-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]"
          >
            <span className="relative z-10">Contact Me</span>
            <motion.span 
              className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
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
            whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/60 hover:shadow-[0_25px_70px_rgba(34,211,238,0.3)]"
          >
            <div className="relative z-10">
              <motion.div 
                className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/35 to-blue-500/25 shadow-[0_0_35px_rgba(34,211,238,0.4)] ring-1 ring-white/10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Brain className="size-7 text-cyan-300" aria-hidden="true" />
              </motion.div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">Applied AI & RAG</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300 group-hover:text-neutral-200 transition-colors">
                Graph-aware retrieval & evaluation systems (Neo4j + LangChain + Azure).
              </p>
            </div>
            <motion.div
              className="absolute -right-12 -top-12 size-36 rounded-full bg-gradient-to-br from-cyan-500/25 to-transparent blur-2xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 hover:border-sky-300/60 hover:shadow-[0_25px_70px_rgba(56,189,248,0.3)]"
          >
            <div className="relative z-10">
              <motion.div 
                className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/35 to-cyan-500/25 shadow-[0_0_35px_rgba(56,189,248,0.4)] ring-1 ring-white/10"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Database className="size-7 text-sky-300" aria-hidden="true" />
              </motion.div>
              <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">Data Engineering</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300 group-hover:text-neutral-200 transition-colors">
                Streaming ETL & data contracts with Kafka, dbt & Snowflake.
              </p>
            </div>
            <motion.div
              className="absolute -right-12 -top-12 size-36 rounded-full bg-gradient-to-br from-sky-500/25 to-transparent blur-2xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 hover:border-violet-300/60 hover:shadow-[0_25px_70px_rgba(139,92,246,0.3)]"
          >
            <div className="relative z-10">
              <motion.div 
                className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/35 to-blue-500/25 shadow-[0_0_35px_rgba(139,92,246,0.4)] ring-1 ring-white/10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <BarChart3 className="size-7 text-violet-300" aria-hidden="true" />
              </motion.div>
              <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">Analytics & ML Ops</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300 group-hover:text-neutral-200 transition-colors">
                Interpretable models, dashboards, and automated evaluation pipelines.
              </p>
            </div>
            <motion.div
              className="absolute -right-12 -top-12 size-36 rounded-full bg-gradient-to-br from-violet-500/25 to-transparent blur-2xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
