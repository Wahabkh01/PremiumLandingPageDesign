'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'
import Image from 'next/image'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AuthoritySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      if (contentRef.current?.children.length) {
        gsap.fromTo(
          contentRef.current.children,
          { x: -40, opacity: 0 },
          {
            x: 0,
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

      gsap.fromTo(
        imageRef.current,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto border border-gray-200 rounded-2xl p-8 md:p-12">
          {/* Left Content */}
          <div ref={contentRef}>
            <h2 className="font-display font-bold text-xl md:text-2xl text-gray-900 mb-6">
              Your Designer for Authority-Driven Landing Pages
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Hi, I am Arslan. Your premium landing page designer, focused on minimalist, authority-driven digital experiences.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              I work with consultants and coaches who don&apos;t want to look louder. They want to look clearer.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              Minimalism isn&apos;t a style for me. It&apos;s how authority communicates.
            </p>
          </div>

          {/* Right Image */}
          <div ref={imageRef} className="flex justify-end">
            <div className="w-full max-w-xs relative rounded-xl overflow-hidden">
              <Image
                src="/images/banda2.webp"
                alt="Muhammad Arslan - Designer"
                width={320}
                height={240}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}