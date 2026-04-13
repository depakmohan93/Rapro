import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#1A1C1E] text-white">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image src="/Rapro_logo.svg" alt="Rapro Logo" width={100} height={45} />
            </div>
            <p className="font-poppins text-[#A0A0A0] max-w-xs mb-6" style={{ fontWeight: 400, fontSize: '0.875rem', lineHeight: '1.6' }}>
              Chennai&apos;s award-winning property management service. Trusted by 300+ NRIs for over 30 years.
            </p>

            {/* Social icons — LinkedIn, Instagram, Twitter/X */}
            <div className="flex gap-4">
              {/* LinkedIn */}
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80" style={{ background: '#73B130' }} aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2" fill="white"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80" style={{ background: '#73B130' }} aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
                </svg>
              </a>
              {/* Twitter / X */}
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80" style={{ background: '#73B130' }} aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services — all link to #services */}
          <div>
            <h4 className="font-quicksand text-white mb-4" style={{ fontWeight: 600, fontSize: '1rem' }}>Services</h4>
            <ul className="flex flex-col gap-2">
              {['Property Management', 'Tenant Management', 'Buying & Selling', 'Legal Support', 'Property Inspection'].map(s => (
                <li key={s}>
                  <a href="#services" className="font-poppins text-[#A0A0A0] hover:text-[#73B130] transition-colors" style={{ fontWeight: 400, fontSize: '0.875rem' }}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-quicksand text-white mb-4" style={{ fontWeight: 600, fontSize: '1rem' }}>Contact</h4>
            <div className="flex flex-col gap-3 font-poppins text-[#A0A0A0]" style={{ fontWeight: 400, fontSize: '0.875rem' }}>
              <p>📞 +91 98765 43210</p>
              <p>✉️ info@rajamproperty.com</p>
              <p>📍 Chennai, Tamil Nadu, India</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-poppins text-[#A0A0A0]" style={{ fontWeight: 400, fontSize: '0.875rem' }}>
            © 2026 Rapro. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-poppins text-[#A0A0A0] hover:text-white transition-colors" style={{ fontWeight: 400, fontSize: '0.875rem' }}>Privacy Policy</a>
            <a href="#" className="font-poppins text-[#A0A0A0] hover:text-white transition-colors" style={{ fontWeight: 400, fontSize: '0.875rem' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
