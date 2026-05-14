import { Mail, Github, Linkedin, Phone, Send } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'yashaneja28@gmail.com',
    href: 'mailto:yashaneja28@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9587800439',
    href: 'tel:+919587800439',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/yashaneja2810',
    href: 'https://github.com/yashaneja2810',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yash-aneja-85b19128b',
    href: 'https://www.linkedin.com/in/yash-aneja-85b19128b',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Get In Touch</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I'm actively looking for opportunities in Software Engineering, AI/ML, and Full-Stack Development roles. Whether you have an exciting project, a role that matches my skills, or just want to connect — I'd love to hear from you.
            </p>

            <div className="space-y-4">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs">{link.label}</div>
                      <div className="text-white text-sm font-medium group-hover:text-cyan-400 transition-colors">{link.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 space-y-5"
            >
              <div>
                <label className="block text-gray-400 text-sm mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.07] transition-all"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.07] transition-all"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about the opportunity..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.07] transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 bg-cyan-500 text-gray-950 font-semibold rounded-lg hover:bg-cyan-400 transition-colors text-sm"
              >
                <Send size={15} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
