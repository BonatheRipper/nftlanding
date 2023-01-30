export const PrevOrNNextSlideContent = ({
  i,
  current,
  nextOrPrev,
  length,
  css,
  chimpsImages,
}) => {
  return (
    <div
      className={` ${
        i === current ? "hidden md:block" : "hidden "
      } ${css} flex justify-center items-center relative`}
    >
      <img
        className={` image border-white border-2`}
        alt={`sliderImg_${nextOrPrev(current, length)}`}
        src={chimpsImages[nextOrPrev(current, length)]}
      />
      <div className="absolute text-white bottom-0 z-0  w-full flex justify-center flex-col items-center ">
        <h6 className="my-3">CyberPunk</h6>
        <p className="text-center text-sm ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac eu tortor
          in enim et. In eu
        </p>
        <button
          className={`my-3 hover:bg-[#E7A141] rounded-full border border-[#E7A141]  px-6 py-1 flex justify-center items-center`}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export const CurrenSliderContent = ({ i, item, current }) => {
  return (
    <div className={` mb-20  flex justify-center items-center relative`}>
      <img
        className="image border-white border-2"
        alt={`sliderImg_${i}`}
        src={item}
      />
      <div className="absolute text-white bottom-0 z-0 py-2 w-full flex justify-center flex-col items-center ">
        <h6 className="my-3">CyberPunk</h6>
        <p className="text-center text-sm ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac eu tortor
          in enim et. In eu
        </p>
        <button
          className={`${
            i === current ? "bg-[#E7A141]" : ""
          } my-3 hover:bg-[#E7A141] rounded-full border border-[#E7A141]  px-6 py-1 flex justify-center items-center`}
        >
          Buy
        </button>
      </div>
    </div>
  );
};
