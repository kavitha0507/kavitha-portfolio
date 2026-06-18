"use client"
import{ useState} from "react";
import Link from 'next/link';

import Image from "next/image";
import { title } from "process";

interface Project {
  title: string;
  role: string;
  description: string;
  tags: string[];
  type: string;
  link: string;
}

export default function Home() {
  // Logic for the Copy Button
  const [copied, setCopied] = useState(false);

  const projects = [
  {
    title: "MediSync AI",
    role: "AI Solution Developer & UI/UX Engineer",
    description: "An intelligent, privacy-conscious health assistant utilizing an localized FastAPI router and LangChain context orchestration. Engineered client-side regex metrics parsing and accessibility-first color bands to turn complex AI inference into trusted visual health insights.",
    tags: ["React & FastAPI", "LangChain Orchestration", "Groq AI / Llama 3.3", "SQLite Architecture"],
    type: "AI & Development",
    link: "/projects/medisync-ai"
  },
  {
    title: "Heiwa AI Platform",
    role: "AI/UX Product Design Fellow",
    description: "Led end-to-end product design and technical feature scoping for Heiwa, an AI-powered family organization ecosystem. Architected COPPA-compliant onboarding patterns, confidence indicators, and multi-tier model specs.",
    tags: ["Product Design", "Warm Tech System", "COPPA Trust-by-Design", "Model Tier Specs"],
    type: "Product Design",
    link: "/projects/heiwa-ai"
  },
  {
    title: "DevLaunchers Open Source Platform",
    role: "Design System Engineer (Volunteer)",
    description: "Spearheading the engineering and architectural scaling of the unified open-source design system, bridging the divide between high-fidelity component layouts and production-ready code tokens.",
    tags: ["Design Tokens", "React Components", "Component Scalability", "Open Source Engineering"],
    type: "Open Source",
    link: "/projects/devlaunchers"
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
I am Kavitha. I specialize in bridging the gap between complex Agentic AI systems and intuitive User Experiences. I design and develop trusted, human-in-the-loop interfaces that transform raw AI capabilities into market-ready enterprise solutions.
</p>

{/* NEW SKILLS TAGS */}

<div className="mt-10 flex flex-wrap justify-center gap-3">
<span className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-semibold shadow-sm text-slate-700">Agentic Workflows</span>
<span className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-semibold shadow-sm text-slate-700">Human-in-the-Loop UX</span>
<span className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-semibold shadow-sm text-slate-700">Next.js / React</span>
<span className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-semibold shadow-sm text-slate-700">Figma</span>
<span className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-semibold shadow-sm text-slate-700">AI Architecture</span>
<span className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-semibold shadow-sm text-slate-700">LLM Context Mapping</span>
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
      <p className="text-sm font-semibold text-slate-500 mb-2">{project.role}</p>
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
{/* --- Professional & Enterprise Experience Section --- */}
<section className="max-w-6xl mx-auto px-10 py-24 bg-slate-50 rounded-3xl mt-12">
  <div className="flex flex-col md:flex-row justify-between items-start gap-12">
    <div className="md:w-1/3">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Professional & Enterprise Experience</h2>
      <p className="text-slate-600 leading-relaxed">
        Leading AI product design and engineering initiatives across healthcare, family organization, and open-source design systems.
      </p>
    </div>

    <div className="md:w-2/3 grid gap-8">
      {/* Role 1: MediSync AI */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-6 items-start">
        <div className="text-3xl">�</div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">MediSync AI</h3>
          <p className="text-purple-600 font-bold text-sm mb-2">AI Solution Developer</p>
          <p className="text-slate-500 text-sm">
            Conceptualized and engineered an end-to-end full-stack medical consulting companion. Built custom state-management flows across decoupled endpoints (/bmi, /diet, /advise) to map raw LLM execution smoothly onto predictable user experience patterns.
          </p>
        </div>
      </div>

      {/* Role 2: Heiwa */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-6 items-start">
        <div className="text-3xl">🎨</div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Heiwa (AI/UX PM Accelerator)</h3>
          <p className="text-pink-600 font-bold text-sm mb-2">AI/UX Product Design Fellow</p>
          <p className="text-slate-500 text-sm">
            Led end-to-end product design and feature specification for a family organization platform. Designed a 5-screen, COPPA-compliant onboarding flow integrated with mandatory data privacy consent gates. Implemented Confidence Indicators and human-in-the-loop UX patterns for automated event extraction. Authored technical specifications mapping out a tiered AI model hierarchy (Fast/Balanced/Deep models) to target a sub-90-second time-to-value for new users using a Warm Tech (Soft Indigo & Warm Peach) design system.
          </p>
        </div>
      </div>

      {/* Role 3: DevLaunchers */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-6 items-start">
        <div className="text-3xl">⚙️</div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">DevLaunchers</h3>
          <p className="text-blue-600 font-bold text-sm mb-2">Design System Engineer (Volunteer)</p>
          <p className="text-slate-500 text-sm">
            Architecting modular, production-ready design token assets and highly accessible React components. Partnering with multi-functional open-source dev layers to maintain design continuity across global contributor pipelines.
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
