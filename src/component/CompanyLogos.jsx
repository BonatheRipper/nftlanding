import React from "react";
import logo1 from "../images/logos/1.png";
import logo2 from "../images/logos/2.png";
import logo3 from "../images/logos/3.png";
import logo4 from "../images/logos/4.png";
import logo5 from "../images/logos/5.png";
import logo6 from "../images/logos/6.png";
import logo7 from "../images/logos/7.png";
import logo8 from "../images/logos/8.png";
import logo9 from "../images/logos/9.png";
import logo10 from "../images/logos/10.png";
import { useEffect } from "react";
import AOS from "aos";

const CompanyLogos = () => {
  const firstLogos = [logo1, logo2, logo3, logo4, logo5];
  const secondLogos = [logo6, logo7, logo8, logo9, logo10];
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="flex  py-0  relative  md:py-28 flex-col justify-center items-center text-gray-600  bg-black pb-8">
      <div className="w-full slider relative">
        {" "}
        <div className="flex  slide-track  slideLogos mb-12 px-6 w-full justify-between flex-row items-center overflow-x-scroll md:overflow-hidden">
          {firstLogos.map((img) => (
            <img
              key={img}
              className="h-6 md:h-8 mx-6 md:mx-2 slideImage slide"
              src={img}
              alt={img}
            />
          ))}
        </div>
      </div>

      <div className="w-full slider relative">
        {" "}
        <div className="flex  slide-track  slideLogos mb-12 px-6 w-full justify-between flex-row items-center overflow-x-scroll md:overflow-hidden">
          {secondLogos.map((img) => (
            <img
              key={img}
              className="h-6 md:h-8 mx-6 md:mx-2 slideImage slide"
              src={img}
              alt={img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
