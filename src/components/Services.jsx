import React from 'react';
import { Laptop, Code2, Database, Sparkles } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: Laptop,
      title: 'Full-Stack Web Development',
      description: 'Building complete web applications from design to backend database integration.',
    },
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Creating modern, fast, and responsive user interfaces using React and Tailwind CSS.',
    },
    {
      icon: Database,
      title: 'Backend & Databases',
      description: 'Building clean APIs and setting up databases to store and manage your data smoothly.',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-surface-container-low/40 border-y border-outline-variant/20 py-xl md:py-24">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-container/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-container-max mx-auto px-gutter relative z-10">
        
        {/* Section Header */}
        <div className="mb-xl max-w-3xl text-center md:text-left reveal-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-container text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles size={14} />
            <span>Services</span>
          </div>
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface font-extrabold tracking-tight">
            What I Can Do For You
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-xs">
            I can help turn your ideas into responsive, reliable, and user-friendly web applications.
          </p>
        </div>

        {/* Services Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            const delays = ['delay-100', 'delay-200', 'delay-300'];
            return (
              <div 
                key={index} 
                className={`card-hover group cursor-default reveal-up ${delays[index % 3]}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary-container/10 text-primary-container flex items-center justify-center mb-sm group-hover:bg-primary-container group-hover:text-on-primary transition-all duration-300 shadow-sm">
                  <Icon size={22} />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-xs group-hover:text-primary transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
