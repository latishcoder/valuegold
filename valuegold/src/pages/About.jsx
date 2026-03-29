import React from "react";
import ValueSection from "../components/ValueSection";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-[#f4efe7]">

      {/* HERO */}
      <section className="w-full">
        <img
          src="https://valuegold.com/wp-content/uploads/2025/09/Legacy_banner.jpg.webp"
          alt="legacy"
          className="w-full h-[450px] object-cover"
        />
      </section>

      {/* OUR LEGACY */}
      <section className="py-16 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6 relative inline-block">
          OUR LEGACY
          <span className="block h-[2px] bg-yellow-600 w-16 mx-auto mt-2"></span>
        </h2>

        <p className="text-gray-700 leading-7 mb-6">
          Established in 1901, Caps Gold has built a proud legacy and has grown
          into one of India’s most trusted gold and silver bullion merchants.
          We are committed to accountability, integrity, and reliability.
          Continuing this legacy, we founded Value Gold, a company that offers
          modern financial solutions while staying true to the values that have
          guided us for over a century.
        </p>

        <p className="text-gray-700 leading-7">
          Value Gold represents a thoughtful blend of heritage and innovation,
          ensuring our customers receive solutions that meet their changing
          needs. Our long-standing expertise in gold transactions has helped
          position Value Gold as a reliable and preferred choice for individuals
          looking to sell gold for instant money.
        </p>
      </section>

      {/* VALUE / VISION / MISSION */}
      <ValueSection />

      {/* CERTIFICATIONS */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-blue-900 mb-12 relative inline-block">
          CERTIFICATION AND OTHER CREDENTIALS
          <span className="block h-[2px] bg-yellow-600 w-20 mx-auto mt-2"></span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-6xl mx-auto">
          
          <img
            src="https://valuegold.com/wp-content/uploads/2023/09/EGAC.png.webp"
            alt="egac"
            className="mx-auto h-24 object-contain"
          />

          <img
            src="https://valuegold.com/wp-content/uploads/2023/09/IAF.png.webp"
            alt="iaf"
            className="mx-auto h-24 object-contain"
          />

          <img
            src="https://valuegold.com/wp-content/uploads/2023/09/ISO.png.webp"
            alt="iso"
            className="mx-auto h-24 object-contain"
          />

          <img
            src="https://valuegold.com/wp-content/uploads/2023/09/MMS.png.webp"
            alt="mms"
            className="mx-auto h-24 object-contain"
          />

        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default About;