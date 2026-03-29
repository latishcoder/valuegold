import { useState } from "react";
import Footer from "../components/Footer";

export default function ReachUs() {
  const [activeTab, setActiveTab] = useState("telangana");

  const locations = {
    telangana: [
      {
        name: "Adilabad",
        address:
          "2nd floor, D No 4-3-61/1/C, Bhoktapur, Adilabad, TS - 504001.",
      },
      {
        name: "AS Rao Nagar",
        address:
          "Second floor, Door No : 1, Anupuram, Royal Embassy, Kapra, Hyderabad, Telangana 500062",
      },
      {
        name: "Chandhanagar",
        address:
          "1st floor, Sai Divya Chambers, Chanda Nagar, Hyderabad, Telangana 500050",
      },
      {
        name: "Chintal",
        address:
          "2nd Floor, Above Lenskart IDPL Chintal Main Road, Hyderabad, Telangana 500055",
      },
      {
        name: "Kukatpally",
        address:
          "Dr. Damodhar Complex, 4th Floor, Kukatpally, Hyderabad - 500072",
      },
      {
        name: "L.B Nagar",
        address:
          "Metro Station L B Nagar, Shivapuri Colony, Hyderabad, Telangana 500074",
      },
      {
        name: "Manikonda",
        address:
          "Above Vijetha Super Mart, Puppalaguda, Hyderabad, Telangana 500089",
      },
      {
        name: "Medchal",
        address: "1st floor, Main Road, Medchal, Telangana - 500047",
      },
      {
        name: "Nirmal",
        address:
          "2nd floor, Opp Bus Depot, Boivada, Nirmal, Telangana - 504106",
      },
      {
        name: "Panjagutta",
        address: "Shop no 25, Amrutha Mall, Somajiguda, Hyderabad 500016",
      },
      {
        name: "Secunderabad",
        address: "Surya Kiran Complex, Secunderabad - 500003",
      },
      {
        name: "Uppal",
        address: "Venkat Lakshmi Plaza, Uppal, Hyderabad - 500039",
      },
    ],
    andhra: [
      {
        name: "Vizag",
        address: "Sample Andhra Location Address",
      },
    ],
  };

  return (
    <div className="bg-[#f5f2eb]">
      {/* ================= CONTACT SECTION ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 bg-white rounded-xl shadow-md p-8 grid md:grid-cols-2 gap-10">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-bold text-[#1f3f6b] mb-4 flex items-center gap-3">
              CONTACT US
              <span className="h-[2px] w-16 bg-[#c8a85d]"></span>
            </h2>

            <p className="text-gray-600 mb-6">
              For any assistance or queries, reach us at:
            </p>

            <h3 className="text-xl font-semibold text-[#1f3f6b] mb-3">
              Corporate Office
            </h3>

            <p className="text-gray-600 mb-4">
              3rd floor, Road 10, Avenue 4, Banjara Hills, Hyderabad, Telangana
              500034
            </p>

            <p className="text-gray-600 mb-2">+91 - 040 2331 8899</p>
            <p className="text-gray-600 mb-2">+91 - 94778 94778</p>

            <p className="text-gray-600">info@valuegold.com</p>
          </div>

          {/* RIGHT MAP */}
          <div className="w-full h-[300px] md:h-[350px]">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=banjara%20hills%20hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full rounded-xl border"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ================= TABS ================= */}
      <section className="text-center mb-10">
        <button
          onClick={() => setActiveTab("telangana")}
          className={`px-6 py-3 mr-2 rounded ${
            activeTab === "telangana"
              ? "bg-[#1f3f6b] text-white"
              : "bg-[#c8a85d] text-white"
          }`}
        >
          Telangana
        </button>

        <button
          onClick={() => setActiveTab("andhra")}
          className={`px-6 py-3 rounded ${
            activeTab === "andhra"
              ? "bg-[#1f3f6b] text-white"
              : "bg-[#c8a85d] text-white"
          }`}
        >
          Andhra Pradesh
        </button>
      </section>

      {/* ================= LOCATIONS GRID ================= */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {locations[activeTab].map((loc, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-[#1f3f6b] mb-3">
                {loc.name}
              </h3>

              <p className="text-gray-600 text-sm mb-6">{loc.address}</p>

              <button className="bg-[#c8a85d] text-white px-5 py-2 rounded">
                Location
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
