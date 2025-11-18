import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, Menu, X, Sparkles } from 'lucide-react';
import { cn } from '../../lib/cn';

const navLinks = [
  { href: '/#projects', label: 'Projects' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
];

export function Navbar() {
  const location = useLocation();
  const { pathname, hash } = location;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const navOpacity = useTransform(scrollYProgress, [0, 0.1], [0.8, 1]);
  const navBlur = useTransform(scrollYProgress, [0, 0.1], [8, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (!href.startsWith('/#')) return false;
    const targetHash = href.split('#')[1] ?? '';
    if (targetHash === 'hero') {
      return pathname === '/' && (hash === '#hero' || hash === '' || hash === '#');
    }
    return pathname === '/' && hash === `#${targetHash}`;
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ 
          backdropFilter: `blur(${navBlur.get()}px)`,
        }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300',
          scrolled
            ? 'border-white/10 bg-[#0f172a]/90 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'border-white/5 bg-[#0f172a]/70'
        )}
      >
        {/* Gradient line at top */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-8 lg:px-12">
          {/* Logo */}
          <motion.a
            href="/#hero"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative rounded-lg"
          >
            <div className="relative flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="size-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-1.5"
              >
                <Sparkles className="size-full text-cyan-400" />
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Harshith K
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <a
                  href={link.href}
                  className={cn(
                    'group relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300',
                    isActive(link.href)
                      ? 'text-cyan-400'
                      : 'text-neutral-400 hover:text-white'
                  )}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="navbar-pill"
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {!isActive(link.href) && (
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-white/5 opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <motion.a
              href="/hk-portfolio/assets/Harshith_Keshavamurthy_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/70"
            >
              <Download className="size-4" />
              <span>Resume</span>
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="size-5 text-white" />
              ) : (
                <Menu className="size-5 text-white" />
              )}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          y: mobileMenuOpen ? 0 : -20,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-x-0 top-[73px] z-40 border-b border-white/10 bg-[#0f172a]/95 p-6 backdrop-blur-2xl md:hidden"
      >
        <ul className="space-y-2">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: mobileMenuOpen ? 1 : 0,
                x: mobileMenuOpen ? 0 : -20,
              }}
              transition={{ delay: index * 0.05 }}
            >
              <a
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'block rounded-lg px-4 py-3 text-base font-medium transition-all',
                  isActive(link.href)
                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 border border-cyan-400/30'
                    : 'text-neutral-400 hover:bg-white/5 hover:text-white'
                )}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: mobileMenuOpen ? 1 : 0,
              x: mobileMenuOpen ? 0 : -20,
            }}
            transition={{ delay: navLinks.length * 0.05 }}
          >
            <a
              href="/hk-portfolio/assets/Harshith_Keshavamurthy_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-black"
            >
              <Download className="size-4" />
              <span>Download Resume</span>
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </>
  );
}
