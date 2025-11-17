import { useCallback, useMemo, useRef, useState, type MouseEvent, type ReactNode } from 'react';
import { motion, useReducedMotion, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Code2, FileText, Play, TrendingUp } from 'lucide-react';
import type { Project } from '../data/projects';
import { cn } from '../lib/cn';

type ProjectCardProps = {
  project: Project;
  onQuickView?: (project: Project, trigger: HTMLButtonElement) => void;
};

const cardVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

const linkIcons: Record<Project['links'][number]['kind'], ReactNode> = {
  code: <Code2 className="size-4" aria-hidden="true" />,
  demo: <Play className="size-4" aria-hidden="true" />,
  pdf: <FileText className="size-4" aria-hidden="true" />,
  case: <BookOpen className="size-4" aria-hidden="true" />,
};

export default function ProjectCard({ project, onQuickView }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const [thumbError, setThumbError] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement | null>(null);
  
  // Magnetic hover effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  
  // Spotlight effect
  const [spotlightPosition, setSpotlightPosition] = useState({ x: 50, y: 50 });
  
  const showThumb = Boolean(project.thumb && !thumbError);
  const sortedLinks = useMemo(() => {
    const order = { code: 0, demo: 1 } as const;
    return [...project.links]
      .filter((link) => link.kind !== 'case' && link.kind !== 'pdf' && link.href !== '')
      .sort((a, b) => (order[a.kind] ?? 99) - (order[b.kind] ?? 99));
  }, [project.links]);
  const hasLive = project.links.some((link) => link.kind === 'demo' && link.href !== '');
  const statusBadge = hasLive ? 'LIVE' : undefined;

  const handleMouseMove = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const xRatio = (event.clientX - rect.left) / rect.width - 0.5;
      const yRatio = (event.clientY - rect.top) / rect.height - 0.5;
      
      // 3D tilt effect
      const maxTilt = 6;
      setTilt({ x: -(yRatio * maxTilt * 2), y: xRatio * maxTilt * 2 });
      
      // Spotlight effect
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      setSpotlightPosition({ x, y });
      
      // Magnetic hover effect (subtle)
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;
      mouseX.set(deltaX * 0.03);
      mouseY.set(deltaY * 0.03);
    },
    [prefersReducedMotion, mouseX, mouseY],
  );

  const resetTilt = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <motion.article
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      tabIndex={0}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !prefersReducedMotion && setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        resetTilt();
      }}
      style={
        prefersReducedMotion
          ? undefined
          : {
              transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateX(${smoothMouseX.get()}px) translateY(${smoothMouseY.get()}px)`,
              transition: 'transform 0.2s ease-out',
            }
      }
      className={cn(
        'group/project relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] backdrop-blur-xl transition-all duration-500 ease-out hover:border-cyan-300/60 hover:shadow-[0_20px_80px_rgba(34,211,238,0.35),0_0_120px_rgba(34,211,238,0.15)_inset] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0f1720]'
      )}
    >
      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/project:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${spotlightPosition.x}% ${spotlightPosition.y}%, rgba(34, 211, 238, 0.15), transparent 40%)`,
        }}
        aria-hidden="true"
      />
      
      {/* Animated grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/project:opacity-30" aria-hidden="true">
        <div className="size-full" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }} />
      </div>
      {showThumb ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <img
            src={project.thumb}
            alt={`${project.title} thumbnail`}
            loading="lazy"
            decoding="async"
            className="size-full object-cover transition duration-500 ease-out group-hover/project:scale-110"
            onError={() => setThumbError(true)}
          />
          <span className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent" aria-hidden="true" />
          {project.preview?.type === 'video' ? (
            <video
              className={cn(
                'absolute inset-0 size-full object-cover opacity-0 transition duration-500 ease-out',
                isHovering && 'opacity-100',
              )}
              src={project.preview.src}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            />
          ) : null}
          <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover/project:opacity-100" aria-hidden="true">
            <span className="absolute inset-y-0 -left-16 w-1/3 skew-x-[22deg] bg-gradient-to-r from-transparent via-white/30 to-transparent blur-2xl" />
          </span>
        </div>
      ) : (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#164e63] to-[#0f172a]">
          <span className="absolute inset-0 bg-black/30" aria-hidden="true" />
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-[0.3em] text-cyan-200/70"
          >
            {project.title}
          </span>
          {project.preview?.type === 'video' ? (
            <video
              className={cn(
                'absolute inset-0 size-full object-cover opacity-0 transition duration-500 ease-out',
                isHovering && 'opacity-100',
              )}
              src={project.preview.src}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            />
          ) : null}
          <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover/project:opacity-100" aria-hidden="true">
            <span className="absolute inset-y-0 -left-16 w-1/3 skew-x-[22deg] bg-gradient-to-r from-transparent via-white/25 to-transparent blur-2xl" />
          </span>
        </div>
      )}
      {statusBadge ? (
        <span className="absolute right-4 top-4 inline-flex items-center rounded-full border border-cyan-300/60 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.4)]">
          {statusBadge}
        </span>
      ) : null}

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-col gap-1.5 text-left">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="flex-1">
              {project.id === 'vi-graph-rag' || project.id === 'f1-prediction' || project.id === 'oncovision' || project.id === 'autokpi' ? (
                <Link
                  to={project.id === 'vi-graph-rag' ? '/projects/vi-graph-rag' : project.id === 'f1-prediction' ? '/projects/f1-prediction' : project.id === 'oncovision' ? '/projects/oncovision' : '/projects/autokpi'}
                  className="text-lg font-bold text-white transition-colors hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1720] rounded"
                >
                  {project.title}
                </Link>
              ) : (
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
              )}
              <p className="line-clamp-2 text-xs leading-relaxed text-neutral-200 mt-2">{project.summary}</p>
            </div>
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-300/60 font-semibold">{project.subtitle}</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-neutral-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.metrics && project.metrics.length > 0 && (
          <div className="relative flex flex-wrap gap-1.5">
            <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 blur-xl transition-opacity duration-500 group-hover/project:opacity-100" aria-hidden="true" />
            {project.metrics.map((metric, index) => (
              <motion.div
                key={`${project.id}-${metric}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/5 px-2.5 py-1 backdrop-blur-sm"
              >
                <TrendingUp className="size-2.5 text-cyan-400" aria-hidden="true" />
                <span className="text-[10px] font-bold text-cyan-200">
                  {metric}
                </span>
                <motion.span
                  className="absolute inset-0 rounded-full bg-cyan-400/10"
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  aria-hidden="true"
                />
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.id === 'vi-graph-rag' || project.id === 'f1-prediction' || project.id === 'oncovision' || project.id === 'autokpi' ? (
            <Link
              to={project.id === 'vi-graph-rag' ? '/projects/vi-graph-rag' : project.id === 'f1-prediction' ? '/projects/f1-prediction' : project.id === 'oncovision' ? '/projects/oncovision' : '/projects/autokpi'}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-white transition hover:border-cyan-300/60 hover:bg-cyan-200/10 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1720]"
            >
              Quick View
            </Link>
          ) : (
            <button
              type="button"
              onClick={(event) => onQuickView?.(project, event.currentTarget)}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-white transition hover:border-cyan-300/60 hover:bg-cyan-200/10 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1720]"
            >
              Quick View
            </button>
          )}
          {sortedLinks.map((link) => (
            <a
              key={`${project.id}-${link.kind}-${link.href}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${link.label} for ${project.title}`}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1720]',
                buttonStyles[link.kind] ?? buttonStyles.demo,
              )}
            >
              {linkIcons[link.kind]}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

const buttonStyles: Record<Project['links'][number]['kind'] | 'demo', string> = {
  code: 'bg-cyan-500 text-slate-950 hover:bg-cyan-400',
  case: 'border border-cyan-400/60 text-cyan-200 hover:border-cyan-300 hover:bg-cyan-300/10',
  pdf: 'text-neutral-200 hover:bg-white/5',
  demo: 'border border-white/10 text-neutral-200 hover:bg-white/5',
};

