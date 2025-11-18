import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, MapPin, Calendar } from 'lucide-react';
import { useRef } from 'react';

const experiences = [
  {
    company: 'Tietoevry',
    role: 'Applied AI Developer',
    location: 'Remote',
    period: 'Jun 2024 - Aug 2024',
    description: 'Built VI-Graph-RAG: A production-grade retrieval system combining Neo4j knowledge graphs with LangChain and Azure OpenAI, achieving 23% better retrieval quality.',
    achievements: [
      'Designed graph-grounded RAG architecture',
      'Implemented automated evaluation pipeline',
      'Deployed to Azure with FastAPI',
    ],
    color: 'cyan',
  },
  {
    company: 'Nineleaps (Uber)',
    role: 'Data Analyst',
    location: 'Bangalore, India',
    period: 'Nov 2022 - Jul 2023',
    description: 'Led analytics and automation for Uber Maps, streamlining ETL workflows and building self-service reporting tools.',
    achievements: [
      'Built automated ETL pipelines saving 15 hours/week',
      'Created executive dashboards in Tableau',
      'Designed data quality monitoring system',
    ],
    color: 'emerald',
  },
  {
    company: 'Nineleaps',
    role: 'Data Engineering Intern',
    location: 'Bangalore, India',
    period: 'May 2022 - Oct 2022',
    description: 'Developed data pipelines and analytics solutions for multiple client projects.',
    achievements: [
      'Built streaming pipelines with Kafka',
      'Created dbt transformation models',
      'Implemented data validation frameworks',
    ],
    color: 'blue',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="experience" ref={ref} className="relative py-32 md:py-40 overflow-hidden">
      {/* Background decoration */}
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute left-[10%] top-[30%] size-[600px] rounded-full bg-gradient-to-br from-emerald-500/15 to-transparent blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/5 px-4 py-2 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="size-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-300">Professional Journey</span>
          </motion.div>
          
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-emerald-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-emerald-500/50 to-transparent md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50, rotateY: -10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute -left-2 top-8 hidden size-4 md:block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`size-full rounded-full bg-${exp.color}-400`}
                    animate={{ 
                      boxShadow: [
                        `0 0 0 0 rgba(var(--${exp.color}-rgb), 0.4)`,
                        `0 0 0 10px rgba(var(--${exp.color}-rgb), 0)`,
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="ml-0 md:ml-12 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="relative p-8">
                    {/* Gradient overlay */}
                    <motion.div
                      className={`pointer-events-none absolute -right-20 -top-20 size-60 rounded-full bg-gradient-to-br from-${exp.color}-500/20 to-transparent blur-3xl`}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />

                    <div className="relative">
                      {/* Header */}
                      <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <motion.h3 
                            className="text-2xl font-bold text-white"
                            whileHover={{ scale: 1.05, x: 5 }}
                          >
                            {exp.role}
                          </motion.h3>
                          <div className={`mt-1 text-lg font-semibold text-${exp.color}-400`}>
                            {exp.company}
                          </div>
                        </div>
                        
                        <div className="text-right text-sm text-neutral-400">
                          <div className="flex items-center gap-2">
                            <MapPin className="size-4" />
                            {exp.location}
                          </div>
                          <div className="mt-1 flex items-center gap-2">
                            <Calendar className="size-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mb-4 text-neutral-300">{exp.description}</p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            whileHover={{ x: 10 }}
                            className={`flex items-center gap-3 rounded-lg border border-${exp.color}-400/10 bg-${exp.color}-500/5 px-4 py-2 text-sm text-neutral-300`}
                          >
                            <div className={`size-1.5 rounded-full bg-${exp.color}-400`} />
                            {achievement}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
