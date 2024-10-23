import '../lib/dd.js';

if (document.querySelector('.header__hamburger')) {
  document
    .querySelector('.header__hamburger')
    .addEventListener('click', function () {
      document.documentElement.classList.toggle('_show-menu');
    });
}
