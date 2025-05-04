import React from "react";
import milly from "../assets/Ellipse 11.png";
import vani from "../assets/Ellipse 11 (1).png";
import denny from "../assets/Ellipse 11 (2).png";
export const Testimonials = () => {
  const cards = [
    {
      title: "starstarstar",
      description:
        "“I know in real-time where the money is spent,and I don’t have to lend out the company’s credit card anymore. What a relief!”",
      profilePic: (
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={milly}
          alt=""
        />
      ),
      name: "Denny Hilguston",
      userId: "@denny.hill",
    },
    {
      title: "starstarstar",
      description:
        "VISUALS are much better. The improvements in optics and resolution and much more than a modern console generation leap.",
      profilePic: (
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={vani}
          alt=""
        />
      ),
      name: "Vani Pandey",
      userId: "@vani.pandey",
    },
    {
      title: "starstarstar",
      description:
        "I can actually see the improvement in the graphics, not having the external sensors is a big plus.",
      profilePic: (
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={denny}
          alt=""
        />
      ),
      name: "milly singh",
      userId: "@milly.singh",
    },
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-10 bg-gradient-to-b from-[#3a0a69] to-[#100018] rounded-md">
        <div className="text-center">
          <h2 className="text-[32px] font-bold leading-tight tracking-[-0.5px] font-orbitron text-white">
            What our clients say
          </h2>
          <p className="text-base font-normal leading-relaxed tracking-[-0.18px] font-inter text-gray-300 max-w-xl mx-auto">
            See what our customers say about us. It really matters to us. How
            good or bad it is, we will use it for evaluation to make EhyaLive
            better.
          </p>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center sm:items-center space-x-4 relative bottom-[-120px] md:flex-row">
          {cards.map((item, id) => (
            <div
              className="flex flex-col space-y-4 p-6 rounded-xl bg-gradient-to-br from-[#2a0a47] to-[#120217] text-white max-w-md shadow-lg"
              key={id}
            >
              <p className="text-sm font-medium text-yellow-400">
                {item.title}
              </p>

              <p className="text-base leading-relaxed">“{item.description}”</p>

              <div className="flex items-center gap-4 pt-2">
                {item.profilePic}
                <div className="text-sm">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-pink-400">{item.userId}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
