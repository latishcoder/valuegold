import React, { useState } from "react";

const faqs = [
  {
    question: "What services does Value Gold offer?",
    answer:
      "Value Gold buys gold and also helps release pledged gold by purchasing it at the best market value.",
  },
  {
    question: "What is the best way to sell gold?",
    answer: "Visit Value Gold for instant evaluation and best price.",
  },
  {
    question: "Why should Value Gold be your choice to sell gold?",
    answer: "Because of transparency, best rates, and instant payment.",
  },
  {
    question: "Where can I sell gold near me?",
    answer: "You can visit any Value Gold branch near you.",
  },
  {
    question: "Where to sell gold?",
    answer: "Sell gold at trusted buyers like Value Gold.",
  },
  {
    question: "How soon can pledged gold be released?",
    answer: "It can be released instantly after evaluation.",
  },
  {
    question: "What are the branch timings?",
    answer: "Most branches are open from 10 AM to 7 PM.",
  },
  {
    question: "Which is the best Gold buying Store?",
    answer: "Value Gold is one of the best gold buyers.",
  },
  {
    question: "What documents are required to sell gold?",
    answer: "Valid ID proof is required.",
  },
  {
    question: "How to contact Value Gold?",
    answer: "You can call or visit the nearest branch.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6">
      
      {/* Heading */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="w-10 h-[2px] bg-yellow-600"></div>
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">
          FAQ'S
        </h2>
        <div className="w-10 h-[2px] bg-yellow-600"></div>
      </div>

      {/* Accordion */}
      <div className="max-w-5xl mx-auto border rounded-lg overflow-hidden">
        {faqs.map((item, index) => (
          <div key={index} className="border-b">
            
            {/* Question */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition"
            >
              {item.question}
              <span className="text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Answer */}
            <div
              className={`px-6 overflow-hidden transition-all duration-300 ${
                activeIndex === index
                  ? "max-h-40 py-3"
                  : "max-h-0"
              }`}
            >
              <p className="text-gray-600 text-sm">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;