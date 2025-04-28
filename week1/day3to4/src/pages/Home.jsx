import React from "react";
import { Link } from 'react-router-dom';
export const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 animate-fadeIn">
          Welcome to the Blog Page
        </h1>
        <div className="text-lg text-gray-600">
         <p> Dive into articles, insights, and latest updates! Login to view blogs</p>
          <Link to="/login" className=" text-blue-600 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
