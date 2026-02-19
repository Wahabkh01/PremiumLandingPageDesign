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
      answer: [
        'Depending on the offers,',
        'Clarity Audit: 3 business days',
        'Landing Page Clarity Upgrade: 1-2 weeks',
        'Premium Landing Page System: 4-6 weeks',
        '',
        'The time will start after you receive confirmation.',
      ],
    },
    {
      question: 'How do you take payments?',
      answer: [
        'I take payments directly in my Local Bank Account.',
        '',
        'You will receive my bank details on confirmation.',
      ],
    },
    {
      question: 'Can I pay with Paypal?',
      answer: [
        'Paypal, Wise and similar services are currently not operational in my country. So I can NOT generate a payment link.',
        '',
        'You are free to choose any services you like.',
        'TIP: Generally Wise and Remitly work exceptionally well for USD to Local Bank Transfers in my country.',
      ],
    },
    {
      question: 'How to track progress?',
      answer: [
        'I will inform you upfront on the expected timelines.',
        '',
        'You will receive updates on decided times.',
      ],
    },
    {
      question: 'How can I stay in touch',
      answer: [
        'You can reach out on my',
        '',
        'LinkedIn: linkedin.com/in/arslanranjha/',
        '',
        'Email:',
        'premiumlandingpagedesigner@gmail.com',
        '',
        'After we start working together, you will have access to my Personal Email and WhatsApp',
      ],
    },
    {
      question: 'I want a full website redesign',
      answer: [
        'Please book a call with me on Calendly. We will discuss your project and I\'ll curate a custom offer for you.',
      ],
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" ref={sectionRef} className="section-spacing py-16 md:py-24 bg-white">
      <div className="container-custom">
        <h2
          ref={headingRef}
          className="font-display font-bold text-3xl md:text-5xl text-gray-900 mb-16"
        >
          Frequently Asked Questions
        </h2>

        <div ref={faqRef} className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left py-6"
              >
                <span className="font-display font-bold text-gray-900 text-lg">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-900 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="font-satoshi text-gray-600 text-sm leading-relaxed">
                  {faq.answer.map((line, i) => (
                    <p key={i} className={line === '' ? 'h-3' : ''}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}