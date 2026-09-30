import React, { useState } from 'react';
import { User, GraduationCap, History, Download, Code2, Cpu, Database, Award, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

export default function AboutEducation() {
  const [activeTab, setActiveTab] = useState('about');

  const profileInfo = [
    { icon: User, label: 'Full Name', value: 'Muhammad Hassan Zahid' },
    { icon: GraduationCap, label: 'University', value: 'UMT Lahore (BS CS)' },
    { icon: Code2, label: 'Focus Area', value: 'Full-Stack Web Development' },
    { icon: Award, label: 'Location', value: 'Lahore, Pakistan' },
  ];

  const skillMeters = [
    { name: 'React.js & Frontend Development', level: 92, category: 'Web' },
    { name: 'C++ & Problem Solving (DSA)', level: 90, category: 'Core CS' },
    { name: 'JavaScript (ES6+) & Web APIs', level: 94, category: 'Web' },
    { name: 'PostgreSQL & Database Design', level: 86, category: 'Backend' },
    { name: 'Node.js & Backend APIs', level: 85, category: 'Backend' },
    { name: 'Object-Oriented Programming (OOP)', level: 92, category: 'Core CS' },
  ];

  const coursework = [
    { title: 'Data Structures & Algorithms', desc: 'Lists, Trees, Graphs, Sorting, and Time Complexity' },
    { title: 'Object-Oriented Programming', desc: 'Classes, Objects, Inheritance, and Clean Code in C++' },
    { title: 'Database Systems', desc: 'Tables, SQL Queries, Data Design, and Database Management' },
    { title: 'Computer Networks', desc: 'How the Internet works, HTTP/HTTPS, and API communication' },
    { title: 'Software Engineering', desc: 'Software Development Life Cycle, Agile teamwork, and testing' },
  ];

  return (
    <section id="about" className="max-w-container-max mx-auto px-gutter py-xl scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-xl reveal-up">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-container text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles size={14} />
          <span>About Me</span>
        </div>
        <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface font-extrabold tracking-tight">
          About Me & Education
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
          Learn more about my studies at UMT Lahore, my internship experience, and my technical skills.
        </p>

        {/* Interactive Tab Switcher */}
        <div className="flex items-center justify-center gap-2 mt-md p-1.5 bg-surface-container-low/80 rounded-2xl border border-outline-variant/30 w-fit mx-auto shadow-inner">
          <button
            onClick={() => setActiveTab('about')}
            className={`px-5 py-2.5 rounded-xl font-label-md text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'about'
                ? 'bg-primary-container text-on-primary shadow-md'
                : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
            }`}
          >
            <User size={16} />
            <span>About Me</span>
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`px-5 py-2.5 rounded-xl font-label-md text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'education'
                ? 'bg-primary-container text-on-primary shadow-md'
                : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
            }`}
          >
            <GraduationCap size={16} />
            <span>Education & Skills</span>
          </button>

          <button
            onClick={() => setActiveTab('experience')}
            className={`px-5 py-2.5 rounded-xl font-label-md text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'experience'
                ? 'bg-primary-container text-on-primary shadow-md'
                : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
            }`}
          >
            <History size={16} />
            <span>Experience</span>
          </button>
        </div>
      </div>

      {/* TAB 1: ABOUT STORY */}
      {activeTab === 'about' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start animate-fadeIn">
          {/* Main Intro Story */}
          <div className="lg:col-span-7 space-y-md reveal-left">
            <div className="glass-card rounded-2xl p-md lg:p-lg space-y-md border border-outline-variant/30">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Passionate Web Developer & CS Student
              </h3>

              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                I am a Computer Science student at the <strong>University of Management and Technology (UMT)</strong> in Lahore. I enjoy creating practical web applications, solving coding challenges, and learning modern technologies.
              </p>

              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Whether I am building responsive websites with React or writing problem-solving algorithms in C++, I always focus on writing clean, well-structured code and delivering a great user experience.
              </p>

              <div className="pt-xs flex flex-wrap items-center gap-sm">
                <a 
                  href="/Muhammad_Hassan_Zahid_Resume.pdf" 
                  download="Muhammad_Hassan_Zahid_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* Personal Info Profile Card */}
          <div className="lg:col-span-5 reveal-right delay-200">
            <div className="glass-card rounded-2xl p-md lg:p-lg border border-outline-variant/30 space-y-md">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold border-b border-outline-variant/30 pb-xs">
                Quick Info
              </h3>

              <ul className="space-y-sm">
                {profileInfo.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <li key={idx} className="flex items-center gap-sm p-2 rounded-xl hover:bg-surface-container-low transition-colors">
                      <div className="p-2.5 rounded-xl bg-primary-container/10 text-primary-container">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="font-caption text-xs text-on-surface-variant">{item.label}</p>
                        <p className="font-body-md text-sm text-on-surface font-bold">{item.value}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="p-sm bg-primary-container/5 rounded-xl border border-primary-container/20 text-xs text-on-surface-variant leading-relaxed">
                💡 <strong>Open for Opportunities:</strong> Ready for full-stack developer roles, internships, and freelance projects (On-site & Remote).
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: EDUCATION & TECHNICAL METERS */}
      {activeTab === 'education' && (
        <div id="education" className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start animate-fadeIn scroll-mt-24">
          
          {/* Left Column: University Education */}
          <div className="lg:col-span-6 space-y-md reveal-left delay-100">
            <div className="glass-card rounded-2xl p-md lg:p-lg border border-outline-variant/30 space-y-md">
              <div className="flex items-center gap-sm">
                <div className="p-3 rounded-xl bg-primary-container text-on-primary shadow-md">
                  <GraduationCap size={26} />
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">BS Computer Science</h3>
                  <p className="font-body-md text-sm text-primary-container font-semibold">
                    University of Management and Technology (UMT), Lahore
                  </p>
                </div>
              </div>

              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Currently studying for my Bachelor's degree in Computer Science at UMT Lahore, learning software development, data structures, and modern web frameworks.
              </p>

              <div className="border-t border-outline-variant/20 pt-md">
                <h4 className="font-label-md text-xs text-on-surface uppercase tracking-wider font-bold mb-sm">
                  Key Subjects & Knowledge
                </h4>
                <div className="space-y-sm">
                  {coursework.map((course, idx) => (
                    <div key={idx} className="p-sm rounded-xl bg-surface-container-low/70 border border-outline-variant/20 flex items-start gap-2.5">
                      <CheckCircle2 size={18} className="text-primary-container mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-on-surface">{course.title}</div>
                        <div className="text-[11px] text-on-surface-variant mt-0.5">{course.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Skill Meters */}
          <div className="lg:col-span-6 space-y-md reveal-right delay-200">
            <div className="glass-card rounded-2xl p-md lg:p-lg border border-outline-variant/30 space-y-md">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold flex items-center justify-between">
                <span>My Skill Levels</span>
                <span className="text-xs text-primary font-semibold font-mono">Self-Assessment</span>
              </h3>

              <div className="space-y-md pt-xs">
                {skillMeters.map((skill, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="text-on-surface flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                        {skill.name}
                      </span>
                      <span className="text-primary font-bold font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-surface-container-high overflow-hidden p-0.5 border border-outline-variant/20">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-primary-container via-primary to-blue-600 transition-all duration-1000 ease-out shadow-sm"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      )}

      {/* TAB 3: PROFESSIONAL EXPERIENCE */}
      {activeTab === 'experience' && (
        <div className="max-w-3xl mx-auto space-y-lg animate-fadeIn">
          <div className="glass-card rounded-2xl p-md lg:p-lg border border-outline-variant/30 space-y-md reveal-up delay-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-sm border-b border-outline-variant/30 pb-md">
              <div className="flex items-center gap-sm">
                <div className="p-3 rounded-xl bg-primary-container text-on-primary shadow-md">
                  <History size={26} />
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Software Developer / Intern
                  </h3>
                  <p className="font-body-md text-sm text-primary-container font-semibold">
                    Devnexes at Digital Solution (Pvt) Ltd
                  </p>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full bg-primary-container/10 text-primary text-xs font-bold w-fit">
                Internship Experience
              </span>
            </div>

            <div className="space-y-sm text-body-md text-sm text-on-surface-variant leading-relaxed">
              <p className="font-semibold text-on-surface">Key Responsibilities & Achievements:</p>
              <ul className="space-y-2 list-disc list-inside text-sm">
                <li>Worked with the development team to build clean and responsive user interfaces using React.js and Tailwind CSS.</li>
                <li>Connected frontend screens with backend APIs and helped organize database queries.</li>
                <li>Reviewed code with senior developers, fixed bugs, and improved website speed.</li>
                <li>Used Git for team collaboration and learned how real-world software is planned and delivered.</li>
              </ul>
            </div>

            <div className="pt-sm flex items-center gap-2">
              <span className="text-xs font-bold text-on-surface">Technologies Used:</span>
              <div className="flex flex-wrap gap-1.5">
                {['React.js', 'JavaScript ES6+', 'Tailwind CSS', 'SQL', 'Git', 'Agile'].map((tech, i) => (
                  <span key={i} className="px-2.5 py-0.5 rounded-md bg-surface-container-low text-on-surface text-xs font-semibold border border-outline-variant/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
