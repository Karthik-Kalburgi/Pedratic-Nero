import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Treatments from "./Treatments";

export default function Home() {
  return (
    <section className="bg-background min-h-screen pt-28 pb-20">
      <div className="w-full px-10 lg:px-20">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >

            {/* TRUSTED BADGE (LARGER) */}
            <div className="inline-flex items-center gap-3 
                            bg-secondary/25 text-textDark 
                            px-6 py-3 rounded-full shadow-md 
                            text-lg font-medium">
              ⭐ Trusted Pediatric Neurology
            </div>

            {/* HEADING (BIGGER) */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-textDark">
              Where Little <br />
              <span className="text-primary">Brains</span> Get Big <br />
              <span className="text-accent">Care ✨</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-xl max-w-2xl leading-relaxed">
              A friendly place where your child’s brain health is our top priority.
              Expert neurology care that kids actually enjoy visiting!
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center gap-6 pt-4">

              <Link
                to="/book"
                className="px-10 py-5 text-lg rounded-full text-white font-semibold
                           bg-gradient-to-r from-primary to-[#5bb6da]
                           shadow-xl hover:shadow-2xl hover:scale-105
                           transition-all duration-300"
              >
                Book a Visit →
              </Link>

              <Link
                to="/services"
                className="px-10 py-5 text-lg rounded-full border border-gray-300
                           text-gray-700 hover:bg-gray-100
                           transition-all duration-300"
              >
                Our Services
              </Link>

            </div>
          </motion.div>

          {/* RIGHT IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >

            <div className="relative bg-mint/40 rounded-3xl p-10 shadow-2xl w-full max-w-2xl">

              <img
                src="/Images/Home.jpg"
                alt="Cute Brain"
                className="w-full object-contain"
              />

              {/* KID FRIENDLY (BIGGER) */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-8 right-10 
                           bg-white px-6 py-3 rounded-full 
                           shadow-lg text-base font-semibold"
              >
                ❤️ Kid Friendly
              </motion.div>

              {/* BOARD CERTIFIED (BIGGER) */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-8 left-10 
                           bg-white px-6 py-3 rounded-full 
                           shadow-lg text-base font-semibold"
              >
                🛡 Board Certified
              </motion.div>

            </div>

          </motion.div>

        </div>
      </div>
      <div>
        <div className="py-[18%]">
          <div className="px-4 py-20 bg-cyan-50 rounded-3xl shadow-lg">
          <div className="row-4 ml-[4%] grid grid-cols-4 gap-8 ">
        <h1 className="text-primary font-bold text-5xl">5,000+</h1>
        <h1 className="text-primary font-bold text-5xl">15+</h1>
        <h1 className="text-primary font-bold text-5xl">98%</h1>
        <h1 className="text-primary font-bold text-5xl">24/7</h1>
        <span className="font-inter text-lg font-extralight ">Happy Famiies</span>
        <span className="font-inter text-lg font-extralight ">Years of Excperiences</span>
        <span className="font-inter text-lg font-extralight ">Parent Satisfaction</span>
        <span className="font-inter text-lg font-extralight ">Support Available</span>
          </div>

          </div>
        </div>
      </div>
    <div>
      <About />
      <Services />
      <Treatments />
    </div>
    </section>
    
  );
}