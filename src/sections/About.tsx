import { motion } from 'framer-motion';
import { User, Briefcase, Heart, MapPin, GraduationCap, Rocket } from 'lucide-react';
import { Section } from '../components/layout/Section';

const highlights = [
  {
    icon: <Briefcase className="size-5" />,
    label: 'Now',
    content: 'Building Graph-RAG pipelines on Neo4j + LangChain and deploying on Azure Functions with automated retrieval evaluation.',
    gradient: 'from-cyan-500/20 to-blue-500/10',
  },
  {
    icon: <Rocket className="size-5" />,
    label: 'Strengths',
    items: ['Hybrid RAG retrieval (BM25 + FAISS + Cross-Encoder)', 'Streaming ETL & data quality automation (Kafka, dbt, Spark)', 'Cloud-native deployment (Azure Functions, Docker, FastAPI)'],
    gradient: 'from-emerald-500/20 to-green-500/10',
  },
  {
    icon: <Heart className="size-5" />,
    label: 'Outside work',
    content: 'Sports geek and Formula 1 fan — I love finding patterns in performance data and turning real-world stats into stories.',
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
              I&apos;m a data scientist and engineer passionate about building interpretable AI systems and scalable data platforms. My work spans Graph-RAG systems (Tietoevry), streaming analytics (Uber via Nineleaps), and growth strategy modeling (Build Fellowship).
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-balance leading-relaxed text-neutral-300">
              Currently pursuing my MS in Applied Data Analytics at Boston University, I focus on bridging real-world data streams with intelligent, explainable AI pipelines.
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
