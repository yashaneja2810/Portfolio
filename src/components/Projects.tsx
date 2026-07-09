import { Github, ExternalLink, Layers, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'AutoExec AI',
    subtitle: 'Full-Stack SaaS Platform UI',
    description:
      'Designed and implemented a full design system from scratch — custom dark-theme glassmorphism UI with consistent spacing, typography scale, color tokens, and reusable component library applied across 15+ application screens.',
    stack: ['TypeScript', 'React 18', 'TailwindCSS', 'Framer Motion', 'Zustand', 'CSS3'],
    bullets: [
      'Delivered pixel-accurate, responsive layouts across all viewport sizes — mobile-first breakpoints, fluid grids, and adaptive sidebar panels.',
      'Built real-time live meeting room UI: dynamic video grid (WebRTC), floating control bar, collapsible panels, live caption overlay with Framer Motion transitions.',
      'Implemented complex interactive patterns: multi-step onboarding wizard, advanced task filter/sort, real-time status updates, modal systems with focus trapping.',
      'Managed global UI state using Zustand with persistent auth session hydration and optimistic UI updates across views.',
    ],
    highlight: '15+ screens with custom design system',
    color: 'indigo',
    github: 'https://github.com/yashaneja2810/Meeting-Intelligent-System',
    demo: 'https://meeting-intelligent-system.vercel.app/',
  },
  {
    title: 'PrayogAI',
    subtitle: 'SaaS Platform UI & Embeddable Chat Widget',
    description:
      'Built a self-contained embeddable chat widget in pure Vanilla JavaScript (IIFE, zero dependencies) with custom CSS3 theming, light/dark mode toggle, draggable/resizable window, Markdown rendering, and full XSS protection.',
    stack: ['TypeScript', 'React 18', 'TailwindCSS', 'Vanilla JS', 'CSS3', 'Framer Motion'],
    bullets: [
      'Implemented custom CSS3 component styling with configurable brand color injection via data attributes — any website can embed the widget and match their brand.',
      'Designed React + TypeScript platform UI: drag-and-drop file upload, bot management dashboard with search/filter, integrated live chat testing interface.',
      'Applied responsive web design principles: fluid layouts, TailwindCSS responsive prefixes, accessible form controls, and keyboard navigation support.',
      'Cross-browser compatible across Chrome, Firefox, and Safari with zero external stylesheet dependencies.',
    ],
    highlight: 'Zero-dependency embeddable widget',
    color: 'purple',
    github: 'https://github.com/yashaneja2810/PrayogAI',
    demo: null,
  },
  {
    title: 'Star Wars Jedi Academy',
    subtitle: 'Award-Winning Interactive Website',
    description:
      'A premium, cinematic Star Wars experience featuring Jedi training, Force-powered animations, playable video galleries, and GSAP-driven scroll-triggered effects. Built with award-winning design patterns.',
    stack: ['React 18', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Vite', 'Lucide React'],
    bullets: [
      'Interactive video cards with custom controls (play/pause, mute, fullscreen), hover effects, and multiple fallback sources.',
      'Professional GSAP-powered animations: scroll-triggered effects, 3D transforms, parallax scrolling, and animated Force energy particles.',
      'Jedi-themed glassmorphism design with gradient overlays, glowing lightsaber borders, and Orbitron/Rajdhani typography.',
      'Mobile-first responsive design with touch-friendly interactions and performance-optimized 60fps animations.',
    ],
    highlight: 'Awwwards-quality cinematic experience',
    color: 'amber',
    github: 'https://github.com/yashaneja2810/jedi-frontend',
    demo: 'https://niceui.vercel.app/',
  },
  {
    title: 'Fade',
    subtitle: 'Frontend Application',
    description:
      'A polished, modern frontend application built with cutting-edge web technologies, showcasing clean design patterns and smooth user interactions deployed on Vercel.',
    stack: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
    bullets: [
      'Built responsive, performant frontend with modern React patterns and TypeScript for type safety.',
      'Implemented clean, modular component architecture with reusable design system.',
      'Deployed on Vercel with optimized build pipeline and continuous deployment.',
    ],
    highlight: 'Modern frontend architecture',
    color: 'emerald',
    github: 'https://github.com/yashaneja2810/Fade-Frontend',
    demo: 'https://fade-rust.vercel.app/',
  },
  {
    title: 'Lead Intelligence',
    subtitle: 'Data-Driven Analytics Platform',
    description:
      'An intelligent lead analytics and management platform with data-driven insights, built to streamline lead tracking, scoring, and conversion optimization.',
    stack: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
    bullets: [
      'Designed intuitive dashboard UI for lead management with real-time data visualization.',
      'Implemented advanced filtering, sorting, and search capabilities across lead datasets.',
      'Built responsive layouts optimized for both desktop and mobile workflows.',
    ],
    highlight: 'Data-driven lead analytics',
    color: 'blue',
    github: 'https://github.com/yashaneja2810/Lead-Intelligence',
    demo: 'https://lead-intelligence-sandy.vercel.app/',
  },
];

const colorMap: Record<string, { badge: string; accent: string; tag: string; glow: string }> = {
  indigo: {
    badge: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    accent: 'text-indigo-500',
    tag: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    glow: 'group-hover:shadow-indigo-500/8',
  },
  purple: {
    badge: 'bg-purple-50 text-purple-600 border-purple-100',
    accent: 'text-purple-500',
    tag: 'bg-purple-50 text-purple-600 border-purple-100',
    glow: 'group-hover:shadow-purple-500/8',
  },
  amber: {
    badge: 'bg-amber-50 text-amber-700 border-amber-100',
    accent: 'text-amber-500',
    tag: 'bg-amber-50 text-amber-700 border-amber-100',
    glow: 'group-hover:shadow-amber-500/8',
  },
  emerald: {
    badge: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    accent: 'text-emerald-500',
    tag: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    glow: 'group-hover:shadow-emerald-500/8',
  },
  blue: {
    badge: 'bg-blue-50 text-blue-600 border-blue-100',
    accent: 'text-blue-500',
    tag: 'bg-blue-50 text-blue-600 border-blue-100',
    glow: 'group-hover:shadow-blue-500/8',
  },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Background decorations */}
      <div className="orb orb-purple w-[500px] h-[500px] top-[10%] -right-[150px] opacity-25" />
      <div className="orb orb-indigo w-[400px] h-[400px] bottom-[20%] -left-[150px] opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-label">
            <Layers size={14} />
            Projects
          </p>
          <h2 className="section-title">What I've Built</h2>
          <p className="text-slate-500 mt-4 text-lg max-w-2xl">
            Production-deployed applications with custom design systems, reusable component libraries, and pixel-accurate responsive UIs.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((p) => {
            const c = colorMap[p.color];
            return (
              <div
                key={p.title}
                className={`group glass-card rounded-2xl p-8 md:p-10 ${c.glow}`}
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1a1a2e] mb-1">{p.title}</h3>
                    <p className="text-sm text-slate-400 font-medium">{p.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-indigo-600 transition-colors glass px-3 py-2 rounded-xl hover:border-indigo-200"
                    >
                      <Github size={14} />
                      Code
                    </a>
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                      >
                        <ExternalLink size={13} />
                        Live Demo
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Highlight badge */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold mb-5 ${c.badge}`}>
                  <span className={`w-1.5 h-1.5 rounded-full bg-current`} />
                  {p.highlight}
                </div>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{p.description}</p>

                {/* Bullet points */}
                <ul className="space-y-2.5 mb-6">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-slate-500 text-sm leading-relaxed">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${c.accent} bg-current`} />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-100">
                  {p.stack.map((tech) => (
                    <span key={tech} className={`text-xs px-3 py-1.5 rounded-full font-medium border ${c.tag}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
