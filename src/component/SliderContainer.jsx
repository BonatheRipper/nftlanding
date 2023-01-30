import React from "react";
import { useState } from "react";
import AOS from "aos";
import { useEffect } from "react";
import { ArrowBtn } from "./MiniComp/SliderArrows";
import { chimpsImages, nextIcon, prevIcon } from "./Data";
import {
  CurrenSliderContent,
  PrevOrNNextSlideContent,
} from "./MiniComp/InnerSlideContent";
import {
  nextImageInSlide,
  nextSlide,
  prevImageInSlide,
  prevSlide,
} from "./MiniComp/SliderFunctios";
import { sliderIcons } from "./MiniComp/Icons";
const SliderContainer = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [current, setCurrent] = useState(0);
  const [prev_next, setPrev_Next] = useState(true);

  const length = chimpsImages.length;

  return (
    <section className=" w-full cursor-pointer flex flex-col h-screen items-center justify-center relative ">
      {sliderIcons[1]}
      <div className="flex my-10 w-full justify-center items-center flex-col">
        <h6 className="md:text-xl  text-[#9B23EA]">Hot stuff</h6>

        <h1 className="md:w-3/12 w-6/12 text-gray-200 text-center md:text-4xl  text-2xl font-bold ">
          Foremost Item collections
        </h1>
      </div>

      <div className="flex w-full justify-end items-end px-4">
        {sliderIcons[1]}
      </div>
      <ArrowBtn
        click={() => prevSlide(setCurrent, current, length, setPrev_Next)}
        css="left-2 absolute cursor-pointer z-20"
        img={prevIcon}
      />
      <ArrowBtn
        click={() => nextSlide(setCurrent, current, length, setPrev_Next)}
        css="right-2 absolute cursor-pointer z-20"
        img={nextIcon}
      />
      {chimpsImages.map((item, i) => (
        <div key={i} className={` flex justify-center items-center`}>
          <div
            className={` scale-100 flex relative z-0 flex-row justify-center items-center ${
              i === current && prev_next ? "scale-90" : ""
            }
          `}
          >
            {
              <PrevOrNNextSlideContent
                i={i}
                current={current}
                nextOrPrev={prevImageInSlide}
                length={length}
                css={`mr-20`}
                chimpsImages={chimpsImages}
              />
            }
          </div>
          <div
            className={`flex relative z-0 flex-row justify-center items-center ${
              i === current ? "slide active" : "slide"
            }
          `}
          >
            {i === current && (
              <CurrenSliderContent i={i} item={item} current={current} />
            )}
          </div>
          <div
            className={` scale-100 transform flex relative z-0 flex-row justify-center items-center ${
              i === current && !prev_next ? "" : "scale-90"
            }
          `}
          >
            {
              <PrevOrNNextSlideContent
                i={i}
                current={current}
                nextOrPrev={nextImageInSlide}
                length={length}
                css={`ml-20 `}
                chimpsImages={chimpsImages}
              />
            }
          </div>
        </div>
      ))}
      <div className="w-full   h-8  flex justify-center items-center mt-20">
        {chimpsImages.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i < length ? i : i - 1)}
            className={`py-1 px-1 border mx-2 rounded-full ${
              i === current ? "bg-[#E7A141]" : ""
            }`}
          ></div>
        ))}
      </div>
      {sliderIcons[2]}
    </section>
  );
};

export default SliderContainer;
