import { profile, experience, certifications } from '@/data/portfolio';
import { Briefcase, Award, MapPin, Mail } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-teal-500 font-semibold text-sm tracking-widest uppercase">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Get to know me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Bio + info */}
          <div className="space-y-6">
            <p className="text-slate-600 leading-relaxed text-lg">
              {profile.bio}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-slate-700">
                <MapPin size={18} className="text-teal-500" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Mail size={18} className="text-teal-500" />
                <a
                  href={`mailto:${profile.email}`}
                  className="hover:text-teal-500 transition-colors"
                >
                  {profile.email}
                </a>
              </div>
            </div>

            {/* Certifications */}
            <div className="pt-4">
              <h3 className="flex items-center gap-2 text-slate-900 font-semibold mb-3">
                <Award size={20} className="text-teal-500" />
                Certifications
              </h3>
              <ul className="space-y-2">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="flex items-start gap-2 text-slate-600 text-sm"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Experience timeline */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-2 text-slate-900 font-semibold mb-2">
              <Briefcase size={20} className="text-teal-500" />
              Experience
            </h3>

            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-8 pb-6 border-l-2 border-slate-100 last:border-l-transparent last:pb-0"
              >
                <div className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-teal-500 ring-4 ring-teal-50" />
                <div className="bg-slate-50 rounded-2xl p-5 hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-slate-900">{exp.title}</h4>
                  <div className="flex items-center justify-between flex-wrap gap-1 mt-1">
                    <span className="text-teal-600 text-sm font-medium">
                      {exp.organization}
                    </span>
                    <span className="text-slate-400 text-xs">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
