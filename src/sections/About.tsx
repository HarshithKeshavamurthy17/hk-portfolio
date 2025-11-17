import { motion } from 'framer-motion';
import { User, Briefcase, Heart, MapPin, GraduationCap, Rocket } from 'lucide-react';
import { Section } from '../components/layout/Section';

const highlights = [
  {
    icon: <Briefcase className="size-5" />,
    label: 'Current Focus',
    content: 'Exploring the intersection of AI/ML and Data Science—building frameworks that connect predictive intelligence with strong data foundations. Currently working on experimentation tracking, model evaluation automation, and retrieval-based AI systems that integrate seamlessly into modern data platforms.',
    gradient: 'from-cyan-500/20 to-blue-500/10',
  },
  {
    icon: <Rocket className="size-5" />,
    label: 'Strengths',
    items: [
      'Building end-to-end intelligent data systems that integrate AI/ML models, scalable data pipelines, and explainable insights',
      'Designing retrieval-augmented AI frameworks (RAG) combining Neo4j Knowledge Graphs, FAISS vector search, and LangChain orchestration',
      'Developing robust data engineering workflows using AWS Glue, Lambda, dbt, and Snowflake to enable high-quality, automated data movement',
      'Applying machine learning and statistical modeling to extract predictive insights and optimize decision pipelines',
      'Deploying cloud-native, production-ready ML applications with FastAPI, Docker, and Azure Functions',
      'Visualizing complex performance and model metrics through interactive dashboards in Tableau and Power BI',
    ],
    gradient: 'from-emerald-500/20 to-green-500/10',
  },
  {
    icon: <Heart className="size-5" />,
    label: 'Outside work',
    content: null,
    paragraphs: [
      "When I'm not wrangling data pipelines, you'll find me obsessing over F1 lap times and race strategies—because apparently, I can't escape analytics even on race weekends! 🏎️",
      'There's something magical about watching a perfectly executed undercut or seeing how tire strategy unfolds. I turn racing stats into stories, dissecting every overtake and pit stop like it's a production incident (but way more thrilling).',
      'It's my way of keeping the analytical fire burning—plus, it's a great excuse to wake up at ungodly hours for races in different time zones!',
    ],
    gradient: 'from-pink-500/20 to-rose-500/10',
  },
];

export function About() {
  return (
    <Section id="about" className="relative">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-pink-500/5 blur-3xl" aria-hidden="true" />

      <div className="flex flex-col gap-10">
        {/* Header with Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col gap-8 md:flex-row md:items-center md:gap-12"
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
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="group relative size-48 md:size-56 lg:size-64 overflow-hidden rounded-2xl border-2 border-violet-400/30 bg-gradient-to-br from-violet-500/20 to-purple-500/10 p-1 shadow-[0_8px_32px_rgba(139,92,246,0.3)] transition-all duration-500 hover:border-violet-400/50 hover:shadow-[0_12px_48px_rgba(139,92,246,0.5)] hover:scale-105">
              {/* Animated glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-violet-500/0 via-purple-500/0 to-pink-500/0 opacity-0 transition-opacity duration-500 group-hover:from-violet-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 group-hover:opacity-100" aria-hidden="true" />
              <img
                src="/hk-portfolio/assets/harshith-photo.jpg"
                alt="Harshith Keshavamurthy"
                className="relative size-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
                loading="eager"
              />
            </div>
          </motion.div>
          {/* Text Content */}
          <div className="flex-1 space-y-5">
            <div className="relative flex items-center gap-3">
              {/* Decorative background element */}
              <div className="absolute -left-8 -top-4 -z-10 size-32 rounded-full bg-gradient-to-br from-violet-500/20 via-purple-500/15 to-pink-500/20 blur-2xl" aria-hidden="true" />
              <div className="relative flex items-center gap-2.5">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">About Harshith</h2>
                <User className="size-6 md:size-7 text-violet-400" aria-hidden="true" />
              </div>
              {/* Decorative pattern */}
              <div className="hidden md:flex items-center gap-1.5 opacity-30">
                <div className="size-1.5 rounded-full bg-violet-400 animate-pulse" />
                <div className="size-1 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="size-0.5 rounded-full bg-pink-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
            <p className="text-base md:text-lg lg:text-xl text-balance leading-relaxed text-neutral-200">
              I&apos;m a <span className="font-semibold text-violet-300">data practitioner</span> passionate about building intelligent, data-driven systems that connect analytical depth with scalable engineering. My experience spans <span className="font-semibold text-cyan-300">applied AI (Tietoevry)</span>, <span className="font-semibold text-emerald-300">data analytics and automation (Uber via Nineleaps)</span>, and <span className="font-semibold text-blue-300">data engineering pipelines (Nineleaps & academic research)</span>—enabling me to bring a holistic understanding of how data flows from raw ingestion to intelligent insight.
            </p>
            <p className="text-sm md:text-base lg:text-lg text-balance leading-relaxed text-neutral-300">
              Currently pursuing my <span className="font-semibold text-purple-300">MS in Applied Data Analytics at Boston University</span>, I focus on bridging the gap between <span className="font-semibold text-pink-300">AI innovation and data infrastructure</span>, designing systems that are explainable, efficient, and production-ready.
            </p>
          </div>
        </motion.div>

        {/* Education & Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="https://www.bu.edu/met/degrees-certificates/ms-applied-data-analytics/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-violet-400/30 bg-gradient-to-r from-violet-500/10 to-purple-500/5 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-violet-400/50 hover:bg-gradient-to-r hover:from-violet-500/20 hover:to-purple-500/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:scale-105"
          >
            <GraduationCap className="size-4 text-violet-300 group-hover:text-violet-200 transition-colors" aria-hidden="true" />
            <span className="text-sm md:text-base font-medium text-violet-200 group-hover:text-violet-100 transition-colors">Boston University · MS Applied Data Analytics</span>
          </a>
          <a
            href="https://www.rnsit.ac.in/cse/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-sky-400/30 bg-gradient-to-r from-sky-500/10 to-blue-500/5 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-sky-400/50 hover:bg-gradient-to-r hover:from-sky-500/20 hover:to-blue-500/10 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:scale-105"
          >
            <GraduationCap className="size-4 text-sky-300 group-hover:text-sky-200 transition-colors" aria-hidden="true" />
            <span className="text-sm md:text-base font-medium text-sky-200 group-hover:text-sky-100 transition-colors">RNSIT · B.E. Computer Science</span>
          </a>
          <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-gradient-to-r from-emerald-500/10 to-green-500/5 px-4 py-2 backdrop-blur-sm">
            <MapPin className="size-4 text-emerald-300" aria-hidden="true" />
            <span className="text-sm md:text-base font-medium text-emerald-200">Boston, MA</span>
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
                <div className="mb-4 flex items-center gap-2.5">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 text-cyan-300 ring-1 ring-white/10 transition-all duration-300 group-hover:scale-110 group-hover:ring-cyan-400/30">
                    {highlight.icon}
                  </div>
                  <h3 className="text-sm md:text-base font-bold uppercase tracking-wider text-neutral-300 group-hover:text-cyan-300 transition-colors">{highlight.label}</h3>
                </div>
                {highlight.content && (
                  <p className="text-sm md:text-base leading-relaxed text-neutral-200 whitespace-pre-line">{highlight.content}</p>
                )}
                {highlight.paragraphs && (
                  <div className="space-y-2.5">
                    {highlight.paragraphs.map((paragraph, idx) => (
                      <p key={idx} className="text-sm md:text-base leading-relaxed text-neutral-200">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
                {highlight.items && (
                  <ul className="space-y-3">
                    {highlight.items.map((item, idx) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        className="flex items-start gap-2.5 text-sm md:text-base text-neutral-200"
                      >
                        <span className="mt-1.5 size-1.5 rounded-full bg-cyan-400 flex-shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </Section>
  );
}
