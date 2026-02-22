import { NavLink } from "react-router-dom";
import {
  FaHeart,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-amber-50 border-t border-gray-200 mt-20">

      <div className="max-w-screen-2xl mx-auto
                      px-6
                      sm:px-8
                      md:px-12
                      lg:px-16
                      xl:px-24
                      2xl:px-32
                      py-12
                      sm:py-16
                      md:py-20">

        {/* GRID */}
        <div className="grid gap-12
                        sm:grid-cols-2
                        lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              <span className="text-gray-800">Little</span>
              <span className="text-primary">Minds</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
              Caring for your child's brain health with warmth,
              expertise, and a smile.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4 text-lg">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3 text-gray-600 text-sm sm:text-base">
              <NavLink to="/about" className="hover:text-primary transition">About</NavLink>
              <NavLink to="/services" className="hover:text-primary transition">Services</NavLink>
              <NavLink to="/treatments" className="hover:text-primary transition">Treatments</NavLink>
              <NavLink to="/reviews" className="hover:text-primary transition">Reviews</NavLink>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4 text-lg">
              Services
            </h3>
            <div className="flex flex-col gap-3 text-gray-600 text-sm sm:text-base">
              <NavLink to="/services" className="hover:text-primary transition">Epilepsy Care</NavLink>
              <NavLink to="/services" className="hover:text-primary transition">ADHD Management</NavLink>
              <NavLink to="/services" className="hover:text-primary transition">Autism Support</NavLink>
              <NavLink to="/services" className="hover:text-primary transition">Developmental Delays</NavLink>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4 text-lg">
              Contact
            </h3>

            <div className="flex flex-col gap-4 text-gray-600 text-sm sm:text-base">

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary" />
                <span>123456789</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />
                <span>hello@littleminds.care</span>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1" />
                <span>
                  123 Rainbow Lane
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-12 pt-8 border-t border-gray-200
                        flex flex-col md:flex-row
                        items-center justify-between
                        gap-4 text-sm sm:text-base text-gray-500">

          <p className="flex items-center gap-2 text-center md:text-left">
            Made with
            <FaHeart className="text-accent animate-pulse" />
            for little minds
          </p>

          <p className="text-center md:text-right">
            Designed and developed by{" "}
            <span className="font-semibold text-primary">
              Sohail L
            </span>{" "}
            &{" "}
            <span className="font-semibold text-primary">
              Karthik Kalburgi
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
}