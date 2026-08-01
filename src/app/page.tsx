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
        <Team />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
