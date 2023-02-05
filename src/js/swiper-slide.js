import {
  trendingFilms
} from './film-api';

const refs = {
  swiper: document.querySelector('.swiper-wrapper'),
  shadow: document.querySelector('.swiper-shadow'),
  sliderMain: document.querySelector('.slider_main'),
  sliderBg: document.querySelector('.slider_bg'),
  sliderItems: document.querySelectorAll('.slider__item')

}

const noPosterImg ='https://freedesignfile.com/upload/2018/11/Characters-in-film-design-elements-background-vector-graphic-715.jpg';
const basicImgURL = 'https://image.tmdb.org/t/p/w500';

trendingFilms().then(data => {
  refs.swiper.insertAdjacentHTML('beforeend', createPopularList(data))
  refs.shadow.insertAdjacentHTML('beforeend', createPopularList(data))
})
function createPopularList(data) {
 if (data.length === 0) {
  return;
 }
  return data.map(({title, poster_path}) => {
    function generatePosterImg(poster_path) {
      if (poster_path === null) {
        return noPosterImg;
      }
      return `${basicImgURL}${poster_path}`;
    }
    return `<div class="swiper-slide slider__item card-list">
    <div class="slider__img" data-swiper-parallax="20%" style="background-image: url(${generatePosterImg(poster_path)});"></div>
    </div>`
  })
  .join('');
}

const sliderMain = new Swiper(refs.sliderMain, {
  freeMode: true,
  centeredSlides: true,
  mousewheel: true,
  parallax: true,
  breakpoints: {
    0: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    680: {
      slidesPerView: 3.5,
      spaceBetween: 60
    }
  }

})

const sliderBg = new Swiper(refs.sliderBg, {
  centeredSlides: true,
  parallax: true,
  spaceBetween: 60,
  slidesPerView: 3.5

})

sliderMain.controller.control = sliderBg

refs.sliderItems.forEach(item => {
  item.addEventListener('click', e => {
    console.log(e)
    item.classList.toggle('opened')
  })
})

let desc = document.querySelector('.description')
sliderMain.on('slideChange', e => {
  sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})