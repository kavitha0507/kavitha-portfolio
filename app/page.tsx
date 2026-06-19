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
    title: "Computer Vision Image-to-Sketch Pipeline",
    role: "Python Engineer & Developer",
    description: "Engineered an automated digital image processing script leveraging OpenCV and optimized NumPy matrix transformations. Synthesizes raw photographs into crisp, analog-style pencil graphite sketches by executing perceptual grayscale conversion, Gaussian kernel noise mitigation, and high-speed bitwise array division.",
    tags: ["Python 3.x", "OpenCV (cv2)", "NumPy Matrices", "Computer Vision"],
    type: "Computer Vision",
    link: "/projects/image-to-sketch"
  },
  {
    title: "Enterprise Spring Boot Portfolio Platform",
    role: "Full-Stack Software Engineer",
    description: "Architected a data-driven portfolio management system utilizing Java, Spring Boot, and Hibernate ORM. Implemented an object-oriented Model-View-Controller (MVC) pipeline, separating structural relational schemas from presentation fragments while integrating secure administrative data synchronization.",
    tags: ["Java", "Spring Boot", "Hibernate/JPA", "SQL Database"],
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
    <main className="bg-[#0B0F19] text-gray-100 selection:bg-purple-500/30 min-h-screen">
      {/* Glow Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-indigo-600/10 to-purple-600/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-purple-600/10 to-indigo-600/10 blur-3xl"></div>
      </div>

      <nav className="sticky top-0 z-50 bg-[#0B0F19]/80 backdrop-blur-md border-b border-white/[0.05] px-10 py-4 flex justify-between items-center">
<h1 className="text-xl font-black text-purple-400 tracking-tighter">KAVITHA.</h1>
<div className="hidden md:flex space-x-8 text-sm font-bold text-gray-300">
<Link href="/projects" className="hover:text-purple-400 transition-all ease-in-out duration-300">Projects</Link>
<Link href="/about" className="hover:text-purple-400 transition-all ease-in-out duration-300">About</Link>

{/* Resume Download Button */}
  <a 
   href="/Kavitha_Mynala_Resume.pdf" 
  download="Kavitha_Mynala_Resume.pdf"
    className="bg-purple-600/20 border border-purple-500/30 text-purple-300 px-5 py-2 rounded-full hover:bg-purple-500/30 transition-all ease-in-out duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
  >
    Download Resume
  </a>
</div>

</nav>

<section className="flex flex-col items-center justify-center py-24 text-center relative">
<div className="bg-purple-500/10 border border-purple-500/20 text-purple-300 px-4 py-1 rounded-full text-xs font-bold mb-6 tracking-widest uppercase backdrop-blur-sm">
UI/UX Designer & Developer
</div>

<h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
Design that <br />
<span className="text-purple-400">works.</span>
</h1>

<p className="mt-8 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
I am Kavitha. I specialize in bridging the gap between complex Agentic AI systems, full-stack product engineering, and trusted user experiences. From building scalable design systems to engineering full-stack applications and human-in-the-loop interfaces, I transform technical capability into market-ready solutions.
</p>

{/* NEW SKILLS TAGS */}

<div className="mt-10 flex flex-wrap justify-center gap-3">
<span className="bg-white/[0.02] border border-white/[0.05] px-4 py-2 rounded-full text-sm font-semibold text-gray-300 hover:bg-purple-500/20 transition-all ease-in-out duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.2)]">AI/UX Product Strategy</span>
<span className="bg-white/[0.02] border border-white/[0.05] px-4 py-2 rounded-full text-sm font-semibold text-gray-300 hover:bg-purple-500/20 transition-all ease-in-out duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.2)]">Design System Engineering</span>
<span className="bg-white/[0.02] border border-white/[0.05] px-4 py-2 rounded-full text-sm font-semibold text-gray-300 hover:bg-purple-500/20 transition-all ease-in-out duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.2)]">Full-Stack Development (Java/Python)</span>
<span className="bg-white/[0.02] border border-white/[0.05] px-4 py-2 rounded-full text-sm font-semibold text-gray-300 hover:bg-purple-500/20 transition-all ease-in-out duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.2)]">Next.js & React</span>
<span className="bg-white/[0.02] border border-white/[0.05] px-4 py-2 rounded-full text-sm font-semibold text-gray-300 hover:bg-purple-500/20 transition-all ease-in-out duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.2)]">Human-in-the-Loop UX</span>
<span className="bg-white/[0.02] border border-white/[0.05] px-4 py-2 rounded-full text-sm font-semibold text-gray-300 hover:bg-purple-500/20 transition-all ease-in-out duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.2)]">Trust-by-Design Architecture</span>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-20 relative">
<h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Featured Engineering & Design Artifacts</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {projects.map((project, index) => {
    const colorThemes: Record<string, string> = {
      'AI & Development': 'border-indigo-500/30 bg-indigo-500/10 text-indigo-300',
      'Full-Stack Development': 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
      'Computer Vision': 'border-amber-500/30 bg-amber-500/10 text-amber-300',
      'Web Development': 'border-purple-500/30 bg-purple-500/10 text-purple-300'
    };
    const theme = colorThemes[project.type] || 'border-purple-500/30 bg-purple-500/10 text-purple-300';
    
    return (
    <div
      key={index}
      className="group bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-2xl p-8 hover:border-purple-500/30 transition-all ease-in-out duration-300 hover:-translate-y-1 shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
    >
      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
      <p className="text-sm font-semibold text-purple-400 mb-2">{project.role}</p>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className={`text-xs px-3 py-1 rounded-full border ${theme}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )})}
</div>
</section>

<section id="process" className="max-w-6xl mx-auto px-10 py-24 relative">
<h2 className="text-3xl font-bold text-white mb-12">My Design Process</h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
  {/* PHASE 1: DISCOVER */}

<div className="group bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-2xl p-8 hover:border-purple-500/30 transition-all ease-in-out duration-300 hover:-translate-y-1 shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
<div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/30">
<span className="text-2xl">🔍</span>
</div>
<h3 className="text-xl font-extrabold text-white mb-4">01. Discovery</h3>
<ul className="text-gray-400 text-sm space-y-3">
<li className="flex items-start gap-2">
<span className="text-purple-400 font-bold">•</span>
Stakeholder Interviews
</li>
<li className="flex items-start gap-2">
<span className="text-purple-400 font-bold">•</span>
User Persona Creation
</li>
<li className="flex items-start gap-2">
<span className="text-purple-400 font-bold">•</span>
Competitive Audit
</li>
</ul>
</div>

{/* PHASE 2: DESIGN */}

<div className="group bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-2xl p-8 hover:border-purple-500/30 transition-all ease-in-out duration-300 hover:-translate-y-1 shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
<div className="w-12 h-12 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6 border border-pink-500/30">
<span className="text-2xl">🎨</span>
</div>
<h3 className="text-xl font-extrabold text-white mb-4">02. Visual UI</h3>
<ul className="text-gray-400 text-sm space-y-3">
<li className="flex items-start gap-2">
<span className="text-pink-400 font-bold">•</span>
High-Fidelity Wireframes
</li>
<li className="flex items-start gap-2">
<span className="text-pink-400 font-bold">•</span>
Design Systems (Figma)
</li>
<li className="flex items-start gap-2">
<span className="text-pink-400 font-bold">•</span>
Interactive Prototyping
</li>
</ul>
</div>

{/* PHASE 3: BUILD */}

<div className="group bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-2xl p-8 hover:border-purple-500/30 transition-all ease-in-out duration-300 hover:-translate-y-1 shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
<div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30">
<span className="text-2xl">💻</span>
</div>
<h3 className="text-xl font-extrabold text-white mb-4">03. Development</h3>
<ul className="text-gray-400 text-sm space-y-3">
<li className="flex items-start gap-2">
<span className="text-blue-400 font-bold">•</span>
Clean Next.js Codebase
</li>
<li className="flex items-start gap-2">
<span className="text-blue-400 font-bold">•</span>
Responsive Tailwind Layouts
</li>
<li className="flex items-start gap-2">
<span className="text-blue-400 font-bold">•</span>
API & Database Integration
</li>
</ul>
</div>

</div>
</section>
{/* --- Volunteering & Community Impact Section --- */}
<section className="max-w-6xl mx-auto px-10 py-24 relative">
  <div className="flex flex-col md:flex-row justify-between items-start gap-12">
    <div className="md:w-1/3">
      <h2 className="text-3xl font-bold text-white mb-4">Volunteering & Open Source Contributions</h2>
      <p className="text-gray-400 leading-relaxed">
        Dedicated to giving back through design system engineering, community coordination, and STEM education initiatives.
      </p>
    </div>

    <div className="md:w-2/3 grid gap-8">
      {/* Role 1: DevLaunchers */}
      <div className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-2xl p-6 hover:border-purple-500/30 transition-all ease-in-out duration-300 hover:-translate-y-1 shadow-[0_4px_30px_rgba(0,0,0,0.2)] flex gap-6 items-start">
        <div className="text-3xl">⚙️</div>
        <div>
          <h3 className="text-xl font-bold text-white">Design System Engineer (Volunteer)</h3>
          <p className="text-blue-400 font-bold text-sm mb-2">DevLaunchers</p>
          <p className="text-gray-400 text-sm">
            Architecting modular, production-ready design token assets and highly accessible React components. Partnering with multi-functional open-source dev layers to maintain design continuity across global contributor pipelines.
          </p>
        </div>
      </div>

      {/* Role 2: Thokam */}
      <div className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-2xl p-6 hover:border-purple-500/30 transition-all ease-in-out duration-300 hover:-translate-y-1 shadow-[0_4px_30px_rgba(0,0,0,0.2)] flex gap-6 items-start">
        <div className="text-3xl">🤝</div>
        <div>
          <h3 className="text-xl font-bold text-white">Volunteer Coordinator</h3>
          <p className="text-green-400 font-bold text-sm mb-2">Thokam</p>
          <p className="text-gray-400 text-sm">
            Managed community outreach pipelines, structured event logistics, and coordinated local volunteer efforts to drive operational impact.
          </p>
        </div>
      </div>

      {/* Role 3: Bright Mind Enrichment Schools */}
      <div className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-2xl p-6 hover:border-purple-500/30 transition-all ease-in-out duration-300 hover:-translate-y-1 shadow-[0_4px_30px_rgba(0,0,0,0.2)] flex gap-6 items-start">
        <div className="text-3xl">🎓</div>
        <div>
          <h3 className="text-xl font-bold text-white">STEM Enrichment Volunteer</h3>
          <p className="text-purple-400 font-bold text-sm mb-2">Bright Mind Enrichment Schools</p>
          <p className="text-gray-400 text-sm">
            Facilitated educational learning pathways and interactive engineering exercises for students, fostering early curiosity in technical fields.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* --- Education & Professional Credentials Section --- */}
<section className="max-w-6xl mx-auto px-10 py-24 relative">
  <div className="flex flex-col md:flex-row justify-between items-start gap-12">
    <div className="md:w-1/3">
      <h2 className="text-3xl font-bold text-white mb-4">Education & Professional Credentials</h2>
      <p className="text-gray-400 leading-relaxed">
        Comprehensive training in AI development, full-stack engineering, and advanced computer science methodologies.
      </p>
    </div>

    <div className="md:w-2/3 grid gap-8">
      {/* Credential 1: Per Scholas AI */}
      <div className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-2xl p-6 hover:border-purple-500/30 transition-all ease-in-out duration-300 hover:-translate-y-1 shadow-[0_4px_30px_rgba(0,0,0,0.2)] flex gap-6 items-start">
        <div className="text-3xl">🤖</div>
        <div>
          <h3 className="text-xl font-bold text-white">AI Solution Developer Professional Certification</h3>
          <p className="text-indigo-400 font-bold text-sm mb-2">Per Scholas</p>
          <p className="text-gray-400 text-sm">
            Intensive training program focused on building end-to-end AI applications, model orchestration, and backend framework architectures.
          </p>
        </div>
      </div>

      {/* Credential 2: Heiwa */}
      <div className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-2xl p-6 hover:border-purple-500/30 transition-all ease-in-out duration-300 hover:-translate-y-1 shadow-[0_4px_30px_rgba(0,0,0,0.2)] flex gap-6 items-start">
        <div className="text-3xl">🎨</div>
        <div>
          <h3 className="text-xl font-bold text-white">AI/UX Product Design Fellow</h3>
          <p className="text-pink-400 font-bold text-sm mb-2">Heiwa (AI/UX PM Accelerator)</p>
          <p className="text-gray-400 text-sm">
            Selected for an intensive accelerator building 'Warm Tech'. Led end-to-end design and technical feature specs for an AI family platform. Built a 5-screen, COPPA-compliant onboarding flow, integrated privacy consent gates, implemented Confidence Indicators, and authored technical specifications for tiered model structures (Fast/Balanced/Deep models) utilizing a Soft Indigo & Warm Peach system.
          </p>
        </div>
      </div>

      {/* Credential 3: Per Scholas Java */}
      <div className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-2xl p-6 hover:border-purple-500/30 transition-all ease-in-out duration-300 hover:-translate-y-1 shadow-[0_4px_30px_rgba(0,0,0,0.2)] flex gap-6 items-start">
        <div className="text-3xl">☕</div>
        <div>
          <h3 className="text-xl font-bold text-white">Full Stack Java Developer Certification</h3>
          <p className="text-orange-400 font-bold text-sm mb-2">Per Scholas</p>
          <p className="text-gray-400 text-sm">
            Rigorous software engineering track specializing in enterprise Java ecosystems, Spring Boot architectures, relational databases, and full-stack integration patterns.
          </p>
        </div>
      </div>

      {/* Credential 4: MSCS */}
      <div className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-2xl p-6 hover:border-purple-500/30 transition-all ease-in-out duration-300 hover:-translate-y-1 shadow-[0_4px_30px_rgba(0,0,0,0.2)] flex gap-6 items-start">
        <div className="text-3xl">🎓</div>
        <div>
          <h3 className="text-xl font-bold text-white">Master of Science in Computer Science (MSCS)</h3>
          <p className="text-gray-300 font-bold text-sm mb-2">Graduate Degree</p>
          <p className="text-gray-400 text-sm">
            Advanced graduate coursework detailing software engineering methodologies, database architectures, and computational systems logic.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* --- Hire Me / CTA Section --- */}

<div className="mt-12 text-center">
<Link href="/projects" className="inline-flex items-center px-8 py-3 border-2 border-purple-500/30 text-purple-300 font-bold rounded-full hover:bg-purple-500/20 transition-all ease-in-out duration-300">
View All My Work <span className="ml-2">→</span>
</Link>
</div>


<section className="bg-purple-600/10 border border-purple-500/20 py-20 px-6 text-center text-white mt-20 rounded-t-3xl backdrop-blur-sm">
<div className="max-w-3xl mx-auto">
  
<h2 className="text-4xl md:text-5xl font-bold mb-6">
Let’s build something incredible together.
</h2>
<p className="text-xl mb-10 text-gray-300">
I’m currently looking for new opportunities in UI/UX Design and Full-Stack Development.
Whether you have a project in mind or just want to connect, I'd love to hear from you.
</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-6">
<button
onClick={copyEmail}
className={`px-10 py-4 rounded-full font-bold text-lg transition-all ease-in-out duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-95 shadow-[0_4px_30px_rgba(0,0,0,0.2)] min-w-[220px] ${copied ? 'bg-green-500 text-white' : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'}`}
>
{copied ? "✓ Email Copied!" : "Hire Me Now"}
</button>
<a
href="https://www.linkedin.com/in/kavitha-mynala12"
target="_blank"
rel="noopener noreferrer"
className="border-2 border-white/20 hover:border-white/40 px-10 py-4 rounded-full font-bold text-lg transition-all ease-in-out duration-300"
>
View LinkedIn
</a>
</div>
</div>

</section>

{/* --- Simple Footer --- */}

<footer className="bg-white/[0.02] border-t border-white/[0.05] py-12 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400">
<p className="font-medium">
© {new Date().getFullYear()} Kavitha Mynala. All rights reserved.
</p>
<div className="flex gap-8 font-semibold">
<a href="https://github.com/kavitha0507" className="hover:text-white transition-colors">GitHub</a>
<a href="https://www.linkedin.com/in/kavitha-mynala12" className="hover:text-purple-400 transition-colors">LinkedIn</a>
</div>
</div>
</footer>
</main>
);
}             
