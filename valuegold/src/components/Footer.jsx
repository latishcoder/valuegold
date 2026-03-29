import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const tags = [
  "Value Gold",
  "Sell Old Gold",
  "Release Pledged Gold",
  "Gold Buyers",
  "ValueGold",
  "Old Gold Buyers",
  "Best Gold Company",
  "Sell Gold",
  "Best Place To Sell Gold",
  "Old Gold Selling Company",
  "Sell Gold For Cash",
  "Old Gold Price Calculator",
  "Gold Resale Value Calculator",
  "Old Gold Selling Rate Calculator",
  "How To Sell Gold For Cash",
  "Where To Sell Gold For Cash",
];

const Footer = () => {
  return (
    <footer className="bg-[#1f3f6b] text-white pt-16 px-6">
      
      {/* TOP SECTION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        
        {/* LOGO + DESC */}
        <div>
          <img
            src="https://valuegold.com/wp-content/uploads/2024/07/Logo-Updated-White.png.webp"
            alt="logo"
            className="h-12 mb-4"
          />

          <p className="text-sm text-gray-300 leading-6">
            Value Gold offers a comprehensive range of solutions designed to meet the diverse needs of individuals seeking assistance with their gold assets.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Sell Gold</li>
            <li className="hover:text-white cursor-pointer">Release Pledged Gold</li>
            <li className="hover:text-white cursor-pointer">FAQ's</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Reach Us</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg mb-4">Contact Us</h3>

          <div className="flex gap-2 text-sm mb-3">
            <FaMapMarkerAlt />
            <p>
              3rd Floor, Banjara Hills, Hyderabad 500034
            </p>
          </div>

          <div className="flex gap-2 text-sm mb-2">
            <FaPhone /> +91 94778 94778
          </div>

          <div className="flex gap-2 text-sm mb-2">
            <FaPhone /> +91 040 2331 8899
          </div>

          <div className="flex gap-2 text-sm">
            <FaEnvelope /> info@valuegold.com
          </div>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-lg mb-4">Get In Touch</h3>

          <div className="flex gap-3">
            <FaLinkedin className="border p-2 text-3xl cursor-pointer hover:bg-white hover:text-blue-900 transition" />
            <FaTwitter className="border p-2 text-3xl cursor-pointer hover:bg-white hover:text-blue-900 transition" />
            <FaInstagram className="border p-2 text-3xl cursor-pointer hover:bg-white hover:text-blue-900 transition" />
            <FaYoutube className="border p-2 text-3xl cursor-pointer hover:bg-white hover:text-blue-900 transition" />
            <FaFacebook className="border p-2 text-3xl cursor-pointer hover:bg-white hover:text-blue-900 transition" />
          </div>
        </div>
      </div>

      {/* POPULAR SEARCH */}
      <div className="mt-16 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-10 h-[2px] bg-yellow-500"></div>
          <h2 className="text-2xl font-semibold">POPULAR SEARCH</h2>
          <div className="w-10 h-[2px] bg-yellow-500"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#c7a768] text-white px-4 py-1 rounded-md text-sm cursor-pointer hover:opacity-80 transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-500 mt-10 py-4 text-center text-sm text-gray-300">
        Copyright © 2026 ValueGold. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;