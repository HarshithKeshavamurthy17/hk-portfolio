import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { MagneticButton } from './MagneticButton';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      mouseX.set((clientX - innerWidth / 2) / 30);
      mouseY.set((clientY - innerHeight / 2) / 30);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#0f172a]"
    >
      {/* Floating 3D Card - Like Salakhov's notecard */}
      <motion.div
        className="absolute right-[5%] top-[20%] z-10 hidden lg:block"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 8 }}
          className="relative w-80 rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-2xl shadow-2xl"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)',
          }}
        >
          <div className="mb-4 text-sm font-bold uppercase tracking-wider text-cyan-400">Quick Facts</div>
          <div className="space-y-3 text-sm text-neutral-300">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-400" />
              <span className="font-semibold">Available for hire</span>
            </div>
            <div>📍 Boston, MA</div>
            <div>🎓 MS Applied Data Analytics</div>
            <div>💼 3+ years experience</div>
            <div>🚀 5+ major projects</div>
          </div>
          <motion.div
            className="mt-6 rounded-lg border border-cyan-400/30 bg-cyan-500/10 p-3 text-xs text-cyan-300"
            animate={{ boxShadow: ['0 0 20px rgba(34, 211, 238, 0.3)', '0 0 40px rgba(34, 211, 238, 0.5)', '0 0 20px rgba(34, 211, 238, 0.3)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Currently seeking Data Engineering & AI/ML roles
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center lg:text-left"
      >
        <div className="grid gap-12 lg:grid-cols-[1.5fr,1fr] items-center">
          {/* Left side - Main content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/5 px-4 py-2 backdrop-blur-sm"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="size-4 text-cyan-400" />
                </motion.div>
                <span className="text-sm font-medium text-cyan-300">Data, AI & Analytics Engineer</span>
              </motion.div>
            </motion.div>

            {/* MASSIVE Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6"
            >
              <div className="text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight">
                <motion.div
                  className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent"
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
                </motion.div>
              </div>
            </motion.h1>

            {/* Subtitle with animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-6 space-y-3"
            >
              <p className="text-2xl md:text-3xl font-light text-neutral-300">
                Building intelligent systems where
              </p>
              <p className="text-3xl md:text-4xl font-semibold">
                <motion.span 
                  className="text-cyan-400"
                  whileHover={{ scale: 1.05, textShadow: "0 0 20px rgba(34, 211, 238, 0.8)" }}
                >
                  Data Engineering
                </motion.span>
                <span className="mx-3 text-neutral-600">×</span>
                <motion.span 
                  className="text-blue-400"
                  whileHover={{ scale: 1.05, textShadow: "0 0 20px rgba(59, 130, 246, 0.8)" }}
                >
                  Machine Learning
                </motion.span>
                <span className="mx-3 text-neutral-600">×</span>
                <motion.span 
                  className="text-violet-400"
                  whileHover={{ scale: 1.05, textShadow: "0 0 20px rgba(139, 92, 246, 0.8)" }}
                >
                  AI
                </motion.span>
              </p>
              <p className="text-2xl md:text-3xl font-light text-neutral-300">
                converge to create <span className="font-semibold text-white">real impact</span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-10 max-w-2xl text-lg leading-relaxed text-neutral-400 md:text-xl"
            >
              I design and build data-driven AI systems, scalable data platforms, and intelligent 
              solutions that turn complex problems into actionable insights.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap items-center gap-4"
            >
              <MagneticButton strength={0.3}>
                <motion.button
                  onClick={() => scrollToSection('#projects')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-base font-semibold text-black shadow-lg shadow-cyan-500/50"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="size-5" />
                    </motion.div>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </MagneticButton>

              <MagneticButton strength={0.3}>
                <motion.a
                  href="/hk-portfolio/assets/Harshith_Keshavamurthy_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-xl"
                >
                  Experience
                </motion.a>
              </MagneticButton>

              <MagneticButton strength={0.3}>
                <motion.button
                  onClick={() => scrollToSection('#contact')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full px-8 py-4 text-base font-semibold text-neutral-200 transition-colors hover:text-cyan-400"
                >
                  Contact Me
                </motion.button>
              </MagneticButton>
            </motion.div>

            {/* Role badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-10"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">Open to roles:</p>
              <div className="flex flex-wrap gap-2">
                {['Data Engineer', 'AI/ML Engineer', 'Data Scientist', 'ML Platform Roles'].map((role, i) => (
                  <motion.span
                    key={role}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 1.2 + i * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300"
                  >
                    {role}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right side - 3D Floating Card for mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="lg:hidden"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-2xl"
            >
              <div className="mb-4 text-sm font-bold uppercase tracking-wider text-cyan-400">Quick Facts</div>
              <div className="space-y-2 text-sm text-neutral-300">
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-green-400" />
                  <span className="font-semibold">Available for hire</span>
                </div>
                <div>📍 Boston, MA</div>
                <div>🎓 MS Applied Data Analytics</div>
                <div>💼 3+ years experience</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-neutral-400 transition-colors hover:text-cyan-400"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Scroll to explore</span>
          <ChevronDown className="size-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}
