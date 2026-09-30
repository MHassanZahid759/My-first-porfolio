import React, { useState } from 'react';
import { Mail, MapPin, Link2, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const EMAIL_ADDRESS = 'dev.hassanzahid@gmail.com';

  const topics = [
    '🚀 Full-Time Job Opportunity',
    '💼 Freelance Web Project',
    '🎓 Software Internship',
    '💡 Quick Question / Connect'
  ];

  const handleTopicClick = (topic) => {
    setFormData({ ...formData, subject: topic });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 6000);
      } else {
        setErrorMsg(result.error || 'Failed to send message.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMsg('Could not connect to the backend server. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="max-w-container-max mx-auto px-gutter w-full py-xl md:py-24 scroll-mt-20">
      
      {/* Header Section */}
      <div className="mb-xl text-center md:text-left max-w-3xl reveal-up">
        <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Get In Touch</div>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface font-extrabold mb-sm">
          Let's Work Together
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          Have a project idea, job opportunity, or just want to connect? Send me a message below, and I will get back to you soon!
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        
        {/* Contact Form */}
        <div className="lg:col-span-7 glass-card border border-outline-variant/30 rounded-2xl p-md md:p-lg reveal-left">
          
          {submitted ? (
            <div className="p-lg text-center space-y-sm bg-emerald-500/10 border border-emerald-500/30 rounded-2xl my-md animate-fadeIn">
              <CheckCircle2 size={52} className="mx-auto text-emerald-600" />
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Message Sent Successfully!</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">
                Thank you <strong>{formData.name || 'Friend'}</strong>! Your message has been sent directly to <strong>{EMAIL_ADDRESS}</strong>. I will reply soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-md">
              
              {errorMsg && (
                <div className="p-sm bg-red-500/10 border border-red-500/30 rounded-xl text-red-600 text-sm flex items-center gap-2">
                  <AlertCircle size={18} />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Quick Topic Chips */}
              <div>
                <label className="font-label-md text-xs font-bold text-on-surface-variant block mb-2">
                  Select a topic (Click to choose):
                </label>
                <div className="flex flex-wrap gap-2">
                  {topics.map((topic, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleTopicClick(topic)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        formData.subject === topic
                          ? 'bg-primary-container text-on-primary shadow-sm'
                          : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-primary border border-outline-variant/20'
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
                <div className="flex flex-col form-input-focus">
                  <label className="font-label-md text-xs font-semibold text-on-surface-variant mb-1" htmlFor="name">
                    Your Name *
                  </label>
                  <input 
                    className="border border-outline-variant/50 rounded-xl px-sm py-2.5 bg-surface-container-lowest text-on-surface focus:outline-none text-sm font-body-md" 
                    id="name" 
                    name="name" 
                    placeholder="e.g. John Doe" 
                    required 
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="flex flex-col form-input-focus">
                  <label className="font-label-md text-xs font-semibold text-on-surface-variant mb-1" htmlFor="email">
                    Your Email *
                  </label>
                  <input 
                    className="border border-outline-variant/50 rounded-xl px-sm py-2.5 bg-surface-container-lowest text-on-surface focus:outline-none text-sm font-body-md" 
                    id="email" 
                    name="email" 
                    placeholder="john@example.com" 
                    required 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex flex-col form-input-focus">
                <label className="font-label-md text-xs font-semibold text-on-surface-variant mb-1" htmlFor="subject">
                  Subject *
                </label>
                <input 
                  className="border border-outline-variant/50 rounded-xl px-sm py-2.5 bg-surface-container-lowest text-on-surface focus:outline-none text-sm font-body-md" 
                  id="subject" 
                  name="subject" 
                  placeholder="Project Inquiry or Job Opportunity" 
                  required 
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="flex flex-col form-input-focus">
                <label className="font-label-md text-xs font-semibold text-on-surface-variant mb-1" htmlFor="message">
                  Your Message *
                </label>
                <textarea 
                  className="border border-outline-variant/50 rounded-xl px-sm py-2.5 bg-surface-container-lowest text-on-surface focus:outline-none text-sm font-body-md resize-none" 
                  id="message" 
                  name="message" 
                  placeholder="Write your message here..." 
                  required 
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="pt-xs">
                <button 
                  className="btn-primary w-full md:w-auto px-lg py-3 rounded-xl font-label-md text-sm font-semibold flex items-center justify-center gap-2" 
                  type="submit"
                  disabled={loading}
                >
                  <span>{loading ? 'Sending Message...' : 'Send Message'}</span>
                  <Send size={16} />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Contact Info & Visual Map */}
        <div className="lg:col-span-5 flex flex-col gap-gutter reveal-right delay-200">
          
          <div className="glass-card border border-outline-variant/30 rounded-2xl p-md lg:p-lg space-y-md">
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold border-b border-outline-variant/30 pb-xs">
              Direct Contact Details
            </h3>

            <ul className="space-y-sm">
              <li className="flex items-center justify-between p-2 rounded-xl bg-surface-container-low/70 border border-outline-variant/20">
                <div className="flex items-center gap-sm">
                  <div className="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary-container">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-caption text-xs text-on-surface-variant">Email Address</p>
                    <a className="font-body-md text-sm font-bold text-on-surface hover:text-primary transition-colors" href={`mailto:${EMAIL_ADDRESS}`}>
                      {EMAIL_ADDRESS}
                    </a>
                  </div>
                </div>

                <button 
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
                  title="Copy email address"
                >
                  {copied ? <Check size={18} className="text-emerald-600" /> : <Copy size={18} />}
                </button>
              </li>

              <li className="flex items-center gap-sm p-2 rounded-xl bg-surface-container-low/70 border border-outline-variant/20">
                <div className="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary-container">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-caption text-xs text-on-surface-variant">Location</p>
                  <p className="font-body-md text-sm font-bold text-on-surface">Lahore, Pakistan</p>
                </div>
              </li>

              <li className="flex items-center gap-sm p-2 rounded-xl bg-surface-container-low/70 border border-outline-variant/20">
                <div className="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary-container">
                  <Link2 size={20} />
                </div>
                <div>
                  <p className="font-caption text-xs text-on-surface-variant">Profiles</p>
                  <div className="flex gap-sm mt-0.5 text-sm font-semibold">
                    <a className="text-primary hover:underline" href="https://www.linkedin.com/in/muhmmad-hassan-zahid-652a24399" target="_blank" rel="noreferrer">LinkedIn</a>
                    <span className="text-outline-variant">•</span>
                    <a className="text-primary hover:underline" href="https://github.com/MHassanZahid759" target="_blank" rel="noreferrer">GitHub</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="glass-card border border-outline-variant/30 rounded-2xl overflow-hidden h-48 md:h-full min-h-[220px] relative group">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCem2xg14LROB8ja5BhE8T1XSc8muZMV-ETphfL_0_0fkToptLnCwaSFCno5-W-e_8eem3v8fkOVyKV8bB_m_WIo0jmAS_1zGYGT7STAxK5i00_gCc-uE5rbcCeWyAceg9UZb86m2ilV7g0mRrFPzQsaehnKp6y0P6B71SWEqSLpaL0O78W49iaZ3bJR4ZN3fbM5ENqhPTfmZC_8VoWMNq0crw-Qv-psdID1Kck7o8-Q7oPQNLcIejxvw"
              alt="Lahore Map Location"
            />
            <div className="absolute bottom-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-on-surface shadow-md border border-outline-variant/30 flex items-center gap-1.5">
              <MapPin size={14} className="text-primary-container" />
              <span>Lahore, Pakistan</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
