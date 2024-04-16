// Header плавный скрол по навигации
let headLinks = document.querySelectorAll(".header__nav-link");
let headItems = document.querySelectorAll(".header__nav-item");

for (const link of headLinks) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
  });
}

// let titleCatalog = document.querySelector('#catalog')
// console.log(titleCatalog);
// let distanseToCatalog = titleCatalog.getBoundingClientRect().top
// console.log(distanseToCatalog);
// console.log(scrollY);

for (const item of headItems) {
  item.addEventListener("click", function () {
    let title = document.querySelector("#" + item.dataset.goto);
    let distanceToTitle = title.getBoundingClientRect().top + scrollY - 30;

    window.scrollTo({
      top: distanceToTitle,
      left: 0,
      behavior: "smooth",
    });
  });
}

// Header кнопка поиска
let searchBtn = document.querySelector(".header__search-btn");

searchBtn.onclick = function () {
  console.log("Поиск");
};

// Hero кнопка подписаться на рассылку
let heroBtn = document.querySelector(".hero__btn");
let contactTForm = document.querySelector(".contacts__form");
heroBtn.onclick = function () {
  let distanteToForm = contactTForm.getBoundingClientRect().top + scrollY;

  window.scrollTo({
    top: distanteToForm,
    left: 0,
    behavior: "smooth",
  });
};

// Galery переключение изображений
let radio = document.querySelectorAll('input[name="galery"]');
let boxArt1 = document.querySelector(".img1");
let boxArt2 = document.querySelector(".img2");
let boxArt3 = document.querySelector(".img3");
radio.forEach((radio) =>
  radio.addEventListener("change", function () {
    if (radio.value === "XIX") {
      boxArt1.style.opacity = 1;
      boxArt2.style.opacity = 0;
      boxArt3.style.opacity = 0;
    }
    if (radio.value === "XX") {
      boxArt1.style.opacity = 0;
      boxArt2.style.opacity = 1;
      boxArt3.style.opacity = 0;
    }
    if (radio.value === "now") {
      boxArt1.style.opacity = 0;
      boxArt2.style.opacity = 0;
      boxArt3.style.opacity = 1;
    }
  })
);

// Contacts форма и валидация
let inputName = document.querySelector(".contacts__input-name");
let spanName = document.querySelector(".contacts__span-name");
let inputTel = document.querySelector(".contacts__input-tel");
let spanTel = document.querySelector(".contacts__span-tel");
let callBtn = document.querySelector(".contacts__btn");

// Убираю сообщение при вводе чего либо в поле инпута
inputName.addEventListener("input", function () {
  inputName.style.border = "1px solid #333";
  spanName.style.opacity = 0;
});

inputTel.addEventListener("input", function () {
  inputTel.style.border = "1px solid #333";
  spanTel.style.opacity = 0;
});

// Inputmask на поле для телефона
let im = new Inputmask("+7-(999)-999-99-99");
im.mask(inputTel);

// Вешаю событие на кнопки связаться и функция валидации
callBtn.onclick = function () {
  validate();
};

function validate() {
  let resultOfValidate = true;
  // Проверки для имени
  if (inputName.value == "") {
    inputName.style.border = "1px solid red";
    // spanName.style.opacity = 1
    resultOfValidate = false;
  }
  // if (inputName.value.length > 0 & inputName.value.length < 2) {
  if (inputName.value.length == 1) {
    inputName.style.border = "1px solid red";
    // spanName.style.opacity = 1
    spanName.textContent = "Введите полное имя";
    resultOfValidate = false;
  }
  if (inputName.value.length > 20) {
    inputName.style.border = "1px solid red";
    // spanName.style.opacity = 1
    spanName.textContent = "Максимально 20 символов";
    resultOfValidate = false;
  }

  // Проверки для телефона
  if (inputTel.value == "") {
    inputTel.style.border = "1px solid red";
    // spanTel.style.opacity =1
    resultOfValidate = false;
  }
  if (inputTel.value.indexOf("_") != -1) {
    inputTel.style.border = "1px solid red";
    // spanTel.style.opacity =1
    spanTel.textContent = "Введите весь номер";
    resultOfValidate = false;
  }

  // При успехе
  if (resultOfValidate) {
    console.log("Thanks");
    inputName.value = "";
    inputTel.value = "";
  } else {
    console.log("No Thanks");
  }
}
