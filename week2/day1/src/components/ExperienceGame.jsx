import React from "react";
import group3 from "../assets/Group3.png";
import group28 from "../assets/Group28.png";
export const ExperienceGame = () => {
  return (
    <>
      <div className="flex flex-col gap-16 justify-around items-center mt-28 md:gap-0 md:flex-row md:mx-48 h-[500px] md:pb-56 md:mt-0">
        <div className="relative w-full ml-20 max-w-sm md:max-w-md lg:max-w-lg md:ml-0">
          <img src={group3} alt="Main Game Visual" className="w-[50%] md:mx-20 md:relative md:top-10" />
          <img
            src={group28}
            alt="Overlay"
            className="absolute w-1/2 top-20 left-32 md:w-[50%] md:top-36 md:left-96"
          />
        </div>
        <div className="mt-5 w-[95%] left-40 top-28 space-y-4 md:mt-0 md:w-[50%] md:relative pb-28 md:pb-0">
          <p className="max-w-xl mx-10 md:mx-0 md:max-w-80 font-orbitron font-black text-[31.69px] leading-[43.4px] text-white">
            New Experience In Playing Game
          </p>
          <p className="mx-10 max-w-2xl md:max-w-80 font-inter leading-normal tracking-normal md:mx-0">
            You can try playing the game with a new style and of course a more
            real feel, like you are the main character in your game and
            adventure in this new digital world.
          </p>
          <button className="mx-10 bg-pink-600 px-4 py-2 rounded text-white hover:bg-pink-500 md:mx-0">
            Get it Now
          </button>
        </div>
      </div>
    </>
  );
};

