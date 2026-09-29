import { Github, Linkedin, ArrowDown } from 'lucide-react';
import { profile, stats } from '@/data/portfolio';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-900"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-sm text-teal-100 font-medium">
                Available for opportunities
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              Hi, I'm <span className="text-teal-400">{profile.name}</span>
            </h1>

            <p className="text-xl text-slate-300 font-light max-w-lg">
              {profile.role}
            </p>

            <p className="text-slate-400 max-w-lg leading-relaxed">
              {profile.tagline}
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-teal-500 text-white font-semibold hover:bg-teal-400 transition-all hover:scale-105 hover:shadow-lg hover:shadow-teal-500/30"
              >
                View My Work
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white hover:bg-white/20 transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white hover:bg-white/20 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Avatar + Stats */}
          <div className="flex flex-col items-center gap-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-teal-400 to-cyan-400 rounded-full blur-2xl opacity-20 animate-pulse" />
              <img
                src={profile.avatar}
                alt={profile.name}
                className="relative w-64 h-64 rounded-full object-cover border-4 border-white/20 shadow-2xl"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-md">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div className="text-2xl font-bold text-teal-400">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors"
          >
            <span className="text-xs">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
