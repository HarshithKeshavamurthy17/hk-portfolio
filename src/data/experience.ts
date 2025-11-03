export type Experience = {
  id: string;
  company: string;
  role: string;
  start: string;
  end: string;
  summary: string;
  description?: string;
  impact: string[];
  tech: string[];
  logo?: string;
  featured?: boolean;
};

export const experiences: Experience[] = [
  {
    id: 'tietoevry-ai-ml-intern',
    company: 'Tietoevry',
    role: 'AI/ML Engineer Intern',
    start: 'Jun 2025',
    end: 'Aug 2025',
    summary: 'Vulnerability Intelligence (VI-Graph-RAG)',
    description: 'Built a large-scale retrieval-augmented intelligence system for cyber-threat analysis, integrating Neo4j Graph DB with LangChain-based LLM pipelines on Azure.',
    impact: [
      'Designed a multi-source Knowledge Graph linking >200K CVE and CWE records enriched with severity, exploits, and social signals',
      'Developed Graph-RAG retrieval using hybrid BM25 + FAISS + Cross-Encoder reranking for semantic context retrieval',
      'Deployed scalable microservices on Azure Functions and Azure AI Studio with automated ingestion and zero-touch refresh',
      'Implemented LangChain + Neo4j RAG QA API, enabling natural-language queries over the graph with LLM grounding',
      'Built interactive Streamlit dashboards for vulnerability triage, reducing manual analysis time by ~42%',
      'Automated toxicity and grounding evaluation CI checks for every retrieval run',
      'Containerized the system with Docker + FastAPI, achieving 99% uptime across scheduled refresh cycles',
    ],
    tech: ['Python', 'LangChain', 'Neo4j', 'Azure Functions', 'FAISS', 'FastAPI', 'Streamlit', 'Docker', 'Weights & Biases'],
    logo: '/logos/tietoevry.svg',
    featured: true,
  },
  {
    id: 'build-fellowship',
    company: 'Build Fellowship',
    role: 'Student Consultant',
    start: 'Jul 2025',
    end: 'Aug 2025',
    summary: 'International Growth Strategy',
    description: 'Collaborated with the founding team of a U.S.-based online school to craft a real-world international expansion strategy across 15+ countries.',
    impact: [
      'Led the research and analytics track — designing a market scoring model combining 30+ macro variables (internet access, income levels, education demand, pricing trends)',
      'Identified high-potential markets using data-driven segmentation, competitive benchmarking, and PESTEL analysis',
      'Built a centralized market intelligence dashboard used by stakeholders for investment decisions and go-to-market prioritization',
      'Presented the final strategy to client leadership — several key recommendations were adopted for their 2025 global launch plan',
    ],
    tech: ['Python', 'Tableau', 'Excel', 'Market Analytics', 'PESTEL Analysis'],
    logo: '/logos/bu.svg',
  },
  {
    id: 'uber-nineleaps',
    company: 'Uber (via Nineleaps)',
    role: 'Data Analytics & Expansion Strategy',
    start: 'Aug 2023',
    end: 'May 2024',
    summary: 'Uber Bus Service Expansion',
    description: 'Worked directly with Uber\'s India operations team to scale the Uber Bus service across multiple metro cities.',
    impact: [
      'Defined and implemented KPI frameworks (utilization, route efficiency, occupancy) improving launch planning accuracy by 30%',
      'Built geospatial clustering and demand-forecasting models (K-Means, DBSCAN) to identify high-potential routes and optimize fleet deployment',
      'Owned data foundation for Chennai and Kolkata, leading analytics that enabled successful pilot launches and rapid scale-up',
      'Automated daily reports and route dashboards using Python + SQL + Tableau, cutting manual reporting time by 40%',
    ],
    tech: ['Python', 'SQL', 'Tableau', 'Google Apps Script', 'K-Means', 'DBSCAN', 'Geospatial'],
    logo: '/logos/nineleaps.svg',
    featured: true,
  },
  {
    id: 'nineleaps-data-science',
    company: 'Nineleaps',
    role: 'Data Science Intern',
    start: 'Feb 2023',
    end: 'Aug 2023',
    summary: 'Large-Scale Analytics & ETL Pipelines',
    description: 'Completed an intensive data science internship focused on large-scale analytics and engineering workflows.',
    impact: [
      'Worked with 10M+ record datasets performing data cleaning, transformation, and exploratory analysis using Python, SQL, and Tableau',
      'Applied PySpark and Hive to simulate enterprise-grade ETL pipelines, improving processing efficiency and automation',
      'Collaborated with mentors to design data models and cloud-based workflows, strengthening end-to-end analytics capability',
    ],
    tech: ['Python', 'SQL', 'PySpark', 'Hive', 'Tableau', 'Excel'],
    logo: '/logos/nineleaps.svg',
  },
  {
    id: 'nastech-ai-ml',
    company: 'NASTECH',
    role: 'AI & Machine Learning Intern',
    start: 'Jun 2022',
    end: 'Sep 2022',
    summary: 'Driver Drowsiness Detection System',
    description: 'Built an intelligent driver drowsiness detection system using Python, OpenCV, and dlib to enhance road safety through real-time monitoring.',
    impact: [
      'Designed and trained a CNN-based model achieving up to 99% accuracy in eye-state classification (open vs. closed)',
      'Implemented continuous face and eye tracking using image processing, triggering alerts during drowsy states',
      'Developed the solution end-to-end — from dataset preprocessing and feature extraction to live video integration and performance tuning',
    ],
    tech: ['Python', 'OpenCV', 'dlib', 'TensorFlow', 'Keras', 'NumPy'],
    logo: '/logos/nastech.svg',
  },
];

export default experiences;
