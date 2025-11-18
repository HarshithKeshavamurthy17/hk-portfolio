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
    <section id="skills" className="relative py-6 md:py-8 overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-[15%] top-[25%] size-[350px] rounded-full bg-gradient-to-br from-violet-500/15 to-transparent blur-3xl" />

      <div className="mx-auto max-w-5xl px-3 md:px-5 lg:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-center"
        >
          <motion.div
            className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-violet-400/20 bg-violet-500/5 px-2.5 py-1 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Code2 className="size-2.5 text-violet-400" />
            </motion.div>
            <span className="text-[10px] font-medium text-violet-300">Technical Arsenal</span>
          </motion.div>
          
          <h2 className="mb-3 text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Tech
          </h2>
          <p className="mx-auto max-w-2xl text-xs text-neutral-400">
            Comprehensive toolkit spanning AI/ML, data engineering, cloud, and analytics
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-wrap justify-center gap-2"
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
                  className={`relative overflow-hidden rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                    isActive
                      ? 'text-white shadow-lg'
                      : 'border border-white/10 bg-white/5 text-neutral-400 hover:border-white/20 hover:bg-white/10'
                  }`}
                >
                  <div className="relative z-10 flex items-center gap-1.5">
                    <cat.icon className="size-3" />
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

        {/* Organic Floating Cloud Layout */}
        <motion.div
          layout
          className="relative min-h-[400px] md:min-h-[500px] py-8 flex flex-wrap justify-center items-start gap-2 md:block"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              // Create organic, varied sizing
              const sizes = [
                'text-xs px-3 py-1.5',
                'text-xs px-4 py-2',
                'text-sm px-4 py-2',
                'text-sm px-5 py-2.5',
                'text-base px-5 py-2.5',
                'text-base px-6 py-3',
              ];
              const sizeClass = sizes[skill.level - 1] || sizes[3];
              
              // Create organic positioning offsets for desktop
              const positions = [
                'md:left-[5%] md:top-[10%]',
                'md:left-[20%] md:top-[5%]',
                'md:left-[40%] md:top-[15%]',
                'md:left-[60%] md:top-[8%]',
                'md:left-[75%] md:top-[12%]',
                'md:left-[85%] md:top-[18%]',
                'md:left-[10%] md:top-[35%]',
                'md:left-[25%] md:top-[40%]',
                'md:left-[45%] md:top-[38%]',
                'md:left-[65%] md:top-[42%]',
                'md:left-[80%] md:top-[45%]',
                'md:left-[15%] md:top-[65%]',
                'md:left-[35%] md:top-[70%]',
                'md:left-[55%] md:top-[68%]',
                'md:left-[75%] md:top-[72%]',
                'md:left-[5%] md:top-[85%]',
                'md:left-[25%] md:top-[90%]',
                'md:left-[50%] md:top-[88%]',
                'md:left-[70%] md:top-[85%]',
              ];
              
              return (
                <MagneticButton key={skill.name} strength={0.15}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.3, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      y: 0,
                    }}
                    exit={{ opacity: 0, scale: 0.3, y: -20 }}
                    transition={{ 
                      layout: { type: "spring", stiffness: 200, damping: 40 },
                      delay: index * 0.02,
                      duration: 0.4
                    }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.15,
                      zIndex: 50,
                      transition: { duration: 0.2 }
                    }}
                    className={`group relative overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm shadow-lg hover:shadow-2xl ${sizeClass} md:absolute ${positions[index % positions.length] || ''}`}
                    style={{ 
                      willChange: 'transform',
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {/* Glowing border effect */}
                    <motion.div
                      className="pointer-events-none absolute inset-0 rounded-full"
                      animate={{
                        boxShadow: hoveredSkill === skill.name 
                          ? [
                              '0 0 20px rgba(139, 92, 246, 0.3)',
                              '0 0 40px rgba(139, 92, 246, 0.5)',
                              '0 0 20px rgba(139, 92, 246, 0.3)',
                            ]
                          : '0 0 0px rgba(139, 92, 246, 0)',
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    {/* Gradient glow background */}
                    <motion.div
                      className={`pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br ${getCategoryColor(skill.category)} opacity-0 transition-opacity duration-300`}
                      animate={{ opacity: hoveredSkill === skill.name ? 0.3 : 0 }}
                    />
                    
                    {/* Skill name */}
                    <span className="relative z-10 font-semibold text-white whitespace-nowrap">
                      {skill.name}
                    </span>

                    {/* Sparkle on hover */}
                    {hoveredSkill === skill.name && (
                      <motion.div
                        initial={{ scale: 0, rotate: 0 }}
                        animate={{ scale: [0, 1, 0], rotate: 180 }}
                        transition={{ duration: 0.6 }}
                        className="pointer-events-none absolute -right-1 -top-1"
                      >
                        <Sparkles className="size-3 text-yellow-300" />
                      </motion.div>
                    )}

                    {/* Shimmer effect */}
                    <motion.div
                      className="pointer-events-none absolute inset-0 rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                      }}
                      animate={{
                        x: hoveredSkill === skill.name ? ['-100%', '200%'] : '-100%',
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: hoveredSkill === skill.name ? Infinity : 0,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </MagneticButton>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
