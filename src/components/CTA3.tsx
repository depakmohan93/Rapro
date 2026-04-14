import Image from 'next/image'

export default function CTA3() {
  return (
    <section className="w-full bg-white flex items-center justify-center py-12 px-5 md:px-20">
      <div
        className="relative w-full overflow-hidden flex flex-col items-center justify-center text-center"
        style={{
          maxWidth: '64rem',
          minHeight: '20rem',
          boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
          borderRadius: '2rem',
          padding: '3rem 2rem',
        }}
      >
        <Image src="/Card_bg.png" alt="" fill className="object-cover" priority />
        <div className="relative z-10 flex flex-col items-center gap-5 w-full" style={{ maxWidth: '54rem' }}>
          <h2
            className="font-quicksand text-white text-center"
            style={{ fontWeight: 600, fontSize: 'clamp(1.5rem, 4vw, 2.625rem)', lineHeight: '1.35' }}
          >
            Looking for a Reliable Partner to Manage Your Property?
          </h2>
          <p
            className="font-poppins text-white text-center"
            style={{ fontWeight: 400, fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', lineHeight: '1.6' }}
          >
            Join 700+ NRIs worldwide who trust Rapro for complete property management.
          </p>
          <a
            href="#consultation"
            className="inline-flex items-center justify-center font-poppins text-black text-center transition-all hover:opacity-90 hover:scale-[1.02] whitespace-nowrap"
            style={{
              width: 'min(20rem, 80%)',
              height: '3.25rem',
              background: '#FFFFFF',
              borderRadius: '0.5rem',
              fontWeight: 600,
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              paddingLeft: '1.5rem',
              paddingRight: '1.5rem',
            }}
          >
            Get free call back
          </a>
        </div>
      </div>
    </section>
  )
}
