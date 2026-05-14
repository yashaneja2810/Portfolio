import { GraduationCap, MapPin, Brain, Layers } from 'lucide-react';

const stats = [
  { value: '150+', label: 'LeetCode Problems Solved' },
  { value: '3+', label: 'Production Systems Built' },
  { value: '30%', label: 'Search Accuracy Boost' },
  { value: '90%', label: 'Task Automation' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">About</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Who I Am</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I'm a Computer Science student at <span className="text-white font-medium">Vellore Institute of Technology, Chennai</span>, with expertise spanning Software Development, AI/ML Engineering, and Full-Stack Development. I build scalable, production-grade systems that solve complex real-world problems.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              My technical foundation is rooted in strong problem-solving skills with <span className="text-white font-medium">150+ LeetCode problems solved</span> in Data Structures & Algorithms. I excel across multiple domains — from building intelligent AI systems with RAG and LLMs to architecting full-stack applications and scalable backend infrastructures. Whether it's SDE, AI/ML, or Full-Stack, I deliver robust, production-ready solutions.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-gray-400">
                <GraduationCap size={18} className="text-cyan-400 shrink-0" />
                <span>B.Tech Computer Science – VIT Chennai</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} className="text-cyan-400 shrink-0" />
                <span>Chennai, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Brain size={18} className="text-cyan-400 shrink-0" />
                <span>Expertise: SDE • AI/ML • Full-Stack Development</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Layers size={18} className="text-cyan-400 shrink-0" />
                <span>Strong DSA Foundation: 150+ LeetCode Problems</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-1">{s.value}</div>
                <div className="text-sm text-gray-500 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
