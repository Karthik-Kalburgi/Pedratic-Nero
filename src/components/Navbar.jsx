import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `px-5 py-2 rounded-full font-medium transition-all duration-300
     ${
       isActive
         ? "bg-primary/10 text-primary shadow-inner"
         : "text-gray-600 hover:text-primary"
     }`;

  return (
    <>
      {/* NAVBAR */}
   <nav className="sticky top-0 z-50 
                bg-white/80 backdrop-blur-xl 
                border-b border-gray-200/50 
                shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                font-inter">

  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

    {/* LEFT: LOGO + NAME */}
    {/* Logo / Home link */}
      <Link to="/">
    <div className="flex items-center gap-3">
      <img 
        src="/Images/NavbarLogo.png"   // ✅ Correct path for Vite
        alt="Logo" 
        className="w-11 h-11 object-contain animate-wiggle"
      />
      <h1 className="text-2xl font-bold tracking-tight">
        <span className="text-gray-800">Little</span>
        <span className="text-primary">Minds</span>
      </h1>
    </div>
    </Link>

    {/* CENTER: NAV LINKS */}
    <div className="hidden md:flex flex-1 justify-center items-center gap-8">
      <NavLink to="/" className={navLinkClass}>Home</NavLink>
      <NavLink to="/about" className={navLinkClass}>About</NavLink>
      <NavLink to="/services" className={navLinkClass}>Services</NavLink>
      <NavLink to="/treatments" className={navLinkClass}>Treatments</NavLink>
      <NavLink to="/reviews" className={navLinkClass}>Reviews</NavLink>
      <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
    </div>

    {/* RIGHT: BOOK BUTTON */}
    <div className="hidden md:flex">
      <NavLink
        to="/contact"
        className="px-6 py-2.5 rounded-full text-white font-semibold
                   bg-gradient-to-r from-primary to-[#5bb6da]
                   shadow-lg hover:shadow-xl hover:scale-105
                   transition-all duration-300"
      >
        Book Appointment
      </NavLink>
    </div>

    {/* MOBILE MENU BUTTON */}
    <button
      className="md:hidden text-3xl text-primary"
      onClick={() => setIsOpen(true)}
    >
      ☰
    </button>

  </div>
</nav>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* OVERLAY */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* DRAWER PANEL */}
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-white shadow-2xl
          transform transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="font-bold text-primary text-lg">Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-6 p-6 text-lg">

            <NavLink to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/services" className={navLinkClass} onClick={() => setIsOpen(false)}>Services</NavLink>
            <NavLink to="/treatments" className={navLinkClass} onClick={() => setIsOpen(false)}>Treatments</NavLink>
            <NavLink to="/reviews" className={navLinkClass} onClick={() => setIsOpen(false)}>Reviews</NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={() => setIsOpen(false)}>Contact</NavLink>

            <NavLink
              to="/book"
              className="mt-4 px-6 py-3 rounded-full text-center text-white font-semibold
                         bg-gradient-to-r from-primary to-[#5bb6da]
                         shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </NavLink>

          </div>
        </div>
      </div>
    </>
  );
}