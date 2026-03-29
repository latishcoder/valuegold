import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";

const awardSets = [
  [
    {
      title: "Big Impact Awards 2025",
      img: "https://valuegold.com/wp-content/uploads/2026/01/Big-Impact-Awards_2025_3-1-1-scaled.png.webp",
    },
    {
      title: "Successpreneur Awards 2025",
      img: "https://valuegold.com/wp-content/uploads/2025/09/Awardicon-3.webp",
    },
    {
      title: "Radio City Icon Awards 2025",
      img: "https://valuegold.com/wp-content/uploads/2025/09/Awardicon-2.webp",
    },
    {
      title: "Times Business Awards 2023",
      img: "https://valuegold.com/wp-content/uploads/2025/09/Awardicon-1.webp",
    },
  ],
  [
    {
      title: "Business Excellence Award",
      img: "https://valuegold.com/wp-content/uploads/2026/01/Big-Impact-Awards_2025-copy-1.jpg-1-1-1-scaled.jpg.webp",
    },
    {
      title: "Gold Industry Award",
      img: "https://valuegold.com/wp-content/uploads/2025/09/Awards-3.webp",
    },
    {
      title: "Best Brand Award",
      img: "https://valuegold.com/wp-content/uploads/2025/09/Awards-2.webp",
    },
    {
      title: "Customer Choice Award",
      img: "https://valuegold.com/wp-content/uploads/2025/09/Awards-1.webp",
    },
  ],
];

const Awards = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  // 🔥 MODAL STATES
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [zoom, setZoom] = useState(1);

  // flatten all images
  const flatImages = awardSets.flat();

  // AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % awardSets.length);
        setAnimate(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 🔥 KEYBOARD SUPPORT
  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex === null) return;

      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev + 1) % flatImages.length);
      }

      if (e.key === "ArrowLeft") {
        setSelectedIndex(
          (prev) => (prev - 1 + flatImages.length) % flatImages.length
        );
      }

      if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, flatImages.length]);

  return (
    <div className="bg-[#f4efe7] overflow-hidden">

      {/* HEADER */}
      <section className="bg-[#1f3f6b] py-12 text-center">
        <h1 className="text-3xl font-semibold text-yellow-400">
          — AWARDS —
        </h1>
      </section>

      {/* GRID */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div
          className={`grid md:grid-cols-4 gap-8 transition-all duration-500 ${
            animate ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
          }`}
        >
          {awardSets[index].map((item, i) => (
            <div key={i} className="text-center">
              
              {/* IMAGE */}
              <div
                onClick={() => setSelectedIndex(i)}
                className="overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[250px] object-cover 
                  group-hover:scale-110 transition duration-500"
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 MODAL */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">

          {/* TOP CONTROLS */}
          <div className="absolute top-4 right-6 flex gap-4 text-white text-xl">

            <button className="hover:scale-110">⛶</button>

            <button onClick={() => setZoom((z) => z + 0.2)}>＋</button>

            <button onClick={() => setZoom((z) => Math.max(1, z - 0.2))}>
              －
            </button>

            <button
              onClick={() =>
                navigator.share
                  ? navigator.share({
                      title: flatImages[selectedIndex].title,
                      url: flatImages[selectedIndex].img,
                    })
                  : alert("Share not supported")
              }
            >
              ↗
            </button>

            <button onClick={() => setSelectedIndex(null)}>✕</button>
          </div>

          {/* LEFT */}
          <button
            onClick={() =>
              setSelectedIndex(
                (prev) => (prev - 1 + flatImages.length) % flatImages.length
              )
            }
            className="absolute left-5 text-white text-4xl"
          >
            ❮
          </button>

          {/* RIGHT */}
          <button
            onClick={() =>
              setSelectedIndex((prev) => (prev + 1) % flatImages.length)
            }
            className="absolute right-5 text-white text-4xl"
          >
            ❯
          </button>

          {/* IMAGE */}
          <div className="text-center max-w-5xl w-full px-4">
            <img
              src={flatImages[selectedIndex].img}
              alt=""
              style={{ transform: `scale(${zoom})` }}
              className="w-full max-h-[80vh] object-contain transition duration-300"
            />

            <p className="text-white mt-4 text-lg font-semibold">
              {flatImages[selectedIndex].title}
            </p>
          </div>

          {/* COUNTER */}
          <div className="absolute bottom-5 text-white text-sm">
            {selectedIndex + 1} / {flatImages.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Awards;