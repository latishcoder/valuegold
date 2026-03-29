const blogs = [
  {
    title: "How to Make Sure Your Gold Purity Test Is Fair & Accurate",
    desc: "The gold market in 2025 is witnessing a major shift. Rising prices, environmental responsibility, and technological advancements are reshaping how people handle their unused jewellery. What was once stored away for sentimental value is now actively entering the market through gold recycling, a process that transforms old ornaments into fresh",
    date: "January 23, 2026",
    img: "https://valuegold.com/wp-content/uploads/2026/03/Valuegold_jan_02.webp",
  },
  {
    title: "Why Customers Trust and Return to Value Gold",
    desc: "Table of Content: Instant Access to Liquid Funds Taking Advantage of High Market Prices Decluttering and Maximising Asset Value Opportunities for Reinvestment Security and Trust in Professional Transactions Quick Cash Solutions for Regional Needs Choosing the Right Buyer for Maximum Returns Gold has always been considered a reliable store of",
    date: "January 9, 2026",
    img: "https://valuegold.com/wp-content/uploads/2026/03/Valuegold_jan_01.webp",
  },
  {
    title: "The Process of Evaluating Gold and How Buyers Determine Value",
    desc: "We’ve all been there, discovering that a cherished gold chain has snapped, a ring is bent out of shape, or a lone earring has no match. The immediate thought is often, “This is probably useless now.” But here’s the truth: Is broken gold still valuable? Absolutely, yes. Even if your",
    date: "December 23, 2025",
    img: "https://valuegold.com/wp-content/uploads/2026/01/blog10.webp",
  },
  {
    title: "When to Sell, When to Hold Gold",
    desc: "Understanding Gold Karats Before You Buy or Sell Gold has always been more than just a precious metal. It’s an emotion, an investment, and often, a safety net in times of need. But not every piece of gold is the same. The difference in purity plays a big role in",
    date: "December 9, 2025",
    img: "https://valuegold.com/wp-content/uploads/2026/01/blog9.webp",
  },
  {
    title: "18K, 22K and 24K Gold: Which Is Best?",
    desc: "Table of Contents What to know before selling gold?  How to make sure the gold buyer is genuine?  Gold selling tips in Hyderabad Verified gold buyer in Hyderabad Trusted gold buyers in Hyderabad Why Value Gold is considered the best gold buying company Conclusion What to know before selling gold",
    date: "November 18, 2025",
    img: "https://valuegold.com/wp-content/uploads/2025/12/blog-8.webp",
  },
  {
    title: "How to Avoid Scams When Selling Gold",
    desc: "Table of Contents Why should I sell my gold to a certified buyer? What are the risks of selling to an uncertified buyer? Benefits of certified gold buyers Best old gold buyers in Hyderabad Best gold buying company Sell gold for cash in Hyderabad Why Value Gold is a preferred",
    date: "November 11, 2025",
    img: "https://valuegold.com/wp-content/uploads/2025/12/blog-7.webp",
  },
  {
    title: "Women’s Financial Independence Through Gold",
    desc: "When it comes to selling gold, trust is everything. Sellers look for transparency, fair valuation, and a process they can rely on. That’s exactly what Value Gold delivers. Known for its professional approach, advanced gold evaluation methods, and commitment to real-time market pricing, Value Gold has built a reputation that",
    date: "October 25, 2025",
    img: "https://www.expatriates.com/img/62871920.1.jpg",
  },
  {
    title: "From Gifting to Cashing Gold Jewelry",
    desc: "Table of Contents Introduction Purity of the Gold Weight of the Gold Current Market Rate Hallmark Certification Type of Gold Item Wear and Tear or Damage Deductions and Hidden Charges Buyer’s Credibility Conclusion Introduction Gold has always been more than just a precious metal—serving both as a financial cushion and",
    date: "October 25, 2025",
    img: "https://valuegold.com/wp-content/uploads/2025/10/blog6.webp",
  },
  {
    title: "Gold Recycling Trends 2025",
    desc: "Table of Contents Understanding Gold Price Trends in 2025 Insights into Current Gold Market Trends Selling Gold for the Best Price Is Selling Gold in 2025 a Smart Move? Choosing Trusted Gold Buyers in Hyderabad Why Instant Payment for Gold Matters Gold has always been seen as a financial safety",
    date: "August 28, 2025",
    img: "https://valuegold.com/wp-content/uploads/2025/09/blog-5.webp",
  },
  {
    title: "Top Financial Benefits of Selling Gold",
    desc: "Table of Contents Understand the Value of Your Gold Choose Only Trusted Gold Buyers Verify Credentials and Certifications Avoid Impulse Selling and Do Your Research Insist on a Transparent Valuation Process Ask for Official Documentation In today’s fast-paced world, gold remains one of the most trusted assets for immediate financial",
    date: "August 14, 2025",
    img: "https://valuegold.com/wp-content/uploads/2025/09/blog-5-1.webp",
  },
];

export default function Blog() {
  return (
    <div className="bg-[#f5f2eb] py-16">
      {/* ================= BLOG GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-[220px] object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#1f3f6b] mb-3">
                {blog.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">{blog.desc}</p>

              <button className="text-[#1f3f6b] font-medium text-sm hover:underline">
                READ MORE »
              </button>
            </div>

            {/* DATE */}
            <div className="px-6 py-3 text-sm text-gray-400 border-t">
              {blog.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
