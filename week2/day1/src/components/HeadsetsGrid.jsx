import React from "react";
import group37 from "../assets/Group 37.png";
import reactangle34 from "../assets/Rectangle 34.png";
import rectangle35 from "../assets/Rectangle 35.png";
import rectangle36 from "../assets/Rectangle 36.png";

export const HeadsetsGrid = () => {
  const headsetData = [
    {
      img: group37,
      alt: "Headset 1",
      label: null,
      desc: null,
    },
    {
      img: reactangle34,
      alt: "Headset 2",
      label: "AIoT",
      desc: "AI and IoT are both emerging innovative technologies with a lot of potentials.",
    },
    {
      img: rectangle35,
      alt: "Headset 3",
      label: "HoloLens",
      desc: "HoloLens display information, blend with the real world, or even simulate a virtual world.",
    },
    {
      img: rectangle36,
      alt: "Headset 4",
      label: "TPCASTT",
      desc: "Method is great to start students reading and inferring with little assistance from the instructor.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <p className="text-white font-orbitron font-semibold text-[24px] mb-6">
        Mixed Reality Headsets
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {headsetData.map((item, index) => (
          <div key={index} className="relative">
            <img
              src={item.img}
              alt={item.alt}
              className="rounded-lg object-cover w-full h-full max-h-80 sm:max-h-96 transition-all duration-300 hover:brightness-110"
            />
            {item.label && item.desc && (
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6">
                <div className="bg-gradient-to-br from-[#4e7dd6] via-[#b05fbd] to-[#8cb6ff] backdrop-blur-md p-4 rounded-md text-white shadow-lg">
                  <p className="font-semibold text-sm">{item.label}</p>
                  <p className="text-xs mt-1 text-white/80">{item.desc}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
