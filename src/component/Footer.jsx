import React from "react";
import { MdStarRate } from "react-icons/md";
import { toast } from "react-toastify";

import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialFacebookCircular,
  TiSocialInstagramCircular,
} from "react-icons/ti";
import { AiOutlineCopyright } from "react-icons/ai";
import { useState } from "react";

const Footer = () => {
  const footerLinks = ["Marketplace", "My account", "Resources", "Company"];
  const [email, setEmail] = useState("");
  const socialIcons = [
    {
      icon: (
        <TiSocialFacebookCircular className="text-gray-300 text-3xl mx-2" />
      ),
      link: "https://facebook.com",
    },
    {
      icon: (
        <TiSocialLinkedinCircular className="text-gray-300 text-3xl mx-2" />
      ),
      link: "https://linkedin.com",
    },
    {
      icon: <TiSocialTwitterCircular className="text-gray-300 text-3xl mx-2" />,
      link: "https://twitter.com",
    },
    {
      icon: (
        <TiSocialInstagramCircular className="text-gray-300 text-3xl mx-2" />
      ),
      link: "https://instagram.com",
    },
  ];
  const footerIcons = {
    1: (
      <div className="w-8 h-8 border absolute left-0 top-0 border-gray-600 hover:border-gray-400 rounded-full mx-12 " />
    ),
    2: (
      <MdStarRate className="w-8 h-8 border absolute top-10 right-0 text-purple-800 hover:text-purple-400 border-gray-600 hover:border-gray-400 rounded-full mx- " />
    ),
  };
  const handleSubscription = () => {
    if (email === "" || !email) {
      return toast.error("Email can not not be empty");
    } else {
      toast("You will be added to our newsletter if your email is correct");
      setEmail("");
    }
  };

  return (
    <div className="bg-black w-full  py-8 relative  -bottom-10  flex flex-col justify-between items-center">
      {footerIcons[1]} {footerIcons[2]}
      <div className="flex justify-evenly items-cente w-full mt-4">
        <div className="text-2xl md:text-3xl text-gray-200">
          <span className="font-bold">FIRE</span>
          <span className="">fly</span>
        </div>
        <ul className="flex justify-between flex-col md:flex-row items-start ">
          {footerLinks.map((link, i) => (
            <a
              href="/"
              key={i}
              className="text-xs my-2 md:my-0 mx-0 md:mx-4 md:text-sm text-[#E7A141] hover:text-yellow-400"
            >
              {link}
            </a>
          ))}
        </ul>
        <div className="flex flex-col">
          <h6 className="text-sm font-bold text-white">Stay updated</h6>
          <p className="text-xs text-gray-300">Join our mailing list</p>
        </div>
      </div>
      <div className="my-8 flex  md:flex-row flex-col md:justify-between justify-center  px-8 w-full items-center">
        <h6 className="text-xs text-gray-400">
          The nft marketplace with everything for everyone
        </h6>
        <div className="flex flex-row rounded-3xl md:my-0 my-4">
          <input
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-2 rounded-l-3xl text-center"
          />
          <button
            onClick={() => handleSubscription()}
            className="py-2 text-xs flex justify-center items-center rounded-r-3xl bg-[#E7A141] hover:bg-yellow-800 text-white px-4"
          >
            subscribe
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row rounded-3xl md:my-0 my-4 w-full justify-between items-center px-8">
        <div className="flex flex-row">
          {socialIcons.map((item, i) => (
            <a
              className="transform scale-100 hover:scale-110"
              href={`${item.link}`}
              key={i}
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div className="py-2 mt-4 md:my-0 flex w-full md:justify-end justify-center items-center text-white px-4">
          {" "}
          <h6 className="text-sm">2022 firefly</h6>
          <AiOutlineCopyright className="mx-1" />
          <span className="text-xs">All rights reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
