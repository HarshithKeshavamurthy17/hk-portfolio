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
    summary: 'Graph-aware retrieval system that connects CVEs, CWEs, and mitigations using Neo4j and LangChain to provide grounded answers for security analysts.',
    impact: [
      'Graph-aware retrieval for vulnerability triage',
      'Neo4j + LangChain + Azure',
      'Evaluation harness for answer grounding',
    ],
    tech: ['Python', 'Neo4j', 'LangChain', 'Azure', 'FastAPI'],
    links: [],
    badges: [],
    thumb: '/thumbs/graph-rag.png',
    metrics: ['-42% MTTR', '3 data sources', 'Graph-RAG'],
  },
  {
    id: 'f1-prediction',
    title: 'F1 Race Win Predictor',
    subtitle: 'Machine learning system for Formula 1 race winner prediction',
    summary: 'ML model predicting F1 race winners with 95.3% accuracy using 30 years of historical data, 25 engineered features, and Random Forest ensemble.',
    impact: [
      '95.3% prediction accuracy (530/556 races)',
      '25 research-based features',
      'Random Forest ensemble with 800 trees',
    ],
    tech: ['Python', 'Scikit-learn', 'Random Forest', 'Streamlit', 'Pandas', 'Plotly'],
    links: [
      { label: 'Code', href: 'https://github.com/HarshithKeshavamurthy17/f1-win-predictor', kind: 'code' },
      { label: 'Demo', href: 'https://f1-win-predictor-app.streamlit.app/', kind: 'demo' },
    ],
    badges: [],
    thumb: '/thumbs/f1.png',
    metrics: ['95.3% accuracy', '25 features', '30 years data'],
  },
  {
    id: 'oncovision',
    title: 'OncoVision',
    subtitle: 'AI-Powered Breast Ultrasound Image Segmentation',
    summary: 'Deep learning system for automated breast ultrasound analysis using U-Net with ResNet50 to segment and classify tissue types (benign, malignant, background).',
    impact: [
      'Multi-class segmentation (Background, Benign, Malignant)',
      'Transfer learning with ResNet50 encoder',
      'Interactive web application with 156 example images',
    ],
    tech: ['PyTorch', 'U-Net', 'ResNet50', 'Streamlit', 'OpenCV', 'Albumentations'],
    links: [
      { label: 'Code', href: 'https://github.com/HarshithKeshavamurthy17/oncovision', kind: 'code' },
      { label: 'Demo', href: 'https://oncovision-akj8dwacntroekz8qxa7gs.streamlit.app', kind: 'demo' },
    ],
    badges: [],
    thumb: '/thumbs/breast-ml.png',
    metrics: ['Multi-class segmentation', '156 examples', 'Medical AI'],
  },
  {
    id: 'autokpi',
    title: 'AutoKPI',
    subtitle: 'AI-Powered Analytics Toolkit',
    summary: 'One-click analytics tool that automatically generates 100+ KPIs, SQL queries, and interactive visualizations from any dataset with detailed explanations and BI-ready exports.',
    impact: [
      '100+ KPIs generated automatically',
      'Advanced analytics with pattern detection',
      'Production-ready deployment with 24/7 uptime',
    ],
    tech: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Altair', 'Plotly'],
    links: [
      { label: 'Code', href: 'https://github.com/HarshithKeshavamurthy17/AutoKPI', kind: 'code' },
      { label: 'Demo', href: 'https://autokpi-hk-app.streamlit.app', kind: 'demo' },
    ],
    badges: [],
    thumb: '/thumbs/cs699.png',
    metrics: ['100+ KPIs', 'Advanced analytics', 'Production'],
  },
];

export default projects;

