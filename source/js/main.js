const pageFooter = document.querySelector('.page-footer');
const accordionItemContent = document.querySelectorAll('.accordion__item-content');
const accordionToggle = document.querySelectorAll('.accordion__toggle');

// Удаляю  класс "no-js" у футера проверив что элемент присутствует

if (typeof (pageFooter) !== 'undefined' && pageFooter !== null) {
  pageFooter.classList.remove('no-js');
}

// Добавляю класс "close" всем спискам в аккордеона проверив что элементы присутствуют

if (typeof (accordionItemContent) !== 'undefined' && accordionItemContent !== null) {
  accordionItemContent.forEach(function (item) {
    item.classList.add('close');
  });
}

// Добавляю класс "toggle--close" всем кнопкам в аккордеоне проверив что элементы есть

if (typeof (accordionToggle) !== 'undefined' && accordionToggle !== null) {
  accordionToggle.forEach(function (item) {
    item.classList.add('toggle--close');
  });
}

const allElems = document.querySelectorAll('.accordion__item-header');

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

    if (typeof (contentBlock && currentToggle) !== 'undefined' && contentBlock && currentToggle !== null) {
      if (contentBlock.classList.contains('close')) {
        contentBlock.classList.remove('close');
        currentToggle.classList.remove('toggle--close');
        currentToggle.classList.add('toggle--open');
      }
    }
  });
});
