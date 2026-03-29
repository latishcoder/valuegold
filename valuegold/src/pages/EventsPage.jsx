import Footer from "../components/Footer";

export default function EventsPage() {
  return (
    <div className="bg-[#f5f2eb] min-h-screen">
      {/* ================= HEADER ================= */}
      <section className="bg-[#234a74] py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#d4b46a] flex items-center justify-center gap-4">
          <span className="h-[2px] w-16 bg-[#d4b46a]"></span>
          EVENTS & BRANCH OPENINGS
          <span className="h-[2px] w-16 bg-[#d4b46a]"></span>
        </h1>
      </section>

      {/* ================= MAIN CARDS ================= */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {/* EVENTS CARD */}
          <div className="bg-[#234a74] rounded-lg h-[300px] flex items-center justify-center cursor-pointer hover:scale-[1.02] transition duration-300">
            <h2 className="text-white text-4xl font-semibold tracking-wide">
              Events
            </h2>
          </div>

          {/* BRANCH OPENINGS CARD */}
          <div className="bg-[#234a74] rounded-lg h-[300px] flex items-center justify-center cursor-pointer hover:scale-[1.02] transition duration-300">
            <h2 className="text-white text-4xl font-semibold tracking-wide">
              Branch Openings
            </h2>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
