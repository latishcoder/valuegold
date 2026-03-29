import React from "react";

const sellSteps = [
  { title: "Bring your gold", no: "01" },
  { title: "Purity testing", no: "02" },
  { title: "Melting for better value", no: "03" },
  { title: "Instant account transfer", no: "04" },
];

const pledgeSteps = [
  { title: "Evaluation of Pledge Ticket", no: "01" },
  { title: "Physical Verification", no: "02" },
  { title: "Get an Advance Amount", no: "03" },
  { title: "Purity Test", no: "04" },
  { title: "Melt for Better Value", no: "05" },
  { title: "Receive the Balance Amount", no: "06" },
];

const StepCard = ({ title, no }) => (
  <div className="flex justify-between items-center bg-gray-100 rounded-xl px-4 py-4 
  hover:shadow-lg transition duration-300">
    
    <p className="text-sm text-gray-800">{title}</p>
    <span className="text-2xl font-bold text-gray-300">{no}</span>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="bg-[#f4efe7] py-16 px-6">
      
      {/* Top Heading */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-10 h-[2px] bg-yellow-600"></div>
          <h2 className="text-3xl font-semibold text-blue-900">
            VALUE GOLD - BEST GOLD BUYERS
          </h2>
          <div className="w-10 h-[2px] bg-yellow-600"></div>
        </div>

        <p className="max-w-4xl mx-auto text-gray-700 leading-7">
          Selling gold becomes simple, seamless, and completely reliable with Value Gold. Our streamlined method begins with a detailed assessment of the quality of your gold...
        </p>
      </div>

      {/* HOW IT WORKS */}
      <div className="max-w-6xl mx-auto">
        
        <h3 className="text-xl font-semibold text-blue-900 mb-2">
          HOW IT WORKS:
        </h3>
        <p className="text-gray-600 mb-6">
          Convert your gold in these simple steps:
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* LEFT BOX */}
          <div className="bg-[#1f3f6b] text-white rounded-2xl p-6">
            <h4 className="text-lg font-semibold mb-6 text-yellow-400">
              Sell gold for instant money:
            </h4>

            <div className="grid grid-cols-2 gap-4">
              {sellSteps.map((step, index) => (
                <StepCard key={index} {...step} />
              ))}
            </div>

            <button className="mt-6 bg-yellow-600 px-6 py-2 rounded-full">
              KNOW MORE
            </button>
          </div>

          {/* RIGHT BOX */}
          <div className="bg-[#c7a768] text-white rounded-2xl p-6">
            <h4 className="text-lg font-semibold mb-6">
              Release Pledged Gold
            </h4>

            <div className="grid grid-cols-2 gap-4">
              {pledgeSteps.map((step, index) => (
                <StepCard key={index} {...step} />
              ))}
            </div>

            <button className="mt-6 bg-blue-900 px-6 py-2 rounded-full">
              KNOW MORE
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;