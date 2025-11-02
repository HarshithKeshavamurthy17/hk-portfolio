import { motion, useReducedMotion } from 'framer-motion';
import { Section } from '../components/layout/Section';
import { fadeIn, slideUp } from '../components/layout/Motion';

type TimelineNode = {
  company: string;
  title: string;
  period: string;
  bullets: string[];
  tech: string[];
};

const TIMELINE: TimelineNode[] = [
  {
    company: 'Tietoevry',
    title: 'AI/ML Intern',
    period: '2024',
    bullets: [
      'Optimized LLM evaluation harness for compliance narratives with retrieval-augmented analytics.',
      'Built monitoring to surface drift in 60+ enterprise datasets with automated remediation playbooks.',
    ],
    tech: ['Python', 'LangChain', 'Azure ML', 'Weights & Biases'],
  },
  {
    company: 'Nineleaps',
    title: 'Data Engineering & Analytics',
    period: '2023',
    bullets: [
      'Designed streaming quality gates that cut incident response time by 38%.',
      'Ran stakeholder analytics sprints translating raw telemetry into exec scorecards.',
    ],
    tech: ['Spark', 'Airflow', 'Snowflake', 'Tableau'],
  },
  {
    company: 'NASTECH',
    title: 'Machine Learning Engineer',
    period: '2022',
    bullets: [
      'Prototyped anomaly detection for edge devices with zero-downtime rollouts.',
      'Shipped REST services turning raw image data into actionables for field teams.',
    ],
    tech: ['PyTorch', 'FastAPI', 'Docker', 'OpenCV'],
  },
  {
    company: 'Quantum Ventura',
    title: 'Data Science Fellow',
    period: '2021',
    bullets: [
      'Guided startups on market fit using predictive and prescriptive analytics.',
      'Formalized experimentation playbooks aligning business KPIs with model metrics.',
    ],
    tech: ['scikit-learn', 'SQL', 'Power BI', 'AWS'],
  },
  {
    company: 'Boston University',
    title: 'Graduate Research Collaborator',
    period: '2020',
    bullets: [
      'Explored causal inference pipelines for healthcare readmission risk.',
      'Published findings on interpretable ML and collaborated with clinical partners.',
    ],
    tech: ['R', 'TensorFlow', 'Shiny', 'GitLab'],
  },
];

export function Experience() {
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
    <Section id="experience">
      <motion.div {...containerProps} className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="font-heading text-3xl font-semibold text-foreground">
            Experience Timeline
          </h2>
          <p className="text-muted-foreground">
            Hands-on roles building ML products, data platforms, and decision intelligence across
            startups and enterprise teams.
          </p>
        </div>

        <div className="relative pl-8">
          <span
            className="absolute left-[14px] top-3 h-[calc(100%-1.5rem)] w-px bg-accent/30"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-8">
            {TIMELINE.map((node) => (
              <motion.div
                key={node.company}
                variants={
                  shouldReduceMotion ? undefined : slideUp({ distance: 18, duration: 0.45 })
                }
                className="relative rounded-lg border border-border/40 bg-surface/60 p-6 shadow-sm"
              >
                <span className="absolute left-[-28px] top-6 flex size-5 items-center justify-center rounded-full border-2 border-accent bg-background" />
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {node.company}
                    </h3>
                    <p className="text-sm text-muted-foreground">{node.title}</p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                    {node.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {node.bullets.map((bullet) => (
                    <li key={bullet} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  {node.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border/50 bg-background/70 px-3 py-1 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
