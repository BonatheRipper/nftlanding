export const nextSlide = (setCurrent, current, length, setPrev_Next) => {
  setPrev_Next(false);
  setCurrent(current === length - 1 ? 0 : current + 1);
};
export const prevSlide = (setCurrent, current, length, setPrev_Next) => {
  setPrev_Next(true);
  setCurrent(current === 0 ? length - 1 : current - 1);
};
export const prevImageInSlide = (current, length) => {
  return current === 0 ? length - 1 : current - 1;
};
export const nextImageInSlide = (current, length) => {
  return current < length - 1 ? current + 1 : length - current;
};
