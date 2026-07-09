import { Github, Linkedin, Mail, Phone, ArrowDown, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const roles = ['Frontend Engineer', 'Full-Stack Developer', 'UI/UX Enthusiast', 'React Specialist'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg"
    >
      {/* Decorative orbs */}
      <div className="orb orb-indigo w-[500px] h-[500px] top-[10%] left-[15%]" />
      <div className="orb orb-purple w-[400px] h-[400px] bottom-[10%] right-[10%]" />
      <div className="orb orb-blue w-[300px] h-[300px] top-[50%] right-[30%]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Dotted pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.8) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-indigo-200/50 text-indigo-600 text-xs font-semibold mb-10 tracking-wide shadow-lg shadow-indigo-500/5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <Sparkles size={12} />
          Available for Opportunities
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 leading-[0.9]">
          <span className="text-[#1a1a2e]">Yash</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 animate-gradient">
            Aneja
          </span>
        </h1>

        {/* Typing role */}
        <div className="text-xl md:text-2xl text-slate-400 mb-4 h-9 font-light">
          <span className="text-slate-700 font-medium">{displayed}</span>
          <span className="animate-pulse text-indigo-500 font-light">|</span>
        </div>

        {/* Description */}
        <p className="text-slate-500 max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed">
          Frontend Software Engineer delivering pixel-perfect, responsive web interfaces using
          TypeScript, React, CSS3, and TailwindCSS. Strong background in design systems,
          accessible UI components, and performance-optimized interfaces.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a href="#projects" className="btn-primary flex items-center gap-2 text-sm">
            View My Work
            <ArrowDown size={14} />
          </a>
          <a href="mailto:yashaneja28@gmail.com" className="btn-secondary text-sm">
            Contact Me
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-3 mb-16">
          {[
            { icon: Mail, href: 'mailto:yashaneja28@gmail.com', label: 'Email' },
            { icon: Github, href: 'https://github.com/yashaneja2810', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/yash-aneja-85b19128b', label: 'LinkedIn' },
            { icon: Phone, href: 'tel:+919587800439', label: 'Phone' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
              title={label}
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>


    </section>
  );
}
