import React from "react";
import { useState } from "react";
import { MdStarRate, MdVerified, MdOutlineCircle } from "react-icons/md";
import { BsSortDownAlt, BsHeart } from "react-icons/bs";
import { SiEthereum } from "react-icons/si";
import { toast } from "react-toastify";
import chimp1 from "../images/cards/chimp1.png";
import chimp2 from "../images/cards/chimp2.png";
import chimp3 from "../images/cards/chimp3.png";
import chimp4 from "../images/cards/chimp4.png";
import chimp5 from "../images/cards/chimp6.png";
import chimp6 from "../images/cards/chimp6.png";
import chimp7 from "../images/cards/chimp7.png";
import chimp8 from "../images/cards/chimp8.png";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import { useEffect } from "react";
const filterItems = [
  "All Categories",
  "Art",
  "Game",
  "Technology",
  "Virtual worlds",
  "Photography",
];
const chimCardsInitial = [
  {
    image: chimp1,
    Owner: "Chimp",
    category: "Art",
    name: "Bored ape art #",
    price: Math.floor(Math.random() * 20),
    likes: Math.floor(Math.random() * 30),
  },

  {
    image: chimp2,
    Owner: "Chimp",
    category: "Art",

    name: "Bored ape art #",
    price: Math.floor(Math.random() * 20),
    likes: Math.floor(Math.random() * 30),
  },
  {
    image: chimp3,
    Owner: "Chimp",
    category: "Game",

    name: "Bored ape art #",
    price: Math.floor(Math.random() * 20),
    likes: Math.floor(Math.random() * 30),
  },
  {
    image: chimp4,
    Owner: "Chimp",
    category: "Game",
    name: "Bored ape art #",
    price: Math.floor(Math.random() * 20),
    likes: Math.floor(Math.random() * 30),
  },
  {
    image: chimp5,
    Owner: "Chimp",
    category: "Virtual worlds",

    name: "Bored ape art #",
    price: Math.floor(Math.random() * 20),
    likes: Math.floor(Math.random() * 30),
  },
  {
    image: chimp6,
    Owner: "Chimp",
    category: "Virtual worlds",

    name: "Bored ape art #",
    price: Math.floor(Math.random() * 20),
    likes: Math.floor(Math.random() * 30),
  },
  {
    image: chimp7,
    Owner: "Chimp",
    category: "Photography",
    name: "Bored ape art #",
    price: Math.floor(Math.random() * 20),
    likes: Math.floor(Math.random() * 30),
  },
  {
    image: chimp8,
    Owner: "Chimp",
    category: "Photography",

    name: "Bored ape art #",
    price: Math.floor(Math.random() * 20),
    likes: Math.floor(Math.random() * 30),
  },
];
const CardsFilter = () => {
  const [currentFilterItem, setCurrentFilterItem] = useState("All Categories");
  const [chimCards, setChimpCards] = useState(chimCardsInitial);
  const [randFilter, setRandFilter] = useState(1);
  const handleOldOrNewFilter = (query) => {
    if (query.toUpperCase() === "OLDEST") {
      console.log("yes");
      setChimpCards((prev) => prev.reverse());
    } else {
      setChimpCards(chimCardsInitial);
    }
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const FilterIcons = {
    1: (
      <MdStarRate className="text-indigo-600 top-10 left-10 absolute hover:text-indigo-400 text-2xl md:text-4xl" />
    ),
    2: (
      <div className="w-8 h-8 md:h-12 md:w-12 border border-gray-600  hover:border-gray-300 absolute right-10 md:right-40 rounded-full top-20" />
    ),
    3: (
      <MdStarRate className="text-cyan-600 bottom-10 left-10 absolute hover:text-cyan-400 text-4xl md:text-6xl" />
    ),
    4: (
      <MdStarRate className="text-purple-600 bottom-5 right-10 absolute hover:text-purple-400 text-2xl md:text-4xl" />
    ),
  };
  const handleRandFilter = (query) => {
    setCurrentFilterItem(query);
    setRandFilter(Math.floor(Math.random() * filterItems.length));
  };
  const handleMorePost = () => {
    toast("Nothing else to show");
    return 0;
  };
  return (
    <div
      data-aos="fade-up"
      id="Discover"
      className="bg-black relative py-24  flex flex-col justify-center items-center"
    >
      {FilterIcons[1]}
      {FilterIcons[2]}
      {FilterIcons[3]}
      {FilterIcons[4]}

      <h6 className="text-purple-600 hover:text-purple-600 text-sm md:text-base">
        Discover
      </h6>
      <h2 className="text-white my-4  text-2xl md:text-4xl font-bold">
        {" "}
        Discover Items
      </h2>
      <div className="flex flex-col  md:flex-row justify-between items-center w-full">
        <div className="border border-gray-600 hover:border-gray-400 px-4 flex justify-center items-center my-4 mx-4 w-11/12 md:w-2/12 h-12 rounded-full relative">
          <select
            defaultValue="Newest"
            onChange={(e) => handleOldOrNewFilter(e.target.value)}
            className="w-full bg-transparent text-gray-300 outline-none "
          >
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>
        </div>
        <ul className=" flex flex-1 my-2 w-full md:w-8/12  overflow-x-scroll overflow-y-hidden">
          {filterItems.map((item, i) => (
            <li
              key={item}
              onClick={() => setCurrentFilterItem(item)}
              className={`${
                item === currentFilterItem || i === currentFilterItem
                  ? "bg-yellow-600 text-gray-100 "
                  : "text-gray-200"
              } border  whitespace-nowrap hover:bg-yellow-600	 text-center w-full border-yellow-600 flex-wrap h-10 rounded-full  px-12 mx-2  flex justify-center items-center`}
            >
              {item}
            </li>
          ))}
        </ul>
        <div
          onClick={() => handleRandFilter("filter")}
          className="border border-gray-600 hover:border-gray-400  px-8 my-2 mx-4 w-full md:w-2/12 h-12 rounded-full hidden md:flex justify-between items-center md:bg-yellow-600 text-gray-100 "
        >
          <span className="font-bold text-gray-300">Filter</span>
          <BsSortDownAlt className="text-gray-300 text-2xl" />
        </div>
      </div>
      <div className=" my-8  md:px-4 py-2 w-full grid md:grid-cols-4  grid-cols-2">
        {chimCards
          .filter((val) => {
            let x = 0;
            //If the query search to filter is emty return all
            if (currentFilterItem === "All Categories") {
              return val;
            } else if (
              //Else return the filtered
              val.category
                .toLowerCase()
                .includes(currentFilterItem.toLowerCase())
            ) {
              return val;
            } else if (
              //Else return the filtered
              currentFilterItem.toLowerCase() === "filter"
            ) {
              if (
                //Else return the filtered
                val.category
                  .toLowerCase()
                  .includes(filterItems[randFilter].toLocaleLowerCase())
              ) {
                return val;
              }
            } else {
              return 0;
            }
          })
          .map((item, i) => (
            <div
              key={i}
              className="transform md:scale-100 scale-95  md:hover:scale-105 hover:scale-100 mx-1 text-gray-200 md:mx-4 border  border-gray-600 hover:border-gray-400  my-4  rounded-2xl flex flex-col justify-start items-center"
            >
              <img
                style={{ height: "60%" }}
                src={item.image}
                alt="ChimpImage"
                className="w-full md:px-5 px-2 my-2 rounded-2xl"
              />
              <div className="flex flex-row justify-between items-center my-2 px-4 w-full">
                <div className="flex justify-center items-center ">
                  <span>{item.Owner + i}</span>
                  <MdVerified className="text-xl md:text-2xl mx-1 px-1 text-[#5A75E1]" />
                </div>
                <span className="text-xs md:text-sm">Price</span>
              </div>
              <div className="flex flex-row justify-between items-center my-2 px-4 w-full">
                <span className="text-xs md:text-xs">{item.name + i}</span>

                <div className="flex justify-center items-center ">
                  <SiEthereum className="text-xl md:text-2xl mx-1 px-1 text-gray-600" />
                  <span className="text-yellow-500 font-bold text-base">
                    {item.price}
                  </span>
                </div>
              </div>
              <div className="border border-gray-800 mx-8 my-2 md:my-4 w-11/12" />
              <div className="flex flex-row justify-between items-center my-2 px-4 w-full">
                <SiEthereum className="text-xl md:text-2xl mx-1 px-1 text-gray-600" />

                <div className="flex justify-center items-center ">
                  <BsHeart className="text-xl md:text-2xl mx-1 px-1 text-gray-300" />
                  <span className="text-yellow-500 font-bold text-base">
                    {item.likes}
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div
        onClick={() => handleMorePost()}
        className="py-2 px-8 border border-gray-500 hover:border-gray-300 text-gray-200  rounded-full"
      >
        <h1>See More</h1>
      </div>
    </div>
  );
};

export default CardsFilter;
