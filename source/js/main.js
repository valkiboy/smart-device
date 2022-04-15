const pageFooter = document.querySelector('.page-footer');
const pageFooterList = pageFooter.querySelectorAll('.page-footer__list');
const pageFooterToggle = pageFooter.querySelectorAll('.page-footer__toggle');
const siteSectionsToggle = pageFooter.querySelector('.site-sections__toggle');
const ourOfficeToggle = pageFooter.querySelector('.our-office__toggle');
const siteSectionsList = pageFooter.querySelector('.site-sections__list');
const ourOfficeList = pageFooter.querySelector('.our-office__list');

// Удаляю  класс "no-js" у футера проверив что элемент присутствует
// ----------------------------------------------------------------

if (typeof (pageFooter) !== 'undefined' && pageFooter !== null) {
  pageFooter.classList.remove('no-js');
}

// Добавляю класс "close" всем спискам в футере проверив что элементы присутствуют
// -------------------------------------------------------------------------------

if (typeof (pageFooterList) !== 'undefined' && pageFooterList !== null) {
  pageFooterList.forEach(function (item) {
    item.classList.add('close');
  });
}

// Добавляю класс "toggle--close" всем кнопкам в футере проверив что элементы есть
// -------------------------------------------------------------------------------

if (typeof (pageFooterToggle) !== 'undefined' && pageFooterToggle !== null) {
  pageFooterToggle.forEach(function (item) {
    item.classList.add('toggle--close');
  });
}

// Функция меняет кнопку закрыто на открыто и открывает параграф или наоборот
// закрывает параграф и меняет кнопку на закрыто проиерив есть ли элементы в секции "site-sections"
// ------------------------------------------------------------------------------------------------

if (typeof (siteSectionsToggle && siteSectionsList) !== 'undefined' && siteSectionsToggle && siteSectionsList !== null) {

  const getOpenSiteSectionsList = () => {
    if (siteSectionsToggle.classList.contains('toggle--close')) {
      siteSectionsToggle.classList.remove('toggle--close');
      siteSectionsToggle.classList.add('toggle--open');
      siteSectionsList.classList.remove('close');
    } else {
      siteSectionsToggle.classList.add('toggle--close');
      siteSectionsToggle.classList.remove('toggle--open');
      siteSectionsList.classList.add('close');
    }
  };

  // навешиваю лисенер на кнопку для активации функции и закрытия другого параграфа с кнопкой проверив их наличие
  // ------------------------------------------------------------------------------------------------------------

  siteSectionsToggle.addEventListener('click', function () {
    getOpenSiteSectionsList();
    if (typeof (ourOfficeToggle && ourOfficeList) !== 'undefined' && ourOfficeToggle && ourOfficeList !== null) {
      ourOfficeToggle.classList.add('toggle--close');
      ourOfficeList.classList.add('close');
    }
  });
}

// Функция меняет кнопку закрыто на открыто и открывает параграф или наоборот
// закрывает параграф и меняет кнопку на закрыто проиерив есть ли элементы в секции "site-sections"
// ------------------------------------------------------------------------------------------------

if (typeof (ourOfficeToggle && ourOfficeList) !== 'undefined' && ourOfficeToggle && ourOfficeList !== null) {

  const getOpenOurOfficeList = () => {
    if (ourOfficeToggle.classList.contains('toggle--close')) {
      ourOfficeToggle.classList.remove('toggle--close');
      ourOfficeToggle.classList.add('toggle--open');
      ourOfficeList.classList.remove('close');
    } else {
      ourOfficeToggle.classList.add('toggle--close');
      ourOfficeToggle.classList.remove('toggle--open');
      ourOfficeList.classList.add('close');
    }
  };

  // навешиваю лисенер на кнопку для активации функции и закрытия другого параграфа с кнопкой проверив их наличие
  // ------------------------------------------------------------------------------------------------------------

  ourOfficeToggle.addEventListener('click', function () {
    getOpenOurOfficeList();
    if (typeof (siteSectionsToggle && siteSectionsList) !== 'undefined' && siteSectionsToggle && siteSectionsList !== null) {
      siteSectionsToggle.classList.add('toggle--close');
      siteSectionsList.classList.add('close');
    }
  });
}
