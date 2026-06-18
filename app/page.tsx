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
    description: "An intelligent, privacy-conscious health assistant utilizing a localized FastAPI router and LangChain context orchestration. Engineered client-side regex metrics parsing and accessibility-first color bands to turn complex AI inference into trusted visual health insights.",
    tags: ["React & FastAPI", "LangChain Orchestration", "Groq AI / Llama 3.3", "SQLite Architecture"],
    type: "AI & Development",
    link: "/projects/medisync-ai"
  },
  {
    title: "Plant Health Diagnosis App",
    role: "Full-Stack Developer & UI/UX Designer",
    description: "An intuitive application allowing users to upload botanical images to receive immediate crop health diagnostics and localized treatment parameters.",
    tags: ["React Mobile", "UI/UX Design", "Image Processing"],
    type: "Full-Stack Development",
    link: "/projects/plant-diagnosis"
  },
  {
    title: "Medication Reminder App",
    role: "Full-Stack Developer & UI/UX Designer",
    description: "Designed and built a critical patient-adherence tool providing scheduled notifications, prescription logging, and cross-device safety alarms.",
    tags: ["Mobile Development", "Healthcare UX", "State Management"],
    type: "Full-Stack Development",
    link: "/projects/medication-reminder"
  },
  {
    title: "Convert Image to Pencil Sketch",
    role: "Python Engineer",
    description: "Engineered a local computer vision script leveraging OpenCV and image matrix transformations to cleanly parse and render raw photos into high-fidelity pencil sketches.",
    tags: ["Python", "OpenCV", "Computer Vision"],
    type: "Computer Vision",
    link: "/projects/image-to-sketch"
  },
  {
    title: "Developer Portfolio Website",
    role: "Full-Stack Engineer",
    description: "Designed and developed this modern, responsive portfolio space to showcase live engineering milestones and system architecture breakdowns.",
    tags: ["Next.js", "Tailwind CSS", "Vercel Deploy"],
    type: "Web Development",
    link: "/projects/portfolio-v1"
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
I am Kavitha. I specialize in bridging the gap between complex Agentic AI systems, full-stack product engineering, and trusted user experiences. From building scalable design systems to engineering full-stack applications and human-in-the-loop interfaces, I transform technical capability into market-ready solutions.
</p>

{/* NEW SKILLS TAGS */}

<div className="mt-10 flex flex-wrap justify-center gap-3">
<span className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-semibold shadow-sm text-slate-700">AI/UX Product Strategy</span>
<span className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-semibold shadow-sm text-slate-700">Design System Engineering</span>
<span className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-semibold shadow-sm text-slate-700">Full-Stack Development (Java/Python)</span>
<span className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-semibold shadow-sm text-slate-700">Next.js & React</span>
<span className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-semibold shadow-sm text-slate-700">Human-in-the-Loop UX</span>
<span className="bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-semibold shadow-sm text-slate-700">Trust-by-Design Architecture</span>
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
{/* --- Volunteering & Community Impact Section --- */}
<section className="max-w-6xl mx-auto px-10 py-24 bg-slate-50 rounded-3xl mt-12">
  <div className="flex flex-col md:flex-row justify-between items-start gap-12">
    <div className="md:w-1/3">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Volunteering & Community Impact</h2>
      <p className="text-slate-600 leading-relaxed">
        Dedicated to giving back through design system engineering, community coordination, and STEM education initiatives.
      </p>
    </div>

    <div className="md:w-2/3 grid gap-8">
      {/* Role 1: DevLaunchers */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-6 items-start">
        <div className="text-3xl">⚙️</div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Design System Engineer (Volunteer)</h3>
          <p className="text-blue-600 font-bold text-sm mb-2">DevLaunchers</p>
          <p className="text-slate-500 text-sm">
            Architecting modular, production-ready design token assets and highly accessible React components. Partnering with multi-functional open-source dev layers to maintain design continuity across global contributor pipelines.
          </p>
        </div>
      </div>

      {/* Role 2: Thokam */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-6 items-start">
        <div className="text-3xl">🤝</div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Volunteer Coordinator</h3>
          <p className="text-green-600 font-bold text-sm mb-2">Thokam</p>
          <p className="text-slate-500 text-sm">
            Managed community outreach pipelines, structured event logistics, and coordinated local volunteer efforts to drive operational impact.
          </p>
        </div>
      </div>

      {/* Role 3: Bright Mind Enrichment Schools */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-6 items-start">
        <div className="text-3xl">🎓</div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">STEM Enrichment Volunteer</h3>
          <p className="text-purple-600 font-bold text-sm mb-2">Bright Mind Enrichment Schools</p>
          <p className="text-slate-500 text-sm">
            Facilitated educational learning pathways and interactive engineering exercises for students, fostering early curiosity in technical fields.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* --- Education & Professional Credentials Section --- */}
<section className="max-w-6xl mx-auto px-10 py-24 bg-white rounded-3xl mt-12 border border-slate-200">
  <div className="flex flex-col md:flex-row justify-between items-start gap-12">
    <div className="md:w-1/3">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Education & Professional Credentials</h2>
      <p className="text-slate-600 leading-relaxed">
        Comprehensive training in AI development, full-stack engineering, and advanced computer science methodologies.
      </p>
    </div>

    <div className="md:w-2/3 grid gap-8">
      {/* Credential 1: Per Scholas AI */}
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-6 items-start">
        <div className="text-3xl">🤖</div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">AI Solution Developer Professional Certification</h3>
          <p className="text-indigo-600 font-bold text-sm mb-2">Per Scholas</p>
          <p className="text-slate-500 text-sm">
            Intensive training program focused on building end-to-end AI applications, model orchestration, and backend framework architectures.
          </p>
        </div>
      </div>

      {/* Credential 2: Heiwa */}
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-6 items-start">
        <div className="text-3xl">🎨</div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">AI/UX Product Design Fellow</h3>
          <p className="text-pink-600 font-bold text-sm mb-2">Heiwa (AI/UX PM Accelerator)</p>
          <p className="text-slate-500 text-sm">
            Selected for an intensive accelerator building 'Warm Tech'. Led end-to-end design and technical feature specs for an AI family platform. Built a 5-screen, COPPA-compliant onboarding flow, integrated privacy consent gates, implemented Confidence Indicators, and authored technical specifications for tiered model structures (Fast/Balanced/Deep models) utilizing a Soft Indigo & Warm Peach system.
          </p>
        </div>
      </div>

      {/* Credential 3: Per Scholas Java */}
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-6 items-start">
        <div className="text-3xl">☕</div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Full Stack Java Developer Certification</h3>
          <p className="text-orange-600 font-bold text-sm mb-2">Per Scholas</p>
          <p className="text-slate-500 text-sm">
            Rigorous software engineering track specializing in enterprise Java ecosystems, Spring Boot architectures, relational databases, and full-stack integration patterns.
          </p>
        </div>
      </div>

      {/* Credential 4: MSCS */}
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-6 items-start">
        <div className="text-3xl">🎓</div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Master of Science in Computer Science (MSCS)</h3>
          <p className="text-slate-600 font-bold text-sm mb-2">Graduate Degree</p>
          <p className="text-slate-500 text-sm">
            Advanced graduate coursework detailing software engineering methodologies, database architectures, and computational systems logic.
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
