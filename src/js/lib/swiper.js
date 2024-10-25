import Swiper from 'swiper';
import 'swiper/css';
import {
  Navigation,
  EffectFade,
  Thumbs,
  Autoplay,
  Controller,
} from 'swiper/modules';

const breakpoint = window.matchMedia('(min-width:768px)');

let servicesSwiper;
let reviewsSwiper;
let partnersSwiper;
let prodentSwiper;

const enableSliderOnResize = function () {
  if (document.querySelector('.services__slider')) {
    servicesSwiper = new Swiper('.services__slider', {
      modules: [Autoplay],
      speed: 800,
      loop: true,
      spaceBetween: 20,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    });
  }

  if (document.querySelector('.reviews__slider')) {
    reviewsSwiper = new Swiper('.reviews__slider', {
      modules: [Autoplay],
      speed: 800,
      loop: true,
      spaceBetween: 20,
      slidesPerView: 1,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    });
  }

  if (document.querySelector('.partners__slider')) {
    partnersSwiper = new Swiper('.partners__slider', {
      modules: [Autoplay],
      speed: 800,
      loop: true,
      spaceBetween: 20,
      slidesPerView: 1,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    });
  }

  if (document.querySelector('.prodent__slider')) {
    prodentSwiper = new Swiper('.prodent__slider', {
      modules: [Autoplay],
      speed: 800,
      loop: true,
      spaceBetween: 20,
      slidesPerView: 1,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
    });
  }
};

const breakpointChecker = function () {
  if (breakpoint.matches === true) {
    if (servicesSwiper !== undefined) servicesSwiper.destroy(true, true);
    if (reviewsSwiper !== undefined) reviewsSwiper.destroy(true, true);
    if (partnersSwiper !== undefined) partnersSwiper.destroy(true, true);
    if (prodentSwiper !== undefined) prodentSwiper.destroy(true, true);
    return;
  } else if (breakpoint.matches === false) {
    return enableSliderOnResize();
  }
};

if (document.querySelector('.hero__slider')) {
  const imagesSlider = new Swiper('.hero__images-slider', {
    modules: [EffectFade, Controller],
    speed: 800,
    loop: true,
    effect: 'fade',
  });
  const slider = new Swiper('.hero__slider', {
    modules: [Navigation, Autoplay, EffectFade, Controller],
    speed: 800,
    loop: true,
    effect: 'fade',
    navigation: {
      prevEl: '.hero .controls__btn_prev',
      nextEl: '.hero .controls__btn_next',
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });
  imagesSlider.controller.control = slider;
  slider.controller.control = imagesSlider;
}

if (document.querySelector('.team__slider')) {
  const thumbs = new Swiper('.thumbs-team__slider', {
    modules: [Thumbs],
    speed: 800,
    slidesPerView: 2,

    breakpoints: {
      768: {
        slidesPerView: 7,
      },
    },
  });
  const slider = new Swiper('.team__slider', {
    modules: [Navigation, Autoplay, Thumbs, EffectFade],
    speed: 800,
    effect: 'fade',
    navigation: {
      prevEl: '.thumbs-team__btn_prev',
      nextEl: '.thumbs-team__btn_next',
    },
    thumbs: {
      swiper: thumbs,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });
}

breakpoint.addListener(breakpointChecker);

breakpointChecker();
