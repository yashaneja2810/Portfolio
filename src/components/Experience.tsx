import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-transparent" />
      <div className="orb orb-blue w-[350px] h-[350px] top-[20%] -left-[100px] opacity-25" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-label">
            <Briefcase size={14} />
            Experience
          </p>
          <h2 className="section-title">Work History</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-400/50 via-purple-300/30 to-transparent" />

          <div className="pl-8 md:pl-24 relative">
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/30" />
              <div className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-20" />
            </div>

            <div className="glass-card rounded-2xl p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                      Full-Time Internship
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a2e]">
                    AI Research Intern – Generative AI (Full-Stack)
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm glass px-3 py-1.5 rounded-full">
                  <Calendar size={13} />
                  May 2025 – July 2025
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  'Designed and implemented responsive frontend interfaces using React, TypeScript, and TailwindCSS for AI-powered web applications — ensuring consistent visual output across devices and screen sizes.',
                  'Built and maintained reusable UI component libraries following a defined component style guide — enforcing design consistency, accessibility standards, and predictable component behaviour.',
                  'Collaborated asynchronously with a distributed engineering team, producing clear documentation on component APIs, UI behaviour, and design decisions.',
                  'Identified and resolved visual inconsistencies between design references and implemented interfaces, proactively communicating discrepancies and proposing solutions.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-500 text-sm leading-relaxed">
                    <CheckCircle2 size={16} className="text-indigo-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
                {[
                  { label: 'React + TypeScript', desc: 'Frontend stack' },
                  { label: 'Component Libraries', desc: 'Design system work' },
                  { label: 'Remote-First', desc: 'Async collaboration' },
                ].map((h) => (
                  <div key={h.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-indigo-500" />
                    </div>
                    <div>
                      <div className="text-[#1a1a2e] font-semibold text-sm">{h.label}</div>
                      <div className="text-slate-400 text-xs">{h.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
