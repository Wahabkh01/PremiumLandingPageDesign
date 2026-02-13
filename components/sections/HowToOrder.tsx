'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HowToOrder() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

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

      if (stepsRef.current?.children.length) {
        gsap.fromTo(
          stepsRef.current.children,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: stepsRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const steps = [
    {
      number: '1',
      title: 'Choose Your Offer',
      description:
        'Select the offer that best fits your goal.',
    },
    {
      number: '2',
      title: 'Fill the Questionnaire',
      description:
        'Complete a short form so I can assess your positioning, messaging, and conversion gaps before starting.',
    },
    {
      number: '3',
      title: 'Confirm Payment',
      description:
        "You'll receive payment details at the end of the form and by email. Once paid, your project is officially booked.",
    },
  ]

  return (
    <section id="how-to-order" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          {/* Gray bordered box */}
          <div className="border border-gray-200 bg-white">
            {/* Top border line */}
            <div className="border-b border-gray-200 py-8 px-8">
              <h2
                ref={headingRef}
                className="font-display font-bold text-xl md:text-2xl text-center text-gray-900 mb-2"
              >
                How to Place Order
              </h2>
              <p className="text-center text-gray-500 text-sm">
                Pick a service. Submit your details. Secure your slot.
              </p>
            </div>

            {/* Steps content */}
            <div ref={stepsRef} className="px-8 py-8 space-y-8">
              {steps.map((step, index) => (
                <div key={index}>
                  <h3 className="font-bold text-sm text-gray-900 mb-1">
                    {step.number}. {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Bottom section with button */}
            <div className="border-t border-gray-200 py-8 px-8 text-center">
              <p className="text-gray-600 text-sm mb-4">
                I&apos;ll review everything and reach out with next steps.
              </p>
              <button
                onClick={() => {
                  const el = document.getElementById('offers')
                  if (el) {
                    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
                  }
                }}
                className="px-6 py-2.5 bg-purple-600 text-white rounded font-medium text-sm hover:bg-purple-700 transition-all duration-300"
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