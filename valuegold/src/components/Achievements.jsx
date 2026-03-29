import React from "react";
import { FaUsers, FaMapMarkedAlt, FaBuilding, FaBus } from "react-icons/fa";

const data = [
  {
    icon: <FaUsers />,
    number: "10,000+",
    label: "Customers",
    bg: "bg-[#1f3f6b]",
  },
  {
    icon: <FaMapMarkedAlt />,
    number: "2",
    label: "States",
    bg: "bg-[#c7a768]",
  },
  {
    icon: <FaBuilding />,
    number: "19+",
    label: "Branches",
    bg: "bg-[#1f3f6b]",
  },
  {
    icon: <FaBus />,
    number: "",
    label: "First Ever Mobile Branch In Telugu States",
    bg: "bg-[#c7a768]",
  },
];

const Achievements = () => {
  return (
    <section className="bg-[#d9c7a3] pt-16 pb-28 px-6">
      
      {/* Heading */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="w-10 h-[2px] bg-yellow-600"></div>
        <h2 className="text-3xl font-semibold text-blue-900">
          OUR ACHIEVEMENTS
        </h2>
        <div className="w-10 h-[2px] bg-yellow-600"></div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} text-white rounded-2xl p-8 text-center 
            transform transition-all duration-300 
            hover:-translate-y-3 hover:shadow-2xl group`}
          >
            
            {/* Icon */}
            <div className="text-4xl mb-4 opacity-90 
            group-hover:scale-110 transition duration-300">
              {item.icon}
            </div>

            {/* Number */}
            {item.number && (
              <h3 className="text-3xl font-bold mb-2">
                {item.number}
              </h3>
            )}

            {/* Label */}
            <p className="text-sm leading-5">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom white section overlap effect */}
      <div className="bg-white h-24 mt-[-60px]"></div>
    </section>
  );
};

export default Achievements;