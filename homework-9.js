"use strict";

/*
4. К Форме, которая прикреплена в футере - добавить логику:
email должен соответствовать стандартам (добавить валидацию), если он не заполнен - форма не отправляется.
Кнопка "Подписаться" и есть "отправкой формы", при нажатии на которую мы будем выводить консоль лог в виде объекта:  { email: 'введенная почта' }
*/

const emailForm = document.querySelector("#email-form");
emailForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
});

/*
5. Создать кнопку "Регистрация". Создать модальное окно, используя классы "modal, modal-showed".
Логика такая: при нажатии на кнопку у нас открывается модальное окно путем добавления modal-showed к div с классом modal.
Не забываем добавить кнопку для закрытия модалки (крестик в углу).
Важные правила создания модалки:
1) Задний фон должен быть затемнён, но не полностью черный (Создаем класс overlay, который будет затемнять всю страницу)
2) Модальное окно находиться ровно по центру страницы, независимо от масштаба
*/

const modal = document.querySelector("#modal-window");
const btn = document.querySelector("#registration");
const span = document.querySelector(".close-button");
const overlay = document.querySelector(".overlay");

btn.onclick = () => {
  modal.classList.add("modal-showed");
  overlay.style.display = "block";
};

span.onclick = () => {
  modal.classList.remove("modal-showed");
  overlay.style.display = "none";
};

/*
6. Создать форму для регистрации внутри модального окна. Она должна содержать поля: имя, фамилия, дата рождения, логин, пароль, повторение пароля.
Используйте <label> для того, что бы указать пользователю, какое поле за что отвечает.
Также важно использовать placeholder (обо всем этом можно будет почитать в документации в конце поста) Разрешается добавить поля на ваше усмотрение.
Все поля должны иметь валидацию. Если пользователь ввел два разных пароля или форма невалидна
(используем метод checkValidity()) - мы должны предупредить его о том, что регистрация отклонена.
Если регистрация успешна - выводим значения формы в лог, как в задании №4.
Дополнительно мы должны добавить к этому объекту свойство createdOn и указать туда время создания (используем сущность new Date()).
Также создайте внешнюю переменную user и присвойте ей этот объект. После успешной регистрации - модалка должны закрыться.
*/

const registrationForm = document.querySelector(".registration-form");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  data.createdOn = new Date();


  if (data.password !== data["repeat-password"]) {
    alert("Введённые пароли не совпадают!");
  } else if (!form.checkValidity()) {
    alert("Форма регистрации заполнена неверно!");
  } else {
    const user = data;
    console.log(user);
    modal.classList.remove("modal-showed");
    overlay.style.display = "none";
  }
});

/*
7. Добавить к пулл-реквесту видео с работой форм, модального окна и сверстанного футера.
Подсказка для тех, кому тяжело с созданием модального окна:
Изначально мы создаем класс modal со всеми нужными стилями, только ставим display: none по умолчанию.
modal-showed будет иметь внутри себя только 1 свойство - display: block.
При добавлении данного класса (через classList) мы будем отображать модальное окно.
P.S. - обязательно используйте свойство z-index для оверлея и модалки, иначе они будут перекрывать друг друга.
*/
