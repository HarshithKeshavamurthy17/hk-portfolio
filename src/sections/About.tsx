import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Heart, Rocket, GraduationCap, MapPin, Sparkles, Zap, Target } from 'lucide-react';
import { useRef } from 'react';
import { MagneticButton } from '../components/MagneticButton';

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={ref} className="relative py-8 md:py-10 overflow-hidden">
      {/* Floating gradient orbs */}
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute right-[10%] top-[20%] size-[350px] rounded-full bg-gradient-to-br from-violet-500/20 to-transparent blur-3xl"
      />
      
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center"
        >
          <motion.div
            className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-violet-400/20 bg-violet-500/5 px-3 py-1.5 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="size-3 text-violet-400" />
            <span className="text-xs font-medium text-violet-300">Get to know me</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid gap-5 lg:grid-cols-2">
          {/* Left - Story Cards */}
          <div className="space-y-4">
            {/* Who I Am */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, rotateX: 2 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5 backdrop-blur-xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className="pointer-events-none absolute -right-14 -top-14 size-28 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative">
                <div className="mb-3 flex items-center gap-2">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
                  >
                    <span className="text-lg">👋</span>
                  </motion.div>
                  <h3 className="text-lg font-bold text-white">Who I Am</h3>
                </div>
                
                <p className="mb-3 text-sm leading-relaxed text-neutral-300">
                  I'm a <span className="font-semibold text-violet-300">data practitioner</span> passionate about building intelligent, data-driven systems that connect analytical depth with scalable engineering.
                </p>
                
                <p className="text-sm leading-relaxed text-neutral-400">
                  My experience spans <span className="font-semibold text-cyan-300">applied AI (Tietoevry)</span>, <span className="font-semibold text-emerald-300">data analytics (Uber via Nineleaps)</span>, and <span className="font-semibold text-blue-300">data engineering pipelines</span>—enabling me to bring a holistic understanding of how data flows from raw ingestion to intelligent insight.
                </p>
              </div>
            </motion.div>

            {/* Current Focus - BIG Card */}
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-5 backdrop-blur-xl"
            >
              <div className="relative">
                <div className="mb-3 flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Briefcase className="size-6 text-cyan-400" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-white">Current Focus</h3>
                </div>
                
                <p className="mb-3 text-sm leading-relaxed text-neutral-300">
                  Bridging the gap between data engineering and modern AI — designing systems that move data smoothly, train models reliably, and deliver insights that make sense.
                </p>
                
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-cyan-300">Diving into:</p>
                  {[
                    '🤖 LLM and RAG with knowledge graphs',
                    '☁️ Cloud-native data engineering',
                    '📊 ML experimentation frameworks',
                    '🚀 Productionizing AI with FastAPI & Docker'
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-center gap-2 rounded-lg border border-cyan-400/10 bg-cyan-500/5 p-2 text-xs text-neutral-300"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Interactive Cards */}
          <div className="space-y-4">
            {/* Photo Card with 3D effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, rotateY: -5 }}
              className="relative overflow-hidden rounded-2xl border-2 border-violet-400/30 bg-gradient-to-br from-violet-500/20 to-purple-500/10 p-1.5"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src="/hk-portfolio/assets/harshith-photo.jpg"
                  alt="Harshith Keshavamurthy"
                  className="size-full object-cover"
                />
              </div>
            </motion.div>

            {/* Quick Info Grid */}
            <div className="grid gap-3 sm:grid-cols-2">
              {/* Education */}
              <MagneticButton strength={0.2}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -5 }}
                  className="rounded-xl border border-purple-400/20 bg-gradient-to-br from-purple-500/10 to-pink-500/5 p-4 backdrop-blur-sm"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <GraduationCap className="mb-2 size-5 text-purple-400" />
                  </motion.div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">Education</div>
                  <div className="mt-1 text-sm font-semibold text-white">Boston University</div>
                  <div className="text-xs text-neutral-400">MS Applied Data Analytics</div>
                </motion.div>
              </MagneticButton>

              {/* Location */}
              <MagneticButton strength={0.2}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ y: -5 }}
                  className="rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-4 backdrop-blur-sm"
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <MapPin className="mb-2 size-5 text-cyan-400" />
                  </motion.div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">Location</div>
                  <div className="mt-1 text-sm font-semibold text-white">Boston, MA</div>
                  <div className="text-xs text-neutral-400">United States</div>
                </motion.div>
              </MagneticButton>
            </div>

            {/* Status Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl border border-green-400/20 bg-gradient-to-br from-green-500/10 to-emerald-500/5 p-4 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2">
                <motion.div
                  className="relative flex size-3"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
                </motion.div>
                <span className="text-sm font-semibold text-green-300">Open to new opportunities</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Strengths Grid - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10"
        >
          <div className="mb-4 flex items-center gap-2">
            <Rocket className="size-5 text-emerald-400" />
            <h3 className="text-xl font-bold text-white">Core Strengths</h3>
          </div>
          
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: '🎯', title: 'End-to-end AI/ML', color: 'cyan' },
              { icon: '🧠', title: 'RAG & Knowledge Graphs', color: 'violet' },
              { icon: '☁️', title: 'Cloud data pipelines', color: 'blue' },
              { icon: '📊', title: 'Statistical modeling', color: 'emerald' },
              { icon: '🚀', title: 'Production ML deployment', color: 'pink' },
              { icon: '📈', title: 'Interactive dashboards', color: 'orange' },
            ].map((item, i) => (
              <MagneticButton key={i} strength={0.15}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
                  whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className={`rounded-lg border border-${item.color}-400/20 bg-${item.color}-500/5 p-4 backdrop-blur-sm`}
                >
                  <motion.div
                    className="mb-2 text-xl"
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div className={`text-sm font-semibold text-${item.color}-300`}>{item.title}</div>
                </motion.div>
              </MagneticButton>
            ))}
          </div>
        </motion.div>

        {/* Outside Work Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.01 }}
          className="mt-10 overflow-hidden rounded-2xl border border-pink-400/20 bg-gradient-to-br from-pink-500/10 to-rose-500/5 p-5 backdrop-blur-xl"
        >
          <div className="flex items-start gap-3">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="size-6 text-pink-400" />
            </motion.div>
            <div>
              <h3 className="mb-3 text-lg font-bold text-white">Outside Work</h3>
              <div className="space-y-3 text-sm leading-relaxed text-neutral-300">
                <p>
                  In my free time, I treat my laptop like a mini R&D lab. I'm always building something—tiny RAG prototypes, quick data apps, dashboards, or small cloud automations—mostly just to see an idea come to life.
                </p>
                <p>
                  I enjoy experimenting without rules, trying things, breaking them, and figuring out why they work. Turning random ideas into working little systems is genuinely fun for me, and it keeps me creative, curious, and constantly growing as an engineer.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
