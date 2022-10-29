import React from "react";
import { MdStarRate, MdOutlineCircle } from "react-icons/md";

import { GiBarbedStar, GiStarShuriken } from "react-icons/gi";

import monkey1 from "../images/monkey1.png";
import monkey2 from "../images/monkey2.png";

const Header = () => {
  const headerIcons = {
    1: (
      <MdStarRate className="absolute text-purple-600  hover:text-purple-400 mx-14 md:mx-28 text-2xl md:text-4xl" />
    ),
    2: (
      <MdStarRate className=" text-indigo-600  hover:text-blue-400 mx-1  md:mx-28 text-lg md:text-4xl" />
    ),
    3: (
      <GiStarShuriken className=" absolute text-indigo-600  right-0 hover:text-blue-400 mx-1  mb-16  text-xs   md:text-4xl" />
    ),
    4: (
      <GiStarShuriken className=" absolute text-purple-600  left-0 mb-8 hover:text-blue-400 mx-1   text-xs md:text-xl" />
    ),
    5: (
      <GiStarShuriken className="  text-purple-600 mt-4 left-0 m-0 hover:text-blue-400    text-sm md:text-2xl" />
    ),
    6: (
      <MdOutlineCircle className=" absolute text-indigo-600  right-0 hover:text-blue-400 mx-1 -bottom-10 md:bottom-0 mb-24 md:mb-16  text-lg md:text-4xl" />
    ),
    7: (
      <MdStarRate className=" absolute text-indigo-600 -bottom-2 right-16 hover:text-blue-400    text-sm md:text-sm" />
    ),
    8: (
      <div className="absolute z-40 border border-gray-600 hover:border-gray-400 w-6 md:w-14 h-20 md:h-36 md:-right-24 right-0 -bottom-16 md:-bottom-24 mx-1 md:mx-0 rounded-full"></div>
    ),
    9: (
      <div className=" border border-gray-600 hover:border-gray-400 w-6 md:w-12 h-24 md:h-36   mx-1 md:mx-0 rounded-full"></div>
    ),
    10: (
      <div className=" border border-gray-600 hover:border-gray-400 w-6 md:w-16 h-4 md:h-8   mx-8 mt-24 rounded-full"></div>
    ),
    11: (
      <div className=" border border-gray-600 hover:border-gray-400 w-8 md:w-12 h-8 md:h-12   mx-1 md:mx-0 rounded-full absolute md:relative left-80 md:left-0 bottom-60 md:bottom-0"></div>
    ),
  };
  return (
    <div id="Home" className="bg-black ">
      {headerIcons[1]}
      <div className="py-12 md:py-16 flex flex-col justify-center items-center">
        <div className=" flex justify-center items-center w-full">
          {headerIcons[2]}
          <p className="text-purple-500 text-xs md:text-base ">
            The Nft marketplace with everything for everyone
          </p>
        </div>
        <div className="md:w-10/12 w-full  flex items-center flex-col py-1 relative">
          <div className="text-white w-full md:w-8/12 relative text-center flex flex-row pt-8 md:px-0 px-2 leading-10 justify-center items-center font-bold  text-4xl md:text-6xl">
            {headerIcons[3]}
            <span>Discover</span>
            <span className="w-20 md:w-36  md:py-2 h-8   bg-gray-200 rounded-full mx-4 flex justify-start items-center">
              <img src={monkey1} alt="monkey1" className="w-6 mx-2" />
            </span>
            <span className=""> Collect </span>
          </div>
          <div className="text-white relative    text-center flex flex-row py-4 md:px-0 w-full md:w-6/12 leading-10 justify-center items-center font-bold  text-4xl md:text-6xl">
            {headerIcons[4]}
            <span>and Sell</span>
            <span className="w-36 md:w-40  md:py-2 h-8  bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-4" />
          </div>
          <div className="text-white relative    text-center flex flex-row py-2 md:px-0 w-full md:w-6/12 leading-10 justify-center items-center font-bold  text-4xl md:text-6xl">
            {headerIcons[5]}
            {headerIcons[6]}
            {headerIcons[7]}
            <span>Remarkable NFTs.</span>
          </div>
          {headerIcons[8]}
        </div>
        <div className=" text-gray-600 py-4 md:w-10/12 w-full px-2 mt-12 md:mb-12 flex md:flex-row flex-col items-end  md:items-start md:justify-between justify-between">
          <div className="flex flex-col items-center md:justify-start justify-center">
            <p className="px-2 text-center md:text-left">
              Find digital artworks by proffesionals and discover the real
              meaning of the artwork.
            </p>
            <div className="flex justify-between my-4 absolute md:static left-0 bottom-14">
              {headerIcons[9]}
              {headerIcons[10]}
            </div>
          </div>
          <div className="px-2 md:py-0 py-4 mt-4 relative w-full flex justify-center items-center">
            <div className="absolute  flex flex-col justify-end items-center z-30 top-0 md:w-60 md:h-96 w-40 h-72 bg-yellow-600 rounded-full ">
              <img
                className="z-40 w-full  rounded-b-full"
                src={monkey2}
                alt="monkey2"
              />
            </div>
            <div className="absolute z-20 md:top-10 top-5  md:ml-32 ml-24 md:w-52 md:h-80 w-36 h-60 bg-gray-300 rounded-full" />
          </div>
          <div className="flex  relative flex-col mt-72 md:mt-0 items-center md:justify-start justify-center">
            <div className="flex justify-between mt-4 absolute md:static left-0 bottom-14">
              {headerIcons[11]}
            </div>
            <p className="px-2 text-center md:text-left">
              <span className="font-bold text-yellow-600 hover:text-yellow-400">
                Bored Ape Yacht Club{" "}
              </span>{" "}
              was launched by Yuga Labs in May 2021, when they minted their
              first 101 Bored Apes on OpenSea.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
