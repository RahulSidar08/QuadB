import React from "react";
import group1 from "../assets/Group 1.png"
import Group23 from "../assets/Group 23.png";
import Vector from "../assets/Vector.png";
export const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col-reverse gap-10 md:gap-0 min-h-screen items-center md:flex-row  md:justify-center">
        <div className="flex flex-col space-y-10">
          <div>
            <p className="max-w-2xl text-center md:text-start md:max-w-[530px] font-orbitron font-black text-[50.69px] tracking-normal leading-[60.4px] text-white">
              Let's Explore Three-Dimensional Visual
            </p>
            <div className="mt-4 text-center md:text-start">
              <p className="max-w-2xl md:max-w-[390px]">
              With virtual technology you can see the digital world feel more
                real and you can play the game with a new style.
              </p>
            </div>
          </div>
          <div className="flex space-x-5 mx-auto md:mx-0">
            <button className="bg-pink-600 px-4 py-2 rounded text-white hover:bg-pink-500">
              Get it Now
            </button>
            <button>Explore Device</button>
          </div>
          <div className="flex mx-auto md:mx-0">
            <ul className="flex items-center space-x-5">
              <li>
                <img src={group1} alt="people" />
              </li>
              <li className="flex items-center ml-2 text-white">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                400k people Online
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-32">
          <img src={Group23} alt="" />
        </div>
      </div>
    </>
  );
};
