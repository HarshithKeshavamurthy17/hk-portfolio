import { motion } from 'framer-motion';
import { Briefcase, Heart, Rocket, GraduationCap, MapPin, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-pink-500/5 blur-3xl" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/5 px-4 py-2 text-sm font-medium text-violet-300 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="size-4" />
            <span>Get to know me</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
          {/* Left Column - Story */}
          <div className="space-y-8">
            {/* Who I Am */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="flex items-center gap-3 text-2xl font-bold text-white">
                <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400">
                  👋
                </span>
                Who I Am
              </h3>
              <p className="text-lg leading-relaxed text-neutral-300">
                I'm a <span className="font-semibold text-violet-300">data practitioner</span> passionate about building intelligent, data-driven systems that connect analytical depth with scalable engineering.
              </p>
              <p className="leading-relaxed text-neutral-400">
                My experience spans <span className="font-semibold text-cyan-300">applied AI (Tietoevry)</span>, <span className="font-semibold text-emerald-300">data analytics and automation (Uber via Nineleaps)</span>, and <span className="font-semibold text-blue-300">data engineering pipelines (Nineleaps & academic research)</span>—enabling me to bring a holistic understanding of how data flows from raw ingestion to intelligent insight.
              </p>
            </motion.div>

            {/* Current Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 p-6 backdrop-blur-sm"
            >
              <h3 className="flex items-center gap-3 text-xl font-bold text-white">
                <Briefcase className="size-6 text-cyan-400" />
                Current Focus
              </h3>
              <p className="leading-relaxed text-neutral-300">
                My current focus is on bridging the gap between data engineering and modern AI — designing systems that move data smoothly, train models reliably, and deliver insights that actually make sense in the real world.
              </p>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-cyan-300">Lately, I've been diving into:</p>
                <ul className="space-y-2 text-sm text-neutral-400">
                  {[
                    'LLM and RAG development with knowledge graphs and vector search',
                    'Cloud-native data engineering on AWS and Azure',
                    'Experimentation and model evaluation frameworks',
                    'Productionizing AI/ML applications with FastAPI and Docker'
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-start gap-2"
                    >
                      <span className="mt-1.5 size-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="flex items-center gap-3 text-xl font-bold text-white">
                <Rocket className="size-6 text-emerald-400" />
                Strengths
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  'End-to-end AI/ML systems',
                  'RAG & Knowledge Graphs',
                  'Cloud data pipelines',
                  'Statistical modeling',
                  'Production ML deployment',
                  'Interactive dashboards'
                ].map((strength, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-lg border border-emerald-400/20 bg-emerald-500/5 px-4 py-3 text-sm font-medium text-emerald-300 transition-all hover:border-emerald-400/40 hover:bg-emerald-500/10"
                  >
                    {strength}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Outside Work */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 rounded-2xl border border-pink-400/20 bg-gradient-to-br from-pink-500/5 to-rose-500/5 p-6 backdrop-blur-sm"
            >
              <h3 className="flex items-center gap-3 text-xl font-bold text-white">
                <Heart className="size-6 text-pink-400" />
                Outside Work
              </h3>
              <div className="space-y-3 text-neutral-300">
                <p className="leading-relaxed">
                  In my free time, I treat my laptop like a mini R&D lab. I'm always building something—tiny RAG prototypes, quick data apps, dashboards, or small cloud automations—mostly just to see an idea come to life.
                </p>
                <p className="leading-relaxed">
                  I enjoy experimenting without rules, trying things, breaking them, and figuring out why they work. Turning random ideas into working little systems is genuinely fun for me, and it keeps me creative, curious, and constantly growing as an engineer.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Quick Facts */}
          <div className="space-y-6">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border-2 border-violet-400/30 bg-gradient-to-br from-violet-500/20 to-purple-500/10 p-1 shadow-[0_8px_32px_rgba(139,92,246,0.3)] transition-all duration-500 hover:border-violet-400/50 hover:shadow-[0_12px_48px_rgba(139,92,246,0.5)]"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-xl">
                <img
                  src="/hk-portfolio/assets/harshith-photo.jpg"
                  alt="Harshith Keshavamurthy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
              </div>
            </motion.div>

            {/* Quick Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              {/* Education */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-purple-400/30 hover:bg-white/10">
                <div className="flex items-start gap-3">
                  <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                    <GraduationCap className="size-5 text-purple-400" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Education</div>
                    <div className="font-semibold text-white">Boston University</div>
                    <div className="text-sm text-neutral-400">MS Applied Data Analytics</div>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all hover:border-cyan-400/30 hover:bg-white/10">
                <div className="flex items-start gap-3">
                  <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                    <MapPin className="size-5 text-cyan-400" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Location</div>
                    <div className="font-semibold text-white">Boston, MA</div>
                    <div className="text-sm text-neutral-400">United States</div>
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="rounded-xl border border-green-400/20 bg-gradient-to-br from-green-500/10 to-emerald-500/5 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <span className="relative flex size-3">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
                  </span>
                  <span className="text-sm font-medium text-green-300">Open to new opportunities</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
