const buttonBlue = document.querySelector('.header__button--blue');
buttonBlue.addEventListener('click', showSearch);

function showSearch() {
  const headerSearch = document.querySelector('.header__form')
  headerSearch.classList.toggle('header__form--show');
}

const menu = document.querySelector(".header__menu");
const stickyPosition = menu.offsetTop;

function myFunction() {
  if (window.pageYOffset > stickyPosition) {
    menu.classList.add("header__menu--sticky");
  } else {
    menu.classList.remove("header__menu--sticky");
  }
}

window.onscroll = function () { myFunction() };
