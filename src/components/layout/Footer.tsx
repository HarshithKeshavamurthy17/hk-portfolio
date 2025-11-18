import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp, Sparkles } from 'lucide-react';

const footerLinks = [
  {
    ariaLabel: 'GitHub - View my code',
    href: 'https://github.com/HarshithKeshavamurthy17',
    label: 'GitHub',
    icon: Github,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    ariaLabel: 'LinkedIn - Connect with me',
    href: 'https://www.linkedin.com/in/harshith-k-bu/',
    label: 'LinkedIn',
    icon: Linkedin,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    ariaLabel: 'Email - Send a message',
    href: 'mailto:hk17@bu.edu',
    label: 'Email',
    icon: Mail,
    gradient: 'from-emerald-500 to-green-500',
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-[#0f172a] to-[#020617]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 50%, rgba(34, 211, 238, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 70% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
          {/* Left side - Info */}
          <div className="space-y-6">
            {/* Logo/Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="mb-2 text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Harshith K
              </h3>
              <p className="text-neutral-400">
                Data Engineer • AI/ML Engineer • Data Scientist
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-md text-sm leading-relaxed text-neutral-500"
            >
              Building intelligent data systems where AI and engineering converge. 
              Passionate about creating scalable solutions that turn data into actionable insights.
            </motion.p>

            {/* Made with love */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 text-sm text-neutral-500"
            >
              <span>Built with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="size-4 fill-red-500 text-red-500" />
              </motion.div>
              <span>using React, TypeScript & Framer Motion</span>
            </motion.div>
          </div>

          {/* Right side - Links & Back to top */}
          <div className="space-y-6">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                Connect
              </h4>
              <div className="flex flex-wrap gap-3">
                {footerLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-neutral-300 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                  >
                    <link.icon className={`size-4 bg-gradient-to-r ${link.gradient} bg-clip-text text-transparent`} />
                    <span>{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 rounded-lg border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-sm transition-all hover:border-cyan-400/40 hover:from-cyan-500/20 hover:to-blue-500/20"
            >
              <span>Back to Top</span>
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUp className="size-4" />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-neutral-500 sm:flex-row"
        >
          <div className="flex items-center gap-2">
            <span>© 2025 Harshith K.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">All rights reserved</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="size-4 text-cyan-400" />
            <span>Inspired by amazing portfolios</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
