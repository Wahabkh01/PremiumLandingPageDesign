 'use client'

import { useRef } from 'react'
import React from 'react'
export default function Recommendation() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Scroll-triggered animations removed for static page

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
    <section ref={sectionRef} className="section-spacing py-16 md:py-24 bg-[#F9F9F9]">
      <div className="container-custom">
        <div>
          <div ref={contentRef}>
            <h2 className="font-display font-bold text-[38px] text-gray-900 mb-4 leading-snug">
              Ready to move forward? Or want my recommendation first?
            </h2>
            
            <p className="font-satoshi font-bold text-md text-gray-600 mb-3 leading-relaxed">
              Whether you&apos;ve spotted the right offer or want an expert opinion before committing, the next step is the same: a short call to map what will actually move your business forward.
            </p>

            <p className="font-satoshi font-bold text-md text-gray-600 mb-0">
              Incase you are absolutely certain, you can click &quot;Place Order&quot; to get started!
            </p>

            <div className="flex flex-row gap-[20px] mt-[48px]">
              <button
                onClick={() => scrollToSection('#how-to-order')}
                className="px-[30px] py-2.5 bg-[#b242af] text-white rounded font-medium text-sm hover:bg-[#8f3590] transition-all duration-300"
              >
                Book a Free Call
              </button>
              <button
                onClick={() => scrollToSection('#how-to-order')}
                className="px-[30px] py-2.5 border border-gray-300 text-gray-700 rounded font-medium text-sm hover:border-gray-400 transition-all duration-300"
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