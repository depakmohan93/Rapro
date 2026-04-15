'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const navLinks = [
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
  { label: 'FAQ', href: '#faq', id: 'faq' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    navLinks.forEach(link => {
      const el = document.getElementById(link.id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(link.id)
          else setActiveSection(prev => (prev === link.id ? '' : prev))
        },
        { threshold: 0.3 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white" style={{ boxShadow: '0px 1px 2px rgba(0,0,0,0.05)' }}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-20 h-[76px] flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <Image src="/Logo_light.svg" alt="Rapro Logo" width={100} height={45} priority />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={link.href}
                className="flex flex-col py-1 transition-colors"
                style={{ borderBottom: isActive ? '2px solid #15803D' : '2px solid transparent' }}
              >
                <span className="font-inter text-base transition-colors" style={{ fontWeight: isActive ? 700 : 500, color: isActive ? '#15803D' : '#475569' }}>
                  {link.label}
                </span>
              </a>
            )
          })}
        </div>

        {/* Desktop CTA — unchanged */}
        <a
          href="#consultation-form"
          className="hidden md:flex items-center justify-center px-6 py-2.5 rounded-lg text-white font-inter font-bold text-base transition-all hover:opacity-90"
          style={{ background: 'linear-gradient(103.43deg, #0D631B 0%, #2E7D32 100%)', boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1)' }}
        >
          Get Free Consultation
        </a>

        {/* Mobile — contact details replacing CTA */}
        <div className="flex md:hidden flex-col gap-[1rem]">
          <a href="tel:+917299914181" className="flex items-center gap-2" style={{ color: '#1A1A1A' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            <span className="font-poppins text-sm font-medium" style={{ color: '#1A1A1A' }}>+91 72999 14181</span>
          </a>
          <a href="mailto:enquiry@rajamproperty.in" className="flex items-center gap-2" style={{ color: '#1A1A1A' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,12 2,6"/>
            </svg>
            <span className="font-poppins text-sm font-medium" style={{ color: '#1A1A1A' }}>enquiry@rajamproperty.in</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
