import { Code2, Mail, Phone, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-100 py-12 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50/80 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <Code2 size={14} className="text-white" />
              </div>
              <span className="text-[#1a1a2e] font-bold text-lg">Yash Aneja</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Frontend Software Engineer specializing in TypeScript, React, CSS3, and TailwindCSS. Building pixel-perfect, responsive web interfaces and design systems.
            </p>
          </div>

          <div>
            <h3 className="text-[#1a1a2e] font-bold mb-4 text-sm">Connect</h3>
            <div className="space-y-2.5">
              {[
                { icon: Mail, text: 'yashaneja28@gmail.com', href: 'mailto:yashaneja28@gmail.com' },
                { icon: Phone, text: '+91 9587800439', href: 'tel:+919587800439' },
                { icon: Github, text: 'github.com/yashaneja2810', href: 'https://github.com/yashaneja2810' },
                { icon: Linkedin, text: 'LinkedIn', href: 'https://www.linkedin.com/in/yash-aneja-85b19128b' },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 text-slate-400 hover:text-indigo-500 transition-colors text-sm group"
                >
                  <Icon size={15} className="shrink-0" />
                  <span>{text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="section-divider mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-slate-300 text-xs">
            &copy; {new Date().getFullYear()} Yash Aneja. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
