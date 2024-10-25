import '../lib/dd.js';

if (document.querySelector('.header__hamburger')) {
  document
    .querySelector('.header__hamburger')
    .addEventListener('click', function () {
      document.documentElement.classList.toggle('_show-menu');
    });
}

if (document.querySelector('.header-services-btn')) {
  document
    .querySelector('.header-services-btn')
    .addEventListener('click', function () {
      document.documentElement.classList.toggle('_show-services-menu');
    });
}

if (document.querySelector('.services-header__btn')) {
  document
    .querySelector('.services-header__btn')
    .addEventListener('click', function () {
      document.documentElement.classList.remove('_show-services-menu');
    });
}

document.addEventListener('click', function (e) {
  if (
    !e.target.closest('.header__services') &&
    !e.target.closest('.header-services-btn')
  ) {
    document.documentElement.classList.remove('_show-services-menu');
  }
});
