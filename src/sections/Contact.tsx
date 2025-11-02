import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Section } from '../components/layout/Section';
import { fadeIn, slideUp } from '../components/layout/Motion';
import { Button } from '../components/ui/button';

const socials = [
  {
    ariaLabel: 'Open GitHub profile (HarshithKeshavamurthy17)',
    href: 'https://github.com/HarshithKeshavamurthy17',
    label: 'GitHub',
    icon: Github,
  },
  {
    ariaLabel: 'Open LinkedIn profile (harshith-k-bu)',
    href: 'https://www.linkedin.com/in/harshith-k-bu/',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    ariaLabel: 'Email Harshith (harshith2001@gmail.com)',
    href: 'mailto:harshith2001@gmail.com',
    label: 'Email',
    icon: Mail,
  },
];

export function Contact() {
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
  const leftColumnVariants = shouldReduceMotion
    ? undefined
    : slideUp({ distance: 20, duration: 0.45 });
  const rightColumnVariants = shouldReduceMotion
    ? undefined
    : slideUp({ distance: 24, duration: 0.45, delay: 0.1 });
  return (
    <Section id="contact">
      <motion.div
        {...containerProps}
        className="grid gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]"
      >
        <motion.div variants={leftColumnVariants} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-3xl font-semibold text-foreground">
              Let&apos;s build together
            </h2>
            <p className="text-muted-foreground">
              Drop a note about data platform needs, ML experimentation roadmaps, or collaboration
              ideas. I respond in under two business days.
            </p>
          </div>
          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="grid gap-4 rounded-xl border border-border/40 bg-surface/60 p-6 shadow-sm"
          >
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="rounded-lg border border-border/50 bg-background/70 px-3 py-2 text-sm text-foreground outline-none ring-offset-background transition focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="rounded-lg border border-border/50 bg-background/70 px-3 py-2 text-sm text-foreground outline-none ring-offset-background transition focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about the problem, dataset, or opportunity."
                rows={5}
                required
                className="rounded-lg border border-border/50 bg-background/70 px-3 py-2 text-sm text-foreground outline-none ring-offset-background transition focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              />
            </div>
            <Button type="submit" className="self-start">
              Send message
            </Button>
            <p className="text-xs text-muted-foreground">
              Formspree placeholder active — replace the action URL with your production endpoint
              when ready.
            </p>
          </form>
        </motion.div>

        <motion.div variants={rightColumnVariants} className="flex flex-col gap-5">
          <div className="rounded-xl border border-border/40 bg-surface/60 p-6 shadow-sm">
            <h3 className="font-heading text-lg font-semibold text-foreground">Direct reach</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Prefer async? Email{' '}
              <a
                href="mailto:harshith2001@gmail.com"
                aria-label="Email Harshith (harshith2001@gmail.com)"
                className="rounded-md text-[#22d3ee] underline-offset-4 transition hover:text-[#22d3ee]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1720]"
              >
                harshith2001@gmail.com
              </a>{' '}
              or connect on any channel below.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {socials.map(({ label, href, icon: Icon, ariaLabel }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={ariaLabel}
                    className="flex items-center gap-2 rounded-md text-muted-foreground transition hover:text-[#22d3ee] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1720]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="size-4 text-[#22d3ee]" aria-hidden="true" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
