import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import Services from '@/components/Services'
import CTA from '@/components/CTA'
import Benefits from '@/components/Benefits'
import WhyChoose from '@/components/WhyChoose'
import CTA2 from '@/components/CTA2'
import ProblemSolution from '@/components/ProblemSolution'
import CTA3 from '@/components/CTA3'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import FloatingWidgets from '@/components/FloatingWidgets'
import FloatingCTA from '@/components/FloatingCTA'

export const metadata = {
  title: "Chennai's Most Trusted Property Management Service | Rajam Property",
  description:
    'Professional property management in Chennai since 1995. Tenant management, rent collection, maintenance, legal support, property marketing and emergency repairs — all handled for you.',
}

export default function PropertyManagementPage() {
  return (
    <main>
      <Navbar />
      <Hero
        headingLine1="Chennai's Most Trusted"
        headingLine2="Property Management"
        headingLine3="Since 1995"
        description="Property Maintenance • Tenant Management • Rent Collection • Legal Support • Property Marketing • Emergency Repairs, Everything Your Property Needs, Professionally Managed"
      />
      <Partners />
      <Services />
      <CTA />
      <Benefits />
      <WhyChoose />
      <CTA2 />
      <ProblemSolution />
      <CTA3 />
      <FAQ />
      <Footer />
      <FloatingWidgets />
      <FloatingCTA />
    </main>
  )
}
