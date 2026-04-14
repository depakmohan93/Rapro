const rows = [
  {
    feature: 'What Matters to You',
    withUs: 'With Rajam Property',
    without: 'With Others',
    isHeader: true,
  },
  {
    feature: 'Full-Service Coverage',
    withUs: 'We take care of everything from tenants and maintenance to documentation and updates.',
    without: 'Services are limited. You still end up managing multiple things yourself.',
  },
  {
    feature: 'One Point of Contact',
    withUs: 'You have a dedicated property manager who handles your property end-to-end.',
    without: 'No clear owner. You deal with different people for different tasks.',
  },
  {
    feature: 'Property Upkeep',
    withUs: 'Regular inspections and proactive maintenance keep your property in top condition.',
    without: 'Issues are addressed only when they become problems.',
  },
  {
    feature: 'Transparency & Updates',
    withUs: "You receive consistent updates with reports and photos, so you always know what's happening.",
    without: "Limited visibility. You're often unsure about your property's status.",
  },
  {
    feature: 'Handling Issues',
    withUs: 'From repairs to tenant concerns, everything is handled quickly without your involvement.',
    without: "You're pulled in to resolve issues or follow up constantly.",
  },
  {
    feature: 'Support Availability',
    withUs: '24/7 support ensures your property is taken care of at all times.',
    without: 'Support is limited and response times can be slow.',
  },
  {
    feature: 'Managing from Abroad (NRI)',
    withUs: 'We manage your property completely while you stay worry-free, wherever you are.',
    without: 'No structured support for remote property owners.',
  },
]

export default function WhyChoose() {
  return (
    <section className="py-24 px-5 md:px-20">
      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="font-poppins font-normal text-black mb-3"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: '1.27' }}
          >
            Why Smart Property Owners Choose Rapro
          </h2>
          <p className="font-inter font-normal text-[#40493D] text-base">
            We handle everything from acquisition to maintenance.
          </p>
        </div>

        {/* Comparison table */}
        <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #D8D8D8' }}>
          {/* Table header */}
          <div className="grid grid-cols-3">
            <div className="flex items-center justify-center p-6" style={{ border: '1px solid #D8D8D8', borderRadius: '16px 0 0 0' }}>
              <span className="font-poppins font-semibold text-black text-xl tracking-wide">What Matters to You</span>
            </div>
            <div className="flex items-center justify-center p-6 bg-[#73B130]">
              <span className="font-poppins font-semibold text-white text-xl tracking-wide">With Rajam Property</span>
            </div>
            <div className="flex items-center justify-center p-6 bg-[#E7E7E7]" style={{ borderRadius: '0 16px 0 0' }}>
              <span className="font-poppins font-semibold text-[#A5A5A5] text-xl tracking-wide">With Others</span>
            </div>
          </div>

          {/* Table rows */}
          {rows.slice(1).map((row, i) => {
            const isLast = i === rows.length - 2
            return (
              <div key={i} className="grid grid-cols-3" style={{ borderTop: '1px solid #D8D8D8' }}>
                <div
                  className="flex items-center justify-center p-6 bg-white"
                  style={{ borderRadius: isLast ? '0 0 0 16px' : 0, borderRight: '1px solid #D8D8D8' }}
                >
                  <span className="font-poppins font-semibold text-[#4B4B4B] text-base text-center leading-7">{row.feature}</span>
                </div>
                <div className="flex items-center justify-center p-6 bg-[#ECFBEB]" style={{ borderRight: '1px solid #D8D8D8' }}>
                  <span className="font-poppins font-medium text-[#4B4B4B] text-sm leading-5 text-center">{row.withUs}</span>
                </div>
                <div
                  className="flex items-center justify-center p-6 bg-white"
                  style={{ borderRadius: isLast ? '0 0 16px 0' : 0 }}
                >
                  <span className="font-poppins font-medium text-[#4B4B4B] text-sm leading-5 text-center">{row.without}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <a
            href="#consultation"
            className="flex items-center justify-center h-[60px] w-full max-w-xs rounded-lg text-white font-poppins font-semibold text-center text-sm md:text-base transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(98.23deg, #0D631B 0%, #2E7D32 100%)' }}
          >
            Get Started — It&apos;s Free to List
          </a>
        </div>
      </div>
    </section>
  )
}
