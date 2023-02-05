import {
  trendingFilms
} from './film-api';

const refs = {
  swiper: document.querySelector('.swiper-wrapper'),
  shadow: document.querySelector('.swiper-shadow')

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


