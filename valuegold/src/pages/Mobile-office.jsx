import { useState, useEffect } from "react";
import Footer from "../components/Footer";
export default function MobileOfficePage() {
  const [current, setCurrent] = useState(0);

  const images = [
    "https://valuegold.com/wp-content/uploads/2025/11/Van-3.webp",
    "https://valuegold.com/wp-content/uploads/2025/11/Van-2.webp",
    "https://valuegold.com/wp-content/uploads/2025/11/van-1.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* ================= HERO SLIDER ================= */}
      <section className="relative h-[350px] md:h-[500px] overflow-hidden">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </section>
      {/* ================= HOW IT WORKS ================= */}
      <section className="py-24 relative text-white">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1769871771103-7d2e938d185e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2hpdGUlMjB0aWxlcyUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D"
            className="w-full h-full object-cover"
            alt=""
          />
          {/* DARK OVERLAY */}
          {/* <div className="absolute inset-0 bg-[#1f3f6b]/85"></div> */}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl text-[#173f6d] md:text-4xl font-bold mb-2 flex items-center gap-3">
              HOW DOES IT WORK?
              <span className="h-[2px] w-16 bg-yellow-400"></span>
            </h2>

            <p className="text-gray-600 mb-10">
              Vehicle Scheduler: We Buy Gold At Your Doorstep
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Mobile Service",
                  desc: "Bring your gold to our Mobile Office",
                  img: "https://valuegold.com/wp-content/uploads/2023/08/work_icon1.svg",
                },
                {
                  title: "Cleaning Gold",
                  desc: "Our ultrasonic machine removes all the dirt in your gold/ornaments.",
                  img: "https://valuegold.com/wp-content/uploads/2023/08/work_icon2.svg",
                },
                {
                  title: "Evaluating the Best Value",
                  desc: "Evaluating the exact weight and purity of the gold through Weighing and KARAT METER (XRF Technology).",
                  img: "https://valuegold.com/wp-content/uploads/2023/08/work_icon3.svg",
                },
                {
                  title: "Get Instant Payment",
                  desc: "Instant cash or money transfer is done through NEFT/IMPS/RTGS.",
                  img: "https://valuegold.com/wp-content/uploads/2023/09/Take-Gold-2.png.webp",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/90 backdrop-blur-md text-black rounded-2xl p-6 shadow-lg relative min-h-[180px]"
                >
                  <h3 className="text-[#1f3f6b] font-bold text-lg mb-2">
                    Step {i + 1}
                  </h3>

                  <h4 className="font-semibold mb-2">{item.title}</h4>

                  <p className="text-sm text-gray-600 pr-10">{item.desc}</p>

                  <img
                    src={item.img}
                    className="w-10 absolute top-6 right-6 opacity-80"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center relative">
            <img
              src="https://valuegold.com/wp-content/uploads/2024/07/valuegold-van.png.webp"
              className="w-full max-w-xl object-contain"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* ================= CTA ================= */}
      <section className="relative py-28 text-white overflow-hidden">
        BACKGROUND
        <div className="absolute inset-0">
          <img
            src="https://valuegold.com/wp-content/uploads/2023/09/cta-bg.jpg"
            className="w-full h-full object-cover"
            alt=""
          />

          {/* DARK BLUE OVERLAY */}
          <div className="absolute inset-0 bg-[#1f3f6b]/90"></div>

          {/* OPTIONAL BLUR (like screenshot softness) */}
          <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        </div>
        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              Vehicle Scheduler:
              <br />
              We Buy Gold From Your Location
            </h2>

            <p className="text-gray-200 mb-6 text-[16px] leading-relaxed">
              Value Gold brings convenience to your doorstep. Our mobile service
              ensures safe, transparent, and instant gold evaluation wherever
              you are.
            </p>

            {/* IMAGE ABOVE LIST */}
            <div className="mb-6">
              <img
                src="https://valuegold.com/wp-content/uploads/2025/11/mobile-van4.webp"
                alt="mobile office"
                className="w-full max-w-xl rounded-xl shadow-lg"
              />
            </div>

            {/* LIST */}
            <ul className="space-y-3 text-gray-200 text-[15px]">
              <li>✔ Certified gold buyers</li>
              <li>✔ Free purity test using advanced technology</li>
              <li>✔ Instant payout via secure bank transfer</li>
              <li>✔ No hidden charges or deductions</li>
              <li>✔ Support for pledged gold release</li>
            </ul>
          </div>

      
{/* RIGHT FORM (SMALLER) */}
<div className="bg-[#f2f2f2] text-black p-8 rounded-[24px] shadow-xl w-full max-w-lg ml-auto">

  {/* TITLE */}
  <h3 className="text-xl font-semibold mb-6 text-[#1f3f6b]">
    Connect with Our Team
  </h3>

  <form className="space-y-4">

    {/* FULL NAME */}
    <div>
      <label className="text-xs text-gray-700 mb-1 block">
        Full Name
      </label>
      <input
        placeholder="Enter your first name"
        className="w-full px-3 py-2.5 rounded-md border-2 border-[#1f3f6b] bg-white text-sm focus:outline-none"
      />
    </div>

    {/* MOBILE */}
    <div>
      <label className="text-xs text-gray-700 mb-1 block">
        Mobile Number
      </label>
      <input
        placeholder="Enter your mobile number"
        className="w-full px-3 py-2.5 rounded-md border-2 border-[#1f3f6b] bg-white text-sm focus:outline-none"
      />
    </div>

    {/* EMAIL */}
    <div>
      <label className="text-xs text-gray-700 mb-1 block">
        Email
      </label>
      <input
        placeholder="name@email.com"
        className="w-full px-3 py-2.5 rounded-md border-2 border-[#1f3f6b] bg-white text-sm focus:outline-none"
      />
    </div>

    {/* LOCATION */}
    <div>
      <label className="text-xs text-gray-700 mb-1 block">
        Location
      </label>
      <select className="w-full px-3 py-2.5 rounded-md border-2 border-[#1f3f6b] bg-white text-sm focus:outline-none">
        <option>Please Select State.</option>
      </select>
    </div>

    {/* AREA */}
    <div>
      <label className="text-xs text-gray-700 mb-1 block">
        Let Us Know Your Area.
      </label>
      <input
        placeholder="Let Us Know Your Area"
        className="w-full px-3 py-2.5 rounded-md border-2 border-[#1f3f6b] bg-white text-sm focus:outline-none"
      />
    </div>

    {/* DATE */}
    <div>
      <label className="text-xs text-gray-700 mb-1 block">
        Date
      </label>
      <input
        type="date"
        className="w-full px-3 py-2.5 rounded-md border-2 border-[#1f3f6b] bg-white text-sm focus:outline-none"
      />
    </div>

    {/* CHECKBOX */}
    <div className="flex items-start gap-2 text-xs text-gray-700">
      <input type="checkbox" className="mt-1" />
      <p>
        I authorize Value Gold and its representatives to contact me via Call,
        SMS, Email, or WhatsApp regarding their products and offers.
      </p>
    </div>

    {/* BUTTON */}
    <button className="w-full py-2.5 rounded-md bg-[#c8a85d] text-white text-sm font-medium hover:bg-[#b8964e] transition">
      SUBMIT
    </button>

  </form>
</div>


        </div>
      </section>
      
      
{/* ================= DOCUMENTS ================= */}
<section className="relative py-24 bg-[#f4efe7] overflow-hidden">

  {/* BACKGROUND COINS */}
  <div className="absolute inset-0 opacity-20 pointer-events-none">
    <img
      src="https://images.unsplash.com/photo-1669951584605-4deba095a87f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGNvaW5zJTIwYmFja2dyb3VuZCUyMGluJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D"
      alt=""
      className="w-full h-full object-cover"
    />
  </div>

  <div className="relative max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <h2 className="text-3xl md:text-4xl font-semibold text-[#1f3f6b] mb-14 flex items-center gap-4">
      <span className="h-[2px] w-16 bg-[#c8a85d]"></span>
      DOCUMENTS REQUIRED
      <span className="h-[2px] w-16 bg-[#c8a85d]"></span>
    </h2>

    {/* CARDS */}
    <div className="grid md:grid-cols-4 gap-8">

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
          title: "Bank Account Details",
          img: "https://valuegold.com/wp-content/uploads/2023/08/doc_icon4.svg",
        },
      ].map((item, i) => (

        <div
          key={i}
          className="bg-[#234a74] rounded-2xl py-10 px-6 text-center flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
        >

          {/* ICON */}
          <img
            src={item.img}
            alt={item.title}
            className="w-20 mb-5 filter brightness-0 invert sepia hue-rotate-[20deg] saturate-[5]"
          />

          {/* TITLE */}
          <h3 className="text-[#d7c69e] text-lg font-medium">
            {item.title}
          </h3>

        </div>

      ))}

    </div>

  </div>
</section>


      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}
