'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Recommendation() {
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
            stagger: 0.12,
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

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: elementPosition - headerHeight, behavior: 'smooth' })
    }
  }

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl">
          <div ref={contentRef}>
            <h2 className="font-display font-bold text-xl md:text-2xl text-gray-900 mb-4 leading-snug">
              Ready to move forward? Or want my recommendation first?
            </h2>
            
            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
              Whether you&apos;ve spotted the right offer or want an expert opinion before committing, the next step is the same: a short call to map what will actually move your business forward.
            </p>

            <p className="text-sm text-gray-600 mb-6">
              Incase you are absolutely certain, you can click &quot;Place Order&quot; to get started!
            </p>

            <div className="flex flex-row gap-3">
              <button
                onClick={() => scrollToSection('#how-to-order')}
                className="px-6 py-2.5 bg-purple-600 text-white rounded font-medium text-sm hover:bg-purple-700 transition-all duration-300"
              >
                Book a Free Call
              </button>
              <button
                onClick={() => scrollToSection('#how-to-order')}
                className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded font-medium text-sm hover:border-gray-400 transition-all duration-300"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}