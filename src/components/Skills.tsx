const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C/C++', 'SQL'],
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  {
    category: 'DSA & Problem Solving',
    icon: '⚡',
    skills: ['Data Structures', 'Algorithms', 'LeetCode (150+)', 'Competitive Programming', 'System Design'],
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  {
    category: 'AI / ML',
    icon: '🤖',
    skills: ['LLMs', 'RAG', 'LangChain', 'Embeddings', 'Sentence Transformers', 'BERT', 'GPT', 'XGBoost', 'TensorFlow'],
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    category: 'Backend',
    icon: '⬡',
    skills: ['FastAPI', 'Node.js', 'REST APIs', 'JWT Authentication', 'Socket.IO', 'Microservices'],
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    category: 'Frontend',
    icon: '◈',
    skills: ['React.js', 'Next.js', 'TailwindCSS', 'Responsive Design'],
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
  },
  {
    category: 'Databases',
    icon: '◎',
    skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'Qdrant (Vector DB)', 'Redis'],
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
  },
  {
    category: 'Tools & Cloud',
    icon: '⚙',
    skills: ['AWS', 'Git', 'Docker', 'Hugging Face', 'CI/CD Pipelines', 'Vercel', 'Render'],
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
  },
  {
    category: 'Core CS Fundamentals',
    icon: '◻',
    skills: ['Computer Networks', 'Operating Systems', 'Computer Architecture', 'DBMS', 'OOP'],
    color: 'text-gray-300',
    bg: 'bg-white/5',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Technical Expertise</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-lg font-mono ${group.color}`}>{group.icon}</span>
                <h3 className="text-white font-semibold">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs px-2.5 py-1 rounded-md font-medium ${group.bg} ${group.color}`}
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
