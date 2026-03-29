import React from "react";
import Footer from "../components/Footer";

const PledgeCalculator = () => {
  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="bg-[#1f3f6b] text-white py-12 text-center">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Discover The Value Of Your Pledged Gold,
          <br /> with our Pledged Gold Calculator.
        </h1>
        <p className="mt-3 text-sm opacity-80">
          #SellYourGoldBefikar with us!
        </p>
      </section>

      {/* ================= MAIN SECTION ================= */}
      <section className="py-16 bg-[#f7f5ef]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl font-bold text-[#1f3f6b] mb-4">
              Pledged Gold Calculator
            </h2>

            <p className="text-gray-700 mb-4">
              Unlock the true value of your gold that’s used as collateral in your loan,
              with our <span className="text-[#1f3f6b] font-semibold">pledged gold calculator</span>.
            </p>

            <ol className="space-y-2 text-gray-700 text-sm leading-relaxed">
              <li>1. Mention the Financial Institution</li>
              <li>2. Enter the pledged gold’s gross weight</li>
              <li>3. Select the karats of your gold</li>
              <li>4. Enter the pledged gold’s net weight</li>
              <li>5. Enter the loan amount</li>
              <li>6. Click on ‘Next’</li>
              <li>7. Fill out the form</li>
            </ol>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-[#244a78] p-8 rounded-xl text-white shadow-xl">
            
            {/* STEPS */}
            <div className="flex gap-3 mb-6">
              <span className="w-8 h-8 flex items-center justify-center bg-yellow-400 text-black rounded-full font-semibold">
                1
              </span>
              <span className="w-8 h-8 flex items-center justify-center bg-gray-200 text-black rounded-full">
                2
              </span>
              <span className="w-8 h-8 flex items-center justify-center bg-gray-200 text-black rounded-full">
                3
              </span>
            </div>

            {/* FORM */}
            <div className="space-y-4">
              <input
                placeholder="Enter Financial institution"
                className="w-full p-3 rounded bg-gray-100 text-black outline-none"
              />

              <input
                placeholder="Gross weight in grams"
                className="w-full p-3 rounded bg-gray-100 text-black outline-none"
              />

              <select className="w-full p-3 rounded bg-gray-100 text-black outline-none">
                <option>KARATS</option>
                <option>18K</option>
                <option>22K</option>
                <option>24K</option>
              </select>

              <input
                placeholder="Loan Amount"
                className="w-full p-3 rounded bg-gray-100 text-black outline-none"
              />

              <button className="bg-blue-600 px-6 py-2 rounded text-white">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PledgeCalculator;