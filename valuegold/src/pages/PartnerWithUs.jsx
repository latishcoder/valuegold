import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
export default function PartnerWithUs() {
    

  // ✅ 1. ADD HERE (inside component)
  const slides = [
    {
      title: "Best Emerging Gold Buying Brand",
      desc: "Honored by The Times Business Awards 2023.",
    },
    {
      title: "Trusted Gold Buyers Across India",
      desc: "Expanding rapidly with customer trust.",
    },
    {
      title: "Award Winning Service Excellence",
      desc: "Recognized for transparency & service.",
    },
    {
      title: "Leading Mobile Gold Buying Brand",
      desc: "Reaching customers at their doorstep.",
    },
  ];

  // ✅ 2. STATE
  const [current, setCurrent] = useState(0);

  // ✅ 3. USE EFFECT
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="w-full h-[350px] md:h-[450px] lg:h-[550px]">
        <img
          src="https://valuegold.com/wp-content/uploads/2026/01/Valuegold_banner.webp"
          alt="partner banner"
          className="w-full h-full object-cover"
        />
      </section>
      {/* ================= WHY CHOOSE ================= */}
      <section className="py-20 bg-[#f5f2eb]">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADING */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1f3f6b] flex items-center justify-center gap-4">
              <span className="h-[2px] w-16 bg-[#c8a85d]"></span>
              WHY CHOOSE VALUE GOLD?
              <span className="h-[2px] w-16 bg-[#c8a85d]"></span>
            </h2>

            <p className="text-[#c8a85d] mt-4 text-lg flex items-center justify-center gap-4">
              <span className="h-[2px] w-10 bg-[#c8a85d]"></span>
              Turn your Investment into a Profitable & Trusted Business
              <span className="h-[2px] w-10 bg-[#c8a85d]"></span>
            </p>
          </div>

          {/* CONTENT */}
          <div className="grid md:grid-cols-2 gap-16">
            {/* LEFT - INVESTOR */}
            <div className="relative pl-6 border-l-4 border-[#c8a85d]">
              <h3 className="text-2xl font-semibold text-[#1f3f6b] mb-6 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#c8a85d]"></span>
                INVESTOR
                <span className="h-[2px] w-10 bg-[#c8a85d]"></span>
              </h3>

              <ul className="space-y-5 text-gray-700 text-[15px]">
                <li>
                  <span className="text-[#c8a85d] mr-2">›</span>
                  <b className="text-[#1f3f6b]">Backed by Legacy</b> – A part of
                  CapsGold, trusted since 1901.
                </li>

                <li>
                  <span className="text-[#c8a85d] mr-2">›</span>
                  <b className="text-[#1f3f6b]">High ROI</b> – Secure revenue
                  model.
                </li>

                <li>
                  <span className="text-[#c8a85d] mr-2">›</span>
                  <b className="text-[#1f3f6b]">
                    Strategic Marketing Support
                  </b>{" "}
                  – Digital & local promotions to drive footfall.
                </li>

                <li>
                  <span className="text-[#c8a85d] mr-2">›</span>
                  <b className="text-[#1f3f6b]">End-to-End Support</b> –
                  Assistance in store setup, branding, training, and operations.
                </li>
              </ul>
            </div>

            {/* RIGHT - CUSTOMER */}
            <div className="relative pl-6 border-l-4 border-[#c8a85d]">
              <h3 className="text-2xl font-semibold text-[#1f3f6b] mb-6 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#c8a85d]"></span>
                CUSTOMER
                <span className="h-[2px] w-10 bg-[#c8a85d]"></span>
              </h3>

              <ul className="space-y-5 text-gray-700 text-[15px]">
                <li>
                  <span className="text-[#c8a85d] mr-2">›</span>
                  <b className="text-[#1f3f6b]">Trusted Mobile Gold Buyers</b> –
                  Now reaching rural areas.
                </li>

                <li>
                  <span className="text-[#c8a85d] mr-2">›</span>
                  <b className="text-[#1f3f6b]">100% Transparency & Trust</b> –
                  Fully automated process with no human intervention.
                </li>

                <li>
                  <span className="text-[#c8a85d] mr-2">›</span>
                  <b className="text-[#1f3f6b]">Advanced Purity Testing</b> –
                  KARAT METER (XRF Technology) ensures precise analysis.
                </li>

                <li>
                  <span className="text-[#c8a85d] mr-2">›</span>
                  <b className="text-[#1f3f6b]">Spot Payments</b> – Get
                  real-time payments with seamless transactions.
                </li>

                <li>
                  <span className="text-[#c8a85d] mr-2">›</span>
                  <b className="text-[#1f3f6b]">
                    Secure & Compliant Transactions
                  </b>{" "}
                  – Adhering to the highest standards.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FRANCHISE FORM ================= */}{" "}
      <motion.section
        initial={{ x: -120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-16 bg-[#f5f5f5]"
      >
        {" "}
        <div className="max-w-6xl mx-auto px-6">
          {" "}
          {/* TITLE */}{" "}
          <h2 className="text-center text-3xl font-bold text-[#1f3f6b] mb-10 flex items-center justify-center gap-4">
            {" "}
            <span className="h-[2px] w-12 bg-yellow-400"></span> YOUR JOURNEY TO
            SUCCESS BEGINS HERE!!{" "}
            <span className="h-[2px] w-12 bg-yellow-400"></span>{" "}
          </h2>{" "}
          {/* APPLICANT DETAILS */}{" "}
          <div className="bg-[#1f3f6b] text-white text-center py-4 font-semibold rounded-t-lg">
            {" "}
            APPLICANT DETAILS{" "}
          </div>{" "}
          <div className="border border-yellow-400 rounded-b-xl p-6 grid md:grid-cols-3 gap-6">
            {" "}
            <div>
              {" "}
              <label className="text-sm text-gray-700 mb-1 block">
                Full Name
              </label>{" "}
              <input
                className="w-full border border-[#1f3f6b] px-4 py-2 rounded-lg"
                placeholder="Enter full name"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="text-sm text-gray-700 mb-1 block">
                Email Address
              </label>{" "}
              <input
                className="w-full border border-[#1f3f6b] px-4 py-2 rounded-lg"
                placeholder="Enter email"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="text-sm text-gray-700 mb-1 block">
                Phone Number
              </label>{" "}
              <div className="flex">
                {" "}
                <input
                  className="w-full border border-[#1f3f6b] px-4 py-2 rounded-l-lg"
                  placeholder="Enter Mobile Number"
                />{" "}
                <button className="bg-[#1f3f6b] text-white px-4 rounded-r-lg">
                  {" "}
                  Send OTP{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* LOCATION */}{" "}
          <div className="bg-[#1f3f6b] text-white text-center py-4 font-semibold mt-10 rounded-t-lg">
            {" "}
            DESIRED FRANCHISE LOCATION{" "}
          </div>{" "}
          <div className="border border-yellow-400 rounded-b-xl p-6 grid md:grid-cols-3 gap-6">
            {" "}
            <div>
              {" "}
              <label className="text-sm text-gray-700 mb-1 block">
                City/Town
              </label>{" "}
              <input
                className="w-full border border-[#1f3f6b] px-4 py-2 rounded-lg"
                placeholder="Enter city/town"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="text-sm text-gray-700 mb-1 block">
                District
              </label>{" "}
              <input
                className="w-full border border-[#1f3f6b] px-4 py-2 rounded-lg"
                placeholder="Enter district"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="text-sm text-gray-700 mb-1 block">
                State/UT
              </label>{" "}
              <input
                className="w-full border border-[#1f3f6b] px-4 py-2 rounded-lg"
                placeholder="Enter state/UT"
              />{" "}
            </div>{" "}
          </div>{" "}
          {/* BUTTON */}{" "}
          <div className="mt-6">
            {" "}
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
              {" "}
              Next{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </motion.section>


{/* ================= WHAT DOES IT TAKE ================= */}
<motion.section
  initial={{ x: -120, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="bg-[#234a73] py-20 text-white"
>
  <div className="max-w-7xl mx-auto px-6">

    {/* TITLE */}
    <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
      <span className="h-[2px] w-16 bg-yellow-400"></span>
      WHAT DOES IT TAKE TO GET STARTED?
    </h2>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          title: "Invest",
          desc: "₹40Lakhs (One-Time setup Cost)",
          icon: "₹",
        },
        {
          title: "Marketing Fund",
          desc: "5 Lac Minimum",
          icon: "📊",
        },
        {
          title: "ROI & Payback Period",
          desc: "Minimum rate 3 Years",
          icon: "📈",
        },
        {
          title: "Agreement Term",
          desc: "5 Year of long profitability",
          icon: "📖",
        },
        {
          title: "Franchise Model",
          desc: "FICO",
          icon: "📦",
        },
        {
          title: "Operational Support",
          desc: "Branding, Staff Training, Marketing, & Software",
          icon: "🎯",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white text-black rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition"
        >
          <div className="text-4xl text-[#c8a85d] mb-4">{item.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
      ))}

    </div>

  </div>
</motion.section>


      {/* ✅ SLIDER SECTION */}
      <section className="bg-[#c8a85d] py-16 text-white text-center">
        <motion.div
          key={current}
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            {slides[current].title}
          </h2>

          <p className="text-lg">
            {slides[current].desc}
          </p>
        </motion.div>
      </section>

<Footer />
    </div>
    
    
  );
}
