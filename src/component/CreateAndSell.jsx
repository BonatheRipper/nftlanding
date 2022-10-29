import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdStarRate } from "react-icons/md";
import { BsImage } from "react-icons/bs";
import AOS from "aos";

import chimp1 from "../images/slider/Chimp2.png";
import { useEffect } from "react";
const CreateAndSell = () => {
  const icons = {
    1: <MdStarRate style={{ fontSize: "8px" }} className="text-white mx-4" />,
  };
  const howTo = [
    { step: "set up your wallet" },
    {
      step: "Create your collection",
      body: `Click My Collections and set up your collection. Add
                      social links, a description, profile & banner images, and
                      set a secondary sales fee.`,
    },
    { step: "Add your NFTs" },
    { step: "List them for sale" },
    { step: "List them for sale" },
    { step: "List them for sale" },
    { step: "List them for sale" },
  ];
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      data-aos="fade-up"
      id="Create"
      className="bg-black w-full px-4 py-12  flex flex-col justify-center items-center relative text-white"
    >
      <h6 className="text-[#9B23EA] flex text-sm items-center ">
        <span>Become a creator</span>
        {icons[1]}
      </h6>
      <h1 className="my-4 text-xl md:text-3xl font-bold w-60 text-center">
        Create and sell your NFTs
      </h1>
      <div className="my-8 flex flex-row overflow-auto md:justify-cente items-center w-full">
        {howTo.map((item, i) => (
          <div key={i}>
            {i + i !== 2 ? (
              <div className="relative border border-gray-600 whitespace-nowrap	 hover:border-gray-400 md:h-96 h-80 mx-4 px-8 md:px-12   rounded-3xl py-8 flex flex-col justify-start items-center">
                <h6 className="text-[#E7A141] text-2xl md:text-4xl ">{`0${
                  i + 1
                }`}</h6>
                <div className="mt-2 mb-8 border absolute top-20 border-gray-700 hover:border-gray-400 w-10/12" />
                <p className="transform rotate-90 w-full absolute top-44 whitespace-nowrap	 ">
                  {item.step}
                </p>
              </div>
            ) : (
              <div className="w-64 h-64 border border-gray-700 hover:border-gray-400 rounded-3xl relative">
                <div className="absolute rounded-3xl w-full h-full bg-black  z-20 opacity-40" />
                <img
                  src={chimp1}
                  className="absolute h-full w-full rounded-3xl "
                  alt="imgStep"
                />
                <div className="w-full h-full  rounded-3xl z-40 absolute flex flex-col justify-between ">
                  <h6 className="text-[#E7A141] text-2xl md:text-4xl mx-4 my-4">{`0${
                    i + 1
                  }`}</h6>
                  <BsImage className="mx-4 text-2xl" />
                  <div>
                    <h6 className="text-sm mx-4 ">{item.step}</h6>
                    <p
                      style={{ fontSize: "10px" }}
                      className="text-xs mx-4 mb-4 text-gray-400"
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateAndSell;
