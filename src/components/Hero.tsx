import { Github, Linkedin, Mail, Phone, ArrowDown, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const roles = ['Software Engineer', 'Full-Stack Developer', 'AI/ML Engineer', 'Backend Engineer'];

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
      className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-medium mb-8 tracking-wide">
          <Sparkles size={12} />
          Available for Opportunities
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight mb-6 leading-none">
          Yash<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Aneja</span>
        </h1>

        <div className="text-xl md:text-2xl text-gray-400 mb-3 h-8 font-light">
          <span className="text-white font-medium">{displayed}</span>
          <span className="animate-pulse text-cyan-400">|</span>
        </div>

        <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
          B.Tech Computer Science student at VIT Chennai. Versatile Software Engineer specializing in Full-Stack Development, AI/ML Systems, and Backend Engineering. Strong foundation in Data Structures & Algorithms with 150+ LeetCode problems solved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            className="px-6 py-3 bg-cyan-500 text-gray-950 font-semibold rounded-lg hover:bg-cyan-400 transition-all duration-200 text-sm"
          >
            View My Work
          </a>
          <a
            href="mailto:yashaneja28@gmail.com"
            className="px-6 py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 hover:border-white/40 transition-all duration-200 text-sm"
          >
            Contact Me
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="mailto:yashaneja28@gmail.com"
            className="text-gray-500 hover:text-cyan-400 transition-colors duration-200"
            title="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/yashaneja2810"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 transition-colors duration-200"
            title="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/yash-aneja-85b19128b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 transition-colors duration-200"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="tel:+919587800439"
            className="text-gray-500 hover:text-cyan-400 transition-colors duration-200"
            title="Phone"
          >
            <Phone size={20} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-cyan-400 transition-colors animate-bounce"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
