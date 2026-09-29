import { useState } from 'react';
import { profile } from '@/data/portfolio';
import { Send, Mail, MapPin, User, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-teal-500 font-semibold text-sm tracking-widest uppercase">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Let's connect
          </h2>
          <p className="text-slate-500 mt-3 max-w-md mx-auto">
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info cards */}
          <div className="md:col-span-2 space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 hover:bg-teal-50 hover:shadow-md transition-all group"
            >
              <div className="p-3 rounded-xl bg-teal-100 text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                <Mail size={22} />
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">
                  Email
                </div>
                <div className="text-slate-800 font-medium text-sm">
                  {profile.email}
                </div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50">
              <div className="p-3 rounded-xl bg-teal-100 text-teal-600">
                <MapPin size={22} />
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">
                  Location
                </div>
                <div className="text-slate-800 font-medium text-sm">
                  {profile.location}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-4 bg-slate-50 p-6 rounded-2xl"
          >
            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                required
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
              />
            </div>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="email"
                required
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
              />
            </div>

            <div className="relative">
              <MessageSquare
                size={18}
                className="absolute left-4 top-4 text-slate-400"
              />
              <textarea
                required
                rows={4}
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-teal-500 text-white font-semibold hover:bg-teal-600 transition-all hover:scale-[1.02] disabled:bg-teal-600"
            >
              {sent ? (
                <>
                  <CheckCircle2 size={18} />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
