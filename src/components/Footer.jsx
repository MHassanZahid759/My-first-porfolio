import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface dark:bg-surface-dim border-t border-outline-variant/30 w-full py-xl mt-auto relative">
      <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-md">
        
        <div className="flex flex-col items-center md:items-start gap-xs text-center md:text-left">
          <div className="font-headline-sm text-base font-bold text-on-surface">
            Muhammad Hassan Zahid
          </div>
          <span className="font-caption text-xs text-on-surface-variant">
            © {new Date().getFullYear()} Muhammad Hassan Zahid. Built with React, Tailwind CSS, & SQLite.
          </span>
        </div>

        <div className="flex items-center gap-md font-caption text-xs">
          <a href="https://github.com/MHassanZahid759" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
            <Github size={14} />
            <span>GitHub</span>
          </a>
          <span className="text-outline-variant">•</span>
          <a href="https://www.linkedin.com/in/muhmmad-hassan-zahid-652a24399" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
            <Linkedin size={14} />
            <span>LinkedIn</span>
          </a>
          <span className="text-outline-variant">•</span>
          <a href="/Muhammad_Hassan_Zahid_Resume.pdf" download="Muhammad_Hassan_Zahid_Resume.pdf" target="_blank" rel="noreferrer" className="text-on-surface-variant hover:text-primary transition-colors font-semibold">
            Resume
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all shadow-sm flex items-center gap-1 text-xs font-semibold"
          title="Scroll Back to Top"
        >
          <ArrowUp size={16} />
          <span>Top</span>
        </button>

      </div>
    </footer>
  );
}
