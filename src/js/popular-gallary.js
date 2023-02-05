const ref = {
  slider: document.querySelectorAll('.slider__item')
}
console.log(ref)
const sliderMain = new Swiper('.slider_main', {
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

const sliderBg = new Swiper('.slider_bg', {
  centeredSlides: true,
  parallax: true,
  spaceBetween: 60,
  slidesPerView: 3.5

})

sliderMain.controller.control = sliderBg

document.querySelectorAll('.slider__item').forEach(item => {
  console.log(item)
  item.addEventListener('click', e => {
    console.log(e)
    item.classList.toggle('opened')
  })
})

let desc = document.querySelector('.description')
sliderMain.on('slideChange', e => {
  sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})