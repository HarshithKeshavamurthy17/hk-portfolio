export type Project = {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  impact: string[];
  tech: string[];
  links: { label: string; href: string; kind: 'code' | 'demo' | 'pdf' | 'case' }[];
  badges?: string[];
  thumb?: string;
  darkThumb?: string;
  preview?: {
    src: string;
    type: 'video' | 'gif';
  };
  metrics?: string[];
};

export const projects: Project[] = [
  {
    id: 'vi-graph-rag',
    title: 'VI-Graph-RAG',
    subtitle: 'Graph-aware retrieval for vulnerability triage',
    summary:
      'Neo4j knowledge graph + RAG to stitch CVEs↔CWEs↔mitigations; LangChain tooling; Azure Functions for scheduled ingestion.',
    impact: [
      'Cut MTTR by 42% on triage playbooks',
      'Link coverage ↑ from 63% → 91% for CVE↔CWE',
      'Answer grounding with Graph-RAG prompts',
    ],
    tech: ['Python', 'Neo4j', 'LangChain', 'Azure', 'FastAPI'],
    links: [
      { label: 'Code', href: 'https://github.com/harinik/vi-graph-rag', kind: 'code' },
      { label: 'One-Pager PDF', href: '/pdfs/vi-graph-rag.pdf', kind: 'pdf' },
      { label: 'Case Study', href: '/case/vi-graph-rag', kind: 'case' },
    ],
    badges: ['-42% MTTR', 'Graph-RAG'],
    thumb: '/thumbs/graph-rag.png',
    metrics: ['-42% MTTR', '3 data sources', 'Graph-RAG'],
  },
  {
    id: 'uber-etl',
    title: 'Uber ETL',
    subtitle: 'Streaming ingestion & anomaly gates',
    summary:
      'Kafka→dbt→Snowflake pipeline with data contracts and drift monitors; auto backfills and SLO dashboards.',
    impact: [
      '3,747 rows/sec preprocess throughput',
      'Incident response time ↓ 38%',
      'Contract violations auto-quarantined',
    ],
    tech: ['Scala', 'Kafka', 'dbt', 'Snowflake', 'Great Expectations'],
    links: [
      { label: 'Code', href: 'https://github.com/harinik/uber-etl-pipeline', kind: 'code' },
      { label: 'Case Study', href: '/case/uber-etl', kind: 'case' },
      { label: 'Demo', href: 'https://harinik.dev/demos/uber-etl', kind: 'demo' },
    ],
    badges: ['Streaming', 'Data Contracts'],
    thumb: '/thumbs/uber-etl.png',
    metrics: ['3,747 rows/sec', 'Contracts', 'Drift gates'],
  },
  {
    id: 'f1-prediction',
    title: 'F1 Prediction',
    subtitle: 'Race outcome engine',
    summary:
      'Combines telemetry, weather, and pits to forecast delta vs leader; SHAP for strategy explainability.',
    impact: ['MAE: 0.12 laps on holdout', 'Live strategy what-ifs', 'Fast sim UI'],
    tech: ['TypeScript', 'TensorFlow', 'Redis', 'SSE', 'React'],
    links: [
      { label: 'Code', href: 'https://github.com/harinik/f1-prediction-platform', kind: 'code' },
      { label: 'Demo', href: 'https://harinik.dev/demos/f1-live', kind: 'demo' },
      { label: 'Case Study', href: '/case/f1-prediction', kind: 'case' },
    ],
    badges: ['0.12 Laps MAE'],
    thumb: '/thumbs/f1.png',
    metrics: ['0.12 laps MAE', 'SSE', 'Realtime'],
  },
  {
    id: 'breast-cancer-ml',
    title: 'Breast Cancer ML',
    subtitle: 'Explainable diagnostics workflow',
    summary:
      'FastAPI service with SHAP reports and model registry; bias checks and audit trail.',
    impact: ['Balanced accuracy: 83.19%', 'SHAP insight packs', 'Model cards & governance'],
    tech: ['PyTorch', 'FastAPI', 'SHAP', 'MLflow', 'React'],
    links: [
      { label: 'Code', href: 'https://github.com/harinik/breast-cancer-ml', kind: 'code' },
      { label: 'One-Pager PDF', href: '/pdfs/breast-cancer-ml.pdf', kind: 'pdf' },
      { label: 'Case Study', href: '/case/breast-cancer-ml', kind: 'case' },
    ],
    badges: ['83.19% BA'],
    thumb: '/thumbs/breast-ml.png',
    metrics: ['83.19% BA', 'SHAP packs', 'Audit trail'],
  },
  {
    id: 'cs699-ensemble',
    title: 'CS699 Ensemble',
    subtitle: 'Stacked risk models w/ feature store',
    summary:
      'XGBoost + meta-learner; Great Expectations + MLflow tracking; automated drift alarms.',
    impact: ['Lift +18.6% vs baseline', 'CI for data & model', 'Reproducible pipelines'],
    tech: ['Python', 'XGBoost', 'Great Expectations', 'MLflow'],
    links: [
      { label: 'Code', href: 'https://github.com/harinik/cs699-ensemble', kind: 'code' },
      { label: 'Case Study', href: '/case/cs699-ensemble', kind: 'case' },
      { label: 'One-Pager PDF', href: '/pdfs/cs699-ensemble.pdf', kind: 'pdf' },
    ],
    badges: ['+18.6% Lift'],
    thumb: '/thumbs/cs699.png',
    metrics: ['+18.6% lift', 'Feature store', 'CI guardrails'],
  },
];

export default projects;

