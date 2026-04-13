'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

const navLinks = [
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
  { label: 'FAQ', href: '#faq', id: 'faq' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const menuRef = useRef<HTMLDivElement>(null)
  const bar1Ref = useRef<HTMLDivElement>(null)
  const bar2Ref = useRef<HTMLDivElement>(null)
  const bar3Ref = useRef<HTMLDivElement>(null)

  // Intersection observer for active nav link
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

  // GSAP menu open/close animation
  useEffect(() => {
    const menu = menuRef.current
    const b1 = bar1Ref.current
    const b2 = bar2Ref.current
    const b3 = bar3Ref.current
    if (!menu || !b1 || !b2 || !b3) return

    if (menuOpen) {
      // Animate hamburger → X
      gsap.to(b1, { rotation: 45, y: 6, duration: 0.3, ease: 'power2.inOut' })
      gsap.to(b2, { opacity: 0, scaleX: 0, duration: 0.2, ease: 'power2.inOut' })
      gsap.to(b3, { rotation: -45, y: -6, duration: 0.3, ease: 'power2.inOut' })
      // Animate menu sliding down
      gsap.fromTo(
        menu,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.4, ease: 'power3.out' }
      )
      // Stagger menu items
      gsap.fromTo(
        menu.querySelectorAll('a'),
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.07, delay: 0.15, ease: 'power2.out' }
      )
    } else {
      // Animate X → hamburger
      gsap.to(b1, { rotation: 0, y: 0, duration: 0.3, ease: 'power2.inOut' })
      gsap.to(b2, { opacity: 1, scaleX: 1, duration: 0.2, ease: 'power2.inOut' })
      gsap.to(b3, { rotation: 0, y: 0, duration: 0.3, ease: 'power2.inOut' })
      // Animate menu sliding up
      gsap.to(menu, { height: 0, opacity: 0, duration: 0.3, ease: 'power3.in' })
    }
  }, [menuOpen])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white" style={{ boxShadow: '0px 1px 2px rgba(0,0,0,0.05)' }}>
      <div className="max-w-[1440px] mx-auto px-5 md:px-20 h-[76px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/Rapro_logo.svg" alt="Rapro Logo" width={100} height={45} priority />
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
                <span
                  className="font-inter text-base transition-colors"
                  style={{ fontWeight: isActive ? 700 : 500, color: isActive ? '#15803D' : '#475569' }}
                >
                  {link.label}
                </span>
              </a>
            )
          })}
        </div>

        {/* CTA */}
        <a
          href="#consultation"
          className="hidden md:flex items-center justify-center px-6 py-2.5 rounded-lg text-white font-inter font-bold text-base transition-all hover:opacity-90"
          style={{ background: 'linear-gradient(103.43deg, #0D631B 0%, #2E7D32 100%)', boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1)' }}
        >
          Get Free Consultation
        </a>

        {/* Hamburger button */}
        <button
          className="md:hidden p-2 flex flex-col justify-center items-center w-8 h-8 gap-0"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <div ref={bar1Ref} className="w-6 h-0.5 bg-gray-700 mb-1.5 origin-center" />
          <div ref={bar2Ref} className="w-6 h-0.5 bg-gray-700 mb-1.5 origin-center" />
          <div ref={bar3Ref} className="w-6 h-0.5 bg-gray-700 origin-center" />
        </button>
      </div>

      {/* Mobile menu — GSAP controls height/opacity, starts hidden */}
      <div
        ref={menuRef}
        className="md:hidden bg-white border-t border-gray-100 px-6 overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={link.href}
              className="font-inter text-base"
              style={{ fontWeight: activeSection === link.id ? 700 : 500, color: activeSection === link.id ? '#15803D' : '#475569' }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#consultation"
            className="text-center py-3 rounded-lg text-white font-inter font-bold text-base"
            style={{ background: 'linear-gradient(103.43deg, #0D631B 0%, #2E7D32 100%)' }}
            onClick={() => setMenuOpen(false)}
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </nav>
  )
}
