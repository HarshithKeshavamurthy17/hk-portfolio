import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Gauge, ShieldAlert, ServerCog, BrainCircuit } from 'lucide-react';
import * as React from 'react';
import { fadeIn, slideUp, stagger } from '../components/layout/Motion';

const highlights = [
  {
    icon: Gauge,
    label: 'Balanced Accuracy',
    value: '83.19%',
    description: 'CS699 ensemble',
  },
  {
    icon: ShieldAlert,
    label: 'CVEs Ingested',
    value: '2002–2024',
    description: 'Graph-RAG',
  },
  {
    icon: ServerCog,
    label: 'Preprocess Throughput',
    value: '3,747 rows/sec',
    description: 'Streaming ETL',
  },
  {
    icon: BrainCircuit,
    label: 'Models Trained',
    value: '>36',
    description: 'ML pipelines',
  },
];

export function Highlights() {
  const sectionRef = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.4 });
  const shouldReduceMotion = useReducedMotion();
  const containerVariants = shouldReduceMotion ? undefined : stagger(0.14, 0.1);
  const containerProps = shouldReduceMotion
    ? {}
    : {
        variants: containerVariants,
        initial: 'hidden',
        animate: inView ? 'show' : 'hidden',
      };

  return (
    <motion.div ref={sectionRef} className="grid gap-4 md:grid-cols-2" {...containerProps}>
      {highlights.map(({ icon: Icon, label, value, description }) => (
        <motion.article
          key={label}
          variants={shouldReduceMotion ? undefined : slideUp({ distance: 16, duration: 0.45 })}
          className="group flex h-full flex-col gap-3 rounded-lg border border-border/50 bg-surface/60 p-5 shadow-sm transition hover:border-accent/60 hover:shadow-lg"
        >
          <motion.div
            variants={shouldReduceMotion ? undefined : fadeIn({ duration: 0.3 })}
            className="flex items-center gap-3"
          >
            <span className="flex size-10 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">{label}</p>
          </motion.div>
          <h3 className="font-heading text-3xl font-semibold text-foreground">{value}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </motion.article>
      ))}
    </motion.div>
  );
}
