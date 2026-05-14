import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Meeting Task Management System',
    description:
      'Full-stack multi-agent AI system that automatically extracts, assigns, and tracks action items from meeting transcripts, reducing manual task delegation by 90%.',
    stack: ['React', 'Node.js', 'FastAPI', 'Supabase', 'Google Gemini', 'Groq'],
    bullets: [
      'Engineered multi-agent orchestration with 4 specialized agents: Meeting Analyzer, Task Extractor, Assignment Agent, Audit Agent.',
      'Implemented task completion approval workflow with email notifications and real-time status tracking.',
      'Built scalable microservices with automated keep-alive mechanisms and retry logic, deployed on Vercel & Render with 99% uptime.',
      'Designed glassmorphism UI with black & white theme and mobile-responsive email templates.',
    ],
    highlight: '90% reduction in manual task delegation',
    color: 'cyan',
    github: 'https://github.com/yashaneja2810/Meeting-Intelligent-System',
  },
  {
    title: 'LowCode AI Chatbot Builder Platform (PrayogAI)',
    description:
      'Full-stack GenAI platform enabling users to create custom chatbots using document ingestion and large-scale data extraction with sub-2s query latency.',
    stack: ['FastAPI', 'Qdrant', 'Gemini 2.5', 'Sentence Transformers', 'aiohttp', 'Selenium'],
    bullets: [
      'Designed end-to-end data pipeline: chunking, embedding, indexing, retrieval, and generation.',
      'Built multi-tenant architecture with isolated vector collections per bot for secure, scalable data handling.',
      'Implemented async web scraping with aiohttp + Selenium for structured/unstructured data from dynamic websites.',
      'Developed embeddable chatbot widget and REST API supporting real-time queries with sub-2s latency.',
    ],
    highlight: 'Sub-2s query latency at scale',
    color: 'blue',
    github: 'https://github.com/yashaneja2810/PrayogAI',
  },
  {
    title: 'Chest Disease Predictor',
    description:
      'Deep learning model using ResNet50 to classify chest X-rays into 6 disease categories with ~87% accuracy, trained on 18,000+ medical images.',
    stack: ['ResNet50', 'TensorFlow', 'Flask', 'Python', 'Deep Learning'],
    bullets: [
      'Achieved ~87% accuracy classifying chest X-rays into 6 disease categories using ResNet50.',
      'Processed and trained on 18,000+ medical images with data preprocessing and augmentation techniques.',
      'Built Flask-based inference API for real-time predictions with confidence scoring.',
      'Designed responsive frontend for data input, visualization, and end-to-end deployment.',
    ],
    highlight: '~87% accuracy on 18K+ medical images',
    color: 'emerald',
    github: 'https://github.com/yashaneja2810/Chest-Disease-Predictor',
  },
];

const colorMap: Record<string, { badge: string; border: string; glow: string; tag: string }> = {
  cyan: {
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    border: 'hover:border-cyan-500/30',
    glow: 'bg-cyan-500/5',
    tag: 'bg-cyan-500/10 text-cyan-400',
  },
  blue: {
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    border: 'hover:border-blue-500/30',
    glow: 'bg-blue-500/5',
    tag: 'bg-blue-500/10 text-blue-400',
  },
  emerald: {
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    border: 'hover:border-emerald-500/30',
    glow: 'bg-emerald-500/5',
    tag: 'bg-emerald-500/10 text-emerald-400',
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">What I've Built</h2>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((p) => {
            const c = colorMap[p.color];
            return (
              <div
                key={p.title}
                className={`group bg-white/[0.03] border border-white/10 rounded-2xl p-8 transition-all duration-300 ${c.border} hover:${c.glow}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-white max-w-xl">{p.title}</h3>
                  <div className="flex items-center gap-2">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors border border-white/10 hover:border-white/30 px-3 py-1.5 rounded-lg"
                    >
                      <Github size={13} />
                      GitHub
                    </a>
                  </div>
                </div>

                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium mb-4 ${c.badge}`}>
                  <ExternalLink size={11} />
                  {p.highlight}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">{p.description}</p>

                <ul className="space-y-2 mb-6">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-gray-500 text-sm">
                      <span className="mt-2 w-1 h-1 rounded-full bg-gray-500 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {p.stack.map((tech) => (
                    <span key={tech} className={`text-xs px-2.5 py-1 rounded-md font-medium ${c.tag}`}>
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
