import React from "react";

const services = [
  {
    title: "Sell Gold",
    desc: "Leverage your gold with ease during emergencies or financial needs. Convert your gold in a hassle-free way to handle unexpected expenses or meet important requirements.",
    img: "https://valuegold.com/wp-content/uploads/2024/05/760x272-sell-old-gold.webp",
    bg: "bg-[#1f3f6b]",
  },
  {
    title: "Release Pledged Gold",
    desc: "Escape the burden of mounting interest rates. Release your pledged gold stress-free with Value Gold and receive the remaining value smoothly and quickly.",
    img: "https://valuegold.com/wp-content/uploads/2024/05/760x272-release-pledge.webp",
    bg: "bg-[#c7a768]",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#f4efe7] py-16 px-6">
      
      {/* ================= BEST GOLD BUYERS ================= */}
      <div className="text-center mb-12">
        
        {/* Heading with lines */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-10 h-[2px] bg-yellow-600"></div>
          <h2 className="text-3xl font-semibold text-blue-900">
            BEST GOLD BUYERS
          </h2>
          <div className="w-10 h-[2px] bg-yellow-600"></div>
        </div>

        {/* Description */}
        <p className="max-w-4xl mx-auto text-gray-700 leading-7">
          Value Gold recognized as one of the best gold buyers in India, we provide a seamless and trustworthy experience for those looking to sell their gold. With 120+ years of heritage from the CapsGold legacy, we ensure that our customers receive the best market value for their gold and silver items. With multiple branches across major cities, Value Gold is your trusted destination for selling gold with ease and confidence.
        </p>
      </div>

      {/* ================= OUR SERVICES ================= */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="w-10 h-[2px] bg-yellow-600"></div>
        <h2 className="text-3xl font-semibold text-blue-900">
          OUR SERVICES
        </h2>
        <div className="w-10 h-[2px] bg-yellow-600"></div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} group text-white rounded-2xl p-6 shadow-lg 
            transform transition-all duration-300 
            hover:-translate-y-3 hover:shadow-2xl`}
          >
            
            {/* Image */}
            <div className="overflow-hidden rounded-xl mb-5">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover 
                transition-transform duration-300 
                group-hover:scale-105"
              />
            </div>

            {/* Title + Arrow */}
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <button
                className="border border-white px-3 py-1 rounded-full 
                transition-all duration-300 
                group-hover:bg-white group-hover:text-black 
                group-hover:translate-x-1"
              >
                →
              </button>
            </div>

            {/* Description */}
            <p className="text-sm leading-6 text-gray-200">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;