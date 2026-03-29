import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const data = [
  {
    feature: "Gold Rate Offered",
    value: "Highest market-linked gold price",
    other: "Often lower than live market rate",
  },
  {
    feature: "Purity Testing",
    value: "Free, transparent XRF-based purity testing",
    other: "Manual or unclear testing methods",
  },
  {
    feature: "Weight Deduction",
    value: "No hidden deductions",
    other: "Stone and wastage deductions applied",
  },
  {
    feature: "Minimum Quantity",
    value: "Buyback starting from just 1 gram",
    other: "Minimum weight restrictions",
  },
  {
    feature: "Payment Method",
    value: "Instant payment via Account Transfer / IMPS / NEFT",
    other: "Delayed or limited payment options",
  },
  {
    feature: "Process Transparency",
    value: "100% process done in front of the customer",
    other: "Backend processing with less clarity",
  },
  {
    feature: "Legacy & Trust",
    value: "125+ years of trusted gold industry legacy",
    other: "Limited or no proven legacy",
  },
  {
    feature: "Branch Network",
    value: "Multiple branches across Telangana & Andhra Pradesh",
    other: "Limited locations",
  },
  {
    feature: "Customer Support",
    value: "Dedicated, trained gold professionals",
    other: "Inconsistent customer experience",
  },
  {
    feature: "Documentation",
    value: "Proper billing & full compliance",
    other: "Incomplete or unclear paperwork",
  },
];

const ComparisonTable = () => {
  return (
    <section className="bg-[#f4efe7] py-16 px-6">
      
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
        Value Gold vs Other Gold Buyers – Feature Comparison
      </h2>

      {/* Table Container */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* Header */}
        <div className="grid grid-cols-3 bg-gradient-to-r from-yellow-600 to-yellow-400 text-white font-semibold text-center py-4">
          <div>Feature</div>
          <div>Value Gold</div>
          <div>Other Gold Buyers</div>
        </div>

        {/* Rows */}
        {data.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-3 items-center border-b px-4 py-4 text-sm md:text-base hover:bg-gray-50 transition"
          >
            {/* Feature */}
            <div className="font-medium text-gray-800">
              {item.feature}
            </div>

            {/* Value Gold */}
            <div className="flex items-center gap-2 text-green-700">
              <FaCheck className="text-green-600" />
              {item.value}
            </div>

            {/* Other */}
            <div className="flex items-center gap-2 text-red-600">
              <FaTimes className="text-red-500" />
              {item.other}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComparisonTable;