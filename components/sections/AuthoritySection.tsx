 'use client'

import { useRef } from 'react'
import React from 'react'
import Image from 'next/image'
export default function AuthoritySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  // Scroll-triggered entrance animations removed for static site

  return (
    <section ref={sectionRef} className="section-spacing py-16 md:py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start p-8 md:p-12 bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
          {/* Left Content */}
          <div ref={contentRef}>
            <h2 className="font-display font-bold text-xl md:text-3xl text-gray-900 mb-6">
              Your Designer for Authority-Driven Landing Pages
            </h2>

            <p 
              className="font-satoshi text-gray-600 text-lg mb-4"
              style={{ fontWeight: 500, lineHeight: '150%' }}
            >
              Hi, I am Arslan. Your premium landing page designer, focused on minimalist, authority-driven digital experiences.
            </p>

            <p 
              className="font-satoshi text-gray-600 text-lg mb-4"
              style={{ fontWeight: 500, lineHeight: '150%' }}
            >
              I work with consultants and coaches who don&apos;t want to look louder. They want to look clearer.
            </p>

            <p 
              className="font-satoshi text-gray-600 text-lg"
              style={{ fontWeight: 700, lineHeight: '150%' }}
            >
              Minimalism isn&apos;t a style for me. It&apos;s how authority communicates.
            </p>
          </div>

          {/* Right Image */}
          <div ref={imageRef} className="flex justify-end">
            <div className="w-full max-w-xl relative rounded-xl overflow-hidden">
              <Image
                src="/images/banda2.webp"
                alt="Muhammad Arslan - Designer"
                width={480}
                height={360}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}