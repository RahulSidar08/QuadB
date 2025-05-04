import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-900 to-black text-white px-4 py-6">
      <div className="container mx-auto flex justify-between items-center md:justify-around">
        <Link to="/" className="text-2xl font-bold md:left-0">
          Light
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="hover:text-pink-500">
            Home
          </Link>
          <Link to="/company" className="hover:text-pink-500">
            Company
          </Link>
          <Link to="/features" className="hover:text-pink-500">
            Features
          </Link>
          <Link
            to="/signup"
            className="bg-pink-600 px-4 py-2 rounded hover:bg-pink-500"
          >
            Sign Up
          </Link>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 ">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-pink-500"
          >
            Home
          </Link>
          <Link
            to="/company"
            onClick={() => setIsOpen(false)}
            className="block hover:text-pink-500"
          >
            Company
          </Link>
          <Link
            to="/features"
            onClick={() => setIsOpen(false)}
            className="block hover:text-pink-500"
          >
            Features
          </Link>
          <Link
            to="/signup"
            onClick={() => setIsOpen(false)}
            className="block bg-pink-600 px-4 py-2 rounded hover:bg-pink-500 text-center"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
