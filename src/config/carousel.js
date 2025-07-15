console.log("carousel.js");

const swipers = document.querySelectorAll('.swiper');
const standardOptions = {
  direction: 'horizontal',
  mousewheel: true
};

swipers.forEach((swiper) => {
  const options = JSON.parse(swiper.dataset.swiperOptions || '{}');
  console.log(new Swiper(swiper, {...standardOptions, ...options}));
});
