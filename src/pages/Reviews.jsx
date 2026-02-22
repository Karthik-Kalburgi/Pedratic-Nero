import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  { name: "Aarav", text: "The doctor made my child feel so comfortable and happy!" },
  { name: "Ananya", text: "Such a warm and caring team. My daughter loved the visit!" },
  { name: "Vivaan", text: "Very professional and super friendly staff!" },
  { name: "Diya", text: "The clinic is colorful and made my son feel safe." },
  { name: "Kabir", text: "Explained everything clearly and patiently to us." },
  { name: "Meera", text: "Best pediatric neurologist experience we've had!" },
  { name: "Arjun", text: "They truly understand children and their needs." },
  { name: "Ishita", text: "My child actually looks forward to appointments now!" },
  { name: "Rohan", text: "Very knowledgeable doctors and kind nurses." },
  { name: "Saanvi", text: "We felt heard, respected, and cared for." },
];

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-pink-50 to-blue-50 text-center overflow-hidden">
      
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-800">
        Happy Families 🌟
      </h2>

      {/* Review Card */}
      <div className="relative max-w-xl mx-auto">
        <div
          key={activeIndex}
          className="bg-white p-10 rounded-3xl shadow-2xl transition-all duration-500 transform animate-fadeIn"
        >
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            "{reviews[activeIndex].text}"
          </p>

          {/* Stars */}
          <div className="flex justify-center gap-2 mt-6 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="animate-bounce" />
            ))}
          </div>

          {/* Name */}
          <p className="mt-6 font-semibold text-blue-600 text-lg">
            – {reviews[activeIndex].name}'s Parent
          </p>
        </div>
      </div>

      {/* Name Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mt-12 max-w-4xl mx-auto">
        {reviews.map((review, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
              ${
                activeIndex === index
                  ? "bg-blue-500 text-white scale-110 shadow-lg"
                  : "bg-white text-gray-700 hover:bg-blue-100 hover:scale-105"
              }`}
          >
            {review.name}
          </button>
        ))}
      </div>
    </section>
  );
}