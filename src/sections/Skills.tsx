import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, LineChart, Cloud, Terminal, Sparkles, Zap, ChevronRight } from 'lucide-react';

type Skill = {
  name: string;
  level: number; // 1-5
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
    <section id="skills" className="relative overflow-hidden py-24 md:py-32">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(34, 211, 238, 0.15) 0%, transparent 50%)
            `,
            backgroundSize: '100% 100%',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/5 px-4 py-2 text-sm font-medium text-violet-300 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Code2 className="size-4" />
            <span>Technical Arsenal</span>
          </motion.div>
          <h2 className="mb-4 text-5xl md:text-7xl font-bold bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-400">
            A comprehensive toolkit spanning AI/ML, data engineering, cloud infrastructure, and analytics
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((cat, index) => {
            const isActive = activeCategory === cat.name;
            return (
              <motion.button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative overflow-hidden rounded-full px-5 py-2.5 font-semibold transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-lg'
                    : 'border border-white/10 bg-white/5 text-neutral-400 hover:border-white/20 hover:bg-white/10 hover:text-white'
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
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  layout: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className={`relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-4 backdrop-blur-sm transition-all duration-300 ${
                  hoveredSkill === skill.name ? 'border-white/30 shadow-lg' : ''
                }`}>
                  {/* Gradient glow on hover */}
                  <motion.div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${getCategoryColor(skill.category)} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                  />
                  
                  {/* Content */}
                  <div className="relative space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-white">{skill.name}</h3>
                        <p className="text-xs text-neutral-500">{skill.category}</p>
                      </div>
                      <motion.div
                        animate={{ rotate: hoveredSkill === skill.name ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight className="size-4 text-neutral-600 group-hover:text-neutral-400" />
                      </motion.div>
                    </div>
                    
                    {/* Level indicator */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.02 + i * 0.05 }}
                          className={`h-1 flex-1 rounded-full ${
                            i < skill.level
                              ? `bg-gradient-to-r ${getCategoryColor(skill.category)}`
                              : 'bg-neutral-800'
                          }`}
                          style={{ transformOrigin: 'left' }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Shimmer effect on hover */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                    }}
                    animate={{
                      x: hoveredSkill === skill.name ? ['-100%', '200%'] : '-100%',
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: hoveredSkill === skill.name ? Infinity : 0,
                      ease: 'linear',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid gap-6 sm:grid-cols-3"
        >
          {[
            { label: 'Technologies', value: skills.length, gradient: 'from-violet-400 to-purple-400' },
            { label: 'Categories', value: categories.length - 1, gradient: 'from-cyan-400 to-blue-400' },
            { label: 'Expert Level', value: skills.filter(s => s.level === 5).length, gradient: 'from-emerald-400 to-green-400' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.03, y: -3 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 text-center backdrop-blur-sm"
            >
              <motion.div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5`}
              />
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index }}
                  className={`mb-2 text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                >
                  {stat.value}+
                </motion.div>
                <div className="text-sm font-medium text-neutral-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
