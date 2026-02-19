'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function PremiumSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      if (contentRef.current?.children.length) {
        gsap.fromTo(
          contentRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
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