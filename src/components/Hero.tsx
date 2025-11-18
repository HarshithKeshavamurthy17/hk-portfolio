import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ChevronDown, ArrowRight, Sparkles, Code2, Database, Brain } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { MagneticButton } from './MagneticButton';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set((clientX - innerWidth / 2) / 50);
      mouseY.set((clientY - innerHeight / 2) / 50);
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Floating Icons */}
      {[Code2, Database, Brain].map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 15}%`,
            x: useTransform(scrollYProgress, [0, 1], [0, -200 * (i + 1)]),
            rotateY: useTransform(scrollYProgress, [0, 1], [0, 360]),
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            style={{
              x: springX,
              y: springY,
            }}
            className="size-20 md:size-32 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-4 backdrop-blur-xl border border-white/10"
          >
            <Icon className="size-full text-cyan-400/50" />
          </motion.div>
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center"
      >
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/5 px-6 py-3 backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="size-5 text-cyan-400" />
            </motion.div>
            <span className="text-sm font-medium text-cyan-300">Available for opportunities</span>
            <motion.div
              className="size-2 rounded-full bg-green-400"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>

        {/* Mega Heading with 3D effect */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 relative"
        >
          <motion.div
            style={{
              rotateX: useTransform(mouseY, [-300, 300], [10, -10]),
              rotateY: useTransform(mouseX, [-300, 300], [-10, 10]),
            }}
            className="inline-block perspective-1000"
          >
            <div className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight">
              {['H', 'a', 'r', 's', 'h', 'i', 't', 'h', ' ', 'K'].map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50, rotateX: 90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4 + i * 0.05,
                    type: "spring",
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    color: "#22d3ee",
                    textShadow: "0 0 30px rgba(34, 211, 238, 0.8)",
                  }}
                  className="inline-block bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent"
                  style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-8"
        >
          <p className="text-2xl md:text-4xl font-light text-neutral-300 mb-4">
            Turning <motion.span
              animate={{ 
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              style={{ backgroundSize: "200% auto" }}
            >
              data into intelligence
            </motion.span>
          </p>
          <p className="text-xl text-neutral-400">
            AI/ML Engineer • Data Engineer • Full-Stack Builder
          </p>
        </motion.div>

        {/* CTA Buttons with Magnetic Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <MagneticButton strength={0.5}>
            <motion.button
              onClick={() => scrollToSection('#projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-semibold text-black"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
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

          <MagneticButton strength={0.5}>
            <motion.button
              onClick={() => scrollToSection('#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-xl"
            >
              Let's Talk
            </motion.button>
          </MagneticButton>
        </motion.div>

        {/* Floating Role Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {['Data Engineer', 'AI/ML Engineer', 'Data Scientist'].map((role, i) => (
            <motion.span
              key={role}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                delay: 1.5 + i * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-sm"
            >
              {role}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-neutral-400"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
          <ChevronDown className="size-6" />
        </motion.button>
      </motion.div>
    </section>
  );
}
