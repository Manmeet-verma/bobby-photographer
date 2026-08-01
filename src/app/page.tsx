import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import Marquee from "@/components/Marquee";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTA from "@/components/CTA";
import QuoteSection from "@/components/QuoteSection";

export default function Home() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <main>
        <Navbar />
        <Hero />
        <About />
        <Stats />
        <Marquee />
        <Services />
        <Gallery />
        <CTA />
        <Team />
        <QuoteSection />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
