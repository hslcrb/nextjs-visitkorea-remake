import Header from "@/components/Header"
import Hero from "@/components/Hero"
import DestinationsSection from "@/components/DestinationsSection"
import CounterSection from "@/components/CounterSection"
import FoodSection from "@/components/FoodSection"
import CultureSection from "@/components/CultureSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import Footer from "@/components/Footer"
import BackToTop from "@/components/BackToTop"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DestinationsSection />
        <CounterSection />
        <FoodSection />
        <CultureSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
