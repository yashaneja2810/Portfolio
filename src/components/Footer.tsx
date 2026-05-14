import { Code2, Mail, Phone, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center">
                <Code2 size={14} className="text-gray-950" />
              </div>
              <span className="text-white font-bold text-lg">Yash Aneja</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Software Engineer specializing in Full-Stack Development, AI/ML Systems, and Backend Engineering.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Contact Information</h3>
            <div className="space-y-3">
              <a
                href="mailto:yashaneja28@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors text-sm group"
              >
                <Mail size={16} className="shrink-0" />
                <span>yashaneja28@gmail.com</span>
              </a>
              <a
                href="tel:+919587800439"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors text-sm group"
              >
                <Phone size={16} className="shrink-0" />
                <span>+91 9587800439</span>
              </a>
              <a
                href="https://github.com/yashaneja2810"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors text-sm group"
              >
                <Github size={16} className="shrink-0" />
                <span>github.com/yashaneja2810</span>
              </a>
              <a
                href="https://www.linkedin.com/in/yash-aneja-85b19128b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors text-sm group"
              >
                <Linkedin size={16} className="shrink-0" />
                <span>linkedin.com/in/yash-aneja-85b19128b</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            Built with React & TailwindCSS
          </p>
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Yash Aneja. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
