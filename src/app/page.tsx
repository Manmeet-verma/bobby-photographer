import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <main>
        <Navbar />
        <Hero />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
