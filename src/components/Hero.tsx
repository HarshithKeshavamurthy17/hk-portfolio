import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles, Zap, Rocket, Brain, Code2, Database } from 'lucide-react';
import { useRef } from 'react';
import { MagneticButton } from './MagneticButton';

const scrollToSection = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#020617] via-[#0a0e1f] to-[#020617]"
    >
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 top-0 size-[800px] rounded-full bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -80, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -right-40 top-20 size-[700px] rounded-full bg-gradient-to-br from-purple-500/25 via-pink-500/20 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 50, 0],
            y: [0, -80, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute bottom-0 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-500/20 via-teal-500/15 to-transparent blur-3xl"
        />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute size-1 rounded-full bg-cyan-400/60"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.8)_70%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8 lg:px-12">
        <motion.div style={{ y, opacity }} className="flex flex-col items-center justify-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 px-5 py-2.5 backdrop-blur-xl"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="size-4 text-cyan-400" />
              </motion.div>
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-sm font-bold tracking-wide text-transparent">
                Data, AI & Analytics Engineer
              </span>
            </motion.div>
          </motion.div>

          {/* Name with crazy effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="relative">
              <span className="block text-6xl font-black tracking-tight md:text-7xl lg:text-8xl xl:text-9xl">
                <span className="relative">
                  <span className="absolute -inset-4 animate-pulse rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-3xl" />
                  <span className="relative bg-gradient-to-br from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(34,211,238,0.5)]">
                    Harshith K
                  </span>
                </span>
              </span>
              {/* Glowing underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="mx-auto mt-6 h-2 w-3/4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 shadow-[0_0_30px_rgba(34,211,238,0.6)]"
              />
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 space-y-4"
          >
            <p className="text-2xl font-semibold text-cyan-300 md:text-3xl lg:text-4xl">
              Building intelligent systems where
            </p>
            <p className="text-2xl font-bold md:text-3xl lg:text-4xl">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Data Engineering
              </span>
              <span className="text-white"> × </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Machine Learning
              </span>
              <span className="text-white"> × </span>
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                AI
              </span>
            </p>
            <p className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
              converge to create{' '}
              <span className="relative inline-block">
                <span className="absolute -inset-2 rounded-lg bg-gradient-to-r from-yellow-500/30 to-orange-500/30 blur-lg" />
                <span className="relative font-black text-yellow-300">real impact</span>
              </span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-neutral-300 md:text-xl"
          >
            I design and build data-driven AI systems, scalable data platforms, and intelligent solutions that turn complex problems into actionable insights.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
              <MagneticButton className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-[2px] shadow-[0_0_40px_rgba(34,211,238,0.4)]">
                <button
                  onClick={() => scrollToSection('#projects')}
                  className="relative flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-8 py-4 font-bold text-black transition-all"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Rocket className="size-5" />
                  </motion.div>
                  <span className="text-lg">View My Work</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </button>
              </MagneticButton>

              <MagneticButton>
                <button
                  onClick={() => scrollToSection('#experience')}
                  className="group relative overflow-hidden rounded-2xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all hover:border-cyan-400/50 hover:bg-white/10"
                >
                  <span className="relative z-10 text-lg">Experience</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 transition-opacity group-hover:opacity-100"
                    whileHover={{ scale: 1.1 }}
                  />
                </button>
              </MagneticButton>

              <MagneticButton>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="group relative overflow-hidden rounded-2xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all hover:border-emerald-400/50 hover:bg-white/10"
                >
                  <span className="relative z-10 text-lg">Contact Me</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 opacity-0 transition-opacity group-hover:opacity-100"
                    whileHover={{ scale: 1.1 }}
                  />
                </button>
              </MagneticButton>
            </motion.div>

          {/* Role badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-cyan-400">Open to roles:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Data Engineer', 'AI/ML Engineer', 'Data Scientist', 'ML Platform Roles'].map((role, i) => (
                <motion.div
                  key={role}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 backdrop-blur-sm"
                >
                  {role}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="size-8 text-cyan-400" />
      </motion.div>
    </section>
  );
}
