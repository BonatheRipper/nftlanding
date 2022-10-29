import React from "react";
import chimp1 from "../images/slider/Chimp1.png";
import chimp2 from "../images/slider/Chimp2.png";
import chimp3 from "../images/slider/Chimp3.png";
import chimp4 from "../images/slider/Chimp4.png";
import chimp5 from "../images/slider/Chimp5.jpeg";
import chimp6 from "../images/slider/Chimp6.jpeg";
import chimp7 from "../images/slider/Chimp7.png";
import chimp8 from "../images/slider/Chimp8.jpeg";
import chimp9 from "../images/slider/Chimp9.png";
import chimp10 from "../images/slider/Chimp10.jpeg";
import chimp11 from "../images/slider/Chimp11.jpeg";
import chimp12 from "../images/slider/Chimp12.png";
import chimp13 from "../images/slider/Chimp13.jpeg";
import chimp14 from "../images/slider/Chimp14.jpeg";
import prev from "../images/swipper/prev.png";
import next from "../images/swipper/next.png";
import { useState } from "react";
import { GiBarbedStar, GiStarShuriken } from "react-icons/gi";
import AOS from "aos";
import { useEffect } from "react";

const chimpsImages = [
  chimp1,
  chimp2,
  chimp3,
  chimp4,
  chimp5,
  chimp6,
  chimp7,
  chimp8,
  chimp9,
  chimp10,
  chimp11,
  chimp12,
  chimp13,
  chimp14,
];
const ArrowBtn = ({ css, img, click }) => {
  return (
    <div
      onClick={click}
      className={` md:w-10 md:h-10 h-8 w-8 absolute p-1 md:p-2 ${css}  md:mx-36 rounded-full bg-gray-400 hover:bg-gray-200 flex justify-center items-center`}
    >
      <img src={img} alt={img} />
    </div>
  );
};
const InnerSlideContent = ({ title, bodyText, btnText, image, btnCss }) => {
  return (
    <>
      {" "}
      <div className="absolute z-40 h-full w-full flex justify-end flex-col items-center px-4">
        <h6 className="my-3">{title}</h6>
        <p className="text-center text-sm ">{bodyText}</p>
        <button
          className={`my-3 rounded-full border ${btnCss} px-6 py-1 flex justify-center items-center`}
        >
          {btnText}
        </button>
      </div>
      <img
        className={`absolute h-full w-full rounded-3xl transition-all duration-700  ${
          image ? "opacity-80" : "opacity-10"
        }`}
        src={image}
        alt="img"
      />
    </>
  );
};
const SliderContainer = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [prevImageInSlider, SetPrevImageInSlider] = useState(1);
  const [nextImageInSlider, setNextImageInSlider] = useState(2);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleArrowBtnClick = (clickType) => {
    //Code for slider arrow buttons

    if (sliderIndex !== chimpsImages.length) {
      //if sliderindex not equal to slide images length run, else do nothing
      if (clickType === "prev") {
        // If the btn click is prev do this code below
        if (sliderIndex !== 0) {
          //if the sliderIndex not zero then  goto prev slider in rows of 3
          setSliderIndex(sliderIndex - 1);
          setNextImageInSlider(nextImageInSlider - 1);
          SetPrevImageInSlider(prevImageInSlider - 1);

          if (sliderIndex === chimpsImages.length - 3) {
            //To maintain 3 rows of image check if sliderIndex === total images minus 3
            //if true reverse the next slider process
            setNextImageInSlider(nextImageInSlider + sliderIndex);
            SetPrevImageInSlider(prevImageInSlider + sliderIndex);
          }
        }
      } else {
        //else the buutton must be next
        if (sliderIndex !== chimpsImages.length - 1) {
          //if the sliderIndex not same length as total images minus 1 then  goto next slider in rows of 3
          //minus 1 due to we count from 0 ! 1
          setSliderIndex(sliderIndex + 1);
          if (sliderIndex !== chimpsImages.length - 3) {
            //To maintain 3 rows of image check if sliderIndex !== total images minus 3
            //if true start the next process
            setNextImageInSlider(nextImageInSlider + 1);
            SetPrevImageInSlider(prevImageInSlider + 1);
          } else {
            //else let the prev and next be first and second images in the slide
            setNextImageInSlider(nextImageInSlider - sliderIndex);
            SetPrevImageInSlider(prevImageInSlider - sliderIndex);
          }
        }
      }
    } else {
      //Do notthing
      return;
    }
  };
  const handleDownSliderBtnClick = (i) => {
    //Code for buttons control below slider

    //set sliderIndex to the clicked images index
    setSliderIndex(i);
    if (i <= chimpsImages.length - 3) {
      //if the index  is less than total images minus 3 images then add prev and next image index
      SetPrevImageInSlider(i + 1);
      setNextImageInSlider(i + 2);
    } else {
      //else let prev and next index be second o last and last  image
      SetPrevImageInSlider(1);
      setNextImageInSlider(2);
    }
  };
  // console.log(`${sliderIndex}||${prevImageInSlider}||${nextImageInSlider}`);
  const sliderIcons = {
    1: (
      <div className="border border-gray-600 hover:border-purple-600  w-8 h-8 rounded-full  mx-4 " />
    ),
    2: (
      <GiStarShuriken className="text-xl md:text-3xl text-purple-600 hover:text-purple-400 absolute right-10 md:right-52 bottom-1" />
    ),
  };
  return (
    <div
      data-aos="fade-up"
      className="bg-black text-gray-500 w-full relative py-4 "
    >
      {sliderIcons[1]}
      <div className="flex justify-center items-center flex-col">
        <h6 className="md:text-xl  text-[#9B23EA]">Hot stuff</h6>
        <h1 className="md:w-3/12 w-6/12 text-gray-200 text-center md:text-4xl  text-2xl font-bold ">
          Foremost Item collections
        </h1>
      </div>
      <div className="flex w-full justify-end items-end px-4">
        {sliderIcons[1]}
      </div>
      <div className="my-4  py-8 flex  justify-center items-center relative">
        <ArrowBtn
          click={() => handleArrowBtnClick("prev")}
          css="left-0"
          img={prev}
        />
        <div className="transform md:scale-100 scale-95  md:hover:scale-105 hover:scale-100 h-80 w-64  border-2 border-white text-gray-200  hidden md:inline rounded-3xl relative">
          <InnerSlideContent
            title="CyberPunk"
            bodyText="  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac eu
              tortor in enim et. In eu"
            btnText="Buy"
            image={
              chimpsImages[
                sliderIndex === chimpsImages.length
                  ? sliderIndex - 1
                  : sliderIndex
              ]
            }
            btnCss="border-[#E7A141]"
          />
        </div>
        <div className="transform md:scale-100 scale-95  md:hover:scale-105 hover:scale-100 h-96 w-72 border-2 border-white rounded-3xl  mx-12  relative text-gray-200 ">
          <InnerSlideContent
            title="CyberPunk"
            bodyText="  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac eu
              tortor in enim et. In eu"
            btnText="Buy"
            image={chimpsImages[prevImageInSlider]}
            btnCss="bg-[#E7A141]"
          />
        </div>
        <div className="transform md:scale-100 scale-95  md:hover:scale-105 hover:scale-100 h-80 w-64  border-2 border-white  hidden md:inline rounded-3xl relative text-gray-200  ">
          <InnerSlideContent
            title="CyberPunk"
            bodyText="  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac eu
              tortor in enim et. In eu"
            btnText="Buy"
            image={chimpsImages[nextImageInSlider]}
            btnCss="border-[#E7A141]"
          />
        </div>
        <ArrowBtn
          click={() => handleArrowBtnClick("next")}
          css="right-0"
          img={next}
        />
        <div className="w-96  absolute -bottom-0 h-8  flex justify-center items-center pt-12">
          {chimpsImages.map((img, i) => (
            <div
              key={i}
              // onClick={() => handleDownSliderBtnClick(i)}
              className={`py-1 px-1 border mx-2 rounded-full ${
                i === sliderIndex ? "bg-[#E7A141]" : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
      {sliderIcons[2]}
    </div>
  );
};

export default SliderContainer;
