import React, { useState } from 'react';
import { Terminal, Globe, Database, Cpu, Wrench, Search, Github, ArrowUpRight, Code2, Layers, Star, ExternalLink } from 'lucide-react';

export default function SkillsProjects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const skillCategories = [
    {
      icon: Terminal,
      title: 'Programming Languages',
      description: 'Languages I use to write logic and build applications.',
      skills: ['C++', 'JavaScript (ES6+)', 'SQL', 'HTML5', 'CSS3']
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Tools I use to create responsive, interactive websites and APIs.',
      skills: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'REST APIs', 'Vite']
    },
    {
      icon: Database,
      title: 'Database Systems',
      description: 'Managing and storing application data securely and efficiently.',
      skills: ['PostgreSQL', 'SQLite', 'Database Design', 'SQL Queries']
    },
    {
      icon: Cpu,
      title: 'Core CS Concepts',
      description: 'Strong foundation in computer science principles and problem solving.',
      skills: ['Object-Oriented Programming (OOP)', 'Data Structures (DSA)', 'Algorithms', 'Computer Networks']
    },
    {
      icon: Wrench,
      title: 'Developer Tools',
      description: 'Everyday tools for writing, testing, and managing code.',
      skills: ['Git', 'GitHub', 'VS Code', 'Chrome DevTools', 'Postman']
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Library Book Recommendation System',
      category: 'Algorithms & C++',
      description: 'A C++ application that helps users manage books and find reading recommendations using fast data structures like Trees and Hash Maps.',
      tags: ['C++', 'OOP', 'Data Structures', 'Algorithms'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeqcBAbjDi0Kj_ajLJqluiAoZj2PTGCzh__3udogUpgZiA87mZxF7IFR-AfCCxRN8gOO39HqTKe9Cwoa8978TjSwK3WkI0CYvthROkpku_HA9z0sMgNB_q3KCKlnWelpqsrGmDcANaA73rWeF1h_WD8QDLZF2jPwmZfMO4A88_6P9zck549cjSLzws1bza9WscuMdzm3tBvQrKx24t7GSBFUyKPjg7HphQBZI8KYYflBSjf8aqu7A2Qg',
      stars: '12',
      github: '',
      demo: ''
    },
    {
      id: 2,
      title: 'Online Quiz & Time Evaluation System',
      category: 'Web Apps',
      description: 'An interactive web quiz app with real-time timers, automated scoring, and a clean user interface built with JavaScript.',
      tags: ['JavaScript', 'HTML5', 'CSS3', 'DOM API'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmWALILa9c4RO1-Gp7n0bVTZwmh942qEkI5pBWuS9YZPSyKbZ6TTTrhi_eQI-HtKsj_iWjnju6267zrzaB0KMCdA0yjWrRCraYOgXRaqyfOOSMlb3WesFpRSNFVsRyXXFeaqg3SUA4NfX_T2MRZjmamRvtC0YTJT9ZWohzu83PB8AVM2vvP1yx1j5IkD2pJ-bWAdoNr0b2Ahd8_8M3ddBEHuFuZU1ST8UtmGeME63QgRyw4mQlrq4XFA',
      stars: '18',
      github: '',
      demo: ''
    },
    {
      id: 3,
      title: 'Enterprise Analytics Dashboard Pro',
      category: 'Full Stack',
      description: 'A full-stack business analytics dashboard with dynamic charts, live updates, and connected database storage.',
      tags: ['React.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8dpcUir7d5JdtPSDuRrniXXiJ9o1UgWBJhKPAAZ6BAsmaMZTyrg9rMf9XffYqpufnC8TJVUzPMj19V3s3CX_ZrTfkk6sAe-acrrfPLYt9H6qwbmLGBbfvp9U3dmWZguffYCltaoHT7zVqvXUp1-5aS_n7Xw_K0X3o_hmALD6AUtWi9-Qo-94uLpWRHIcaRFJofaGSwsjuxgsxp9YHe2_d7YycVITsBA1MXsOw8VvKB-scBj3bxCuYhw',
      stars: '24',
      github: '',
      demo: ''
    },
    {
      id: 4,
      title: 'LuxeShop - Elevate Your Everyday',
      category: 'Full Stack',
      description: 'A modern online store featuring product browsing, an interactive shopping cart, and a smooth checkout experience.',
      tags: ['React.js', 'Tailwind CSS', 'REST API', 'Node.js'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfx4zPtTueniPxlxG2HhnWlZJ14TYgIKSjvib2VAnwjdYdKFKS4iiK1jKZMdyEjX93k6ZvgGBLPdbmE3x14LVJaz5mGr3X7lBkxp0azYARWlt_lsUZT0Zf3nBQS0eD4QgG4r9kGTGfZYJ76oclVCimjMrvchydsHfPEPW-hsAWs7JADBQ354x1ecQ49hpz43a7srS1G0Mv5Mgtp1lzQu2ohDVNDdrbbdVukmJokaU8B4g3FyC856AH1g',
      stars: '31',
      github: 'https://github.com/MHassanZahid759/Ecomrance-website',
      demo: 'https://stitchluminamodernecommercesuite.vercel.app/'
    }
  ];

  const categories = ['All', 'Web Apps', 'Algorithms & C++', 'Full Stack'];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="max-w-container-max mx-auto px-gutter py-xl scroll-mt-20">
      
      {/* SECTION 1: TECHNICAL EXPERTISE MATRIX */}
      <div className="mb-xl">
        <div className="text-center max-w-2xl mx-auto mb-lg reveal-up">
          <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">My Skills</div>
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface font-extrabold">
            Technical Skills
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
            A quick look at the programming languages, frameworks, and tools I work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400', 'delay-500'];
            return (
              <div 
                key={idx} 
                className={`glass-card rounded-2xl p-md border border-outline-variant/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary-container reveal-up ${delays[idx % 5]} ${
                  cat.title === 'Core CS Concepts' ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="flex items-center gap-sm mb-sm">
                  <div className="p-2.5 rounded-xl bg-primary-container/10 text-primary-container">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">{cat.title}</h3>
                </div>
                <p className="font-body-md text-sm text-on-surface-variant mb-md">{cat.description}</p>
                <div className="flex flex-wrap gap-xs">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="bg-surface-container-low px-3 py-1.5 rounded-xl font-label-md text-xs font-semibold text-on-surface border border-outline-variant/20 shadow-xs hover:border-primary-container/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 2: INTERACTIVE FEATURED PROJECTS */}
      <div id="projects" className="py-xl scroll-mt-20 border-t border-outline-variant/20">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-lg gap-md reveal-up">
          <div>
            <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">My Projects</div>
            <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface font-extrabold">
              Featured Projects
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
              Here are some of the web applications and software projects I have built.
            </p>
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by skill or project..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-outline-variant/40 bg-surface-container-lowest text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container/30 shadow-xs"
            />
            <Search size={16} className="absolute left-3 top-3 text-outline-variant" />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-lg reveal-up delay-100">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-primary-container text-on-primary shadow-md'
                  : 'bg-surface-container-low/80 text-on-surface-variant hover:bg-surface-container hover:text-primary border border-outline-variant/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
          {filteredProjects.map((project, pIdx) => (
            <div 
              key={project.id}
              className={`card-hover p-0 overflow-hidden group flex flex-col h-full bg-surface-container-lowest border border-outline-variant/30 rounded-2xl reveal-up ${pIdx % 2 === 0 ? 'delay-100' : 'delay-200'}`}
            >
              <div className="h-64 w-full bg-surface-container-low relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-on-surface shadow-md flex items-center gap-1 border border-outline-variant/20">
                  <Star size={14} className="text-amber-500 fill-amber-500" />
                  <span>{project.stars}</span>
                </div>
              </div>

              <div className="p-md lg:p-lg flex flex-col flex-grow space-y-sm">
                <div className="flex flex-wrap gap-xs">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-chip text-xs py-0.5 px-2.5 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="font-body-md text-sm text-on-surface-variant flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-sm pt-sm mt-auto border-t border-outline-variant/20">
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs py-2 px-4 rounded-xl flex items-center gap-1.5"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight size={16} />
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs py-2 px-4 rounded-xl flex items-center gap-1.5"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-xl text-on-surface-variant font-body-md bg-surface-container-lowest rounded-2xl border border-outline-variant/30">
            No projects found matching "<strong>{searchQuery}</strong>". Try clearing your search filter.
          </div>
        )}
      </div>

    </section>
  );
}
