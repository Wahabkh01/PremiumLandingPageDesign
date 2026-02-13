'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import React from 'react'
import Image from 'next/image'

const navLinks = [
  { label: 'See Offers', href: '#offers' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Place Order', href: '#how-to-order' },
]

export default function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
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
    setIsMobileMenuOpen(false)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      )
    }

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
              setIsMobileMenuOpen(false)
            }}
            className="flex items-center gap-3 z-50"
          >
            <Image
              src="/images/logo.svg"
              alt="Premium Landing Page Designer"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
              priority
            />
            <div className="leading-tight">
              <span className="block font-bold text-sm text-gray-900">Premium Landing</span>
              <span className="block text-sm text-gray-900 font-semibold">Page Designer</span>
            </div>
          </a>

          {/* Desktop Navigation + CTA */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#how-to-order"
              onClick={(e) => scrollToSection(e, '#how-to-order')}
              className="px-5 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-all duration-300"
            >
              Book a free call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-purple-600 z-50 relative"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="w-6 h-6 relative flex items-center justify-center">
              <span
                className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45' : '-translate-y-2'
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45' : 'translate-y-2'
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - clicking closes menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 md:hidden"
          style={{ zIndex: 9998 }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div
          className="fixed top-0 right-0 h-screen w-80 shadow-2xl md:hidden"
          style={{ zIndex: 9999, backgroundColor: '#ffffff' }}
        >
          {/* Close button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-gray-700 hover:text-purple-600 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col pt-24 px-8 h-full bg-white">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="py-4 text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors border-b border-gray-100 bg-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#how-to-order"
              onClick={(e) => scrollToSection(e, '#how-to-order')}
              className="mt-8 px-6 py-3 bg-purple-600 text-white rounded-full font-semibold text-center hover:bg-purple-700 transition-all duration-300"
            >
              Book a free call
            </a>
          </div>
        </div>
      )}
    </header>
  )
}