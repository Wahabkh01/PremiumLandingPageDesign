 'use client'

import { useRef } from 'react'
import React from 'react'
export default function PremiumSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Scroll-triggered animations removed for static page

  return (
    <section ref={sectionRef} className="section-spacing py-12 md:py-16 bg-white">
      <div className="container-custom">
        <div ref={contentRef} className="max-w-2xl mx-auto text-left">
          <h2 className="font-display font-bold text-xl md:text-4xl text-gray-900 mb-6">
            Premium Isn&apos;t Loud. Premium Is Clear.
          </h2>

          <p className="text-gray-600 text-md mb-4">Your landing page should:</p>

          <ul className="space-y-1.5 mb-6">
            {[
              'Instantly communicate authority',
              'Speak directly to your ideal client',
              'Remove friction from decision-making',
              'Feel calm, intentional and confident',
            ].map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span className="font-satoshi font-medium text-gray-600 text-md">{point}</span>
              </li>
            ))}
          </ul>

          <p className="font-satoshi font-bold text-gray-600 text-lg leading-relaxed max-w-full">
            That&apos;s the system I design with. See how this translates into execution below.
          </p>
        </div>
      </div>
    </section>
  )
}