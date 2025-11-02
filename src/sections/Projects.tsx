import * as React from 'react';
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'framer-motion';
import { Section } from '../components/layout/Section';
import { fadeIn } from '../components/layout/Motion';
import { Project, ProjectCard } from '../components/project/ProjectCard';
import { cn } from '../lib/cn';

type Category = 'All' | 'AI/ML' | 'Data Eng' | 'Analytics';

const FILTERS: Category[] = ['All', 'AI/ML', 'Data Eng', 'Analytics'];

const CASE_PREFETCHERS: Record<string, () => Promise<unknown>> = {
  '/case/vi-graph-rag': () => import('../routes/case/VIGraphRAG'),
  '/case/uber-etl': () => import('../routes/case/UberETL'),
  '/case/f1-prediction': () => import('../routes/case/F1Prediction'),
  '/case/breast-cancer-ml': () => import('../routes/case/BreastCancerML'),
  '/case/cs699-ensemble': () => import('../routes/case/CS699Ensemble'),
};

const PROJECTS: Array<Project & { categories: Category[] }> = [
  {
    title: 'VI-Graph-RAG',
    summary:
      'Graph-aware retrieval augmented generation for vulnerability intelligence triage across multi-vendor advisories.',
    tech: ['Python', 'Neo4j', 'LangChain', 'GraphRAG'],
    metric: {
      label: 'Triage time reduced',
      value: '-42% MTTR',
    },
    links: {
      code: 'https://github.com/harinik/vi-graph-rag',
      demo: 'https://harinik.dev/demos/vi-graph-rag',
      pdf: '/pdfs/vi-graph-rag.pdf',
      caseStudy: '/case/vi-graph-rag',
    },
    categories: ['AI/ML', 'Analytics'],
  },
  {
    title: 'Uber ETL',
    summary:
      'Streaming ingestion and anomaly detection for multi-region rider datasets with declarative data contracts.',
    tech: ['Scala', 'Kafka', 'dbt', 'Snowflake'],
    metric: {
      label: 'Preprocess throughput',
      value: '3,747 rows/sec',
    },
    links: {
      code: 'https://github.com/harinik/uber-etl-pipeline',
      demo: 'https://harinik.dev/demos/uber-etl',
      pdf: '/pdfs/uber-etl.pdf',
      caseStudy: '/case/uber-etl',
    },
    categories: ['Data Eng', 'Analytics'],
  },
  {
    title: 'F1 Prediction',
    summary:
      'Real-time race outcome prediction engine combining telemetry, weather, and pit strategy simulations.',
    tech: ['TypeScript', 'TensorFlow', 'SSE', 'Redis'],
    metric: {
      label: 'Predictive MAE',
      value: '0.12 laps',
    },
    links: {
      code: 'https://github.com/harinik/f1-prediction-platform',
      demo: 'https://harinik.dev/demos/f1-live',
      pdf: '/pdfs/f1-prediction.pdf',
      caseStudy: '/case/f1-prediction',
    },
    categories: ['AI/ML', 'Analytics'],
  },
  {
    title: 'Breast Cancer ML',
    summary:
      'Explainable diagnostic workflow highlighting cellular features with SHAP-backed interpretability dashboards.',
    tech: ['PyTorch', 'FastAPI', 'SHAP', 'React'],
    metric: {
      label: 'Balanced accuracy',
      value: '83.19%',
    },
    links: {
      code: 'https://github.com/harinik/breast-cancer-ml',
      demo: 'https://harinik.dev/demos/breast-cancer-ml',
      pdf: '/pdfs/breast-cancer-ml.pdf',
      caseStudy: '/case/breast-cancer-ml',
    },
    categories: ['AI/ML'],
  },
  {
    title: 'CS699 Ensemble',
    summary:
      'Stacked ensemble models with automated feature stores and governance for graduate-level risk modeling.',
    tech: ['Python', 'XGBoost', 'MLflow', 'Great Expectations'],
    metric: {
      label: 'Lift vs baseline',
      value: '+18.6% lift',
    },
    links: {
      code: 'https://github.com/harinik/cs699-ensemble',
      demo: 'https://harinik.dev/demos/cs699-ensemble',
      pdf: '/pdfs/cs699-ensemble.pdf',
      caseStudy: '/case/cs699-ensemble',
    },
    categories: ['AI/ML', 'Analytics'],
  },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = React.useState<Category>('All');
  const prefetchCaseStudy = useCasePrefetcher();
  const shouldReduceMotion = useReducedMotion();
  const containerVariants = shouldReduceMotion ? undefined : fadeIn();
  const containerProps = shouldReduceMotion
    ? {}
    : {
        variants: containerVariants,
        initial: 'hidden',
        whileInView: 'show',
        viewport: { once: true, amount: 0.2 },
      };

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === 'All') {
      return PROJECTS;
    }

    return PROJECTS.filter((project) => project.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <Section id="projects" className="pt-0">
      <motion.div {...containerProps} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-heading text-3xl font-semibold text-foreground">
            Highlighted Projects
          </h2>
          <p className="text-muted-foreground">
            Explorations across AI/ML, streaming data engineering, and analytics systems with
            production-ready deliverables.
          </p>
        </div>
        <LayoutGroup id="projects-filters">
          <div className="flex flex-wrap gap-3">
            {FILTERS.map((filter) => {
              const isActive = activeCategory === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveCategory(filter)}
                  className={cn(
                    'relative overflow-hidden rounded-full border border-border/50 px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
                    isActive
                      ? 'text-accent-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="projects-filter-active"
                      className="absolute inset-0 -z-10 rounded-full bg-accent/90"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{filter}</span>
                </button>
              );
            })}
          </div>
        </LayoutGroup>

        <LayoutGroup id="projects-cards">
          <motion.div layout className="grid gap-6 md:grid-cols-2">
            <AnimatePresence mode="popLayout" initial={shouldReduceMotion ? false : undefined}>
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  onCaseStudyHover={prefetchCaseStudy}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </motion.div>
    </Section>
  );
}

function useCasePrefetcher() {
  const prefetchedRef = React.useRef<Set<string>>(new Set());
  const cancelledRef = React.useRef(false);
  const latestTokenRef = React.useRef(0);

  React.useEffect(() => {
    return () => {
      cancelledRef.current = true;
    };
  }, []);

  return React.useCallback((href: string) => {
    const prefetch = CASE_PREFETCHERS[href];
    if (!prefetch || prefetchedRef.current.has(href) || cancelledRef.current) {
      return;
    }

    const currentToken = ++latestTokenRef.current;

    void prefetch()
      .then(() => {
        if (cancelledRef.current || latestTokenRef.current !== currentToken) {
          return;
        }
        prefetchedRef.current.add(href);
      })
      .catch(() => {
        // Ignore prefetch failures; main navigation will still load the route.
      });
  }, []);
}
