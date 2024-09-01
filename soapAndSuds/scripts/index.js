document.querySelector('.header__menu-toggle-btn').addEventListener('click', function() {
    document.querySelector('.header__menu-toggle-position').classList.toggle('is-visible');
    document.querySelector('.header__menu-toggle').classList.toggle('toggle-rotate');
  });