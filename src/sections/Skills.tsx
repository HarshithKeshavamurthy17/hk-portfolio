import type { ReactNode } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, LineChart, Cloud, Terminal, Sparkles, Zap } from 'lucide-react';
import { Section } from '../components/layout/Section';
import { cn } from '../lib/cn';

type SkillGroup = {
  title: string;
  icon: ReactNode;
  items: Array<{
    name: string;
    usage: string;
  }>;
};

const GROUPS: SkillGroup[] = [
  {
    title: 'AI/ML',
    icon: <Sparkles className="size-5" />,
    items: [
      { name: 'LangChain', usage: 'used in VI-Graph-RAG' },
      { name: 'PyTorch', usage: 'used in Breast Cancer ML' },
      { name: 'TensorFlow', usage: 'used in F1 Prediction' },
      { name: 'XGBoost', usage: 'used in CS699 Ensemble' },
      { name: 'SHAP', usage: 'used in Breast Cancer ML dashboards' },
    ],
  },
  {
    title: 'Data Engineering',
    icon: <Database className="size-5" />,
    items: [
      { name: 'Apache Kafka', usage: 'used in Uber ETL streaming pipeline' },
      { name: 'dbt', usage: 'used in Uber ETL modeling' },
      { name: 'Airflow', usage: 'used for orchestration at Nineleaps' },
      { name: 'Spark', usage: 'used for batch processing in Nineleaps' },
      { name: 'Neo4j', usage: 'used in VI-Graph-RAG graph store' },
    ],
  },
  {
    title: 'Analytics & BI',
    icon: <LineChart className="size-5" />,
    items: [
      { name: 'Tableau', usage: 'used for exec scorecards at Nineleaps' },
      { name: 'Power BI', usage: 'used during Quantum Ventura engagements' },
      { name: 'Looker', usage: 'used in data product instrumentation' },
      { name: 'Mode Analytics', usage: 'used for ad-hoc investigations' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: <Cloud className="size-5" />,
    items: [
      { name: 'Azure ML', usage: 'used in Tietoevry evaluation platform' },
      { name: 'AWS', usage: 'used during Quantum Ventura analytics' },
      { name: 'Docker', usage: 'used across ML deployment pipelines' },
      { name: 'Terraform', usage: 'used for infra as code on data projects' },
      { name: 'GitHub Actions', usage: 'used for CI/CD in OSS projects' },
    ],
  },
  {
    title: 'Languages',
    icon: <Terminal className="size-5" />,
    items: [
      { name: 'Python', usage: 'primary language for AI/ML pipelines' },
      { name: 'TypeScript', usage: 'used in F1 live prediction client' },
      { name: 'Scala', usage: 'used in Uber ETL ingestion jobs' },
      { name: 'SQL', usage: 'used across analytics deliverables' },
      { name: 'R', usage: 'used in Boston University research' },
    ],
  },
];

const PROFICIENCY: Record<string, 'expert' | 'proficient' | 'working'> = {
  // AI/ML
  LangChain: 'expert',
  PyTorch: 'proficient',
  TensorFlow: 'proficient',
  XGBoost: 'proficient',
  SHAP: 'working',
  
  // Data Engineering
  'Apache Kafka': 'proficient',
  dbt: 'proficient',
  Airflow: 'proficient',
  Spark: 'expert',
  Neo4j: 'expert',
  
  // Analytics & BI
  Tableau: 'expert',
  'Power BI': 'proficient',
  Looker: 'working',
  'Mode Analytics': 'working',
  
  // Cloud & DevOps
  'Azure ML': 'expert',
  AWS: 'proficient',
  Docker: 'expert',
  Terraform: 'proficient',
  'GitHub Actions': 'proficient',
  
  // Languages
  Python: 'expert',
  TypeScript: 'proficient',
  Scala: 'working',
  SQL: 'expert',
  R: 'working',
};

const PROFICIENCY_STYLES: Record<'expert' | 'proficient' | 'working', string> = {
  expert: 'bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.6)]',
  proficient: 'bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.5)]',
  working: 'bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.5)]',
};

const PROFICIENCY_COLORS: Record<'expert' | 'proficient' | 'working', string> = {
  expert: 'from-emerald-500/30 to-green-500/10',
  proficient: 'from-amber-500/30 to-yellow-500/10',
  working: 'from-sky-500/30 to-blue-500/10',
};

const LEGEND: Array<{ label: string; level: 'expert' | 'proficient' | 'working' }> = [
  { label: 'Expert', level: 'expert' },
  { label: 'Proficient', level: 'proficient' },
  { label: 'Working', level: 'working' },
];

export function Skills() {
  return (
    <Section id="skills" className="relative">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 size-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-blue-500/5 blur-3xl" aria-hidden="true" />
      
      <div className="flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between"
        >
          <div className="relative flex max-w-4xl flex-col gap-2">
            <motion.div
              className="absolute -left-4 top-0 h-full w-1 rounded-full bg-gradient-to-b from-emerald-500 via-cyan-500 to-blue-500"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
              aria-hidden="true"
            />
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold text-white">Skills Stack</h2>
              <Code2 className="size-6 text-cyan-400" aria-hidden="true" />
            </div>
            <p className="text-sm text-neutral-400">
              Tools and languages underpinning AI/ML products, data engineering platforms, and decision intelligence workstreams.
            </p>
          </div>
          
          {/* Enhanced Legend */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 self-start rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 px-5 py-3 backdrop-blur-xl"
          >
            {LEGEND.map((entry, index) => (
              <motion.span
                key={entry.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-2 whitespace-nowrap text-xs font-medium text-neutral-300"
              >
                <motion.span
                  className={cn('size-2.5 rounded-full', PROFICIENCY_STYLES[entry.level])}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  aria-hidden="true"
                />
                {entry.label}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              whileHover={{ y: -4 }}
              className="group/card relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-white/[0.01] p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/40 hover:shadow-[0_12px_50px_rgba(34,211,238,0.2)]"
            >
              {/* Animated gradient orb */}
              <motion.div
                className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover/card:opacity-100"
                aria-hidden="true"
              />

              {/* Icon header */}
              <div className="relative z-10 mb-4 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 text-cyan-300 ring-1 ring-white/10">
                  {group.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{group.title}</h3>
              </div>

              {/* Skills list */}
              <ul className="relative z-10 flex flex-wrap gap-2">
                {group.items.map((item, itemIndex) => {
                  const proficiency = PROFICIENCY[item.name] ?? 'working';
                  return (
                    <li key={item.name}>
                      <Tooltip label={item.usage}>
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.2, delay: itemIndex * 0.05 }}
                          whileHover={{ scale: 1.08, y: -2 }}
                          className={cn(
                            'group/skill relative inline-flex cursor-default items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-neutral-200 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10 hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]',
                          )}
                        >
                          <motion.span
                            className={cn('size-2 rounded-full', PROFICIENCY_STYLES[proficiency])}
                            animate={{
                              scale: [1, 1.3, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: itemIndex * 0.2,
                            }}
                            aria-hidden="true"
                          />
                          <span className="relative z-10 flex items-center gap-1.5">
                            <Zap className="size-3 opacity-0 transition-opacity group-hover/skill:opacity-100" aria-hidden="true" />
                            {item.name}
                          </span>
                          <motion.span
                            className={cn('absolute inset-0 bg-gradient-to-r opacity-0', PROFICIENCY_COLORS[proficiency])}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            aria-hidden="true"
                          />
                        </motion.span>
                      </Tooltip>
                    </li>
                  );
                })}
              </ul>

              {/* Skill count badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative z-10 mt-4 flex items-center gap-2 text-xs text-neutral-500"
              >
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                <span>{group.items.length} tools</span>
                <div className="h-px flex-1 bg-gradient-to-l from-white/10 to-transparent" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

type TooltipProps = {
  label: string;
  children: ReactNode;
};

function Tooltip({ label, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span
      className="group relative inline-flex"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <motion.span
          initial={{ opacity: 0, y: 5, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 5, scale: 0.9 }}
          transition={{ duration: 0.15 }}
          className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-max max-w-xs -translate-x-1/2 rounded-lg border border-cyan-400/30 bg-slate-900/95 px-3 py-2 text-xs text-cyan-100 shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl"
        >
          {label}
          <span className="absolute left-1/2 top-full size-0 -translate-x-1/2 border-4 border-transparent border-t-cyan-400/30" />
        </motion.span>
      )}
    </span>
  );
}
