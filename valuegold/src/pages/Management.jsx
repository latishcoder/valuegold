import React from "react";
import Footer from "../components/Footer";

const team = [
  {
    name: "Mr. Chanda Abhishek",
    role: "Managing Director",
    img: "https://valuegold.com/wp-content/uploads/2025/08/Mr.-Abhishek-Chanda-Director-768x768.webp",
    reverse: false,
    desc: `Inspired by a rich family legacy, Mr. Abhishek Chanda joined the business in 2011, bringing in change management and technological advancements.

Recognizing the need for diversification, he played a pivotal role in establishing Kalasha Fine Jewels.

With a vision to redefine trust and transparency, he introduced Value Gold with automated processes.`,
  },
  {
    name: "Mr. Chanda Akhil",
    role: "Director",
    img: "https://valuegold.com/wp-content/uploads/2025/08/Mr.-Akhil-Chanda-Director.webp",
    reverse: true,
    desc: `Chanda Akhil joined Caps Gold in 2020 and led major transformations to make the business more user-friendly and accessible.

He played a key role in expanding branches across multiple cities.

He contributes to modern and customer-centric gold buying solutions.`,
  },
  {
    name: "Mrs. Sowmya Chanda",
    role: "Director",
    img: "https://valuegold.com/wp-content/uploads/2025/08/Ms.-Sowmya-Chanda-Director.webp",
    reverse: false,
    desc: `Sowmya Chanda is a dynamic leader known for her vision and innovation.

She spearheads HR and IT divisions, strengthening organizational culture and growth.

Her leadership blends modern strategy with traditional values.`,
  },
  {
    name: "Mrs. Ashika Chanda",
    role: "Director",
    img: "https://valuegold.com/wp-content/uploads/2026/02/Ashika-Chanda-768x768.webp",
    reverse: true,
    desc: `Ashika Chanda leads digital marketing and brand-building initiatives.

She drives innovation in customer engagement and online presence.

Her approach ensures Value Gold stays ahead in the digital landscape.`,
  },
];

const Management = () => {
  return (
    <div className="bg-[#f4efe7]">

      {/* HEADER */}
      <section className="bg-[#1f3f6b] py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-yellow-400 tracking-wide">
          — MANAGEMENT —
        </h1>
      </section>

      {/* TEAM */}
      <section className="py-16 px-6 space-y-20 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              member.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            
            {/* IMAGE */}
            <div className="w-full md:w-1/2">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg hover:scale-105 transition duration-300"
              />
            </div>

            {/* TEXT */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-semibold text-blue-900 mb-2">
                {member.name}
              </h2>

              <p className="text-gray-600 italic mb-4">
                – {member.role}
              </p>

              <p className="text-gray-700 leading-7 whitespace-pre-line">
                {member.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* GROUP IMAGE */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <img
            src="https://valuegold.com/wp-content/uploads/2025/08/Directors.webp"
            alt="team"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Management;