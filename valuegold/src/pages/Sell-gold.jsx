import { useState } from "react";
import Footer from "../components/Footer";

const SellGold = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How to sell gold?",
      answer:
        "Walk into your nearest Value Gold store to sell gold ornaments, coins, bars, or other items. We offer the best market value per gram through a simple, transparent process.",
    },
    {
      question: "How is the purity of gold checked?",
      answer:
        "We use KARAT METER ( XRF Technology ), ultrasonic cleaning, steam treatment, and melting to determine gold purity with precision. This advanced process minimizes human involvement, ensuring 100% accurate and transparent readings.",
    },
    {
      question: "How long does it take to receive the amount?",
      answer:
        "Once the purity test and valuation are completed, you’ll receive your instant payment within 30 Minutes. Value Gold ensures every transaction is completed quickly and seamlessly.",
    },
    {
      question: "Can stolen gold be sold?",
      answer:
        "No. Value Gold does not buy stolen or fake gold. Selling such items is illegal, and any attempt to do so will result in legal action.",
    },
    {
      question: "Can NRIs or non-locals sell gold?",
      answer:
        "Yes, NRIs and non-locals can sell gold by providing valid documents such as a passport, PAN card, and local address proof for verification.",
    },
    {
      question: "What documents are required to sell gold?",
      answer: (
        <div>
          <p className="mb-3">
            To ensure a smooth and secure transaction, please carry the
            following documents:
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Aadhaar Card</li>
            <li>PAN Card</li>
            <li>Address Proof</li>
            <li>Bank Passbook</li>
            <li>Pledged Ticket (if redeeming pledged gold)</li>
          </ul>

          <p className="mt-4">
            These help us verify your identity and complete your instant
            transfer safely.
          </p>
        </div>
      ),
    },
    {
      question: "What is the best gold buyer?",
      answer:
        "Value Gold is trusted as one of the best gold buyers for our transparent process, precise purity testing, and instant transfer system. Our accuracy, reliability, and commitment to fair value make us a preferred choice across regions.",
    },
  ];

  return (
    <div className="bg-[#f4efe7]">
      {/* HERO */}
      <section>
        <img
          src="https://valuegold.com/wp-content/uploads/2024/12/Sell-old-gold-Banner.jpg.webp"
          className="w-full h-[500px] object-cover"
          alt="sell gold"
        />
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-[1.2fr_1.3fr] gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1f3f6b] leading-tight mb-6 uppercase">
            <span className="block whitespace-nowrap">
              SELL GOLD FOR INSTANT MONEY
            </span>
            <span className="block">WITH VALUE GOLD</span>
          </h2>

          <p className="text-gray-700 text-[17px] mb-4 leading-relaxed max-w-none">
            Are you looking to sell gold? Look no further than Value Gold, where
            we provide a seamless and transparent experience for selling old
            gold. With our 120+ years of legacy and commitment to customer
            satisfaction, we ensure that you receive the best market value for
            your gold.
          </p>

          <p className="text-gray-700 text-[17px] leading-relaxed max-w-none">
            At Value Gold, we specialize in helping you sell old gold with
            confidence. Our innovative gold valuation techniques, including the
            KARAT METER (XRF Technology) and ultrasonic cleaning, ensure
            accurate assessments of your gold’s purity. This means you can trust
            that you are receiving the most competitive value available.
          </p>
        </div>
        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="https://valuegold.com/wp-content/uploads/2023/09/Sell-Your-Gold.jpg.webp"
            alt="Sell Gold"
            className="rounded-xl shadow-xl h-[450px] w-full object-cover"
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#1f3f6b] py-20 text-white">
        {/* HEADING */}
        <div className="max-w-7xl mx-auto px-6 mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold flex items-center gap-4">
            HOW IT WORKS
            <span className="h-[2px] w-20 bg-yellow-400"></span>
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
          {/* STEP CARD */}
          {[
            {
              step: "Step 1",
              img: "https://valuegold.com/wp-content/uploads/2023/08/work_icon1.svg",
              title: "Bring Your Gold",
              desc: "Walk into the nearest Value Gold store with your old gold jewellery, coins, or bars.",
            },
            {
              step: "Step 2",
              img: "https://valuegold.com/wp-content/uploads/2023/08/work_icon2.svg",
              title: "Test for Purity",
              desc: "Your gold is tested using KARAT METER (XRF Technology), ultrasonic cleaning, steam treatment, ensuring accurate results.",
            },
            {
              step: "Step 3",
              img: "https://valuegold.com/wp-content/uploads/2023/08/work_icon3.svg",
              title: "Melt for Better Value",
              desc: "We melt and weigh your gold in front of you to ensure complete clarity and transparency.",
            },
            {
              step: "Step 4",
              img: "https://valuegold.com/wp-content/uploads/2023/09/Take-Gold-2.png.webp",
              title: "Instant Account Transfer",
              desc: "Amount is transferred instantly via IMPS, NEFT, or RTGS securely.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white text-black rounded-2xl p-5 text-center shadow-md min-h-[240px] flex flex-col justify-between transition duration-300 hover:-translate-y-2 hover:shadow-xl group"
            >
              {/* STEP */}
              <span className="text-sm bg-gray-200 text-gray-500 px-3 py-1 rounded mb-4 w-fit inline-block">
                {item.step}
              </span>

              {/* ICON */}
              <img
                src={item.img}
                alt={item.title}
                className="w-20 mx-auto mb-5 opacity-80 transition duration-300 group-hover:scale-110"
              />

              {/* TITLE */}
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>

              {/* DESCRIPTION */}
              <p className="text-base text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="py-20 bg-[#f4efe7]">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1f3f6b] flex items-center gap-4 mb-14">
            DOCUMENTS REQUIRED
            <span className="h-[2px] w-24 bg-yellow-400"></span>
          </h2>

          {/* CARDS */}
          <div className="grid md:grid-cols-4 gap-10">
            {[
              {
                title: "Aadhaar Card",
                img: "https://valuegold.com/wp-content/uploads/2023/08/doc_icon1.svg",
              },
              {
                title: "PAN Card",
                img: "https://valuegold.com/wp-content/uploads/2023/08/doc_icon2.svg",
              },
              {
                title: "Address Proof",
                img: "https://valuegold.com/wp-content/uploads/2023/08/doc_icon3.svg",
              },
              {
                title: "Bank Account Details",
                img: "https://valuegold.com/wp-content/uploads/2023/08/doc_icon4.svg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#1f3f6b] rounded-2xl py-12 px-6 text-center flex flex-col items-center justify-center
          transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-yellow-200/20 group"
              >
                {/* ICON */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-28 md:w-32 mb-6 
            filter brightness-0 invert sepia saturate-[600%] hue-rotate-[10deg]
            transition duration-300 group-hover:scale-110"
                />

                {/* TITLE */}
                <h3 className="text-lg md:text-xl font-medium text-[#d7c69e] group-hover:text-yellow-300 transition">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + FORM */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src="https://images.pond5.com/persons-hands-counting-crisp-banknotes-footage-311563827_iconl.jpeg"
            alt="bg"
            className="w-full h-full object-cover"
          />

          {/* BLUE OVERLAY (IMPORTANT) */}
          <div className="absolute inset-0 bg-[#1f3f6b]/85 backdrop-brightness-75"></div>
        </div>

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              SELL GOLD & GET INSTANT PAYMENT IN 30 MINUTES!
            </h2>

            <p className="text-[16px] leading-relaxed text-gray-200">
              Turn your unused gold into immediate returns with Value Gold. We
              make the process quick, simple, and secure, so you get the highest
              value without stress or waiting. When you choose to sell gold, you
              choose complete transparency. Our advanced purity testing, expert
              evaluation, and open process ensure you always know exactly what
              your gold is worth with no hidden deductions. Call 94778 94778 and
              our team will guide you every step of the way.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white text-black p-6 rounded-2xl shadow-xl w-full max-w-xl ml-auto">
            <h3 className="text-lg font-semibold mb-4 text-[#1f3f6b]">
              Request a Call Back
            </h3>

            <form className="space-y-4">
              {/* FULL NAME */}
              <div>
                <label className="text-xs text-gray-600 mb-1 block">
                  Full Name
                </label>
                <input
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl 
            border border-[#1f3f6b] 
            bg-[#f3f3f3] text-gray-700
            placeholder:text-gray-400
            focus:outline-none focus:ring-2 focus:ring-[#1f3f6b]/30"
                />
              </div>

              {/* MOBILE */}
              <div>
                <label className="text-xs text-gray-600 mb-1 block">
                  Mobile Number
                </label>
                <input
                  placeholder="Enter your mobile number"
                  className="w-full px-4 py-3 rounded-xl 
            border border-[#1f3f6b] 
            bg-[#f3f3f3] text-gray-700
            placeholder:text-gray-400
            focus:outline-none focus:ring-2 focus:ring-[#1f3f6b]/30"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-xs text-gray-600 mb-1 block">
                  Email
                </label>
                <input
                  placeholder="name@email.com"
                  className="w-full px-4 py-3 rounded-xl 
            border border-[#1f3f6b] 
            bg-[#f3f3f3] text-gray-700
            placeholder:text-gray-400
            focus:outline-none focus:ring-2 focus:ring-[#1f3f6b]/30"
                />
              </div>

              {/* LOCATION */}
              <div>
                <label className="text-xs text-gray-600 mb-1 block">
                  Location
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl 
            border border-[#1f3f6b] 
            bg-[#f3f3f3] text-gray-700
            focus:outline-none focus:ring-2 focus:ring-[#1f3f6b]/30"
                >
                  <option>Please Select State</option>
                </select>
              </div>

              {/* AREA */}
              <div>
                <label className="text-xs text-gray-600 mb-1 block">Area</label>
                <input
                  placeholder="Enter your area"
                  className="w-full px-4 py-3 rounded-xl 
            border border-[#1f3f6b] 
            bg-[#f3f3f3] text-gray-700
            placeholder:text-gray-400
            focus:outline-none focus:ring-2 focus:ring-[#1f3f6b]/30"
                />
              </div>

              {/* CHECKBOX */}
              <div className="flex items-start gap-2 text-xs text-gray-600">
                <input type="checkbox" className="mt-1" />
                <p>
                  I authorize Value Gold and its representatives to contact me
                  via Call, SMS, Email, or WhatsApp regarding their products and
                  offers. This consent overrides any registration made under
                  DND/NDNC.
                </p>
              </div>

              {/* BUTTON */}
              <button className="bg-[#1f3f6b] text-white w-full py-2 rounded-md text-sm font-medium hover:bg-[#17345a] transition">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <h2 className="text-center text-3xl font-semibold text-[#1f3f6b] mb-10">
          FAQ'S
        </h2>

        <div className="max-w-5xl mx-auto space-y-5 px-4">
          {faqs.map((item, index) => (
            <div key={index} className="rounded-lg shadow-md overflow-hidden">
              {/* QUESTION */}
              <div
                className={`p-5 flex justify-between items-center cursor-pointer transition duration-300 ${
                  openIndex === index
                    ? "bg-[#c8a85d] text-white"
                    : "bg-white hover:bg-[#c8a85d] hover:text-white"
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-medium text-lg">{item.question}</h3>
                <span className="text-sm">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </div>

              {/* ANSWER */}
              {openIndex === index && (
                <div className="bg-white text-gray-700 px-6 pt-4 pb-6 text-base leading-relaxed border-t">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SellGold;
