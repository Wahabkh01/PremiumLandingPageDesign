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
    <section id="how-to-order" ref={sectionRef} className="section-spacing py-16 md:py-24 bg-white">
      <div className="container-custom">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            ref={headingRef}
            className="font-display font-bold text-2xl md:text-3xl text-gray-900 mb-2"
          >
            How to Place Order
          </h2>
          <p className="font-satoshi text-gray-500 text-md">
            Pick a service. Submit your details. Secure your slot.
          </p>
        </div>

        {/* Steps as separate boxes */}
        <div ref={stepsRef} className="flex flex-col gap-6 max-w-2xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <h3 className="font-bold text-gray-900 mb-2" style={{ fontSize: '24px' }}>
                {step.number}. {step.title}
              </h3>
              <p className="font-satoshi text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom section with button */}
        <div className="text-center">
          <p className="font-satoshi font-bold text-gray-600 text-sm mb-4">
            I&apos;ll review everything and reach out with next steps.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById('offers')
              if (el) {
                window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
              }
            }}
            className="px-6 py-2.5 bg-[#b242af] text-white rounded font-medium text-sm hover:bg-[#8f3590] transition-all duration-300"
          >
            Place Order
          </button>
        </div>
      </div>
    </section>
  )
}