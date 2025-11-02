import { useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeProvider';
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
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/75 backdrop-blur-lg">
      <nav className="container mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a
          href="/#hero"
          className="rounded-md font-heading text-lg font-semibold text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1720]"
          aria-label="Harshith K home"
          aria-current={isActive('/#hero') ? 'page' : undefined}
        >
          Harshith K
        </a>
        <div className="flex flex-1 items-center justify-end gap-6">
          <ul className="hidden items-center gap-5 text-sm font-medium text-muted-foreground md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className={cn(
                    'rounded-md transition-colors hover:text-[#22d3ee] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1720]',
                    isActive(link.href) ? 'text-[#22d3ee]' : 'text-muted-foreground',
                  )}
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <Button asChild variant="outline" size="sm" className="inline-flex">
              <a href="/assets/Harshith_Keshavamurthy_Resume.pdf" download>
                Download Resume
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
