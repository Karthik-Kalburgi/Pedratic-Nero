import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import About from "./About";
import Services from "./Services";
import Treatments from "./Treatments";

export default function Home() {

  /* ===============================
     STATS DATA
  =============================== */
  const stats = [
    { value: 5000, suffix: "+", label: "Happy Families" },
    { value: 15, suffix: "+", label: "Years of Experience" },
    { value: 98, suffix: "%", label: "Parent Satisfaction" },
    { value: 24, suffix: "/7", label: "Support Available" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  /* ===============================
     COUNTER (RUNS ON EVERY RELOAD)
  =============================== */
  useEffect(() => {
    const duration = 2000;
    const intervalTime = 22; // smoother animation (60fps)
    const steps = duration / intervalTime;

    const intervals = stats.map((stat, index) => {
      const increment = stat.value / steps;

      return setInterval(() => {
        setCounts((prev) => {
          const updated = [...prev];
          if (updated[index] < stat.value) {
            updated[index] = Math.min(
              updated[index] + increment,
              stat.value
            );
          }
          return updated;
        });
      }, intervalTime);
    });

    const timer = setTimeout(() => {
      intervals.forEach((i) => clearInterval(i));
    }, duration);

    return () => {
      intervals.forEach((i) => clearInterval(i));
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="bg-background min-h-screen pt-20 sm:pt-24 lg:pt-28 pb-20">

      {/* ===============================
         HERO SECTION
      =============================== */}
      <div className="w-full px-6 sm:px-10 lg:px-20">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:space-y-10"
          >

            <div className="inline-flex items-center gap-3 
                            bg-secondary/25 text-textDark 
                            px-5 py-2.5 rounded-full shadow-md 
                            text-sm sm:text-base lg:text-lg font-medium">
              ⭐ Trusted Pediatric Neurology
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                           font-extrabold leading-tight text-textDark">
              Where Little <br />
              <span className="text-primary">Brains</span> Get Big <br />
              <span className="text-accent">Care ✨</span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg lg:text-xl 
                          max-w-2xl leading-relaxed">
              A friendly place where your child’s brain health is our top priority.
              Expert neurology care that kids actually enjoy visiting!
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4">

              <Link
                to="/contact"
                className="px-7 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 
                           text-sm sm:text-base lg:text-lg 
                           rounded-full text-white font-semibold
                           bg-gradient-to-r from-primary to-[#5bb6da]
                           shadow-lg hover:shadow-2xl hover:scale-105
                           transition-all duration-300"
              >
                Book a Visit →
              </Link>

              <Link
                to="/services"
                className="px-7 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 
                           text-sm sm:text-base lg:text-lg 
                           rounded-full border border-gray-300
                           text-gray-700 hover:bg-gray-100
                           transition-all duration-300"
              >
                Our Services
              </Link>

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative bg-mint/40 rounded-3xl p-6 sm:p-8 lg:p-10 
                            shadow-2xl w-full max-w-xl lg:max-w-2xl">

              <img
                src="/Images/Home.jpg"
                alt="Cute Brain"
                className="w-full object-contain"
              />

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-6 sm:-top-8 right-6 sm:right-10
                           bg-white px-4 sm:px-6 py-2 sm:py-3 
                           rounded-full shadow-lg 
                           text-sm sm:text-base font-semibold"
              >
                ❤️ Kid Friendly
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-6 sm:-bottom-8 left-6 sm:left-10
                           bg-white px-4 sm:px-6 py-2 sm:py-3 
                           rounded-full shadow-lg 
                           text-sm sm:text-base font-semibold"
              >
                🛡 Board Certified
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* ===============================
         STATS SECTION (RESPONSIVE)
      =============================== */}
{/* ===============================
   STATS SECTION - MODERN CARDS
=============================== */}
<div className="mt-20 sm:mt-28 lg:mt-32 px-6 sm:px-10 lg:px-20">
  <div className="grid 
                  grid-cols-1 
                  sm:grid-cols-2 
                  lg:grid-cols-4 
                  gap-8 lg:gap-10">

    {stats.map((stat, index) => (
      <div
        key={index}
        className="group bg-white rounded-3xl p-10 
                   shadow-md hover:shadow-2xl
                   transition-all duration-500
                   hover:-translate-y-3
                   border border-gray-100
                   text-center"
      >
        {/* Number */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 
                       font-extrabold text-primary
                       transition-transform duration-500
                       group-hover:scale-110">
          {Math.floor(counts[index]).toLocaleString()}
          {stat.suffix}
        </h2>

        {/* Divider Line */}
        <div className="w-12 h-1 bg-primary/30 mx-auto my-5 
                        rounded-full transition-all duration-500
                        group-hover:w-20 group-hover:bg-primary" />

        {/* Label */}
        <p className="text-gray-600 text-base sm:text-lg font-light">
          {stat.label}
        </p>
      </div>
    ))}

  </div>
</div>

      {/* OTHER SECTIONS */}
      <About />
      <Services />
      <Treatments />

    </section>
  );
}