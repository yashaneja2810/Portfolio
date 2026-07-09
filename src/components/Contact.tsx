import { Mail, Github, Linkedin, Phone, Send, MessageCircle } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'yashaneja28@gmail.com',
    href: 'mailto:yashaneja28@gmail.com',
    color: 'bg-indigo-50 text-indigo-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9587800439',
    href: 'tel:+919587800439',
    color: 'bg-emerald-50 text-emerald-500',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/yashaneja2810',
    href: 'https://github.com/yashaneja2810',
    color: 'bg-slate-100 text-slate-600',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yash-aneja',
    href: 'https://www.linkedin.com/in/yash-aneja-85b19128b',
    color: 'bg-blue-50 text-blue-500',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/60 to-transparent" />
      <div className="orb orb-indigo w-[400px] h-[400px] top-[20%] -right-[150px] opacity-20" />
      <div className="orb orb-purple w-[300px] h-[300px] bottom-[10%] -left-[100px] opacity-15" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-label">
            <MessageCircle size={14} />
            Contact
          </p>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              I'm actively looking for opportunities in Frontend Engineering, Full-Stack Development, and Software Engineering roles.
              Whether you have an exciting project, a role that matches my skills, or just want to connect — I'd love to hear from you.
            </p>

            <div className="space-y-3">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 glass-card rounded-xl group"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${link.color}`}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs font-medium">{link.label}</div>
                      <div className="text-[#1a1a2e] text-sm font-semibold group-hover:text-indigo-600 transition-colors">
                        {link.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="glass-strong rounded-2xl p-8 space-y-5"
            >
              <div>
                <label className="block text-slate-500 text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-white/60 border border-slate-200 rounded-xl px-4 py-3 text-[#1a1a2e] text-sm placeholder-slate-300 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-slate-500 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-white/60 border border-slate-200 rounded-xl px-4 py-3 text-[#1a1a2e] text-sm placeholder-slate-300 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-slate-500 text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about the opportunity..."
                  className="w-full bg-white/60 border border-slate-200 rounded-xl px-4 py-3 text-[#1a1a2e] text-sm placeholder-slate-300 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/10 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2 text-sm"
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
