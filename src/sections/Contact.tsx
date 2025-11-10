import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, MessageSquare, Clock, Sparkles } from 'lucide-react';
import { Section } from '../components/layout/Section';
import { Button } from '../components/ui/button';

const socials = [
  {
    ariaLabel: 'Open GitHub profile (HarshithKeshavamurthy17)',
    href: 'https://github.com/HarshithKeshavamurthy17',
    label: 'GitHub',
    icon: Github,
    color: 'from-purple-500/20 to-pink-500/10',
  },
  {
    ariaLabel: 'Open LinkedIn profile (harshith-k-bu)',
    href: 'https://www.linkedin.com/in/harshith-k-bu/',
    label: 'LinkedIn',
    icon: Linkedin,
    color: 'from-blue-500/20 to-cyan-500/10',
  },
  {
    ariaLabel: 'Email Harshith (hk17@bu.edu)',
    href: 'mailto:hk17@bu.edu',
    label: 'Email',
    icon: Mail,
    color: 'from-emerald-500/20 to-green-500/10',
  },
];

export function Contact() {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <Section id="contact" className="relative">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 blur-3xl" aria-hidden="true" />

      <div className="grid gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        {/* Left column - Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="relative flex flex-col gap-2">
            <motion.div
              className="absolute -left-4 top-0 h-full w-1 rounded-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
              aria-hidden="true"
            />
            <div className="flex items-center gap-3">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Let&apos;s build together</h2>
              <MessageSquare className="size-7 md:size-8 text-cyan-400" aria-hidden="true" />
            </div>
            <p className="text-lg md:text-xl text-neutral-300">
              Drop a note about data platform needs, ML experimentation roadmaps, or collaboration ideas. I respond in under two business days.
            </p>
          </div>

          {/* Enhanced Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const formData = new FormData(form);
              const name = formData.get('name') as string;
              const email = formData.get('email') as string;
              const message = formData.get('message') as string;
              
              // Create mailto link with form data
              const subject = encodeURIComponent(`Portfolio Contact: ${name}`);
              const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
              window.location.href = `mailto:hk17@bu.edu?subject=${subject}&body=${body}`;
            }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-white/[0.01] p-8 backdrop-blur-xl"
          >
            {/* Animated gradient orb */}
            <motion.div
              className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            />

            <div className="relative z-10 grid gap-5">
              {/* Name field */}
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-neutral-300">
                  Name
                </label>
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-neutral-500 focus:border-cyan-400/50 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)] focus:ring-2 focus:ring-cyan-400/20"
                  />
                  {focusedField === 'name' && (
                    <motion.div
                      layoutId="formFocus"
                      className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/5"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      aria-hidden="true"
                    />
                  )}
                </div>
              </div>

              {/* Email field */}
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-neutral-300">
                  Email
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-neutral-500 focus:border-cyan-400/50 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)] focus:ring-2 focus:ring-cyan-400/20"
                  />
                  {focusedField === 'email' && (
                    <motion.div
                      layoutId="formFocus"
                      className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/5"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      aria-hidden="true"
                    />
                  )}
                </div>
              </div>

              {/* Message field */}
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-neutral-300">
                  Project details
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about the problem, dataset, or opportunity."
                    rows={5}
                    required
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-neutral-500 focus:border-cyan-400/50 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)] focus:ring-2 focus:ring-cyan-400/20"
                  />
                  {focusedField === 'message' && (
                    <motion.div
                      layoutId="formFocus"
                      className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/5"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      aria-hidden="true"
                    />
                  )}
                </div>
              </div>

              {/* Honeypot */}
              <div className="hidden">
                <label htmlFor="company" className="text-sm">
                  Company
                </label>
                <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              {/* Submit button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Send className="size-4" aria-hidden="true" />
                    Send message
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    animate={{ x: [-200, 200] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    aria-hidden="true"
                  />
                </Button>
              </motion.div>

              {/* Form note */}
              <p className="flex items-center gap-2 text-xs text-neutral-500">
                <Clock className="size-3" aria-hidden="true" />
                <span>I reply within 48 hours.</span>
              </p>
            </div>
          </motion.form>
        </motion.div>

        {/* Right column - Direct reach */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-5"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-white/[0.01] p-8 backdrop-blur-xl">
            <motion.div
              className="pointer-events-none absolute -left-12 -top-12 size-32 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-3">
                <Sparkles className="size-6 text-cyan-400" aria-hidden="true" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">Direct reach</h3>
              </div>
              <p className="mb-6 text-base md:text-lg leading-relaxed text-neutral-200">
                Prefer async? Email <a
                  href="mailto:hk17@bu.edu"
                  aria-label="Email Harshith (hk17@bu.edu)"
                  className="font-semibold text-cyan-400 transition-colors hover:text-cyan-300 hover:underline"
                >
                  hk17@bu.edu
                </a> or connect on any channel below.
              </p>

              <ul className="space-y-4">
                {socials.map(({ label, href, icon: Icon, ariaLabel, color }, index) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <motion.a
                      href={href}
                      aria-label={ariaLabel}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4, transition: { duration: 0.2 } }}
                      className={`group relative flex items-center gap-4 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-r ${color} p-4 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]`}
                    >
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-cyan-400 ring-1 ring-white/10 transition-colors group-hover:bg-white/10">
                        <Icon className="size-5" aria-hidden="true" />
                      </div>
                      <span className="text-base md:text-lg font-semibold text-white">{label}</span>
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        aria-hidden="true"
                      />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Response time badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-3 rounded-2xl border border-emerald-400/30 bg-gradient-to-r from-emerald-500/10 to-green-500/5 p-4 backdrop-blur-sm"
          >
            <div className="flex size-10 items-center justify-center rounded-full bg-emerald-500/20">
              <Clock className="size-5 text-emerald-300" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <p className="text-base md:text-lg font-semibold text-emerald-200">Quick response time</p>
              <p className="text-sm md:text-base text-emerald-300/80">Usually within 48 hours</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
