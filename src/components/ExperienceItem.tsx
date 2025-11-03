import { useCallback, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, ChevronDown } from 'lucide-react';
import type { Experience } from '../data/experience';
import { cn } from '../lib/cn';

type ExperienceItemProps = {
  exp: Experience;
};

const itemVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

export default function ExperienceItem({ exp }: ExperienceItemProps) {
  const [logoError, setLogoError] = useState(false);
  const initials = useMemo(() => {
    return exp.company
      .split(' ')
      .map((part) => part.charAt(0).toUpperCase())
      .slice(0, 2)
      .join('');
  }, [exp.company]);

  const hasHiddenImpact = exp.impact.length > 4;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandChange = useCallback((expanded: boolean) => {
    setIsExpanded(expanded);
  }, []);

  const visibleImpact = isExpanded ? exp.impact : exp.impact.slice(0, 4);

  return (
    <motion.article
      variants={itemVariants}
      initial="initial"
      whileInView="animate"
      whileHover={{ y: -4 }}
      viewport={{ once: true, amount: 0.2 }}
      tabIndex={0}
      aria-expanded={isExpanded}
      onMouseEnter={() => handleExpandChange(true)}
      onMouseLeave={() => handleExpandChange(false)}
      onFocusCapture={() => handleExpandChange(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          handleExpandChange(false);
        }
      }}
      className={cn(
        'group/exp relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-white/[0.01] p-7 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/50 hover:bg-gradient-to-br hover:from-white/[0.08] hover:via-white/[0.05] hover:to-white/[0.02] hover:shadow-[0_12px_50px_rgba(34,211,238,0.25)] focus-within:border-cyan-300/50 focus-within:bg-gradient-to-br focus-within:from-white/[0.08] focus-within:via-white/[0.05] focus-within:to-white/[0.02]',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:ring-offset-4',
      )}
    >
      {/* Animated background orb */}
      <motion.div
        className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover/exp:opacity-100"
        aria-hidden="true"
      />


      {/* Header */}
      <header className="flex items-start gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 group-hover/exp:ring-2 group-hover/exp:ring-cyan-400/30">
          {exp.logo && !logoError ? (
            <img
              src={exp.logo}
              alt={`${exp.company} logo`}
              width={40}
              height={40}
              className="size-9 object-contain"
              loading="lazy"
              decoding="async"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="text-base font-bold text-neutral-200">{initials}</span>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <h3 className="text-base font-bold text-white">{exp.company}</h3>
          <p className="text-sm text-neutral-400">{exp.role}</p>
        </div>
        <span
          className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-300"
          aria-label={`Tenure: ${exp.start} to ${exp.end}`}
        >
          {exp.start} — {exp.end}
        </span>
      </header>

      {/* Project summary */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/50 to-transparent" />
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">{exp.summary}</span>
          <div className="h-px flex-1 bg-gradient-to-l from-cyan-400/50 to-transparent" />
        </div>
        {exp.description && (
          <p className="text-sm leading-relaxed text-neutral-300">{exp.description}</p>
        )}
      </div>

      {/* Impact list */}
      <div className="relative flex-1">
        <motion.div
          className="absolute -left-4 top-0 h-full w-1 rounded-full bg-gradient-to-b from-cyan-500/50 to-transparent opacity-0 transition-opacity duration-300 group-hover/exp:opacity-100"
          aria-hidden="true"
        />
        <ul
          className={cn(
            'relative space-y-3 text-sm text-neutral-200 transition-all duration-300',
          )}
        >
          {visibleImpact.map((item, index) => (
            <motion.li
              key={`${exp.id}-impact-${index}`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="group/item flex items-start gap-3"
            >
              <motion.span
                aria-hidden="true"
                className="mt-1.5 size-2 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                whileHover={{ scale: 1.3, boxShadow: "0 0 20px rgba(34,211,238,0.8)" }}
                transition={{ duration: 0.2 }}
              />
              <span className="flex-1 leading-relaxed transition-colors group-hover/item:text-white">{item}</span>
            </motion.li>
          ))}
        </ul>

        {/* Expand indicator */}
        {hasHiddenImpact && !isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 flex items-center justify-center gap-2"
          >
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-cyan-400/70"
            >
              <ChevronDown className="size-4" aria-hidden="true" />
              <span>Hover to see {exp.impact.length - 4} more</span>
              <ChevronDown className="size-4" aria-hidden="true" />
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Tech stack */}
      <div className="relative mt-auto">
        <div className="pointer-events-none absolute -inset-2 rounded-xl bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 blur-lg transition-opacity duration-500 group-hover/exp:opacity-100" aria-hidden="true" />
        <div className="relative flex flex-wrap gap-2">
          {exp.tech.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.04 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="group/tech relative cursor-default overflow-hidden rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-neutral-200 transition-all hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-cyan-200 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-1">
                <Zap className="size-3 opacity-0 transition-opacity group-hover/tech:opacity-100" aria-hidden="true" />
                {tech}
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                aria-hidden="true"
              />
            </motion.span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
