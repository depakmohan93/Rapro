'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Script from 'next/script'
import { useModal } from '@/lib/modalContext'

function validateIndianPhone(phone: string): string | null {
  const cleaned = phone.replace(/\s+/g, '').replace(/-/g, '')
  const regex = /^(\+91|91|0)?[6-9]\d{9}$/
  if (!cleaned) return 'Phone number is required'
  if (!regex.test(cleaned)) return 'Enter a valid Indian mobile number (10 digits starting with 6-9)'
  return null
}
function validateEmail(email: string): string | null {
  if (!email) return 'Email is required'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Enter a valid email address'
  return null
}
function validateName(name: string): string | null {
  if (!name.trim()) return 'Full name is required'
  if (name.trim().length < 2) return 'Name must be at least 2 characters'
  return null
}

export default function ConsultationModal() {
  const { isOpen, closeModal } = useModal()
  const router = useRouter()
  const pathname = usePathname()
  const isPropertyManagement = pathname === '/property-management'
  const overlayRef = useRef<HTMLDivElement>(null)
  const firstInputRef = useRef<HTMLInputElement>(null)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: '',
    propertyLocation: '',
    propertyLocationOther: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)

  // Focus first input when modal opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => firstInputRef.current?.focus(), 50)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    if (isOpen) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, closeModal])

  const validate = () => {
    const newErrors: Record<string, string> = {}
    const nameErr = validateName(formData.name)
    const phoneErr = validateIndianPhone(formData.phone)
    const emailErr = validateEmail(formData.email)
    if (nameErr) newErrors.name = nameErr
    if (phoneErr) newErrors.phone = phoneErr
    if (emailErr) newErrors.email = emailErr
    if (!formData.propertyType) newErrors.propertyType = 'Please select a property type'
    if (!formData.propertyLocation) newErrors.propertyLocation = 'Please select a location'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    try {
      const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      const payload = {
        timestamp,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        propertyType: formData.propertyType,
        propertyLocation:
          formData.propertyLocation === 'Other'
            ? formData.propertyLocationOther
            : formData.propertyLocation,
      }
      fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => {})
    } finally {
      router.push('/thank-you')
    }
  }

  const inputClass = (field: string) =>
    `w-full h-[47px] bg-[#F3F3F6] rounded-lg px-4 font-poppins text-base text-[#1A1C1E] placeholder-[#6B7280] border-0 outline-none transition-all ${
      errors[field] ? 'ring-2 ring-red-400' : 'focus:ring-2 focus:ring-[#73B130]/30'
    }`

  if (!isOpen) return null

  // ── Property-management page: iframe embed form ──────────────────────────────
  if (isPropertyManagement) {
    return (
      <>
        <Script src="https://eventshare.pana.space/embed.js" strategy="lazyOnload" />
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)' }}
          onClick={(e) => { if (e.target === overlayRef.current) closeModal() }}
          aria-modal="true"
          role="dialog"
          aria-label="Free Consultation Form"
        >
          {/* Close button — floats over the iframe top-right */}
          <button
            onClick={closeModal}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-10 flex items-center justify-center w-8 h-8 rounded-full transition-colors"
            style={{ background: 'rgba(0,0,0,0.45)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Iframe — no wrapper, no padding, transparent */}
          <div
            className="overflow-y-auto"
            style={{
              width: '100%',
              maxWidth: '560px',
              maxHeight: '100vh',
              animation: 'modal-in 0.25s cubic-bezier(0.34,1.56,0.64,1) both',
            }}
          >
            <iframe
              src="https://eventshare.pana.space/f/78b59231-2845-44b6-9887-938141e57684?embed=1"
              width="100%"
              height="700"
              frameBorder={0}
              title="Registration form"
              data-mathiverse-form="embed"
              style={{ display: 'block' }}
            />
          </div>
        </div>
        <style>{`
          @keyframes modal-in {
            from { opacity: 0; transform: scale(0.92) translateY(16px); }
            to   { opacity: 1; transform: scale(1) translateY(0); }
          }
        `}</style>
      </>
    )
  }

  // ── Default (homepage + all other pages): iframe embed form ─────────────────
  return (
    <>
      <Script src="https://eventshare.pana.space/embed.js" strategy="lazyOnload" />
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[200] flex items-center justify-center"
        style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)' }}
        onClick={(e) => { if (e.target === overlayRef.current) closeModal() }}
        aria-modal="true"
        role="dialog"
        aria-label="Free Consultation Form"
      >
        {/* Close button — floats over the iframe top-right */}
        <button
          onClick={closeModal}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-8 h-8 rounded-full transition-colors"
          style={{ background: 'rgba(0,0,0,0.45)' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Iframe — no wrapper, no padding, transparent */}
        <div
          className="overflow-y-auto"
          style={{
            width: '100%',
            maxWidth: '560px',
            maxHeight: '100vh',
            animation: 'modal-in 0.25s cubic-bezier(0.34,1.56,0.64,1) both',
          }}
        >
          <iframe
            src="https://eventshare.pana.space/f/44e62d2b-7d25-4b31-a221-b6e420712c99?embed=1"
            width="100%"
            height="700"
            frameBorder={0}
            title="Registration form"
            data-mathiverse-form="embed"
            style={{ display: 'block' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes modal-in {
          from { opacity: 0; transform: scale(0.92) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </>
  )
}
