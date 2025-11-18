import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sparkles, Grid3x3, List } from 'lucide-react';
import projectsData from '../data/projects';
import type { Project } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import CaseModal from '../components/CaseModal';

const FILTERS = ['All', 'AI/ML', 'Data Eng', 'Analytics'] as const;
type Filter = (typeof FILTERS)[number];
type ViewMode = 'grid' | 'list';

const CATEGORY_MAP: Record<string, Filter> = {
  'vi-graph-rag': 'AI/ML',
  'uber-etl': 'Data Eng',
  'f1-prediction': 'AI/ML',
  'breast-cancer-ml': 'AI/ML',
  'cs699-ensemble': 'Analytics',
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [quickView, setQuickView] = useState<{
    project: Project;
  } | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const filtered: Project[] = useMemo(() => {
    if (activeFilter === 'All') return projectsData;
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
    <section id="projects" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-[10%] top-[20%] size-[600px] rounded-full bg-gradient-to-br from-blue-500/15 to-transparent blur-3xl" />
      
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/5 px-4 py-2 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="size-4 text-blue-400" />
            </motion.div>
            <span className="text-sm font-medium text-blue-300">Showcase</span>
          </motion.div>
          
          <h2 className="mb-4 text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Featured Work
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-400">
            Production systems and research projects that solve real-world problems
          </p>
        </motion.div>

        {/* Filters and View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex flex-wrap items-center gap-2">
            {FILTERS.map((filter, index) => (
              <motion.button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.94 }}
                className={`relative overflow-hidden rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'border-cyan-400/70 bg-gradient-to-r from-cyan-500/25 to-blue-500/25 text-cyan-100 shadow-lg shadow-cyan-500/50'
                    : 'border-white/10 bg-white/5 text-neutral-300 hover:border-cyan-400/60 hover:bg-white/10'
                }`}
              >
                <span className="relative z-10">{filter}</span>
                {activeFilter === filter && (
                  <motion.span
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
            <motion.button
              onClick={() => setViewMode('grid')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full p-2 transition-all ${
                viewMode === 'grid'
                  ? 'bg-cyan-500/20 text-cyan-300'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Grid3x3 className="size-4" />
            </motion.button>
            <motion.button
              onClick={() => setViewMode('list')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full p-2 transition-all ${
                viewMode === 'list'
                  ? 'bg-cyan-500/20 text-cyan-300'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <List className="size-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={viewMode}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`${
            viewMode === 'grid' 
              ? 'grid gap-6 md:grid-cols-2 lg:grid-cols-3' 
              : 'flex flex-col gap-6'
          }`}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  layout: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  delay: index * 0.05
                }}
              >
                <ProjectCard
                  project={project}
                  viewMode={viewMode}
                  onQuickView={(selectedProject, trigger) => {
                    lastTriggerRef.current = trigger;
                    setQuickView({ project: selectedProject });
                  }}
                />
              </motion.div>
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
