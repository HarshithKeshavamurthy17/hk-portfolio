import { Suspense, lazy, type ReactNode, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Glow } from './components/layout/Glow';
import { Footer } from './components/layout/Footer';
import { Section } from './components/layout/Section';
import { SEO } from './components/layout/SEO';
import { stagger } from './components/layout/Motion';
import { Hero } from './sections/Hero';
import { Highlights } from './sections/Highlights';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { About } from './sections/About';
import { Contact } from './sections/Contact';

const VIGraphRAG = lazy(() => import('./routes/case/VIGraphRAG'));
const UberETL = lazy(() => import('./routes/case/UberETL'));
const F1Prediction = lazy(() => import('./routes/case/F1Prediction'));
const BreastCancerML = lazy(() => import('./routes/case/BreastCancerML'));
const CS699Ensemble = lazy(() => import('./routes/case/CS699Ensemble'));

const HomePage = () => (
  <main className="flex flex-col gap-10 pb-20">
    <SEO
      title="Harshith K — Data, AI & Analytics Engineer"
      description="Harshith K blends AI/ML, data engineering, and analytics to turn noisy telemetry into reliable decisions."
      canonical="https://harinik.dev"
      jsonLd={homeJsonLd}
    />
    <motion.div
      variants={stagger(0.18, 0.12)}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-10"
    >
      <Section id="hero" className="pt-28">
        <Hero />
      </Section>
      <Section className="pt-0">
        <Highlights />
      </Section>
      <Projects />
      <Experience />
      <Skills />
      <About />
      <Contact />
    </motion.div>
  </main>
);

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
