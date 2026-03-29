import Footer from "../components/Footer";

export default function PressReleases() {
  const pressData = [
    {
      title: "LAUNCH OF 7 BRANCHES IN AP",
      img: "https://valuegold.com/wp-content/uploads/2025/12/LAUNCH-OF-7-BRANCHES-IN-AP.webp",
    },
    {
      title: "LAUNCH IN MANIKONDA AND AS RAO NAGAR",
      img: "https://valuegold.com/wp-content/uploads/2025/12/LAUNCH-IN-MANIKONDA-AND-AS-RAO-NAGAR.webp",
    },
    {
      title: "ROAD SHOW AT WARANGAL",
      img: "https://valuegold.com/wp-content/uploads/2025/12/ROAD-SHOW-AT-WARANGAL.webp",
    },
    {
      title: "MOBILE GOLD BUYING SERVICE LAUNCHED",
      img: "https://valuegold.com/wp-content/uploads/2025/12/MOBILE-GOLD-BUYING-SERVICE-LAUNCHED.webp",
    },
    {
      title: "BRAND LAUNCH WITH 3 BRANCHES",
      img: "https://valuegold.com/wp-content/uploads/2025/12/BRAND-LAUNCH-WITH-3-BRANCHES-1.webp",
    },
    {
      title: "TIMES BUSINESS AWARDS 2023",
      img: "https://valuegold.com/wp-content/uploads/2025/12/TIMES-BUSINESS-AWARDS-2023.webp",
    },
  ];

  return (
    <div className="bg-[#f5f2eb]">

      {/* ================= HEADER ================= */}
      <section className="bg-[#234a74] py-20 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-semibold flex items-center justify-center gap-4 text-[#d4b46a]">
          <span className="h-[2px] w-16 bg-[#d4b46a]"></span>
          PRESS RELEASES
          <span className="h-[2px] w-16 bg-[#d4b46a]"></span>
        </h1>
      </section>

      {/* ================= GRID ================= */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">

          {pressData.map((item, i) => (
            <div key={i} className="group cursor-pointer">

              {/* IMAGE */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-[240px] object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-[#1f3f6b] leading-snug">
                  {item.title}
                </h3>

                <p className="text-[#c8a85d] mt-2 text-sm cursor-pointer hover:underline">
                  Read More
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      
      <Footer />
    </div>
  );
}

