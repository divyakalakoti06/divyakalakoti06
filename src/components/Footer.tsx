import { profile } from '@/data/portfolio';
import { Github, Linkedin, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-white">
            Divya<span className="text-teal-500">.</span>
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#about" className="hover:text-teal-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-teal-400 transition-colors">
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-teal-400 transition-colors"
            >
              Projects
            </a>
            <a href="#resume" className="hover:text-teal-400 transition-colors">
              Resume
            </a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-teal-500 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-teal-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={profile.socials.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-teal-500 transition-colors"
              aria-label="Kaggle"
            >
              <span className="text-sm font-bold w-5 text-center block">K</span>
            </a>
          </div>

          {/* Divider + copyright */}
          <div className="w-full border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm flex items-center gap-1.5">
              Made with <Heart size={14} className="text-teal-400" /> by{' '}
              {profile.name}
            </p>
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} {profile.name}. All rights
              reserved.
            </p>
            <a
              href="#home"
              className="p-2.5 rounded-full bg-white/5 hover:bg-teal-500 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
