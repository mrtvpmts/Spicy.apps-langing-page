'use client'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import QuoteModal from '@/components/QuoteModal'
import { QuoteProvider } from '@/components/QuoteContext'

export default function Page() {
  return (
    <QuoteProvider>
      <div className="stitch-bg-dynamic" />
      <div className="noise-overlay" />

      <Header />
      <main className="relative">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <QuoteModal />
    </QuoteProvider>
  )
}
