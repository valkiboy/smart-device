const pageFooter = document.querySelector('.page-footer');
const accordionItemContent = document.querySelectorAll('.accordion__item-content');
const accordionToggle = document.querySelectorAll('.accordion__toggle');
const aboutCompanyHide = document.querySelector('.about-company__hide');
const aboutCompanyButton = document.querySelector('.about-company__button');
const aboutCompanySpan = document.querySelector('.about-company span');

const pageBody = document.querySelector('.page-body');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modalToggle = document.querySelector('.modal__toggle');
const feedbackform = document.querySelector('.feedback-form__form');
const modalform = document.querySelector('.modal__form');
const mainNavButton = document.querySelector('.main-nav__button');
const modalName = document.getElementById('modal-name');
const modalPhone = document.getElementById('modal-telephone');
const myName = document.getElementById('name');
const myPhone = document.getElementById('telephone');

const rephone = /([0-9]+)$/;
const rename = /^[a-zA-Zа-яА-Я']+[a-zA-Zа-яА-Я']?$/u;

const getAddClose = (item) => {
  item.classList.add('close');
};

const getToggleClose = (item) => {
  item.classList.add('modal__toggle--close');
};

// Удаляю  класс "no-js" у футера проверив что элемент присутствует

if (typeof (pageFooter) !== 'undefined' && pageFooter !== null) {
  pageFooter.classList.remove('no-js');
}

// Скрываю все списки добавляя класс "close"

if (typeof (accordionItemContent) !== 'undefined' && accordionItemContent !== null) {
  accordionItemContent.forEach(function (item) {
    getAddClose(item);
  });
}

// Добавляю класс "toggle--close" всем кнопкам

if (typeof (accordionToggle) !== 'undefined' && accordionToggle !== null) {
  accordionToggle.forEach(function (item) {
    getToggleClose(item);
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
        getAddClose(item);
      });
    }

    if (typeof (accordionToggle) !== 'undefined' && accordionToggle !== null) {
      accordionToggle.forEach(function (item) {
        getToggleClose(item);
      });
    }

    // Открываю скрытый список изменяю вид кнопки

    if (typeof (contentBlock && currentToggle) !== 'undefined' && contentBlock && currentToggle !== null) {
      if (contentBlock.classList.contains('close')) {
        contentBlock.classList.remove('close');
        currentToggle.classList.remove('modal__toggle--close');
        currentToggle.classList.add('modal__toggle--open');
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

// ----- Сохранения данных в localStorage -----
// --------------------------------------------

function persist(event) {
  let thisArg = event.path[0];
  localStorage.setItem(thisArg.id, thisArg.value);
}

document.querySelectorAll('input').forEach((inputEl) => {
  inputEl.value = localStorage.getItem(inputEl.id);
  inputEl.addEventListener('change', persist);
});

if (typeof (mainNavButton && overlay && modal && pageBody && modalToggle && modalName) !== 'undefined' && mainNavButton && overlay && modal && pageBody && modalToggle && modalName !== null) {

  // Функция открытия модалки

  const getOpenModal = () => {
    overlay.classList.add('overlay--open');
    modal.classList.add('modal--open');
    pageBody.classList.add('modal-open');
    modalName.focus();
  };

  // Функция закрытия модалки

  const getCloseModal = () => {
    overlay.classList.remove('overlay--open');
    modal.classList.remove('modal--open');
    pageBody.classList.remove('modal-open');
  };

  mainNavButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    getOpenModal();
  });

  modalToggle.addEventListener('click', function (evt) {
    evt.preventDefault();
    getCloseModal();
  });
}

// Валидация Имени

if (typeof (myName) !== 'undefined' && myName !== null) {
  const checkNameValidity = () => {
    const textName = myName.value;
    if (textName === '') {
      myName.setCustomValidity('поле обязательное');
    } else if (!rename.test(textName)) {
      myName.setCustomValidity('имя может содержать только буквы');
    } else {
      myName.setCustomValidity('');
    }
    myName.reportValidity();
  };
  myName.addEventListener('input', checkNameValidity);
}

// Валидация телефона

if (typeof (myPhone) !== 'undefined' && myPhone !== null) {
  const checkPhoneValidity = () => {
    const textPhone = myPhone.value;
    if (textPhone === '') {
      myPhone.setCustomValidity('поле обязательное');
    } else if (!rephone.test(textPhone)) {
      myPhone.setCustomValidity('номер телефона должен содержать только цифры');
    } else if (textPhone.length !== 17) {
      myPhone.setCustomValidity('введите 10 цифр телефона');
    } else {
      myPhone.setCustomValidity('');
    }
    myPhone.reportValidity();
  };
  myPhone.addEventListener('input', checkPhoneValidity);
}

// Валидация Имени модалки

if (typeof (modalName) !== 'undefined' && modalName !== null) {
  const checkNameValidity = () => {
    const textName = modalName.value;
    if (textName === '') {
      modalName.setCustomValidity('поле обязательное');
    } else if (!rename.test(textName)) {
      modalName.setCustomValidity('имя может содержать только буквы');
    } else {
      modalName.setCustomValidity('');
    }
    modalName.reportValidity();
  };
  modalName.addEventListener('input', checkNameValidity);
}

// Валидация телефона модалки

if (typeof (modalPhone) !== 'undefined' && modalPhone !== null) {
  const checkPhoneValidity = () => {
    const textPhone = modalPhone.value;
    if (textPhone === '') {
      modalPhone.setCustomValidity('поле обязательное');
    } else if (!rephone.test(textPhone)) {
      modalPhone.setCustomValidity('номер телефона должен содержать только цифры');
    } else if (textPhone.length !== 17) {
      modalPhone.setCustomValidity('введите 10 цифр телефона');
    } else {
      modalPhone.setCustomValidity('');
    }
    modalPhone.reportValidity();
  };
  modalPhone.addEventListener('input', checkPhoneValidity);
}

// Отправка формы

if (typeof (feedbackform) !== 'undefined' && feedbackform !== null) {
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    fetch(
        'https://echo.htmlacademy.ru/',
        {
          method: 'POST',
          body: formData,
        }
    );
    evt.target.reset();
  };
  feedbackform.addEventListener('submit', handleFormSubmit);
}

// Отправка модалки

if (typeof (modalform) !== 'undefined' && modalform !== null) {
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    fetch(
        'https://echo.htmlacademy.ru/',
        {
          method: 'POST',
          body: formData,
        }
    );
    evt.target.reset();
  };
  modalform.addEventListener('submit', handleFormSubmit);
}

// Добавление маски и закрывающей скобки телефону модалки

if (typeof (modalPhone) !== 'undefined' && modalPhone !== null) {

  window.addEventListener('DOMContentLoaded', function () {
    function setCursorPosition(pos, elem) {
      elem.focus();
      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        let range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    }

    let isDel = false;
    let isBack = false;
    function mask(event) {
      let curentPosition = -1;
      if (event.type === 'keyup') {
        curentPosition = modalPhone.selectionStart;
      }
      let matrix = '+7 (___) ___ ____';
      let i = 0;
      let def = matrix.replace(/\D/g, '');
      let val = modalPhone.value.replace(/\D/g, '');

      if (def.length >= val.length) {
        val = def;
      }

      const numb = /[_\d]/;

      modalPhone.value = matrix.replace(/./g, function (a) {

        if (numb.test(a) && i <= val.length) {
          return val.charAt(i++);
        } else if (i < val.length) {
          return a;
        } else if (i++ === 6 && val.length === 4 && event.keyCode !== 8 && event.keyCode !== '') {
          return ')';
        } else {
          return '';
        }
      });

      isBack = isDel = false;
      if (event.keyCode === 8) {
        isBack = true;
      } else if (event.keyCode === 46) {
        isDel = true;
      }
      if (event.type === 'blur') {
        if (modalPhone.value.length === 2) {
          modalPhone.value = '';
        }
      } else if (curentPosition !== -1) {
        if (isDel || isBack) {
          setCursorPosition(curentPosition, modalPhone);
        }
      } else if (event.type === 'focus') {
        setCursorPosition(modalPhone.value.length, modalPhone);
      }
    }
    modalPhone.addEventListener('focus', mask, false);
    modalPhone.addEventListener('blur', mask, false);
    modalPhone.addEventListener('keyup', mask, false);
  });
}

if (typeof (myPhone) !== 'undefined' && myPhone !== null) {

  window.addEventListener('DOMContentLoaded', function () {
    function setCursorPosition(pos, elem) {
      elem.focus();
      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        let range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    }

    let isDel = false;
    let isBack = false;
    function mask(event) {
      let curentPosition = -1;
      if (event.type === 'keyup') {
        curentPosition = myPhone.selectionStart;
      }
      let matrix = '+7 (___) ___ ____';
      let i = 0;
      let def = matrix.replace(/\D/g, '');
      let val = myPhone.value.replace(/\D/g, '');

      if (def.length >= val.length) {
        val = def;
      }

      const numb = /[_\d]/;

      myPhone.value = matrix.replace(/./g, function (a) {

        if (numb.test(a) && i <= val.length) {
          return val.charAt(i++);
        } else if (i < val.length) {
          return a;
        } else if (i++ === 6 && val.length === 4 && event.keyCode !== 8 && event.keyCode !== '') {
          return ')';
        } else {
          return '';
        }
      });

      isBack = isDel = false;
      if (event.keyCode === 8) {
        isBack = true;
      } else if (event.keyCode === 46) {
        isDel = true;
      }
      if (event.type === 'blur') {
        if (myPhone.value.length === 2) {
          myPhone.value = '';
        }
      } else if (curentPosition !== -1) {
        if (isDel || isBack) {
          setCursorPosition(curentPosition, myPhone);
        }
      } else if (event.type === 'focus') {
        setCursorPosition(myPhone.value.length, myPhone);
      }
    }
    myPhone.addEventListener('focus', mask, false);
    myPhone.addEventListener('blur', mask, false);
    myPhone.addEventListener('keyup', mask, false);
  });
}
