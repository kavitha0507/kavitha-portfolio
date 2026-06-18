"use client";

import React from 'react';
import Link from 'next/link';

export default function MediSyncAI() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 p-10 pt-32 text-slate-900 dark:text-slate-100">
      <div className="max-w-5xl mx-auto">
        {/* Navigation */}
        <Link href="/projects" className="text-blue-600 hover:underline mb-8 inline-block font-medium">
          ← Back to Projects
        </Link>
        
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            MediSync AI: Personalized Health Assistant Powered by Artificial Intelligence
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            An intelligent, privacy-conscious health assistant utilizing localized FastAPI routing and LangChain context orchestration to transform complex AI inference into trusted visual health insights.
          </p>
        </header>

        {/* Stack Tags */}
        <section className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-800">React</span>
            <span className="bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-200 dark:border-cyan-800">Tailwind CSS</span>
            <span className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-semibold border border-green-200 dark:border-green-800">FastAPI (Python)</span>
            <span className="bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-semibold border border-purple-200 dark:border-purple-800">LangChain</span>
            <span className="bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-semibold border border-orange-200 dark:border-orange-800">Groq AI (Llama 3.3)</span>
            <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-full text-sm font-semibold border border-slate-300 dark:border-slate-700">SQLite</span>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="mb-16">
          <div className="bg-red-50 dark:bg-red-900/20 p-12 rounded-3xl border-2 border-red-200 dark:border-red-800">
            <h2 className="text-3xl font-bold mb-6 text-red-800 dark:text-red-300">The Challenge: Medical Information Overload</h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              <p>
                Modern health applications face a critical dilemma: users are overwhelmed by metric density, lack instantaneous personalized diet consultation, and require strict adherence to user data privacy parameters.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-red-100 dark:border-red-900">
                  <div className="text-3xl mb-3">📊</div>
                  <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">Metric Density</h3>
                  <p className="text-sm">Complex health data presented without clear visual hierarchy creates cognitive overload and decision paralysis.</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-red-100 dark:border-red-900">
                  <div className="text-3xl mb-3">⏱️</div>
                  <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">Instant Consultation Gap</h3>
                  <p className="text-sm">Users need immediate, personalized dietary guidance rather than generic health information.</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-red-100 dark:border-red-900">
                  <div className="text-3xl mb-3">🔒</div>
                  <h3 className="font-bold text-red-700 dark:text-red-400 mb-2">Privacy Parameters</h3>
                  <p className="text-sm">Strict data privacy requirements conflict with the need for personalized AI-driven health insights.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Walkthrough */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">Architecture Walkthrough</h2>
          <div className="bg-slate-50 dark:bg-slate-800 p-12 rounded-3xl border border-slate-200 dark:border-slate-700">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Client-Side UI Layer</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    React frontend with Tailwind CSS provides an accessible, responsive interface. Client-side state management handles user inputs and prepares data for API transmission with real-time validation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Serverless FastAPI Orchestration</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Decoupled FastAPI endpoints (/bmi, /diet, /advise) handle specific health calculations and AI requests. Each endpoint is optimized for speed and modularity, enabling independent scaling and maintenance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">LangChain State-Tracking Architecture</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    LangChain orchestrates complex AI workflows, maintaining conversation context and state across multiple interactions. This enables coherent, context-aware health consultations that remember user preferences and history.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Groq AI Inference Endpoints</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    High-speed Groq AI with Llama 3.3 provides sub-second inference for diet recommendations and health advice. The optimized model architecture ensures rapid response times while maintaining accuracy and safety.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-slate-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Optimized SQLite Storage</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Local SQLite database stores user health metrics, diet history, and preferences with full privacy compliance. Indexed queries ensure fast retrieval while maintaining data sovereignty on user devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI/UX Breakthroughs */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">AI/UX Breakthroughs</h2>
          <div className="space-y-8">
            {/* Breakthrough 1 */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-10 rounded-3xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-start gap-6">
                <div className="text-4xl">🔍</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-300">Client-Side Regex Parsing for Automated Data Extraction</h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Engineered sophisticated regular expression patterns that automatically extract and structure health metrics from unstructured user input. This enables real-time validation and preprocessing before data reaches the AI layer, reducing latency and improving accuracy.
                  </p>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-blue-100 dark:border-blue-900">
                    <code className="text-sm text-blue-700 dark:text-blue-400">
                      /bmi: (\d+(?:\.\d+)?)\s*(kg|lbs)/i → Automated weight unit conversion
                    </code>
                  </div>
                </div>
              </div>
            </div>

            {/* Breakthrough 2 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-10 rounded-3xl border border-green-200 dark:border-green-800">
              <div className="flex items-start gap-6">
                <div className="text-4xl">🎨</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">Dynamic, High-Accessibility Color Bands</h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                    Created accessibility-first color band system that maps calculated BMI metrics to intuitive visual indicators (Green/Yellow/Red alerts). The color palette exceeds WCAG AAA standards for contrast ratios, ensuring clarity for users with visual impairments.
                  </p>
                  <div className="flex gap-4">
                    <div className="flex-1 bg-green-500 text-white p-4 rounded-lg text-center font-bold">
                      <div className="text-2xl mb-1">18.5 - 24.9</div>
                      <div className="text-sm">Healthy Range</div>
                    </div>
                    <div className="flex-1 bg-yellow-500 text-white p-4 rounded-lg text-center font-bold">
                      <div className="text-2xl mb-1">25 - 29.9</div>
                      <div className="text-sm">Overweight</div>
                    </div>
                    <div className="flex-1 bg-red-500 text-white p-4 rounded-lg text-center font-bold">
                      <div className="text-2xl mb-1">30+</div>
                      <div className="text-sm">Obese Range</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Breakthrough 3 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-10 rounded-3xl border border-purple-200 dark:border-purple-800">
              <div className="flex items-start gap-6">
                <div className="text-4xl">💾</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-300">Contextual Persistence for Diet Tracking</h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Implemented intelligent context management that maintains dietary preferences, restrictions, and goals across sessions. The system remembers user-specific parameters (allergies, caloric targets, cuisine preferences) to provide increasingly personalized recommendations over time.
                  </p>
                  <div className="mt-6 grid md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-purple-100 dark:border-purple-900">
                      <div className="font-bold text-purple-700 dark:text-purple-400 mb-2">Session Memory</div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Maintains conversation context for coherent multi-turn interactions</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-purple-100 dark:border-purple-900">
                      <div className="font-bold text-purple-700 dark:text-purple-400 mb-2">Long-Term Preferences</div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Stores dietary goals and restrictions for personalized AI responses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 dark:border-slate-800 pt-8 mt-20">
          <div className="flex justify-between items-center">
            <p className="text-slate-500 dark:text-slate-400">
              Role: AI Solution Developer & UI/UX Engineer
            </p>
            <Link href="/projects" className="text-blue-600 hover:underline font-medium">
              View All Projects →
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
