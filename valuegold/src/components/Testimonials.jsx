import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Vasanth Jakkula",
    text: "True transparency, True word, True delivery, True people.",
    bottom: "20+ Branches Across Telugu States",
  },
  {
    name: "Rahul Kumar",
    text: "Very fast service and best gold price offered.",
    bottom: "Trusted by Thousands of Customers",
  },
  {
    name: "Priya Sharma",
    text: "Smooth process and instant payment received.",
    bottom: "Best Gold Buyers in India",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto change every 2 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#1f3f6b] text-white py-16 relative">
      
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        
        {/* LEFT CONTENT */}
        <div className="max-w-lg">
          
          <h2 className="text-xl text-yellow-400 mb-4">
            — HEAR FROM OUR CUSTOMERS —
          </h2>

          {/* Animated Text */}
          <p className="mb-4 transition-all duration-500">
            {testimonials[index].text}
          </p>

          {/* Stars */}
          <div className="flex gap-1 text-yellow-400 mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          {/* Name */}
          <h3 className="text-lg font-semibold">
            {testimonials[index].name}
          </h3>

          {/* Dots */}
          <div className="flex gap-2 mt-6">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === index ? "bg-yellow-400" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE (STATIC) */}
        <div className="relative">
          <img
            src="https://valuegold.com/wp-content/uploads/2024/03/Value-client.webp"
            alt="customer"
            className="w-80 h-80 rounded-full object-cover border-4 border-yellow-400"
          />
        </div>
      </div>

      {/* BOTTOM TEXT (Animated) */}
      <div className="bg-[#c7a768] text-center py-4 mt-10 text-lg font-semibold">
        {testimonials[index].bottom}
      </div>
    </section>
  );
};

export default Testimonials;