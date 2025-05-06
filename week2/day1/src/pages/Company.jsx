import React from "react";
import vector5 from "../assets/Vector5.png";
import group35 from "../assets/Group35.png";
export const Company = () => {
  return (
    <>
      <div className="flex items-center space-x-5 mt-10  md:mx-52">
        <img className=" absolute z-0" src={vector5} alt="" />
        <p className="z-10 font-orbitron font-semibold text-[18.11px] leading-normal tracking-normal max-w-60">Awesome experiences with virtual reality world</p>
        <img className="z-10 pl-16" src={group35} alt="" />
      </div>
    </>
  );
};
