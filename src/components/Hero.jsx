import React from 'react';
import { ArrowRight, Download, Send, Sparkles, Code2, Cpu, Database, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const metrics = [
    { label: 'Projects Built', value: '10+' },
    { label: 'Education', value: 'BS CS @ UMT' },
    { label: 'Core Expertise', value: 'React & C++' },
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-6 pb-16 scroll-mt-24">
      
      {/* Background Radial Glow & Grid Pattern */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-primary-container/10 via-primary/5 to-transparent blur-3xl pointer-events-none -z-10 rounded-full"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-container-max mx-auto px-gutter py-md lg:py-xl flex flex-col lg:flex-row items-center gap-xl">
        
        {/* Left Column: Text & Content */}
        <div className="flex-1 flex flex-col items-start gap-md z-10">
          
          {/* Eyebrow Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-container text-xs font-semibold tracking-wide shadow-sm animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
            </span>
            <Sparkles size={14} className="text-primary-container" />
            <span>BS Computer Science Student & Web Developer</span>
          </div>

          {/* Main Hero Headline */}
          <div className="space-y-sm">
            <h2 className="font-headline-md text-headline-md text-on-surface-variant font-medium tracking-tight animate-fade-in-up delay-100">
              Hi, I'm <span className="text-on-surface font-bold">Muhammad Hassan Zahid</span>
            </h2>
            <h1 className="font-display-lg-mobile lg:font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface leading-[1.1] tracking-tight animate-fade-in-up delay-200">
              Building Modern Websites &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-primary to-blue-600 font-extrabold drop-shadow-sm">
                Smart Software Solutions
              </span>
            </h1>
          </div>

          {/* Subheading / Bio */}
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[620px] leading-relaxed animate-fade-in-up delay-300">
            Computer Science student at <strong>UMT Lahore</strong>. I love creating fast, modern web applications and writing clean code with <strong>React.js, JavaScript, and C++</strong>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-sm mt-xs animate-fade-in-up delay-400">
            <button onClick={() => handleScroll('#projects')} className="btn-primary group">
              <span>View My Work</span>
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>

            <button onClick={() => handleScroll('#contact')} className="btn-secondary group">
              <span>Contact Me</span>
              <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-primary-container" />
            </button>

            <a 
              href="/Muhammad_Hassan_Zahid_Resume.pdf" 
              download="Muhammad_Hassan_Zahid_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost group"
              title="Download Resume"
            >
              <span>Download Resume</span>
              <Download size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Live Developer Stats Strip */}
          <div className="grid grid-cols-3 gap-md pt-md mt-sm border-t border-outline-variant/30 w-full max-w-lg animate-fade-in-up delay-500">
            {metrics.map((metric, index) => (
              <div key={index} className="flex flex-col">
                <span className="font-display-lg text-2xl lg:text-3xl font-extrabold text-primary-container tracking-tight">
                  {metric.value}
                </span>
                <span className="font-caption text-xs text-on-surface-variant font-medium mt-0.5">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Balanced Photo Container & Satellite Floating Badges */}
        <div className="flex-1 w-full relative min-h-[480px] lg:min-h-[540px] flex items-center justify-center px-4 py-6">
          
          {/* Animated Background Aura Ring */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/20 via-primary/10 to-blue-400/20 rounded-full blur-3xl opacity-70 animate-pulse"></div>

          {/* Main Photo Frame Container */}
          <div className="relative p-1 rounded-[2.8rem] bg-gradient-to-tr from-primary-container via-blue-500 to-cyan-400 shadow-2xl shadow-primary-container/20 transition-all duration-500 ease-out z-10 group animate-scale-in delay-200">
            <div className="w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[440px] overflow-hidden rounded-[2.5rem] bg-surface-container-lowest relative">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                src="/profile.jpg" 
                alt="Muhammad Hassan Zahid - Web Developer"
                style={{ objectPosition: 'center top' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50"></div>
            </div>
          </div>

          {/* Floating Satellite Badge 1: React.js (Top Left) */}
          <div className="absolute -top-1 -left-2 sm:-left-6 z-20 animate-scale-in delay-500">
            <div className="bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/30 p-2.5 px-3.5 rounded-2xl shadow-xl flex items-center gap-2.5 animate-[bounce_4s_ease-in-out_infinite]">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-600 font-bold">
                <Code2 size={18} />
              </div>
              <div>
                <div className="text-xs font-bold text-on-surface">React.js</div>
                <div className="text-[10px] text-on-surface-variant font-medium">Frontend Design</div>
              </div>
            </div>
          </div>

          {/* Floating Satellite Badge 2: C++ DSA (Top Right) */}
          <div className="absolute top-10 -right-2 sm:-right-6 z-20 animate-scale-in delay-600">
            <div className="bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/30 p-2.5 px-3.5 rounded-2xl shadow-xl flex items-center gap-2.5 animate-[bounce_5s_ease-in-out_infinite_reverse]">
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 font-bold">
                <Cpu size={18} />
              </div>
              <div>
                <div className="text-xs font-bold text-on-surface">C++ DSA</div>
                <div className="text-[10px] text-on-surface-variant font-medium">Problem Solving</div>
              </div>
            </div>
          </div>

          {/* Floating Satellite Badge 3: PostgreSQL (Bottom Right) */}
          <div className="absolute bottom-12 -right-2 sm:-right-6 z-20 animate-scale-in delay-700">
            <div className="bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/30 p-2.5 px-3.5 rounded-2xl shadow-xl flex items-center gap-2.5 animate-[bounce_4.5s_ease-in-out_infinite]">
              <div className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center text-primary-container font-bold">
                <Database size={18} />
              </div>
              <div>
                <div className="text-xs font-bold text-on-surface">PostgreSQL</div>
                <div className="text-[10px] text-on-surface-variant font-medium">Database System</div>
              </div>
            </div>
          </div>

          {/* Centered Floating Code Snippet Card (Bottom Center) */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-30 animate-scale-in delay-800">
            <div className="bg-[#0f172a] text-slate-200 p-3 px-4 rounded-xl shadow-2xl border border-slate-800 font-mono text-[11px] whitespace-nowrap flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <div>
                <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123; <span className="text-emerald-400">status</span>: <span className="text-amber-300">"Ready to Code"</span> &#125;;
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Services & Capabilities Strip */}
      <div className="bg-surface-container-low/70 py-xl border-y border-outline-variant/20 mt-lg">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-lg gap-sm reveal-up">
            <div>
              <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Services</div>
              <h2 className="font-headline-md text-headline-md text-on-surface">What I Do</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              I build clean, user-friendly websites and software that solve real problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            
            {/* Card 1 */}
            <div className="card-hover group reveal-up delay-100">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center mb-sm group-hover:bg-primary-container group-hover:text-on-primary transition-all duration-300 text-primary-container shadow-sm">
                <Code2 size={24} />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs group-hover:text-primary transition-colors">
                Full-Stack Web Dev
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Building fast and responsive websites using React.js, Tailwind CSS, Node.js, and clean APIs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card-hover group reveal-up delay-200">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center mb-sm group-hover:bg-primary-container group-hover:text-on-primary transition-all duration-300 text-primary-container shadow-sm">
                <Cpu size={24} />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs group-hover:text-primary transition-colors">
                C++ & Algorithms
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Writing efficient code, solving logic problems, and building solid programs in C++.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card-hover group reveal-up delay-300">
              <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center mb-sm group-hover:bg-primary-container group-hover:text-on-primary transition-all duration-300 text-primary-container shadow-sm">
                <Database size={24} />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs group-hover:text-primary transition-colors">
                Database Management
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Designing clean databases and writing fast queries with PostgreSQL and SQLite.
              </p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
