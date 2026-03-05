"use client";
import React from 'react';
import Link from 'next/link';

export default function ImageToSketch() {
  return (
    <main className="min-h-screen bg-slate-900 p-10 pt-32 text-white">
      <div className="max-w-4xl mx-auto">
        <Link href="/projects" className="text-blue-400 mb-8 inline-block">← Back to Projects</Link>
        <h1 className="text-4xl font-bold mb-4">Image to Pencil Sketch</h1>
        <p className="text-xl text-slate-400 mb-10">Python-based Computer Vision Project</p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-3 text-blue-400">Tech Stack</h2>
            <ul className="list-disc pl-5 text-slate-300">
              <li>Python 3.x</li>
              <li>OpenCV Library</li>
              <li>NumPy</li>
            </ul>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-3 text-blue-400">Process</h2>
            <p className="text-slate-300">The script converts a color image to grayscale, inverts it, applies a Gaussian Blur, and performs a "color dodge" to create the sketch effect.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Code Logic Breakdown</h2>
        <pre className="bg-black p-6 rounded-lg text-sm font-mono overflow-x-auto text-green-400">
{`# Core Logic Snippet
img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
img_invert = cv2.bitwise_not(img_gray)
img_smoothing = cv2.GaussianBlur(img_invert, (21, 21), 0)
final_sketch = cv2.divide(img_gray, 255 - img_smoothing, scale=256.0)`}
        </pre>
      </div>
    </main>
  );
}