'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Offers() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      )

      if (cardsRef.current?.children.length) {
        gsap.fromTo(
          cardsRef.current.children,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const scrollToOrder = () => {
    const el = document.getElementById('how-to-order')
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
    }
  }

  return (
    <section id="offers" ref={sectionRef} className="section-spacing py-16 md:py-24 bg-white">
      <div className="container-custom">
        <h2
          ref={headingRef}
          className="font-display font-bold text-2xl md:text-3xl text-center text-gray-900 mb-12"
        >
          My Offers
        </h2>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">
          {/* Offer 1 - Free Audit */}
          <div className="bg-white p-8 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col h-full min-h-[400px]">
            <h3 className="font-bold text-[28px] text-gray-900 mb-2">
              The 10-Minute Landing Page Clarity Audit
            </h3>
            <p className="font-satoshi text-gray-600 text-xs mb-4 min-h-[48px]">
              A 10-minute expert review that reveals exactly what&apos;s hurting the conversion.
            </p>
            
            <span className="inline-block border border-gray-300 text-gray-600 text-xs px-3 py-1 rounded mb-4 w-fit">
              Free
            </span>

            <ul className="space-y-0">
              <li className="flex items-center gap-2 border-b border-gray-100 pb-3 pt-3">
                <span className="text-gray-400">•</span>
                <span className="font-satoshi text-gray-600 text-lg">5—7 bullet points</span>
              </li>
              <li className="flex items-center gap-2 border-b border-gray-100 pb-3 pt-3">
                <span className="text-gray-400">•</span>
                <span className="font-satoshi text-gray-600 text-lg">Loom video or written breakdown</span>
              </li>
              <li className="flex items-center gap-2 border-b border-gray-100 pb-3 pt-3">
                <span className="text-gray-400">•</span>
                <span className="font-satoshi text-gray-600 text-lg">Clear &quot;what&apos;s hurting conversion&quot;</span>
              </li>
            </ul>

            <button
              onClick={scrollToOrder}
              className="w-full py-3 border border-gray-300 text-gray-700 rounded-full font-medium text-sm hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 mt-6"
            >
              Apply for a Free Clarity Audit
            </button>
          </div>

          {/* Offer 2 - Clarity Upgrade */}
          <div className="bg-white p-8 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col h-full min-h-[400px]">
            <h3 className="font-bold text-[28px] text-gray-900 mb-2">
              The Landing Page Clarity Upgrade
            </h3>
            <p className="font-satoshi text-gray-600 text-xs mb-4 min-h-[48px]">
              A focused redesign that sharpens your message and improves conversion without rebuilding everything.
            </p>
            
            <span className="inline-block bg-[#f5d8f4] text-[#b242af] text-xs px-3 py-1 rounded mb-2 w-fit">
              Max Value
            </span>
            
            <div className="mb-4">
              <span className="text-2xl font-bold text-gray-900">$1499</span>
            </div>

            <ul className="space-y-0 flex-grow">
              <li className="flex items-center gap-2 border-b border-gray-100 pb-3 pt-3">
                <span className="text-gray-400">•</span>
                <span className="font-satoshi text-gray-600 text-md">1 landing page redesign</span>
              </li>
              <li className="flex items-center gap-2 border-b border-gray-100 pb-3 pt-3">
                <span className="text-gray-400">•</span>
                <span className="font-satoshi text-gray-600 text-md">Clear message hierarchy</span>
              </li>
              <li className="flex items-center gap-2 border-b border-gray-100 pb-3 pt-3">
                <span className="text-gray-400">•</span>
                <span className="font-satoshi text-gray-600 text-md">Conversion-focused structure</span>
              </li>
              <li className="flex items-center gap-2 border-b border-gray-100 pb-3 pt-3">
                <span className="text-gray-400">•</span>
                <span className="font-satoshi text-gray-600 text-md">Desktop + mobile design</span>
              </li>
              <li className="flex items-center gap-2 border-b border-gray-100 pb-3 pt-3">
                <span className="text-gray-400">•</span>
                <span className="font-satoshi text-gray-600 text-md">1 revision round</span>
              </li>
            </ul>
          </div>

          {/* Offer 3 - Authority System */}
          <div className="bg-white p-8 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col h-full min-h-[400px]">
            <h3 className="font-bold text-[28px] text-gray-900 mb-2">
              The Authority Landing Page System
            </h3>
            <p className="font-satoshi text-gray-600 text-xs mb-4 min-h-[48px]">
              A complete strategy-led redesign that positions you as the obvious choice.
            </p>
            
            <span className="inline-block bg-[#b242af] text-white text-xs px-3 py-1 rounded mb-2 w-fit">
              Premium
            </span>
            
            <div className="mb-4">
              <span className="text-2xl font-bold text-gray-900">$3999</span>
            </div>

            {/* Strategy Section */}
            <div className="mb-4">
              <div className="flex items-center gap-1.5 mb-2">
                <span>🧠</span>
                <span className="font-semibold text-sm text-gray-900">Strategy</span>
              </div>
              <ul className="space-y-0 ml-5">
                <li className="flex items-center gap-2 border-b border-gray-100 pb-2 pt-2">
                  <span className="text-gray-400">•</span>
                  <span className="font-satoshi text-gray-600 text-md">Deep in-depth audit</span>
                </li>
                <li className="flex items-center gap-2 border-b border-gray-100 pb-2 pt-2">
                  <span className="text-gray-400">•</span>
                  <span className="font-satoshi text-gray-600 text-md">Clear offer & positioning</span>
                </li>
                <li className="flex items-center gap-2 border-b border-gray-100 pb-2 pt-2">
                  <span className="text-gray-400">•</span>
                  <span className="font-satoshi text-gray-600 text-md">CRO-based messaging hierarchy</span>
                </li>
                <li className="flex items-center gap-2 border-b border-gray-100 pb-2 pt-2">
                  <span className="text-gray-400">•</span>
                  <span className="font-satoshi text-gray-600 text-md">Conversion logic</span>
                </li>
                <li className="flex items-center gap-2 border-b border-gray-100 pb-2 pt-2">
                  <span className="text-gray-400">•</span>
                  <span className="font-satoshi text-gray-600 text-md">Identify drop-off points, trust gaps, and clarity issues</span>
                </li>
              </ul>
            </div>

            {/* Design Section */}
            <div className="mb-4">
              <div className="flex items-center gap-1.5 mb-2">
                <span>🎨</span>
                <span className="font-semibold text-sm text-gray-900">Design</span>
              </div>
              <ul className="space-y-0 ml-5">
                <li className="flex items-center gap-2 border-b border-gray-100 pb-2 pt-2">
                  <span className="text-gray-400">•</span>
                  <span className="font-satoshi text-gray-600 text-md">Conversion-focused landing page design</span>
                </li>
                <li className="flex items-center gap-2 border-b border-gray-100 pb-2 pt-2">
                  <span className="text-gray-400">•</span>
                  <span className="font-satoshi text-gray-600 text-md">Responsive (desktop + mobile)</span>
                </li>
                <li className="flex items-center gap-2 border-b border-gray-100 pb-2 pt-2">
                  <span className="text-gray-400">•</span>
                  <span className="font-satoshi text-gray-600 text-md">Premium visual language</span>
                </li>
                <li className="flex items-center gap-2 border-b border-gray-100 pb-2 pt-2">
                  <span className="text-gray-400">•</span>
                  <span className="font-satoshi text-gray-600 text-md">Layouts to improve scannability, attention flow, and CTA visibility</span>
                </li>
              </ul>
            </div>

            {/* Brand Alignment Section */}
            <div className="mb-4">
              <div className="flex items-center gap-1.5 mb-2">
                <span>🧩</span>
                <span className="font-semibold text-sm text-gray-900">Brand Alignment</span>
              </div>
              <ul className="space-y-0 ml-5">
                <li className="flex items-center gap-2 border-b border-gray-100 pb-2 pt-2">
                  <span className="text-gray-400">•</span>
                  <span className="font-satoshi text-gray-600 text-md">Visual direction (colors, type, spacing)</span>
                </li>
                <li className="flex items-center gap-2 border-b border-gray-100 pb-2 pt-2">
                  <span className="text-gray-400">•</span>
                  <span className="font-satoshi text-gray-600 text-md">Consistent authority signals</span>
                </li>
                <li className="flex items-center gap-2 border-b border-gray-100 pb-2 pt-2">
                  <span className="text-gray-400">•</span>
                  <span className="font-satoshi text-gray-600 text-md">Brand clarity</span>
                </li>
                <li className="flex items-center gap-2 border-b border-gray-100 pb-2 pt-2">
                  <span className="text-gray-400">•</span>
                  <span className="font-satoshi text-gray-600 text-md">Not a full brand book - but enough</span>
                </li>
              </ul>
            </div>

            {/* Support Section */}
            <div className="mb-4">
              <div className="flex items-center gap-1.5 mb-2">
                <span>🤝</span>
                <span className="font-semibold text-sm text-gray-900">Support</span>
              </div>
              <ul className="space-y-0 ml-5">
                <li className="flex items-center gap-2 border-b border-gray-100 pb-2 pt-2">
                  <span className="text-gray-400">•</span>
                  <span className="font-satoshi text-gray-600 text-md">Collaboration with developer</span>
                </li>
                <li className="flex items-center gap-2 border-b border-gray-100 pb-2 pt-2">
                  <span className="text-gray-400">•</span>
                  <span className="font-satoshi text-gray-600 text-md">Design handoff</span>
                </li>
                <li className="flex items-center gap-2 border-b border-gray-100 pb-2 pt-2">
                  <span className="text-gray-400">•</span>
                  <span className="font-satoshi text-gray-600 text-md">Assistance until page is live</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
