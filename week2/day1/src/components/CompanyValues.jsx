import React from "react";
import group22 from "../assets/Group 22.png";
import hand from "../assets/emojione_victory-hand.png";
import strong from "../assets/Vector (1).png";
import light from "../assets/twemoji_light-bulb.png";
import right from "../assets/Group 40.png";
export const CompanyValues = () => {
  const cards = [
    {
      emoji: <img src={hand} alt="" />,
      title: "Be Sencere",
    },
    {
      emoji: <img src={strong} alt="" />,
      title: "Strong Together",
    },
    {
      emoji: <img src={right} alt="" />,
      title: "Keep it Simple",
    },
    {
      emoji: <img src={light} alt="" />,
      title: "Take intelligent risks",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 bg-gradient-to-b from-[#3a0a69] to-[#100018] rounded-2xl mt-40 text-white font-orbitron">
      <div className="flex flex-col sm:items-center md:flex-row justify-between items-start md:items-center gap-10 mb-16">
        <div className="space-y-4 max-w-xl">
          <h2 className="text-4xl font-semibold leading-snug">
            Our company values <br />
            culture <span className="inline-block">💕</span>
          </h2>
          <p className="font-inter text-lg font-normal leading-relaxed text-gray-300">
            We specialize in creating visual identities for products and brands
            in your company.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-sm font-inter">
          {cards.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3">
              <span className="text-2xl">{item.emoji}</span>
              <p className="text-white font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-10 bg-gradient-to-br from-[#2a0a47] to-[#120217] px-8 py-10 rounded-xl shadow-lg">
        <div className="flex-1 space-y-4 sm:items-center">
          <h3 className="text-3xl font-semibold text-white">
            Explore product in <br /> new way{" "}
            <span className="inline-block">➤</span>
          </h3>
          <p className="text-sm text-gray-300 font-inter">
            We specialize in creating visual identities for products and brands
            in your company.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <input
              type="text"
              placeholder="Your Email"
              className="px-4 py-2 rounded-md bg-gradient-to-b from-[#3a0a69] to-[#100018] text-white placeholder-white/70 outline-none"
            />
            <button className="bg-pink-600 hover:bg-pink-500 px-6 py-2 rounded-md text-white transition">
              Start ↗
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={group22}
            alt="Hands Illustration"
            className="rounded-md object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
};
