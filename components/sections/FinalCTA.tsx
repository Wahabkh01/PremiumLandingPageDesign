 'use client'

import { useRef } from 'react'
import React from 'react'
export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Scroll-triggered animations removed for static page

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
            <a
              href="https://calendly.com/premiumlandingpagedesigner/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-[30px] py-2.5 bg-[#b242af] text-white rounded-lg font-medium hover:bg-[#8f3590] transition-all duration-300"
            >
              Book a Free Call
            </a>
            <a
              href="#how-to-order"
              onClick={() => {
                const el = document.getElementById('how-to-order')
                if (el) {
                  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
                }
              }}
              className="px-[30px] py-2.5 border border-gray-300 text-gray-900 rounded-lg font-medium hover:border-gray-400 transition-all duration-300"
            >
              Place Order
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}