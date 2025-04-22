import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const NaviGate = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      fontSize: isActive ? "20px" : "18px",
    };
  };

  return (
    <header className="bg-white shadow-md px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-black">Cosmetic</h1>
        <nav className="hidden md:flex gap-6 text-black">
          <NavLink style={NaviGate} to="/">
            Home
          </NavLink>
          <NavLink style={NaviGate} to="/shop">
            Shop
          </NavLink>
          <NavLink style={NaviGate} to="/testimonals">
            Testimonals
          </NavLink>
          <NavLink style={NaviGate} to="/about">
            About
          </NavLink>
          <NavLink style={NaviGate} to="/contact">
            Contact
          </NavLink>
        </nav>
        {/* Mobile Menu Icon Placeholder (optional) */}
        <div className="md:hidden text-black text-2xl">
          {/* Add hamburger icon or drawer later if needed */}
          ☰
        </div>
      </div>
    </header>
  );
};
