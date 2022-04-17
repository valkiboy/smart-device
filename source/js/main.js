const pageFooter = document.querySelector('.page-footer');
const accordionItemContent = document.querySelectorAll('.accordion__item-content');
const accordionToggle = document.querySelectorAll('.accordion__toggle');
const aboutCompanyHide = document.querySelector('.about-company__hide');
const aboutCompanyButton = document.querySelector('.about-company__button');
const aboutCompanySpan = document.querySelector('.about-company span');

// Удаляю  класс "no-js" у футера проверив что элемент присутствует

if (typeof (pageFooter) !== 'undefined' && pageFooter !== null) {
  pageFooter.classList.remove('no-js');
}

// Скрываю все списки добавляя класс "close"

if (typeof (accordionItemContent) !== 'undefined' && accordionItemContent !== null) {
  accordionItemContent.forEach(function (item) {
    item.classList.add('close');
  });
}

// Добавляю класс "toggle--close" всем кнопкам

if (typeof (accordionToggle) !== 'undefined' && accordionToggle !== null) {
  accordionToggle.forEach(function (item) {
    item.classList.add('toggle--close');
  });
}

const allElems = document.querySelectorAll('.accordion__item-header');

// Вешаю клик на все "шапки" аккордеона для открытия/закрытия элементов

allElems.forEach((elem)=>{
  elem.addEventListener('click', function () {

    const parentElem = elem.parentNode;
    const contentBlock = parentElem.querySelector('.accordion__item-content');
    const currentToggle = parentElem.querySelector('.accordion__toggle');

    if (typeof (accordionItemContent) !== 'undefined' && accordionItemContent !== null) {
      accordionItemContent.forEach(function (item) {
        item.classList.add('close');
      });
    }

    if (typeof (accordionToggle) !== 'undefined' && accordionToggle !== null) {
      accordionToggle.forEach(function (item) {
        item.classList.add('toggle--close');
      });
    }

    // Открываю скрытый список изменяю вид кнопки

    if (typeof (contentBlock && currentToggle) !== 'undefined' && contentBlock && currentToggle !== null) {
      if (contentBlock.classList.contains('close')) {
        contentBlock.classList.remove('close');
        currentToggle.classList.remove('toggle--close');
        currentToggle.classList.add('toggle--open');
      }
    }
  });
});

// Функция открытия спрятанного текста

if (typeof (aboutCompanyButton && aboutCompanyHide) !== 'undefined' && aboutCompanyButton && aboutCompanyHide !== null) {
  aboutCompanyButton.addEventListener('click', function () {
    const style = aboutCompanyHide.style;
    style.display = (style.display === 'block') ? 'none' : 'block';
  });
}

// Прячу спан если экран меньше 767рх

// if (window.innerWidth < 768) {
//   if (typeof (aboutCompanyButton && aboutCompanySpan) !== 'undefined' && aboutCompanyButton && aboutCompanySpan !== null) {
//     aboutCompanyButton.addEventListener('click', function () {
//       const style = aboutCompanySpan.style;
//       style.display = (style.display === 'block') ? 'none' : 'block';
//     });
//   }
// }

const changes = (screen) => {
  if (screen.matches) {
    if (typeof (aboutCompanyButton && aboutCompanySpan) !== 'undefined' && aboutCompanyButton && aboutCompanySpan !== null) {
      aboutCompanyButton.addEventListener('click', function () {
        const style = aboutCompanySpan.style;
        style.display = (style.display === 'block') ? 'none' : 'block';
      });
    }
  }
};

if (matchMedia) {
  const screen = window.matchMedia('(max-width:767px)');
  screen.addEventListener('change', changes);
  changes(screen);
}

// Функция замены надписи на кнопке

if (typeof (aboutCompanyButton) !== 'undefined' && aboutCompanyButton !== null) {
  aboutCompanyButton.addEventListener('click', function () {
    if (aboutCompanyButton.innerHTML === 'Подробнее') {
      aboutCompanyButton.innerHTML = 'Свернуть';
      return;
    } else {
      aboutCompanyButton.innerHTML = 'Подробнее';
    }
  });
}
