import { Suspense, lazy, type ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Glow } from './components/layout/Glow';
import { Footer } from './components/layout/Footer';
import { SEO } from './components/layout/SEO';
import { stagger } from './components/layout/Motion';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import StickyCTA from './components/StickyCTA';
import CommandPalette, { type CommandItem } from './components/CommandPalette';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import { Skills } from './sections/Skills';
import { About } from './sections/About';
import { Contact } from './sections/Contact';

const VIGraphRAG = lazy(() => import('./routes/case/VIGraphRAG'));
const UberETL = lazy(() => import('./routes/case/UberETL'));
const F1Prediction = lazy(() => import('./routes/case/F1Prediction'));
const BreastCancerML = lazy(() => import('./routes/case/BreastCancerML'));
const CS699Ensemble = lazy(() => import('./routes/case/CS699Ensemble'));

const HomePage = () => {
  const [commandOpen, setCommandOpen] = useState(false);
  const liveRegionRef = useRef<HTMLDivElement | null>(null);

  const handleAnnounce = useCallback((message: string) => {
    if (!liveRegionRef.current) return;
    liveRegionRef.current.textContent = message;
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (target && ['INPUT', 'TEXTAREA'].includes(target.tagName)) return;

      const idMap: Record<string, string> = {
        g: '#projects',
        e: '#experience',
        s: '#skills',
        c: '#contact',
      };

      if (idMap[event.key]) {
        const anchor = document.querySelector(idMap[event.key]);
        if (anchor) {
          event.preventDefault();
          anchor.scrollIntoView({ behavior: 'smooth' });
          handleAnnounce(`Moved to ${idMap[event.key].replace('#', '')} section`);
        }
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleAnnounce]);

  useEffect(() => {
    const handlePaletteToggle = (event: KeyboardEvent) => {
      if (!(event.metaKey || event.ctrlKey) || event.key.toLowerCase() !== 'k') {
        return;
      }
      const target = event.target as HTMLElement;
      if (target && ['INPUT', 'TEXTAREA'].includes(target.tagName)) {
        return;
      }
      event.preventDefault();
      setCommandOpen((prev) => !prev);
    };

    window.addEventListener('keydown', handlePaletteToggle);
    return () => window.removeEventListener('keydown', handlePaletteToggle);
  }, []);

  const scrollToSection = useCallback(
    (selector: string, announcement: string) => {
      if (typeof document === 'undefined') {
        return;
      }
      const anchor = document.querySelector(selector);
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth' });
        handleAnnounce(announcement);
      }
    },
    [handleAnnounce],
  );

  const commands: CommandItem[] = useMemo(
    () => [
      {
        id: 'go-projects',
        title: 'Go to Projects',
        description: 'Jump to highlighted projects',
        action: () => scrollToSection('#projects', 'Moved to projects section'),
      },
      {
        id: 'go-experience',
        title: 'Go to Experience',
        description: 'Scroll to experience timeline',
        action: () => scrollToSection('#experience', 'Moved to experience section'),
      },
      {
        id: 'go-skills',
        title: 'Go to Skills',
        description: 'Jump to skills stack overview',
        action: () => scrollToSection('#skills', 'Moved to skills section'),
      },
      {
        id: 'go-contact',
        title: 'Go to Contact',
        description: 'Scroll to contact form',
        action: () => scrollToSection('#contact', 'Moved to contact section'),
      },
      {
        id: 'open-resume',
        title: 'Open Resume',
        description: 'Download Harshith’s resume (PDF)',
        action: () => {
          if (typeof window !== 'undefined') {
            window.open('/assets/Harshith_Keshavamurthy_Resume.pdf', '_blank', 'noopener');
          }
          handleAnnounce('Opened resume in new tab');
        },
      },
      {
        id: 'email-harshith',
        title: 'Email Harshith',
        description: 'harshith2001@gmail.com',
        action: () => {
          if (typeof window !== 'undefined') {
            window.location.href = 'mailto:harshith2001@gmail.com';
          }
          handleAnnounce('Opening email client');
        },
      },
    ],
    [handleAnnounce, scrollToSection],
  );

  return (
    <main className="flex flex-col gap-10 pb-20">
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to content
      </a>
      <div ref={liveRegionRef} aria-live="polite" className="sr-only" />
      <SEO
        title="Harshith K — Data, AI & Analytics Engineer"
        description="Harshith K blends AI/ML, data engineering, and analytics to turn noisy telemetry into reliable decisions."
        canonical="https://harinik.dev"
        jsonLd={homeJsonLd}
      />
      <motion.div
        id="main-content"
        variants={stagger(0.18, 0.12)}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-10"
      >
        <Hero />
        <TrustedBy />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </motion.div>
      <StickyCTA />
      <CommandPalette
        open={commandOpen}
        onClose={() => setCommandOpen(false)}
        commands={commands}
      />
    </main>
  );
};

const homeJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Harshith K',
    url: 'https://harinik.dev/',
    email: 'mailto:harshith2001@gmail.com',
    sameAs: [
      'https://github.com/HarshithKeshavamurthy17',
      'https://www.linkedin.com/in/harshith-k-bu/',
      'mailto:harshith2001@gmail.com',
    ],
    jobTitle: 'Data & AI Engineer',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Harshith K Portfolio',
    url: 'https://harinik.dev/',
  },
];

function App() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      <Glow />
      <Navbar />
      <div className="flex-1">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Navigate to="/#projects" replace />} />
          <Route
            path="/case/vi-graph-rag"
            element={<CaseFallbackSuspense component={<VIGraphRAG />} />}
          />
          <Route path="/case/uber-etl" element={<CaseFallbackSuspense component={<UberETL />} />} />
          <Route
            path="/case/f1-prediction"
            element={<CaseFallbackSuspense component={<F1Prediction />} />}
          />
          <Route
            path="/case/breast-cancer-ml"
            element={<CaseFallbackSuspense component={<BreastCancerML />} />}
          />
          <Route
            path="/case/cs699-ensemble"
            element={<CaseFallbackSuspense component={<CS699Ensemble />} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function CaseFallbackSuspense({ component }: { component: ReactNode }) {
  return <Suspense fallback={<CaseStudyFallback />}>{component}</Suspense>;
}

function CaseStudyFallback() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 py-20 text-muted-foreground">
      <div
        className="size-5 animate-spin rounded-full border-2 border-accent border-t-transparent"
        aria-hidden="true"
      />
      <p>Loading case study…</p>
    </main>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (hash) {
      return;
    }
    window.scrollTo({ top: 0, behavior: shouldReduceMotion ? 'auto' : 'smooth' });
  }, [pathname, hash, shouldReduceMotion]);

  useEffect(() => {
    if (!hash) {
      return;
    }
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
    }
  }, [hash, shouldReduceMotion, pathname]);

  return null;
}

export default App;
