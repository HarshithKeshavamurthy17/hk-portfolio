import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { fadeIn, slideUp, stagger } from '../components/layout/Motion';

const kpis = [
  { label: 'Business Accuracy', value: '83.19% BA' },
  { label: 'Streaming Throughput', value: '3,747 rows/sec' },
  { label: 'Threat Intelligence', value: '2002–2024 CVEs' },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const containerProps = shouldReduceMotion
    ? {}
    : {
        variants: stagger(0.16, 0.12),
        initial: 'hidden',
        animate: 'show',
      };
  const introTextVariants = shouldReduceMotion ? undefined : fadeIn({ duration: 0.3 });
  const introBlockVariants = shouldReduceMotion ? undefined : slideUp();
  const kpiVariants = shouldReduceMotion ? undefined : fadeIn({ duration: 0.4, delay: 0.1 });

  return (
    <motion.div className="flex flex-col gap-6" {...containerProps}>
      <motion.p
        variants={introTextVariants}
        className="text-sm font-semibold uppercase tracking-[0.4em] text-accent"
      >
        Data • AI • Analytics
      </motion.p>
      <motion.div variants={introBlockVariants} className="flex flex-col gap-6">
        <h1 className="font-heading text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Harshith K
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          I turn messy data into clean decisions.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild className="gap-2">
            <a href="/#projects">
              View Projects
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="ghost" className="gap-2">
            <a href="/#contact">
              Contact
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </motion.div>
      <motion.div variants={kpiVariants} className="flex flex-wrap gap-3">
        {kpis.map((item) => (
          <span
            key={item.label}
            className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-medium uppercase tracking-widest text-accent"
          >
            {item.value}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}
