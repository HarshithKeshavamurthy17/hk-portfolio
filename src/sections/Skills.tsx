import { motion, useReducedMotion } from 'framer-motion';
import { Section } from '../components/layout/Section';
import { fadeIn, slideUp } from '../components/layout/Motion';
import { cn } from '../lib/cn';

type SkillGroup = {
  title: string;
  items: Array<{
    name: string;
    usage: string;
  }>;
};

const GROUPS: SkillGroup[] = [
  {
    title: 'AI/ML',
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
    items: [
      { name: 'Tableau', usage: 'used for exec scorecards at Nineleaps' },
      { name: 'Power BI', usage: 'used during Quantum Ventura engagements' },
      { name: 'Looker', usage: 'used in data product instrumentation' },
      { name: 'Mode Analytics', usage: 'used for ad-hoc investigations' },
    ],
  },
  {
    title: 'Cloud & DevOps',
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
    items: [
      { name: 'Python', usage: 'primary language for AI/ML pipelines' },
      { name: 'TypeScript', usage: 'used in F1 live prediction client' },
      { name: 'Scala', usage: 'used in Uber ETL ingestion jobs' },
      { name: 'SQL', usage: 'used across analytics deliverables' },
      { name: 'R', usage: 'used in Boston University research' },
    ],
  },
];

export function Skills() {
  const shouldReduceMotion = useReducedMotion();
  const containerVariants = shouldReduceMotion ? undefined : fadeIn({ duration: 0.45 });
  const containerProps = shouldReduceMotion
    ? {}
    : {
        variants: containerVariants,
        initial: 'hidden',
        whileInView: 'show',
        viewport: { once: true, amount: 0.2 },
      };
  return (
    <Section id="skills">
      <motion.div {...containerProps} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-heading text-3xl font-semibold text-foreground">Skills Stack</h2>
          <p className="text-muted-foreground">
            Tools and languages underpinning AI/ML products, data engineering platforms, and
            decision intelligence workstreams.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {GROUPS.map((group) => (
            <motion.div
              key={group.title}
              variants={shouldReduceMotion ? undefined : slideUp({ distance: 18, duration: 0.4 })}
              className="rounded-xl border border-border/40 bg-surface/60 p-6 shadow-sm"
            >
              <h3 className="font-heading text-xl font-semibold text-foreground">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <Tooltip label={item.usage}>
                      <span
                        className={cn(
                          'inline-flex items-center rounded-full border border-border/60 bg-background/80 px-3 py-1 font-medium transition-colors hover:border-accent/60 hover:text-foreground',
                        )}
                      >
                        {item.name}
                      </span>
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

type TooltipProps = {
  label: string;
  children: React.ReactNode;
};

function Tooltip({ label, children }: TooltipProps) {
  return (
    <span className="group relative inline-flex">
      {children}
      <span className="pointer-events-none absolute bottom-full left-1/2 z-20 hidden w-max -translate-x-1/2 translate-y-[-6px] rounded-md border border-border/50 bg-background/95 px-3 py-1 text-xs text-muted-foreground shadow-lg backdrop-blur group-hover:block">
        {label}
      </span>
    </span>
  );
}
