"use strict";

import { productCards } from "./product-cards.js";

/*
1. Как и в прошлых задания - создаем отдельный файл для homework-8 и подключаем его в HTML с атрибутом type = module (что бы работали импорты)

2. Создаем файл js, где будет хранится массив объектов, которые представляют собой продуктовые карточки из вёрстки
(имейте ввиду, UI-данные не относятся к данным продукта. Гуглите). Вам нужно описать полностью объект
и продублировать его для всех карточек и после импортировать в homework-8 для дальнейшей работы с ним.

3. По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек.  (Посмотрите сразу задание 5)

4. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

5*. Реализовать функцию, которая при старте страницы выводит сообщение (через функцию prompt) "Сколько карточек отобразить?
От 1 до 5" и в зависимости от результата - будет выводить введенное количество. Должна быть защита от ввода других значений (проверка if).
То-есть: у нас будет 2 функции, одна возвращает количество карточек, которое нужно ввести, другая - рендерить эти карточки (принимая массив аргументом)

P.S. - визуально, карточки у вас не должны поменяться вообще.
*/

const productCardWrapper = document.querySelector(".product-card-wrapper");
console.log(productCardWrapper);
const productCardTemplate = document.querySelector(".product-card-template");
console.log(productCardTemplate);

productCards.forEach(productCard => {
  const productCardClone = productCardTemplate.content.cloneNode(true);
  productCardClone.querySelector(".product-card__img").src = productCard.img;
  productCardClone.querySelector(".product-card__img").alt = productCard.name;
  productCardClone.querySelector(".product-card__for-skin").textContent = productCard.forSkin;
  productCardClone.querySelector(".product-card__name").textContent = productCard.name;
  productCardClone.querySelector(".product-card__descr").textContent = productCard.descr;
  productCardClone.querySelector(".product-card__ingredients").textContent = productCard.ingredients;
  productCardClone.querySelector(".product-card__price").textContent = productCard.price + productCardClone.querySelector(".product-card__price").textContent;
  productCardWrapper.appendChild(productCardClone);
})
console.log(productCardWrapper);