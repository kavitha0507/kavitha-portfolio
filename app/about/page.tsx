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
    <main className="min-h-screen bg-white dark:bg-slate-900 p-10 pt-32 text-slate-900 dark:text-slate-100">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <h1 className="text-4xl font-bold mb-8 border-b-4 border-blue-500 w-fit">
          About Me
        </h1>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Narrative Paragraph Section (Spans 2 columns) */}
          <div className="md:col-span-2 space-y-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
           <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
  I am a <strong>UI/UX Designer and Full-Stack Developer</strong> dedicated to 
  creating digital experiences that are as functional as they are beautiful. 
  With a <strong> Master of Computer Applications (MCA)</strong> degree and advanced 
  technical training from <strong> Per Scholas</strong>, I bridge the gap between 
  complex backend logic and user-centered design. By combining the principles of 
  my <strong> Google UX Design Certificate</strong> with hands-on development in 
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
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                View My Projects
              </Link>
            </div>
          </div>

          {/* Sidebar Skills Section (Spans 1 column) */}
          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
            <h2 className="text-xl font-bold mb-6">Technical Toolkit</h2>
            <div className="space-y-6">
              {skills.map((group) => (
                <div key={group.category}>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full text-sm font-medium"
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
        <section className="pt-12 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-2xl font-bold mb-8">Relevant Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-1 before:h-full before:bg-blue-500 last:before:h-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    {exp.period}
                  </span>
                </div>
                <p className="text-md font-medium text-slate-500 mb-2">{exp.organization}</p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 text-center">
          <Link 
            href="/projects" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all transform hover:-translate-y-1"
          >
            Explore My Work
          </Link>
        </div>
      </div>
    </main>
  );
}