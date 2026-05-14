import { Trophy, Award, BadgeCheck } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Ecocity Innovate Hackathon Winner',
    description:
      'Won the hackathon by developing an AI-driven smart city solution focused on carbon reduction, energy optimization, and sustainable urban planning — leveraging data-driven insights and AI models for real-world feasibility.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
  },
  {
    icon: BadgeCheck,
    title: '150+ LeetCode Problems Solved',
    description:
      'Demonstrated strong problem-solving skills and mastery of Data Structures & Algorithms through consistent practice on LeetCode, covering arrays, trees, graphs, dynamic programming, and advanced algorithmic techniques.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: BadgeCheck,
    title: '3+ Production-Grade Systems Deployed',
    description:
      'Built and deployed multiple production-grade systems across SDE, AI/ML, and Full-Stack domains — integrating LLMs, vector databases, scalable backend architectures, and modern frontend frameworks with measurable real-world impact.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
];

const certifications = [
  {
    title: 'Oracle Cloud Infrastructure Generative AI Professional',
    issuer: 'Oracle',
    icon: Award,
  },
  {
    title: 'Supervised Machine Learning',
    issuer: 'Coursera',
    icon: Award,
  },
  {
    title: 'Data Structures and Algorithms in C/C++',
    issuer: 'CodeHelp',
    icon: Award,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Recognition</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Achievements & Certifications</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <Trophy size={18} className="text-yellow-400" />
              Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((a) => {
                const Icon = a.icon;
                return (
                  <div
                    key={a.title}
                    className={`flex items-start gap-4 p-5 rounded-xl border ${a.border} ${a.bg} bg-opacity-10`}
                  >
                    <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${a.bg}`}>
                      <Icon size={18} className={a.color} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">{a.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{a.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <Award size={18} className="text-cyan-400" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={cert.title}
                    className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:border-white/20 transition-colors"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                      <Icon size={16} className="text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-medium">{cert.title}</h4>
                      <p className="text-gray-500 text-xs mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
