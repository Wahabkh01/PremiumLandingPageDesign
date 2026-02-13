'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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

      if (faqRef.current?.children.length) {
        gsap.fromTo(
          faqRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: faqRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const faqs = [
    {
      question: 'How much time will it take?',
      answer:
        'The timeline depends on the package you choose. For the Premium Strategy Session, we\'ll complete everything in a focused 2-hour call. For a full landing page, expect 2-3 weeks from start to finish. I\'ll provide a detailed timeline during our initial consultation so you know exactly what to expect.',
    },
    {
      question: 'How do you take payments?',
      answer:
        'I accept payments via Stripe for secure credit/debit card transactions. For larger projects, I offer split payments - 50% upfront and 50% upon completion.',
    },
    {
      question: 'Can I pay with Paypal?',
      answer:
        'Yes, PayPal is available as a payment option. Just let me know your preference during checkout and I\'ll send you the appropriate payment link.',
    },
    {
      question: 'How to track progress?',
      answer:
        'You\'ll have access to a shared project dashboard where you can see real-time updates. I also send weekly progress summaries with screenshots and next steps clearly outlined.',
    },
    {
      question: 'How can I stay in touch?',
      answer:
        'The best way to reach me is via email. I typically respond within 24 hours on business days. For active projects, we can also set up Slack or your preferred communication channel.',
    },
    {
      question: 'I want a full website redesign',
      answer:
        'If you need more than a landing page, I offer custom website projects. Book a free call and we\'ll discuss your requirements, timeline, and create a tailored proposal for your needs.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <h2
          ref={headingRef}
          className="font-display font-bold text-2xl md:text-3xl text-center text-gray-900 mb-12"
        >
          Frequently Asked Questions
        </h2>

        <div ref={faqRef} className="max-w-2xl mx-auto space-y-0 divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}