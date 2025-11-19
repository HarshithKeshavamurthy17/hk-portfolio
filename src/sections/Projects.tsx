import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import projectsData from '../data/projects';
import type { Project } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import CaseModal from '../components/CaseModal';

export default function Projects() {
  const navigate = useNavigate();
  const [quickView, setQuickView] = useState<{
    project: Project;
  } | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  // Projects that have case study pages
  const projectsWithCaseStudies = ['vi-graph-rag', 'f1-prediction', 'oncovision', 'autokpi'];

  const filtered: Project[] = useMemo(() => {
    return projectsData;
  }, []);

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
    <section id="projects" className="relative py-6 md:py-8 overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-[10%] top-[20%] size-[350px] rounded-full bg-gradient-to-br from-blue-500/15 to-transparent blur-3xl" />
      
      <div className="mx-auto w-full max-w-[1400px] px-3 md:px-5 lg:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-center"
        >
          <motion.div
            className="mb-2 inline-flex items-center gap-1 rounded-full border border-blue-400/20 bg-blue-500/5 px-2.5 py-1 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="size-2.5 text-blue-400" />
            </motion.div>
            <span className="text-[10px] font-medium text-blue-300">Showcase</span>
          </motion.div>
          
          <h2 className="mb-2 text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Recent Work
          </h2>
          <p className="mx-auto max-w-2xl text-xs text-neutral-400">
            Production systems and research projects that solve real-world problems
          </p>
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
            className="carousel-container relative overflow-x-auto overflow-y-visible py-8"
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
              className="flex gap-8 pb-4 pl-4 pr-[max(2rem,calc((100vw-450px)/2))]"
              style={{
                transformStyle: 'preserve-3d',
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
                      layout: { type: "spring", stiffness: 200, damping: 40 },
                      opacity: { duration: 0.3 },
                      scale: { duration: 0.3 },
                      rotateY: { duration: 0.3 },
                      delay: index * 0.05
                    }}
                    className="flex-shrink-0"
                    style={{
                      width: 'min(450px, 85vw)',
                      scrollSnapAlign: 'center',
                      transformStyle: 'preserve-3d',
                      minWidth: 'min(450px, 85vw)',
                      willChange: 'transform',
                      transform: 'translateZ(0)',
                    }}
                    whileHover={{
                      scale: 1.02,
                      rotateY: 0,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <ProjectCard
                      project={project}
                      viewMode="grid"
                      onQuickView={(selectedProject) => {
                        // For projects with case studies, navigate to the page
                        if (projectsWithCaseStudies.includes(selectedProject.id)) {
                          const routeMap: Record<string, string> = {
                            'vi-graph-rag': '/projects/vi-graph-rag',
                            'f1-prediction': '/projects/f1-prediction',
                            'oncovision': '/projects/oncovision',
                            'autokpi': '/projects/autokpi',
                          };
                          navigate(routeMap[selectedProject.id]);
                        } else {
                          // For other projects, show modal
                          setQuickView({ project: selectedProject });
                        }
                      }}
                      onClick={() => {
                        // Navigate to case study page for projects that have one
                        if (projectsWithCaseStudies.includes(project.id)) {
                          const routeMap: Record<string, string> = {
                            'vi-graph-rag': '/projects/vi-graph-rag',
                            'f1-prediction': '/projects/f1-prediction',
                            'oncovision': '/projects/oncovision',
                            'autokpi': '/projects/autokpi',
                          };
                          navigate(routeMap[project.id]);
                        } else {
                          // For other projects, show modal
                          setQuickView({ project });
                        }
                      }}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Gradient fades on edges - only show when scrollable */}
          {canScrollLeft && (
            <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-transparent z-10" />
          )}
          {canScrollRight && (
            <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#020617] via-[#020617]/90 to-transparent z-10" />
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
