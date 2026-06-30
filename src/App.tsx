import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  Download, 
  Terminal, 
  Cpu, 
  Cloud, 
  Code, 
  Database, 
  Layers, 
  ChevronLeft, 
  ChevronRight, 
  Send,
  Linkedin,
  Github,
  Twitter,
  Mail,
  Globe,
  Share2
} from 'lucide-react';

// --- Shared Components ---

const Navbar = () => (
  <header className="fixed top-0 w-full z-50 glass border-b border-white/5">
    <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-12 py-4">
      <div className="font-headline text-2xl font-bold text-primary tracking-tighter">
        Feroz Naguru
      </div>
      <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
        <a href="#projects" className="text-text-dim hover:text-primary transition-colors duration-300">Projects</a>
        <a href="#skills" className="text-text-dim hover:text-primary transition-colors duration-300">Skills</a>
        <a href="#experience" className="text-text-dim hover:text-primary transition-colors duration-300">Experience</a>
        <a href="#contact" className="text-text-dim hover:text-primary transition-colors duration-300">Contact</a>
      </div>
      <a href="mailto:fferoz112233@gmail.com" className="bg-primary text-on-primary px-4 md:px-6 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:scale-95 transition-transform cursor-pointer">
        Get in Touch
      </a>
    </nav>
  </header>
);

const SectionHeader = ({ label, title, description }: { label: string, title: string | React.ReactNode, description?: string }) => (
  <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
    <div className="max-w-2xl">
      <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] block mb-4">{label}</span>
      <h2 className="text-4xl md:text-6xl font-bold leading-tight">{title}</h2>
    </div>
    {description && (
      <p className="text-text-dim max-w-xs text-sm leading-relaxed">
        {description}
      </p>
    )}
  </div>
);

// --- Sections ---

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 hero-gradient relative overflow-hidden pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center space-x-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 mb-8"
      >
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-text-dim">Available for Technical Leadership</span>
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black max-w-5xl mx-auto mb-8 leading-[0.9] tracking-tighter"
      >
        I'M FEROZ NAGURU <br/>
        <span className="text-primary italic">AI & SOFTWARE DEVELOPER</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-lg md:text-xl text-text-dim max-w-2xl mb-12 leading-relaxed"
      >
        Self-taught developer building AI-powered automation systems, CRM platforms, and content generation tools. Passionate about leveraging AI for scalable digital impact.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <button onClick={() => scrollTo('projects')} className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold text-lg hover:scale-95 transition-transform shadow-lg shadow-primary/20">
          My Works
        </button>
        <a href="/resume.pdf" download className="border border-outline text-text-light px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/5 transition-colors">
          Download CV <Download className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "AI Solopreneur Bot",
      desc: "Autonomous content platform managing the entire marketing flow from trend discovery to cross-platform posting.",
      tags: ["Python", "SQLite", "OpenAI"],
      color: "#A855F7",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZlnJTcc-QiHwPDCeQwcjJPYE_rt55xLKbjs3Jj0KCtM7X-kDMqTPXqwrRIn0n2ZICofJNug1tKD1QvGePvBK3AaG96aQKxaZaFhlFNrgsq0M1XYCPGzXA3kq7XJa9JOoMwNJ2U32WqP0_vzp_4AlBxvCmx-I1Hh0h0a3kDr07OIQwpUlK6cOBCMQPmHIOJEyf2PggYyO-mo4PPmHQFGmvZb1R2c79OXg3eyAaJ5gG6-Ll4vvWRiS8NJNUOx0nEBttD6_Dd_TPx9GT",
      badge: "2024-2025",
      url: "https://github.com/Feroz723/autonomous_ai"
    },
    {
      title: "TechPick Downloader",
      desc: "A sleek video downloader tool supporting multiple platforms with paste-and-download simplicity.",
      tags: ["React", "API", "Video"],
      color: "#3B82F6",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkTVTfc0jJqq_duQyA8VMR2XmzMzS9ReEqlh8-1yZK2qe7wFcG_toG91oIHdYyaRdzaQ-EpmrqPQOScTQ82MbfvXLqyVDuBbAKHSBE-pOYKj3yI2Ma7GdCOVOU7OQgy4V8Cb9pfMAdqcpAcMktlz046L0RHyIs6nlGJ5aHLY1TSCp_FwnqHG0WHdaIfyPmyhWR79yt3oUhEXxaa_2aAxlmtbasfe0IZPoUor1B411aq5nWcpZCO2glB6PbRo-sJOpHv-5QlUNlfWf2",
      badge: "2025",
      url: "https://techpick.tech/downloader"
    },
    {
      title: "Halo",
      desc: "Beautifully designed task manager with smooth animations, elegant themes, and offline task management.",
      tags: ["Kotlin", "Android", "Offline"],
      color: "#6366F1",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkTVTfc0jJqq_duQyA8VMR2XmzMzS9ReEqlh8-1yZK2qe7wFcG_toG91oIHdYyaRdzaQ-EpmrqPQOScTQ82MbfvXLqyVDuBbAKHSBE-pOYKj3yI2Ma7GdCOVOU7OQgy4V8Cb9pfMAdqcpAcMktlz046L0RHyIs6nlGJ5aHLY1TSCp_FwnqHG0WHdaIfyPmyhWR79yt3oUhEXxaa_2aAxlmtbasfe0IZPoUor1B411aq5nWcpZCO2glB6PbRo-sJOpHv-5QlUNlfWf2",
      badge: "2026",
      url: "https://www.amazon.com/Prism-Apps-Halo/dp/B0H5QL9957"
    }
  ];

  return (
    <section className="py-32 max-w-7xl mx-auto px-6 md:px-12" id="projects">
      <SectionHeader 
        label="Portfolio"
        title={<>Check out my featured <span className="text-primary">projects</span></>}
        description="Crafting digital experiences that blend technical innovation with editorial functionality."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className="group glass rounded-2xl overflow-hidden border-white/5 hover:border-primary/30 transition-all duration-500 flex flex-col h-full"
          >
            <div className="h-64 relative overflow-hidden">
              <img 
                src={project.img} 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                alt={project.title}
                referrerPolicy="no-referrer"
              />
              <div 
                className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ backgroundColor: project.color }}
              />
              <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <span className="text-[10px] font-bold tracking-widest text-white">{project.badge}</span>
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 border border-white/10 rounded-full text-[10px] font-bold text-text-dim uppercase tracking-wider">{tag}</span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-text-dim text-xs mb-8 leading-relaxed flex-grow">{project.desc}</p>
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[0.98] transition-transform text-white group-hover:shadow-lg group-hover:shadow-white/5"
                style={{ backgroundColor: project.color }}
              >
                View Project <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Expertise = () => {
  const stats = [
    { value: "3+", label: "AI Applications" },
    { value: "8.1", label: "B.Tech CGPA" },
    { value: "5+", label: "Tech Stack" }
  ];

  const services = [
    {
      title: "Autonomous AI Agents",
      desc: "Developing multi-agent systems using LLMs (Llama, Gemini, OpenAI) for complex workflow automation.",
      icon: Cpu,
      stack: ["Llama 3.1", "Gemini", "Groq"]
    },
    {
      title: "Full-Stack AI Solutions",
      desc: "Building end-to-end applications with Next.js, React, and Python-based backends (Flask).",
      icon: Layers,
      stack: ["Next.js 14", "Python", "SQL"]
    },
    {
      title: "Data Science & Analysis",
      desc: "Core expertise in data analysis, model evaluation, and EDA to drive intelligent decisions.",
      icon: Database,
      stack: ["SQL", "Data Analysis", "EDA"]
    }
  ];

  return (
    <section className="py-32 bg-black/30" id="skills">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-24">
          <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] block mb-4">Core Expertise</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-12 leading-tight">
            Simplifying complexity with <span className="text-primary">solutions.</span>
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {stats.map(stat => (
              <div key={stat.label}>
                <div className="text-5xl md:text-7xl font-black text-primary leading-none">{stat.value}</div>
                <p className="text-[10px] font-bold text-text-dim uppercase tracking-widest mt-4">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="glass p-10 rounded-2xl group hover:bg-primary/5 transition-all flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500">
                <service.icon className="w-7 h-7 text-primary group-hover:text-on-primary transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4 flex-grow">{service.title}</h3>
              <p className="text-text-dim text-sm mb-10 leading-relaxed">{service.desc}</p>
              <div className="flex flex-wrap gap-2">
                {service.stack.map(s => (
                  <span key={s} className="text-[10px] font-bold border border-white/10 px-3 py-1.5 rounded-lg tracking-wider text-text-dim">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Journey = () => {
  const experiences = [
    {
      period: "2022 - 2026",
      title: "B.Tech in CS & Engineering (Data Science)",
      company: "Madanapalle Institute of Technology",
      desc: "Major in Data Science with a CGPA of 8.1/10. Focused on ML, AI, and Big Data architectures.",
      active: true
    },
    {
      period: "2025 - 2026",
      title: "AI Project Lead",
      company: "CRM Automation Platform",
      desc: "Developing a serverless lead generation engine using Cloudflare Workers and PostgreSQL.",
      active: false
    },
    {
      period: "June 2025 - Sept 2025",
      title: "Web Developer Intern",
      company: "Enkonix Software Services Pvt. Ltd.",
      desc: "Developed and optimized web applications, focusing on delivering responsive user interfaces and efficient backend logic.",
      active: false
    },
    {
      period: "2024 - 2025",
      title: "Autonomous Systems Developer",
      company: "Solopreneur Bot",
      desc: "Designed zero-operational-cost AI agents for trend discovery and automated social media growth.",
      active: false
    }
  ];

  return (
    <section className="py-32 max-w-7xl mx-auto px-6 md:px-12" id="experience">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <SectionHeader 
            label="Journey"
            title="Education and practical experience"
          />
          <p className="text-text-dim mb-10 text-sm leading-relaxed">
            My trajectory is marked by a relentless pursuit of technical excellence, from academic foundations to high-impact engineering roles.
          </p>
          
          <div className="mb-12">
            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-6 border-l-2 border-primary pl-4">Certifications</h4>
            <div className="space-y-4">
              {[
                "Google Data Analytics (Coursera)",
                "AWS Cloud Practitioner (74%)",
                "Full-Stack Web Development",
                "React.js Advanced Concepts",
                "Docker Fundamentals"
              ].map(cert => (
                <div key={cert} className="text-xs font-medium text-text-dim border-b border-white/5 pb-2 last:border-0">{cert}</div>
              ))}
            </div>
          </div>

          <a href="/resume.pdf" download className="bg-primary text-on-primary px-10 py-3.5 rounded-xl font-bold text-lg flex items-center gap-2 hover:scale-95 transition-transform">
            Resume <Download className="w-5 h-5" />
          </a>
        </div>
        
        <div className="lg:w-2/3 space-y-16">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-12 border-l border-white/10">
              <div className={`absolute left-[-6px] top-0 w-3 h-3 rounded-full ${exp.active ? 'bg-primary shadow-[0_0_20px_rgba(221,183,255,0.8)]' : 'bg-outline'}`} />
              <div className="font-mono text-primary text-sm mb-3 font-medium uppercase tracking-widest">{exp.period}</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{exp.title}</h3>
              <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-6">{exp.company}</div>
              <p className="text-text-dim text-sm leading-relaxed max-w-xl">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Tools = () => {
  const tools = [
    { name: "Python", icon: Code },
    { name: "React.js", icon: Terminal },
    { name: "PostgreSQL", icon: Database },
    { name: "Docker", icon: Layers },
    { name: "n8n", icon: Share2 },
    { name: "Next.js", icon: Globe },
    { name: "PyTorch", icon: Cpu },
    { name: "Git", icon: Github }
  ];

  return (
    <section className="py-32 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold">My favorite <span className="text-primary">tools</span></h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 px-6 md:px-12 max-w-7xl mx-auto">
        {tools.map((tool, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.1, filter: 'grayscale(0)' }}
            className="flex flex-col items-center gap-4 grayscale transition-all cursor-pointer group"
          >
            <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
              <tool.icon className="w-8 h-8 text-primary" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-dim group-hover:text-primary transition-colors">{tool.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      initials: "FA",
      name: "Future Architect",
      role: "Self-Taught Developer",
      quote: "I worked with Feroz to develop a user-friendly mobile app. The design and features are exceptional. His focus on user experience made the project stand out and I am very happy with the final product. A truly visionary engineer."
    },
    {
      initials: "SK",
      name: "Sai Kumar",
      role: "Tech Lead",
      quote: "Feroz delivered an outstanding automation system for our lead generation pipeline. His deep understanding of AI agents and workflow automation significantly reduced our manual effort."
    },
    {
      initials: "AR",
      name: "Ananya Reddy",
      role: "Product Manager",
      quote: "Working with Feroz was a great experience. He built a robust content automation platform that saved us hours every week. Highly recommend for any AI-related projects."
    }
  ];

  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <section className="py-32 max-w-7xl mx-auto px-6 md:px-12">
      <SectionHeader 
        label="Wall of Trust"
        title="Clients say about me"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 glass rounded-3xl p-10 flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-3xl overflow-hidden mb-8 border-4 border-white/5 relative">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv8CiFaV5vknG4gxwnx0QaeoaTEOnWZqEmD9jqZvgWOxAh6HqXd6sG9dtIsy5OCysya9NW81GQDYVECikbV_BS_gTuRxx4QMHXeFWBiuzwFEFhoTV36bGjcTRbpxwysBO676lPGzGxJ_4_IghgmJ4P30YWEQB597Ui9mQELWSkaJ0KXmbi2JHjZ-GY9JGbwcjqhvRZktDPRLsHNLeYK3Kjj7p8H5PO-4JukKUCcXHr0a5FQkUat-EQcUbWW9WZMRUBHY8a6KSfKIZC" 
              className="w-full h-full object-cover" 
              alt="Feroz Naguru" 
              referrerPolicy="no-referrer"
            />
          </div>
          <h4 className="text-2xl font-bold mb-1">Feroz Naguru</h4>
          <p className="text-primary text-[10px] font-bold tracking-[0.2em] mb-6 uppercase">AI & Software Developer</p>
          <div className="flex gap-6 mt-auto">
            <a href="mailto:fferoz112233@gmail.com"><Mail className="w-4 h-4 text-text-dim hover:text-primary cursor-pointer transition-colors" /></a>
            <a href="https://linkedin.com/feroz-web-developer" target="_blank"><Linkedin className="w-4 h-4 text-text-dim hover:text-primary cursor-pointer transition-colors" /></a>
            <a href="https://github.com/Feroz723" target="_blank"><Github className="w-4 h-4 text-text-dim hover:text-primary cursor-pointer transition-colors" /></a>
          </div>
        </div>
        
        <div className="lg:col-span-8 glass rounded-3xl p-8 md:p-16 relative overflow-hidden flex flex-col">
          <div className="absolute top-0 right-0 p-8 md:p-12 opacity-5 pointer-events-none">
            <Layers className="w-40 h-40" />
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-6 mb-12">
                <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <span className="text-primary font-bold">{t.initials}</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold">{t.name}</h4>
                  <p className="text-text-dim text-[10px] font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
              
              <p className="text-xl md:text-2xl italic leading-relaxed text-text-light mb-12 flex-grow">
                "{t.quote}"
              </p>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex gap-4">
            <button 
              onClick={() => setCurrent((current - 1 + testimonials.length) % testimonials.length)}
              className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => setCurrent((current + 1) % testimonials.length)}
              className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section className="py-32 bg-white/[0.02]" id="contact">
    <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
      <h2 className="text-4xl md:text-7xl font-bold mb-16 leading-[0.9] tracking-tighter">
        LET'S MAKE SOMETHING <br/>
        <span className="text-primary">AWESOME TOGETHER!</span>
      </h2>
      
      <div className="max-w-3xl mx-auto text-left">
        <form
          action="mailto:fferoz112233@gmail.com"
          method="POST"
          encType="text/plain"
          className="space-y-8 md:space-y-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="relative group">
              <input 
                required
                name="name"
                type="text" 
                placeholder="YOUR NAME" 
                className="w-full bg-transparent border-b-2 border-outline/30 focus:border-primary outline-none py-4 text-sm font-bold tracking-widest transition-all placeholder:text-text-dim/30"
              />
            </div>
            <div className="relative group">
              <input 
                required
                name="email"
                type="email" 
                placeholder="YOUR EMAIL" 
                className="w-full bg-transparent border-b-2 border-outline/30 focus:border-primary outline-none py-4 text-sm font-bold tracking-widest transition-all placeholder:text-text-dim/30"
              />
            </div>
          </div>
          
          <div className="relative group">
            <textarea 
              required
              name="message"
              rows={1}
              placeholder="MESSAGE" 
              className="w-full bg-transparent border-b-2 border-outline/30 focus:border-primary outline-none py-4 text-sm font-bold tracking-widest transition-all placeholder:text-text-dim/30 resize-none overflow-hidden"
            />
          </div>
          
          <button 
            type="submit"
            className="w-full md:w-auto bg-primary text-on-primary px-16 py-5 rounded-2xl font-bold text-xl hover:scale-[1.02] transition-transform shadow-2xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-95"
          >
            Send Message <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-16 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="font-headline text-xl font-bold text-primary tracking-tighter">
        Feroz Naguru
      </div>
      
      <p className="text-xs font-bold text-text-dim/60 uppercase tracking-widest text-center">
        © 2024 AI ENTHUSIAST PORTFOLIO. DESIGNED FOR PRECISION.
      </p>
      
      <div className="flex gap-8">
        <a href="https://linkedin.com/feroz-web-developer" target="_blank"><Linkedin className="w-4 h-4 text-text-dim hover:text-white cursor-pointer transition-colors" /></a>
        <a href="https://github.com/Feroz723" target="_blank"><Github className="w-4 h-4 text-text-dim hover:text-white cursor-pointer transition-colors" /></a>
        <a href="https://x.com/feroz_naguru" target="_blank"><Twitter className="w-4 h-4 text-text-dim hover:text-white cursor-pointer transition-colors" /></a>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-background text-text-light selection:bg-primary selection:text-on-primary">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Expertise />
        <Journey />
        <Tools />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
