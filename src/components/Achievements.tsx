import { Trophy, Award, BadgeCheck, Star } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Ecocity Innovate Hackathon Winner',
    description:
      'Built and presented a full-stack AI solution selected over 200+ competing teams. Handled end-to-end frontend implementation under time pressure.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: Star,
    title: 'Pixel-Accurate UIs Across 3+ Production Apps',
    description:
      'Delivered pixel-accurate, responsive UIs across 3 production-deployed applications — 15+ screens per project, custom design systems, and reusable component libraries built independently.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
  },
  {
    icon: BadgeCheck,
    title: '150+ LeetCode Problems Solved',
    description:
      'Strong CS fundamentals demonstrated through consistent problem-solving practice covering arrays, trees, graphs, dynamic programming, and advanced algorithmic techniques.',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
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
    <section id="achievements" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent" />
      <div className="orb orb-purple w-[400px] h-[400px] top-[10%] -left-[150px] opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-label">
            <Trophy size={14} />
            Recognition
          </p>
          <h2 className="section-title">Achievements & Certifications</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <div>
            <h3 className="text-lg font-bold text-[#1a1a2e] mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                <Trophy size={16} className="text-amber-500" />
              </div>
              Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((a) => {
                const Icon = a.icon;
                return (
                  <div
                    key={a.title}
                    className={`glass-card rounded-xl p-5 flex items-start gap-4`}
                  >
                    <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${a.bg}`}>
                      <Icon size={18} className={a.color} />
                    </div>
                    <div>
                      <h4 className="text-[#1a1a2e] font-bold text-sm mb-1">{a.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{a.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-bold text-[#1a1a2e] mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                <Award size={16} className="text-indigo-500" />
              </div>
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={cert.title}
                    className="glass-card rounded-xl p-4 flex items-center gap-4"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
                      <Icon size={16} className="text-indigo-500" />
                    </div>
                    <div>
                      <h4 className="text-[#1a1a2e] text-sm font-semibold">{cert.title}</h4>
                      <p className="text-slate-400 text-xs mt-0.5">{cert.issuer}</p>
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
