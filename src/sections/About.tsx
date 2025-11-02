import { motion, useReducedMotion } from 'framer-motion';
import { Section } from '../components/layout/Section';
import { fadeIn, slideUp } from '../components/layout/Motion';

export function About() {
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
    <Section id="about">
      <motion.div {...containerProps} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-heading text-3xl font-semibold text-foreground">About Harshith</h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            I&apos;m an applied data scientist engineering end-to-end intelligence systems that
            bridge messy, real-world streams with precise decision loops. I&apos;m currently at
            Boston University&apos;s Applied Data Analytics program while freelancing on high-impact
            AI deployments.
          </p>
        </div>

        <motion.div
          variants={shouldReduceMotion ? undefined : slideUp({ distance: 18, duration: 0.4 })}
          className="grid gap-4 rounded-xl border border-border/40 bg-surface/60 p-6 shadow-sm"
        >
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <span className="font-semibold text-foreground">
                Boston University · Applied Data Analytics
              </span>
              — exploring graph retrieval, evaluation tooling, and human-in-the-loop operations.
            </li>
            <li>
              <span className="font-semibold text-foreground">
                RNS Institute of Technology · Computer Science
              </span>
              — grounded in systems engineering, compilers, and large scale data platforms.
            </li>
            <li>
              <span className="font-semibold text-foreground">Formula 1 enthusiast</span> — I
              translate race strategy telemetry into predictive dashboards and enjoy sim weekends
              with the entire paddock timeline.
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </Section>
  );
}
