import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (!href.startsWith('/#')) {
      return false;
    }

    const targetHash = href.split('#')[1] ?? '';
    if (targetHash === 'hero') {
      return pathname === '/' && (hash === '#hero' || hash === '' || hash === '#');
    }

    return pathname === '/' && hash === `#${targetHash}`;
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'sticky top-0 z-40 w-full border-b border-border/40 backdrop-blur-xl transition-all duration-300',
        scrolled
          ? 'bg-background/90 shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
          : 'bg-background/75'
      )}
    >
      <nav className="container mx-auto flex w-full max-w-[1400px] items-center justify-between gap-6 px-8 md:px-12 lg:px-16 py-4">
        <motion.a
          href="/#hero"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-md font-heading text-lg font-bold text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1720]"
          aria-label="Harshith K home"
          aria-current={isActive('/#hero') ? 'page' : undefined}
        >
          <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-teal-300 bg-clip-text font-bold text-transparent transition-all duration-300 hover:from-sky-200 hover:via-cyan-200 hover:to-teal-200">
            Harshith K
          </span>
        </motion.a>
        <div className="flex flex-1 items-center justify-end gap-6">
          <ul className="hidden items-center gap-5 text-sm font-medium text-muted-foreground md:flex">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <a
                  className={cn(
                    'relative rounded-md transition-all duration-300 hover:text-[#22d3ee] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1720]',
                    isActive(link.href) ? 'text-[#22d3ee]' : 'text-muted-foreground',
                  )}
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                variant="outline"
                size="sm"
                className="inline-flex border-cyan-400/30 bg-cyan-500/10 text-cyan-200 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              >
                <a href="/hk-portfolio/assets/Harshith_Keshavamurthy_Resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
