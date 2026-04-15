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

        {/* Mobile CTA — 8px vertical, 22px horizontal */}
        <a
          href="#consultation-form"
          className="flex md:hidden items-center justify-center rounded-lg text-white font-poppins font-semibold text-sm transition-all hover:opacity-90"
          style={{
            background: 'linear-gradient(103.43deg, #0D631B 0%, #2E7D32 100%)',
            paddingTop: '8px',
            paddingBottom: '8px',
            paddingLeft: '22px',
            paddingRight: '22px',
          }}
        >
          Book Free Callback
        </a>
      </div>
    </nav>
  )
}
