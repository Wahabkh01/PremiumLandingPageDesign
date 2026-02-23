 'use client'

import { useRef } from 'react'
import React from 'react'
import Image from 'next/image'
export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      name: 'Hamza Saleem',
      role: 'CEO Scale Sellers',
      text: 'Arslan helped us revamp the design of our website. His service is very premium and truly value for money. Highly recommended.',
      image: '/images/Hamza%20saleem.png',
    },
    {
      name: 'Florin Stanciu',
      role: 'Founder at Style Thread',
      text: 'I had the great pleasure of working with Arslan on our current project, "T Style," where he serves as our UI/UX designer. Throughout our collaboration, he has consistently demonstrated a strong user-centered mindset, excellent communication skills, a deep curiosity and research-driven approach, and a sharp problem-solving ability.',
      image: '/images/floria%20standicu.jpg',
    },
    {
      name: 'Umer Zahoor',
      role: 'CGO at Findaus',
      text: 'Arslan is a premium landing page designer, and working with him was a great experience. Together, we delivered an extraordinary design that exceeded expectations. One of the things I appreciate most about Arslan is his reliability: he consistently delivers high quality work and always on time. I\'d highly recommend him to anyone looking for top-tier landing page designs.',
      image: '/images/umer%20zaheoor.jpg',
    },
    {
      name: 'Sarah Mitchell',
      role: 'Business Coach',
      text: 'Working with Arslan transformed my online presence completely. My new website not only looks stunning but has doubled my client inquiries in just two months. His attention to detail and understanding of my brand was exceptional.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'Michael Chen',
      role: 'Executive Consultant',
      text: 'The attention to detail and understanding of my brand was exceptional. Arslan delivered exactly what I needed to stand out in a crowded market. Highly professional and easy to work with.',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'Jessica Torres',
      role: 'Wellness Coach',
      text: 'I went from feeling embarrassed about my website to being proud to share it. The premium design perfectly reflects the high-end service I provide. Thank you for your outstanding contribution.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    },
  ]

  // Static heading — no animation for static site

  // Removed continuous scrolling animation to keep carousel static

  // Duplicate testimonials for seamless loop
  const allTestimonials = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" ref={sectionRef} className="section-spacing py-16 md:py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <h2
          ref={headingRef}
          className="font-display font-bold text-2xl md:text-3xl text-center text-gray-900 mb-12"
        >
          What Top Coaches Received
        </h2>
      </div>

      {/* Carousel Container - full width */}
      <div className="relative w-full" role="region" aria-label="Customer testimonials">
        <div
          ref={carouselRef}
          className="flex gap-6"
          style={{ width: 'max-content', willChange: 'transform' }}
        >
          {allTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            >
              {/* Author - at top */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.role}</div>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed text-sm line-clamp-5">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}