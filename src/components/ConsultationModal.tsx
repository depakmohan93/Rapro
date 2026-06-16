'use client'
import { useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Script from 'next/script'
import { useModal } from '@/lib/modalContext'

export default function ConsultationModal() {
  const { isOpen, closeModal } = useModal()
  const router = useRouter()
  const pathname = usePathname()
  const isPropertyManagement = pathname === '/property-management'
  const overlayRef = useRef<HTMLDivElement>(null)

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal() }
    if (isOpen) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, closeModal])

  // Listen for Mathiverse form submission postMessage → redirect to /thank-you
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      // Log all iframe messages in dev so we can confirm the exact event shape
      if (process.env.NODE_ENV === 'development') {
        console.log('[Mathiverse postMessage]', e.origin, e.data)
      }

      // Guard: only handle messages from the Mathiverse embed origin
      if (!e.origin.includes('eventshare.pana.space') && !e.origin.includes('pana.space')) return

      const data = e.data
      if (!data) return

      // Handle the most common submission/success event shapes
      const isSubmission =
        data?.type === 'form:submitted' ||
        data?.type === 'form-submitted' ||
        data?.type === 'submitted' ||
        data?.type === 'success' ||
        data?.event === 'submitted' ||
        data?.event === 'form:submitted' ||
        data?.status === 'submitted' ||
        data?.status === 'success'

      if (isSubmission) {
        closeModal()
        router.push('/thank-you')
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [closeModal, router])

  if (!isOpen) return null

  const iframeSrc = isPropertyManagement
    ? 'https://eventshare.pana.space/f/78b59231-2845-44b6-9887-938141e57684?embed=1'
    : 'https://eventshare.pana.space/f/44e62d2b-7d25-4b31-a221-b6e420712c99?embed=1'

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
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          } as React.CSSProperties}
        >
          <iframe
            src={iframeSrc}
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
        .overflow-y-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  )
}
