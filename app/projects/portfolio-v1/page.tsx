"use client";
import React from 'react';
import Link from 'next/link';


export default function PortfolioV1() {
  return (
    <main className="min-h-screen bg-white p-10 pt-32 text-slate-900">
      <div className="max-w-4xl mx-auto">
        <Link href="/projects" className="text-blue-600 mb-8 inline-block">← Back to Projects</Link>
        <h1 className="text-4xl font-bold mb-4 text-green-700">Dynamic CRUD Portfolio</h1>
        <p className="text-xl text-slate-500 mb-12">Java SpringBoot & SQL Backend Implementation</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Full-Stack Architecture</h2>
            <p className="text-lg leading-relaxed mb-6">
              Unlike static portfolios, this site uses a <strong>Java SpringBoot REST API</strong> 
              connected to a <strong>MySQL database</strong> to manage content dynamically.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-slate-100 rounded-lg font-bold">Frontend: Tailwind CSS</div>
              <div className="p-4 bg-slate-100 rounded-lg font-bold">Backend: SpringBoot</div>
              <div className="p-4 bg-slate-100 rounded-lg font-bold">DB: SQL / Hibernate</div>
            </div>
          </section>

          <section className="bg-slate-900 text-white p-8 rounded-2xl">
            <h2 className="text-xl font-bold mb-4 text-green-400">Database Schema (SQL)</h2>
            <p className="text-slate-400 mb-4 italic">// Defining the project entity table</p>
            <code className="text-sm font-mono block">
              CREATE TABLE projects ( <br/>
              &nbsp;&nbsp;id INT PRIMARY KEY AUTO_INCREMENT, <br/>
              &nbsp;&nbsp;title VARCHAR(255), <br/>
              &nbsp;&nbsp;category VARCHAR(50), <br/>
              &nbsp;&nbsp;description TEXT <br/>
              );
            </code>
          </section>
        </div>
      </div>
    </main>
  );
}