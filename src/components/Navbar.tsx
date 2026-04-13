'use client'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-nav backdrop-blur-sm" style={{ boxShadow: '0px 1px 2px rgba(0,0,0,0.05)' }}>
      <div className="max-w-[1440px] mx-auto px-20 h-[76px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            {/* Logo text fallback */}
            <span className="font-poppins font-bold text-xl text-[#0D631B] leading-tight">Rajam</span>
            <span className="font-poppins font-semibold text-xs text-[#73B130] tracking-widest uppercase">Property</span>
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="flex flex-col py-1 border-b-2 border-[#15803D]">
            <span className="font-inter font-bold text-base text-[#15803D]">Services</span>
          </a>
          <a href="#testimonials" className="flex flex-col py-1">
            <span className="font-inter font-medium text-base text-[#475569] hover:text-[#15803D] transition-colors">Testimonials</span>
          </a>
          <a href="#faq" className="flex flex-col py-1">
            <span className="font-inter font-medium text-base text-[#475569] hover:text-[#15803D] transition-colors">FAQ</span>
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="#consultation"
          className="hidden md:flex items-center justify-center px-6 py-2.5 rounded-lg text-white font-inter font-bold text-base transition-all hover:opacity-90"
          style={{
            background: 'linear-gradient(103.43deg, #0D631B 0%, #2E7D32 100%)',
            boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)',
          }}
        >
          Get Free Consultation
        </a>

        {/* Mobile menu */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-gray-700 mb-1.5" />
          <div className="w-6 h-0.5 bg-gray-700 mb-1.5" />
          <div className="w-6 h-0.5 bg-gray-700" />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          <a href="#" className="font-inter font-bold text-[#15803D] text-base">Services</a>
          <a href="#testimonials" className="font-inter text-[#475569] text-base">Testimonials</a>
          <a href="#faq" className="font-inter text-[#475569] text-base">FAQ</a>
          <a
            href="#consultation"
            className="text-center py-3 rounded-lg text-white font-inter font-bold text-base"
            style={{ background: 'linear-gradient(103.43deg, #0D631B 0%, #2E7D32 100%)' }}
          >
            Get Free Consultation
          </a>
        </div>
      )}
    </nav>
  )
}
