import { Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '../../lib/cn';

const footerLinks = [
  {
    ariaLabel: 'Open GitHub profile (HarshithKeshavamurthy17)',
    href: 'https://github.com/HarshithKeshavamurthy17',
    label: 'GitHub',
    icon: Github,
  },
  {
    ariaLabel: 'Open LinkedIn profile (harshith-k-bu)',
    href: 'https://www.linkedin.com/in/harshith-k-bu/',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    ariaLabel: 'Email Harshith (harshith2001@gmail.com)',
    href: 'mailto:harshith2001@gmail.com',
    label: 'Email',
    icon: Mail,
  },
];

type FooterProps = {
  className?: string;
};

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('border-t border-border/40 bg-background/80 backdrop-blur', className)}>
      <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 py-10 text-sm text-muted-foreground sm:flex-row">
        <p aria-label="© 2025 Harshith K">© 2025 Harshith K. All rights reserved.</p>
        <ul className="flex items-center gap-4">
          {footerLinks.map(({ href, label, icon: Icon, ariaLabel }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={ariaLabel}
                className="flex items-center gap-2 rounded-md text-muted-foreground transition-colors hover:text-[#22d3ee] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22d3ee] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1720]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="size-4" aria-hidden="true" />
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
