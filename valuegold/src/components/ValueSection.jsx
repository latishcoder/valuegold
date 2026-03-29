import React, { useState } from "react";

const data = [
  {
    title: "VALUE",
    content: `We stand for trust, transparency, and fairness.
Every customer who walks in is treated with dignity, and every gram of gold is evaluated with honesty, accuracy, and respect.`,
  },
  {
    title: "VISION",
    content: `To become India's most trusted gold buying brand by delivering transparent and innovative financial solutions to every customer.`,
  },
  {
    title: "MISSION",
    content: `To provide fast, reliable, and honest gold services while ensuring maximum value and customer satisfaction.`,
  },
];

const ValueSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#f4efe7] py-16 px-6">
      
      <div className="max-w-5xl mx-auto bg-[#1f3f6b] rounded-3xl p-10 flex flex-col md:flex-row gap-12 text-white">
        
        {/* LEFT SIDE (TABS) */}
        <div className="flex flex-col gap-6 min-w-[180px]">
          {data.map((item, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`text-left text-2xl tracking-wider transition-all duration-300 ${
                active === index
                  ? "text-white font-semibold border-b-2 border-yellow-400 pb-1"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* RIGHT SIDE (CONTENT) */}
        <div className="flex-1">
          <p className="text-lg leading-7 whitespace-pre-line transition-all duration-300">
            {data[active].content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;