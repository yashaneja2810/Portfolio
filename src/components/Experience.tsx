import { Briefcase, Calendar, TrendingUp } from 'lucide-react';

const highlights = [
  { metric: '~30%', desc: 'improvement in semantic search accuracy via RAG pipelines' },
  { metric: '~25%', desc: 'reduction in query latency through optimized inference' },
  { metric: 'Real-time', desc: 'AI integrations powered by LLM-backed FastAPI systems' },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Work History</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-white/10 to-transparent" />

          <div className="pl-8 md:pl-24 relative">
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-8 top-1 w-3 h-3 rounded-full bg-cyan-500 -translate-x-1/2 shadow-lg shadow-cyan-500/50" />

            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-cyan-500/20 transition-colors duration-300">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase size={16} className="text-cyan-400" />
                    <span className="text-cyan-400 text-sm font-medium">Software Engineering & AI</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">AI Research Intern</h3>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                  <Calendar size={13} />
                  May 2025
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  'Architected and deployed scalable LLM-powered backend systems using FastAPI, enabling secure API-based AI integrations for real-time applications.',
                  'Designed and implemented RAG-based data retrieval pipelines with vector databases, improving semantic search accuracy by ~30%.',
                  'Optimized embedding generation and transformer inference pipelines, reducing query latency by ~25% for production workloads.',
                  'Developed multi-agent workflows and prompt optimization strategies to handle complex multi-step reasoning and structured data queries.',
                  'Applied strong DSA fundamentals to optimize algorithm performance and system efficiency across production environments.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="grid sm:grid-cols-3 gap-3 pt-6 border-t border-white/10">
                {highlights.map((h) => (
                  <div key={h.desc} className="flex items-start gap-3">
                    <TrendingUp size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white font-semibold text-sm">{h.metric}</div>
                      <div className="text-gray-500 text-xs leading-tight">{h.desc}</div>
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
