import React from "react";
import { MdStarRate } from "react-icons/md";
import { MdPhonelinkSetup } from "react-icons/md";
import { ImArrowRight } from "react-icons/im";
import { CiWallet } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { toast } from "react-toastify";
import { useEffect } from "react";
import AOS from "aos";

const GettingStarted = () => {
  const getttingStarted = [
    {
      name: "Setup",
      title: "Setup a metamask wallet",
      icons: <ImArrowRight className="text-[#E7A141] text-xl mx-1" />,
      body: "Looking to kick off your NFT collection, but not sure where to begin? The first thing you'll need is a crypto wallet, which will store your method of payment and allow you to access your new NFT.",
    },
    {
      name: "Fund ETH",
      title: "Fund metamask with ETH.",
      icons: <CiWallet className="text-[#E7A141] text-xl mx-1" />,
      body: "Ether is the native currency of the Ethereum network and it's commonly abbreviated to ETH, which is its most common signifier. You need ETH to pay for some of your interactions with the blockchain, and to pay for the items you buy.",
    },
    {
      name: "Find NFT",
      title: "Find NFT",
      icons: <FiSearch className="text-[#E7A141] text-xl mx-1" />,
      body: "with so many projects out there, we know it can seem hard to find an NFT you love. Here are a few things you may want to keep in mind to simplify the process.",
    },
  ];
  const handleReadMore = () => {
    toast("Nothing to read");
    return 0;
  };
  const icons = {
    1: (
      <MdStarRate
        style={{ fontSize: "8px" }}
        className="text-white mx-4 absolute top-0 left-80"
      />
    ),
    2: (
      <MdStarRate
        style={{ fontSize: "8px" }}
        className="text-white mx-2  top-0 left-80"
      />
    ),
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos="fade-up"
      id="Start"
      className="relative px-4 md:px-12 bg-black w-full  py-12  flex flex-col justify-center items-center  text-white"
    >
      {icons[1]}
      <h6 className="text-[#E7A141] flex text-sm items-center ">
        <span>Resources</span> {icons[2]}
      </h6>
      <h1 className="my-4 text-xl md:text-3xl font-bold  text-center">
        Getting Started{" "}
      </h1>
      <div className="flex my-4 justify-between items-center w-full text-[#E7A141] px-8 md:px-40 text-xs md:text-base border-b py-2 border-gray-600">
        <p>Articles</p>
        <p>Introduction</p>
      </div>
      <div className="w-full my-4">
        {getttingStarted.map((item, i) => (
          <div
            key={i}
            className="flex flex-col border-b py-4 border-gray-600 md:flex-row justify-between items-center w-full md:h-32"
          >
            <div className="flex flex-row justify-between items-center w-full px-4 mx-4 md:my-0 my-4">
              <div className="flex justify-center items-center">
                {item.icons}
                <span className="text-xs text-gray-300">{item.name}</span>
              </div>
              <h6 className="md:w-28">{item.title}</h6>
            </div>
            <div className="flex flex-row justify-between items-center w-full px-4 mx-4">
              <div className="flex justify-center items-center">
                <p className="text-xs text-gray-400">{item.body}</p>
              </div>
              <div className=" px-2 md:mx-4 mx-2 py-2  flex justify-center items-center border rounded-full bg-[#FAECD9] hover:bg-white">
                <ImArrowRight className="text-[#E7A141] text-sm md:text-xl " />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        onClick={() => handleReadMore()}
        className="py-2 px-8 border my-8 border-gray-500 hover:border-gray-300 text-gray-200  rounded-full"
      >
        <h1>Read more</h1>
      </div>
    </div>
  );
};

export default GettingStarted;
