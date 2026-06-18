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
      description: "An intelligent, privacy-conscious health assistant utilizing an localized FastAPI router and LangChain context orchestration. Engineered client-side regex metrics parsing and accessibility-first color bands to turn complex AI inference into trusted visual health insights.",
      link: "/projects/medisync-ai"
    },
    {
      title: "Heiwa AI Platform",
      role: "AI/UX Product Design Fellow",
      category: "Product Design",
      tags: ["Product Design", "Warm Tech System", "COPPA Trust-by-Design", "Model Tier Specs"],
      description: "Led end-to-end product design and technical feature scoping for Heiwa, an AI-powered family organization ecosystem. Architected COPPA-compliant onboarding patterns, confidence indicators, and multi-tier model specs.",
      link: "/projects/heiwa-ai"
    },
    {
      title: "DevLaunchers Open Source Platform",
      role: "Design System Engineer (Volunteer)",
      category: "Open Source",
      tags: ["Design Tokens", "React Components", "Component Scalability", "Open Source Engineering"],
      description: "Spearheading the engineering and architectural scaling of the unified open-source design system, bridging the divide between high-fidelity component layouts and production-ready code tokens.",
      link: "/projects/devlaunchers"
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 p-10 pt-32">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Work</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">A collection of full-stack development and user-centered design projects.</p>
        </header>

        {/* Filter Tabs */}
        <div className="flex gap-4 mb-10 border-b border-slate-200 dark:border-slate-800 pb-4">
          {['All', 'AI & Development', 'Product Design', 'Open Source'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                filter === tab 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'text-slate-600 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4">
                  {project.role}
                </p>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link 
                  href={project.link}
                  className="font-bold text-slate-900 dark:text-white border-b-2 border-blue-500 pb-1 hover:text-blue-500 transition-all"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}