import dynamic from 'next/dynamic'
import Hero from '@/components/sections/Hero'
import Header from '@/components/sections/Header'

// Lazy load below-fold components to reduce initial bundle size
const Features = dynamic(() => import('@/components/sections/Features'), { ssr: true })
const PremiumSection = dynamic(() => import('@/components/sections/PremiumSection'), { ssr: true })
const Offers = dynamic(() => import('@/components/sections/Offers'), { ssr: true })
const Recommendation = dynamic(() => import('@/components/sections/Recommendation'), { ssr: true })
const HowToOrder = dynamic(() => import('@/components/sections/HowToOrder'), { ssr: true })
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), { ssr: true })
const WhoIsItFor = dynamic(() => import('@/components/sections/WhoIsItFor'), { ssr: true })
const AuthoritySection = dynamic(() => import('@/components/sections/AuthoritySection'), { ssr: true })
const FAQ = dynamic(() => import('@/components/sections/FAQ'), { ssr: true })
const FinalCTA = dynamic(() => import('@/components/sections/FinalCTA'), { ssr: true })
const Footer = dynamic(() => import('@/components/sections/Footer'), { ssr: true })

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