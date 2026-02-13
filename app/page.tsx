import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import PremiumSection from '@/components/sections/PremiumSection'
import Offers from '@/components/sections/Offers'
import Recommendation from '@/components/sections/Recommendation'
import HowToOrder from '@/components/sections/HowToOrder'
import Testimonials from '@/components/sections/Testimonials'
import WhoIsItFor from '@/components/sections/WhoIsItFor'
import AuthoritySection from '@/components/sections/AuthoritySection'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/sections/Footer'
import Header from '@/components/sections/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Hero />
        <Features />
        <PremiumSection />
        <Offers />
        <Recommendation />
        <HowToOrder />
        <Testimonials />
        <WhoIsItFor />
        <AuthoritySection />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </>
  )
}