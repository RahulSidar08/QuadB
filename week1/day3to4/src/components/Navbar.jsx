import React from "react"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex space-x-4 text-white">
            <Link to="/" className="hover:underline">Home</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
