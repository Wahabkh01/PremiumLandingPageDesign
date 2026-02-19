'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      if (contentRef.current?.children.length) {
        gsap.fromTo(
          contentRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const problems = [
    'Your message feels diluted',
    "Your offer isn't immediately clear",
    "Visitors don't feel your authority",
    'You attract the wrong leads (or none at all)',
  ]

  return (
    <section id="features" ref={sectionRef} className="py-14 md:py-20 bg-white border-t border-b border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
      <div className="container-custom">
        <div ref={contentRef}>
          <h2 className="font-display font-bold text-xl md:text-4xl text-gray-900 mb-6 leading-snug">
            You&apos;re great at what you do, but your website doesn&apos;t reflect it?
          </h2>

          <ul className="space-y-2 mb-6">
            {problems.map((problem, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-gray-900 text-md">•</span>
                <span className="font-satoshi font-medium text-gray-600 text-md">{problem}</span>
              </li>
            ))}
          </ul>

          <p className="font-satoshi font-bold text-gray-600 text-lg leading-relaxed max-w-full">
            For high-ticket services, this is <span className="font-semibold text-gray-900">NOT</span> a design issue. It&apos;s a positioning problem – a clarity deficit.
          </p>
        </div>
      </div>
    </section>
  )
}