
export default function MediaPage() {
  const videos = [
    "https://www.youtube.com/embed/VIDEO_ID1",
    "https://www.youtube.com/embed/VIDEO_ID2",
    "https://www.youtube.com/embed/VIDEO_ID3",
    "https://www.youtube.com/embed/VIDEO_ID4",
    "https://www.youtube.com/embed/VIDEO_ID5",
    "https://www.youtube.com/embed/VIDEO_ID6",
    "https://www.youtube.com/embed/VIDEO_ID7",
    "https://www.youtube.com/embed/VIDEO_ID8",
    "https://www.youtube.com/embed/VIDEO_ID9",
    "https://www.youtube.com/embed/VIDEO_ID10",
    "https://www.youtube.com/embed/VIDEO_ID11",
    "https://www.youtube.com/embed/VIDEO_ID12",
  ];

  return (
    <div className="bg-[#f4f4f4]">

      {/* ================= HEADER ================= */}
      <section className="bg-[#234a74] py-20 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-semibold flex items-center justify-center gap-4">
          <span className="h-[2px] w-16 bg-[#c8a85d]"></span>
          MEDIA
          <span className="h-[2px] w-16 bg-[#c8a85d]"></span>
        </h1>
      </section>

      {/* ================= VIDEO GRID ================= */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">

          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="aspect-video">
                <iframe
                  src={video}
                  title={`video-${index}`}
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#234a74] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

          {/* ABOUT */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Value Gold</h3>
            <p className="text-sm text-gray-300">
              Value Gold offers a comprehensive range of solutions designed
              to help customers sell gold easily with maximum value and transparency.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>About Us</li>
              <li>Sell Gold</li>
              <li>Release Pledged Gold</li>
              <li>FAQ's</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <p className="text-sm text-gray-300">
              3rd Floor, Hyderabad, India
            </p>
            <p className="text-sm text-gray-300 mt-2">
              +91 94778 94778
            </p>
            <p className="text-sm text-gray-300 mt-2">
              info@valuegold.com
            </p>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-white/20 rounded"></div>
              <div className="w-8 h-8 bg-white/20 rounded"></div>
              <div className="w-8 h-8 bg-white/20 rounded"></div>
              <div className="w-8 h-8 bg-white/20 rounded"></div>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-sm text-gray-300 mt-10">
          Copyright © 2026 ValueGold. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

