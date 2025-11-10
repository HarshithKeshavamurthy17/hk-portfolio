import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import projectsData from '../data/projects';
import type { Project } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import CaseModal from '../components/CaseModal';

const FILTERS = ['All', 'AI/ML', 'Data Eng', 'Analytics'] as const;
type Filter = (typeof FILTERS)[number];

const CATEGORY_MAP: Record<string, Filter> = {
  'vi-graph-rag': 'AI/ML',
  'uber-etl': 'Data Eng',
  'f1-prediction': 'AI/ML',
  'breast-cancer-ml': 'AI/ML',
  'cs699-ensemble': 'Analytics',
};

const containerVariants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut' as const,
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All');
  const [quickView, setQuickView] = useState<{
    project: Project;
  } | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const filtered: Project[] = useMemo(() => {
    if (activeFilter === 'All') {
      return projectsData;
    }
    return projectsData.filter((project) => CATEGORY_MAP[project.id] === activeFilter);
  }, [activeFilter]);

  const handleCloseModal = useCallback(() => {
    setQuickView(null);
  }, []);

  useEffect(() => {
    if (!quickView && lastTriggerRef.current) {
      lastTriggerRef.current.focus();
      lastTriggerRef.current = null;
    }
  }, [quickView]);

  return (
    <section id="projects" className="relative pt-0">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 blur-3xl" aria-hidden="true" />
      
      <div className="mx-auto w-full max-w-[1400px] px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div className="relative">
            <motion.div
              className="absolute -left-4 top-0 h-full w-1 rounded-full bg-gradient-to-b from-cyan-500 to-blue-500"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
              aria-hidden="true"
            />
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold text-white">
                Highlighted Projects
              </h2>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="size-6 text-cyan-400" aria-hidden="true" />
              </motion.div>
            </div>
            <p className="mt-1 text-sm text-neutral-400">
              Hands-on systems I&apos;ve shipped and studied · Click to explore
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter, index) => {
              const isActive = activeFilter === filter;
              return (
                <motion.button
                  key={filter}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative overflow-hidden rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1720] ${
                    isActive
                      ? 'border-cyan-400 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                      : 'border-white/10 bg-white/5 text-neutral-300 hover:border-cyan-400/60 hover:bg-white/10 hover:text-cyan-200'
                  }`}
                >
                  <span className="relative z-10">{filter}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      aria-hidden="true"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="sync">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onQuickView={(selectedProject, trigger) => {
                  lastTriggerRef.current = trigger;
                  setQuickView({ project: selectedProject });
                }}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <CaseModal
        open={Boolean(quickView)}
        onClose={handleCloseModal}
        title={quickView?.project.title ?? ''}
        problem={quickView?.project.summary ?? ''}
        approach={quickView?.project.subtitle ?? ''}
        impact={quickView?.project.impact ?? []}
        stack={quickView?.project.tech ?? []}
        links={(quickView?.project.links ?? []).map((link) => ({ label: link.label, href: link.href }))}
      />
    </section>
  );
}

