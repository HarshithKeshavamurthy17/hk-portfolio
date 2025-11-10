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
    content: 'Outside of work, I&apos;m a Formula 1 enthusiast and sports data geek—I love analyzing patterns in driver performance and transforming statistics into stories that explain strategy, teamwork, and precision. It keeps my curiosity alive and my analytical instincts sharp.',
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
          className="relative flex flex-col gap-6 md:flex-row md:items-start md:gap-8"
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
            <div className="relative size-48 md:size-56 lg:size-64 overflow-hidden rounded-2xl border-2 border-violet-400/30 bg-gradient-to-br from-violet-500/20 to-purple-500/10 p-1 shadow-[0_8px_32px_rgba(139,92,246,0.3)]">
              <img
                src="/hk-portfolio/assets/harshith-photo.jpg"
                alt="Harshith Keshavamurthy"
                className="size-full rounded-xl object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
          {/* Text Content */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
              <h2 className="text-4xl md:text-5xl font-bold text-white">About Harshith</h2>
              <User className="size-7 md:size-8 text-violet-400" aria-hidden="true" />
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl text-balance leading-relaxed text-neutral-200">
              I&apos;m a <strong>data practitioner</strong> passionate about building intelligent, data-driven systems that connect analytical depth with scalable engineering. My experience spans <strong>applied AI (Tietoevry)</strong>, <strong>data analytics and automation (Uber via Nineleaps)</strong>, and <strong>data engineering pipelines (Nineleaps & academic research)</strong>—enabling me to bring a holistic understanding of how data flows from raw ingestion to intelligent insight.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-balance leading-relaxed text-neutral-300">
              Currently pursuing my <strong>MS in Applied Data Analytics at Boston University</strong>, I focus on bridging the gap between <strong>AI innovation and data infrastructure</strong>, designing systems that are explainable, efficient, and production-ready.
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
          <div className="flex items-center gap-2 rounded-full border border-violet-400/30 bg-gradient-to-r from-violet-500/10 to-purple-500/5 px-4 py-2 backdrop-blur-sm">
            <GraduationCap className="size-4 text-violet-300" aria-hidden="true" />
            <span className="text-base md:text-lg font-medium text-violet-200">Boston University · MS Applied Data Analytics</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-sky-400/30 bg-gradient-to-r from-sky-500/10 to-blue-500/5 px-5 py-3 backdrop-blur-sm">
            <GraduationCap className="size-5 text-sky-300" aria-hidden="true" />
            <span className="text-base md:text-lg font-medium text-sky-200">RNSIT · B.E. Computer Science</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-gradient-to-r from-emerald-500/10 to-green-500/5 px-5 py-3 backdrop-blur-sm">
            <MapPin className="size-5 text-emerald-300" aria-hidden="true" />
            <span className="text-base md:text-lg font-medium text-emerald-200">Boston, MA</span>
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
                  <h3 className="text-base md:text-lg font-semibold uppercase tracking-wider text-neutral-300">{highlight.label}</h3>
                </div>
                {highlight.content && (
                  <p className="text-base md:text-lg leading-relaxed text-neutral-100">{highlight.content}</p>
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
                        className="flex items-start gap-3 text-base md:text-lg text-neutral-100"
                      >
                        <span className="mt-2 size-2 rounded-full bg-cyan-400" aria-hidden="true" />
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
