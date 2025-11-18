import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0f1e] via-[#0f172a] to-[#0f172a] text-white"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
        
        {/* Gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 50, 0],
            scale: [1, 1.2, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-1/4 top-1/4 size-[600px] rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 60, -40, 0],
            scale: [1, 1.3, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute right-1/4 bottom-1/4 size-[500px] rounded-full bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-transparent blur-3xl"
        />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center"
      >
        {/* Small intro text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/5 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-sm"
        >
          <Sparkles className="size-4" />
          <span>Data, AI & Analytics Engineer</span>
        </motion.div>

        {/* Main heading - Large and bold */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <div className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
            <motion.span 
              className="inline-block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% auto",
              }}
            >
              Harshith K
            </motion.span>
          </div>
        </motion.h1>

        {/* Subtitle with creative formatting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8 space-y-2"
        >
          <p className="text-xl md:text-3xl font-light text-neutral-300">
            Building intelligent systems where
          </p>
          <p className="text-2xl md:text-4xl font-semibold">
            <span className="text-cyan-400">Data Engineering</span>
            <span className="mx-3 text-neutral-600">×</span>
            <span className="text-blue-400">Machine Learning</span>
            <span className="mx-3 text-neutral-600">×</span>
            <span className="text-violet-400">AI</span>
          </p>
          <p className="text-xl md:text-3xl font-light text-neutral-300">
            converge to create{' '}
            <span className="font-semibold text-white">real impact</span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-neutral-400 md:text-xl"
        >
          I design and build data-driven AI systems, scalable data platforms, and intelligent 
          solutions that turn complex problems into actionable insights.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            onClick={() => scrollToSection('#projects')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-base font-semibold text-black shadow-lg shadow-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/70"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('#contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10"
          >
            <span className="flex items-center gap-2">
              Get In Touch
            </span>
          </motion.button>
        </motion.div>

        {/* Status badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="text-sm font-medium text-neutral-500">Open to roles:</span>
          {['Data Engineer', 'AI/ML Engineer', 'Data Scientist', 'ML Platform'].map((role, i) => (
            <motion.span
              key={role}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.1 }}
              className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-300"
            >
              {role}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-neutral-400 transition-colors hover:text-cyan-400"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Scroll to explore</span>
          <ChevronDown className="size-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}
