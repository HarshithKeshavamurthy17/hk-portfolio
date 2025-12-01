import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Brain, Zap, Code, ArrowLeft, CheckCircle2, TrendingUp, Activity, Layers, FileText, MessageSquare } from 'lucide-react';

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
                            <h1 className="text-4xl md:text-5xl font-bold text-white">3D Posture & Motion Analytics Dashboard</h1>
                            <p className="text-lg text-neutral-300 max-w-3xl">
                                Democratizing movement analysis with AI-powered pose estimation and real-time biomechanical insights. An advanced platform that leverages computer vision and machine learning to perform deep 3D skeletal analysis, posture scoring, and predictive injury risk assessment from video footage.
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                {['React', 'Three.js', 'FastAPI', 'MediaPipe', 'Python', 'Computer Vision'].map((tag) => (
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

                {/* Metric Cards Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {[
                        {
                            icon: <Shield className="size-5 text-red-300" aria-hidden="true" />,
                            title: 'RISK DETECTION',
                            value: 'AI-Powered',
                            subtitle: 'Injury Prediction',
                            extra: 'Machine learning models analyze movement patterns to predict potential injury risks with confidence scores and prevention recommendations.',
                        },
                        {
                            icon: <Layers className="size-5 text-blue-300" aria-hidden="true" />,
                            title: 'ANALYSIS DEPTH',
                            value: '3D Visualization',
                            subtitle: 'Real-Time Skeleton Tracking',
                            extra: 'Color-coded 3D skeletal reconstruction with 33 landmark tracking for comprehensive biomechanical analysis.',
                        },
                        {
                            icon: <Activity className="size-5 text-purple-300" aria-hidden="true" />,
                            title: 'INTERACTION',
                            value: 'Interactive Dashboard',
                            subtitle: 'Comprehensive Analytics',
                            extra: 'Detailed metrics including joint angles, symmetry scores, movement quality, and temporal analysis with interactive charts.',
                        },
                        {
                            icon: <FileText className="size-5 text-emerald-300" aria-hidden="true" />,
                            title: 'REPORTING',
                            value: 'Actionable Insights',
                            subtitle: 'AI-Generated Recommendations',
                            extra: 'Generates detailed reports with posture scores, movement quality assessments, and personalized improvement recommendations.',
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
                            <p className="text-xl font-bold text-white mb-1">{metric.value}</p>
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
                                    Movement analysis and posture assessment have traditionally required expensive motion capture systems, specialized equipment, and expert biomechanists. For athletes, physical therapists, fitness professionals, and individuals, understanding movement quality and identifying potential injury risks often means:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Relying on subjective visual assessment</li>
                                    <li>Lacking quantitative data on movement patterns</li>
                                    <li>Missing early warning signs of biomechanical issues</li>
                                    <li>Having no accessible way to track posture and movement over time</li>
                                </ul>
                                <p>
                                    Manual analysis is time-consuming, requires expertise, and is often inaccessible to those who need it most. The challenge was to build a system that could:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Extract accurate 3D pose data from standard video footage</li>
                                    <li>Provide real-time visualization of skeletal movement</li>
                                    <li>Quantify posture quality and movement symmetry</li>
                                    <li>Predict potential injury risks using AI analysis</li>
                                    <li>Generate actionable insights for improvement</li>
                                </ul>
                                <blockquote className="border-l-2 border-cyan-400/50 pl-4 italic text-neutral-200">
                                    &quot;How can we use AI and computer vision to make professional-grade movement analysis accessible to everyone?&quot;
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
                                    'Python 3.10+',
                                    'FastAPI (Backend)',
                                    'React (Frontend)',
                                    'Three.js (3D Visualization)',
                                    'MediaPipe (Pose Estimation)',
                                    'NumPy & SciPy (Data Processing)',
                                    'Recharts (Data Visualization)',
                                    'Vite & Git',
                                ].map((tech) => (
                                    <li key={tech} className="flex items-start gap-2 text-sm text-neutral-200">
                                        <CheckCircle2 className="size-4 text-cyan-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                                        <span>{tech}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 text-xs text-neutral-400 italic">
                                Engineered for real-time processing, accurate pose estimation, and intuitive 3D visualization.
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
                                The 3D Posture & Motion Analytics Dashboard is built as a full-stack application leveraging <strong>FastAPI</strong> for robust backend processing and <strong>React with Three.js</strong> for an immersive, interactive 3D visualization frontend.
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-2">
                                <li><strong>Hybrid Pose Estimation Pipeline:</strong> Utilizes <strong>Google's MediaPipe</strong> for real-time 3D pose estimation from video, extracting 33 body landmarks with world coordinates for accurate skeletal reconstruction.</li>
                                <li><strong>3D Visualization Engine:</strong> Powered by <strong>Three.js</strong>, providing real-time rendering of color-coded skeletal structures, joint spheres, and interactive camera controls for comprehensive movement analysis.</li>
                                <li><strong>Analytics Computation Engine:</strong> A specialized analytics pipeline designed for joint angle calculation, posture scoring, symmetry analysis, movement quality assessment, and AI-powered injury risk prediction.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-sm">
                            <h3 className="text-lg font-semibold text-white mb-4">🎯 AI Injury Risk Prediction</h3>
                            <p className="text-neutral-300 leading-relaxed">
                                Advanced machine learning models analyze movement patterns to identify potential injury risks across different body regions. The system provides severity scoring, warning signs detection, and personalized prevention recommendations with AI confidence metrics.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-sm">
                            <h3 className="text-lg font-semibold text-white mb-4">📊 Comprehensive Analytics Dashboard</h3>
                            <p className="text-neutral-300 leading-relaxed">
                                Goes beyond simple visualization. The platform extracts and visualizes joint angles over time, body region activity, movement quality metrics, symmetry scores, and temporal patterns in an interactive, easy-to-understand dashboard.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-sm">
                            <h3 className="text-lg font-semibold text-white mb-4">🎬 Real-Time 3D Visualization</h3>
                            <p className="text-neutral-300 leading-relaxed">
                                A context-aware 3D viewer that allows users to scrub through video frames, analyze skeletal movement from any angle, and observe color-coded body parts for instant identification of movement patterns and asymmetries.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-sm">
                            <h3 className="text-lg font-semibold text-white mb-4">📈 Detailed Reporting</h3>
                            <p className="text-neutral-300 leading-relaxed">
                                Generates comprehensive analytics reports including overall posture scores, movement quality breakdowns, AI injury predictions, strengths and weaknesses analysis, and actionable recommendations to improve biomechanical health.
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
                                title: 'ACCESSIBILITY',
                                value: 'Democratized',
                                description: 'Makes professional-grade movement analysis available to athletes, therapists, and individuals without expensive motion capture systems.',
                            },
                            {
                                title: 'EFFICIENCY',
                                value: 'Real-Time Processing',
                                description: 'Analyzes video footage and generates comprehensive reports in minutes, compared to hours of manual analysis.',
                            },
                            {
                                title: 'CLARITY',
                                value: 'Visual & Quantitative',
                                description: 'Transforms complex biomechanical data into intuitive 3D visualizations and clear, actionable insights.',
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
                        The 3D Posture & Motion Analytics Dashboard represents a significant advancement in <span className="font-semibold text-white">movement analysis technology</span>, combining cutting-edge computer vision with AI-powered insights to make professional biomechanical assessment accessible to everyone.
                    </p>
                    <div className="mt-4 flex justify-center gap-4">
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
                </motion.div>
            </div>
        </div>
    );
}
