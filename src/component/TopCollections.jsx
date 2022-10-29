import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { SiEthereum } from "react-icons/si";
import { MdStarRate } from "react-icons/md";

import { toast } from "react-toastify";
import chimp2 from "../images/cards/chimp2.png";
import chimp3 from "../images/cards/chimp3.png";
import chimp4 from "../images/cards/chimp4.png";
import chimp5 from "../images/cards/chimp6.png";
import chimp6 from "../images/cards/chimp6.png";
import chimp7 from "../images/cards/chimp7.png";
import chimp8 from "../images/cards/chimp8.png";
import chimp1 from "../images/cards/chimp1.png";
import { useEffect } from "react";
import AOS from "aos";

const TopCollections = () => {
  function ItemTotal() {
    return `${Math.floor(Math.random() * 99 + 1)},${Math.floor(
      Math.random() * 999
    )}.${Math.floor(Math.random() * 99)}`;
  }
  const topItemsDemoData = [
    {
      name: "Bored Ape Yatcht",
      price: Math.floor(Math.random() * 99),
      image: chimp1,
      growth: `+${Math.floor(Math.random() * 199)}.${Math.floor(
        Math.random() * 99
      )}%`,
      total: ItemTotal(),
    },
    {
      name: "Bored Ape Yatcht",
      price: Math.floor(Math.random() * 99),
      image: chimp2,
      growth: `+${Math.floor(Math.random() * 199)}.${Math.floor(
        Math.random() * 99
      )}%`,
      total: ItemTotal(),
    },
    {
      name: "Bored Ape Yatcht",
      price: Math.floor(Math.random() * 99),
      image: chimp3,
      growth: `+${Math.floor(Math.random() * 199)}.${Math.floor(
        Math.random() * 99
      )}%`,
      total: ItemTotal(),
    },
    {
      name: "Bored Ape Yatcht",
      price: Math.floor(Math.random() * 99),
      image: chimp4,
      growth: `+${Math.floor(Math.random() * 199)}.${Math.floor(
        Math.random() * 99
      )}%`,
      total: ItemTotal(),
    },
    {
      name: "Bored Ape Yatcht",
      price: Math.floor(Math.random() * 99),
      image: chimp5,
      growth: `+${Math.floor(Math.random() * 199)}.${Math.floor(
        Math.random() * 99
      )}%`,
      total: ItemTotal(),
    },
    {
      name: "Bored Ape Yatcht",
      price: Math.floor(Math.random() * 99),
      image: chimp1,
      growth: `+${Math.floor(Math.random() * 199)}.${Math.floor(
        Math.random() * 99
      )}%`,
      total: ItemTotal(),
    },
    {
      name: "Bored Ape Yatcht",
      price: Math.floor(Math.random() * 99),
      image: chimp6,
      growth: `+${Math.floor(Math.random() * 199)}.${Math.floor(
        Math.random() * 99
      )}%`,
      total: ItemTotal(),
    },
    {
      name: "Bored Ape Yatcht",
      price: Math.floor(Math.random() * 99),
      image: chimp7,
      growth: `+${Math.floor(Math.random() * 199)}.${Math.floor(
        Math.random() * 99
      )}%`,
      total: ItemTotal(),
    },
    {
      name: "Bored Ape Yatcht",
      price: Math.floor(Math.random() * 99),
      image: chimp8,
      growth: `+${Math.floor(Math.random() * 199)}.${Math.floor(
        Math.random() * 99
      )}%`,
      total: ItemTotal(),
    },
  ];
  const topCollectionsIcons = {
    1: (
      <div className="w-8 h-8 md:h-12 md:w-12 border border-gray-600 absolute left-10 md:left-60 top-10 rounded-full hover:border-gray-200" />
    ),
    2: (
      <div className="w-8 h-8 md:h-12 md:w-12 border border-gray-600 absolute left-5 md:left-80 bottom-0 rounded-full hover:border-gray-200" />
    ),
    3: (
      <MdStarRate className="text-indigo-600 bottom-10 right-20 md:right-44 absolute hover:text-indigo-400 text-2xl md:text-4xl" />
    ),
    4: (
      <div className="hidden z-40 md:flex w-32 md:left-96 left-24 h-8 md:h-10  border border-gray-700 hover:border-gray-200 rounded-full absolute -bottom-20 md:-bottom-40" />
    ),
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleViewRanking = () => {
    toast("That's all we have for you");
    return 0;
  };
  return (
    <div
      id="Collections"
      data-aos="fade-up"
      className="bg-black w-full px-4 py-12 md:py-24 flex flex-col justify-center items-center relative text-white"
    >
      {topCollectionsIcons[1]}
      {topCollectionsIcons[2]}
      {topCollectionsIcons[3]}

      <h6 className="text-[#9B23EA] text-lg md:text-xl">NFT Collection</h6>
      <h1 className="my-4 text-xl md:text-3xl font-bold">Top Collections</h1>
      <h1 className=" text-[#E7A141] font-bold my-2 text-2xl md:text-3xl flex justify-center items-center relative">
        <span>In a Week </span> <TiArrowSortedDown className="ml-1 mt-2 " />
      </h1>
      <div className="md:grid md:grid-cols-3 flex flex-col justify-center items-center">
        {topItemsDemoData.map((item, i) => (
          <div
            key={i}
            className="transform md:scale-100 scale-95  md:hover:scale-105 hover:scale-100 border border-gray-600 hover:border-gray-300 w-96 h-24 rounded-3xl md:mx-4 md:my-6 my-2 flex px-4"
          >
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row justify-center items-center ">
                <span>{i + 1}</span>
                <div className="flex mx-3">
                  <img
                    className="md:w-10 md:h-10 w-8 h-8 rounded-full"
                    src={item.image}
                    alt="chimpTopCollection"
                  />
                  <div className="md:text-base text-sm flex flex-col justify-center items-center mx-2">
                    <h6 className="m-0 w-full">{`${item.name}0${i + 1}`}</h6>
                    <div className="flex flex-row justify-between items-start w-full ">
                      <span className=" text-xs text-gray-300 ">
                        Floor price:
                      </span>
                      <SiEthereum className="mx-1 text-gray-500 hover:text-gray-300" />

                      <span className=" text-xs text-gray-200 ">
                        {`${item.price}.00`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mx-2 justify-end   items-end">
                <h6 style={{ fontSize: "8px" }} className="text-green-500">
                  {item.growth}
                </h6>
                <div className="flex flex-row">
                  <SiEthereum className="mx-1 text-gray-500 hover:text-gray-300" />
                  <span className="text-[#E7A141] text-xs">{item.total}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        onClick={() => handleViewRanking()}
        className="py-2 px-8 border my-8 border-gray-500 hover:border-gray-300 text-gray-200  rounded-full"
      >
        <h1>View Rankings</h1>
      </div>
      {topCollectionsIcons[4]}
    </div>
  );
};

export default TopCollections;
