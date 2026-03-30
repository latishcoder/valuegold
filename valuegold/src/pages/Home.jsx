import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import ServicesSection from "../components/ServicesSection.jsx";
import HowItWorks from "../components/HowItWorks.jsx.jsx";
import WhyChoose from "../components/WhyChoose.jsx";
import Achievements from "../components/Achievements.jsx";
import Testimonials from "../components/Testimonials.jsx";
import FAQ from "../components/FAQ.jsx";
import Footer from "../components/Footer.jsx";
import ComparisonSection from "../components/ComparisonSection.jsx";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSlider />
      <ServicesSection />
      <HowItWorks />
      <WhyChoose />
      <Achievements />
      <ComparisonSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}