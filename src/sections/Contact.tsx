import { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Send, Sparkles, ArrowUpRight, Clock, MapPin } from 'lucide-react';

const socials = [
  {
    ariaLabel: 'GitHub - View my code and projects',
    href: 'https://github.com/HarshithKeshavamurthy17',
    label: 'GitHub',
    icon: Github,
    gradient: 'from-purple-500 to-pink-500',
    bg: 'from-purple-500/10 to-pink-500/5',
  },
  {
    ariaLabel: 'LinkedIn - Connect professionally',
    href: 'https://www.linkedin.com/in/harshith-k-bu/',
    label: 'LinkedIn',
    icon: Linkedin,
    gradient: 'from-blue-500 to-cyan-500',
    bg: 'from-blue-500/10 to-cyan-500/5',
  },
  {
    ariaLabel: 'Email - Send me a message',
    href: 'mailto:hk17@bu.edu',
    label: 'hk17@bu.edu',
    icon: Mail,
    gradient: 'from-emerald-500 to-green-500',
    bg: 'from-emerald-500/10 to-green-500/5',
  },
];

export function Contact() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      {/* Crazy animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)
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
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/5 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="size-4" />
            <span>Let's connect</span>
          </motion.div>
          <h2 className="mb-4 text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-400">
            Whether you have a project in mind, want to collaborate, or just want to say hi — I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr,1fr]">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onMouseMove={handleMouseMove}
            className="group relative"
          >
            {/* Spotlight effect on hover */}
            <motion.div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: useTransform(
                  [mouseX, mouseY],
                  ([x, y]) =>
                    `radial-gradient(600px circle at ${x}px ${y}px, rgba(34, 211, 238, 0.15), transparent 40%)`
                ),
              }}
            />

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);
                const name = formData.get('name') as string;
                const email = formData.get('email') as string;
                const message = formData.get('message') as string;
                
                const subject = encodeURIComponent(`Portfolio Contact: ${name}`);
                const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
                window.location.href = `mailto:hk17@bu.edu?subject=${subject}&body=${body}`;
              }}
              className="relative space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 backdrop-blur-xl"
            >
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-2"
              >
                <label htmlFor="name" className="block text-sm font-semibold text-neutral-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-neutral-500 backdrop-blur-sm transition-all duration-300 focus:border-cyan-400/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="John Doe"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-2"
              >
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-neutral-500 backdrop-blur-sm transition-all duration-300 focus:border-cyan-400/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="john@example.com"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-neutral-500 backdrop-blur-sm transition-all duration-300 focus:border-cyan-400/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-semibold text-black shadow-lg shadow-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/70"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Send className="size-5" />
                  </motion.div>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              {/* Active field indicator */}
              {focusedField && (
                <motion.div
                  layoutId="activeField"
                  className="absolute -left-2 top-0 h-full w-1 rounded-full bg-gradient-to-b from-cyan-500 to-blue-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </form>
          </motion.div>

          {/* Social Links & Info */}
          <div className="space-y-6">
            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold text-white">Quick Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-neutral-400">
                  <Clock className="size-5 text-cyan-400" />
                  <span>Response time: <span className="font-semibold text-white">~2 business days</span></span>
                </div>
                <div className="flex items-center gap-3 text-neutral-400">
                  <MapPin className="size-5 text-cyan-400" />
                  <span>Located in: <span className="font-semibold text-white">Boston, MA</span></span>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              <h3 className="text-xl font-bold text-white">Connect With Me</h3>
              {socials.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.03, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative flex items-center justify-between overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${social.bg} p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-lg`}
                >
                  <div className="relative z-10 flex items-center gap-3">
                    <div className={`flex size-10 items-center justify-center rounded-lg bg-gradient-to-br ${social.bg}`}>
                      <social.icon className={`size-5 bg-gradient-to-br ${social.gradient} bg-clip-text text-transparent`} />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{social.label}</div>
                      {social.label === 'hk17@bu.edu' && (
                        <div className="text-xs text-neutral-400">Direct contact</div>
                      )}
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: hoveredSocial === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight className={`size-5 bg-gradient-to-br ${social.gradient} bg-clip-text text-transparent`} />
                  </motion.div>

                  {/* Hover gradient effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${social.bg} opacity-0`}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative overflow-hidden rounded-2xl border border-violet-400/30 bg-gradient-to-br from-violet-500/10 to-purple-500/5 p-6 backdrop-blur-sm"
            >
              <motion.div
                className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-gradient-to-br from-violet-500/30 to-transparent blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative space-y-3">
                <Sparkles className="size-8 text-violet-400" />
                <h3 className="text-lg font-bold text-white">Open to Opportunities</h3>
                <p className="text-sm leading-relaxed text-neutral-300">
                  Currently seeking full-time roles in Data Engineering, AI/ML Engineering, and Data Science. Let's build something amazing together!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
