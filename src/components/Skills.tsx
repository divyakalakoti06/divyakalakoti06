import { skills } from '@/data/portfolio';
import { Code2, Database, Layers, Wrench } from 'lucide-react';

const icons = [Code2, Database, Layers, Wrench];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-teal-500 font-semibold text-sm tracking-widest uppercase">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            What I work with
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((group, idx) => {
            const Icon = icons[idx] ?? Code2;
            return (
              <div
                key={group.category}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-teal-50 text-teal-600">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-semibold text-slate-900">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-medium hover:bg-teal-50 hover:text-teal-600 transition-colors cursor-default"
                    >
                      {item}
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
