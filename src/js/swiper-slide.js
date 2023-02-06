
const URL = 'https://api.themoviedb.org/3';
const KEY = 'cf961b1b89f4c4a28558be2b04fdd59a';
const noPosterImg ='https://freedesignfile.com/upload/2018/11/Characters-in-film-design-elements-background-vector-graphic-715.jpg';
const basicImgURL = 'https://image.tmdb.org/t/p/w500';

async function trendingFilms() {
  return await fetch(`${URL}/trending/movie/week?api_key=${KEY}&page=1`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.json();
  }).then(data => {
    return data.results;
  }).catch(error => {
    console.error(
      'There has been a problem with your fetch operation:',
      error
    );
  });
}

trendingFilms().then(data => {
  document.querySelector('.swiper-wrapper').insertAdjacentHTML('beforeend', createPopularList(data))
  document.querySelector('.swiper-shadow').insertAdjacentHTML('beforeend', createPopularList(data))
})
function createPopularList(data) {
 if (data.length === 0) {
  return;
 }
  return data.map(({id, poster_path}) => {
    function generatePosterImg(poster_path) {
      if (poster_path === null) {
        return noPosterImg;
      }
      return `${basicImgURL}${poster_path}`;
    }
    return `<div class="swiper-slide slider__item card-link">
    <div class="slider__img" data-swiper-parallax="20%" style="background-image: url(${generatePosterImg(poster_path)});" data-id=${id}></div>
    </div>`
  })
  .join('');
}

