
export default function GoldCalculator() {
  return (
    <div className="bg-[#f5f2eb]">

      {/* ================= HERO ================= */}
      <section className="bg-[#1f3f6b] text-center py-10 px-6 text-white relative overflow-hidden">
        <h1 className="text-2xl md:text-4xl font-bold text-[#d4b46a]">
          UNLOCK YOUR GOLD’S TRUE VALUE,
          <br />
          WITH OUR GOLD CALCULATOR!
        </h1>

        <p className="text-sm mt-4 text-gray-200">
          Trustworthy & Transparent Service | 25+ Years Legacy of CapsGold | Best Value for Gold | Instant Cash
        </p>
      </section>

      {/* ================= MAIN SECTION ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl font-bold text-[#1f3f6b] mb-4 flex items-center gap-3">
              Old Gold Calculator
              <span className="h-[2px] w-16 bg-[#c8a85d]"></span>
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Discover the actual value of your gold effortlessly from the comfort of your home with Value Gold’s
              <span className="text-blue-600 font-medium"> Old Gold Calculator</span>.
            </p>

            <ul className="list-decimal ml-5 space-y-2 text-gray-700 mb-6">
              <li>Select The Karats of Your Gold</li>
              <li>Input Your <span className="font-semibold">Gold Weight</span> In Grams</li>
              <li>Click on ‘Next’</li>
              <li>Fill Out The Form & Our Team will get back to you</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              By leveraging <span className="text-blue-600 font-medium">Value Gold’s</span> Gold Calculator,
              you gain access to a powerful tool that simplifies the process of gold valuation.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-[#1f3f6b] p-8 rounded-xl text-white shadow-lg">

            <form className="space-y-4">

              {/* KARATS */}
              <select className="w-full p-3 rounded bg-white text-black">
                <option>Select Karats</option>
                <option>24K</option>
                <option>22K</option>
                <option>18K</option>
              </select>

              {/* GRAMS */}
              <input
                type="number"
                placeholder="Enter Grams"
                className="w-full p-3 rounded text-black"
              />

              {/* NAME */}
              <input
                placeholder="Name"
                className="w-full p-3 rounded text-black"
              />

              {/* PHONE */}
              <input
                placeholder="Phone"
                className="w-full p-3 rounded text-black"
              />

              {/* EMAIL */}
              <input
                placeholder="Email"
                className="w-full p-3 rounded text-black"
              />

              {/* CHECKBOX 1 */}
              <div className="flex items-start gap-2 text-sm">
                <input type="checkbox" />
                <p>
                  Estimated returns may vary after verification.
                  <span className="text-red-400"> (Required)</span>
                </p>
              </div>

              {/* CHECKBOX 2 */}
              <div className="flex items-start gap-2 text-sm">
                <input type="checkbox" />
                <p>
                  I authorize Value Gold to contact me via Call, SMS, Email.
                  <span className="text-red-400"> (Required)</span>
                </p>
              </div>

              {/* BUTTON */}
              <button className="bg-[#c8a85d] text-white px-6 py-3 rounded w-full">
                Submit
              </button>

            </form>

          </div>

        </div>
      </section>

    </div>
  );
}

