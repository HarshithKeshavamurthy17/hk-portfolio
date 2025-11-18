import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
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

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All');
  const [quickView, setQuickView] = useState<{
    project: Project;
  } | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  // Check scroll position
  const checkScroll = useCallback(() => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    checkScroll();
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', checkScroll);
      return () => carousel.removeEventListener('scroll', checkScroll);
    }
  }, [checkScroll, filtered]);

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.clientWidth * 0.8;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="projects" className="relative py-12 md:py-16 overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-[10%] top-[20%] size-[600px] rounded-full bg-gradient-to-br from-blue-500/15 to-transparent blur-3xl" />
      
      <div className="mx-auto w-full max-w-[1920px] px-6 md:px-8 lg:px-12">
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

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-wrap items-center justify-center gap-2"
        >
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
        </motion.div>

        {/* 3D Carousel Container */}
        <div className="relative">
          {/* Scroll Buttons */}
          {canScrollLeft && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 z-20 -translate-y-1/2 flex size-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-xl transition-all hover:border-cyan-400/60 hover:bg-black/80 hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="size-6" />
            </motion.button>
          )}
          
          {canScrollRight && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 z-20 -translate-y-1/2 flex size-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-xl transition-all hover:border-cyan-400/60 hover:bg-black/80 hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="size-6" />
            </motion.button>
          )}

          {/* 3D Carousel Scroll Container */}
          <div
            ref={carouselRef}
            className="carousel-container relative overflow-x-auto overflow-y-hidden py-8"
            style={{
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              perspective: '1200px',
              perspectiveOrigin: 'center',
            }}
          >
            <style>{`
              .carousel-container::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            <motion.div
              className="flex gap-8 pb-4"
              style={{
                transformStyle: 'preserve-3d',
                paddingLeft: 'max(1rem, calc((100vw - 450px) / 2))',
                paddingRight: 'max(1rem, calc((100vw - 450px) / 2))',
              }}
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      rotateY: 0,
                    }}
                    exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                    transition={{ 
                      layout: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.4 },
                      scale: { duration: 0.4 },
                      rotateY: { duration: 0.5 },
                      delay: index * 0.08
                    }}
                    className="flex-shrink-0"
                    style={{
                      width: 'min(450px, 85vw)',
                      scrollSnapAlign: 'center',
                      transformStyle: 'preserve-3d',
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotateY: 0,
                      z: 50,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <ProjectCard
                      project={project}
                      viewMode="grid"
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

          {/* Gradient fades on edges - only show when scrollable */}
          {canScrollLeft && (
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent z-10" />
          )}
          {canScrollRight && (
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#020617] via-[#020617]/80 to-transparent z-10" />
          )}
        </div>

        {/* Drag hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 text-center text-sm text-neutral-500"
        >
          <motion.span
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            ← Drag to explore →
          </motion.span>
        </motion.p>
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
