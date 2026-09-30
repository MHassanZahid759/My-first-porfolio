import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Terminal, Database } from 'lucide-react';
import AdminModal from './AdminModal';

export default function Navbar({ activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTerminalModal, setShowTerminalModal] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-surface/90 backdrop-blur-xl shadow-md py-3 border-b border-outline-variant/30' 
            : 'bg-surface/70 backdrop-blur-md py-5 border-b border-outline-variant/20'
        }`}
      >
        <div className="max-w-container-max mx-auto px-gutter flex justify-between items-center">
          
          {/* Brand Logo & Title with Initials Badge */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-container to-primary text-white font-bold text-sm flex items-center justify-center shadow-md shadow-primary-container/20 group-hover:scale-105 transition-transform duration-200">
              HZ
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-[19px] font-bold text-on-surface group-hover:text-primary transition-colors tracking-tight">
                Muhammad Hassan Zahid
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold text-primary tracking-wider uppercase">
                  Full Stack Engineer
                </span>
                <span className="hidden lg:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-medium border border-emerald-500/20">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  Available
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links with Active Pill */}
          <nav className="hidden lg:flex items-center gap-1 bg-surface-container-low/80 p-1.5 rounded-full border border-outline-variant/20 shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.name.toLowerCase();
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-1.5 rounded-full font-label-md text-[13px] font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-container text-on-primary shadow-sm'
                      : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Trailing Actions */}
          <div className="flex items-center gap-sm">
            
            {/* Live Interactive Buttons */}
            <div className="hidden sm:flex items-center gap-xs">
              {/* SQLite Admin Messages Button */}
              <button 
                onClick={() => setShowAdminModal(true)}
                className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary-container/10 transition-all rounded-lg flex items-center gap-1.5 text-xs font-semibold"
                title="View Saved SQLite Database Messages"
              >
                <Database size={16} className="text-primary-container" />
                <span className="hidden xl:inline text-on-surface-variant">Messages</span>
              </button>

              {/* Developer CLI Terminal Button */}
              <button 
                onClick={() => setShowTerminalModal(true)}
                className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary-container/10 transition-all rounded-lg flex items-center gap-1.5 text-xs font-semibold"
                title="Open Live Developer Console"
              >
                <Terminal size={16} className="text-primary-container" />
                <span className="hidden xl:inline text-on-surface-variant">CLI</span>
              </button>
            </div>

            {/* Live Resume Download Button */}
            <a 
              href="/Muhammad_Hassan_Zahid_Resume.pdf" 
              download="Muhammad_Hassan_Zahid_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-primary py-2 px-4 rounded-xl flex items-center gap-2 text-sm font-semibold shadow-md shadow-primary-container/20 hover:shadow-lg transition-all"
            >
              <FileText size={16} />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-on-surface-variant hover:text-primary rounded-lg hover:bg-surface-container"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-surface-container-lowest/95 backdrop-blur-xl border-b border-outline-variant/30 px-gutter py-md space-y-sm shadow-xl animate-fadeIn">
            <div className="flex items-center justify-between mb-md">
              <div className="flex items-center gap-2 px-xs py-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 text-xs font-semibold border border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Hire</span>
              </div>

              <button
                onClick={() => { setMobileMenuOpen(false); setShowAdminModal(true); }}
                className="px-3 py-1.5 rounded-lg bg-primary-container/10 text-primary-container text-xs font-semibold flex items-center gap-1.5"
              >
                <Database size={14} />
                <span>SQLite Messages</span>
              </button>
            </div>

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-sm py-2 rounded-lg font-body-md text-sm font-medium transition-colors ${
                  activeSection === item.name.toLowerCase()
                    ? 'bg-primary-container text-on-primary font-semibold'
                    : 'text-on-surface hover:bg-surface-container'
                }`}
              >
                {item.name}
              </a>
            ))}

            <a 
              href="/Muhammad_Hassan_Zahid_Resume.pdf" 
              download="Muhammad_Hassan_Zahid_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full justify-center mt-md py-2.5 rounded-xl font-semibold flex items-center gap-2"
            >
              <FileText size={18} />
              <span>Download Resume</span>
            </a>
          </div>
        )}
      </header>

      {/* Developer Terminal Live Modal */}
      {showTerminalModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-gutter animate-fadeIn">
          <div className="bg-[#0f172a] text-slate-200 w-full max-w-xl rounded-xl shadow-2xl border border-slate-700 overflow-hidden">
            <div className="bg-slate-800 px-4 py-3 flex justify-between items-center border-b border-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs font-mono text-slate-400 ml-2">mhassanzahid@portfolio:~$ live-status</span>
              </div>
              <button 
                onClick={() => setShowTerminalModal(false)}
                className="text-slate-400 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-5 font-mono text-xs space-y-3">
              <p className="text-emerald-400">⚡ Developer Console initialized [v1.0.0]</p>
              <p><span className="text-blue-400">user@system:</span> Muhammad Hassan Zahid</p>
              <p><span className="text-blue-400">role:</span> CS & AI Student (UMT Lahore)</p>
              <p><span className="text-blue-400">database:</span> SQLite (portfolio_sqlite.db)</p>
              <p><span className="text-blue-400">email_recipient:</span> dev.hassanzahid@gmail.com</p>
              <p><span className="text-blue-400">status:</span> <span className="text-emerald-400 font-bold">AVAILABLE FOR OPPORTUNITIES</span></p>
              <div className="pt-2 border-t border-slate-800 flex justify-end">
                <button 
                  onClick={() => setShowTerminalModal(false)}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-sans font-semibold transition-colors"
                >
                  Close Terminal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Admin SQLite Messages Modal */}
      <AdminModal 
        isOpen={showAdminModal} 
        onClose={() => setShowAdminModal(false)} 
      />
    </>
  );
}
