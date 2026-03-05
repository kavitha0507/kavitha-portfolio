"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component

export default function PlantDiagnosis() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 p-10 pt-32 text-slate-900 dark:text-slate-100">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <Link href="/projects" className="text-blue-600 hover:underline mb-8 inline-block font-medium">
          ← Back to Projects
        </Link>
        
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Plant Diagnosis App</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">UI/UX Case Study • Google Design Certificate</p>
        </header>

        {/* Case Study Content */}
        <section className="space-y-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-green-600">The Challenge</h2>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                Designing a mobile-first solution for plant owners to diagnose health issues 
                instantly using AI-powered scanning.
              </p>
            </div>
            
            {/* MAIN IMAGE: Replace 'plant-hero.png' with your actual filename */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <Image 
                src="/images/main-img.png" 
                alt="Mobile mockup of the Plant Diagnosis App hero screen"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Design Process Section */}
          <div className="bg-slate-50 dark:bg-slate-800 p-10 rounded-3xl">
            <h2 className="text-2xl font-bold mb-8">Process & Research</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* TWO SMALLER IMAGES: Replace with your actual filenames */}
              {/* Container for the Wireframes */}
              {/* Container for the Wireframes */}
<div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg bg-white">
  <Image 
    src="/images/paper-wireframes.png" 
    alt="Initial ideation showing paper wireframes"
    fill
    className="object-contain p-6" // Adds padding so image doesn't touch edges
  />
</div>

              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg bg-white">
                <Image 
                  src="/images/hi-fi-wireframes.png" 
                  alt="High-fidelity wireframes showcasing the final UI design for the plant diagnosis feature"
                  fill
                  className="object-contain p-4" 
                />
              </div>
            </div>
          </div>
        </section>
        <section className="mt-16 bg-green-50 p-8 rounded-2xl border border-green-100">
  <h2 className="text-2xl font-bold mb-6 text-green-800">Usability Studies & Iterations</h2>
  <div className="grid md:grid-cols-2 gap-8">
    <div>
      <h3 className="font-bold text-green-700 mb-2">Finding 1: Scanning Confusion</h3>
      <p className="text-sm text-slate-600 italic">"I wasn't sure if the app was actually taking a photo or just looking at the plant."</p>
      <p className="mt-2 text-sm text-slate-700"><strong>Solution:</strong> Added a visual scanning animation and haptic feedback to confirm the AI is processing the leaf.</p>
    </div>
    <div>
      <h3 className="font-bold text-green-700 mb-2">Finding 2: Information Overload</h3>
      <p className="text-sm text-slate-600 italic">"The diagnosis screen had too much text; I just wanted to know how to fix my plant quickly."</p>
      <p className="mt-2 text-sm text-slate-700"><strong>Solution:</strong> Redesigned the results page with a "Quick Fix" card at the top for immediate action.</p>
    </div>
  </div>
</section>
<section className="mt-16 mb-20">
  <h2 className="text-2xl font-bold mb-6 border-b-2 border-green-200 pb-2">Reflections & Growth</h2>
  <div className="prose max-w-none text-slate-700 space-y-4">
    <p>
      <strong>Designing for Trust:</strong> I realized that when using AI, the user needs to feel in control. Adding haptic feedback and clear status updates during the "scanning" phase was crucial for building user confidence.
    </p>
    <p>
      <strong>Iterative Design:</strong> This project reinforced the importance of the "Test and Iterate" loop. My initial designs were too focused on the technology, but user feedback pulled me back to focusing on the human problem.
    </p>
  </div>
</section>
      </div>
    </main>
  );
}