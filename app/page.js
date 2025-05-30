import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/ContactForm";
import OurApproach from "@/components/DataDriven";
import HeroSection from "@/components/HeroSection";
import OurServices from "@/components/OurSevices";
import TestimonialsSlider from "@/components/Testomonials";
import TrustedSection from "@/components/TrustedSection";

export default function HomePage() {
  return (
    <>
      {/* Hero section needs full width */}
      <HeroSection />

      {/* trust by companies section */}
      <TrustedSection />

      {/* our services section */}
      <OurServices />

      {/* data driven section */}
      <OurApproach />

      {/* about us */}
      <AboutUs />

      {/* reviews sections */}
      <TestimonialsSlider />

      {/* Other content with constrained width */}
      {/* <section className=" px-4 py-12">
        <ContactForm />
      </section> */}
    </>
  );
}
