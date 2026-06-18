"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MedicationReminder() {
  return (
    <main className="min-h-screen bg-white p-10 pt-32 text-slate-900">
      <div className="max-w-4xl mx-auto">
        <Link href="/projects" className="text-blue-600 mb-8 inline-block">← Back to Projects</Link>
        <h1 className="text-4xl font-bold mb-4 text-blue-800">Medication Reminder App</h1>
        <p className="text-xl text-slate-500 mb-10 italic">A high-accessibility design for healthcare management.</p>
{/* Replace your current section with this: */}
<section className="grid md:grid-cols-3 gap-10 mb-16">
  {/* Left Side: Problem & Solution (Takes up 2 columns) */}
  <div className="md:col-span-2 space-y-10">
    <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
      <h2 className="text-xl font-bold mb-4 text-blue-700">The Problem</h2>
      <p className="leading-relaxed">Elderly patients often miss medication doses due to complex schedules and low-contrast mobile interfaces that are hard to navigate.</p>
    </div>
    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
      <h2 className="text-xl font-bold mb-4">The Solution</h2>
      <p className="leading-relaxed">I designed a solution with <strong>WCAG-compliant contrast ratios</strong>, voice-command reminders, and a simplified navigation bar.</p>
    </div>
  </div>

  {/* Right Side: Sidebar (Takes up 1 column) */}
  <aside className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm h-fit">
    <div className="mb-6">
      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">My Role</h3>
      <p className="font-medium">Lead UI/UX Designer</p>
    </div>
    <div className="mb-6">
      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Tools Used</h3>
      <div className="flex flex-wrap gap-2">
        <span className="bg-slate-100 px-3 py-1 rounded-full text-xs font-semibold">Figma</span>
        <span className="bg-slate-100 px-3 py-1 rounded-full text-xs font-semibold">Tailwind CSS</span>
        <span className="bg-slate-100 px-3 py-1 rounded-full text-xs font-semibold">Next.js</span>
      </div>
    </div>
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Timeline</h3>
      <p className="font-medium">4 Weeks (Oct 2025)</p>
    </div>
  </aside>
</section>          

        <div className="space-y-12">
  <h2 className="text-2xl font-bold border-b-2 border-blue-200 pb-2">Design Process</h2>
  <p className="text-lg">Following the Google UX methodology, I created user personas for retirees and performed usability testing to refine the notification system.</p>
        
  {/* REPLACE THE DASHED BOX WITH THIS: */}
  <div className="relative w-full h-48 bg-gradient-to-br from-blue-600/10 to-indigo-600/20 rounded-t-2xl flex items-center justify-center overflow-hidden border-b border-white/5 dynamic-card-glow">
    {/* Blurred neon background accent ring */}
    <div className="absolute w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
    
    {/* Premium medical icon */}
    <div className="relative z-10 flex flex-col items-center">
      <svg className="text-blue-400 w-12 h-12 stroke-[1.5] animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        <circle cx="12" cy="12" r="4"/>
      </svg>
      
      {/* Mini dashboard mock row */}
      <div className="flex gap-1 absolute bottom-3 left-3 right-3">
        <div className="bg-white/5 border border-white/10 rounded px-2 py-0.5 text-[10px] text-blue-300">8:00 AM</div>
        <div className="bg-white/5 border border-white/10 rounded px-2 py-0.5 text-[10px] text-blue-300">Reminder Active</div>
        <div className="bg-white/5 border border-white/10 rounded px-2 py-0.5 text-[10px] text-blue-300">Adherence: 98%</div>
      </div>
    </div>
  </div>
</div>
{/* Key Design Features Section */}
<section className="mt-12 grid md:grid-cols-3 gap-8">
  <div className="space-y-3">
    <div className="text-2xl">👁️</div>
    <h3 className="font-bold text-blue-800">Visual Clarity</h3>
    <p className="text-sm text-slate-600 leading-relaxed">
      Used large, 20pt+ font sizes and high-contrast color palettes to ensure readability for users with visual impairments.
    </p>
  </div>
  
  <div className="space-y-3">
    <div className="text-2xl">🎯</div>
    <h3 className="font-bold text-blue-800">Large Touch Targets</h3>
    <p className="text-sm text-slate-600 leading-relaxed">
      Designed buttons with a minimum height of 48dp to accommodate users with limited fine motor skills.
    </p>
  </div>
  
  <div className="space-y-3">
    <div className="text-2xl">🔔</div>
    <h3 className="font-bold text-blue-800">Smart Alerts</h3>
    <p className="text-sm text-slate-600 leading-relaxed">
      Simple "Taken" or "Snooze" options to reduce cognitive load and prevent accidental dismissals of important reminders.
    </p>
  </div>
</section>
<section className="mt-16 bg-slate-50 p-8 rounded-2xl border border-slate-200">
  <h2 className="text-2xl font-bold mb-6">Usability Testing & Iteration</h2>
  <div className="grid md:grid-cols-2 gap-8">
    <div>
      <h3 className="font-bold text-blue-800 mb-2">Round 1 Findings</h3>
      <p className="text-sm text-slate-600 italic">"The 'Add Medicine' button was too small for me to tap accurately."</p>
      <p className="mt-2 text-sm text-slate-700"><strong>Change:</strong> Increased the touch target size from 40dp to 56dp to improve motor-skill accessibility.</p>
    </div>
    <div>
      <h3 className="font-bold text-blue-800 mb-2">Round 2 Findings</h3>
      <p className="text-sm text-slate-600 italic">"I wasn't sure if my medicine was actually saved."</p>
      <p className="mt-2 text-sm text-slate-700"><strong>Change:</strong> Added a success confirmation screen with a clear green checkmark after saving.</p>
    </div>
  </div>
</section>
<section className="mt-16 mb-20">
  <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-200 pb-2">Lessons Learned</h2>
  <div className="prose max-w-none text-slate-700 space-y-4">
    <p>
      <strong>Accessibility isn't an "add-on":</strong> Designing for elderly users taught me that WCAG standards benefit everyone. What started as a fix for visual impairments resulted in a cleaner, more intuitive interface for all users.
    </p>
    <p>
      <strong>Technical Constraints:</strong> Working as a developer-designer, I learned to balance complex features (like voice reminders) with the performance limits of a mobile web app.
    </p>
  </div>
</section>
      </div>
    </main>
  );
} 