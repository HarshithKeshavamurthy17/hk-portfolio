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
    title: 'Generative AI & LLM',
    icon: <Sparkles className="size-5" />,
    items: [
      { name: 'LangChain', usage: 'LLM orchestration for VI-Graph-RAG workflows' },
      { name: 'Azure OpenAI', usage: 'GPT-4 deployments with responsible guardrails' },
      { name: 'LlamaIndex', usage: 'Graph-grounded retrieval interfaces' },
      { name: 'Pinecone', usage: 'Vector search backing hybrid retrievers' },
      { name: 'Weaviate', usage: 'Managed semantic store powering evaluations' },
    ],
  },
  {
    title: 'ML Platforms & Ops',
    icon: <Zap className="size-5" />,
    items: [
      { name: 'MLflow', usage: 'Model registry and experiment tracking' },
      { name: 'Weights & Biases', usage: 'LLM/RAG evaluations and dashboards' },
      { name: 'Evidently AI', usage: 'Quality monitoring and drift detection' },
      { name: 'Great Expectations', usage: 'Data contracts and validation suites' },
      { name: 'Prefect', usage: 'Python-native orchestration for ML jobs' },
    ],
  },
  {
    title: 'Data Engineering',
    icon: <Database className="size-5" />,
    items: [
      { name: 'AWS Glue', usage: 'Serverless ETL and data catalog services' },
      { name: 'AWS Lambda', usage: 'Event-driven data processing functions' },
      { name: 'AWS Redshift', usage: 'Cloud data warehouse for analytics' },
      { name: 'Apache Kafka', usage: 'Streaming ingestion for telemetry pipelines' },
      { name: 'dbt', usage: 'Modular analytics engineering with contracts' },
      { name: 'Snowflake', usage: 'Cloud warehouse powering analytics products' },
    ],
  },
  {
    title: 'Analytics & BI',
    icon: <LineChart className="size-5" />,
    items: [
      { name: 'Tableau', usage: 'Executive scorecards and self-serve insights' },
      { name: 'Power BI', usage: 'Operational dashboards for stakeholders' },
      { name: 'Looker', usage: 'Semantic modeling for product analytics' },
      { name: 'Mode Analytics', usage: 'Notebook-driven ad-hoc analyses' },
      { name: 'Sigma Computing', usage: 'Cloud BI for finance-ready reporting' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: <Cloud className="size-5" />,
    items: [
      { name: 'Azure', usage: 'Functions, App Service, and ML workloads' },
      { name: 'AWS', usage: 'S3, Glue, and SageMaker integrations' },
      { name: 'GCP', usage: 'Vertex AI experiments and BigQuery pipelines' },
      { name: 'Docker', usage: 'Containerized services and local stacks' },
      { name: 'Kubernetes', usage: 'Production orchestration for model services' },
    ],
  },
  {
    title: 'Languages',
    icon: <Terminal className="size-5" />,
    items: [
      { name: 'Python', usage: 'Primary language for AI, data, and automation' },
      { name: 'SQL', usage: 'Warehouse modeling, metrics, and analysis' },
      { name: 'TypeScript', usage: 'Strongly-typed frontends and tooling' },
      { name: 'Scala', usage: 'Streaming and Spark jobs at scale' },
      { name: 'Bash', usage: 'Automation scripts and deployment tooling' },
    ],
  },
];


const PROFICIENCY: Record<string, 'expert' | 'proficient' | 'working'> = {
  // Generative AI & LLM
  LangChain: 'expert',
  'Azure OpenAI': 'expert',
  LlamaIndex: 'proficient',
  Pinecone: 'proficient',
  Weaviate: 'proficient',

  // ML Platforms & Ops
  MLflow: 'expert',
  'Weights & Biases': 'expert',
  'Evidently AI': 'proficient',
  'Great Expectations': 'expert',
  Prefect: 'proficient',

  // Data Engineering
  'AWS Glue': 'proficient',
  'AWS Lambda': 'proficient',
  'AWS Redshift': 'proficient',
  'Apache Kafka': 'proficient',
  dbt: 'proficient',
  Snowflake: 'proficient',

  // Analytics & BI
  Tableau: 'expert',
  'Power BI': 'expert',
  Looker: 'proficient',
  'Mode Analytics': 'proficient',
  'Sigma Computing': 'proficient',

  // Cloud & DevOps
  Azure: 'expert',
  AWS: 'proficient',
  GCP: 'proficient',
  Docker: 'expert',
  Kubernetes: 'proficient',

  // Languages
  Python: 'expert',
  SQL: 'expert',
  TypeScript: 'proficient',
  Scala: 'proficient',
  Bash: 'working',
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
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Skills Stack</h2>
              <Code2 className="size-8 md:size-10 text-cyan-400" aria-hidden="true" />
            </div>
            <p className="text-lg md:text-xl text-neutral-400">
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
                className="flex items-center gap-2 whitespace-nowrap text-sm md:text-base font-medium text-neutral-300"
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
                <h3 className="text-xl md:text-2xl font-bold text-white">{group.title}</h3>
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
                            'group/skill relative inline-flex cursor-default items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm md:text-base font-medium text-neutral-200 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10 hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]',
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
                className="relative z-10 mt-4 flex items-center gap-2 text-sm md:text-base text-neutral-500"
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
