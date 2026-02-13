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
    <section id="features" ref={sectionRef} className="py-14 md:py-20 bg-white border-t border-gray-100">
      <div className="container-custom">
        <div ref={contentRef} className="max-w-2xl">
          <h2 className="font-display font-bold text-xl md:text-2xl text-gray-900 mb-6 leading-snug">
            You&apos;re great at what you do, but your website doesn&apos;t reflect it?
          </h2>

          <ul className="space-y-3 mb-6">
            {problems.map((problem, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-600 text-sm">{problem}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-600 text-sm leading-relaxed">
            For high-ticket services, this is <span className="font-semibold text-gray-900">NOT</span> a design issue. It&apos;s a positioning problem – a clarity deficit.
          </p>
        </div>
      </div>
    </section>
  )
}