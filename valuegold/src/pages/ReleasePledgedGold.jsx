import React, { useState } from "react";
import Footer from "../components/Footer";

const ReleasePledgedGold = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How soon can I get my pledged gold released?",
      answer:
        "Once the basic details and documents are checked, we start the release process right away. Our aim is to make it quick and simple for you.",
    },
    {
      question: "Will someone from Value Gold help me with the release?",
      answer:
        "Yes. A team member will guide you through the steps and help you complete the process smoothly.",
    },
    {
      question: "What do I need to bring to release my pledged gold?",
      answer:
        "Just bring your ID proof and the pledge slip or receipt. If you’re unsure, our team will tell you what’s needed once they review your case.",
    },
    {
      question: "Can I sell the gold after it’s released?",
      answer:
        "Yes, once your gold is released, you can choose to keep it or sell it. If you decide to sell, we can help with the evaluation.",
    },
    {
      question: "What if I don’t have all the pledge details?",
      answer:
        "No problem. Share whatever information you remember and our team will help you find the rest.",
    },
    {
      question: "Is there a minimum quantity for releasing gold?",
      answer:
        "No, there’s no limit. Whether it’s a small ornament or a larger quantity, you can release any amount.",
    },
    {
      question: "What if the gold value turns out to be less than expected?",
      answer:
        "We’ll explain the value clearly and help you understand your best options before moving forward.",
    },
    {
      question: "Is my gold safe during the process?",
      answer:
        "Yes, your gold is always handled with care and complete security throughout the process.",
    },
  ];

  return (
    <div className="bg-[#f4efe7]">
      {/* HERO */}
      <section className="h-[320px] md:h-[420px] lg:h-[500px] bg-[url('https://valuegold.com/wp-content/uploads/2024/12/Released-pledged-gold-Banner-2-1.png.webp')] bg-cover bg-center flex items-center">
        {" "}
        <div className="bg-black/50 w-full h-full flex items-center px-10">
          <h1 className="text-white text-4xl font-bold">
            Release Your Pledged Gold Easily
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f3f6b] mb-6 flex items-center gap-3">
            RELEASE PLEDGED GOLD
            <span className="h-[2px] w-20 bg-yellow-400"></span>
          </h2>

          {/* PARAGRAPH 1 */}
          <p className="text-gray-700 text-[16px] mb-4 leading-relaxed">
            Looking to release pledged gold? At Value Gold, we make the process
            simple, transparent, and rewarding. With over 120+ years of trust
            and expertise, we help you unlock the true value of your pledged
            gold through a quick and reliable release process.
          </p>

          {/* PARAGRAPH 2 */}
          <p className="text-gray-700 text-[16px] mb-4 leading-relaxed">
            As a trusted name in gold buying, we provide a range of value-driven
            services designed to make your experience effortless and fair:
          </p>

          {/* FEATURES */}
          <div className="space-y-3 text-gray-700 text-[16px] leading-relaxed">
            <p>
              <span className="font-semibold text-black">
                Free Purity Test:
              </span>{" "}
              You can benefit from our complimentary purity testing, which helps
              you know the exact worth of your pledged gold before release. Our
              process ensures complete transparency and accuracy.
            </p>

            <p>
              <span className="font-semibold text-black">
                Instant Transfer:
              </span>{" "}
              Once your pledged gold is released, you’ll receive instant payment
              through secure and verified banking modes. No waiting, no delays
              and just a fast and smooth transaction every time.
            </p>

            <p>
              <span className="font-semibold text-black">
                Transparent Process:
              </span>{" "}
              From evaluation to release, every step is automated and honest—no
              hidden deductions or misleading offers. What you see is what you
              get. We value trust, clarity, and customer satisfaction above all.
            </p>

            <p>
              Let Value Gold assist you in releasing your pledged gold with
              confidence and turning it into instant value today.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full">
          <img
            src="https://valuegold.com/wp-content/uploads/2023/09/Release-Pledged-Gold.jpg.webp"
            className="rounded-xl shadow-lg w-full h-[420px] object-cover"
            alt="Release Gold"
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#1f3f6b] py-20 text-white">
        {/* HEADING */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold flex items-center gap-4">
            HOW IT WORKS
            <span className="h-[2px] w-20 bg-yellow-400"></span>
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
          {[
            {
              title: "Evaluation of Pledge Ticket",
              desc: "We begin by evaluating your pledged gold after coordinating with the financial institution to understand the pledge details and settlement requirements.",
              img: "https://valuegold.com/wp-content/uploads/2023/08/work_ticket_img.svg",
            },
            {
              title: "Physical Verification",
              desc: "A physical verification is conducted to authenticate the pledged gold documents and confirm the asset details or address if required.",
              img: "https://valuegold.com/wp-content/uploads/2023/08/verf_img.svg",
            },
            {
              title: "Get Advance Amount",
              desc: "After verifying the pledged gold, we make an advance payment directly to the financial institution and initiate the release of your pledged gold.",
              img: "https://valuegold.com/wp-content/uploads/2023/09/Take-Gold-2.png.webp",
            },
            {
              title: "Purity Test",
              desc: "Once released, the gold is tested using KARAT METER ( XRF Technology ) and other advanced purity testing methods in your presence to ensure full transparency and accuracy.",
              img: "https://valuegold.com/wp-content/uploads/2023/08/work_icon2.svg",
            },
            {
              title: "Melt for Better Value",
              desc: "The gold is melted and weighed in front of you to determine the precise value, ensuring you receive the best possible market rate for your jewellery.",
              img: "https://valuegold.com/wp-content/uploads/2023/08/work_icon3.svg",
            },
            {
              title: "Receive Balance Amount",
              desc: "After the purity verification and valuation, the remaining amount is transferred instantly to your account, completing a smooth and secure transaction.",
              img: "https://valuegold.com/wp-content/uploads/2023/09/Group-1482-2.png.webp",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white text-black rounded-2xl 
      p-8 
      min-h-[340px] 
      w-full
      text-center 
      shadow-md 
      flex flex-col items-center justify-between 
      transition duration-300 hover:-translate-y-2 hover:shadow-xl group"
            >
              {/* STEP */}
              <span className="text-xs bg-gray-200 px-3 py-1 rounded mb-3 self-start">
                Step {i + 1}
              </span>

              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.title}
                className="w-28 mb-6 opacity-80 transition duration-300 group-hover:scale-110"
              />

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="py-20 bg-[#f4efe7]">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1f3f6b] mb-12 flex items-center gap-4">
            DOCUMENTS REQUIRED
            <span className="h-[2px] w-20 bg-yellow-400"></span>
          </h2>

          {/* CARDS */}
          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                title: "Aadhar Card",
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
                title: "Bank Passbook",
                img: "https://valuegold.com/wp-content/uploads/2023/08/passbook.png.webp",
              },
              {
                title: "Pledged Ticket",
                img: "https://valuegold.com/wp-content/uploads/2023/08/doc_icon5.svg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#1f3f6b] rounded-2xl 
          py-10 px-6 text-center 
          flex flex-col items-center justify-center
          min-h-[200px]
          transition duration-300 hover:-translate-y-2 hover:shadow-xl group"
              >
                {/* ICON */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-20 md:w-24 mb-5 
            filter brightness-0 invert sepia saturate-[5] hue-rotate-[20deg]
            transition duration-300 group-hover:scale-110"
                />

                {/* TITLE */}
                <h3 className="text-lg md:text-xl font-medium text-[#d7c69e]">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 text-white overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src="https://images.pond5.com/persons-hands-counting-crisp-banknotes-footage-311563827_iconl.jpeg"
            alt="bg"
            className="w-full h-full object-cover"
          />

          {/* BLUE OVERLAY */}
          <div className="absolute inset-0 bg-[#1f3f6b]/90"></div>

          {/* OPTIONAL BLUR EFFECT */}
          <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        </div>

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT TEXT */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              LOOKING TO RELEASE YOUR PLEDGED GOLD?
            </h2>

            <p className="text-gray-200 text-[16px] leading-relaxed mb-4">
              Value Gold offers a fast, transparent, and reliable way to release
              pledged gold with ease and confidence.
            </p>

            <p className="text-gray-200 text-[16px] leading-relaxed">
              At Value Gold, we understand that releasing pledged gold can feel
              overwhelming. That’s why we’ve designed a simple and secure
              process that ensures a smooth experience from start to finish.
              Whether you want to release pledged gold or are searching for
              trusted pledged gold buyers, our experts are here to help every
              step of the way.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white text-black p-8 rounded-2xl shadow-2xl w-full max-w-xl ml-auto">
            <h3 className="text-lg font-semibold mb-6 text-[#1f3f6b]">
              Request a Call Back
            </h3>

            <form className="space-y-4">
              {/* NAME */}
              <div>
                <label className="text-xs text-gray-600 mb-1 block">
                  Full Name
                </label>
                <input
                  placeholder="Enter your first name"
                  className="w-full px-4 py-3 rounded-xl border border-[#1f3f6b] bg-[#f3f3f3] focus:outline-none focus:ring-2 focus:ring-[#1f3f6b]/30"
                />
              </div>

              {/* MOBILE */}
              <div>
                <label className="text-xs text-gray-600 mb-1 block">
                  Mobile Number
                </label>
                <input
                  placeholder="Enter your mobile number"
                  className="w-full px-4 py-3 rounded-xl border border-[#1f3f6b] bg-[#f3f3f3] focus:outline-none focus:ring-2 focus:ring-[#1f3f6b]/30"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-xs text-gray-600 mb-1 block">
                  Email
                </label>
                <input
                  placeholder="name@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#1f3f6b] bg-[#f3f3f3] focus:outline-none focus:ring-2 focus:ring-[#1f3f6b]/30"
                />
              </div>

              {/* LOCATION */}
              <div>
                <label className="text-xs text-gray-600 mb-1 block">
                  Location
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-[#1f3f6b] bg-[#f3f3f3] focus:outline-none focus:ring-2 focus:ring-[#1f3f6b]/30">
                  <option>Please Select State.</option>
                </select>
              </div>

              {/* AREA */}
              <div>
                <label className="text-xs text-gray-600 mb-1 block">
                  Let Us Know Your Area.
                </label>
                <input
                  placeholder="Let Us Know Your Area"
                  className="w-full px-4 py-3 rounded-xl border border-[#1f3f6b] bg-[#f3f3f3] focus:outline-none focus:ring-2 focus:ring-[#1f3f6b]/30"
                />
              </div>

              {/* CHECKBOX */}
              <div className="flex items-start gap-2 text-xs text-gray-600">
                <input type="checkbox" className="mt-1" />
                <p>
                  I authorize Value Gold and its representatives to contact me
                  via Call, SMS, Email, or WhatsApp regarding their products and
                  offers.
                </p>
              </div>

              {/* BUTTON */}
              <button className="bg-[#1f3f6b] text-white w-full py-3 rounded-lg font-medium hover:bg-[#17345a] transition">
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

        <div className="max-w-7xl mx-auto space-y-5 px-6">
          {" "}
          {faqs.map((item, index) => (
            <div key={index} className="rounded-lg shadow-md overflow-hidden">
              <div
                className={`p-5 flex justify-between cursor-pointer ${
                  openIndex === index
                    ? "bg-[#c8a85d] text-white"
                    : "bg-white hover:bg-[#c8a85d] hover:text-white"
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg text-gray-600 group-hover:text-white">
                  {item.question}
                </h3>{" "}
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </div>

              {openIndex === index && (
                <div className="bg-white px-6 pt-4 pb-6 text-base text-gray-700">
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

export default ReleasePledgedGold;
