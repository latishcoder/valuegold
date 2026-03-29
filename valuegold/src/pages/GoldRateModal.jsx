import React from "react";

const GoldRateModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      {/* MODAL BOX */}
      <div className="bg-white w-full max-w-lg rounded-2xl p-6 relative">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 text-xl"
        >
          ✕
        </button>

        {/* TITLE */}
        <h2 className="text-2xl font-semibold text-[#1f3f6b] mb-6">
          Know Today's Gold Rate
        </h2>

        {/* FORM */}
        <div className="border border-yellow-500 rounded-xl p-5 space-y-4">
          <input
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg"
          />

          <input
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg"
          />

          <input
            placeholder="Mobile No"
            className="w-full p-3 border rounded-lg"
          />

          <input
            placeholder="Enter Your City"
            className="w-full p-3 border rounded-lg"
          />

          {/* CHECKBOX */}
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <input type="checkbox" className="mt-1" />
            <p>
              I authorize Value Gold and its representatives to contact me via
              Call, SMS, Email, RCS or WhatsApp regarding their products and
              offers. This consent overrides any registration made under
              DND/NDNC.
            </p>
          </div>

          {/* BUTTON */}
          <button className="bg-green-600 text-white px-5 py-2 rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoldRateModal;
