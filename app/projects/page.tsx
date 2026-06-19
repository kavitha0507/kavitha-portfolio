"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: "MediSync AI",
      role: "AI Solution Developer & UI/UX Engineer",
      category: "AI & Development",
      tags: ["React & FastAPI", "LangChain Orchestration", "Groq AI / Llama 3.3", "SQLite Architecture"],
      description: "An intelligent, privacy-conscious health assistant utilizing a localized FastAPI router and LangChain context orchestration. Engineered client-side regex metrics parsing and accessibility-first color bands to turn complex AI inference into trusted visual health insights.",
      link: "/projects/medisync-ai"
    },
    {
      title: "Plant Health Diagnosis App",
      role: "Full-Stack Developer & UI/UX Designer",
      category: "Full-Stack Development",
      tags: ["React Mobile", "UI/UX Design", "Image Processing"],
      description: "An intuitive application allowing users to upload botanical images to receive immediate crop health diagnostics and localized treatment parameters.",
      link: "/projects/plant-diagnosis"
    },
    {
      title: "Medication Reminder App",
      role: "Full-Stack Developer & UI/UX Designer",
      category: "Full-Stack Development",
      tags: ["Mobile Development", "Healthcare UX", "State Management"],
      description: "Designed and built a critical patient-adherence tool providing scheduled notifications, prescription logging, and cross-device safety alarms.",
      link: "/projects/medication-reminder"
    },
    {
      title: "Computer Vision Image-to-Sketch Pipeline",
      role: "Python Engineer & Developer",
      category: "Computer Vision",
      tags: ["Python 3.x", "OpenCV (cv2)", "NumPy Matrices", "Computer Vision"],
      description: "Engineered an automated digital image processing script leveraging OpenCV and optimized NumPy matrix transformations. Synthesizes raw photographs into crisp, analog-style pencil graphite sketches by executing perceptual grayscale conversion, Gaussian kernel noise mitigation, and high-speed bitwise array division.",
      link: "/projects/image-to-sketch"
    },
    {
      title: "Developer Portfolio Website",
      role: "Full-Stack Engineer",
      category: "Web Development",
      tags: ["Next.js", "Tailwind CSS", "Vercel Deploy"],
      description: "Designed and developed this modern, responsive portfolio space to showcase live engineering milestones and system architecture breakdowns.",
      link: "/projects/portfolio-v1"
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const colorThemes: Record<string, string> = {
    'AI & Development': 'border-indigo-500/30 bg-indigo-500/10 text-indigo-300',
    'Full-Stack Development': 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
    'Computer Vision': 'border-amber-500/30 bg-amber-500/10 text-amber-300',
    'Web Development': 'border-purple-500/30 bg-purple-500/10 text-purple-300'
  };

  return (
    <main className="min-h-screen bg-[#0B0F19] text-gray-100 selection:bg-purple-500/30 p-10 pt-32 relative">
      {/* Glow Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-indigo-600/10 to-purple-600/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-purple-600/10 to-indigo-600/10 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Featured Work</h1>
          <p className="text-lg text-gray-400">A collection of full-stack development and user-centered design projects.</p>
        </header>

        {/* Filter Tabs */}
        <div className="flex gap-4 mb-10 border-b border-white/[0.05] pb-4">
          {['All', 'AI & Development', 'Full-Stack Development', 'Computer Vision', 'Web Development'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-md font-medium transition-all ease-in-out duration-300 ${
                filter === tab 
                ? 'bg-purple-500/20 border border-purple-500/30 text-purple-300 shadow-[0_4px_30px_rgba(0,0,0,0.2)]' 
                : 'text-gray-400 hover:bg-white/[0.02] hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const theme = colorThemes[project.category] || 'border-purple-500/30 bg-purple-500/10 text-purple-300';
            
            return (
            <div 
              key={index}
              className="group bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-2xl p-8 hover:border-purple-500/30 transition-all ease-in-out duration-300 hover:-translate-y-1 shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs font-bold uppercase tracking-widest px-2 py-1 rounded border ${theme}`}>
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm font-semibold text-purple-400 mb-4">
                {project.role}
              </p>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className={`text-xs font-medium px-3 py-1 rounded-full border ${theme}`}>
                    {tag}
                  </span>
                ))}
              </div>

              <Link 
                href={project.link}
                className="font-bold text-white border-b-2 border-purple-500/30 pb-1 hover:text-purple-400 hover:border-purple-400 transition-all ease-in-out duration-300"
              >
                View Case Study →
              </Link>
            </div>
          )})}
        </div>
      </div>
    </main>
  );
}