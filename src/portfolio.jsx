import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="bg-gradient-to-tr from-[#0f2027] via-[#203a43] to-[#2c5364] min-h-screen p-8 text-white font-sans">
      {/* Header Section */}
<header className="text-center mb-16">
  <motion.img
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    src="/222004192.jpg"
    alt="Rugemana Christian"
    className="mx-auto rounded-full w-36 h-36 object-cover shadow-2xl border-4 border-cyan-500"
  />
  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="text-5xl font-extrabold mt-6 text-white tracking-tight"
  >
    Rugemana Christian
  </motion.h1>
  <p className="text-xl text-cyan-300 mt-2">Software Developer</p>
  <p className="mt-4 text-md max-w-2xl mx-auto text-gray-300 italic">
    I create digital solutions that combine innovation with functionality. Let's build something meaningful.
  </p>
  
  {/* Social Links with Icons */}
  <div className="flex justify-center space-x-4 mt-6">
    <a 
      href="mailto:rugemachristian2000@gmail.com" 
      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
      aria-label="Email"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </a>
    <a 
      href="https://linkedin.com/in/rugemana-christian-187871332" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
      aria-label="LinkedIn"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    </a>
    <a 
      href="https://github.com/rugemana" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
      aria-label="GitHub"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    </a>
  </div>

  {/* CV Download Button */}
  <Button className="mt-6" asChild>
    <a href="/Rugemana-Christian-CV.pdf" download className="inline-flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
      Download CV
    </a>
  </Button>
</header>

      {/* Personal Information Section */}
      <motion.section className="mb-16 max-w-6xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-cyan-500 pb-2">Personal Information</h2>
        <div className="grid md:grid-cols-2 gap-8 bg-gray-800/50 p-6 rounded-xl">
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Contact Details</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-3 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                rugemachristian2000@gmail.com
              </p>
              <p className="flex items-center gap-3 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +250 787 116 247
              </p>
              <p className="flex items-center gap-3 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Kigali, Rwanda
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Connect With Me</h3>
            <div className="space-y-3">
              <a href="https://linkedin.com/in/rugemana-christian-187871332" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                linkedin.com/in/rugemana-christian-187871332
              </a>
              <a href="https://github.com/rugemana" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                github.com/rugemana
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section - Keep as is */}
      <motion.section className="mb-16 max-w-6xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-cyan-500 pb-2">Technical Skills</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">🧠 Languages</h3>
            <div className="flex flex-wrap gap-3">
              {['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Python', 'SQL'].map(skill => (
                <span key={skill} className="bg-gray-800 px-4 py-2 rounded-full">{skill}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">🛠️ Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {['Git & GitHub', 'VS Code', 'PostgreSQL', 'Figma', 'Quarto', 'RESTful APIs'].map(skill => (
                <span key={skill} className="bg-gray-800 px-4 py-2 rounded-full">{skill}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">⚙️ Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-3">
              {['React.js', 'Next.js', 'Tailwind CSS', 'Drizzle ORM', 'Node.js', 'Bootstrap'].map(skill => (
                <span key={skill} className="bg-gray-800 px-4 py-2 rounded-full">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Me Section - Keep as is */}
      <motion.section className="mb-16 max-w-6xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-cyan-500 pb-2">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-200">
          I'm Rugemana Christian, a dedicated Software Developer and final-year student in Business Information Technology at the University of Rwanda. 
          I specialize in web development and data-driven applications using technologies like HTML, CSS, JavaScript, React, Next.js, Python, and PostgreSQL. 
          I also work with tools such as Drizzle ORM and API integrations. Passionate about building meaningful digital solutions, I focus on community-based 
          projects like dashboards, portfolios, and digital service platforms. My mission is to empower youth and promote talent through innovative tech solutions.
        </p>
      </motion.section>

      {/* Projects Section - Keep as is */}
      <motion.section className="mb-16 max-w-6xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-cyan-500 pb-2">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Portfolio Project */}
          <Card className="bg-gray-800 border border-gray-700 hover:border-cyan-500 transition">
            <CardContent>
              <h3 className="text-2xl font-bold text-cyan-400">Developer Portfolio</h3>
              <p className="text-gray-300 mt-2">
                My personal portfolio showcasing my skills and projects. Built with Next.js 14, Tailwind CSS, and React 18.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Next.js', 'Tailwind CSS', 'React', 'Drizzle ORM', 'PostgreSQL', 'Vercel'].map(tech => (
                  <span key={tech} className="bg-gray-700 px-3 py-1 rounded-full text-sm">{tech}</span>
                ))}
              </div>
              <div className="mt-4 flex space-x-3">
                <Button asChild>
                  <a href="https://github.com/rugemana/portfolio" target="_blank" rel="noopener noreferrer">View Code</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* ResearchDash Project */}
          <Card className="bg-gray-800 border border-gray-700 hover:border-cyan-500 transition">
            <CardContent>
              <h3 className="text-2xl font-bold text-cyan-400">ResearchDash: Data Cleaning Pipeline</h3>
              <p className="text-gray-300 mt-2">
                Python toolkit for intelligent research data preparation with automatic cleaning capabilities.
              </p>
              <ul className="mt-2 text-gray-300 list-disc pl-5 space-y-1">
                <li>Smart data sanitization</li>
                <li>Temporal data normalization</li>
                <li>Jupyter Notebook integration</li>
              </ul>
              <div className="mt-4 flex space-x-3">
                <Button asChild>
                  <a href="https://github.com/rugemana/researchdash" target="_blank" rel="noopener noreferrer">View Code</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Energy Dashboard Project */}
          <Card className="bg-gray-800 border border-gray-700 hover:border-cyan-500 transition">
            <CardContent>
              <h3 className="text-2xl font-bold text-cyan-400">Energy Statistics Dashboard</h3>
              <p className="text-gray-300 mt-2">
                Interactive dashboard showing global and Rwanda-specific energy statistics using real API data.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['React', 'JavaScript', 'API Integration', 'Data Visualization'].map(tech => (
                  <span key={tech} className="bg-gray-700 px-3 py-1 rounded-full text-sm">{tech}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.section>
    </div>
  );
}