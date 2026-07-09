import { GraduationCap, MapPin, Brain, Code2 } from 'lucide-react';

const stats = [
  { value: '150+', label: 'LeetCode Problems', icon: '⚡' },
  { value: '5+', label: 'Production Projects', icon: '🚀' },
  { value: '15+', label: 'Screens Per Project', icon: '🎨' },
  { value: '3+', label: 'Design Systems Built', icon: '✨' },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background decorations */}
      <div className="orb orb-indigo w-[400px] h-[400px] -top-[100px] -right-[100px] opacity-30" />
      <div className="orb orb-purple w-[300px] h-[300px] bottom-0 -left-[100px] opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-label">
            <Code2 size={14} />
            About
          </p>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              I'm a <span className="text-[#1a1a2e] font-semibold">Frontend Software Engineer</span> with hands-on experience
              delivering pixel-perfect, responsive web interfaces using TypeScript, React, CSS3, and TailwindCSS.
            </p>
            <p className="text-slate-500 leading-relaxed mb-6">
              Proficient in translating detailed design references and component style guides into precise,
              production-ready UI implementations. Strong background in building and maintaining{' '}
              <span className="text-[#1a1a2e] font-semibold">design systems</span>,{' '}
              <span className="text-[#1a1a2e] font-semibold">accessible UI components</span>, and{' '}
              <span className="text-[#1a1a2e] font-semibold">performance-optimized interfaces</span>.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Self-motivated and experienced in async, remote-first collaboration with clear documentation practices.
              Currently pursuing B.Tech in Computer Science at VIT Chennai (Expected 2027).
            </p>

            <div className="flex flex-col gap-3">
              {[
                { icon: GraduationCap, text: 'B.Tech Computer Science – VIT Chennai (2027)' },
                { icon: MapPin, text: 'Chennai, India' },
                { icon: Brain, text: 'Frontend · Design Systems · Full-Stack · AI/ML' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-slate-500">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-indigo-500" />
                  </div>
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass-card rounded-2xl p-6 text-center group cursor-default"
              >
                <span className="text-2xl mb-3 block">{s.icon}</span>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mb-1">
                  {s.value}
                </div>
                <div className="text-sm text-slate-400 leading-tight font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
