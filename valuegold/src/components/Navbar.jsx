import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const menuItems = [
    {
      name: "OUR LEGACY",
      children: [
        { name: "ABOUT US", path: "/about" },
        { name: "MANAGEMENT", path: "/management" },
        { name: "AWARDS", path: "/awards" },
      ],
    },
    {
      name: "OUR SERVICES",
      children: [
        { name: "SELL GOLD", path: "/sell-gold" },
        { name: "RELEASE PLEDGED GOLD", path: "/release-gold" },
        { name: "MOBILE OFFICE", path: "/mobile-office" },
      ],
    },
    {
      name: "EXPERIENCE",
      children: [
        { name: "NEWS / MEDIA", path: "/experience" },
        { name: "PRESS RELEASES", path: "/press-releases" },
        { name: "EVENTS", path: "/events-openings" },
      ],
    },
    {
      name: "PARTNER WITH US",
      path: "/partner",
    },
    {
      name: "BLOG",
      path: "/blog",
    },
    {
      name: "REACH US",
      path: "/contact",
    },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-white shadow-md px-10 py-3 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src="https://valuegold.com/wp-content/uploads/2024/06/Logo-Updated-Blue.png.webp"
            alt="Value Gold Logo"
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* MENU */}
        <ul className="flex gap-8 relative">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => {
                clearTimeout(window.dropdownTimeout);
                setOpenDropdown(index);
              }}
              onMouseLeave={() => {
                window.dropdownTimeout = setTimeout(() => {
                  setOpenDropdown(null);
                }, 200);
              }}
            >
              {/* MAIN MENU */}
              {item.path ? (
                <Link
                  to={item.path}
                  className="font-medium text-black hover:text-yellow-600"
                >
                  {item.name}
                </Link>
              ) : (
                <span
                  className={`font-medium cursor-pointer ${
                    openDropdown === index ? "text-yellow-600" : "text-black"
                  }`}
                >
                  {item.name}
                </span>
              )}

              {/* DROPDOWN */}
              {item.children && openDropdown === index && (
                <div className="absolute top-full left-0 mt-2 bg-yellow-700 text-white w-60 shadow-lg z-50 rounded-md overflow-hidden">
                  {item.children.map((sub, i) => (
                    <Link
                      key={i}
                      to={sub.path}
                      onClick={() => setOpenDropdown(null)} // ✅ ADD THIS
                      className="block px-5 py-3 border-b border-yellow-500 hover:bg-yellow-600 text-sm"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* RIGHT BUTTONS */}
        <div className="flex gap-4">
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            ENQUIRE NOW
          </button>

          <button className="bg-blue-900 text-white px-6 py-2 rounded-lg">
            +91 94778 94778
          </button>
        </div>
      </nav>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-[400px] relative">
            {/* CLOSE */}
            <button
              className="absolute top-3 right-4 text-gray-500 text-xl"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4">Enquire Now</h2>

            <form className="flex flex-col gap-3">
              <input
                className="border p-2 rounded"
                placeholder="Enter your full name"
              />
              <input
                className="border p-2 rounded"
                placeholder="Enter your mobile number"
              />
              <input
                className="border p-2 rounded"
                placeholder="Enter your email"
              />

              <select className="border p-2 rounded">
                <option>Select State</option>
              </select>

              <input className="border p-2 rounded" placeholder="Your Area" />

              <select className="border p-2 rounded">
                <option>Do you want to?</option>
              </select>

              <button className="bg-yellow-600 text-white py-2 rounded mt-2 hover:bg-yellow-500 transition">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
