import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Brain, Zap, Code, ArrowLeft, CheckCircle2, TrendingUp, Activity, Layers, FileText, Target } from 'lucide-react';

export default function ProjectPostureAnalytics() {
    return (
        <div className="min-h-screen bg-background text-foreground pt-24 pb-16">
            {/* Background decoration */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute left-1/2 top-0 size-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-900/10 via-blue-900/10 to-purple-900/10 blur-3xl" aria-hidden="true" />
            </div>

            <div className="mx-auto max-w-6xl px-6 space-y-16">
                {/* Hero / Case Study Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-6"
                >
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                                    Case Study
                                </span>
                                <Link
                                    to="/"
                                    className="ml-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1720]"
                                >
                                    <ArrowLeft className="size-4" aria-hidden="true" />
                                    Back
                                </Link>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white">AI 3D Posture & Motion Analytics</h1>
                            <p className="text-lg text-neutral-300 max-w-3xl">
                                Revolutionizing physics simulation with real-time gravity manipulation and interactive particle dynamics. An advanced platform that leverages computational physics and WebGL to create immersive, interactive environments where users can experiment with gravitational forces, particle systems, and celestial mechanics in real-time.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {['React', 'Three.js', 'WebGL', 'Physics Engine', 'JavaScript', 'Shaders'].map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="pt-4">
                                <a
                                    href="https://3d-posture-analytics-ai.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-bold text-white hover:bg-cyan-600 transition-all hover:scale-105 shadow-lg shadow-cyan-500/25"
                                >
                                    <Zap className="size-4" />
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Feature Cards Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {[
                        {
                            icon: <Activity className="size-5 text-cyan-300" aria-hidden="true" />,
                            title: 'PHYSICS SIMULATION',
                            value: 'Real-Time',
                            subtitle: 'Gravity Manipulation',
                            extra: 'Interactive gravity wells, particle attractors, and repulsors with real-time force calculations and visual feedback.',
                        },
                        {
                            icon: <Layers className="size-5 text-blue-300" aria-hidden="true" />,
                            title: 'VISUALIZATION',
                            value: 'Immersive 3D',
                            subtitle: 'Particle Systems',
                            extra: 'Thousands of particles responding to gravitational forces with stunning visual effects and smooth 60fps rendering.',
                        },
                        {
                            icon: <Target className="size-5 text-purple-300" aria-hidden="true" />,
                            title: 'INTERACTION',
                            value: 'Dynamic Controls',
                            subtitle: 'Interactive Playground',
                            extra: 'Adjust gravitational constants, particle properties, and simulation parameters in real-time with intuitive controls.',
                        },
                        {
                            icon: <FileText className="size-5 text-emerald-300" aria-hidden="true" />,
                            title: 'ANALYSIS',
                            value: 'Physics Insights',
                            subtitle: 'Trajectory Analysis',
                            extra: 'Visualize orbital mechanics, calculate escape velocities, and analyze particle trajectories with detailed metrics.',
                        },
                    ].map((metric, index) => (
                        <motion.div
                            key={metric.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-sm"
                        >
                            <div className="mb-3 flex items-center gap-2">
                                {metric.icon}
                                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">{metric.title}</p>
                            </div>
                            <p className="text-2xl font-bold text-white mb-1">{metric.value}</p>
                            <p className="text-xs text-neutral-400 mb-2">{metric.subtitle}</p>
                            <p className="text-xs text-neutral-500 leading-relaxed">{metric.extra}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Two-column: Problem + Tech Stack */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                                <Brain className="size-6 text-cyan-400" aria-hidden="true" />
                                The Problem
                            </h2>
                            <div className="space-y-4 text-neutral-300 leading-relaxed">
                                <p>
                                    Understanding gravitational physics and celestial mechanics has traditionally required complex mathematical calculations, expensive simulation software, or abstract theoretical knowledge. For students, educators, researchers, and enthusiasts, exploring gravity and particle dynamics often means:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Struggling with abstract mathematical concepts</li>
                                    <li>Lacking interactive tools to visualize gravitational effects</li>
                                    <li>Having no way to experiment with different gravitational scenarios</li>
                                    <li>Missing real-time feedback on how forces affect particle motion</li>
                                </ul>
                                <p>
                                    Traditional physics education relies on static diagrams and complex equations that fail to capture the dynamic, interactive nature of gravitational forces. The challenge was to build a system that could:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Simulate realistic gravitational interactions in real-time</li>
                                    <li>Provide intuitive visual feedback for complex physics concepts</li>
                                    <li>Allow users to manipulate gravitational parameters interactively</li>
                                    <li>Render thousands of particles with smooth performance</li>
                                    <li>Calculate and display physics metrics in real-time</li>
                                </ul>
                                <blockquote className="border-l-2 border-cyan-400/50 pl-4 italic text-neutral-200">
                                    &quot;How can we use interactive 3D simulation to make gravitational physics intuitive, engaging, and accessible to everyone?&quot;
                                </blockquote>
                            </div>
                        </section>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:sticky lg:top-24 h-fit"
                    >
                        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-sm">
                            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                <Code className="size-5 text-cyan-400" aria-hidden="true" />
                                Tech Stack
                            </h3>
                            <ul className="space-y-2">
                                {[
                                    'JavaScript (ES6+)',
                                    'React (Frontend Framework)',
                                    'Three.js (3D Rendering)',
                                    'WebGL (GPU Acceleration)',
                                    'GLSL Shaders (Custom Rendering)',
                                    'Physics Engine (Custom Implementation)',
                                    'Canvas API & Web Workers',
                                    'Vite & Git',
                                ].map((tech) => (
                                    <li key={tech} className="flex items-start gap-2 text-sm text-neutral-200">
                                        <CheckCircle2 className="size-4 text-cyan-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                                        <span>{tech}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 text-xs text-neutral-400 italic">
                                Engineered for real-time performance, accurate physics simulation, and stunning visual effects.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Solution Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                        <Zap className="size-6 text-cyan-400" aria-hidden="true" />
                        The Solution
                    </h2>

                    {/* Core Architecture */}
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-sm">
                        <h3 className="text-lg font-semibold text-white mb-4">Core Architecture</h3>
                        <div className="space-y-3 text-neutral-300 leading-relaxed">
                            <p>
                                Antigravity is built as a cutting-edge web application leveraging <strong>React</strong> for reactive UI management and <strong>Three.js with custom WebGL shaders</strong> for high-performance 3D rendering and physics simulation.
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-2">
                                <li><strong>Real-Time Physics Engine:</strong> Custom-built physics engine calculates gravitational forces, particle interactions, and trajectory paths using optimized algorithms for real-time performance with thousands of particles.</li>
                                <li><strong>GPU-Accelerated Rendering:</strong> Utilizes WebGL shaders and Three.js instancing to render complex particle systems at 60fps, with custom vertex and fragment shaders for stunning visual effects.</li>
                                <li><strong>Interactive Control System:</strong> Dynamic parameter adjustment system allows real-time manipulation of gravitational constants, particle properties, and simulation settings with immediate visual feedback.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-sm">
                            <h3 className="text-lg font-semibold text-white mb-4">🌌 Real-Time Gravity Simulation</h3>
                            <p className="text-neutral-300 leading-relaxed">
                                Advanced physics engine calculates gravitational forces between particles in real-time, supporting multiple gravity wells, attractors, and repulsors. The system handles complex multi-body interactions with accurate force calculations and smooth particle motion.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-sm">
                            <h3 className="text-lg font-semibold text-white mb-4">✨ Immersive Particle Systems</h3>
                            <p className="text-neutral-300 leading-relaxed">
                                Renders thousands of particles with GPU-accelerated instancing, each responding to gravitational forces with realistic physics. Custom shaders create stunning visual effects including trails, color gradients, and dynamic lighting based on velocity and proximity.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-sm">
                            <h3 className="text-lg font-semibold text-white mb-4">🎮 Interactive Physics Playground</h3>
                            <p className="text-neutral-300 leading-relaxed">
                                A fully interactive environment where users can create gravity wells, adjust gravitational strength, modify particle properties, and observe real-time effects. Intuitive controls make complex physics concepts accessible and engaging.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-sm">
                            <h3 className="text-lg font-semibold text-white mb-4">📊 Trajectory Analysis & Metrics</h3>
                            <p className="text-neutral-300 leading-relaxed">
                                Real-time calculation and visualization of orbital mechanics, escape velocities, and particle trajectories. The system displays physics metrics including velocity vectors, force magnitudes, and energy calculations for educational insights.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Impact / Outcomes */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-sm"
                >
                    <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                        <TrendingUp className="size-6 text-cyan-400" aria-hidden="true" />
                        Impact
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'EDUCATION',
                                value: 'Enhanced Learning',
                                description: 'Makes complex gravitational physics concepts intuitive and engaging through interactive visualization, transforming abstract theory into hands-on experimentation.',
                            },
                            {
                                title: 'PERFORMANCE',
                                value: 'Real-Time Simulation',
                                description: 'Renders thousands of particles with accurate physics calculations at 60fps, enabling smooth, responsive interactions that traditional simulation tools struggle to achieve.',
                            },
                            {
                                title: 'ACCESSIBILITY',
                                value: 'Web-Based',
                                description: 'Delivers professional-grade physics simulation directly in the browser, eliminating the need for expensive software or complex installations.',
                            },
                        ].map((outcome, index) => (
                            <motion.div
                                key={outcome.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="rounded-xl border border-white/10 bg-white/5 p-4"
                            >
                                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">{outcome.title}</p>
                                <p className="text-2xl font-bold text-cyan-300 mb-2">{outcome.value}</p>
                                <p className="text-sm text-neutral-300 leading-relaxed">{outcome.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-6 text-center"
                >
                    <p className="text-sm text-neutral-300">
                        Antigravity represents a breakthrough in physics education and simulation technology, combining cutting-edge WebGL rendering with accurate physics calculations to create an immersive, interactive platform that makes gravitational mechanics accessible and engaging for everyone.
                    </p>
                    <div className="mt-4 flex flex-col items-center gap-4">
                        <div className="flex justify-center gap-4">
                            <a
                                href="https://3d-posture-analytics-ai.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-2 text-sm font-bold text-white hover:bg-cyan-600 transition-colors shadow-lg shadow-cyan-500/25"
                            >
                                <Zap className="size-4" />
                                Live Demo
                            </a>
                            <a
                                href="https://github.com/HarshithKeshavamurthy17/3d-posture-analytics"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 text-sm font-semibold text-black hover:bg-gray-200 transition-colors"
                            >
                                <Code className="size-4" />
                                View Source
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
