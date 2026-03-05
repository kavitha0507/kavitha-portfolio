"use client"
import{ useState} from "react";
import Link from 'next/link';

import Image from "next/image";
import { title } from "process";

interface Project {
  title: string;
  description: string;
  tags: string[];
}

export default function Home() {
  // Logic for the Copy Button
  const [copied, setCopied] = useState(false);

  const projects = [
  {
    title: "Plant Diagnosis App",
    description: "AI-powered mobile solution for plant owners to diagnose health issues instantly using AI-powered scanning.",
    tags: ["Figma", "AI/ML", "Google UX Certificate"],
    type: "UI/UX Design",
    link: "/projects/plant-diagnosis" // Path to your new folder
  },
  {
    title: "Medication Reminder App",
    description: "A high-accessibility design focused on WCAG-compliant contrast and simplified navigation for elderly patients.",
    tags: ["Accessibility", "WCAG", "Healthcare"],
    type: "UI/UX Design",
    link: "/projects/medication-reminder" // Path to your new folder
  },
  {
    title: "Full-Stack Portfolio Platform",
    description: "A professional portfolio system featuring a React frontend and Java Spring Boot backend, implementing full CRUD operations for project management.",
    tags: ["Java", "Spring Boot", "React", "Tailwind"],
    type: "Engineering",
    link: "/projects/portfolio-system" // Path to your development project page
  },
  {
    title: "Chess Coaching Platform",
    description: "Developed a full-stack coaching site using Next.js and Tailwind CSS, featuring responsive lesson management.",
    tags: ["Next.js", "Tailwind CSS", "Full-Stack"],
    type: "Engineering",
    link: "/projects/chess-coaching"
  }
];

  const copyEmail = () => {
    navigator.clipboard.writeText("mynalakavi05@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main>
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200 px-10 py-4 flex justify-between items-center">
<h1 className="text-xl font-black text-blue-600 tracking-tighter">KAVITHA.</h1>
<div className="hidden md:flex space-x-8 text-sm font-bold text-slate-600">
<Link href="/projects" className="hover:text-indigo-600">Projects</Link>
<Link href="/about" className="hover:text-indigo-600">About</Link>

{/* Resume Download Button */}
  <a 
   href="/Kavitha_Mynala_Resume.pdf" 
  download="Kavitha_Mynala_Resume.pdf"
    className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition-all shadow-md"
  >
    Download Resume
  </a>
</div>

</nav>

<section className="flex flex-col items-center justify-center py-24 text-center">
<div className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">
UI/UX Designer & Developer
</div>

<h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none">
Design that <br />
<span className="text-purple-600">works.</span>
</h1>

<p className="mt-8 text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
I am Kavitha. I bridge the gap between User Experience and Technical Implementation,
creating interfaces that are as beautiful as they are functional.
</p>

{/* NEW SKILLS TAGS */}

<div className="mt-10 flex flex-wrap justify-center gap-3">
<span className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-semibold shadow-sm text-slate-700">User Research</span>
<span className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-semibold shadow-sm text-slate-700">Wireframing</span>
<span className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-semibold shadow-sm text-slate-700">Figma</span>
<span className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-semibold shadow-sm text-slate-700">Prototyping</span>
<span className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-semibold shadow-sm text-slate-700">React/Next.js</span>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-20">
<h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Featured Projects</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {projects.map((project, index) => (
    <div
      key={index}
      className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    >
      {/* project content */}
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-slate-500 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs bg-gray-100 px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  ))}
</div>
</section>

<section id="process" className="max-w-6xl mx-auto px-10 py-24">
<h2 className="text-3xl font-bold text-slate-900 mb-12">My Design Process</h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
  {/* PHASE 1: DISCOVER */}

<div className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
<div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
<span className="text-2xl">🔍</span>
</div>
<h3 className="text-xl font-extrabold text-slate-900 mb-4">01. Discovery</h3>
<ul className="text-slate-500 text-sm space-y-3">
<li className="flex items-start gap-2">
<span className="text-purple-600 font-bold">•</span>
Stakeholder Interviews
</li>
<li className="flex items-start gap-2">
<span className="text-purple-600 font-bold">•</span>
User Persona Creation
</li>
<li className="flex items-start gap-2">
<span className="text-purple-600 font-bold">•</span>
Competitive Audit
</li>
</ul>
</div>

{/* PHASE 2: DESIGN */}

<div className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
<div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
<span className="text-2xl">🎨</span>
</div>
<h3 className="text-xl font-extrabold text-slate-900 mb-4">02. Visual UI</h3>
<ul className="text-slate-500 text-sm space-y-3">
<li className="flex items-start gap-2">
<span className="text-pink-600 font-bold">•</span>
High-Fidelity Wireframes
</li>
<li className="flex items-start gap-2">
<span className="text-pink-600 font-bold">•</span>
Design Systems (Figma)
</li>
<li className="flex items-start gap-2">
<span className="text-pink-600 font-bold">•</span>
Interactive Prototyping
</li>
</ul>
</div>

{/* PHASE 3: BUILD */}

<div className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
<div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
<span className="text-2xl">💻</span>
</div>
<h3 className="text-xl font-extrabold text-slate-900 mb-4">03. Development</h3>
<ul className="text-slate-500 text-sm space-y-3">
<li className="flex items-start gap-2">
<span className="text-blue-600 font-bold">•</span>
Clean Next.js Codebase
</li>
<li className="flex items-start gap-2">
<span className="text-blue-600 font-bold">•</span>
Responsive Tailwind Layouts
</li>
<li className="flex items-start gap-2">
<span className="text-blue-600 font-bold">•</span>
API & Database Integration
</li>
</ul>
</div>

</div>
</section>
{/* --- Volunteer Experience Section --- */}
<section className="max-w-6xl mx-auto px-10 py-24 bg-slate-50 rounded-3xl mt-12">
  <div className="flex flex-col md:flex-row justify-between items-start gap-12">
    <div className="md:w-1/3">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Impact & Volunteering</h2>
      <p className="text-slate-600 leading-relaxed">
        I am currently volunteering as a Designer for two NGO organizations, 
        using my skills to support education and mental health initiatives.
      </p>
    </div>

    <div className="md:w-2/3 grid gap-8">
      {/* NGO 1: Bright Minds Enrichment */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-6 items-start">
        <div className="text-3xl">🎓</div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Bright Minds Enrichment</h3>
          <p className="text-purple-600 font-bold text-sm mb-2">Volunteer Designer</p>
          <p className="text-slate-500 text-sm">
            Enhancing digital tools for schools to improve student engagement and 
            streamline educational resources for teachers.
          </p>
        </div>
      </div>

      {/* NGO 2: Thokam Mental Health */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-6 items-start">
        <div className="text-3xl">🧠</div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Thokam Mental Health</h3>
          <p className="text-pink-600 font-bold text-sm mb-2">UX Design Volunteer</p>
          <p className="text-slate-500 text-sm">
            Modernizing an empathetic platform for emotional well-being, focusing on 
            reducing cognitive load and improving accessibility for mental health tracking.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* --- Hire Me / CTA Section --- */}

<div className="mt-12 text-center">
<Link href="/projects" className="inline-flex items-center px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-bold rounded-full hover:bg-indigo-600 hover:text-white transition-all">
View All My Work <span className="ml-2">→</span>
</Link>
</div>


<section className="bg-indigo-600 py-20 px-6 text-center text-white mt-20 rounded-t-3xl">
<div className="max-w-3xl mx-auto">
  
<h2 className="text-4xl md:text-5xl font-bold mb-6">
Let’s build something incredible together.
</h2>
<p className="text-xl mb-10 opacity-90">
I’m currently looking for new opportunities in UI/UX Design and Full-Stack Development.
Whether you have a project in mind or just want to connect, I'd love to hear from you.
</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-6">
<button
onClick={copyEmail}
className={`px-10 py-4 rounded-full font-bold text-lg transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95 shadow-lg min-w-[220px] ${copied ? 'bg-green-500 text-white' : 'bg-white text-indigo-600'}`}
>
{copied ? "✓ Email Copied!" : "Hire Me Now"}
</button>
<a
href="https://www.linkedin.com/in/kavitha-mynala12"
target="_blank"
rel="noopener noreferrer"
className="border-2 border-white/40 hover:border-white px-10 py-4 rounded-full font-bold text-lg transition-all"
>
View LinkedIn
</a>
</div>
</div>

</section>

{/* --- Simple Footer --- */}

<footer className="bg-white py-12 px-6 border-t border-gray-100">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500">
<p className="font-medium">
© {new Date().getFullYear()} Kavitha Mynala. All rights reserved.
</p>
<div className="flex gap-8 font-semibold">
<a href="https://github.com/kavitha0507" className="hover:text-black transition-colors">GitHub</a>
<a href="https://www.linkedin.com/in/kavitha-mynala12" className="hover:text-indigo-600 transition-colors">LinkedIn</a>
</div>
</div>
</footer>
</main>
);
}             