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
    summary: 'Graph-aware retrieval + RAG to stitch CVEs↔CWEs↔mitigations; grounded responses with evaluation.',
    impact: [
      'Graph-aware retrieval for vulnerability triage',
      'Neo4j + LangChain + Azure',
      'Evaluation harness for answer grounding',
    ],
    tech: ['Python', 'Neo4j', 'LangChain', 'Azure', 'FastAPI'],
    links: [
      { label: 'Code', href: 'https://github.com/harinik/vi-graph-rag', kind: 'code' },
      { label: 'One-Pager PDF', href: '/pdfs/vi-graph-rag.pdf', kind: 'pdf' },
      { label: 'Case Study', href: '/projects/vi-graph-rag', kind: 'case' },
    ],
    badges: ['CASE STUDY'],
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
    title: 'F1 Race Win Predictor',
    subtitle: 'Machine learning system for Formula 1 race winner prediction',
    summary: 'Predict F1 race winners with 95.3% accuracy using 30 years of historical data and graph-based feature engineering.',
    impact: [
      '95.3% prediction accuracy (530/556 races)',
      '25 research-based features',
      'Random Forest ensemble with 800 trees',
    ],
    tech: ['Python', 'Scikit-learn', 'Random Forest', 'Streamlit', 'Pandas', 'Plotly'],
    links: [
      { label: 'Code', href: 'https://github.com/harinik/f1-prediction-platform', kind: 'code' },
      { label: 'Demo', href: 'https://harinik.dev/demos/f1-live', kind: 'demo' },
      { label: 'Case Study', href: '/projects/f1-prediction', kind: 'case' },
    ],
    badges: ['CASE STUDY'],
    thumb: '/thumbs/f1.png',
    metrics: ['95.3% accuracy', '25 features', '30 years data'],
  },
  {
    id: 'oncovision',
    title: 'OncoVision',
    subtitle: 'AI-Powered Breast Ultrasound Image Segmentation',
    summary: 'Deep learning-based medical image segmentation system that automatically identifies and classifies breast tissue types using U-Net architecture with ResNet50 encoder.',
    impact: [
      'Multi-class segmentation (Background, Benign, Malignant)',
      'Transfer learning with ResNet50 encoder',
      'Interactive web application with 156 example images',
    ],
    tech: ['PyTorch', 'U-Net', 'ResNet50', 'Streamlit', 'OpenCV', 'Albumentations'],
    links: [
      { label: 'Code', href: 'https://github.com/HarshithKeshavamurthy17/oncovision', kind: 'code' },
      { label: 'Demo', href: 'https://oncovision-akj8dwacntroekz8qxa7gs.streamlit.app', kind: 'demo' },
      { label: 'Case Study', href: '/projects/oncovision', kind: 'case' },
    ],
    badges: ['CASE STUDY'],
    thumb: '/thumbs/breast-ml.png',
    metrics: ['Multi-class segmentation', '156 examples', 'Medical AI'],
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

