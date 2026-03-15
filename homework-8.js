"use strict";

import { productCards } from "./product-cards.js";

/*
1. Как и в прошлых задания - создаем отдельный файл для homework-8 и подключаем его в HTML с атрибутом type = module (что бы работали импорты)

2. Создаем файл js, где будет хранится массив объектов, которые представляют собой продуктовые карточки из вёрстки
(имейте ввиду, UI-данные не относятся к данным продукта. Гуглите). Вам нужно описать полностью объект
и продублировать его для всех карточек и после импортировать в homework-8 для дальнейшей работы с ним.

3. По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек.  (Посмотрите сразу задание 5)

4. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание
*/

const products = productCards.reduce((acc, product) => {
  acc.push({ [product.name]: product.descr });
  return acc;
}, []);

/*
5*. Реализовать функцию, которая при старте страницы выводит сообщение (через функцию prompt) "Сколько карточек отобразить?
От 1 до 5" и в зависимости от результата - будет выводить введенное количество. Должна быть защита от ввода других значений (проверка if).
То-есть: у нас будет 2 функции, одна возвращает количество карточек, которое нужно ввести, другая - рендерить эти карточки (принимая массив аргументом)
P.S. - визуально, карточки у вас не должны поменяться вообще.
*/

const cardsPerPageCount = getCardsCount();
const cardsPerPage = productCards.slice();
cardsPerPage.splice(cardsPerPageCount);
renderCards(cardsPerPage);

function getCardsCount() {
  while (true) {
    const cardsPerPageCount = +prompt("Сколько карточек отобразить? От 1 до 5");
    if (cardsPerPageCount >= 1 && cardsPerPageCount <= 5) {
      return cardsPerPageCount;
    } else {
      alert("Введите число от 1 до 5");
    }
  }
}
function renderCards(cardsPerPage) {
  const productCardWrapper = document.querySelector(".product-card-wrapper");
  const productCardTemplate = document.querySelector(".product-card-template");

  cardsPerPage.forEach((productCard) => {
    const productCardClone = productCardTemplate.content.cloneNode(true);
    const img = productCardClone.querySelector(".product-card__img").src.split(" ");
    const imgPath = img[0];
    const imgExtension = img[1];
    productCardClone.querySelector(".product-card__img").src = imgPath + productCard.img + imgExtension;
    productCardClone.querySelector(".product-card__img").alt = productCard.name;
    productCardClone.querySelector(".product-card__skin-type").textContent = productCard.skinType;
    productCardClone.querySelector(".product-card__name").textContent = productCard.name;
    productCardClone.querySelector(".product-card__descr").textContent = productCard.descr;
    productCard.ingredients.forEach((ingredient) => {
      const li = document.createElement("li");
      li.classList.add("product-card__ingredients-elem");
      li.textContent = ingredient;
      productCardClone.querySelector(".product-card__ingredients-list").appendChild(li);
    });
    const currency = productCardClone.querySelector(".product-card__price").textContent;
    productCardClone.querySelector(".product-card__price").textContent = productCard.price + currency;
    productCardWrapper.appendChild(productCardClone);
  });
}
