import { profile, certifications } from '@/data/portfolio';
import { Download, FileText, GraduationCap, Award } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-teal-500 font-semibold text-sm tracking-widest uppercase">
            Resume
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            My background
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          {/* Download bar */}
          <div className="bg-gradient-to-r from-slate-900 to-teal-900 p-8 text-center">
            <FileText className="mx-auto text-teal-400 mb-3" size={40} />
            <h3 className="text-white text-xl font-semibold">
              Download my resume
            </h3>
            <p className="text-slate-300 text-sm mt-1 mb-5">
              Get a complete overview of my education, experience, and skills.
            </p>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-500 text-white font-semibold hover:bg-teal-400 transition-all hover:scale-105"
            >
              <Download size={18} />
              Download PDF
            </a>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 divide-x divide-slate-100">
            {/* Education */}
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="text-teal-500" size={22} />
                <h4 className="font-semibold text-slate-900">Education</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="font-medium text-slate-800">
                    Bachelor of Technology
                  </div>
                  <div className="text-sm text-slate-500">
                    Computer Science & Engineering
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    2022 — 2026
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <Award className="text-teal-500" size={22} />
                <h4 className="font-semibold text-slate-900">
                  Certifications
                </h4>
              </div>
              <ul className="space-y-2">
                {certifications.slice(0, 4).map((cert) => (
                  <li
                    key={cert}
                    className="text-sm text-slate-600 flex items-start gap-2"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
