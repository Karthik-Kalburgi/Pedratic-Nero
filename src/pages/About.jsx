import { Heart, Award, Users, GraduationCap } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "Every child is treated with warmth and kindness",
  },
  {
    icon: Award,
    title: "Expert Team",
    description:
      "Board-certified pediatric neurologists with years of experience",
  },
  {
    icon: Users,
    title: "Family Centered",
    description: "We involve the whole family in the care journey",
  },
  {
    icon: GraduationCap,
    title: "Latest Research",
    description: "Cutting-edge treatments backed by neuroscience",
  },
];

export default function About() {
  return (
    <section className="w-full bg-[#f4f9fc] py-16 sm:py-20 md:py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Badge */}
        <span className="inline-block bg-blue-100 text-blue-600 
          text-xs sm:text-sm md:text-base
          font-medium px-4 py-1.5 rounded-full mb-6">
          About Us
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Meet the Team Behind Little Minds 🧠💖
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
          We're pediatric neurologists who believe brain care should never be
          scary for kids.
        </p>

        {/* Description */}
        <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
          At Little Minds Clinic, we've created a space where children feel safe,
          parents feel heard, and every visit ends with a smile. Our team of
          specialists combines decades of experience with a genuine love for
          helping kids grow and flourish.
        </p>

        {/* Core Values Title */}
        <h3 className="mt-16 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Our Core Values 🌈
        </h3>

        {/* Core Values Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl 
                transition duration-300 p-8 flex flex-col items-center text-center"
              >
                <div className="bg-blue-100 rounded-full p-4 mb-5">
                  <Icon className="text-blue-500 w-7 h-7" />
                </div>

                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}