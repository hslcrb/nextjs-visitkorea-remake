import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DestinationsSection from "@/components/DestinationsSection";
import FoodSection from "@/components/FoodSection";
import CultureSection from "@/components/CultureSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DestinationsSection />
        <FoodSection />
        <CultureSection />
      </main>
      <Footer />
    </>
  );
}
