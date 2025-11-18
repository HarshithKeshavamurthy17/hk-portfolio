import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, LineChart, Cloud, Terminal, Sparkles, Zap } from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';

type Skill = {
  name: string;
  level: number;
  category: string;
};

const skills: Skill[] = [
  // AI & LLM
  { name: 'LangChain', level: 5, category: 'AI & LLM' },
  { name: 'Azure OpenAI', level: 5, category: 'AI & LLM' },
  { name: 'LlamaIndex', level: 4, category: 'AI & LLM' },
  { name: 'Vector DBs', level: 4, category: 'AI & LLM' },
  { name: 'RAG Systems', level: 5, category: 'AI & LLM' },
  { name: 'Neo4j', level: 4, category: 'AI & LLM' },
  
  // ML & Data Science
  { name: 'Python', level: 5, category: 'ML & Data Science' },
  { name: 'Scikit-learn', level: 5, category: 'ML & Data Science' },
  { name: 'TensorFlow', level: 4, category: 'ML & Data Science' },
  { name: 'PyTorch', level: 4, category: 'ML & Data Science' },
  { name: 'MLflow', level: 5, category: 'ML & Data Science' },
  { name: 'Weights & Biases', level: 5, category: 'ML & Data Science' },
  
  // Data Engineering
  { name: 'AWS Glue', level: 5, category: 'Data Engineering' },
  { name: 'dbt', level: 5, category: 'Data Engineering' },
  { name: 'Apache Kafka', level: 4, category: 'Data Engineering' },
  { name: 'Snowflake', level: 5, category: 'Data Engineering' },
  { name: 'Airflow', level: 4, category: 'Data Engineering' },
  { name: 'Spark', level: 4, category: 'Data Engineering' },
  
  // Cloud & DevOps
  { name: 'AWS', level: 5, category: 'Cloud & DevOps' },
  { name: 'Azure', level: 5, category: 'Cloud & DevOps' },
  { name: 'Docker', level: 5, category: 'Cloud & DevOps' },
  { name: 'Kubernetes', level: 4, category: 'Cloud & DevOps' },
  { name: 'Terraform', level: 4, category: 'Cloud & DevOps' },
  { name: 'CI/CD', level: 5, category: 'Cloud & DevOps' },
  
  // Analytics & BI
  { name: 'SQL', level: 5, category: 'Analytics & BI' },
  { name: 'Tableau', level: 5, category: 'Analytics & BI' },
  { name: 'Power BI', level: 5, category: 'Analytics & BI' },
  { name: 'Looker', level: 4, category: 'Analytics & BI' },
  { name: 'BigQuery', level: 4, category: 'Analytics & BI' },
  { name: 'Redshift', level: 4, category: 'Analytics & BI' },
];

const categories = [
  { name: 'All', icon: Sparkles, gradient: 'from-white to-neutral-400' },
  { name: 'AI & LLM', icon: Sparkles, gradient: 'from-violet-400 to-purple-400' },
  { name: 'ML & Data Science', icon: Zap, gradient: 'from-cyan-400 to-blue-400' },
  { name: 'Data Engineering', icon: Database, gradient: 'from-emerald-400 to-green-400' },
  { name: 'Cloud & DevOps', icon: Cloud, gradient: 'from-orange-400 to-red-400' },
  { name: 'Analytics & BI', icon: LineChart, gradient: 'from-pink-400 to-rose-400' },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat?.gradient || 'from-white to-neutral-400';
  };

  return (
    <section id="skills" className="relative py-8 md:py-10 overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-[15%] top-[25%] size-[400px] rounded-full bg-gradient-to-br from-violet-500/15 to-transparent blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center"
        >
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/5 px-4 py-2 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Code2 className="size-4 text-violet-400" />
            </motion.div>
            <span className="text-sm font-medium text-violet-300">Technical Arsenal</span>
          </motion.div>
          
          <h2 className="mb-4 text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Tech
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-400">
            Comprehensive toolkit spanning AI/ML, data engineering, cloud, and analytics
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((cat, index) => {
            const isActive = activeCategory === cat.name;
            return (
              <MagneticButton key={cat.name} strength={0.2}>
                <motion.button
                  onClick={() => setActiveCategory(cat.name)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative overflow-hidden rounded-full px-6 py-3 font-semibold transition-all ${
                    isActive
                      ? 'text-white shadow-lg'
                      : 'border border-white/10 bg-white/5 text-neutral-400 hover:border-white/20 hover:bg-white/10'
                  }`}
                >
                  <div className="relative z-10 flex items-center gap-2">
                    <cat.icon className="size-4" />
                    <span>{cat.name}</span>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="activeCategory"
                      className={`absolute inset-0 bg-gradient-to-r ${cat.gradient}`}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              </MagneticButton>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <MagneticButton key={skill.name} strength={0.15}>
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
                  animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ 
                    layout: { type: "spring", stiffness: 300, damping: 30 },
                    delay: index * 0.03
                  }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 backdrop-blur-sm"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Gradient glow */}
                  <motion.div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${getCategoryColor(skill.category)} opacity-0 transition-opacity`}
                    animate={{ opacity: hoveredSkill === skill.name ? 0.15 : 0 }}
                  />
                  
                  <div className="relative">
                    <h3 className="mb-2 font-bold text-white">{skill.name}</h3>
                    <p className="mb-3 text-xs text-neutral-500">{skill.category}</p>
                    
                    {/* Level indicator */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.02 + i * 0.05 }}
                          className={`h-1.5 flex-1 rounded-full ${
                            i < skill.level
                              ? `bg-gradient-to-r ${getCategoryColor(skill.category)}`
                              : 'bg-neutral-800'
                          }`}
                          style={{ transformOrigin: 'left' }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Shimmer */}
                  <motion.div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                    }}
                    animate={{
                      x: hoveredSkill === skill.name ? ['-100%', '200%'] : '-100%',
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: hoveredSkill === skill.name ? Infinity : 0,
                    }}
                  />
                </motion.div>
              </MagneticButton>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
