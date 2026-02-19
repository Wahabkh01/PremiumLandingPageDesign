'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function FinalCTA() {
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

  return (
    <section ref={sectionRef} className="section-spacing py-16 md:py-24 bg-[#F9F9F9]">
      <div className="container-custom">
        <div
          ref={contentRef}
          className="max-w-8xl"
        >
          <h2 className="font-display font-bold text-gray-900 mb-4" style={{ fontSize: '36px' }}>
            If your expertise is premium, your website should be too.
          </h2>

          <p className="font-satoshi font-bold text-gray-700" style={{ fontSize: '20px' }}>
            Book a free call and let's see if we're a good fit.
          </p>

          <div className="flex flex-col sm:flex-row" style={{ marginTop: '48px', gap: '20px' }}>
            <button
              onClick={() => {
                window.open('#', '_blank')
              }}
              className="px-[30px] py-2.5 bg-[#b242af] text-white rounded-lg font-medium hover:bg-[#8f3590] transition-all duration-300"
            >
              Book a Free Call
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('offers')
                if (el) {
                  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
                }
              }}
              className="px-[30px] py-2.5 border border-gray-300 text-gray-900 rounded-lg font-medium hover:border-gray-400 transition-all duration-300"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}