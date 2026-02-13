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
    <section id="offers" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        {/* Top divider line */}
        <div className="border-t border-gray-200 mb-12" />
        
        <h2
          ref={headingRef}
          className="font-display font-bold text-2xl md:text-3xl text-center text-gray-900 mb-12"
        >
          My Offers
        </h2>

        <div ref={cardsRef} className="grid md:grid-cols-3 max-w-5xl mx-auto items-start">
          {/* Offer 1 - Free Audit */}
          <div className="bg-white pr-8">
            <h3 className="font-bold text-base text-gray-900 mb-2">
              The 10-Minute Landing Page Clarity Audit
            </h3>
            <p className="text-gray-600 text-xs mb-4">
              A 10-minute expert review that reveals exactly what&apos;s hurting the conversion.
            </p>
            
            <span className="inline-block border border-gray-300 text-gray-600 text-xs px-3 py-1 rounded mb-4">
              Free
            </span>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span className="text-gray-600 text-sm">5—7 bullet points</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span className="text-gray-600 text-sm">Loom video or written breakdown</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span className="text-gray-600 text-sm">Clear &quot;what&apos;s hurting conversion&quot;</span>
              </li>
            </ul>

            <a href="#" className="text-gray-600 text-sm underline hover:text-gray-900">
              Apply for a Free Clarity Audit
            </a>
          </div>

          {/* Offer 2 - Clarity Upgrade */}
          <div className="bg-white border-l border-r border-gray-200 px-8">
            <h3 className="font-bold text-base text-gray-900 mb-2">
              The Landing Page Clarity Upgrade
            </h3>
            <p className="text-gray-600 text-xs mb-4">
              A focused redesign that sharpens your message and improves conversion without rebuilding everything.
            </p>
            
            <span className="inline-block bg-purple-200 text-purple-800 text-xs px-3 py-1 rounded mb-2">
              Max Value
            </span>
            
            <div className="mb-4">
              <span className="text-2xl font-bold text-gray-900">$1499</span>
            </div>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span className="text-gray-600 text-sm">1 landing page redesign</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span className="text-gray-600 text-sm">Clear message hierarchy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span className="text-gray-600 text-sm">Conversion-focused structure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span className="text-gray-600 text-sm">Desktop + mobile design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span className="text-gray-600 text-sm">1 revision round</span>
              </li>
            </ul>
          </div>

          {/* Offer 3 - Authority System */}
          <div className="bg-white pl-8">
            <h3 className="font-bold text-base text-gray-900 mb-2">
              The Authority Landing Page System
            </h3>
            <p className="text-gray-600 text-xs mb-4">
              A complete strategy-led redesign that positions you as the obvious choice.
            </p>
            
            <span className="inline-block bg-purple-600 text-white text-xs px-3 py-1 rounded mb-2">
              Premium
            </span>
            
            <div className="mb-4">
              <span className="text-2xl font-bold text-gray-900">$3999</span>
            </div>

            {/* Strategy Section */}
            <div className="mb-4">
              <div className="flex items-center gap-1.5 mb-2">
                <span className="text-purple-600">🟣</span>
                <span className="font-semibold text-sm text-gray-900">Strategy</span>
              </div>
              <ul className="space-y-1.5 ml-5">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span className="text-gray-600 text-sm">Deep in-depth audit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span className="text-gray-600 text-sm">Clear offer & positioning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span className="text-gray-600 text-sm">CRO-based messaging hierarchy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span className="text-gray-600 text-sm">Conversion logic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span className="text-gray-600 text-sm">Identify drop-off points, trust gaps, and clarity issues</span>
                </li>
              </ul>
            </div>

            {/* Design Section */}
            <div className="mb-4">
              <div className="flex items-center gap-1.5 mb-2">
                <span className="text-orange-500">🟠</span>
                <span className="font-semibold text-sm text-gray-900">Design</span>
              </div>
              <ul className="space-y-1.5 ml-5">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span className="text-gray-600 text-sm">Conversion-focused landing page design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span className="text-gray-600 text-sm">Responsive (desktop + mobile)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span className="text-gray-600 text-sm">Premium visual language</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span className="text-gray-600 text-sm">Layouts to improve scannability, attention flow, and CTA visibility</span>
                </li>
              </ul>
            </div>

            {/* Brand Alignment Section */}
            <div className="mb-4">
              <div className="flex items-center gap-1.5 mb-2">
                <span>⭐</span>
                <span className="font-semibold text-sm text-gray-900">Brand Alignment</span>
              </div>
              <ul className="space-y-1.5 ml-5">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span className="text-gray-600 text-sm">Visual direction (colors, type, spacing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span className="text-gray-600 text-sm">Consistent authority signals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span className="text-gray-600 text-sm">Brand clarity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span className="text-gray-600 text-sm">Not a full brand book - but enough</span>
                </li>
              </ul>
            </div>

            {/* Support Section */}
            <div className="mb-4">
              <div className="flex items-center gap-1.5 mb-2">
                <span>🤝</span>
                <span className="font-semibold text-sm text-gray-900">Support</span>
              </div>
              <ul className="space-y-1.5 ml-5">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span className="text-gray-600 text-sm">Collaboration with developer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span className="text-gray-600 text-sm">Design handoff</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span className="text-gray-600 text-sm">Assistance until page is live</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}