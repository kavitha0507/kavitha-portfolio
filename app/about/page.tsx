"use client";

import Link from 'next/link';

export default function AboutPage() {
  const skills = [
    { category: "Design", items: ["UI/UX Design", "Figma", "Prototyping", "User Research"] },
    { category: "Development", items: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"] },
    { category: "Specialized", items: ["Agentic UX", "AI Implementation", "Responsive Design"] }
  ];

  const experience = [
    { role: "UI/UX Designer", organization: "NGO Volunteer", period: "2023-Present", description: "Designing user-centric digital solutions for non-profit organizations." },
    { role: "Full-Stack Developer", organization: "Personal Projects", period: "2022-Present", description: "Building web applications with Next.js, React, and Node.js." }
  ];

  return (
    <main className="min-h-screen bg-[#0B0F19] text-gray-100 selection:bg-purple-500/30 p-10 pt-32 relative">
      {/* Glow Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-indigo-600/10 to-purple-600/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-purple-600/10 to-indigo-600/10 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Header Section */}
        <h1 className="text-4xl font-bold mb-8 border-b-4 border-purple-500/30 w-fit text-white">
          About Me
        </h1>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Narrative Paragraph Section (Spans 2 columns) */}
          <div className="md:col-span-2 space-y-6 text-lg leading-relaxed text-gray-300">
           <p className="mt-6 text-lg text-gray-400 max-w-2xl leading-relaxed">
  I am a <strong className="text-white">UI/UX Designer and Full-Stack Developer</strong> dedicated to 
  creating digital experiences that are as functional as they are beautiful. 
  With a <strong className="text-white"> Master of Computer Applications (MCA)</strong> degree and advanced 
  technical training from <strong className="text-white"> Per Scholas</strong>, I bridge the gap between 
  complex backend logic and user-centered design. By combining the principles of 
  my <strong className="text-white"> Google UX Design Certificate</strong> with hands-on development in 
  Node.js and Next.js, I build accessible solutions that solve real-world problems.
</p>
            <p>
              Whether I'm volunteering design services for NGOs or building complex web 
              applications like chess coaching platforms, my goal is always to solve 
              problems through user-centric AI integration and clean code.
            </p>

            <div className="pt-6">
              <Link 
                href="/projects" 
                className="inline-block bg-purple-600/20 border border-purple-500/30 text-purple-300 px-6 py-3 rounded-lg font-medium hover:bg-purple-500/30 transition-all ease-in-out duration-300"
              >
                View My Projects
              </Link>
            </div>
          </div>

          {/* Sidebar Skills Section (Spans 1 column) */}
          <div className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] p-6 rounded-2xl hover:border-purple-500/30 transition-all ease-in-out duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
            <h2 className="text-xl font-bold mb-6 text-white">Technical Toolkit</h2>
            <div className="space-y-6">
              {skills.map((group) => (
                <div key={group.category}>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 bg-white/[0.02] border border-white/[0.05] rounded-full text-sm font-medium text-gray-300 hover:bg-purple-500/20 transition-all ease-in-out duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
{/* Experience Section */}
        <section className="pt-12 border-t border-white/[0.05]">
          <h2 className="text-2xl font-bold mb-8 text-white">Relevant Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-1 before:h-full before:bg-purple-500/30 last:before:h-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <h3 className="text-xl font-bold text-white">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-semibold text-purple-400 uppercase tracking-wide">
                    {exp.period}
                  </span>
                </div>
                <p className="text-md font-medium text-gray-400 mb-2">{exp.organization}</p>
                <p className="text-gray-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 text-center">
          <Link 
            href="/projects" 
            className="inline-block bg-purple-600/20 border border-purple-500/30 text-purple-300 px-8 py-3 rounded-lg font-medium hover:bg-purple-500/30 transition-all ease-in-out duration-300 transform hover:-translate-y-1"
          >
            Explore My Work
          </Link>
        </div>
      </div>
    </main>
  );
}