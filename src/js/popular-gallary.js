const refs = {
  sliderMain: document.querySelector('.slider_main'),
  sliderBg: document.querySelector('.slider_bg'),
  sliderItems: document.querySelectorAll('.slider__item')
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

// refs.sliderItems.forEach(item => {
//   item.addEventListener('click', e => {
//     console.log(e)
//     item.classList.toggle('opened')
//   })
// })

let desc = document.querySelector('.description')
sliderMain.on('slideChange', e => {
  sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})