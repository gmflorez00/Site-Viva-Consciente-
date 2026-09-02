import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import ForWho from "@/components/sections/ForWho";
import Testimonials from "@/components/sections/Testimonials";
import CTABand from "@/components/sections/CTABand";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <ForWho />
        <Testimonials />
        <CTABand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
