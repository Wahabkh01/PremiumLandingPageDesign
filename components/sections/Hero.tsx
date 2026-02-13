'use client'

import { useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import React from 'react'
import Image from 'next/image'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subheadingRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  const scrollToSection = useCallback((href: string) => {
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth',
      })
    }
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Use GPU-accelerated transforms to avoid forced reflow
      gsap.set([headingRef.current, subheadingRef.current, ctaRef.current, imageRef.current], {
        willChange: 'transform, opacity',
      })

      const tl = gsap.timeline({ 
        defaults: { 
          ease: 'power3.out',
          force3D: true,
        } 
      })

      tl.fromTo(
        headingRef.current,
        { yPercent: 20, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.8, delay: 0.2 }
      )
        .fromTo(
          subheadingRef.current,
          { yPercent: 15, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          ctaRef.current,
          { yPercent: 10, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.6 },
          '-=0.3'
        )
        .fromTo(
          imageRef.current,
          { xPercent: 10, opacity: 0 },
          { xPercent: 0, opacity: 1, duration: 0.8, clearProps: 'willChange' },
          '-=0.5'
        )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1
              ref={headingRef}
              className="font-display font-bold text-4xl md:text-5xl lg:text-[3 rem] leading-[1.5] text-gray-900 mb-8"
            >
              Turn Your Expertise Into Authority - Not Just Another Website
            </h1>

            <p
              ref={subheadingRef}
              className="text-base md:text-lg text-gray-600 mb-5 leading-relaxed"
            >
              I help coaches and consultants attract premium clients and close faster through high-converting landing pages.
            </p>

            <p className="text-sm text-gray-500 mb-10">
              Built for: High-ticket Coaches • Consultants • Experts • Advisors
            </p>

            <div ref={ctaRef} className="flex flex-row gap-3">
              <button
                onClick={() => scrollToSection('#how-to-order')}
                className="px-6 py-2.5 bg-purple-600 text-white rounded font-medium text-sm hover:bg-purple-700 transition-all duration-300"
              >
                Book a Free Call
              </button>
              <button
                onClick={() => scrollToSection('#offers')}
                className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded font-medium text-sm hover:border-gray-400 transition-all duration-300"
              >
                View Offers
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div ref={imageRef} className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="aspect-[3/4] bg-gradient-to-b from-amber-200 via-amber-300 to-amber-400 overflow-hidden">
                <Image
                  src="/images/banda1.webp"
                  alt="Premium Landing Page Designer"
                  fill
                  className="object-cover object-top"
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 384px"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}