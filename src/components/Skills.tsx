import { Wrench } from 'lucide-react';

const skillGroups = [
  {
    category: 'Frontend (Primary)',
    icon: '◈',
    skills: ['TypeScript', 'React 18', 'CSS3', 'TailwindCSS', 'Responsive Web Design', 'Vanilla JavaScript', 'Framer Motion', 'React Router v6', 'Zustand'],
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
  },
  {
    category: 'UI & Design Systems',
    icon: '🎨',
    skills: ['Component Style Guides', 'Design Tokens', 'Glassmorphism', 'Dark/Light Theming', 'Pixel-Perfect Implementation', 'Accessibility (a11y)', 'Cross-Browser Compatibility'],
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
  },
  {
    category: 'Real-Time UI',
    icon: '⚡',
    skills: ['WebRTC (simple-peer)', 'Socket.IO Client', 'Live Caption Overlays', 'Dynamic Video Grids', 'Optimistic UI Updates'],
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    category: 'Build Tools',
    icon: '⚙',
    skills: ['Vite', 'ESLint', 'PostCSS', 'Autoprefixer', 'npm', 'Git', 'CI/CD'],
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    category: 'Backend (Supporting)',
    icon: '⬡',
    skills: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'PostgreSQL', 'Supabase'],
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    category: 'AI / ML',
    icon: '🤖',
    skills: ['LLMs', 'RAG Pipelines', 'Gemini API', 'Groq API', 'HuggingFace', 'TensorFlow'],
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
  },
  {
    category: 'Languages',
    icon: '{ }',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C/C++', 'SQL'],
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/60 to-transparent" />
      <div className="orb orb-blue w-[350px] h-[350px] top-[20%] -right-[100px] opacity-20" />
      <div className="orb orb-pink w-[300px] h-[300px] bottom-[10%] -left-[100px] opacity-15" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-label">
            <Wrench size={14} />
            Skills
          </p>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="text-slate-500 mt-4 text-lg max-w-2xl">
            Specialized in frontend development with deep expertise in design systems, responsive UI, and real-time web applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="glass-card rounded-2xl p-6 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className={`text-lg w-9 h-9 rounded-xl ${group.bg} flex items-center justify-center font-mono`}>
                  {group.icon}
                </span>
                <h3 className="text-[#1a1a2e] font-bold text-sm">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs px-3 py-1.5 rounded-full font-medium border ${group.bg} ${group.color} ${group.border} transition-all duration-200 hover:shadow-sm`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
