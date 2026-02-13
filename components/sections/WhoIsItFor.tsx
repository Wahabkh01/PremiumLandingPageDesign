'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function WhoIsItFor() {
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

  const whoIsItFor = [
    'High-ticket coaches & consultants',
    'Experts charging premium rates',
    'Professionals who value clarity above flashy design',
    'Brands that want to feel elite, not cheap or templated',
  ]

  const whoIsNotFor = [
    'Low ticket offers',
    'Template-based websites',
    'Demand looking for quick, cheap design',
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-24 mb-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 max-w-4xl mx-auto">
          {/* Who This Is For - White bg */}
          <div className="bg-white py-10 px-8 md:px-12" ref={contentRef}>
            <h3 className="font-display font-bold text-lg md:text-xl text-gray-900 mb-6">
              Who This Is For
            </h3>

            <ul className="space-y-3">
              {whoIsItFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Who This Is NOT For - Gray bg */}
          <div className="bg-gray-50 py-10 px-8 md:px-12">
            <h3 className="font-display font-bold text-lg md:text-xl text-gray-900 mb-6">
              Who This Is Not For
            </h3>

            <ul className="space-y-3">
              {whoIsNotFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}