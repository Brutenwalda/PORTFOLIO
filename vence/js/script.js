// Пошук
const searchButton = document.querySelector('.actions-header__button');
const actionsHeader = document.querySelector('.actions-header');

searchButton.addEventListener('click', () => {
  actionsHeader.classList.toggle('search-open');
});

//Скрол
  const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('_header-scroll');
  } else {
    header.classList.remove('_header-scroll');
  }
});
//Бургер меню
let documentActions = (e) => {
	const targetElement = e.target
	if (targetElement.closest('.icon-menu')) {
		document.documentElement.classList.toggle('open-menu')
	}
}
document.addEventListener('click', documentActions)
