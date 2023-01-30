export const ArrowBtn = ({ css, img, click }) => {
  return (
    <div
      onClick={click}
      className={` md:w-10 md:h-10 h-8 w-8 absolute p-1 md:p-2 ${css}  md:mx-4 rounded-full bg-gray-400 hover:bg-gray-200 flex justify-center items-center`}
    >
      <img src={img} alt={img} />
    </div>
  );
};
